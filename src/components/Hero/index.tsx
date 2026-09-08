import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Dark Obsidian Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1610] via-[#08110b] to-[#0c1610] bg-[length:400%_400%] animate-gradient" />
      
      {/* Ambient Grid Texture */}
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
      
      {/* Glowing Ambient Light Orbs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-fern-green/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-sage/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Bottom Fade to section below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a120d] to-transparent" />
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
      <div className="text-xs sm:text-sm text-white/90 font-bold tracking-wide mt-1">
        {label}
      </div>
    </motion.div>
  );
};

interface CodeTab {
  id: string;
  name: string;
  code: string;
  highlighted: React.ReactNode;
}

const CodeTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("architecture");
  const [copied, setCopied] = useState(false);

  const tabs: Record<string, CodeTab> = {
    architecture: {
      id: "architecture",
      name: "architecture.ts",
      code: `// Enterprise Full-Stack & Systems Architecture
import { NextJS, React, TypeScript } from "@smg/core";
import { PostgreSQL, Redis } from "@smg/backend";

export class EngineeringEngine implements SeniorArchitect {
  private readonly stack = ["TypeScript", "Next.js", "PostgreSQL", "TailwindCSS"];
  
  public async buildProduct(goal: BusinessGoal): Promise<ScalableApp> {
    const system = await this.designSystem({ performance: 99, SEO: true });
    const database = await PostgreSQL.connectPool({ security: "AAA", ssl: true });
    
    return { status: "Delivered", impact: "Maximum Conversion" };
  }
}`,
      highlighted: (
        <div className="space-y-1">
          <div><span className="text-emerald-400/80">// Enterprise Full-Stack & Systems Architecture</span></div>
          <div><span className="text-purple-400 font-bold">import</span> <span className="text-white">{"{ NextJS, React, TypeScript }"}</span> <span className="text-purple-400 font-bold">from</span> <span className="text-green-300">"@smg/core"</span><span className="text-white">;</span></div>
          <div><span className="text-purple-400 font-bold">import</span> <span className="text-white">{"{ PostgreSQL, Redis }"}</span> <span className="text-purple-400 font-bold">from</span> <span className="text-green-300">"@smg/backend"</span><span className="text-white">;</span></div>
          <div className="h-2" />
          <div><span className="text-purple-400 font-bold">export class</span> <span className="text-yellow-300 font-bold">EngineeringEngine</span> <span className="text-purple-400 font-bold">implements</span> <span className="text-cyan-300 font-bold">SeniorArchitect</span> <span className="text-white">{"{"}</span></div>
          <div className="pl-4"><span className="text-purple-400 font-bold">private readonly</span> <span className="text-white">stack = [</span><span className="text-green-300">"TypeScript"</span>, <span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"PostgreSQL"</span>, <span className="text-green-300">"TailwindCSS"</span><span className="text-white">];</span></div>
          <div className="h-2" />
          <div className="pl-4"><span className="text-purple-400 font-bold">public async</span> <span className="text-yellow-300 font-bold">buildProduct</span><span className="text-white">(goal: </span><span className="text-cyan-300 font-bold">BusinessGoal</span><span className="text-white">): </span><span className="text-cyan-300 font-bold">Promise</span><span className="text-white font-bold">&lt;</span><span className="text-cyan-300 font-bold">ScalableApp</span><span className="text-white font-bold">&gt;</span> <span className="text-white">{"{"}</span></div>
          <div className="pl-8"><span className="text-purple-400 font-bold">const</span> <span className="text-white">system = </span><span className="text-purple-400 font-bold">await</span> <span className="text-white">this.</span><span className="text-yellow-300">designSystem</span><span className="text-white">({"{"} performance: </span><span className="text-orange-300 font-bold">99</span><span className="text-white">, SEO: </span><span className="text-purple-400 font-bold">true</span> <span className="text-white">{"}"});</span></div>
          <div className="pl-8"><span className="text-purple-400 font-bold">const</span> <span className="text-white">database = </span><span className="text-purple-400 font-bold">await</span> <span className="text-cyan-300">PostgreSQL</span><span className="text-white">.</span><span className="text-yellow-300">connectPool</span><span className="text-white">({"{"} security: </span><span className="text-green-300">"AAA"</span><span className="text-white">, ssl: </span><span className="text-purple-400 font-bold">true</span> <span className="text-white">{"}"});</span></div>
          <div className="h-2" />
          <div className="pl-8"><span className="text-purple-400 font-bold">return</span> <span className="text-white">{"{"} status: </span><span className="text-green-300">"Delivered"</span><span className="text-white">, impact: </span><span className="text-green-300">"Maximum Conversion"</span> <span className="text-white">{"}"};</span></div>
          <div className="pl-4"><span className="text-white">{"}"}</span></div>
          <div><span className="text-white">{"}"}</span></div>
        </div>
      ),
    },
    aiAgents: {
      id: "aiAgents",
      name: "ai-agents.ts",
      code: `// AI & Agentic Engineering Pipeline
import { MCPProtocol } from "@model-context-protocol/sdk";
import { GoogleEcosystem, MetaAI, Claude } from "@smg/ai";

export async function runAgenticWorkflow(task: ComplexTask) {
  const mcp = await MCPProtocol.connect({ tools: ["database", "web"] });
  const reasoning = await GoogleEcosystem.reason({ prompt: task });
  
  return { status: "Completed", accuracy: "100%" };
}`,
      highlighted: (
        <div className="space-y-1">
          <div><span className="text-emerald-400/80">// AI & Agentic Engineering Pipeline</span></div>
          <div><span className="text-purple-400 font-bold">import</span> <span className="text-white">{"{ MCPProtocol }"}</span> <span className="text-purple-400 font-bold">from</span> <span className="text-green-300">"@model-context-protocol/sdk"</span><span className="text-white">;</span></div>
          <div><span className="text-purple-400 font-bold">import</span> <span className="text-white">{"{ GoogleEcosystem, MetaAI, Claude }"}</span> <span className="text-purple-400 font-bold">from</span> <span className="text-green-300">"@smg/ai"</span><span className="text-white">;</span></div>
          <div className="h-2" />
          <div><span className="text-purple-400 font-bold">export async function</span> <span className="text-yellow-300 font-bold">runAgenticWorkflow</span><span className="text-white">(task: </span><span className="text-cyan-300 font-bold">ComplexTask</span><span className="text-white">) {"{"}</span></div>
          <div className="pl-4"><span className="text-purple-400 font-bold">const</span> <span className="text-white">mcp = </span><span className="text-purple-400 font-bold">await</span> <span className="text-cyan-300">MCPProtocol</span><span className="text-white">.</span><span className="text-yellow-300">connect</span><span className="text-white">({"{"} tools: [</span><span className="text-green-300">"database"</span>, <span className="text-green-300">"web"</span><span className="text-white">] {"}"});</span></div>
          <div className="pl-4"><span className="text-purple-400 font-bold">const</span> <span className="text-white">reasoning = </span><span className="text-purple-400 font-bold">await</span> <span className="text-cyan-300">GoogleEcosystem</span><span className="text-white">.</span><span className="text-yellow-300">reason</span><span className="text-white">({"{"} prompt: task {"}"});</span></div>
          <div className="h-2" />
          <div className="pl-4"><span className="text-purple-400 font-bold">return</span> <span className="text-white">{"{"} status: </span><span className="text-green-300">"Completed"</span><span className="text-white">, accuracy: </span><span className="text-green-300">"100%"</span> <span className="text-white">{"}"};</span></div>
          <div><span className="text-white">{"}"}</span></div>
        </div>
      ),
    },
    config: {
      id: "config",
      name: "stack.json",
      code: `{
  "role": "Full-Stack Developer",
  "experience": "2+ Years",
  "coreTech": ["TypeScript", "Next.js", "React", "Node.js", "TailwindCSS"],
  "databases": ["PostgreSQL", "Redis", "MySQL"],
  "aiIntegration": ["MCP Protocol", "Google Ecosystem", "Meta AI", "Claude API"]
}`,
      highlighted: (
        <div className="space-y-1">
          <div><span className="text-white font-bold">{"{"}</span></div>
          <div className="pl-4"><span className="text-sage">"role"</span><span className="text-white">: </span><span className="text-green-300">"Full-Stack Developer"</span><span className="text-white">,</span></div>
          <div className="pl-4"><span className="text-sage">"experience"</span><span className="text-white">: </span><span className="text-green-300">"2+ Years"</span><span className="text-white">,</span></div>
          <div className="pl-4"><span className="text-sage">"coreTech"</span><span className="text-white">: [</span><span className="text-green-300">"TypeScript"</span>, <span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"React"</span>, <span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"TailwindCSS"</span><span className="text-white">],</span></div>
          <div className="pl-4"><span className="text-sage">"databases"</span><span className="text-white">: [</span><span className="text-green-300">"PostgreSQL"</span>, <span className="text-green-300">"Redis"</span>, <span className="text-green-300">"MySQL"</span><span className="text-white">],</span></div>
          <div className="pl-4"><span className="text-sage">"aiIntegration"</span><span className="text-white">: [</span><span className="text-green-300">"MCP Protocol"</span>, <span className="text-green-300">"Google Ecosystem"</span>, <span className="text-green-300">"Meta AI"</span><span className="text-white">]</span></div>
          <div><span className="text-white font-bold">{"}"}</span></div>
        </div>
      ),
    },
  };

  const currentTab = tabs[activeTab] || tabs.architecture;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto rounded-3xl bg-[#09100b] border border-white/20 shadow-green-lg overflow-hidden text-left my-7 relative z-10"
    >
      {/* IDE Header with Tabs */}
      <div className="px-2.5 sm:px-4 py-2.5 bg-white/10 border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Mac Window Dots */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 inline-block" />
          </div>

          {/* IDE Tabs */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {Object.values(tabs).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fern-green ${
                    isActive
                      ? "bg-white/20 text-white font-bold border border-white/25 shadow-xs"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Copy Button */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={handleCopy}
            className="text-[10px] sm:text-xs text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fern-green rounded-lg px-2 sm:px-2.5 py-1 bg-white/10 border border-white/15 font-semibold"
            aria-label="Copy code snippet"
          >
            {copied ? "Copied! ✓" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code Body with Interactive Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-sm leading-relaxed text-timberwolf overflow-x-auto min-h-[200px]"
        >
          {currentTab.highlighted}
        </motion.div>
      </AnimatePresence>
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16"
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
          className="text-xs sm:text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto mb-3 [text-wrap:pretty] px-2"
        >
          {t('hero.descriptor')}
        </motion.p>

        {/* Multi-Tab IDE Code Terminal Centerpiece */}
        <CodeTerminal />

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-14 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#0a120d] border border-white/15 shadow-lg max-w-full relative z-10"
        >
          <StatItem value={2} suffix="+" label={t('hero.statsYears')} delay={1.3} />
          <div className="w-px h-8 sm:h-10 bg-white/30" />
          <StatItem value={8} suffix="+" label={t('hero.statsProjects')} delay={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;