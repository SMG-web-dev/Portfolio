import React from "react";
import AnimatedBackground from './AnimatedBackground';
import FloatingText from './FloatingText';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';
import DownloadButton from './DownloadButton';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hunter-green to-sage"
    >
      <AnimatedBackground />
      <div className="text-center text-brunswick-green z-10">
        <FloatingText delay={0}>
          <AnimatedTitle delay={300} />
        </FloatingText>
        <FloatingText delay={400}>
          <AnimatedSubtitle />
        </FloatingText>
        <FloatingText delay={800}>
          <DownloadButton />
        </FloatingText>
      </div>
    </section>
  );
};

export default Hero;