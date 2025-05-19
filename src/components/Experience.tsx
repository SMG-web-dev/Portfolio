import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Users, Calendar } from "lucide-react";

// Definimos un nuevo tipo para las colaboraciones/trabajos
interface CollaborationProps {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  teamSize: string;
  image: string;
}

// Datos de ejemplo para mostrar
const collaborations: CollaborationProps[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "2021 - 2022",
    description: "Trabajé en el desarrollo y mantenimiento de aplicaciones web utilizando React, mejorando la experiencia de usuario y optimizando el rendimiento.",
    achievements: [
      "Rediseño de la interfaz principal que mejoró la conversión en un 15%",
      "Implementación de sistema de componentes reutilizables",
      "Optimización del rendimiento del sitio web"
    ],
    teamSize: "5 desarrolladores",
    image: "/collaboration1.jpg" // Imagen de ejemplo - deberás añadir estas imágenes
  },
  {
    company: "Digital Innovations",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    description: "Participé en el desarrollo completo de una plataforma de gestión educativa, trabajando tanto en el frontend con React como en el backend con Node.js.",
    achievements: [
      "Desarrollo del sistema de autenticación y autorización",
      "Integración con APIs de terceros para funcionalidades adicionales",
      "Implementación de dashboard analítico"
    ],
    teamSize: "8 desarrolladores",
    image: "/collaboration2.jpg" // Imagen de ejemplo - deberás añadir estas imágenes
  }
];

// Componente para mostrar una tarjeta de colaboración
const CollaborationCard: React.FC<{ collaboration: CollaborationProps; index: number }> = ({ collaboration, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-brunswick-green rounded-lg shadow-xl overflow-hidden mb-8"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <div className="h-48 md:h-full">
            <img
              src={collaboration.image}
              alt={collaboration.company}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center px-4">
                {collaboration.company}
              </h3>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex flex-wrap items-center mb-4">
            <div className="flex items-center mr-6 mb-2">
              <Building2 size={18} className="text-sage mr-2" />
              <span className="text-timberwolf font-semibold">{collaboration.role}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar size={18} className="text-sage mr-2" />
              <span className="text-timberwolf">{collaboration.period}</span>
            </div>
            <div className="flex items-center mb-2">
              <Users size={18} className="text-sage mr-2" />
              <span className="text-timberwolf">{collaboration.teamSize}</span>
            </div>
          </div>

          <p className="text-timberwolf mb-4">{collaboration.description}</p>

          <div className="mt-4">
            <h4 className="text-sage font-semibold mb-2 flex items-center">
              <Award size={18} className="mr-2" />
              Logros
            </h4>
            <ul className="list-disc list-inside text-timberwolf ml-2">
              {collaboration.achievements.map((achievement, i) => (
                <li key={i} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-timberwolf"
        >
          Experiencia Profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-timberwolf max-w-3xl mx-auto"
        >
          A lo largo de mi carrera he tenido la oportunidad de colaborar en diversos proyectos
          y equipos, aportando mis conocimientos y aprendiendo constantemente de profesionales talentosos.
        </motion.p>

        <div className="space-y-8">
          {collaborations.map((collab, index) => (
            <CollaborationCard
              key={index}
              collaboration={collab}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;