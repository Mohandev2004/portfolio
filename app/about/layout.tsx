import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Mohan ",
  description:
    "A perfect portfolio website template that showcases your skills, with minimal and smooth microinteractions — perfect for developers and designers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-100 bg-neutral-700">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
