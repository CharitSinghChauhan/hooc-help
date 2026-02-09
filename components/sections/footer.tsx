"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#22c55e] pt-20 pb-10 text-black mt-24">
      {/* Top Torn Edge Decoration */}
      <div className="absolute top-[-40px] left-0 w-full h-[50px] z-10 overflow-hidden leading-none">
        <svg
          className="w-full h-full text-[#22c55e] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47,0,123,28,198,28c0,0,10.5,0,10.5,0c89.2,0,147-23,241.5-23c0,0,7.5,0,7.5,0c85,0,137,28,210,28c0,0,11.5,0,11.5,0c79.2,0,133-23,227.5-23c0,0,12.5,0,12.5,0c89.5,0,147,28,231,28c25,0,50-3.3,50-3.3V0H0z"
            transform="rotate(180 600 60) scale(1, -1) translate(0, -120)"
          />
        </svg>
        <svg className="svg-defs">
          <defs>
            <clipPath id="brushClip" clipPathUnits="objectBoundingBox">
              <path
                d="M 0 0 L 1 0 L 1 0.85 
                         L 0.95 0.88 L 0.90 0.82 L 0.85 0.89 L 0.80 0.84 
                         L 0.75 0.91 L 0.70 0.83 L 0.65 0.88 L 0.60 0.81 
                         L 0.55 0.92 L 0.50 0.84 L 0.45 0.89 L 0.40 0.80 
                         L 0.35 0.87 L 0.30 0.82 L 0.25 0.90 L 0.20 0.83 
                         L 0.15 0.88 L 0.10 0.81 L 0.05 0.91 L 0 0.85 Z"
              />
            </clipPath>
          </defs>
        </svg>
        <div
          className="absolute w-full h-full top-3 left-0 bg-[#22c55e]"
          style={{
            clipPath:
              "polygon(0% 100%, 100% 100%, 100% 20%, 95% 40%, 90% 20%, 85% 35%, 80% 15%, 75% 35%, 70% 20%, 65% 30%, 60% 10%, 55% 30%, 50% 15%, 45% 35%, 40% 10%, 35% 30%, 30% 15%, 25% 35%, 20% 15%, 15% 30%, 10% 20%, 5% 35%, 0% 10%)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Home */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-hand">Home</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Grants
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-hand">WHAT WE DO?</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  Child Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Health and Nutrition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Child Labor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Girl Child Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Child Marriage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 font-hand">CONTACT US</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">EMAIL US</p>
                  <a
                    href="mailto:support@hooc-ai.org"
                    className="hover:underline"
                  >
                    support@hooc-ai.org
                  </a>
                </div>
                <div>
                  <p className="font-bold">CALL US</p>
                  <p>617 981 2288</p>
                  <p>617 959 1273</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">Write Us</p>
                  <p>Hooc AI America, P.O. Box 850948, Braintree,</p>
                  <p>MA 02185-0948</p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <Twitter className="w-5 h-5 " />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <Youtube className="w-5 h-5 " />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium mb-12">
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            Careers
          </Link>
          <Link href="#" className="hover:underline">
            FAQs
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Contact Us
          </Link>
          <Link href="#" className="hover:underline">
            Sitemap
          </Link>
        </div>

        {/* Disclaimer & Badge Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 border-b border-black/10 pb-8 px-4">
          <p className="text-xs leading-relaxed max-w-3xl text-center md:text-left">
            Hooc AI America is the sole representative of the Hooc AI name &
            trademarks in the USA. Hooc AI America is a 501c3 registered
            organization and all donations to Hooc AI America are
            tax-deductible. You will receive periodic updates, so you can stay
            informed about Hooc AI America's projects, events & initiatives.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm font-medium pt-4">
          <p>
            Copyright 2026 Hooc AI, Child Rights and You America Inc. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
