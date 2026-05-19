'use client'

import { motion } from "framer-motion"
import CategoryCard from "../Cards/CategoryCard"
import { techStackCategories } from "../../constants/techStack"
import { useTranslation } from "react-i18next"

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section
      id="tech-stack"
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-sage to-fern-green overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 lg:mb-24 text-brunswick-green"
        >
          {t('techstack.title')}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {techStackCategories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}