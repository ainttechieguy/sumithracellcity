import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Brands from '../components/sections/Brands';
import TrustStrip from '../components/sections/TrustStrip';

export default function BrandsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen">
      <Helmet>
        <title>Supported Brands | Sumithra Cell City</title>
        <meta name="description" content="We repair all major smartphone brands including Apple, Samsung, OnePlus, Xiaomi, Vivo, Oppo, and more at our Sholinganallur service center." />
      </Helmet>
      <Navbar />
      
      {/* Brands Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-50 dark:bg-[#111] overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 pattern-grid-lg opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Brands We Repair</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our expert technicians are trained to service devices across all major manufacturers using genuine replacement parts.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <div className="relative z-20">
          <TrustStrip />
        </div>
        <Brands />
      </div>
      <Footer />
    </main>
  );
}
