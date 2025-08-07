"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: -90, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-2.5 md:py-3   px-3 md:px-8 "
    >
      <nav>
        <ul className="flex gap-x-2 md:gap-x-5 justify-center md:justify-between">
          {links.map((link) => (
            <li
              className="font-semibold px-2 py-1 md:px-5 md:py-2 hover:bg-neutral-100 md:text-2xl rounded-full foucs:bg-neutral-100 transition-all duration-200"
              key={link.id}
            >
              <Link href={`#${link.name.toLowerCase()}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
