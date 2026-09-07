import React from "react";
import { technologyIcons } from "../technologyIcons";

interface TechBadgeProps {
  tech: string;
  size?: "sm" | "md";
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, size = "sm" }) => {
  const icon = technologyIcons[tech];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-hunter-green/60 text-timberwolf font-medium transition-all duration-200 hover:border-fern-green/50 hover:bg-hunter-green/90 hover:text-white ${
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm"
      }`}
      title={tech}
    >
      {icon && (
        <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: size === "sm" ? 14 : 16 })
            : icon}
        </span>
      )}
      <span className="truncate">{tech}</span>
    </span>
  );
};

export default TechBadge;
