import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Fondo con gradiente animado */}
      <div className="animated-background"></div>

      {/* Elementos flotantes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="animate-pulse-slow absolute top-1/4 left-1/4 w-64 h-64 bg-fern-green rounded-full filter blur-3xl"></div>
        <div className="animate-pulse-slow animate-delay-2000 absolute bottom-1/4 right-1/4 w-80 h-80 bg-brunswick-green rounded-full filter blur-3xl"></div>
        <div className="animate-pulse-slow animate-delay-4000 absolute bottom-1/3 left-1/3 w-72 h-72 bg-timberwolf rounded-full filter blur-3xl"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;