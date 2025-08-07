"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  const inputVariant = { focus: { scale: 1.02 } };

  return (  
    <div id="contact" className="mt-16  text-gray-800 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl md:text-4xl ml-4 font-bold text-neutral-900 mb-5.5 md:mb-10"
      >
        Contact
      </motion.h1>
      <motion.div
        className=" w-full border border-gray-200 p-5 md:p-8 bg-white rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium ">
              Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className=" text-gray-800 placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              variants={inputVariant}
              whileFocus="focus"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="text-gray-800 placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              variants={inputVariant}
              whileFocus="focus"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium ">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className=" text-gray-800 placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              variants={inputVariant}
              whileFocus="focus"
            />
          </div>

          <motion.button
            type="submit"
            className="mt-2 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {status === "success" && (
          <motion.p
            className="mt-6 text-green-800 font-medium text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks! I will get back to you soon.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="mt-6 text-red-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Oops! Something went wrong.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
