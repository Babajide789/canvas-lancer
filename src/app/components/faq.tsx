"use client";

import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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


const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, UI/UX design, mobile apps, and SEO solutions tailored to your brand’s needs.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us via email, phone, or by filling out the contact form on our website.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is project-based and flexible depending on your scope and requirements. Contact us for a tailored quote.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, we provide post-project support and maintenance packages to ensure smooth performance.",
  },
];

export default function FAQ() {
  return (
    <section className="FAQ max-w-3xl mx-auto py-16 px-4" id="faq">

      {/* FAQ SECTION */}
      <motion.div
        className="FAQ-top text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          variants={fadeUp}
        >
          <div className="w-[80px] h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap">
            FAQs
          </p>
          <div className="w-[80px] h-[1px] bg-gray-300"></div>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 flex flex-col"
          variants={fadeUp}
        >
          Frequently Asked <span className="text-red-500">Questions</span>
        </motion.h2>
      </motion.div>

      {/* QUESTIONS SECTION */}
      <motion.div
        className="questions space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {faqItems.map((faq, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Accordion
              disableGutters
              sx={{
                bgcolor: "#f9fafb",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5 className="font-medium text-lg text-gray-800">
                  {faq.question}
                </h5>
              </AccordionSummary>

              <AccordionDetails>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-600"
                >
                  {faq.answer}
                </motion.p>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
