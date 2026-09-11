import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { FiChevronDown } from "../../constants/icons";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Dynamic Theme Gradient: Original rich Brunswick/Hunter green in Light mode, Obsidian in Dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-hunter-green via-brunswick-green to-hunter-green dark:from-[#0c1610] dark:via-[#08110b] dark:to-[#0c1610] bg-[length:400%_400%] animate-gradient transition-colors duration-500" />
      
      {/* Ambient Grid Texture */}
      <div className="absolute inset-0 dot-pattern opacity-[0.06] dark:opacity-[0.04]" />
      
      {/* Glowing Ambient Light Orbs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-fern-green/20 dark:bg-fern-green/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-sage/15 dark:bg-sage/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Layered Smooth Gradient Blend to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-brunswick-green/30 to-timberwolf/40 dark:via-[#08110b]/30 dark:to-[#0c150f]/50 pointer-events-none transition-colors duration-500" />

      {/* Organic Curved Architectural Boundary with subtle laser accent */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 lg:h-20"
        >
          <path
            d="M0,0 C150,90 400,120 600,75 C800,30 1050,90 1200,45 L1200,120 L0,120 Z"
            className="fill-timberwolf dark:fill-[#0c150f]/80 transition-colors duration-300"
          />
          <path
            d="M0,0 C150,90 400,120 600,75 C800,30 1050,90 1200,45"
            className="stroke-fern-green/40 dark:stroke-fern-green/30"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
};

// Counter animation hook
const useCounter = (end: number, duration: number = 1.5) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, start: () => setHasStarted(true) };
};

const StatItem: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({ value, suffix, label, delay }) => {
  const counter = useCounter(value);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onAnimationComplete={() => counter.start()}
    >
      <div className="text-3xl sm:text-4xl font-display font-black text-white">
        {counter.count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-timberwolf/90 dark:text-white/90 font-bold tracking-wide mt-1">
        {label}
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-20 sm:pb-28"
    >
      <AnimatedBackground />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Role Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-5 sm:mb-6 shadow-lg max-w-full"
        >
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fern-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fern-green" />
          </span>
          <span className="text-[11px] sm:text-sm font-extrabold text-white tracking-wider sm:tracking-widest uppercase truncate">
            {t('hero.role')}
          </span>
        </motion.div>

        {/* Primary Title — LinkedIn Value Statement */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-black tracking-tight text-white leading-[1.22] sm:leading-[1.18] mb-3 sm:mb-4 drop-shadow-md max-w-3xl w-full mx-auto [text-wrap:balance]"
        >
          {t('hero.title')}
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          variants={itemVariants}
          className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-fern-green to-transparent rounded-full mb-3.5 sm:mb-4"
        />

        {/* Descriptor */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-9 [text-wrap:pretty] px-2 drop-shadow-xs"
        >
          {t('hero.descriptor')}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 sm:gap-14 px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 dark:bg-[#0a120d] dark:border-white/15 shadow-lg max-w-full relative z-10"
        >
          <StatItem value={2} suffix="+" label={t('hero.statsYears')} delay={1.3} />
          <div className="w-px h-8 sm:h-10 bg-white/30" />
          <StatItem value={8} suffix="+" label={t('hero.statsProjects')} delay={1.5} />
        </motion.div>

        {/* Interactive Scroll Bridge to Experience Section */}
        <motion.div
          variants={itemVariants}
          className="mt-7 sm:mt-9 flex flex-col items-center"
        >
          <ScrollLink
            to="experience"
            smooth={true}
            duration={700}
            offset={-20}
            className="group cursor-pointer flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full py-1 px-3 transition-transform hover:-translate-y-0.5"
            aria-label={t('hero.explore')}
          >
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors drop-shadow-xs">
              {t('hero.explore')}
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-fern-green/80 bg-black/25 backdrop-blur-sm flex items-start justify-center p-1 transition-all shadow-green-glow">
              <motion.div
                className="w-1.5 h-2.5 rounded-full bg-fern-green"
                animate={{ y: [0, 14, 0], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-fern-green group-hover:text-white transition-colors -mt-1"
            >
              <FiChevronDown size={14} />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;