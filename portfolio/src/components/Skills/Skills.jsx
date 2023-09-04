import React from "react";
import { motion } from "framer-motion";
import style from "./Skills.module.css";
import {
  SiJavascript,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiVite,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiSass,
  SiLess,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: SiJavascript, text: "Javascript" },
    { icon: SiTypescript, text: "Typescript" },
    { icon: SiReact, text: "React" },
    { icon: SiNextdotjs, text: "NextJS" },
    { icon: SiVite, text: "Vite" },
    { icon: SiRedux, text: "Redux" },
    { icon: SiNodedotjs, text: "NodeJS" },
    { icon: SiExpress, text: "Express" },
    { icon: SiPostgresql, text: "PostgreSQL" },
    { icon: SiSequelize, text: "Sequelize" },
    { icon: SiMongodb, text: "MongoDB" },
    { icon: SiTailwindcss, text: "Tailwind" },
    { icon: SiCss3, text: "CSS" },
    { icon: SiHtml5, text: "HTML" },
    { icon: SiSass, text: "Sass" },
    { icon: SiLess, text: "Less" },
    { icon: SiCplusplus, text: "C++" },
    { icon: SiCsharp, text: "C#" },
    { icon: SiDotnet, text: ".NET" },
  ];
  return (
    <div className={style.contenedor} id="skills">
      <motion.div
        className={style.divContainer}
        initial={{ opacity: 0, y: "-30px" }}
        transition={{ duration: 1, type: "tween" }}
        whileInView={{ y: "0px", opacity: 1 }}
      >
        <h1 className={style.title}>My Skills</h1>
        <motion.div className={style.divIcons}>
          {skills &&
            skills.map((item, index) => (
              <div className={style.divSkill} key={index}>
                {React.createElement(item.icon, { className: style.icons })}
                <span>{item.text}</span>
              </div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
