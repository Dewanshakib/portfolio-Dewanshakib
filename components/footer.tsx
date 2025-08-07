"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className=" py-4 text-center text-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      © {new Date().getFullYear()}{" "}
      <Link className="font-medium" href={"https://github.com/Dewanshakib"} target="_blank">
        Dewanshakib
      </Link>
      . Built with 💜 and code.
    </motion.footer>
  );
}
