import React from 'react';

const brandData = [
  { name: "Apple", slug: "apple" },
  { name: "Samsung", slug: "samsung" },
  { name: "OnePlus", slug: "oneplus" },
  { name: "Google Pixel", slug: "google" },
  { name: "Vivo", slug: "vivo" },
  { name: "Oppo", slug: "oppo" },
  { name: "Xiaomi", slug: "xiaomi" },
  { name: "Motorola", slug: "motorola" },
  { name: "Nokia", slug: "nokia" },
  { name: "Asus", slug: "asus" },
  { name: "Huawei", slug: "huawei" },
  { name: "Sony", slug: "sony/000000" }
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 border-y border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8 text-center">
        Trusted Service Partner For
      </p>
      
      {/* Infinite Marquee Wrapper */}
      <div className="w-full flex overflow-hidden group mask-image-linear">
        
        {/* First track */}
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          {brandData.map((brand, index) => (
            <img 
              key={index}
              src={`https://cdn.simpleicons.org/${brand.slug}`}
              alt={brand.name}
              title={brand.name}
              className="mx-10 h-8 md:h-12 w-auto object-contain dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform hover:scale-110 duration-300"
            />
          ))}
        </div>
        
        {/* Second track (duplicate for seamless loop) */}
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          {brandData.map((brand, index) => (
            <img 
              key={`dup-${index}`}
              src={`https://cdn.simpleicons.org/${brand.slug}`}
              alt={brand.name}
              title={brand.name}
              className="mx-10 h-8 md:h-12 w-auto object-contain dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform hover:scale-110 duration-300"
            />
          ))}
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
