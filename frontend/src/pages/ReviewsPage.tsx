import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Reviews from '../components/sections/Reviews';
import BeforeAfter from '../components/sections/BeforeAfter';

export default function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen">
      <SEO 
        title="Customer Reviews & Transformations | Sumithra Cell City"
        description="Read real customer reviews and see our before & after mobile repair transformations at Sumithra Cell City in Chennai."
        path="/reviews"
      />
      <Navbar />
      <div className="pt-20">
        <Reviews />
        <BeforeAfter />
      </div>
      <Footer />
    </main>
  );
}
