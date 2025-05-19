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
      className="py-16 md:py-24 bg-gradient-to-br from-sage to-fern-green overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-brunswick-green"
        >
          {t('techstack.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {techStackCategories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}