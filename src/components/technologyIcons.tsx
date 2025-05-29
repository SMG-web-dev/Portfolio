import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaJava,
  FaDocker,
  FaPhp,
  FaAws
} from "../constants/icons";
import {
  SiTypescript,
  SiTailwindcss,
  SiSpring,
  SiMysql,
  SiBootstrap,
  SiNextdotjs,
  SiGooglegemini
} from '../constants/icons';

export const technologyIcons: { [key: string]: React.ReactNode } = {
  HTML: <FaHtml5 size={38} color="#E34F26" />,
  CSS: <FaCss3Alt size={38} color="#1572B6" />,
  SASS: <FaSass size={40} color="#CC6699" />,
  JavaScript: <FaJs size={38} color="#F7DF1E" />,
  React: <FaReact size={38} color="#61DAFB" />,
  Java: <FaJava size={38} color="#007396" />,
  Tailwind: <SiTailwindcss size={38} color="#06B6D4" />,
  Spring: <SiSpring size={38} color="#6DB33F" />,
  AWS: <FaAws size={38} color="#FF9900" />,
  TypeScript: <SiTypescript size={38} color="#3178C6" />,
  Docker: <FaDocker size={43} color="#2496ED" />,
  PHP: <FaPhp size={38} color="#777BB4" />,
  MYSQL: <SiMysql size={38} color="#4479A1" />,
  Bootstrap: <SiBootstrap size={38} color="#7952B3" />,
  NextJS: <SiNextdotjs size={38} color="#000000" />,
  Gemini: <SiGooglegemini size={38} color="#00A8E8" />
};