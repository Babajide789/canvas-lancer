"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function Portfolio() {
  // Variants for animations
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
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ Memoize filter buttons & portfolio images
  const filters = useMemo(
    () => ["All", "UI/UX", "Development", "Mobile Development", "SEO"],
    []
  );

  const projects = useMemo(
    () => ["/frame-1.png", "/frame-2.png", "/frame-3.png"],
    []
  );

  return (
    <section
      className="mt-20 text-center pb-16"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // ✅ run animation once
        variants={fadeUp}
      >
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          variants={staggerContainer}
        >
          <motion.div
            className="w-[80px] h-[1px] bg-gray-300"
            variants={fadeUp}
          />
          <motion.p
            className="text-gray-500 font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
            variants={fadeUp}
          >
            OUR PORTFOLIO
          </motion.p>
          <motion.div
            className="w-[80px] h-[1px] bg-gray-300"
            variants={fadeUp}
          />
        </motion.div>

        <motion.h2
          id="portfolio-title"
          className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
          variants={fadeUp}
        >
          <span className="text-red-500">Projects</span> We Have Completed
        </motion.h2>
      </motion.div>

      {/* FILTER BUTTONS */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {filters.map((item) => (
          <motion.button
            key={item}
            className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium transition-all duration-300 cursor-pointer"
            variants={fadeUp}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      {/* PORTFOLIO IMAGES GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px] sm:gap-[10px] md:gap-[5px] mt-12 px-2 sm:px-6 md:px-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" as const },
              },
            }}
          >
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              width={400}
              height={250}
              priority={i === 0} // ✅ Load first image faster
              loading={i === 0 ? "eager" : "lazy"} // ✅ Lazy-load others
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 w-[90%] mx-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
