import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import Process from '../components/sections/Process';
import Booking from '../components/sections/Booking';
import Faq, { faqs } from '../components/sections/Faq';
import SEO from '../components/SEO';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function ProcessPage() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen">
      <SEO 
        title="Repair Process & FAQs | Sumithra Cell City"
        description="Understand our transparent smartphone repair process and find answers to frequently asked questions about our services."
        path="/process"
        faqData={faqs}
      />
      <Navbar />
      <div className="pt-20">
        <Process />
        <Booking />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
