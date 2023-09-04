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
    <div className="mt-32 h-[900px] pt-72" id="skills">
      <motion.div
        className=""
        initial={{ opacity: 0, y: "-30px" }}
        transition={{ duration: 1, type: "tween" }}
        whileInView={{ y: "0px", opacity: 1 }}
      >
        <h1 className="text-3xl mb-6">Mis Habilidades</h1>
        <motion.div className="flex flex-wrap items-center justify-center h-[700px]  w-full">
          {skills &&
            skills.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center text-sm m-4"
                key={index}
              >
                {React.createElement(item.icon, {
                  className: "mb-1 w-[100px] h-[100px]",
                })}
                <span>{item.text}</span>
              </div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
