import React from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const projects: ProjectProps[] = [
  {
    title: "DAW Promotional Web",
    description:
      "A promotional website for my institute, desktop first designed and full devices responsive.",
    image: "/dawPromo.webp",
    github: "https://github.com/SMG-web-dev/WebPromocionDAW",
    live: "https://ies-tetuan-daw.netlify.app",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  },
  {
    title: "W3School Spain",
    description:
      "This is a W3Schools CSS learning page in Spanish, mobile first designed and full devices responsive.",
    image: "/w3schools.webp",
    github: "https://github.com/SMG-web-dev/W3Schools",
    live: "https://smg-dev-w3schools-spain.netlify.app/",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  },
  {
    title: "AWS Buckets Manager",
    description: "Fullstack app for AWS S3 Buckets management.",
    image: "/s3man.webp",
    github: "https://github.com/SMG-web-dev/S3BucketManager",
    live: "",
    technologies: ["Java", "Spring", "HTML", "Tailwind", "AWS"],
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
      <style jsx global>{`
        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            #projects {
              background-color: #c8c4b7;
            }
            .dark #projects {
              background-color: #2c3e2f;
            }
            #projects h2 {
              color: #1f4d36;
            }
            .dark #projects h2 {
              color: #e5e1d6;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
