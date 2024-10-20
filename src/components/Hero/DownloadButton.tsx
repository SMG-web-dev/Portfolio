import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface DownloadButtonProps {
    controls: AnimationControls;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ controls }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <a
                href=""
                download
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white bg-fern-green rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-brunswick-green hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-opacity-50"
            >
                Download CV
            </a>
        </motion.div>
    );
};

export default DownloadButton;