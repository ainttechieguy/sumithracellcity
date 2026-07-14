import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { businessData } from '../../data/business';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
        >
          Visit Sumithra Cell City
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400">Located in the heart of the Sholinganallur IT corridor.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass bg-white/80 dark:bg-[#111]/80 rounded-3xl p-8 border border-gray-100 dark:border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-cyan-400 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white mb-1">Store Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {businessData.name}<br/>
                    {businessData.contact.address.line1},<br/>
                    {businessData.contact.address.line2},<br/>
                    {businessData.contact.address.city}, {businessData.contact.address.state} - {businessData.contact.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-cyan-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white mb-1">Phone Number</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-mono">
                    {businessData.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-cyan-400 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white mb-1">Business Hours</h4>
                  {businessData.hours.map((h, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 flex justify-between w-48">
                      <span>{h.day}:</span> <span className="font-medium">{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a 
                href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" /> Click to Call
              </a>
              <a 
                href={`https://wa.me/${businessData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Maps Embed */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[500px] lg:h-auto relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl group"
        >
          <iframe 
            src="https://maps.google.com/maps?q=24,+Rajiv+Gandhi+Salai,+Near+Karur+Vysya+Bank,+Sholinganallur,+Chennai,+Tamil+Nadu+-+600119&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.2)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-center pointer-events-none">
            <a 
              href="https://maps.google.com/?q=24,+Rajiv+Gandhi+Salai,+Near+Karur+Vysya+Bank,+Sholinganallur,+Chennai,+Tamil+Nadu+-+600119"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-black text-secondary dark:text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 pointer-events-auto hover:scale-105 transition-transform"
            >
              <Navigation className="w-5 h-5 text-primary dark:text-cyan-400" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
