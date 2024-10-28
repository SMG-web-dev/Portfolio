import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DAW Promo Web",
    description:
      "A promotional website work for my academic module 'UI/UX design' created with Vite+React",
    image: "/dawPromo.webp",
    github: "https://github.com/SMG-web-dev/WebPromocionDAW",
    live: "https://ies-tetuan-daw.netlify.app",
  },
  {
    title: "AWS Buckets Manager",
    description:
      "AWS S3 buckets management website.  created with Java+Spring and Tailwind.css'",
    image: "/s3man.webp",
    github: "https://github.com/SMG-web-dev/S3BucketManager",
    live: "",
  },
  {
    title: "W3School Spain",
    description:
      "This is a W3Schools CSS learning page in Spanish, make with vite+react",
    image: "/w3schools.webp",
    github: "https://github.com/SMG-web-dev/W3Schools",
    live: "https://smg-dev-w3schools-spain.netlify.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-sage dark:bg-hunter-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-brunswick-green dark:text-timberwolf"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
