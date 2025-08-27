"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";



export default function FAQ() {
  return (
    <div className="FAQ max-w-3xl mx-auto py-16 px-4">
        <div className="FAQ-top text-center mb-10">
                
        {/* Line only 15% of container width */}
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Left Line */}
                <div className="w-[80px] h-[1px] bg-gray-300"></div>

                {/* Text */}
                <p className="text-gray-800 font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap">
                    FAQs
                </p>

                {/* Right Line */}
                <div className="w-[80px] h-[1px] bg-gray-300"></div>
            </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex flex-col">
                    Frequently Asked <span className="text-red-500">Questions</span>
                </h2>

        </div>

      <div className="questions space-y-4">
        <Accordion
          sx={{
            bgcolor: "#f9fafb", // light gray background
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h5 className="font-medium text-lg text-gray-800">
              What services do you offer?
            </h5>
          </AccordionSummary>

          <AccordionDetails>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600"
            >
              We offer web development, UI/UX design, mobile apps, and SEO
              solutions tailored to your brand’s needs.
            </motion.p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "#f9fafb",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h5 className="font-medium text-lg text-gray-800">
              How can I contact you?
            </h5>
          </AccordionSummary>

          <AccordionDetails>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600"
            >
              You can reach us via email, phone, or by filling out the contact
              form on our website.
            </motion.p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "#f9fafb",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h5 className="font-medium text-lg text-gray-800">
              What is your pricing model?
            </h5>
          </AccordionSummary>

          <AccordionDetails>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600"
            >
              Our pricing is project-based and flexible depending on your scope
              and requirements. Contact us for a tailored quote.
            </motion.p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "#f9fafb",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h5 className="font-medium text-lg text-gray-800">
              Do you offer support?
            </h5>
          </AccordionSummary>

          <AccordionDetails>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600"
            >
              Yes, we provide post-project support and maintenance packages to
              ensure smooth performance.
            </motion.p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
