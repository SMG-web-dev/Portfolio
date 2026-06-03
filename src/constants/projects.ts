import { ProjectProps } from "../types/projects";

export const personalProjects: ProjectProps[] = [
  {
    title: "AWS S3 Bucket Manager",
    image: "/projects/s3man.webp",
    github: "https://github.com/SMG-web-dev/S3BucketManager",
    live: "https://github.com/SMG-web-dev/S3BucketManager",
    technologies: ["HTML", "Spring", "Tailwind", "Docker", "AWS"],
    category: "Full-Stack",
  },
  {
    title: "CryptoTracker",
    image: "/projects/crypto.webp",
    github: "https://github.com/SMG-web-dev/CryptoTracker",
    live: "https://smg-dev-criptos.netlify.app/",
    technologies: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
  },
  {
    title: "BootLearn",
    image: "/projects/bootLearn.webp",
    github: "https://github.com/SMG-web-dev/BootLearn",
    live: "https://bootlearn.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    category: "Frontend",
  },
  {
    title: "SuRótulo Website",
    image: "/projects/suRotulo.webp",
    github: "https://github.com/SMG-web-dev/SuRotulo",
    live: "https://surotulo.netlify.app/",
    technologies: ["JavaScript", "HTML", "SASS"],
    category: "Frontend",
  },
];

export const freelanceProjects: ProjectProps[] = [
  {
    title: "FSC TopNutrition",
    image: "/projects/topnutrition.webp",
    github: null,
    live: "https://fsctopnutrition.es",
    technologies: ["NextJS", "TypeScript", "Tailwind", "Supabase"],
    category: "Full-Stack",
    isProfessional: true,
  },
  {
    title: "Nuevo Estilo Unisex",
    image: "/projects/pelu.webp",
    github: null,
    live: "https://nuevoestilounisex.es",
    technologies: ["NextJS", "TypeScript", "Tailwind", "CSS"],
    category: "Frontend",
    isProfessional: true,
  },
];
