"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Container } from "../container";

export default function Projects() {
  const Project = [
    {
      title: "AI Learning Assistant.",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose.",
      image: "/projects.png",
      href: "https://github.com/Mohandev2004/Interview-App-AI",
    },
    {
      title: "AI Learning Assistant.",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
    {
      title: "AI Learning Assistant.",
      desc: "This website leverages AI (powered by Gemini) to help users learn any topic they choose.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
  ];

  return (
    <Container>
      <section className="bg-black py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-white font-bold mt-8 mb-4">
            Projects
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed mb-6">
            I`m interested in building new solutions to problems and creating new projects. These are some of my projects. To see more of my work, visit my
            <Link
              href="https://github.com/Mohandev2004?tab=repositories"
              target="_blank">
              <span className="font-semibold text-zinc-600 hover:text-cyan-500 "> GitHub Profile.</span>
            </Link>
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
                        fill
                        src={Project.image}
                        alt={Project.title}

                        className="object-cover object-center mix-blend-multiply p-2 rounded-2xl"
                      />
                    </div>

                    <div className="p-3">
                      <h1 className="text-zinc-100 font-bold tracking-wide mt-2 hover:underline">
                        {Project.title}
                      </h1>
                      <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
                        {Project.desc}
                      </p>

                      <div className="flex flex-row justify-between items-center mt-3 px-0.5">
                      
                        <div className="flex flex-row space-x-2 items-center">
                          <FaExternalLinkAlt className="h-3 w-3 text-zinc-300 group-hover:text-cyan-500 transition" />
                          <p className="text-zinc-300 group-hover:text-cyan-500 text-xs">
                            View project
                          </p>
                        </div>

                       
                        <div className="flex flex-row space-x-2 items-center">
                          <FaGithub className="h-5 w-5 text-zinc-300 group-hover:text-cyan-500 transition" />
                          <p className="text-zinc-300 group-hover:text-cyan-500 text-xs">
                            Source
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="flex items-center justify-center font-bold text-sm text-white px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-600 transition"
        >
          View All Projects
        </Link>
      </div>
    </Container>
  );
}
