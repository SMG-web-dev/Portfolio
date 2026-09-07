export type ProjectCategory = "Frontend" | "Backend" | "Full-Stack";

export interface ProjectMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface ProjectArchitectureLayer {
  name: string;
  details: string;
  stack: string[];
}

export interface ProjectTechnicalHighlight {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
}

export interface ProjectEngineeringDecision {
  title: string;
  context: string;
  decision: string;
  tradeoff: string;
}

export interface ProjectGalleryItem {
  title: string;
  description: string;
  image: string;
}

export interface ProjectProps {
  id: string; // slug for URL deep-linking: 'neoon' | 'nuevo-estilo' | 'top-nutricion'
  title: string;
  tagline: string;
  taglineEn: string;
  image: string;
  github: string | null;
  live: string;
  technologies: string[];
  category: ProjectCategory;
  isProfessional?: boolean;
  inProgress?: boolean;
  sellingAngle: string;
  sellingAngleEn: string;
  headlineMetric: ProjectMetric;
  headlineMetricEn: ProjectMetric;
  quickHighlights: string[];
  quickHighlightsEn: string[];
  
  // Deep-dive drawer content
  overview: {
    problem: string;
    problemEn: string;
    solution: string;
    solutionEn: string;
  };
  architecture: {
    summary: string;
    summaryEn: string;
    layers: {
      name: string;
      nameEn: string;
      details: string;
      detailsEn: string;
      stack: string[];
    }[];
  };
  technicalHighlights: {
    title: string;
    titleEn: string;
    tag: string;
    description: string;
    descriptionEn: string;
    bullets: string[];
    bulletsEn: string[];
  }[];
  engineeringDecisions: {
    title: string;
    titleEn: string;
    context: string;
    contextEn: string;
    decision: string;
    decisionEn: string;
    tradeoff: string;
    tradeoffEn: string;
  }[];
  gallery: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    image: string;
  }[];
}

export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  onSelect: (project: ProjectProps) => void;
}

export interface ProjectLinksProps {
  github: string | null;
  live: string;
  category: ProjectCategory;
}
