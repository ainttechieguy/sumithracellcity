import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Booking from '../components/sections/Booking';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import FloatingActions from '../components/sections/FloatingActions';
import SEO from '../components/SEO';
import HomeSEOContent from '../components/sections/HomeSEOContent';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen selection:bg-primary/30 selection:text-primary">
      <SEO 
        title="Sumithra Cell City | Mobile Repair & Apple Service in Sholinganallur"
        description="Professional smartphone repair and Apple product servicing in Sholinganallur, Chennai. Sumithra Cell City has served customers since 2005."
        path="/"
      />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Booking />
      <Faq />
      <Contact />
      <HomeSEOContent />
      <Footer />
      <FloatingActions />
    </main>
  );
}
