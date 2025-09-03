"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function Feedback() {
  // ✅ Memoize feedback cards
  const feedbacks = useMemo(
    () => [
      {
        text: "Canvas Lancer completely transformed our website. We’ve seen a huge boost in engagement since the redesign.",
        img: "/alexander-hipp.jpg",
        name: "Alexander Hipp",
        role: "CEO, BrightTech",
      },
      {
        text: "The team delivered exactly what we envisioned—clean, modern, and user-friendly. Couldn’t be happier!",
        img: "/michael-dam.jpg",
        name: "Jane Smith",
        role: "CTO, NovaLabs",
      },
      {
        text: "Working with them was seamless. They understood our needs and delivered beyond expectations.",
        img: "/emily-johnson.jpg",
        name: "Emily Johnson",
        role: "CMO, Visionary Co.",
      },
    ],
    []
  );

  return (
    <section
      className="py-20 bg-[#202020]"
      id="testimonies"
      aria-labelledby="feedback-title"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 mb-2 w-full">
              <div className="w-[15%] h-[1px] bg-gray-600"></div>
              <p className="text-gray-200 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
                Customer <span className="text-red-500">Feedback</span>
              </p>
            </div>

            <h2
              id="feedback-title"
              className="text-left text-3xl md:text-4xl font-bold text-white mt-2"
            >
              What Our <span className="text-red-500">Customers</span> <br />
              Say About Us
            </h2>
          </div>
        </motion.div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <p className="text-gray-600 italic mb-6">“{card.text}”</p>

              {/* Rating Image */}
              <Image
                src="/rating.png"
                alt="rating"
                width={80}
                height={80}
                loading="lazy"
                sizes="80px"
                className="mx-auto mb-4"
              />

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.name}
                    fill
                    sizes="48px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <div className="text-left">
                  <h5 className="font-semibold text-lg text-gray-900">
                    {card.name}
                  </h5>
                  <span className="text-sm text-gray-500">{card.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
