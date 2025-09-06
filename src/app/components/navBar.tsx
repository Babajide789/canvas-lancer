"use client";

import { useState } from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);


  const linkVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // Sections for scrolling
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonies", label: "Testimonies" },
    { href: "#faq", label: "Faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-black/90 backdrop-blur shadow-md text-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold hover:text-red-600 transition-colors"
        >
          <Image
            src="/LOGO.png"
            alt="Site Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          Canvas Lancer
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-red-600 transition-colors">
              {link.label}
            </a>
          ))}

          <a href="#contact">
            <button className="ml-4 rounded-full bg-red-500 px-6 py-2 text-white font-semibold shadow hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
              Contact Us
            </button>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded mb-1"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded mb-1"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded"
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-black/95 text-white px-4 py-4 space-y-4 text-center"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <a
                  href={link.href}
                  className="block hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}

            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={6}
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="w-full cursor-pointer rounded-full bg-red-500 px-6 py-2 text-white font-semibold shadow hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
                  Contact Us
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
