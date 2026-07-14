import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { GripVertical } from 'lucide-react';

const cases = [
  { label: "Broken Display", beforeText: "Shattered Screen", afterText: "Perfect Display" },
  { label: "Water Damage", beforeText: "Corroded Board", afterText: "Repaired Board" },
  { label: "Charging Port", beforeText: "Dusty & Broken", afterText: "Clean & Replaced" }
];

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            See the Difference
          </motion.h2>
          <p className="text-gray-400">Drag the slider to see our repair transformations.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCase === i 
                  ? 'bg-primary text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Comparison Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden select-none touch-none group"
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg==')]"></div>
            <span className="relative z-10 text-2xl font-bold text-gray-700 uppercase tracking-widest opacity-50">{cases[activeCase].afterText}</span>
          </div>

          {/* Before Image (Foreground Clipped) */}
          <div 
            className="absolute inset-0 bg-gray-800 flex items-center justify-center border-r-2 border-white"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxMTEiLz48cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
            <span className="relative z-10 text-2xl font-bold text-gray-600 uppercase tracking-widest opacity-50">{cases[activeCase].beforeText}</span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform duration-200 ${isDragging ? 'scale-110' : ''}`}>
              <GripVertical className="w-5 h-5 text-gray-800" />
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-medium border border-white/10 z-30 pointer-events-none">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-medium border border-white/10 z-30 pointer-events-none">
            After
          </div>
        </motion.div>
      </div>
    </section>
  );
}
