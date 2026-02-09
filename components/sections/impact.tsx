"use client";

import {
  Users,
  BookOpen,
  Syringe,
  School,
  Sun,
  HeartHandshake,
  Backpack,
  ShieldCheck,
} from "lucide-react";
import CountUp from "react-countup";

const IMPACT_STATS = [
  {
    icon: Users,
    bg: "bg-[#f3f4f6]", // Light Gray
    number: "860,931",
    label: "Children impacted overall",
  },
  {
    icon: BookOpen,
    bg: "bg-[#fce7f3]", // Light Pink
    number: "365,581",
    label: "Children 6-18 years in schools",
  },
  {
    icon: Syringe,
    bg: "bg-[#ecfeff]", // Light Cyan
    number: "243,546",
    label: "0-1 years children fully immunized",
  },
  {
    icon: School,
    bg: "bg-[#e5e7eb]", // Gray
    number: "1,851",
    label: "Govt. schools approved or strengthened",
  },
  {
    icon: Sun,
    bg: "bg-[#f0fdf4]", // Light Green
    number: "2,691",
    label: "Villages freed from child labor",
  },
  {
    icon: HeartHandshake,
    bg: "bg-[#dcfce7]", // Light Yellow
    number: "4,531",
    label: "Children's Collectives formed/strengthened",
  },
  {
    icon: Backpack,
    bg: "bg-[#fff1f2]", // Rose
    number: "215,728",
    label: "Children mainstreamed into schools",
  },
  {
    icon: ShieldCheck,
    bg: "bg-[#fdf4ff]", // Fuchsia
    number: "5,434",
    label:
      "Rescued children (labor or trafficked) mainstreamed in formal education",
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <h2 className="text-5xl md:text-6xl font-normal text-black font-hand relative z-10">
              Our Impact
            </h2>
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-[#fadd68]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 15 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="max-w-4xl mx-auto text-lg text-gray-800 font-medium leading-relaxed">
            There is nothing more precious than a child's smile. Since 2004, CRY
            America has helped create more than 800,000 happy childhoods thanks
            to supporters like YOU!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image/Icon Area */}
              <div
                className={`${stat.bg} h-48 flex items-center justify-center p-6 relative`}
              >
                <stat.icon
                  className="w-24 h-24 text-gray-700 opacity-80 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Stats Area */}
              <div className="bg-[#22c55e] p-6 text-center flex-grow flex flex-col justify-center min-h-[160px]">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2 font-serif">
                  <CountUp
                    end={parseInt(stat.number.replace(/,/g, ""))}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
