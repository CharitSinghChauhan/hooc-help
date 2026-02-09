"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Yogita Maghnani",
    role: "CRY America Volunteer",
    image: "/image (2).jpg",
    quote:
      "Child marriage takes away a girl's right to a happy childhood. It forces her to give up her education & family to take on the role of a wife at a very young age. The girl child may not be ready to handle pregnancies, leading to complications for both the mom and baby. She deserves to enjoy her childhood, play and go to school just like a male child; contribute to the family and society at her own terms; choose to marry when she is physically and emotionally ready to build her own family.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Senior Program Coordinator",
    image: "/image (4).jpg",
    quote:
      "Seeing the transformation in these communities is what drives us every day. When a village gets access to clean water, it's not just about health—it's about time, dignity, and opportunity. Women who spent hours fetching water can now earn a living, and children can attend school regularly. The ripple effect of a single intervention can last for generations.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Impact Assessment Lead",
    image: "/image (7).jpg",
    quote:
      "Data tells a story, but the real impact is written on the faces of the people we serve. Our rigorous monitoring ensures that every dollar donated translates into tangible, lasting change. We don't just count the numbers; we measure the smiles, the confidence, and the renewed hope in every community we touch.",
  },
];

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-hand font-bold text-black inline-block relative">
            Our Team
            {/* Yellow underline simulation */}
            <svg
              className="absolute w-full h-3 -bottom-2 left-0 text-green-500"
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
          </h2>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[400px] flex flex-col items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-12"
            >
              <div className="mb-8">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic relative px-8">
                  {TEAM_MEMBERS[activeIndex].quote}
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <h3 className="text-2xl font-bold font-hand">
                  {TEAM_MEMBERS[activeIndex].name}
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  {TEAM_MEMBERS[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Avatar Navigation */}
          <div className="flex items-center justify-center gap-6 mt-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <button
                key={member.id}
                onClick={() => setActiveIndex(index)}
                className="relative group focus:outline-none"
              >
                <div
                  className={cn(
                    "relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 border-4",
                    activeIndex === index
                      ? "border-[#22c55e] scale-110 shadow-lg"
                      : "border-transparent opacity-70 hover:opacity-100 hover:scale-105",
                  )}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TEAM_MEMBERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  activeIndex === index
                    ? "bg-[#22c55e]"
                    : "bg-gray-300 hover:bg-gray-400",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
