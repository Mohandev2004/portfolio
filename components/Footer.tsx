"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="border-t border-slate-900/6 max-w-6xl mx-auto px-8 bg-black w-full">
            <div className="flex flex-col justify-center items-center py-8">

                <Link
                    href="/"
                    className="font-bold text-sm flex items-center justify-center space-x-2 text-white text-xl"
                >
                    <Image
                        src="/icons.png"
                        alt="Avatar"
                        width={30}
                        height={30}
                        className="transition duration-500 rounded-full h-8 w-8"
                    />
                    <span className="font-inter font-bold text-white text-xl">Mohan A</span>
                </Link>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <Link href="/about" className="text-zinc-100 text-sm relative p-2">
                        About
                    </Link>
                    <Link href="/projects" className="text-zinc-100 text-sm relative p-2">
                        Projects
                    </Link>
                    <Link href="/blog" className="text-zinc-100 text-sm relative p-2">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-zinc-100 text-sm relative p-2">
                        Contact
                    </Link>
                </div>

                <div className="flex flex-col items-center lg:mt-0">
                    {/* Social Links */}
                    <div className="flex flex-row justify-center space-x-4 mt-4">
                        <Link
                href="https://github.com/Mohandev2004"
                aria-label="Github"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>

              <Link
                href="https://x.com/MohanA277916531"
                aria-label="X"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mohan-a-0435a338b/"
                aria-label="LinkedIn"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://peerlist.io/themohan2004"
                aria-label="PeerList"
                target="_blank"
                className="text-zinc-500 hover:text-cyan-500 transition-colors"
              >
                <SiPeerlist className="h-5 w-5" />
              </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
