import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Mohan's portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, with minimal and smooth microinteractions — perfect for developers and designers.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen antialiased bg-black">
      {children}
    </main>
  );
}

