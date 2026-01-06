import React from "react";
import AnimatedBackground from './AnimatedBackground';
import FloatingText from './FloatingText';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hunter-green to-sage px-4 sm:px-6 lg:px-8"
    >
      <AnimatedBackground />
      <div className="text-center text-brunswick-green z-10 max-w-4xl mx-auto">
        <FloatingText delay={0} variant="title">
          <AnimatedTitle delay={300} />
        </FloatingText>
        <FloatingText delay={400} variant="subtitle">
          <AnimatedSubtitle />
        </FloatingText>
      </div>
    </section>
  );
};

export default Hero;