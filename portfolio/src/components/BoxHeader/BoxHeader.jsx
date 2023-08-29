import React from "react";
import { motion } from "framer-motion";
const BoxHeader = () => {
  return (
    <motion.div
      className="p-6 w-[900px]  text-justify mt-10 "
      initial={{ opacity: 0.8, scale: 0.9 }}
      transition={{ duration: 1, delay: 0.1 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <h3 className="text-center text-[40px] font-bold mb-2">Sobre Mí</h3>
      <p className="text-center text-xl mb-2">
        ¡Hola! Soy Nahuel Nicolás Fadel, Desarrollador FullStack.
        <br />
        Desde entonces, me he mantenido en constante formación, tanto en
        experiencia como en conocimientos. Me considero una persona comprometida
        con mi crecimiento continuo Tengo un enfoque dedicado en mejorar mis
        habilidades y aplicar mis conocimientos en proyectos interesantes y
        desafiantes. Estoy emocionado por seguir explorando nuevas tecnologías y
        oportunidades que la programación me brinda en el futuro.
        <br /> Me destaco en la resolución de problemas mediante la búsqueda
        activa de soluciones y alternativas, y en resolver diferente problemas
        de manera creativa. Ademas estoy super dispuesto a mejorar, aprender mas
        sobre esta profesión y contribuir con muchos proyectos que me ayuden a
        formarme como profesional. Valoro mucho el trabajo en equipo y la
        interaccion constante!
      </p>
    </motion.div>
  );
};

export default BoxHeader;
