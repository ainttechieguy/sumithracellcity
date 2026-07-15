import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Smartphone, ShieldCheck, MapPin, CheckCircle, Navigation, MessageSquare, Watch, Laptop, Headphones } from 'lucide-react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { businessData } from '../../data/business';

export default function AppleDeviceServiceOmr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Are you an Apple Authorised Service Centre?", a: "Sumithra Cell City is an independent mobile repair business and is not presented as an Apple Authorised Service Provider. We specialise in Apple product services and provide independent diagnosis and repair support." },
    { q: "Which Apple devices do you service?", a: "We provide diagnosis and repair support for iPhones, iPads, MacBooks, Apple Watches, and AirPods." },
    { q: "Do you repair iPhone screens and batteries?", a: "Yes, we specialize in iPhone screen replacements, battery replacements, charging port repairs, and motherboard diagnostics." },
    { q: "Can you diagnose MacBook issues?", a: "Yes, we can diagnose MacBook display issues, battery degradation, keyboard/trackpad faults, and logic board issues." },
    { q: "Do you service Apple Watch and AirPods?", a: "We provide diagnosis and repair support for Apple Watch screens and batteries, as well as AirPods connectivity and battery issues. Service depends heavily on the specific model and parts availability." },
    { q: "Will my data remain safe?", a: "Your data is not deleted during hardware repairs like screen or battery replacements. We prioritize data privacy and security." },
    { q: "Should I back up my device?", a: "We strongly advise all customers to back up their iPhone, iPad, or MacBook via iCloud or Time Machine before handing it over for any service." },
    { q: "Where are you located near OMR?", a: "We are located at 24, Rajiv Gandhi Salai (OMR), Near Karur Vysya Bank in Sholinganallur. We serve customers from all along the IT Corridor." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apple Device Service",
    "description": "Specialist in Apple Product Services near OMR, Chennai, providing diagnosis and repair support for iPhone, iPad, MacBook, Apple Watch, and AirPods.",
    "provider": {
      "@id": "https://sumithracellcity.com/#business"
    },
    "areaServed": [
      { "@type": "City", "name": "Sholinganallur" },
      { "@type": "City", "name": "OMR" }
    ],
    "serviceType": "Electronics Repair",
    "url": "https://sumithracellcity.com/apple-device-service-omr"
  };

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen font-sans" style={{ fontFamily: 'Calibri, sans-serif' }}>
      <SEO 
        title="Apple Device Service in OMR Chennai | Sumithra Cell City"
        description="Apple device service near OMR for iPhone, iPad, MacBook, Apple Watch and AirPods. Professional diagnosis and repair support in Sholinganallur."
        path="/apple-device-service-omr"
        faqData={faqs}
        serviceSchema={serviceSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#111] -z-10" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gray-200/50 dark:bg-white/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white font-medium text-sm border border-gray-200 dark:border-white/10">
              <Smartphone className="w-4 h-4" />
              <span>Specialist in Apple Product Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Apple Device Service Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-500">OMR, Chennai</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Sumithra Cell City provides specialist diagnosis and repair support for Apple devices near OMR, including iPhone, iPad, MacBook, Apple Watch and AirPods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                Book Apple Service
              </a>
              <a href={`tel:${businessData.contact.phone}`} className="px-8 py-4 bg-gray-100 dark:bg-white/10 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-center text-gray-900 dark:text-white border border-transparent dark:border-white/10">
                Call Now
              </a>
              <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20Apple%20device%20service.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 dark:bg-[#25D366]/20 text-[#25D366] rounded-full font-bold hover:bg-[#25D366]/20 dark:hover:bg-[#25D366]/30 transition-colors text-center">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 0, rotateX: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotateY: 15, rotateX: 5 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            style={{ perspective: 1000 }}
            className="relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-white/10 dark:to-gray-500/20 rounded-[2rem] blur-3xl -z-10" />
            <img 
              src="/seo/apple-service.png" 
              alt="Apple Device Service" 
              className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-gray-200 dark:border-white/10 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Apple Devices</h2>
            <p className="text-gray-400">Comprehensive diagnosis and component-level repair for the Apple ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-[#111] rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
              <Smartphone className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-bold mb-4">iPhone Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Screen replacement</li>
                <li>• Battery replacement</li>
                <li>• Charging issues</li>
                <li>• Camera repair</li>
                <li>• Speaker & microphone repair</li>
                <li>• Face ID diagnosis</li>
                <li>• Back glass replacement</li>
                <li>• Logic board repair</li>
                <li>• Software troubleshooting</li>
              </ul>
            </div>

            <div className="p-8 bg-[#111] rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
              <Laptop className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-bold mb-4">MacBook Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Display service</li>
                <li>• Battery replacement</li>
                <li>• Keyboard issues</li>
                <li>• Trackpad problems</li>
                <li>• Charging problems</li>
                <li>• SSD & storage diagnosis</li>
                <li>• Logic board diagnosis</li>
                <li>• Software troubleshooting</li>
              </ul>
            </div>

            <div className="p-8 bg-[#111] rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
              <Smartphone className="w-10 h-10 text-white mb-6 transform rotate-90" />
              <h3 className="text-xl font-bold mb-4">iPad Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Display problems</li>
                <li>• Battery issues</li>
                <li>• Charging problems</li>
                <li>• Software issues</li>
                <li>• Speaker & microphone issues</li>
              </ul>
            </div>

            <div className="p-8 bg-[#111] rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
              <div className="flex gap-4 mb-6">
                <Watch className="w-10 h-10 text-white" />
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Watch & AirPods</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                We provide independent diagnosis and support for Apple Watch and AirPods connectivity, battery, and physical damage issues, subject to parts availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Sumithra Cell City</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">We combine years of technical expertise with high-quality components to ensure your Apple device is serviced to the highest standard.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Serving customers since 2005", desc: "Over 18 years of trust in the local community." },
                  { title: "Located near OMR", desc: "Easily accessible from anywhere on Rajiv Gandhi Salai." },
                  { title: "Specialist experience", desc: "Deep understanding of Apple logic boards and components." },
                  { title: "Transparent diagnosis", desc: "Clear explanation of the fault before any work begins." },
                  { title: "Quality replacement options", desc: "We use premium components for optimal performance." },
                  { title: "Device testing after service", desc: "Rigorous post-repair quality control checks." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <CheckCircle className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="pb-2">
                      <h3 className="font-bold text-lg text-gray-200">{step.title}</h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Areas Near OMR Served</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our service center in Sholinganallur is perfectly positioned to serve Apple users working and living along the IT corridor, including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Sholinganallur", "Karapakkam", "Thoraipakkam", "Perungudi", "Navalur", "Semmencherry", "Siruseri"].map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-300 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-white pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2 pt-4">
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
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Need Apple Device Service Near OMR?</h2>
          <p className="text-gray-600 text-lg md:text-xl">Drop by Sumithra Cell City for an honest diagnosis and professional service.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href={`tel:${businessData.contact.phone}`} className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
              {businessData.contact.phone}
            </a>
            <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20Apple%20device%20service.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a href="https://maps.google.com/?q=Sumithra%20Cell%20City%2C%2024%2C%20Rajiv%20Gandhi%20Salai%2C%20Sholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-black border border-gray-200 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
          <p className="text-gray-500 pt-4 text-sm max-w-lg mx-auto leading-relaxed">
            {businessData.contact.address.line1}, {businessData.contact.address.line2}, {businessData.contact.address.city}, {businessData.contact.address.state} {businessData.contact.address.pincode}
          </p>
        </div>
      </section>

      <div className="bg-[#0a0a0a]">
        <Footer />
      </div>
    </main>
  );
}
