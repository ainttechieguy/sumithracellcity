import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Battery, Cpu, Camera, Volume2, Droplets, Zap, MonitorSmartphone, Shield, Database, Wrench } from 'lucide-react';

const services = [
  { icon: <MonitorSmartphone />, title: "Display Replacement", description: "Original quality screens with true tone restoration.", time: "1-2 Hrs" },
  { icon: <Battery />, title: "Battery Replacement", description: "High-capacity batteries with health indicator support.", time: "30 Mins" },
  { icon: <Zap />, title: "Charging Port Repair", description: "Fix loose connections and slow charging issues.", time: "45 Mins" },
  { icon: <Cpu />, title: "Motherboard Repair", description: "Chip-level micro-soldering and IC replacements.", time: "1-3 Days" },
  { icon: <Camera />, title: "Camera Repair", description: "Lens replacement and focus motor repairs.", time: "1 Hr" },
  { icon: <Volume2 />, title: "Speaker & Mic", description: "Clear audio restoration for calls and media.", time: "1 Hr" },
  { icon: <Shield />, title: "Back Glass Replacement", description: "Laser-assisted precise back glass removal.", time: "2 Hrs" },
  { icon: <Droplets />, title: "Water Damage Repair", description: "Ultrasonic cleaning and component recovery.", time: "1-3 Days" },
  { icon: <Database />, title: "Data Recovery", description: "Retrieve photos and data from dead devices.", time: "2-5 Days" },
  { icon: <Smartphone />, title: "Software Troubleshooting", description: "Bootloop fixes and OS restorations.", time: "1 Hr" },
  { icon: <Wrench />, title: "Phone Accessories", description: "Premium cases, chargers, and screen guards.", time: "Instant" }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Our Expertise
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
        >
          Mobile Phone Repair Services in Sholinganallur
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Professional diagnosis and reliable service for smartphones, tablets, wearables and other smart devices.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.a
            href="/#booking"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative block bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Edge Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-primary/10 text-primary dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                  {service.time}
                </span>
                
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
