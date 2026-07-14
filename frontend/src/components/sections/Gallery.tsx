import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const categories = ["All", "Store Exterior", "Service Desk", "Apple Repairs", "Completed"];

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1512418490979-9ce792d0e722?auto=format&fit=crop&q=80&w=800", category: "Apple Repairs", alt: "Technician repairing an iPhone" },
  { id: 2, src: "https://images.unsplash.com/photo-1601784551446-20c9e07cd561?auto=format&fit=crop&q=80&w=800", category: "Store Exterior", alt: "Sumithra Cell City storefront" },
  { id: 3, src: "https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&q=80&w=800", category: "Service Desk", alt: "Customer service counter" },
  { id: 4, src: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=800", category: "Completed", alt: "Restored mobile devices" },
  { id: 5, src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800", category: "Apple Repairs", alt: "MacBook logic board repair" },
  { id: 6, src: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=800", category: "Completed", alt: "Fixed iPad screen" }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white"
        >
          Inside Our Service Centre
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Take a look at our professional repair facility and past work in Sholinganallur.</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filtered.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-3xl overflow-hidden cursor-zoom-in break-inside-avoid"
              onClick={() => setLightboxImg(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="w-6 h-6 text-white mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-cyan-400">{item.category}</span>
                <p className="text-white font-medium">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImg} 
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
