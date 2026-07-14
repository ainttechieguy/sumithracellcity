import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const DOMAIN = 'https://sumithracellcity.com';

const appTsxPath = path.join(process.cwd(), 'src', 'App.tsx');

// Excluded routes
const excludedRoutes = ['/admin', '/login', '/error', '*'];

// 1. Read App.tsx
const appTsx = fs.readFileSync(appTsxPath, 'utf8');

// 2. Extract imports to map component names to files
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
const componentToFileMap = {};
let importMatch;
while ((importMatch = importRegex.exec(appTsx)) !== null) {
  const componentName = importMatch[1];
  const relativePath = importMatch[2]; 
  
  if (relativePath.startsWith('./pages/')) {
    componentToFileMap[componentName] = path.join(process.cwd(), 'src', relativePath.substring(2) + '.tsx');
  }
}

// 3. Extract Routes
const routeRegex = /<Route\s+path=['"]([^'"]+)['"]\s+element=\{<([A-Za-z0-9_]+)[^>]*>\}\s*\/>/g;
const extractedRoutes = [];

let routeMatch;
while ((routeMatch = routeRegex.exec(appTsx)) !== null) {
  const routePath = routeMatch[1];
  const componentName = routeMatch[2];
  
  if (!excludedRoutes.includes(routePath)) {
    extractedRoutes.push({
      path: routePath,
      component: componentName,
      file: componentToFileMap[componentName]
    });
  }
}

// 4. Generate URL blocks with intelligent lastmod, priority, and changefreq
const urlBlocks = extractedRoutes.map(route => {
  // 4a. Get lastmod
  let lastmod = new Date().toISOString();
  if (route.file && fs.existsSync(route.file)) {
    try {
      // Priority 1: Git commit date
      const gitDate = execSync(`git log -1 --format="%cI" -- "${route.file}"`).toString().trim();
      if (gitDate) {
        lastmod = new Date(gitDate).toISOString();
      } else {
        // Priority 2: File system modified date (fallback if untracked)
        lastmod = fs.statSync(route.file).mtime.toISOString();
      }
    } catch (err) {
      // Priority 3: Current Build Date (fallback on error)
      try {
        lastmod = fs.statSync(route.file).mtime.toISOString();
      } catch (e) {
        lastmod = new Date().toISOString();
      }
    }
  }

  // 4b. Assign priority and changefreq
  let priority = '0.8';
  let changefreq = 'monthly';

  if (route.path === '/') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (['/services', '/process'].includes(route.path)) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (['/about', '/brands', '/contact'].includes(route.path)) {
    priority = '0.8';
    changefreq = 'monthly';
  } else if (['/gallery', '/reviews'].includes(route.path)) {
    priority = '0.7';
    changefreq = 'weekly';
  }

  // 4c. Format Canonical URL
  let loc = DOMAIN;
  if (route.path === '/') {
    loc += '/';
  } else {
    loc += route.path;
  }

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

// 5. Compile and Validate XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join('\n')}
</urlset>`;

function validateSitemap(xml) {
  const errors = [];
  
  if (!xml.includes('<?xml version="1.0"')) errors.push('Missing XML declaration');
  if (!xml.includes('<urlset')) errors.push('Missing <urlset> tag');
  
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let locMatch;
  const urls = new Set();
  
  while ((locMatch = locRegex.exec(xml)) !== null) {
    const url = locMatch[1];
    if (!url.startsWith('https://')) {
      errors.push(`URL must use HTTPS: ${url}`);
    }
    if (url.includes('localhost')) {
      errors.push(`URL contains localhost: ${url}`);
    }
    if (urls.has(url)) {
      errors.push(`Duplicate URL found: ${url}`);
    }
    urls.add(url);
  }
  
  if (errors.length > 0) {
    throw new Error('Sitemap Validation Failed:\n' + errors.join('\n'));
  }
}

try {
  validateSitemap(sitemapContent);
  console.log('✓ Sitemap passed validation checks.');
} catch (e) {
  console.error(e.message);
  process.exit(1);
}

const robotsContent = `# https://sumithracellcity.com/robots.txt

User-agent: *
Allow: /
# Protect internal routes
Disallow: /admin

# Explicitly allow Google crawler
User-agent: Googlebot
Allow: /

# Explicitly allow Bing crawler
User-agent: Bingbot
Allow: /

# Explicitly allow static assets (CSS, JS, Images, Fonts) just in case
Allow: /assets/
Allow: /images/

Sitemap: ${DOMAIN}/sitemap.xml`;

const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('✓ Generated public/sitemap.xml successfully!');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✓ Generated public/robots.txt successfully!');
