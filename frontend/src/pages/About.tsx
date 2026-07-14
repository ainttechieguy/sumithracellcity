import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import FloatingActions from '../components/sections/FloatingActions';
import { motion } from 'motion/react';
import { Award, Shield, ThumbsUp, Users, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

const values = [
  { icon: <Shield />, title: "Honest Diagnosis", desc: "No hidden fees, no unnecessary repairs." },
  { icon: <CheckCircle2 />, title: "Clear Communication", desc: "We explain technical issues simply." },
  { icon: <ThumbsUp />, title: "Fair Pricing", desc: "Quality parts at competitive rates." },
  { icon: <Award />, title: "Reliable Repair", desc: "Expert technicians handling your device." },
  { icon: <Users />, title: "Customer Trust", desc: "18+ years of satisfied clients." }
];

const timeline = [
  { year: "2005", title: "The Beginning", desc: "Sumithra Cell City opened its doors in Sholinganallur to provide basic mobile repairs and accessories." },
  { year: "2010", title: "Smartphone Era", desc: "Expanded services to include early Android and iPhone repairs as smartphones took over the market." },
  { year: "2015", title: "Apple Specialist", desc: "Invested in specialized training and equipment for comprehensive Apple product servicing." },
  { year: "2020", title: "IT Corridor Trusted Partner", desc: "Became a go-to repair center for IT professionals across the OMR stretch." },
  { year: "Today", title: "Modern Facility", desc: "Continuing to provide expert care with advanced micro-soldering and diagnostic tools." }
];

export default function About() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, orientation: 'vertical', smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-secondary dark:text-white min-h-screen selection:bg-primary/30 selection:text-primary pt-24">
      <Navbar />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-secondary dark:text-white">
              Serving Chennai <br />Since <span className="text-primary dark:text-cyan-500">{businessData.founded}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Sumithra Cell City has served customers in Sholinganallur and the surrounding Chennai IT corridor for nearly two decades.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Established by <strong className="text-secondary dark:text-white">{businessData.owner}</strong>, the business provides reliable repair and support for all smart mobile devices, with specialist experience in Apple product servicing.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-50 dark:bg-primary/10 text-primary dark:text-cyan-400 font-medium">
              <Award className="w-5 h-5" /> Specialist in Apple product services
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80"
              alt="Technician repairing a smartphone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that have kept us in business for 18+ years.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black text-primary dark:text-cyan-400 flex items-center justify-center mb-4 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 relative"
              >
                {i !== timeline.length - 1 && (
                  <div className="absolute top-10 left-[23px] bottom-[-48px] w-[2px] bg-gray-200 dark:bg-white/10"></div>
                )}

                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10 border-4 border-white dark:border-[#0a0a0a]">
                  {item.year === 'Today' ? 'Now' : item.year.slice(2)}
                </div>

                <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 rounded-2xl flex-grow shadow-sm">
                  <span className="text-sm font-bold text-primary dark:text-cyan-400 block mb-1">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
