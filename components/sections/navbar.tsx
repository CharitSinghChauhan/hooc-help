"use client";

import * as React from "react";
import Link from "next/link";
import { Droplets, Fuel, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar approx
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-18 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#22c55e]">
            <Fuel className="h-6 w-6 text-white" />
          </div>
          <span className="font-hand text-[28px] font-bold tracking-tight text-black">
            Hooc AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden h-full items-center gap-10 lg:flex">
          <a
            href="#stories"
            onClick={(e) => scrollToSection(e, "stories")}
            className="text-[13px] font-bold tracking-[0.14em] text-black transition-all hover:opacity-70 uppercase focus:outline-none"
          >
            Impact Stories
          </a>
          <a
            href="#impact"
            onClick={(e) => scrollToSection(e, "impact")}
            className="text-[13px] font-bold tracking-[0.14em] text-black transition-all hover:opacity-70 uppercase focus:outline-none"
          >
            Our Impact
          </a>
          <a
            href="#team"
            onClick={(e) => scrollToSection(e, "team")}
            className="text-[13px] font-bold tracking-[0.14em] text-black transition-all hover:opacity-70 uppercase focus:outline-none"
          >
            Our Team
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex h-full items-center gap-4 md:gap-6">
          <button
            onClick={(e) => {
              const element = document.getElementById("donate");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex h-11 items-center rounded-sm bg-[#22c55e] px-6 text-[13px] font-bold tracking-[0.14em] text-black transition-all hover:bg-[#4ade80] active:scale-95 uppercase md:px-8"
          >
            Give
            <Droplets className="ml-2 h-4 w-4 fill-[#47A8E5] text-[#47A8E5] transition-transform group-hover:scale-110" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 flex flex-col gap-0 shadow-xl absolute w-full left-0 top-full h-[calc(100vh-72px)]">
          <div className="p-8 flex flex-col gap-8">
            <a
              href="#stories"
              onClick={(e) => scrollToSection(e, "stories")}
              className="text-[20px] font-bold text-black uppercase tracking-widest border-b border-gray-100 pb-4"
            >
              Impact Stories
            </a>
            <a
              href="#impact"
              onClick={(e) => scrollToSection(e, "impact")}
              className="text-[20px] font-bold text-black uppercase tracking-widest border-b border-gray-100 pb-4"
            >
              Our Impact
            </a>
            <a
              href="#team"
              onClick={(e) => scrollToSection(e, "team")}
              className="text-[20px] font-bold text-black uppercase tracking-widest border-b border-gray-100 pb-4"
            >
              Our Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
