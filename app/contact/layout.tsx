import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohan's portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, with minimal and smooth microinteractions — perfect for developers and designers.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" antialiased bg-black">
      {children}
    </main>
  );
}

