import React from "react";
import { useAnimation } from "framer-motion";
import AnimatedBackground from './AnimatedBackground';
import FloatingText from './FloatingText';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';
import DownloadButton from './DownloadButton';

const Hero: React.FC = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hunter-green to-sage"
    >
      <AnimatedBackground />
      <div className="text-center text-brunswick-green z-10">
        <FloatingText delay={0}>
          <AnimatedTitle controls={controls} />
        </FloatingText>
        <FloatingText delay={400}>
          <AnimatedSubtitle controls={controls} />
        </FloatingText>
        <FloatingText delay={800}>
          <DownloadButton controls={controls} />
        </FloatingText>
      </div>
    </section>
  );
};

export default Hero;