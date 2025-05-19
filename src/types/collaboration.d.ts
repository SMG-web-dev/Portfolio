// types/collaboration.ts
export interface CollaborationProps {
  company: string;
  role: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  period: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  description: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  achievements: {
    en: string[];
    es: string[];
    it: string[];
    de: string[];
    fr: string[];
  };
  teamSize: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  image: string;
}
