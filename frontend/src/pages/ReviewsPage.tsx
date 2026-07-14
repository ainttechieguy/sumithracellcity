import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Customer Reviews & Transformations | Sumithra Cell City</title>
        <meta name="description" content="Read real customer reviews and see our before & after mobile repair transformations at Sumithra Cell City." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <Reviews />
        <BeforeAfter />
      </div>
      <Footer />
    </main>
  );
}
