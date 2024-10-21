import React from "react";
import { motion, AnimationControls } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Icono de descarga

interface DownloadButtonProps {
  controls: AnimationControls;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ controls }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center"
    >
      <a
        href="../public/SMG-DEV_CV.pdf"
        download
        className="inline-flex items-center justify-center w-40 h-10 sm:w-48 sm:h-12 text-sm sm:text-base font-semibold text-white bg-fern-green rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-brunswick-green hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-opacity-50"
      >
        <FiDownload className="text-lg sm:text-xl mr-2" />
        Download CV
      </a>
    </motion.div>
  );
};

export default DownloadButton;
