import React from "react";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0.8, y: 200 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Nahuel Nicolas Fadel
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-xl"
      >
        FullStack Developer
      </motion.h2>
    </div>
  );
}
