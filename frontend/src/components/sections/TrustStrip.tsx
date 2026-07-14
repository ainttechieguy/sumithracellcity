import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, MapPin, Star, Clock, ShieldCheck } from 'lucide-react';
import { businessData } from '../../data/business';

export default function TrustStrip() {
  const items = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Established",
      value: "2005",
      description: "Over 18 years serving Chennai"
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "Owner",
      value: businessData.owner,
      description: "Expert Technician"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Sholinganallur",
      description: "Heart of the IT corridor"
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      label: "Google Rating",
      value: `${businessData.rating.score} / 5.0`,
      description: `From ${businessData.rating.reviews}+ verified reviews`
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      label: "Specialisation",
      value: "Apple Products",
      description: "Expert care for iOS & macOS"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 mb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="glass rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-2xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-x divide-gray-200 dark:divide-white/10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-4 flex flex-col gap-2 ${index % 2 === 0 ? '' : 'border-l-0 lg:border-l'} ${index > 0 ? 'pl-6' : ''}`}
            >
              <div className="flex items-center gap-2 text-primary dark:text-cyan-400">
                {item.icon}
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
              </div>
              <div className="font-bold text-lg text-secondary dark:text-white">
                {item.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
