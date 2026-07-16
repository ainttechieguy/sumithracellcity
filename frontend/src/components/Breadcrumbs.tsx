import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-6 pt-24 pb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 ml-10 md:ml-16">
        <li>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

          return (
            <li key={name} className="flex items-center space-x-2">
              <span>&gt;</span>
              {isLast ? (
                <span className="text-secondary dark:text-white font-medium" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-primary transition-colors">
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
