import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface AnimatedSubtitleProps {
    controls: AnimationControls;
}

const AnimatedSubtitle: React.FC<AnimatedSubtitleProps> = ({ controls }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-shadow"
        >
            A Web Developer Student
        </motion.p>
    );
};

export default AnimatedSubtitle;