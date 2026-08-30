import { ProjectProps } from "../types/projects";

export const featuredProjects: ProjectProps[] = [
  {
    title: "Neoon",
    image: "/projects/neoon.png",
    github: "https://github.com/SMG-web-dev/Neoon",
    live: "https://neoones.netlify.app/",
    technologies: ["NextJS", "TypeScript", "SCSS", "PostgreSQL"],
    category: "Full-Stack",
    isProfessional: true,
    inProgress: true,
  },
  {
    title: "FSC TopNutrition",
    image: "/projects/topnutrition.png",
    github: null,
    live: "https://fsctopnutrition.es",
    technologies: ["NextJS", "TypeScript", "Tailwind", "PostgreSQL"],
    category: "Full-Stack",
    isProfessional: true,
  },
  {
    title: "Nuevo Estilo Unisex",
    image: "/projects/pelu.webp",
    github: null,
    live: "https://nuevoestilounisex.es",
    technologies: ["TypeScript", "JavaScript", "CSS"],
    category: "Frontend",
    isProfessional: true,
  },
];

export const freelanceProjects: ProjectProps[] = featuredProjects;
export const personalProjects: ProjectProps[] = [];

