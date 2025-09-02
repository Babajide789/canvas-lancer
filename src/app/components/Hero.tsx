// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      id="home"
      style={{ backgroundImage: "url('/background-img.png')" }}
    >
      <div className="h-full flex flex-col items-center justify-center text-center bg-black/50 text-white px-4">
        <div className="welcome-text space-y-6 max-w-3xl">
          {/* Small heading + Main heading as one block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h5 className="flex justify-center items-center gap-2 text-base sm:text-lg md:text-xl font-medium">
              Welcome To{" "}
              <span className="text-red-500 font-bold">Canvas Lancer</span>
            </h5>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight mt-3">
              Designing the Future with{" "}
              <span className="text-red-500">Canvas Lancer</span>
            </h2>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="h-0.5 w-24 sm:w-40 md:w-52 lg:w-64 bg-red-500 my-4 rounded-full origin-left"></div>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 px-2 sm:px-6 md:px-0"
          >
            At Canvas Lancer, we blend creativity and innovation to design
            impactful digital experiences. Our mission is to shape the future
            with bold ideas and stunning visuals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8"
          >
            <motion.button
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-6 sm:px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Hire Us
            </motion.button>

            <motion.button
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
