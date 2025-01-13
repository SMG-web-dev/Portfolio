import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const projects: ProjectProps[] = [
  {
    title: "AWS S3 Bucket Manager",
    image: "/projects/s3man.webp",
    github: "https://github.com/SMG-web-dev/S3BucketManager",
    live: "https://github.com/SMG-web-dev/S3BucketManager",
    technologies: ["HTML", "Spring", "Tailwind", "Docker", "AWS"],
    category: "Full-Stack",
  },
  {
    title: "Clients Manager (In Progress)",
    image: "/projects/phpClientes.webp",
    github: "https://github.com/SMG-web-dev/DWES/tree/main/tareas/CRUDPagi",
    live: "https://github.com/SMG-web-dev/DWES/tree/main/tareas/CRUDPagi/",
    technologies: ["PHP", "MYSQL", "CSS"],
    category: "Full-Stack",
  },
  {
    title: "SuRótulo Website",
    image: "/projects/suRotulo.webp",
    github: "https://github.com/SMG-web-dev/SuRotulo",
    live: "https://surotulo.netlify.app/",
    technologies: ["JavaScript", "HTML", "SASS"],
    category: "Frontend",
  },
  {
    title: "CryptoTracker (In Progress)",
    image: "/projects/crypto.webp",
    github: "https://github.com/SMG-web-dev/CryptoTracker",
    live: "https://smg-dev-criptos.netlify.app/",
    technologies: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
  },
  {
    title: "DAW Promotional Web",
    image: "/projects/dawPromo.webp",
    github: "https://github.com/SMG-web-dev/WebPromocionDAW",
    live: "https://ies-tetuan-daw.netlify.app",
    technologies: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
  },
  {
    title: "BootLearn",
    image: "/projects/bootLearn.webp",
    github: "https://github.com/SMG-web-dev/BootLearn",
    live: "https://bootlearn.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap",],
    category: "Frontend",
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
          className="text-4xl font-bold text-center mb-8 text-timberwolf"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [&:has(:last-child:nth-child(3n-2))]:last:justify-self-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;