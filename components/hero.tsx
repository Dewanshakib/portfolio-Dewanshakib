"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../public/profile.webp";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full mt-16 p-5 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0, rotate: -300 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: "circOut" }}
        className="relative w-44 h-44 sm:w-50 sm:h-50 rounded-full overflow-hidden"
      >
        <Image
          className="object-cover"
          src={profile}
          alt="avatar"
          fill
          sizes="(max-width:200px)"
        />
      </motion.div>
      <div className="mt-10">
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          Hey, I'm <span className="text-neutral-500">Shakib</span>
        </motion.h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="md:text-xl max-w-xl mb-6 text-gray-700 mt-5 font-medium leading-relaxed"
        >
          {"I’m"} a full-stack dev and AI enthusiast. I build smooth web apps,
          explore new tech, and turn messy ideas into clean, scalable code.
          Always learning, always building. {"Let’s"} make something awesome.
        </motion.p>
      </div>
      <div className="mt-8 sm:mt-12">
        <motion.a
          href="/resume.pdf"
          download="resume.pdf"
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          <Download size={18} />
          Download Resume
        </motion.a>

        {/* Social links under Download button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex space-x-6 justify-center -mt-8.5"
        >
          <Link
            href="https://github.com/Dewanshakib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dewan-md-shakib-al-mujib-892900372/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:shakib.devv@gmail.com"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Mail size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
