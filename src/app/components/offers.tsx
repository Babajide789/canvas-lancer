"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Offers() {
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Memoize static service data (won’t recreate on re-renders)
  const services = useMemo(
    () => [
      {
        img: "/wireframing.png",
        title: "UI/UX",
        desc: "Crafting user-friendly and engaging interfaces that enhance experience.",
      },
      {
        img: "/mob-dev.png",
        title: "Web Development",
        desc: "Building fast, responsive, and scalable websites tailored for your brand.",
      },
      {
        img: "/ux-ui.png",
        title: "Mobile Apps",
        desc: "Developing powerful mobile solutions that keep your audience connected.",
      },
      {
        img: "/speed.png",
        title: "SEO & Marketing",
        desc: "Helping your brand get discovered online with smart SEO strategies.",
      },
    ],
    []
  );

  return (
    <section
      className="py-16 px-6 sm:px-10 lg:px-20 bg-[#202020]"
      id="services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }} // ✅ animate once for performance
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="flex items-center gap-4 mb-2 w-full">
            <div className="w-[15%] h-[1px] bg-white"></div>
            <p className="text-gray-200 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
              What We Are <span className="text-red-500">Offering</span>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white">
            <span className="block">
              <span className="text-red-500">Services</span> We Can
            </span>
            <span className="block">Offer You!</span>
          </h2>

          <p className="text-white text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
            At Canvas Lancer, we provide creative and strategic solutions to
            elevate your brand. From user-focused design to seamless development
            and digital marketing, our services are tailored to deliver impact.
          </p>

          {/* Hire Us button scrolls to Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition text-sm sm:text-base cursor-pointer"
          >
            Hire Us
          </button>
        </motion.div>

        {/* Right Side - Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // ✅ animate once
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              {/* ✅ Fixed aspect ratio to reduce CLS */}
              <div className="absolute -top-6 left-1/2 sm:left-6 transform -translate-x-1/2 sm:translate-x-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-full shadow-md">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={28}
                  height={28}
                  loading="lazy" // ✅ Lazy load
                />
              </div>
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
