import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Services from '../components/sections/Services';
import AppleService from '../components/sections/AppleService';
import Accessories from '../components/sections/Accessories';
import Breadcrumbs from '../components/Breadcrumbs';
import ServicesSEOContent from '../components/sections/ServicesSEOContent';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen pt-24">
      <SEO 
        title="Mobile Repair Services in Sholinganallur | Sumithra Cell City"
        description="Expert mobile phone repair, screen replacement, battery service, and Apple product servicing at Sumithra Cell City in Chennai."
        path="/services"
      />
      <Navbar />
      <Breadcrumbs />
      <div className="pt-10">
        <Services />
        <AppleService />
        <Accessories />
      </div>
      <ServicesSEOContent />
      <Footer />
    </main>
  );
}
