import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const BrandsPage = React.lazy(() => import('./pages/BrandsPage'));
const ReviewsPage = React.lazy(() => import('./pages/ReviewsPage'));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const Admin = React.lazy(() => import('./pages/Admin'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const IphoneScreenReplacement = React.lazy(() => import('./pages/seo/IphoneScreenReplacement'));
const IphoneBatteryReplacement = React.lazy(() => import('./pages/seo/IphoneBatteryReplacement'));
const MobileRepairSholinganallur = React.lazy(() => import('./pages/seo/MobileRepairSholinganallur'));
const AppleDeviceServiceOmr = React.lazy(() => import('./pages/seo/AppleDeviceServiceOmr'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has painted before trying to scroll to the element
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/iphone-screen-replacement-sholinganallur" element={<IphoneScreenReplacement />} />
            <Route path="/iphone-battery-replacement-sholinganallur" element={<IphoneBatteryReplacement />} />
            <Route path="/mobile-repair-sholinganallur" element={<MobileRepairSholinganallur />} />
            <Route path="/apple-device-service-omr" element={<AppleDeviceServiceOmr />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
