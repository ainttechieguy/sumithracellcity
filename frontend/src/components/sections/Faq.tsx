import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How long does a mobile repair usually take?", a: "Most standard repairs like screen or battery replacements are completed within 30 to 60 minutes. Complex motherboard repairs may take 1-3 days." },
  { q: "Do you service all smartphone brands?", a: "Yes, we service all major brands including Apple, Samsung, OnePlus, Google Pixel, Vivo, Oppo, and Xiaomi." },
  { q: "Are you specialised in Apple product repairs?", a: "Yes, we have over 18 years of experience and specialize in repairing Apple products including iPhones, iPads, MacBooks, and Apple Watches." },
  { q: "Do you provide a repair warranty?", a: "Absolutely. We provide a post-repair warranty on both the replacement parts we use and the service labor provided." },
  { q: "Do you use quality replacement parts?", a: "We use only genuine or premium high-quality replacement parts to ensure your device functions perfectly and safely." },
  { q: "Can you recover data from a damaged phone?", a: "Yes, our technicians specialize in data recovery from water-damaged, dead, or severely physically damaged motherboards." },
  { q: "Do you provide pickup and delivery?", a: "Yes, we offer convenient pickup and delivery services across the Sholinganallur and OMR IT corridor." },
  { q: "How can I track my repair status?", a: "You can use the 'Track Job' feature on our website by entering your Job ID and registered mobile number for real-time updates." },
  { q: "Can I call before visiting the store?", a: "Of course! You can call us or message us on WhatsApp anytime during business hours to discuss your device issue." },
  { q: "Do you sell mobile accessories?", a: "Yes, we stock a wide range of premium mobile covers, tempered glasses, fast chargers, and audio accessories." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400">Everything you need to know about our repair services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
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
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
