import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Battery, ShieldCheck, Clock, MapPin, CheckCircle, Navigation, MessageSquare, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { businessData } from '../../data/business';

export default function IphoneBatteryReplacement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How do I know whether my iPhone battery needs replacement?", a: "Signs include fast draining, unexpected shutdowns, slow performance, or the 'Service' warning under Settings > Battery > Battery Health & Charging." },
    { q: "What battery health percentage is considered low?", a: "Apple recommends replacing the battery when the maximum capacity drops below 80%, or if you experience performance throttling." },
    { q: "Will battery replacement delete my data?", a: "No, a battery replacement does not erase your data. Your photos, apps, and settings remain untouched." },
    { q: "How long does the service take?", a: "Many battery replacements may be completed on the same day, depending on the iPhone model and part availability." },
    { q: "Can a swollen battery be repaired?", a: "A swollen battery cannot be repaired and is a severe safety hazard. It must be carefully removed and replaced immediately before it cracks your screen or causes a fire." },
    { q: "Should I back up my phone?", a: "Yes. While replacing a battery does not cause data loss, we strongly recommend backing up your device before handing it over for any physical repair." },
    { q: "Do you provide warranty support?", a: "Yes, we provide a reliable warranty on our replacement batteries to cover any manufacturing defects." },
    { q: "Where is your store located?", a: "We are located at 24, Rajiv Gandhi Salai, Near Karur Vysya Bank, Sholinganallur. You can use the map link at the bottom of this page for directions." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "iPhone Battery Replacement",
    "description": "Professional iPhone battery replacement and health diagnosis in Sholinganallur, Chennai.",
    "provider": {
      "@id": "https://sumithracellcity.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sholinganallur"
    },
    "serviceType": "Mobile Phone Repair",
    "url": "https://sumithracellcity.com/iphone-battery-replacement-sholinganallur"
  };

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen font-sans" style={{ fontFamily: 'Calibri, sans-serif' }}>
      <SEO 
        title="iPhone Battery Replacement in Sholinganallur | Sumithra Cell City"
        description="iPhone battery replacement in Sholinganallur for fast battery drain, shutdowns, overheating and poor battery health. Visit Sumithra Cell City."
        path="/iphone-battery-replacement-sholinganallur"
        faqData={faqs}
        serviceSchema={serviceSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-[#0a0a0a] dark:to-[#111] -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-400/10 dark:bg-green-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium text-sm">
              <Battery className="w-4 h-4" />
              <span>Apple iPhone Battery Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              iPhone Battery Replacement in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Sholinganallur</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Experiencing fast battery drain, unexpected shutdowns, overheating or reduced battery health? Get your iPhone battery professionally checked at Sumithra Cell City.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                Book Battery Service
              </a>
              <a href={`tel:${businessData.contact.phone}`} className="px-8 py-4 bg-gray-100 dark:bg-white/5 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-center text-gray-900 dark:text-white">
                Call Now
              </a>
              <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20iPhone%20battery%20replacement.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] rounded-full font-bold hover:bg-[#25D366]/20 transition-colors text-center">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-[2rem] blur-3xl -z-10" />
            <img 
              src="/seo/iphone-battery.png" 
              alt="iPhone Battery Replacement" 
              className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-white/20 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Signs of degraded battery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Signs Your iPhone Battery Needs Replacement</h2>
            <p className="text-gray-600 dark:text-gray-400">Chemical aging reduces your battery's ability to hold a charge.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Battery drains quickly",
              "Phone shuts down unexpectedly",
              "Battery health warning (<80%)",
              "Device overheating",
              "Slow charging",
              "Swollen battery (screen lifting)",
              "Reduced performance (lag)",
              "Phone does not turn on",
              "Battery percentage jumps suddenly"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center flex-shrink-0">
                  <Battery className="w-5 h-5" />
                </div>
                <p className="font-medium">{problem}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/30 flex gap-6 items-start">
            <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Important Battery Safety Notice</h3>
              <p className="text-red-900/80 dark:text-red-300/80 leading-relaxed">
                A swollen or overheating battery should not be punctured, pressed or charged unnecessarily. If your screen is lifting due to a swollen battery, switch off the device and seek professional assistance immediately to prevent severe damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Battery Diagnosis & Replacement Process</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Every device should be thoroughly inspected before we suggest a replacement.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Device inspection", desc: "Checking overall physical condition." },
                  { title: "Battery health diagnosis", desc: "Analyzing charge cycles and capacity." },
                  { title: "Replacement recommendation", desc: "Advising if replacement is truly necessary." },
                  { title: "Customer approval", desc: "Transparent cost confirmation." },
                  { title: "Battery replacement", desc: "Careful removal of the old battery and adhesive." },
                  { title: "Charging test", desc: "Verifying charge intake with a diagnostic meter." },
                  { title: "Performance & safety test", desc: "Ensuring the phone operates normally without overheating." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      {i < 6 && <div className="w-0.5 h-full bg-green-100 dark:bg-green-900/30 my-2" />}
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Sumithra Cell City</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Serving Sholinganallur since 2005</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Transparent recommendations</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Quality replacement batteries</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Careful installation</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Charging and performance checks</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> <span>Customer-friendly support</span></li>
              </ul>
              
              <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Repair Time
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Many battery replacements may be completed on the same day, depending on the iPhone model, battery availability and device condition.
                </p>
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
              <div key={index} className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">Restore Your iPhone Battery Performance</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href={`tel:${businessData.contact.phone}`} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
              {businessData.contact.phone}
            </a>
            <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20an%20iPhone%20battery%20replacement.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform">
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
