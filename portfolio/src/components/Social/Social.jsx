import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      className="flex items-center justify-center gap-x-10"
      initial={{ opacity: 0, scale: 1.3 }}
      transition={{ duration: 1, delay: 2 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <a
        href="https://github.com/Nikitoo17"
        className="bg-purple-800 flex items-center justify-center w-20 h-20 text-white p-4 rounded-full hover:scale-125 hover:shadow-2xl hover:shadow-purple-800 transform transition-transform"
        target="_blank"
      >
        <FiGithub className="w-full h-full" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-nahuel-fadel-789031228/"
        className="bg-blue-800 flex items-center justify-center w-20 h-20 text-white p-4 rounded-full hover:scale-125 hover:shadow-2xl hover:shadow-blue-800 transform transition-transform"
        target="_blank"
      >
        <FaLinkedinIn className="w-full h-full" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=543875717508"
        className="bg-green-800 flex items-center justify-center w-20 h-20 text-white p-4 rounded-full hover:scale-125 hover:shadow-2xl hover:shadow-green-800 transform transition-transform"
        target="_blank"
      >
        <FaWhatsapp className="w-full h-full" />
      </a>
    </motion.div>
  );
};

export default Social;
