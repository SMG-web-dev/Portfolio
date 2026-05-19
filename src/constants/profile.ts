export interface SoftSkill {
  name: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  icon: string;
}

export interface Language {
  key: string;
  level: {
    en: string;
    es: string;
    it: string;
    de: string;
    fr: string;
  };
  flag: string;
}

export const softSkills: SoftSkill[] = [
  {
    name: {
      en: "Punctuality and commitment",
      es: "Puntualidad y compromiso",
      it: "Puntualità e impegno",
      de: "Pünktlichkeit und Engagement",
      fr: "Ponctualité et engagement",
    },
    icon: "clock",
  },
  {
    name: {
      en: "Strong familiarity with AIs and prompts",
      es: "Familiaridad con IAs y prompts",
      it: "Familiarità con IA e prompt",
      de: "Vertrautheit mit KIs und Prompts",
      fr: "Familiarité avec les IA et les prompts",
    },
    icon: "brain",
  },
  {
    name: {
      en: "Professional customer service",
      es: "Atención profesional al cliente",
      it: "Servizio clienti professionale",
      de: "Professioneller Kundenservice",
      fr: "Service client professionnel",
    },
    icon: "users",
  },
  {
    name: {
      en: "Leadership",
      es: "Liderazgo",
      it: "Leadership",
      de: "Führungskraft",
      fr: "Leadership",
    },
    icon: "star",
  },
  {
    name: {
      en: "Teamworker spirit",
      es: "Espíritu de equipo",
      it: "Spirito di squadra",
      de: "Teamgeist",
      fr: "Esprit d'équipe",
    },
    icon: "group",
  },
  {
    name: {
      en: "Clear and effective communication",
      es: "Comunicación clara y efectiva",
      it: "Comunicazione chiara ed efficace",
      de: "Klare und effektive Kommunikation",
      fr: "Communication claire et efficace",
    },
    icon: "message",
  },
  {
    name: {
      en: "Effective problem solving",
      es: "Resolución efectiva de problemas",
      it: "Risoluzione efficace dei problemi",
      de: "Effektive Problemlösung",
      fr: "Résolution efficace de problèmes",
    },
    icon: "puzzle",
  },
  {
    name: {
      en: "Strong learning capacity",
      es: "Gran capacidad de aprendizaje",
      it: "Forte capacità di apprendimento",
      de: "Starke Lernfähigkeit",
      fr: "Grande capacité d'apprentissage",
    },
    icon: "book",
  },
  {
    name: {
      en: "Flexibility and adaptability",
      es: "Flexibilidad y adaptabilidad",
      it: "Flessibilità e adattabilità",
      de: "Flexibilität und Anpassungsfähigkeit",
      fr: "Flexibilité et adaptabilité",
    },
    icon: "refresh",
  },
  {
    name: {
      en: "Organizational capacity",
      es: "Capacidad organizativa",
      it: "Capacità organizzativa",
      de: "Organisationsfähigkeit",
      fr: "Capacité organisationnelle",
    },
    icon: "calendar",
  },
  {
    name: {
      en: "Analytical thinking",
      es: "Pensamiento analítico",
      it: "Pensiero analitico",
      de: "Analytisches Denken",
      fr: "Pensée analytique",
    },
    icon: "chart",
  },
  {
    name: {
      en: "Creativity and Proactivity",
      es: "Creatividad y proactividad",
      it: "Creatività e proattività",
      de: "Kreativität und Proaktivität",
      fr: "Créativité et proactivité",
    },
    icon: "lightbulb",
  },
];

export const languages: Language[] = [
  {
    key: "Spanish",
    level: {
      en: "Native",
      es: "Nativo",
      it: "Madrelingua",
      de: "Muttersprache",
      fr: "Natif",
    },
    flag: "https://flagcdn.com/w40/es.png",
  },
  {
    key: "English",
    level: {
      en: "High level",
      es: "Nivel alto",
      it: "Livello alto",
      de: "Hohes Niveau",
      fr: "Niveau élevé",
    },
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    key: "Italian",
    level: {
      en: "Basic",
      es: "Básico",
      it: "Base",
      de: "Grundkenntnisse",
      fr: "Basique",
    },
    flag: "https://flagcdn.com/w40/it.png",
  },
  {
    key: "French",
    level: {
      en: "Basic",
      es: "Básico",
      it: "Base",
      de: "Grundkenntnisse",
      fr: "Basique",
    },
    flag: "https://flagcdn.com/w40/fr.png",
  },
];
