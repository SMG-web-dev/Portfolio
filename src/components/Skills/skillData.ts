import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaNodeJs,
  FaAws,
  FaReact,
  FaPhp,
  FaWindows,
  FaLinux,
  FaWordpress,
  FaGitAlt,
  FaDocker,
  FaAngular,
  FaMicrosoft,
  FaRobot,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiOracle,
  SiApache,
  SiVisualstudiocode,
  SiEclipseide,
  SiIntellijidea,
  SiStackblitz,
  SiNextdotjs,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiOpenai,
  SiVercel,
  SiSpring,
  SiMariadb,
  SiVite,
} from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { DiDatabase } from "react-icons/di";

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "from-orange-400 to-orange-600" },
      { icon: FaCss3Alt, name: "CSS3", color: "from-blue-400 to-blue-600" },
      {
        icon: FaJs,
        name: "JavaScript",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        color: "from-blue-500 to-blue-700",
      },
      { icon: FaJava, name: "Java", color: "from-red-400 to-red-600" },
      { icon: FaPhp, name: "PHP", color: "from-purple-400 to-purple-600" },
      { icon: FaSass, name: "SASS", color: "from-red-200 to-red-400" },
      {
        icon: DiDatabase,
        name: "PL/SQL",
        color: "from-orange-400 to-orange-600",
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { icon: FaReact, name: "React", color: "from-cyan-400 to-cyan-600" },
      { icon: FaAngular, name: "Angular", color: "from-red-500 to-red-700" },
      {
        icon: SiNextdotjs,
        name: "Next.js",
        color: "from-gray-600 to-gray-800",
      },
      { icon: SiJquery, name: "jQuery", color: "from-blue-600 to-blue-800" },
      { icon: FaNodeJs, name: "Node.js", color: "from-green-400 to-green-600" },
      { icon: SiSpring, name: "Spring", color: "from-green-400 to-green-600" },
      {
        icon: SiTailwindcss,
        name: "TailwindCSS",
        color: "from-teal-400 to-teal-600",
      },
      {
        icon: SiBootstrap,
        name: "Bootstrap5",
        color: "from-purple-500 to-purple-700",
      },
      { icon: SiVite, name: "Vite", color: "from-purple-400 to-purple-600" },
    ],
  },

  {
    name: "Development Tools",
    skills: [
      {
        icon: SiVisualstudiocode,
        name: "VS Code",
        color: "from-blue-500 to-blue-700",
      },
      {
        icon: SiEclipseide,
        name: "Eclipse",
        color: "from-purple-400 to-purple-600",
      },
      {
        icon: SiIntellijidea,
        name: "IntelliJ IDEA",
        color: "from-pink-500 to-pink-700",
      },
      {
        icon: SiStackblitz,
        name: "StackBlitz",
        color: "from-blue-400 to-blue-600",
      },
      { icon: FaGitAlt, name: "Git", color: "from-orange-500 to-orange-700" },
      { icon: FaDocker, name: "Docker", color: "from-blue-400 to-blue-600" },
      {
        icon: FaWordpress,
        name: "WordPress",
        color: "from-blue-500 to-blue-700",
      },
      {
        icon: FaMicrosoft,
        name: "Microsoft Office",
        color: "from-red-500 to-red-700",
      },
    ],
  }, {
    name: "Databases & Cloud",
    skills: [
      { icon: SiMysql, name: "MySQL", color: "from-blue-300 to-blue-500" },
      { icon: SiOracle, name: "OracleDB", color: "from-red-300 to-red-500" },
      {
        icon: SiMariadb,
        name: "MariaDB",
        color: "from-brown-400 to-brown-600",
      },
      { icon: FaAws, name: "AWS", color: "from-yellow-500 to-yellow-700" },
    ],
  },
  {
    name: "Operating Systems & Servers",
    skills: [
      { icon: FaWindows, name: "Windows", color: "from-blue-400 to-blue-600" },
      { icon: FaLinux, name: "Linux", color: "from-yellow-500 to-yellow-700" },
      {
        icon: TbBrandWindows,
        name: "Windows Server",
        color: "from-indigo-400 to-indigo-600",
      },
      { icon: SiApache, name: "Apache", color: "from-red-500 to-red-700" },
    ],
  },
  {
    name: "AI Tools",
    skills: [
      { icon: SiOpenai, name: "ChatGPT", color: "from-green-400 to-green-600" },
      { icon: SiStackblitz, name: "Bolt", color: "from-blue-400 to-blue-600" },
      { icon: SiVercel, name: "V0", color: "from-gray-600 to-gray-800" },
      {
        icon: FaRobot,
        name: "Tabnine",
        color: "from-indigo-400 to-indigo-600",
      },
    ],
  },
];
