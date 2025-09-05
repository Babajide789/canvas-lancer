"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!", { id: toastId });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-12"
      id="contact"
    >
      <motion.div
        className="bg-gray-200 rounded-2xl shadow-lg p-6 sm:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* HEADER */}
        <motion.div className="mb-10" variants={fadeUp}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[15%] h-[1px] bg-gray-300"></div>
            <p className="text-red-500 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
              Contact Us
            </p>
          </div>

          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            <span className="text-red-500">Contact</span> Us &amp; We Can
            <br />
            <span>Work Together</span>
          </h4>

          <p className="text-gray-600 leading-relaxed max-w-2xl text-left text-sm sm:text-base">
            Have a project in mind or just want to say hello? <br />
            Fill in the form below and we’ll get back to you as soon as
            possible.
          </p>
        </motion.div>

        {/* CONTENT WRAPPER */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-4 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white"
              variants={fadeUp}
              required
            />

            <motion.input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white"
              variants={fadeUp}
              required
            />

            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] text-sm sm:text-base bg-white"
              variants={fadeUp}
              required
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-xl text-white font-semibold transition text-sm sm:text-base cursor-pointer ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              variants={fadeUp}
            >
              {loading ? "Sending..." : "Submit Message"}
            </motion.button>
          </motion.form>

          {/* IMAGE */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            variants={fadeUp}
          >
            <Image
              src="/contact-frame.png"
              alt="Contact illustration"
              width={400}
              height={400}
              priority={false}
              className="
                max-w-[250px] 
                sm:max-w-[320px] 
                md:max-w-[400px] 
                lg:max-w-[450px] 
                h-auto object-contain
                mt-0 sm:mt-[-50px] md:mt-[-100px] lg:mt-[-200px]
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
