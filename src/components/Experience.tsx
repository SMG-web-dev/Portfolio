import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { collaborations } from "../constants/collaborations";
import CollaborationCard from "./Cards/CollaborationCard";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-timberwolf"
        >
          {t('experience.title')}
        </motion.h2>

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