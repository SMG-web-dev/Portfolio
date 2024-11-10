import React from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const projects: ProjectProps[] = [
  {
    title: "AWS S3 Bucket Manager",
    image: "/s3man.webp",
    github: "https://github.com/SMG-web-dev/S3BucketManager",
    live: "/",
    technologies: ["Java", "Spring", "AWS", "Docker", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "DAW Promotional Web",
    image: "/dawPromo.webp",
    github: "https://github.com/SMG-web-dev/WebPromocionDAW",
    live: "https://ies-tetuan-daw.netlify.app",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  },

  {
    title: "W3School Spain",
    image: "/w3schools.webp",
    github: "https://github.com/SMG-web-dev/W3Schools",
    live: "https://smg-dev-w3schools-spain.netlify.app/",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-hunter-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-timberwolf"
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
