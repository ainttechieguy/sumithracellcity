import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Phone, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';

export default function NotFound() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen flex flex-col">
      <SEO 
        title="Page Not Found | Sumithra Cell City"
        description="The page you are looking for does not exist. Return to Sumithra Cell City home or contact us."
        path="/404"
      />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-32 px-6">
        <div className="max-w-2xl w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500 mb-6"
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12"
          >
            The page you're looking for doesn't exist or has been moved. Don't worry, we can still help you get your device fixed!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center shadow-lg shadow-primary/20"
            >
              <Home className="w-5 h-5" />
              Back Home
            </Link>
            
            <a 
              href="tel:+919962333311"
              className="flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            
            <a 
              href="https://wa.me/919962333311"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-bold hover:bg-[#25D366]/20 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
