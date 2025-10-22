import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/page";

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
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
