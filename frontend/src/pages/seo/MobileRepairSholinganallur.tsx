import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Smartphone, ShieldCheck, MapPin, CheckCircle, Navigation, MessageSquare, Wrench, Battery, Camera, Speaker, HardDrive, Wifi, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { businessData } from '../../data/business';

export default function MobileRepairSholinganallur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Which mobile brands do you repair?", a: "We repair Apple, Samsung, OnePlus, Google Pixel, Nothing, Vivo, Oppo, Realme, Xiaomi, Motorola, Nokia, Asus, Honor, Huawei, and Sony smartphones." },
    { q: "How long does mobile repair take?", a: "Most display and battery replacements take between 30 to 60 minutes. Complex motherboard or water damage repairs may take 1-3 days." },
    { q: "Do you inspect the phone before repair?", a: "Yes, we always conduct a thorough initial inspection to identify all underlying issues before recommending a repair." },
    { q: "Will you provide an estimate first?", a: "Absolutely. We believe in transparent pricing. You will receive a clear estimate for your approval before we proceed with any repair." },
    { q: "Do you repair water-damaged phones?", a: "Yes, we specialize in water damage recovery. We recommend bringing in the device as soon as possible and avoiding plugging it into a charger." },
    { q: "Can you recover data?", a: "We offer data recovery services for dead motherboards, water-damaged devices, and phones stuck in boot loops." },
    { q: "Do you sell accessories?", a: "Yes, we have a wide selection of premium cases, tempered glass, chargers, and audio accessories." },
    { q: "How can I reach the store?", a: "We are located at 24, Rajiv Gandhi Salai, Near Karur Vysya Bank in Sholinganallur. You can use the 'Get Directions' button below to navigate to us." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Repair Services",
    "description": "Professional diagnosis and repair support for smartphones in Sholinganallur, Chennai, including display, battery, charging, camera, audio, software and motherboard issues.",
    "provider": {
      "@id": "https://sumithracellcity.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sholinganallur"
    },
    "serviceType": "Mobile Phone Repair",
    "url": "https://sumithracellcity.com/mobile-repair-sholinganallur"
  };

  const services = [
    { icon: Smartphone, name: "Display Replacement" },
    { icon: Battery, name: "Battery Replacement" },
    { icon: Zap, name: "Charging Port Repair" },
    { icon: Wrench, name: "Motherboard Repair" },
    { icon: Camera, name: "Camera Repair" },
    { icon: Speaker, name: "Speaker & Mic Repair" },
    { icon: Smartphone, name: "Back Glass Replacement" },
    { icon: Wifi, name: "Water Damage Repair" },
    { icon: HardDrive, name: "Data Recovery" },
    { icon: CheckCircle, name: "Software Troubleshooting" }
  ];

  const brands = [
    "Apple", "Samsung", "OnePlus", "Google Pixel", "Nothing", "Vivo", "Oppo", "Realme", "Xiaomi", "Motorola", "Nokia", "Asus", "Honor", "Huawei", "Sony"
  ];

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen font-sans" style={{ fontFamily: 'Calibri, sans-serif' }}>
      <SEO 
        title="Mobile Repair in Sholinganallur | Sumithra Cell City"
        description="Trusted mobile repair in Sholinganallur for screen, battery, charging, camera, motherboard, speaker and software problems. Serving since 2005."
        path="/mobile-repair-sholinganallur"
        faqData={faqs}
        serviceSchema={serviceSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-[#0a0a0a] dark:to-[#111] -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium text-sm">
              <Wrench className="w-4 h-4" />
              <span>Multi-Brand Smartphone Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mobile Repair Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Sholinganallur</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Sumithra Cell City provides professional diagnosis and repair support for smartphones in Sholinganallur, Chennai, including display, battery, charging, camera, audio, software and motherboard issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                Book a Repair
              </a>
              <a href={`tel:${businessData.contact.phone}`} className="px-8 py-4 bg-gray-100 dark:bg-white/5 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-center text-gray-900 dark:text-white">
                Call Now
              </a>
              <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20repair%20service.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] rounded-full font-bold hover:bg-[#25D366]/20 transition-colors text-center">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-3xl -z-10" />
            <img 
              src="/seo/mobile-repair.png" 
              alt="Multi-Brand Mobile Repair Service" 
              className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-white/20 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Repair Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive hardware and software solutions for all your smartphone needs.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow">
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Process */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Brands Serviced</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {brands.map((brand, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-lg text-sm font-medium">
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Support depends on device model, issue and part availability.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Repair Process</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">A streamlined workflow designed to get your device back to you quickly and securely.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Bring or book the device", desc: "Visit our Sholinganallur store or book a service online." },
                  { title: "Initial inspection", desc: "We visually inspect and log the device condition." },
                  { title: "Diagnosis", desc: "In-depth testing to isolate the exact hardware or software fault." },
                  { title: "Estimate & Approval", desc: "We provide a clear cost estimate for your approval." },
                  { title: "Repair", desc: "Expert technicians perform the necessary repairs using quality parts." },
                  { title: "Testing & Delivery", desc: "Post-repair validation before handing the device back to you." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      {i < 5 && <div className="w-0.5 h-full bg-indigo-100 dark:bg-indigo-900/30 my-2" />}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Local Customers Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Local Customers Choose Us</h2>
            <p className="text-gray-600 dark:text-gray-400">Serving the IT Corridor community with dedication.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Operating since 2005",
              "Located on Rajiv Gandhi Salai",
              "Near Karur Vysya Bank",
              "Transparent repair explanation",
              "Fair pricing",
              "Quick response",
              "Experienced technicians",
              "Customer-friendly service"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are proud to be the trusted mobile repair destination for customers from Sholinganallur, OMR, Karapakkam, Navalur, Perungudi, Thoraipakkam, Semmencherry, Medavakkam, and other nearby Chennai IT corridor areas.
            </p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">Looking for a Mobile Repair Shop in Sholinganallur?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href={`tel:${businessData.contact.phone}`} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
              {businessData.contact.phone}
            </a>
            <a href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20repair%20service.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform">
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
