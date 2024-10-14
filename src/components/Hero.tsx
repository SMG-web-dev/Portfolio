import React from "react";
import { motion } from "framer-motion";
import { useSpring, useSprings, animated, config } from "react-spring";

const AnimatedBackground: React.FC = () => {
  const [{ xy }] = useSpring(() => ({ xy: [0, 0] }));

  const trails = useSprings(
    3,
    [0, 1, 2].map((i) => ({
      from: { transform: "scale(0) rotate(0deg)", opacity: 0 },
      to: async (next) => {
        while (1) {
          await next({ transform: "scale(1) rotate(360deg)", opacity: 0.3 });
          await next({ transform: "scale(0) rotate(0deg)", opacity: 0 });
        }
      },
      config: { ...config.molasses, duration: 3000 + i * 1000 },
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {trails.map((props, index) => (
        <animated.div
          key={index}
          style={{
            ...props,
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `radial-gradient(circle, rgba(173, 216, 230, 0.8) 0%, rgba(135, 206, 235, 0.2) 70%)`,
            transform: xy.to(
              (x, y) =>
                `translate3d(${x / (index + 5)}px, ${y / (index + 5)}px, 0)`
            ),
          }}
        />
      ))}
    </div>
  );
};

interface FloatingTextProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingText: React.FC<FloatingTextProps> = ({ children, delay = 0 }) => {
  const floatAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (1) {
        await next({ transform: "translateY(-20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
    delay: delay,
  });

  return (
    <animated.div style={{ ...floatAnimation, willChange: "transform" }}>
      {children}
    </animated.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hunter-green to-sage"
    >
      <AnimatedBackground />
      <div className="text-center text-brunswick-green z-10">
        <FloatingText delay={0}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4 text-shadow"
          >
            Hi, I'm Sergio
          </motion.h1>
        </FloatingText>
        <FloatingText delay={400}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl mb-8 text-shadow"
          >
            A Web Developer Student
          </motion.p>
        </FloatingText>
        <FloatingText delay={800}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href=""
              download
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-fern-green rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-brunswick-green hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-opacity-50"
            >
              Download CV
            </a>
          </motion.div>
        </FloatingText>
      </div>
    </section>
  );
};

export default Hero;