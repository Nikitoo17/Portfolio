import React from "react";
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import { motion } from "framer-motion";
import Skills from "../../components/Skills/Skills";

// animate={{ x: "0px", opacity: 1}}

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-40 w-full px-40">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0.8, x: "-20px" }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Nahuel Nicolas Fadel
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0.8, x: "20px" }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xl"
          >
            FullStack Developer
          </motion.h2>
          <motion.img
            src={foto}
            alt="Foto Personal"
            initial={{ opacity: 0.8, scale: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-[600px] rounded-[15px]  mt-5"
          />
          <Social />
        </div>
        <BoxHeader />
      </div>
      <Skills />
    </div>
  );
};

export default Home;
