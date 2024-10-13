import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaAws,
  FaReact,
  FaPhp,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "from-orange-400 to-orange-600" },
  { icon: FaCss3Alt, name: "CSS3", color: "from-blue-400 to-blue-600" },
  { icon: FaReact, name: "React", color: "from-cyan-400 to-cyan-600" },
  { icon: FaJs, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "from-blue-500 to-blue-700",
  },
  { icon: FaJava, name: "Java", color: "from-red-400 to-red-600" },
  { icon: FaPhp, name: "PHP", color: "from-purple-400 to-purple-600" },
  { icon: FaNodeJs, name: "Node.js", color: "from-green-400 to-green-600" },
  {
    icon: FaAws,
    name: "Amazon Web Services",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: FaDatabase,
    name: "MySQL / Oracle",
    color: "from-blue-300 to-blue-500",
  },
];

const SkillIcon: React.FC<{ skill: (typeof skills)[0] }> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-32">
      <motion.div
        className="cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <skill.icon className="w-16 h-16 text-brunswick-green transition-all duration-300 ease-in-out" />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-4 px-4 py-2 rounded-lg shadow-lg bg-gradient-to-r ${skill.color}`}
            style={{ pointerEvents: "none" }}
          >
            <p className="text-lg font-bold text-white whitespace-nowrap">
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
      className="py-24 bg-gradient-to-br from-sage to-fern-green"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-brunswick-green"
        >
          Tech Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillIcon skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
