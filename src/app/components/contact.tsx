"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            className="flex-1 flex flex-col gap-4 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <motion.input
                key={i}
                type={placeholder.includes("Email") ? "email" : "text"}
                placeholder={placeholder}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white"
                variants={fadeUp}
              />
            ))}

            <motion.textarea
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] text-sm sm:text-base bg-white"
              variants={fadeUp}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="bg-red-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-red-600 transition text-sm sm:text-base cursor-pointer"
              variants={fadeUp}
            >
              Submit Message
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
              priority={false} // 🚀 not critical for LCP
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
