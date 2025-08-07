"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Eye, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stacks: string[];
  preview?: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "Preronaa",
    description:
      "Preronaa is your chill, aesthetic digital pinboard — like Pinterest, but cooler. Save pins, add captions, connect through likes and comments, and keep your profile fresh. Built for modern creators with smart, sleek features.",
    stacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "React Hook Form",
      "Zod",
      "NextAuth",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Nodemailer",
    ],
    preview: "https://project-preronaa.vercel.app/",
    repo: "https://github.com/Dewanshakib/project-preronaa",
  },
  {
    title: "REST API",
    description:
      "Type-safe REST API with JWT cookie auth, Prisma ORM, and full CRUD — built with Node.js, Express, and TypeScript.",
    stacks: [
      "Express",
      "Node.js",
      "Prisma",
      "TypeScript",
      "MySQL",
      "Cors",
      "Dotenv",
      "Bcryptjs",
    ],
    repo: "https://github.com/Dewanshakib/restapi-prisma-mysql",
  },
  {
    title: "Shosthir Saya",
    description: "A website for the Shosthir Saya charity organization.",
    stacks: [
      "React",
      "Next.js",
      "MongoDB",
      "Mongoose",
      "React Hot Toast",
      "Framer Motion",
    ],
    preview: "https://shostir-saya-lovat.vercel.app/",
    repo: "https://github.com/Dewanshakib/Shostir-Saya---2025",
  },
];

// Variants for fade-in + slide-up
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState<number>(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      setDragWidth(carousel.scrollWidth - carousel.offsetWidth);
    }
  }, []);

  return (
    <section id="projects" className="mt-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold mb-6 text-neutral-900"
      >
        Projects
      </motion.h2>

      <motion.div
        ref={carouselRef}
        className="overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex space-x-6 py-6 items-stretch"
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="max-w-[500px] w-full bg-white text-neutral-900 p-4 md:p-8 shadow-lg rounded-2xl flex-shrink-0 flex flex-col justify-between h-full min-h-[320px]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                <p className="text-sm mb-4">{proj.description}</p>
                <div className="mb-4">
                  <span className="font-medium">Stacks:</span>{" "}
                  <span className="text-sm">{proj.stacks.join(", ")}</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                {proj.preview && (
                  <a
                    href={proj.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition"
                  >
                    <Eye size={16} /> Preview
                  </a>
                )}
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition"
                >
                  <Github size={16} /> Repo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
