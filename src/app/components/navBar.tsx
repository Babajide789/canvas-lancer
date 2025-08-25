"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Typed animation variants
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as const, // strict typing fix
      },
    }),
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-black/90 backdrop-blur shadow-md text-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
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
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-red-600 transition-colors">Portfolio</Link>
          <Link href="/testimonies" className="hover:text-red-600 transition-colors">Testimonies</Link>
          <Link href="/faq" className="hover:text-red-600 transition-colors">Faqs</Link>

          <Link href="/contact">
            <button className="ml-4 rounded-full bg-red-500 px-6 py-2 text-white font-semibold shadow hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Animated Hamburger / X */}
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

      {/* Mobile Dropdown Menu */}
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
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/testimonies", label: "Testimonies" },
              { href: "/faq", label: "Faqs" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Link href={link.href} className="block hover:text-red-600">
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={6}
            >
              <Link href="/contact">
                <button className="w-full rounded-full bg-red-500 px-6 py-2 text-white font-semibold shadow hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
