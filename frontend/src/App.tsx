import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import ReviewsPage from './pages/ReviewsPage';
import ProcessPage from './pages/ProcessPage';
import GalleryPage from './pages/GalleryPage';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
