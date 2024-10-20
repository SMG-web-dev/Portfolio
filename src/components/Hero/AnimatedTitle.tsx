import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface AnimatedTitleProps {
    controls: AnimationControls;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ controls }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow"
        >
            Hi, I'm Sergio
        </motion.h1>
    );
};

export default AnimatedTitle;