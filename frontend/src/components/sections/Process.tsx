import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { CalendarCheck, Search, FileText, CheckCircle, Wrench, CheckSquare, Truck } from 'lucide-react';

const steps = [
  { icon: <CalendarCheck />, title: "Book Your Service", description: "Schedule online or walk-in." },
  { icon: <Search />, title: "Device Inspection", description: "Comprehensive check by experts." },
  { icon: <FileText />, title: "Diagnosis & Estimate", description: "Transparent quote provided." },
  { icon: <CheckCircle />, title: "Customer Approval", description: "Work begins only after you say yes." },
  { icon: <Wrench />, title: "Professional Repair", description: "Using genuine replacement parts." },
  { icon: <CheckSquare />, title: "Quality Testing", description: "Post-repair functionality checks." },
  { icon: <Truck />, title: "Device Delivery", description: "Collect in-store or get it delivered." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
          >
            Simple and Transparent Repair Process
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From the moment you walk in to the moment you leave with a working device, we ensure transparency and quality at every step.
          </p>
        </div>

        <div className="relative mx-auto" ref={containerRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden transform md:-translate-x-1/2">
             <motion.div 
               className="w-full bg-gradient-to-b from-primary to-cyan-400 origin-top"
               style={{ scaleY }}
             />
          </div>

          <div className="flex flex-col gap-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block flex-1"></div>
                  
                  {/* Icon Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-16 h-16 flex-shrink-0 bg-white dark:bg-black rounded-full border-4 border-gray-100 dark:border-white/10 flex items-center justify-center text-primary dark:text-cyan-400 relative z-20 shadow-xl z-index-10 mx-0 md:mx-auto"
                  >
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary dark:bg-white text-white dark:text-black flex items-center justify-center text-xs font-bold font-mono shadow-md">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`flex-1 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} -mt-16 md:mt-0`}
                  >
                    <div className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 hover:shadow-xl transition-shadow">
                      <h3 className="font-bold text-xl text-secondary dark:text-white mb-2">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
