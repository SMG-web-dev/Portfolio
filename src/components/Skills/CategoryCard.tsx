import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SkillIcon from "./SkillIcon"

interface CategoryCardProps {
    category: {
        name: string;
        skills: Array<{
            icon: React.ElementType;
            name: string;
            color: string;
        }>;
    };
    index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: index * 0.2 },
                },
            }}
            className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
            <h3 className="text-xl md:text-2xl font-semibold text-brunswick-green mb-4">{category.name}</h3>
            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {category.skills.map((skill, skillIndex) => (
                    <SkillIcon key={skill.name} skill={skill} index={skillIndex} />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default CategoryCard