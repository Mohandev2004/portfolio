import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../components/container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Main () {
    return(
        <div className="min-h-[70vh] antialiased bg-black p-4 px-6">
      <Container>
        <section className="relative block lg:flex max-w-5xl mx-auto mt-10 md:mt-20 items-center justify-between gap-10">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
              Trust me, I&apos;m a{" "}
              <span className="text-cyan-500">software engineer.</span>
            </h1>

            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
              Meet <span className="font-semibold text-zinc-300">Mohan A</span>,
              content creator, educator, and entrepreneur known for his expertise
              in the tech industry. He has successfully launched numerous
              technical courses on various platforms. Founder of{" "}
              <span className="font-semibold text-zinc-300">Teachyst</span>, a
              white-labeled Learning Management System (LMS) to help educators
              monetize their content globally.
            </p>

            <p className="text-zinc-600 text-sm mt-2">~ ChatGPT</p>
          </div>

          <div className="flex flex-col items-center mt-10 lg:mt-0">
            <Image
              src="/image.png"
              alt="Avatar"
              width={500}
              height={500}
              className="rounded-2xl p-2 transition duration-500 w-80 h-80 hidden lg:block"
            />

            <div className="flex flex-row justify-center space-x-4 mt-4 ">
              <Link
                href="https://github.com/Mohandev2004"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>

              <Link
                href="https://x.com/MohanA277916531"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mohan-a-0435a338b/"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://peerlist.io/themohan2004"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <SiPeerlist className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
    )
}