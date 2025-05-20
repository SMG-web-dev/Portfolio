export type ProjectCategory = "Frontend" | "Backend" | "Full-Stack";

export interface ProjectProps {
  title: string;
  image: string;
  github: string | null;
  live: string;
  technologies: string[];
  category: ProjectCategory;
}

export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

interface ProjectLinksProps {
  github: string | null;
  live: string;
  category: ProjectCategory;
}
