import React from "react";
import { motion } from "framer-motion";
import ProjectLinks from "./ProjectLinks";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
}

interface ProjectCardProps {
    project: ProjectProps;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-timberwolf dark:bg-brunswick-green rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
            <div className="relative pt-[56.25%] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </div>
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-brunswick-green dark:text-timberwolf">
                    {project.title}
                </h3>
                <p className="text-hunter-green dark:text-sage mb-4">
                    {project.description}
                </p>
            </div>
            <ProjectLinks github={project.github} live={project.live} />
        </motion.div>
    );
};

export default ProjectCard;
