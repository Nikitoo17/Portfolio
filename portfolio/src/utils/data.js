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
import style from "./data.module.css";

const data = [
  {
    id: 1,
    tittle: "SML StartUp",
    description:
      "Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.",
    image: "sml_general",
    imagealt: "foto proyecto 1",
    link: "https://sml-nicky.vercel.app/",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiMongodb className={style.icon} />,
      <SiTailwindcss className={style.icon} />,
    ],
  },
  {
    id: 10,
    tittle: "Gestion de Empleados",
    description:
      "La gestión de empleados es una funcionalidad clave de la aplicación SML, que permite llevar a cabo diversas acciones, incluyendo la creación de nuevos empleados, la edición de sus datos, la capacidad de suspender o rehabilitar cuentas, así como la asignación de leads a los freelancers.",
    image: "Gestion_de_empleados",
    imagealt: "foto proyecto 1",
    link: "https://sml-nicky.vercel.app/",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiMongodb className={style.icon} />,
      <SiTailwindcss className={style.icon} />,
    ],
  },
  {
    id: 1,
    tittle: "Clasificacion de Empleados",
    description:
      "Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.",
    image: "gestion_de_leads",
    imagealt: "foto1",
    link: "https://sml-nicky.vercel.app/",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiMongodb className={style.icon} />,
      <SiTailwindcss className={style.icon} />,
    ],
  },
  {
    id: 1,
    tittle: "Gestion de Ventas",
    description:
      "La gestión de ventas en la aplicación SML ofrece un seguimiento completo de todas las transacciones, desde prospectos hasta conversiones, para optimizar el proceso comercial.",
    image: "Gestion_de_ventas",
    imagealt: "foto proyecto 1",
    link: "https://sml-nicky.vercel.app/",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiMongodb className={style.icon} />,
      <SiTailwindcss className={style.icon} />,
    ],
  },
  // {
  //   id: 1,
  //   tittle: "Aplicacion de Clientes",
  //   description:
  //     "Nuestra aplicación de clientes permite a los usuarios rastrear sus estadísticas en redes sociales, visualizar su crecimiento y consultar el estado de sus pagos de manera conveniente y efectiva.",
  //   image: "foto1",
  //   imagealt: "foto proyecto 1",
  //   link: "https://sml-nicky.vercel.app/clientes-home",
  //   tecnology: [
  //     <SiJavascript className={style.icon} />,
  //     <SiReact className={style.icon} />,
  //     <SiRedux className={style.icon} />,
  //     <SiExpress className={style.icon} />,
  //     <SiMongodb className={style.icon} />,
  //     <SiTailwindcss className={style.icon} />,
  //   ],
  // },
  {
    id: 2,
    tittle: "Dogs App",
    description: "Proyecto de punta a punta. Front-Back-BDD",
    image: "dog",
    imagealt: "foto proyecto 2",
    link: "https://food-app-client.netlify.app",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiPostgresql className={style.icon} />,
      <SiSequelize className={style.icon} />,
    ],
  },
  {
    id: 3,
    tittle: "Rick and Morty App",
    description: "Proyecto de punta a punta. Front-Back-BDD",
    image: "foto3",
    imagealt: "foto proyecto 1",
    link: "https://rickandmorty-cliente-production.up.railway.app",
    tecnology: [
      <SiJavascript className={style.icon} />,
      <SiReact className={style.icon} />,
      <SiRedux className={style.icon} />,
      <SiExpress className={style.icon} />,
      <SiPostgresql className={style.icon} />,
      <SiSequelize className={style.icon} />,
    ],
  },
];

export default data;
