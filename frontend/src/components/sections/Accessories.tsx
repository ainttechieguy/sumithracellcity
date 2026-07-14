import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Headphones, Smartphone, Battery, Zap, Shield, Speaker } from 'lucide-react';

const products = [
  { id: 1, name: "Premium Silicone Covers", category: "Mobile Covers", desc: "Liquid silicone cases with microfibre lining.", icon: <Smartphone className="w-8 h-8" /> },
  { id: 2, name: "9H Tempered Glass", category: "Screen Protection", desc: "Edge-to-edge protection with oleophobic coating.", icon: <Shield className="w-8 h-8" /> },
  { id: 3, name: "20W Fast Adapters", category: "Chargers", desc: "PD compatible fast chargers for iPhone and Android.", icon: <Zap className="w-8 h-8" /> },
  { id: 4, name: "Braided Data Cables", category: "Cables", desc: "Durable nylon braided Type-C and Lightning cables.", icon: <Zap className="w-8 h-8" /> },
  { id: 5, name: "10,000mAh Power Banks", category: "Power Banks", desc: "Compact power banks with dual output ports.", icon: <Battery className="w-8 h-8" /> },
  { id: 6, name: "TWS Wireless Earbuds", category: "Audio", desc: "True wireless stereo earbuds with ANC.", icon: <Headphones className="w-8 h-8" /> },
  { id: 7, name: "Bluetooth Speakers", category: "Audio", desc: "Portable waterproof speakers with deep bass.", icon: <Speaker className="w-8 h-8" /> }
];

export default function Accessories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 max-w-7xl mx-auto">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white"
          >
            Accessories for Everyday Use
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400">High-quality accessories to protect and enhance your devices.</p>
        </div>
        <div className="hidden md:block text-sm text-gray-400 font-medium">
          Drag to explore &rarr;
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory md:snap-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-[#111] rounded-3xl p-6 border border-gray-200 dark:border-white/10 shadow-lg snap-start flex flex-col group select-none pointer-events-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-primary dark:text-gray-400 mb-6 group-hover:text-primary dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all">
              {product.icon}
            </div>
            
            <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-cyan-500 mb-2">
              {product.category}
            </span>
            
            <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 flex-grow">
              {product.desc}
            </p>
            
            <button className="w-full py-3 rounded-xl border border-green-200 dark:border-green-900/30 text-green-600 dark:text-green-400 font-medium flex items-center justify-center gap-2 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
