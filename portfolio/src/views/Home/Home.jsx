import React from "react";
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import { motion } from "framer-motion";
import Skills from "../../components/Skills/Skills";

// animate={{ x: "0px", opacity: 1}}

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-start pt-40 w-full px-40"
      id="home"
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <motion.img
            src={foto}
            alt="Foto Personal"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[700px] rounded-[15px]  mt-5  shadow-sm shadow-purple-950 mx-auto"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
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
          <BoxHeader />
          <Social />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
