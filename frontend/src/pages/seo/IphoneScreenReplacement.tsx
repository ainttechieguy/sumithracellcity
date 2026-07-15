import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Smartphone, ShieldCheck, Clock, MapPin, Wrench, CheckCircle, Navigation, MessageSquare } from 'lucide-react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { businessData } from '../../data/business';

export default function IphoneScreenReplacement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does an iPhone screen replacement take?", a: "Many standard screen replacements may be completed on the same day, depending on the model, part availability and device condition. Usually, it takes around 30 to 60 minutes once started." },
    { q: "Will my data be affected?", a: "No, a screen replacement does not delete or erase your data. However, we always recommend backing up your iPhone before any repair just to be safe." },
    { q: "Do you replace only the glass or the complete display?", a: "This depends on the damage. If only the outer glass is broken but the touch and OLED/LCD are fully functional, we can perform a glass replacement. If the display has lines, black spots, or touch issues, a complete display replacement is required." },
    { q: "Can you repair touch issues?", a: "Yes, touch unresponsiveness (ghost touch) is typically caused by a damaged digitizer, which is resolved by replacing the display module." },
    { q: "Do you provide a service warranty?", a: "Yes, we provide a reliable warranty on our screen replacements covering manufacturing defects and touch issues." },
    { q: "Should I back up my iPhone before repair?", a: "While data is not lost during a screen repair, backing up your device to iCloud or a computer is always a highly recommended best practice before handing it over for any service." },
    { q: "Can I call before visiting?", a: "Absolutely. You can call us or WhatsApp us using the buttons below to confirm part availability for your specific iPhone model before visiting." },
    { q: "Where is the store located?", a: "We are located at 24, Rajiv Gandhi Salai, Near Karur Vysya Bank, Sholinganallur, Chennai. You can use the 'Get Directions' button to navigate via Google Maps." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "iPhone Screen Replacement",
    "description": "Professional iPhone display diagnosis and screen replacement services in Sholinganallur, Chennai.",
    "provider": {
      "@id": "https://sumithracellcity.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sholinganallur"
    },
    "serviceType": "Mobile Phone Repair",
    "url": "https://sumithracellcity.com/iphone-screen-replacement-sholinganallur"
  };

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen font-sans" style={{ fontFamily: 'Calibri, sans-serif' }}>
      <SEO 
        title="iPhone Screen Replacement in Sholinganallur | Sumithra Cell City"
        description="Professional iPhone screen replacement in Sholinganallur, Chennai. Get cracked, damaged or unresponsive iPhone displays diagnosed and repaired."
        path="/iphone-screen-replacement-sholinganallur"
        faqData={faqs}
        serviceSchema={serviceSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-[#0a0a0a] dark:to-[#111] -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm">
              <Smartphone className="w-4 h-4" />
              <span>Apple iPhone Display Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              iPhone Screen Replacement in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sholinganallur</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Cracked screen, touch issues, display lines or a black screen? Sumithra Cell City provides professional iPhone display diagnosis and screen replacement services in Sholinganallur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                Book iPhone Screen Service
              </a>
              <a href={`tel:${businessData.contact.phone}`} className="px-8 py-4 bg-gray-100 dark:bg-white/5 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-center text-gray-900 dark:text-white">
                Call Now
              </a>
              <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20iPhone%20screen%20replacement.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] rounded-full font-bold hover:bg-[#25D366]/20 transition-colors text-center">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-[2rem] blur-3xl -z-10" />
            <img 
              src="/seo/iphone-screen.png" 
              alt="iPhone Screen Replacement Service" 
              className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-white/20 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common iPhone Display Problems</h2>
            <p className="text-gray-600 dark:text-gray-400">If you are experiencing any of these issues, your display module may need replacement.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Cracked screen or broken glass",
              "Touch not responding (Ghost touch)",
              "Vertical or horizontal display lines",
              "Black screen or no display output",
              "Flickering display",
              "Display colour issues or bleeding ink",
              "Screen separation from the frame",
              "Damaged OLED or LCD panel"
            ].map((problem, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <p className="font-medium text-gray-800 dark:text-gray-200">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">iPhone Screen Repair Process</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">We follow a strict, transparent process to ensure your device is handled with the utmost care.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Initial inspection", desc: "We visually inspect the physical damage." },
                  { title: "Display diagnosis", desc: "Testing touch response and panel health." },
                  { title: "Repair recommendation", desc: "Suggesting glass vs complete display replacement." },
                  { title: "Customer approval", desc: "Transparent cost estimate before any work begins." },
                  { title: "Screen replacement", desc: "Careful removal and installation of the new display." },
                  { title: "Touch and display testing", desc: "Post-installation diagnostic checks." },
                  { title: "Final quality check", desc: "Handing the device back to you in perfect condition." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      {i < 6 && <div className="w-0.5 h-full bg-blue-100 dark:bg-blue-900/30 my-2" />}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Models Supported</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span>Recent iPhone models</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span>iPhone Pro models</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span>iPhone Plus models</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span>Older supported iPhone models</span></li>
              </ul>
              
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Repair Time
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Many standard screen replacements may be completed on the same day, depending on the model, part availability and device condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sumithra Cell City</h2>
            <p className="text-gray-600 dark:text-gray-400">Trusted by thousands of customers in Chennai's IT Corridor.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Serving since 2005",
              "Transparent diagnosis",
              "Clear pricing before repair",
              "Skilled technicians",
              "Quality replacement options",
              "Device testing after repair",
              "Convenient Sholinganallur location"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white dark:bg-[#111] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="font-bold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-secondary dark:text-white pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary dark:text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary dark:bg-cyan-900/20 -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Need an iPhone Screen Replacement Near Sholinganallur?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href={`tel:${businessData.contact.phone}`} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
              {businessData.contact.phone}
            </a>
            <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20iPhone%20screen%20replacement.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a href="https://maps.google.com/?q=Sumithra%20Cell%20City%2C%2024%2C%20Rajiv%20Gandhi%20Salai%2C%20Sholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-black/20 text-white border border-white/30 rounded-full font-bold hover:bg-black/30 transition-colors">
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
          <p className="text-white/60 pt-4 text-sm max-w-lg mx-auto leading-relaxed">
            {businessData.contact.address.line1}, {businessData.contact.address.line2}, {businessData.contact.address.city}, {businessData.contact.address.state} {businessData.contact.address.pincode}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
