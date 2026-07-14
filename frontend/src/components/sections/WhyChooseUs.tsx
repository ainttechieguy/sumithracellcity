import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Search, Settings, DollarSign, Clock, Shield, Smile } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck />, title: "Serving Since 2005", description: "A legacy of trust and thousands of satisfied customers in Chennai." },
  { icon: <Users />, title: "Skilled Technicians", description: "Expert diagnosis and micro-soldering specialists." },
  { icon: <Search />, title: "Transparent Diagnosis", description: "We explain the issue clearly before starting any work." },
  { icon: <Settings />, title: "Quality Parts", description: "Genuine and premium replacement parts guaranteed." },
  { icon: <DollarSign />, title: "Fair Pricing", description: "Honest quotes with no hidden charges or surprises." },
  { icon: <Clock />, title: "Quick Turnaround", description: "Most standard repairs are completed in under an hour." },
  { icon: <Shield />, title: "Warranty Support", description: "Post-repair warranty on parts and our service." },
  { icon: <Smile />, title: "Friendly Support", description: "Approachable staff ready to answer your technical questions." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
        >
          Why Customers Trust Sumithra Cell City
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-primary/20 text-primary dark:text-cyan-400 flex items-center justify-center mb-4">
              {reason.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-secondary dark:text-white">{reason.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-cyan-600 p-[1px]"
      >
        <div className="bg-white dark:bg-[#0a0a0a] rounded-[23px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5"></div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-secondary dark:text-white relative z-10 italic">
            "Our goal is to explain the issue clearly, recommend the right repair and return your device in reliable working condition."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
