"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const Project = [
    {
      title: "AI Learning Assistant – Personalized Q&A and Detailed Explanations",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose. Users can specify a subject, and the platform generates relevant questions along with detailed answers, explanations, and insights, providing a personalized learning experience. It’s like having a smart tutor available anytime to guide your learning.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
    {
      title: "AI Learning Assistant – Personalized Q&A and Detailed Explanations",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose. Users can specify a subject, and the platform generates relevant questions along with detailed answers, explanations, and insights, providing a personalized learning experience. It’s like having a smart tutor available anytime to guide your learning.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
    {
      title: "AI Learning Assistant – Personalized Q&A and Detailed Explanations",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose. Users can specify a subject, and the platform generates relevant questions along with detailed answers, explanations, and insights, providing a personalized learning experience. It’s like having a smart tutor available anytime to guide your learning.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
  ];

  return (
    <section className="bg-black py-28">
      <div className="max-w-5xl mx-auto px-10">
        <h1 className="text-2xl md:text-3xl text-white font-bold mt-8 mb-4">
          Projects
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed mb-6">
          I`m interested in building new solutions to problems and creating new projects. These are some of my projects. To see more of my work, visit my
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Project.map((Project, i) => (
            <Link
              key={i}
              href={Project.href}
              target="_blank"
              className="relative group block p-2"
            >
              <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50 transition-all">
                <div className="relative z-50">
                  <div className="h-44 sm:h-56 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
                    <Image
                      src={Project.image}
                      alt={Project.title}
                      fill
                      className="object-cover object-center mix-blend-multiply"
                    />
                  </div>

                  <div className="p-3">
                    <h4 className="text-zinc-100 font-bold tracking-wide mt-2">
                      {Project.title}
                    </h4>
                    <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
                      {Project.desc}
                    </p>

                    <div className="flex flex-row space-x-2 mt-3 items-center px-0.5">
                      <FaExternalLinkAlt className="h-3 w-3 text-zinc-500 group-hover:text-cyan-500 transition" />
                      <p className="text-zinc-500 group-hover:text-cyan-500 text-xs">
                        View project
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
