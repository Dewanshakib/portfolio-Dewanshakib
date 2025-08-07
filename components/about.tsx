"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mt-16" id="about">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold text-neutral-900 mb-5 md:mb-10"
      >
        About
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-base md:text-lg leading-relaxed text-gray-800 font-medium"
      >
        <p className="md-3 sm:mb-4">
          Back when I was in <span className="font-semibold">7th grade</span>, I
          was lucky enough to have a computer at home and that moment changed
          everything.
        </p>
        <p className="mb-3 sm:mb-4">
          At first, I was just exploring, playing games, and getting used to how
          a PC worked. But over time, something clicked. I realized I {"didn’t"}
          just want to use a computer. I wanted to build things with
          it.
        </p>
        <p className="mb-4 sm:mb-4">  
          So, I started learning the basics
          <span className="font-semibold"> HTML and CSS </span>and quickly fell in
          love with the process of creating something from scratch.
        </p>
        <p className="mb-3 sm:mb-4">
          What began as curiosity soon turned into a passion. Now, coding isn't
          just a skill for me it's my hobby, my work and something I genuinely
          enjoy every day.
        </p>
        <p>
          Whether {"I’m"} building web apps or experimenting with new tech. I love turning ideas into real,
          functional products.
        </p>
      </motion.div>

      
    </div>
  );
}
