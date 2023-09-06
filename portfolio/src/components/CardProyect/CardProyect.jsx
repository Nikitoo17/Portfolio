import React, { useState } from "react";
import style from "./CardProyect.css";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";
const proyectsImage = require.context("../../assets/proyectsImage");

const CardProyect = ({
  id,
  tittle,
  description,
  image,
  imagealt,
  link,
  tecnology,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <motion.div
        className="divCard"
        onClick={openModal}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          src={proyectsImage(`./${image}.webp`)}
          alt="imagen Proyecto"
          className="img"
        />
        <h1 className="relative bg-opacity-80 bg-blur-md mt-4 text-lg px-2 py-1 rounded-lg z-10">
          {tittle}
        </h1>
      </motion.div>
      <Modal
        id={id}
        tittle={tittle}
        image={image}
        link={link}
        description={description}
        tecnology={tecnology}
        isOpen={isOpen}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CardProyect;
