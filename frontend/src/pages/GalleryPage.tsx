import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Gallery from '../components/sections/Gallery';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen">
      <SEO 
        title="Service Center Gallery | Sumithra Cell City"
        description="Take a look inside our professional mobile repair facility in Sholinganallur. See our storefront, service desk, and completed repairs."
        path="/gallery"
      />
      <Navbar />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
