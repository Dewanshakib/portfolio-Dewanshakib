"use client";
import React from "react";
import { motion, animate } from "framer-motion";

export const Navbar = () => {
  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 110; // adjust if your nav height changes
      const targetY =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      animate(window.scrollY, targetY, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -90, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-2.5 md:py-3 px-3 md:px-8"
    >
      <nav>
        <ul className="flex gap-x-2 md:gap-x-5 justify-center md:justify-between">
          {links.map((link) => (
            <li
              className="font-semibold px-2 py-1 md:px-5 md:py-2 hover:bg-neutral-100 md:text-2xl rounded-full focus:bg-neutral-100 transition-all duration-200 cursor-pointer"
              key={link.id}
              onClick={() => scrollToSection(link.name.toLowerCase())}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
