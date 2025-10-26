"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

export default function Blogs() {
  const blogs = [
    {
        // To add Blogs

      title: "AI Learning Assistant – Personalized Q&A and Detailed Explanations",
      date: "20 Oct 2025",
     desc: "Learn any topic with this Gemini-powered AI. " +
      "Receive questions, answers, and explanations. " +
      "A personalized tutor available anytime.",
      image: "/projects.png",
      href: "https://interview-app-ai.onrender.com/",
    },
   
  ];

  return (
    <Container>
      <div className="col-span-2 mx-auto max-w-5xl py-15 p-6">
      <h1 className="text-2xl md:text-3xl text-white font-bold px-4">
        Latest Blogs
      </h1>
      <p className="text-zinc-400 text-sm mt-2 px-4">
        Read our latest tutorials and insights
      </p>

      <div className="flex flex-col space-y-6 mt-6 py-2">
        {blogs.map((blog, idx) => (
          <Link
            key={idx}
            href={blog.href}
            target="_blank"
            className="flex flex-col md:flex-row gap-4 p-2 hover:bg-zinc-800 transition rounded-lg"
          >
            <div className="flex-shrink-0">
              <Image
                src={blog.image}
                alt={blog.title}
                width={480}
                height={360}
                className="rounded-lg w-full md:w-64 h-auto"
              />
            </div>
            <div>
              <h2 className="text-zinc-200 font-bold text-lg">{blog.title}</h2>
              <small className="text-zinc-500 block mt-1">{blog.date}</small>
              <p className="text-zinc-200 text-sm mt-2">{blog.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </Container>
  );
}
