"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Approach() {
  return (
    <section className="py-24 bg-white relative overflow-hidden min-h-[850px]">
      {/* Rings Background - Centered around a point off-screen bottom-right */}
      <div className="absolute bottom-[-10%] md:right-[5%] lg:right-[15%] w-[150vw] h-[150vw] md:w-[1100px] md:h-[1100px] rounded-full flex items-center justify-center pointer-events-none translate-y-1/2 translate-x-1/4 md:translate-x-0">
        {/* Outermost Ring (Pale) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute w-full h-full rounded-full bg-[#f0fdf4]"
        />

        {/* Ring 4 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute w-[85%] h-[85%] rounded-full bg-[#dcfce7]"
        />

        {/* Ring 3 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute w-[70%] h-[70%] rounded-full bg-[#bbf7d0]"
        />

        {/* Ring 2 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute w-[55%] h-[55%] rounded-full bg-[#86efac]"
        />

        {/* Ring 1 (Innermost) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute w-[40%] h-[40%] rounded-full bg-[#4ade80]"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative h-[800px] w-full max-w-7xl">
        {/* Header */}
        <div className="text-center pt-8 mb-8 relative z-30">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-normal text-black font-hand mb-2">
              Our Approach
            </h2>
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-[#fadd68]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg font-sans">
            We address children's critical needs by working with multiple
            stakeholders, including the children themselves, to bring about
            lasting change.
          </p>
        </div>

        {/* Child Image */}
        <div className="absolute bottom-0 right-[-20%] md:right-0 lg:right-[8%] z-10 w-[350px] md:w-[450px] lg:w-[500px]">
          <Image
            src="/approach.webp"
            alt="Child smiling"
            width={600}
            height={800}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Interactive Dots & Labels - Manually positioned to match the arcs */}

        {/* 1. Gather Media Support (Top Left - Outer Ring) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-[15%] left-[5%] md:left-[20%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[120px]">
            Gather Media Support
          </span>
        </motion.div>

        {/* 2. Engage Volunteers (Top Center - Ring 4) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute top-[35%] left-[30%] md:left-[42%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[100px]">
            Engage Volunteers
          </span>
        </motion.div>

        {/* 3. Mobilize Donor Support (Left side - Ring 3 boundary) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-[50%] left-[2%] md:left-[22%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[100px]">
            Mobilize Donor Support
          </span>
        </motion.div>

        {/* 4. Inspire Collective Action (Inner Low Left) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute bottom-[28%] left-[28%] md:left-[38%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[100px] leading-tight">
            Inspire <br /> Collective Action
          </span>
        </motion.div>

        {/* 5. Create Awareness (Center Right - Ring 3) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="absolute top-[45%] right-[30%] md:right-[38%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[100px]">
            Create Awareness
          </span>
        </motion.div>

        {/* 6. Partner With Local Nonprofits (Bottom Right Inner) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="absolute bottom-[20%] right-[30%] md:right-[35%] flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#dcae1d] border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium text-gray-800 text-center max-w-[100px] leading-tight">
            Partner With <br /> Local Nonprofits
          </span>
        </motion.div>

        {/* 7. Identify The Problem (Card) */}
        <div className="absolute bottom-[10%] left-[5%] md:left-[15%] z-30">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-xs md:max-w-sm border border-gray-100 relative"
          >
            <h3 className="font-bold text-lg text-black mb-2">
              Identify The Problem
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Understand the issues that affect children and prioritise their
              most urgent needs
            </p>

            {/* Connector Dot on the innermost ring area approx */}
          </motion.div>

          {/* Visual connector line/dot for the card (implied in design, but let's add a clear dot nearby) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
            className="absolute -right-32 bottom-2 md:bottom-12 flex flex-col items-center gap-2 z-20"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md" />
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center w-32">
              Identify The Problem
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ragged Edge */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          className="w-full h-12 md:h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47,0,123,28,198,28c0,0,10.5,0,10.5,0c89.2,0,147-23,241.5-23c0,0,7.5,0,7.5,0c85,0,137,28,210,28c0,0,11.5,0,11.5,0c79.2,0,133-23,227.5-23c0,0,12.5,0,12.5,0c89.5,0,147,28,231,28c25,0,50-3.3,50-3.3V0H0z"
            fill="#ffffff"
            transform="rotate(180 600 60)"
          />
        </svg>
      </div>
    </section>
  );
}
