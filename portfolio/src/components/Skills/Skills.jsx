import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
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
    <div className="mt-32 h-[900px] pt-40" id="skills">
      <motion.div
        className=""
        initial={{ opacity: 0, y: "-30px" }}
        transition={{ duration: 1, type: "tween" }}
        whileInView={{ y: "0px", opacity: 1 }}
      >
        <p
          className="text-5xl font-bold text-[#700464] mb-10"
          style={{ textShadow: "0px 3px 10px rgba(255, 255, 255, 1)" }}
        >
          S K I L L S
        </p>
        <motion.div className="flex flex-wrap items-center justify-center h-[700px] w-full  ">
          {skills &&
            skills.map((item, index) => (
              <section className="skills-section" key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, type: "tween", delay: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  data-aos="fade-down-left"
                  className="skills-box items-center "
                  style={{ "--clr": "#FFFFFF", "--i": 0 }}
                >
                  {React.createElement(item.icon, {
                    className: "icon",
                  })}
                  <span>{item.text}</span>
                </motion.div>
              </section>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
