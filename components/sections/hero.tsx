"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "/image.jpg",
    title: "Clean Water for Every Soul",
    subtitle:
      "We believe that everyone deserves the basic right to clean, safe drinking water.",
  },
  {
    url: "/image (1).jpg",
    title: "Empowering Communities",
    subtitle:
      "Your support helps us build sustainable water systems in remote villages.",
  },
  {
    url: "/image (2).jpg",
    title: "Transparency at Every Step",
    subtitle:
      "100% of your donations go directly to water projects in the field.",
  },
  {
    url: "/image (3).jpg",
    title: "Transparency at Every Step",
    subtitle:
      "100% of your donations go directly to water projects in the field.",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Clone first and last images for seamless transition
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextSlide = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      {/* Carousel Tracks */}
      <div
        className={`flex h-full w-full ${!isTransitioning && (currentIndex === 1 || currentIndex === images.length) ? "" : "transition-transform duration-1000 ease-in-out"}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="relative h-full w-full shrink-0">
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover brightness-[0.7]"
              priority={index === 1}
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl">
                  <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 font-hand text-5xl font-bold text-white md:text-7xl lg:text-8xl leading-tight">
                    {image.title}
                  </h1>
                  <p className="animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 mt-6 text-xl text-gray-100 md:text-2xl max-w-2xl font-light leading-relaxed">
                    {image.subtitle}
                  </p>
                  <div className="animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000 mt-10 flex flex-wrap gap-4">
                    <button className="h-14 rounded-sm bg-[#22c55e] px-10 text-[14px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#4ade80] active:scale-95 uppercase">
                      Donate Now
                    </button>
                    <button className="h-14 rounded-sm border-2 border-white px-10 text-[14px] font-bold tracking-[0.2em] text-white transition-all hover:bg-white/10 active:scale-95 uppercase">
                      Our Impact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white transition-colors hover:bg-black/40 focus:outline-none"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white transition-colors hover:bg-black/40 focus:outline-none"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => {
          const isActive =
            currentIndex === index + 1 ||
            (currentIndex === 0 && index === images.length - 1) ||
            (currentIndex === extendedImages.length - 1 && index === 0);
          return (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setCurrentIndex(index + 1);
              }}
              className={`h-1.5 transition-all duration-300 ${isActive ? "w-10 bg-[#22c55e]" : "w-4 bg-white/40 hover:bg-white/60"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
