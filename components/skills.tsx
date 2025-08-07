"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Framer motion",
  ],
  "State Management": ["Redux", "Zustand"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "Mongoose", "Prisma", "SQL", "Redis", "Upstash"],
  "Form & Validation": ["React Hook Form", "Zod"],
  "Backend Services": ["Nodemailer"],
};

export default function Skills() {
  return (
    <div className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold mb-6"
      >
        Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-200 transition cursor-default select-none"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
