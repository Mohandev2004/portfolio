import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohan-a.me"),
  title: {
    default: "Mohan | Full-Stack Software Developer",
    template: "%s | Mohan",
  },
  description:
    "Explore Mohan’s portfolio to see his projects and journey in tech — showcasing expertise in React, Next.js, Node.js, and modern web development.",
  keywords: [
    "Mohan A",
    "Mohan Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Open Source",
  ],
  icons: {
    icon: "/mohan.png",
    shortcut: "/mohan.png",
    apple: "/mohan.png",
  },
  authors: [{ name: "Mohan", url: "https://mohan-a.me" }],
  creator: "Mohan",
  openGraph: {
    title: "Mohan | Developer Portfolio",
    description:
      "Explore Mohan’s portfolio to see his projects and journey in tech — showcasing expertise in React, Next.js, Node.js, and modern web development.",
    url: "https://mohan-a.me",
    siteName: "Mohan Portfolio",
    type: "website",
    images: [
      {
        url: "/mohan.png",
        width: 1100,
        height: 565,
        alt: "Mohan Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan | Full-Stack Software Developer",
    description:
      "Explore Mohan’s portfolio to see his projects and journey in tech.",
    images: ["/mohan.png"],
    creator: "@your_twitter_handle",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black`}
      >
        <Toaster
  richColors
  toastOptions={{
    style: {
      background: "#1a1a1a",
      color: "#e4dedef0",
      border: "1px solid #333",
    },
  }}
/>

        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
