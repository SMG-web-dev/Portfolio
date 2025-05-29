import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaAward, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { CollaborationProps } from "../../types/collaboration";

const CollaborationCard: React.FC<{ collaboration: CollaborationProps; index: number }> = ({ collaboration, index }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as 'en' | 'es' | 'it' | 'de' | 'fr';

  // Fallback a inglés si el idioma actual no está disponible
  const getLocalizedContent = <T,>(content: Record<string, T>): T => {
    return content[currentLanguage] || content['en'];
  };

  // Animaciones para varios elementos
  const cardAnimation = {
    hover: {
      scale: 1.01,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const iconAnimation = {
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.2,
      color: "#CAD2C5",
      transition: { duration: 0.5 }
    }
  };

  const imageOverlayAnimation = {
    hover: {
      opacity: 0.7,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover="hover"
      variants={cardAnimation}
      className="bg-brunswick-green rounded-lg shadow-xl overflow-hidden mb-8 transform transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Imagen optimizada */}
        <div className="md:w-1/3 relative overflow-hidden h-56 md:h-auto">
          <motion.div className="h-full w-full relative">
            <motion.img
              src={collaboration.image}
              alt={collaboration.company}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-hunter-green bg-opacity-30 flex items-center justify-center"
              variants={imageOverlayAnimation}
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Contenido */}
        <div className="md:w-2/3 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <motion.div
              className="flex items-center mb-2"
              whileHover="hover"
            >
              <motion.div variants={iconAnimation} className="text-sage mr-2">
                <FaBuilding size={18} />
              </motion.div>
              <span className="text-timberwolf font-semibold">
                {t('experience.role')}: <span className="font-normal">{getLocalizedContent(collaboration.role)}</span>
              </span>
            </motion.div>
            <motion.div
              className="flex items-center mb-2"
              whileHover="hover"
            >
              <motion.div variants={iconAnimation} className="text-sage mr-2">
                <FaCalendarAlt size={18} />
              </motion.div>
              <span className="text-timberwolf">
                {t('experience.period')}: <span className="font-normal">{getLocalizedContent(collaboration.period)}</span>
              </span>
            </motion.div>
            <motion.div
              className="flex items-center mb-2"
              whileHover="hover"
            >
              <motion.div variants={iconAnimation} className="text-sage mr-2">
                <FaUsers size={18} />
              </motion.div>
              <span className="text-timberwolf">
                {t('experience.teamSize')}: <span className="font-normal">{getLocalizedContent(collaboration.teamSize)}</span>
              </span>
            </motion.div>
          </div>

          {/* Descripción con línea decorativa */}
          <div className="relative">
            <motion.div
              className="h-full w-1 bg-sage absolute left-0 top-0 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="text-timberwolf mb-4 pl-4 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {getLocalizedContent(collaboration.description)}
            </motion.p>
          </div>

          {/* Logros */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h4
              className="text-sage font-semibold mb-3 flex items-center border-b border-sage pb-2"
              whileHover="hover"
            >
              <motion.div variants={iconAnimation} className="mr-2">
                <FaAward size={18} />
              </motion.div>
              {t('experience.achievements')}
            </motion.h4>
            <ul className="space-y-2 text-timberwolf ml-2">
              {getLocalizedContent(collaboration.achievements).map((achievement, i) => (
                <motion.li
                  key={i}
                  className="mb-1 flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                >
                  <motion.div
                    className="h-2 w-2 bg-sage rounded-full mt-2 mr-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                  <span className="text-sm md:text-base">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborationCard;