"use client";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

import { useState } from "react";
import Image from "next/image";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { LuMaximize2 } from "react-icons/lu";

export default function About() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-[86.87vh] w-[24vw] top-[1.2vh] left-[0.56vw] bg-[#121212] rounded-[1rem] opacity-100 relative transition-all duration-300 ${
        collapsed ? "w-[4rem]" : "w-[28.75vw]"
      }`}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-2 left-2 p-2 cursor-pointer"
      >
        {collapsed ? (
          <TbLayoutSidebarLeftExpand size={22} className="text-white" />
        ) : (
          <TbLayoutSidebarLeftCollapse size={22} className="text-white" />
        )}
      </button>

      {/* Maximize Button */}
      {!collapsed && (
        <button className="absolute top-2 right-2 p-2 cursor-pointer">
          <LuMaximize2 size={22} className="text-white" />
        </button>
      )}

      {!collapsed && (
        <div className="flex flex-col items-center px-6 py-3 text-center space-y-6">
          {/* Title */}
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-tight text-white">
            About me
          </h2>

          {/* Content Section */}
          <div className="flex flex-col w-full space-y-4">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Profile"
                width={271}
                height={405}
                className="w-[18rem] h-[35vh] rounded-[15px] object-cover"
              />
            </div>

            {/* Bio */}
            <p className="font-inter leading-[140%] text-white">
              Hello, World! I&apos;m{" "}
              <span className="text-blue-400">Mohan </span>
              Full Stack Developer with a strong foundation in both modern
              JavaScript technologies and Java. I&apos;m passionate about
              crafting high-performance, user-focused software that blends
              intuitive design with robust functionality.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-between text-white bg-[#262626] p-3 w-full rounded-lg">
              <a
                href="https://github.com/Mohandev2004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  size={28}
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin
                  size={28}
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300"
                />
              </a>
              <a
                href="https://x.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <FaSquareXTwitter
                  size={28}
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300"
                />
              </a>
              <a
                href="https://leetcode.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode
                  size={28}
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300"
                />
              </a>
            </div>

            {/* Email Section */}
            <div className="flex items-center justify-between text-white bg-[#262626] p-3 w-full rounded-lg">
              <a href="mailto:mohan.me@gmail.com" aria-label="Email">
                <MdOutlineMailOutline
                  size={28}
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300"
                />
              </a>
              <p>mohan.me@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
