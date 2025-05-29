import React from "react";
import AnimatedBackground from './AnimatedBackground';
import FloatingText from './FloatingText';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';
import DownloadButton from './DownloadButton';
import '../../styles/Animations.css';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hunter-green to-sage"
    >
      <div className="breathe-animation">
        <AnimatedBackground />
      </div>

      <div className="text-center text-brunswick-green z-10 px-4">
        <FloatingText delay={0} variant="wave">
          <AnimatedTitle delay={300} />
        </FloatingText>

        <FloatingText delay={400} variant="gentle">
          <AnimatedSubtitle />
        </FloatingText>

        <FloatingText delay={800} variant="wave">
          <DownloadButton />
        </FloatingText>
      </div>
    </section>
  );
};

export default Hero;