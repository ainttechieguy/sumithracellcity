import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Process from '../components/sections/Process';
import Tracker from '../components/sections/Tracker';

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen">
      <Helmet>
        <title>Our Repair Process | Sumithra Cell City</title>
        <meta name="description" content="Learn about our transparent, 7-step mobile repair process. From diagnostic to delivery, we ensure the highest quality of service." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <Process />
        <Tracker />
      </div>
      <Footer />
    </main>
  );
}
