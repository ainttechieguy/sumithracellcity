import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Phone, MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Mouse Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Parallax layers for exploded parts
  const translateZPhone = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0]);
  const translateZBattery = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const translateZLogic = useTransform(mouseXSpring, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse position between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] pt-20"
      style={{ perspective: 2000 }}
    >
      {/* Premium Background Additions: Gradients, Aurora, Noise */}
      {/* Premium Background Additions: Gradients, Aurora, Noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiLz4KPC9zdmc+')] opacity-[0.03] dark:opacity-10 mix-blend-overlay pointer-events-none z-10"></div>

      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none glow-orb z-10"></div>
      <div className="absolute bottom-0 left-10 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none glow-orb z-10"></div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-radial-[at_center] from-white/20 to-white/90 dark:from-black/20 dark:to-black/90 pointer-events-none z-10"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium text-primary dark:text-cyan-400"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>4.9 Rating | 18+ Years Experience</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-secondary dark:text-white">
            Chennai's Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Smartphone Experts
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
            Serving customers since 2005 with professional smartphone repair, Apple device servicing, accessories, and genuine replacement parts.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-[0_0_40px_rgba(11,87,208,0.3)]"
            >
              Book Service
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="tel:+919962333311"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/919962333311?text=Hi%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full font-medium flex items-center gap-2 text-green-600 dark:text-accent hover:bg-green-50 dark:hover:bg-accent/10 transition-colors border border-green-200 dark:border-accent/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <div>
              <div className="numbers text-3xl font-bold text-secondary dark:text-white mb-1">10k+</div>
              <div className="text-sm text-gray-500">Devices Repaired</div>
            </div>
            <div>
              <div className="numbers text-3xl font-bold text-secondary dark:text-white mb-1">30m</div>
              <div className="text-sm text-gray-500">Express Repairs</div>
            </div>
            <div>
              <div className="numbers text-3xl font-bold text-secondary dark:text-white mb-1">2005</div>
              <div className="text-sm text-gray-500">Since</div>
            </div>
          </div>
        </motion.div>

        {/* Right Composition - Interactive 3D CSS/Motion Animated Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="relative h-[600px] hidden lg:block perspective-1000"
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center transform-gpu"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            {/* Phone Body */}
            <motion.div
              className="relative w-[280px] h-[580px] bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700 z-20"
              style={{ transformStyle: 'preserve-3d', translateZ: 50 }}
            >
              {/* Screen */}
              <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden relative border border-white/10" style={{ transform: 'translateZ(10px)' }}>
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 shadow-[0_5px_15px_rgba(0,0,0,0.5)]"></div>

                {/* Screen Content - Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                {/* 3D Glass Glare Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
                  style={{
                    x: useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]),
                    y: useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]),
                  }}
                ></motion.div>
              </div>

              {/* Exploded Floating Parts */}
              {/* Battery */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 -left-24 w-20 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-sm"
                style={{ translateZ: 100 }}
              >
                <span className="text-white/50 text-xs font-mono -rotate-90 tracking-widest">BATTERY</span>
              </motion.div>

              {/* Camera Module */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-16 w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/20 shadow-2xl p-2 grid grid-cols-2 gap-2 backdrop-blur-sm"
                style={{ translateZ: 150 }}
              >
                <div className="w-8 h-8 rounded-full bg-black border border-gray-600 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-black border border-gray-600 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-black border border-gray-600 col-span-2 mx-auto shadow-inner"></div>
              </motion.div>

              {/* Logic Board */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 -right-20 w-16 h-32 bg-gradient-to-br from-green-900 to-green-950 rounded border border-yellow-500/30 shadow-2xl flex flex-col gap-2 p-2 overflow-hidden backdrop-blur-sm"
                style={{ translateZ: 120 }}
              >
                <div className="w-full h-8 bg-black/50 rounded-sm border border-yellow-500/20"></div>
                <div className="w-full h-12 bg-black/50 rounded-sm border border-yellow-500/20"></div>
                <div className="w-full flex-1 bg-black/50 rounded-sm border border-yellow-500/20"></div>
              </motion.div>
            </motion.div>

            {/* Floor Shadow */}
            <motion.div
              style={{
                x: useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]),
              }}
              className="absolute bottom-10 w-[300px] h-12 bg-black/30 dark:bg-black/80 blur-2xl rounded-full translate-z-[-100px]"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
