import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectProps } from "../../../types/projects";
import DrawerHeader, { DrawerTabKey } from "./DrawerHeader";
import TabArchitecture from "./TabArchitecture";
import TabEngineering from "./TabEngineering";
import TabTradeoffs from "./TabTradeoffs";
import TabGallery from "./TabGallery";

interface ProjectDrawerProps {
  project: ProjectProps | null;
  onClose: () => void;
}

interface DrawerContentProps {
  project: ProjectProps;
  onClose: () => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<DrawerTabKey>("architecture");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {/* Header with Hero, Badges, Actions, and Navigation Tabs */}
      <DrawerHeader
        project={project}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onClose={onClose}
      />

      {/* Scrollable Tab Content Body */}
      <div className="flex-grow overflow-y-auto p-6 md:p-8 lg:p-10 space-y-6">
        {activeTab === "architecture" && (
          <TabArchitecture project={project} />
        )}
        {activeTab === "engineering" && (
          <TabEngineering project={project} />
        )}
        {activeTab === "tradeoffs" && (
          <TabTradeoffs project={project} />
        )}
        {activeTab === "gallery" && (
          <TabGallery project={project} />
        )}
      </div>
    </>
  );
};

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  // Comprehensive Background Scroll Lock (body + html + touchAction)
  useEffect(() => {
    if (project) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden">
          {/* Backdrop Blur Overlay with high z-index (covers LanguageSwitcher z-50) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Large Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-[75] w-full max-w-5xl xl:max-w-6xl max-h-[92vh] bg-brunswick-green/98 border border-white/20 rounded-3xl shadow-green-lg flex flex-col overflow-hidden text-timberwolf"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-project-title"
          >
            <DrawerContent key={project.id} project={project} onClose={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
