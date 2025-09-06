"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // SCROLL FUNCTION
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 bg-gray-50" id="about">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* LEFT SIDE IMAGES */}
        <motion.div
          className="relative w-fit"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* FIRST IMAGE */}
          <div className="relative w-[260px] h-[280px] sm:w-[320px] sm:h-[350px]">
            <Image
              src="/about-img-2.png"
              alt="Team working"
              fill
              priority
              sizes="(max-width: 768px) 80vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              className="rounded-2xl shadow-xl object-cover"
            />
            <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-red-100 rounded-3xl -z-10"></div>
          </div>

          {/* SECOND IMAGE LAZY LOADING */}
          <motion.div
            className="absolute top-28 left-32 sm:top-40 sm:left-48 w-[200px] h-[180px] sm:w-[260px] sm:h-[240px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/about-img-1.png"
              alt="Office work"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 60vw,
                     (max-width: 1200px) 40vw,
                     25vw"
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute bottom-4 -right-4 w-14 h-14 sm:w-20 sm:h-20 bg-red-200 rounded-full -z-10"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* HEADING LINE */}
          <div className="flex items-center gap-4 mb-2 w-full justify-center md:justify-start">
            <div className="w-[15%] h-[1px] bg-gray-500"></div>
            <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
              <span className="text-red-500">About</span> Canvas Lancer
            </p>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            Introduction To The Best <br className="hidden sm:block" /> Digital
            Agency
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            At Canvas Lancer, we blend creativity and strategy to craft impactful
            digital experiences. From UI/UX to mobile apps, web development, and
            SEO, we help brands stand out with solutions that inspire, engage,
            and drive results.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handleScroll("contact")}
          >
            Hire Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
