import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const iphoneServices = [
  "Screen replacement", "Battery replacement", "Face ID repair", 
  "Camera repair", "Charging issues", "Back-glass replacement", 
  "Water-damage repair", "Logic-board repair"
];

const macbookServices = [
  "Display service", "Battery replacement", "Keyboard service", 
  "Trackpad repair", "SSD upgrade", "Logic-board diagnosis"
];

const otherDevices = [
  "iPad", "Apple Watch", "AirPods", "iMac", "Mac mini"
];

export default function AppleService() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="apple" className="relative py-24 px-6 overflow-hidden bg-black text-white border-t border-white/10">
      
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=2000" 
          alt="Apple Products Display" 
          className="w-full h-[120%] object-cover opacity-40 grayscale-[0.2]"
        />
      </motion.div>

      {/* Glowing Accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="glass bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs">Certified Apple Experts</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Premium Care for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
              Apple Devices
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            We use genuine quality parts and highly specialised micro-soldering techniques to restore your iPhone, iPad, MacBook, and Apple Watch to factory condition.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black border border-white/20 flex items-center justify-center text-lg shadow-lg">📱</div>
                iPhone
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {iphoneServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                    {item}
                  </li>
               ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black border border-white/20 flex items-center justify-center text-lg shadow-lg">💻</div>
                MacBook
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                {macbookServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xs font-bold mb-3 uppercase tracking-widest text-gray-400">Other Devices</h3>
              <div className="flex flex-wrap gap-2">
                {otherDevices.map((item, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Book Apple Service
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
              <Phone className="w-5 h-5" />
              Call for Diagnosis
            </button>
          </motion.div>
        </div>

        {/* Right Visuals - Highlighting Apple Hardware */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div 
             animate={{ y: [-15, 15, -15] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[10%] right-[10%] w-[350px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
          >
            <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800" alt="iPhone Repair" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
               <span className="text-xl font-bold text-white drop-shadow-md">iPhone Logic Board Repair</span>
            </div>
          </motion.div>

          <motion.div 
             animate={{ y: [15, -15, 15] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[10%] left-[0%] w-[400px] rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
          >
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800" alt="MacBook Repair" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
               <span className="text-xl font-bold text-white drop-shadow-md">MacBook Display Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
