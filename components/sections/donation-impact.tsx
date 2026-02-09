"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DonationImpact() {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0,0.5 ,1], [1.2, 1.1 ,1]);

  return (
    <section id="donate" className="bg-[#1a1a1a] py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl text-white font-hand leading-tight">
            Know that your donation is making <br className="hidden md:block" />
            a difference
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-sans leading-relaxed">
            charity: water uses 100% of your donation to fund clean water around
            the world and then proves every single project you fund, complete
            with GPS coordinates and photos. Give water. Get proof. Every single
            time.
          </p>
        </div>

        {/* Map Interface Screenshot */}
        <motion.div
          ref={divRef}
          style={{ scale }}
          className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
        >
          <Image
            src="/image (9).jpg"
            alt="Impact Map Dashboard"
            width={1400}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          {/* Optional Overlay Gradient for depth */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
