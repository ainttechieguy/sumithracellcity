import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp, Calendar, Phone } from 'lucide-react';
import { businessData } from '../../data/business';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      setShowTop(totalScroll > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[100] origin-left"
      >
        <motion.div 
          className="h-full bg-primary"
          style={{ scaleX: scrollProgress }}
        />
      </motion.div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-white/10 p-4 z-40 flex gap-4 safe-area-bottom pb-6">
        <a 
          href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/10 text-secondary dark:text-white font-bold flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <a 
          href="#booking"
          className="flex-1 py-3 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" /> Book
        </a>
      </div>

      {/* Desktop/Global Floating Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 items-end pointer-events-none mb-16 md:mb-0">
        
        {/* Scroll to Top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#111] text-secondary dark:text-white border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors pointer-events-auto"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <motion.a
          href={`https://wa.me/${businessData.contact.whatsapp}?text=Hi%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20repair%20service.`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center pointer-events-auto group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-white dark:bg-[#111] text-secondary dark:text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100 dark:border-white/10 pointer-events-none">
            Chat with us
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#111] rotate-45 border-r border-t border-gray-100 dark:border-white/10"></div>
          </div>
        </motion.a>

      </div>
    </>
  );
}
