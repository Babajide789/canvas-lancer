// src/components/ui/Button.tsx
// import { motion } from "framer-motion";
// import React from "react";

// type ButtonProps = {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary"; // two styles
//   onClick?: () => void;
//   className?: string;
// };

// export default function Button({
//   children,
//   variant = "primary",
//   onClick,
//   className = "",
// }: ButtonProps) {
//   const baseStyle =
//     "px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none";

//   const variants: Record<string, string> = {
//     primary:
//       "bg-red-600 hover:bg-red-700 text-white hover:shadow-lg",
//     secondary:
//       "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg",
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className={`${baseStyle} ${variants[variant]} ${className}`}
//     >
//       {children}
//     </motion.button>
//   );
// }
