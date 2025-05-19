import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SkillIconProps {
    skill: {
        icon: React.ElementType;
        name: string;
        color: string;
    };
    index: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false)
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
            className="relative flex flex-col items-center justify-center h-24"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 },
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                <skill.icon className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ease-in-out text-brunswick-green`} />
            </motion.div>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full mt-2 px-2 py-1 rounded-lg shadow-lg bg-gradient-to-r ${skill.color} z-10`}
                        style={{ pointerEvents: "none" }}
                    >
                        <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                            {skill.name}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default SkillIcon