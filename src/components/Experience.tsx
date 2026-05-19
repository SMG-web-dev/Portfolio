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

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {collaborations.map((collab, index) => (
            <CollaborationCard
              key={index}
              collaboration={collab}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
