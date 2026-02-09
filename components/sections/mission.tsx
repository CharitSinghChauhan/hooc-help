"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Mission() {
  return (
    <section id="stories" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-hand font-bold text-black mb-12">
          Impact Stories
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          {/* Left Column (Wide + 2 Small) */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {/* Top Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] lg:h-3/5 rounded-xl overflow-hidden group"
            >
              <Image
                src="/image (2).jpg"
                alt="Healthcare"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-[#22c55e] text-black text-xs font-bold uppercase px-3 py-1.5 rounded-sm shadow-md">
                  Healthcare
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold mb-2 font-hand tracking-wide">
                  Bridging the Gap in Healthcare
                </h3>
                <p className="text-gray-200 text-sm mb-4 max-w-lg hidden md:block">
                  In Battigudem, where healthcare once felt out of reach, a
                  mobile clinic became the bridge — connecting a young boy and
                  his community to care, diagnosis and hope.
                </p>
                <div>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold uppercase px-4 py-2 rounded-sm transition-colors border border-white/30">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row (2 Small Cards) */}
            <div className="flex flex-col md:flex-row gap-4 h-[300px] lg:h-2/5">
              {/* Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-full rounded-xl overflow-hidden group"
              >
                <Image
                  src="/image (4).jpg"
                  alt="WaSH"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1.5 rounded-sm shadow-md">
                    WaSH
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-4 font-hand leading-tight">
                    From Myths to Meaningful Change
                  </h3>
                  <div>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold uppercase px-4 py-2 rounded-sm transition-colors border border-white/30">
                      Read more
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-full rounded-xl overflow-hidden group"
              >
                <Image
                  src="/image (7).jpg"
                  alt="Education"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#47A8E5] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-sm shadow-md">
                    Education
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-4 font-hand leading-tight">
                    The holiest offering: How Vanageri made education its truest
                    worship
                  </h3>
                  <div>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold uppercase px-4 py-2 rounded-sm transition-colors border border-white/30">
                      Read more
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Tall Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/3 h-[500px] lg:h-full rounded-xl overflow-hidden group relative"
          >
            <Image
              src="/image (6).jpg"
              alt="Livelihood"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-[#22c55e] text-black text-xs font-bold uppercase px-3 py-1.5 rounded-sm shadow-md">
                Livelihood
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-3 font-hand tracking-wide">
                Women at the Heart of Regenerative Tourism
              </h3>
              <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                Discover how the community-led tourism initiative is empowering
                rural women, reshaping travel, and protecting fragile
                ecosystems.
              </p>
              <div>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold uppercase px-4 py-2 rounded-sm transition-colors border border-white/30">
                  Read more
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
