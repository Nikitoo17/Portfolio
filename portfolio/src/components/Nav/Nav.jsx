import React from "react";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { TfiBriefcase } from "react-icons/tfi";
import { BsPersonVcard } from "react-icons/bs";

import style from "./Nav.module.css";
const Nav = () => {
  return (
    <motion.div
      className={style.divNav}
      whileInView={{ y: "20px" }}
      transition={{ type: "spring", bounce: 0.6, duration: 1 }}
    >
      <a href="#home" className={style.link}>
        <IoPersonOutline className={style.icons} />
      </a>

      <a href="#skills" className={style.link}>
        <BsPersonVcard className={style.icons} />
      </a>

      <a href="#proyectos" className={style.link}>
        <TfiBriefcase className={style.icons} />
      </a>
      <a
        href="https://github.com/Nikitoo17/Portfolio/raw/main/portfolio/src/utils/Nicolas's%20Resume.pdf"
        className={style.link}
        download
      >
        {/* <BsPhone className={style.icons} /> */}
        <p>CV</p>
      </a>
    </motion.div>
  );
};

export default Nav;
