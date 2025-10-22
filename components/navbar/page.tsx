"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/Projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-full justify-between px-8">
          <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
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
                className="text-white text-sm relative px-2 py-2 inline-block hover:text-blue-400 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden w-full justify-between items-center">
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

          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-zinc-100"
            height="1.5em"
            width="1.5em"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
