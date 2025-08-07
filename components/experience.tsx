"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Self-Taught Full-Stack Developer",
    date: "2023 – Present",
    description: [
      "Built full-stack apps using the MERN stack.",
      "Integrated auth, APIs, and state management from scratch.",
      "Worked with tools like Next.js, React Query, and Framer Motion.",
      "Currently exploring AI tools and stacks",
      "Focused on clean, scalable code and real-world app structure.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full mt-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold mb-10 text-gray-900"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-neutral-300 pl-6 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-black rounded-full border-4 border-white shadow-md"></div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{exp.date}</p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {exp.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
