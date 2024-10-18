import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  SiGooglecloud,
  SiMidjourney,
  SiStabilityai,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    subCategories: [
      {
        name: "Languages",
        skills: [
          { icon: FaHtml5, name: "HTML5", color: "from-orange-400 to-orange-600" },
          { icon: FaCss3Alt, name: "CSS3", color: "from-blue-400 to-blue-600" },
          { icon: FaJs, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
          { icon: SiTypescript, name: "TypeScript", color: "from-blue-500 to-blue-700" },
        ],
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { icon: FaReact, name: "React", color: "from-cyan-400 to-cyan-600" },
          { icon: FaAngular, name: "Angular", color: "from-red-500 to-red-700" },
          { icon: SiNextdotjs, name: "Next.js", color: "from-gray-600 to-gray-800" },
          { icon: SiJquery, name: "jQuery", color: "from-blue-600 to-blue-800" },
        ],
      },
      {
        name: "Styling",
        skills: [
          { icon: SiTailwindcss, name: "TailwindCSS", color: "from-teal-400 to-teal-600" },
          { icon: SiBootstrap, name: "Bootstrap5", color: "from-purple-500 to-purple-700" },
        ],
      },
    ],
  },
  {
    name: "Backend",
    subCategories: [
      {
        name: "Languages",
        skills: [
          { icon: FaJava, name: "Java", color: "from-red-400 to-red-600" },
          { icon: FaPhp, name: "PHP", color: "from-purple-400 to-purple-600" },
          { icon: FaNodeJs, name: "Node.js", color: "from-green-400 to-green-600" },
        ],
      },
      {
        name: "Databases",
        skills: [
          { icon: SiMysql, name: "MySQL", color: "from-blue-300 to-blue-500" },
          { icon: SiOracle, name: "OracleDB", color: "from-red-300 to-red-500" },
        ],
      },
    ],
  },
  {
    name: "Development Tools",
    subCategories: [
      {
        name: "IDEs & Editors",
        skills: [
          { icon: SiVisualstudiocode, name: "VS Code", color: "from-blue-500 to-blue-700" },
          { icon: SiEclipseide, name: "Eclipse EE", color: "from-purple-400 to-purple-600" },
          { icon: SiIntellijidea, name: "IntelliJ IDEA", color: "from-pink-500 to-pink-700" },
          { icon: SiStackblitz, name: "StackBlitz", color: "from-blue-400 to-blue-600" },
        ],
      },
      {
        name: "Version Control & Deployment",
        skills: [
          { icon: FaGitAlt, name: "Git", color: "from-orange-500 to-orange-700" },
          { icon: FaDocker, name: "Docker", color: "from-blue-400 to-blue-600" },
        ],
      },
      {
        name: "CMS & Office",
        skills: [
          { icon: FaWordpress, name: "WordPress", color: "from-blue-500 to-blue-700" },
          { icon: FaMicrosoft, name: "Microsoft Office", color: "from-red-500 to-red-700" },
        ],
      },
    ],
  },
  {
    name: "Operating Systems & Servers",
    subCategories: [
      {
        name: "OS",
        skills: [
          { icon: FaWindows, name: "Windows", color: "from-blue-400 to-blue-600" },
          { icon: FaLinux, name: "Linux", color: "from-yellow-500 to-yellow-700" },
        ],
      },
      {
        name: "Servers",
        skills: [
          { icon: SiApache, name: "Apache", color: "from-red-500 to-red-700" },
        ],
      },
      {
        name: "Cloud",
        skills: [
          { icon: FaAws, name: "Amazon Web Services", color: "from-yellow-500 to-yellow-700" },
        ],
      },
    ],
  },
  {
    name: "AI Tools",
    subCategories: [
      {
        name: "AI Assistants & Generators",
        skills: [
          { icon: SiOpenai, name: "ChatGPT", color: "from-green-400 to-green-600" },
          { icon: FaRobot, name: "bolt.new", color: "from-blue-400 to-blue-600" },
          { icon: SiVercel, name: "v0.dev", color: "from-gray-600 to-gray-800" },
          { icon: FaRobot, name: "blackbox.ai", color: "from-purple-400 to-purple-600" },
        ],
      },
    ],
  },
];

const SkillIcon: React.FC<{ skill: { icon: React.ElementType; name: string; color: string } }> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-brunswick-green transition-all duration-300 ease-in-out" />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 px-2 py-1 rounded-lg shadow-lg bg-gradient-to-r ${skill.color}`}
            style={{ pointerEvents: "none" }}
          >
            <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
              {skill.name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 bg-gradient-to-br from-sage to-fern-green"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-brunswick-green"
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-brunswick-green mb-4">{category.name}</h3>
              {category.subCategories.map((subCategory) => (
                <div key={subCategory.name} className="mb-6">
                  <h4 className="text-lg font-medium text-brunswick-green mb-3">{subCategory.name}</h4>
                  <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  >
                    {subCategory.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <SkillIcon skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
