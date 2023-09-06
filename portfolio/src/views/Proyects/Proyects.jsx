import React from "react";
import style from "./Proyects.module.css";
import { motion } from "framer-motion";
import data from "../../utils/data.js";

import CardProyect from "../../components/CardProyect/CardProyect";

const Proyects = () => {
  return (
    <motion.div
      className={style.contenedor}
      id="proyectos"
      initial={{ opacity: 0, y: "-30px" }}
      transition={{ duration: 1, type: "tween" }}
      whileInView={{ y: "0px", opacity: 1 }}
    >
      <p
        className="text-5xl font-bold text-[#700464] mb-10"
        style={{ textShadow: "0px 3px 10px rgba(255, 255, 255, 1)" }}
      >
        P R O Y E C T O S
      </p>
      <div className={style.divProyects}>
        {data.map(
          ({ id, tittle, description, image, imageAlt, tecnology, link }) => {
            return (
              <CardProyect
                key={id}
                id={id}
                link={link}
                tittle={tittle}
                description={description}
                image={image}
                imageAlt={imageAlt}
                tecnology={tecnology}
              />
            );
          }
        )}
      </div>
    </motion.div>
  );
};

export default Proyects;

// viewport={{ once: true }} para que no lo haga de manera ilimitada
