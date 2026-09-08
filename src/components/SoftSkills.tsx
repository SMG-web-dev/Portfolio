import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { USFlag, SpainFlag, ItalyFlag, FranceFlag } from "./FlagIcons";

interface SoftSkillPillar {
  badgeKey: string;
  titleKey: string;
  descKey: string;
  skills: Array<{ nameKey: string; icon: string }>;
}

const engineeringPillars: SoftSkillPillar[] = [
  {
    badgeKey: "softskills.pillars.architecture.badge",
    titleKey: "softskills.pillars.architecture.title",
    descKey: "softskills.pillars.architecture.description",
    skills: [
      { nameKey: "softskills.pillars.architecture.skills.analytical", icon: "brain" },
      { nameKey: "softskills.pillars.architecture.skills.problemSolving", icon: "puzzle" },
      { nameKey: "softskills.pillars.architecture.skills.continuousLearning", icon: "book" },
    ],
  },
  {
    badgeKey: "softskills.pillars.growth.badge",
    titleKey: "softskills.pillars.growth.title",
    descKey: "softskills.pillars.growth.description",
    skills: [
      { nameKey: "softskills.pillars.growth.skills.customerOrientation", icon: "star" },
      { nameKey: "softskills.pillars.growth.skills.agile", icon: "refresh" },
      { nameKey: "softskills.pillars.growth.skills.timeManagement", icon: "clock" },
    ],
  },
  {
    badgeKey: "softskills.pillars.collaboration.badge",
    titleKey: "softskills.pillars.collaboration.title",
    descKey: "softskills.pillars.collaboration.description",
    skills: [
      { nameKey: "softskills.pillars.collaboration.skills.teamLeadership", icon: "group" },
      { nameKey: "softskills.pillars.collaboration.skills.effectiveCommunication", icon: "message" },
      { nameKey: "softskills.pillars.collaboration.skills.conflictResolution", icon: "users" },
    ],
  },
];

const spokenLanguages = [
  { code: "es", flag: SpainFlag, nameKey: "softskills.languages.spanish.name", levelKey: "softskills.languages.spanish.level", percent: 100 },
  { code: "en", flag: USFlag, nameKey: "softskills.languages.english.name", levelKey: "softskills.languages.english.level", percent: 85 },
  { code: "it", flag: ItalyFlag, nameKey: "softskills.languages.italian.name", levelKey: "softskills.languages.italian.level", percent: 45 },
  { code: "fr", flag: FranceFlag, nameKey: "softskills.languages.french.name", levelKey: "softskills.languages.french.level", percent: 35 },
];

const SoftSkillIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = "" }) => {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    brain: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    star: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    group: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    message: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    puzzle: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    book: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    refresh: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };
  return <>{icons[icon] || null}</>;
};

const SoftSkills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="soft-skills" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-timberwolf via-sage/30 to-timberwolf dark:from-[#0a120d] dark:via-[#0c150f] dark:to-[#0a120d] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-brunswick-green dark:text-white inline-block relative mb-3">
            {t("softskills.title")}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-fern-green rounded-full opacity-80" />
          </h2>
          <p className="text-brunswick-green dark:text-timberwolf/90 text-base md:text-lg max-w-2xl mx-auto mt-4 font-semibold">
            {t("softskills.subtitle")}
          </p>
        </motion.div>

        {/* Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {engineeringPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-md border border-white/60 dark:bg-[#111e16] dark:border-white/10 hover:border-fern-green/40 rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-hunter-green text-white dark:bg-fern-green/20 dark:text-sage dark:border dark:border-fern-green/30 shadow-xs">
                    {t(pillar.badgeKey)}
                  </span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-brunswick-green dark:text-white mb-3">
                  {t(pillar.titleKey)}
                </h3>

                <p className="text-brunswick-green dark:text-white/85 font-medium text-sm leading-relaxed mb-6">
                  {t(pillar.descKey)}
                </p>
              </div>

              {/* Sub-skills list */}
              <div className="space-y-2.5 pt-4 border-t border-brunswick-green/15 dark:border-white/10">
                {pillar.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-2 rounded-xl bg-sage/20 hover:bg-sage/30 dark:bg-black/40 dark:border-white/5 dark:hover:bg-black/60 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-fern-green/20 flex items-center justify-center text-fern-green dark:text-sage flex-shrink-0">
                      <SoftSkillIcon icon={skill.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brunswick-green dark:text-white/90">
                      {t(skill.nameKey)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spoken Languages Sub-Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-md border border-white/50 dark:bg-[#111e16]/80 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-card"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-display font-black text-brunswick-green dark:text-white">
              {t("softskills.languages.title")}
            </h3>
            <p className="text-brunswick-green dark:text-timberwolf/90 font-semibold text-sm mt-1">
              {t("softskills.languages.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {spokenLanguages.map((lang) => {
              const FlagComp = lang.flag;

              return (
                <div
                  key={lang.code}
                  className="p-4 rounded-2xl bg-white/90 border border-white/60 dark:bg-black/40 dark:border-white/10 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <FlagComp size={24} className="rounded-xs shadow-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-extrabold text-brunswick-green dark:text-white text-sm sm:text-base leading-tight">
                        {t(lang.nameKey)}
                      </h4>
                      <p className="text-xs font-bold text-fern-green dark:text-sage mt-0.5">
                        {t(lang.levelKey)}
                      </p>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-brunswick-green/10 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-fern-green to-hunter-green dark:from-fern-green dark:via-sage dark:to-fern-green h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
