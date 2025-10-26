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
  title: "Mohan | Full-Stack Software Developer",
  description:
    "A perfect portfolio website template that showcases your skills, with minimal and smooth microinteractions — perfect for developers and designers.",
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
