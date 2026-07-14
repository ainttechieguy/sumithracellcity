import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessData } from '../data/business';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = businessData.navLinks;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-sm' 
          : 'py-2 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group ml-6 md:ml-10">
          <img 
            src="/logo.png" 
            alt="Sumithra Cell City" 
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'h-16 md:h-24' : 'h-16 md:h-28'
            }`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+919962333311"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-md"
          >
            <div className="relative w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
              <div className="absolute inset-0 rounded-full border border-green-500/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
              <Phone className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 tracking-wide">
              +91-99623 33311
            </span>
          </a>
          <Link to="/#contact" className="px-6 py-2.5 bg-secondary dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:scale-105 transition-transform inline-block shadow-lg shadow-secondary/20 dark:shadow-white/10">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-secondary dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200/50 dark:border-white/10 absolute w-full top-full left-0 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a 
                  href="tel:+919962333311"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full font-bold shadow-inner transition-all hover:bg-green-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <div className="absolute inset-0 rounded-full border border-green-500/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    <Phone className="w-5 h-5 relative z-10" />
                  </div>
                  +91-99623 33311
                </a>
                <Link 
                  to="/#contact" 
                  className="px-6 py-3 bg-primary text-white rounded-full text-center font-bold shadow-lg hover:scale-[1.02] transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
