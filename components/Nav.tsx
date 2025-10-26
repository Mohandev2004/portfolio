"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div className="w-full relative z-[100]">
      <div className="flex flex-row items-center justify-between py-8 max-w-5xl mx-auto px-6">
        {/* ================== Desktop Navigation ================== */}
        <div className="hidden lg:flex w-full justify-between px-8">
          <div className="flex flex-row space-x-8 items-center border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-sm text-white"
            >
              <Image
                src="/icons.png"
                alt="Avatar"
                width={30}
                height={30}
                className="rounded-full transition duration-500 h-8 w-8"
              />
              <span className="font-inter font-bold">Mohan A</span>
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm px-2 py-2 hover:text-blue-400 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* ================== Mobile Navigation ================== */}
        <div className="flex lg:hidden w-full justify-between items-center">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-sm text-zinc-100"
          >
            <Image
              src="/icons.png"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full transition duration-500 h-8 w-8"
            />
            <span className="font-inter font-bold text-zinc-100">Mohan A</span>
          </Link>

          {/* Hamburger Button */}
          <Button
            size="icon"
            className="bg-zinc-800 border-zinc-700 text-zinc-100"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-zinc-100"
              height="1.3em"
              width="1.3em"
            >
              <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
            </svg>
          </Button>
        </div>
      </div>

      {/* ================== Full-Screen Slide-in Mobile Menu ================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-[200] flex flex-col justify-center items-center space-y-10 text-xl font-bold text-zinc-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close mobile menu"
              className="absolute right-8 top-9 text-zinc-100"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="2em"
                width="1.5em"
              >
                <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
              </svg>
            </button>

            {/* Menu Links with staggered animation */}
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-400 transition-colors text-lg"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
