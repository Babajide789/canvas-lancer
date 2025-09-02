"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        staggerChildren: 0.15, // controls stagger delay
      },
    },
  };

  return (
    <>
      <motion.div
        className="mt-20 text-center pb-16"
        id="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // ✅ triggers every time in view
        variants={fadeUp}
      >
        {/* Section Title */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          variants={staggerContainer}
        >
          <motion.div className="w-[80px] h-[1px] bg-gray-300" variants={fadeUp} />
          <motion.p
            className="text-gray-500 font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
            variants={fadeUp}
          >
            OUR PORTFOLIO
          </motion.p>
          <motion.div className="w-[80px] h-[1px] bg-gray-300" variants={fadeUp} />
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
          variants={fadeUp}
        >
          <span className="text-red-500">Projects</span> We Have Completed
        </motion.h3>

        {/* FILTER BUTTONS */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {["All", "UI/UX", "Development", "Mobile Development", "SEO"].map(
            (item) => (
              <motion.button
                key={item}
                className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium transition-all duration-300"
                variants={fadeUp}
              >
                {item}
              </motion.button>
            )
          )}
        </motion.div>

        {/* PORTFOLIO IMAGES GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px] sm:gap-[10px] md:gap-[5px] mt-12 px-2 sm:px-6 md:px-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {["/frame-1.png", "/frame-2.png", "/frame-3.png"].map((src, i) => (
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
                width={300}
                height={180}
                className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 w-[90%] mx-auto"
              />

              {/* <Image
                src={src}
                alt={`Project ${i + 1}`}
                width={300}
                height={180}
                className="
                  rounded-md shadow-sm 
                  hover:scale-105 transition-transform duration-300
                  w-full sm:w-[90%] md:w-[300px] 
                  h-auto object-cover mx-auto
                "
              /> */}

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
