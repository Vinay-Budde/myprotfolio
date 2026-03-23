import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  ShieldCheck,
  Code2,
  Globe,
  Github,
  Layers,
  Zap,
  Brain,
  Database,
  Workflow,
  Lock,
  Maximize2,
  Package,
  Boxes,
  Activity,
  AppWindow
} from 'lucide-react';

const SkillLevel = ({ level }: { level: number }) => (
  <div className="flex gap-0.5 ml-auto">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-orange-500 shadow-[0_0_5_px_rgba(234,88,12,0.5)]' : 'bg-zinc-800'}`} 
      />
    ))}
  </div>
);

const skillCategories = [
  {
    title: "Modern Frontend",
    icon: Layout,
    color: "bg-blue-600/20 text-blue-500",
    projects: "Used in Clean India, Logic Grid",
    skills: [
      { name: "React.js", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Framer Motion", level: 4, icon: Activity },
      { name: "Tailwind CSS", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Optimization", level: 4, icon: Maximize2 }
    ]
  },
  {
    title: "Scalable Backend",
    icon: Server,
    color: "bg-green-600/20 text-green-500",
    projects: "Used in Student Manager, Clean India",
    skills: [
      { name: "Node.js", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MVC / Middleware", level: 4, icon: Boxes },
      { name: "JWT / API Security", level: 4, icon: Lock },
      { name: "REST APIs", level: 5, icon: Globe },
      { name: "System Design", level: 4, icon: Workflow }
    ]
  },
  {
    title: "Data Persistence",
    icon: Database,
    color: "bg-purple-600/20 text-purple-500",
    projects: "Used in Cloud Analytics Dashboard",
    skills: [
      { name: "NoSQL: MongoDB", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Relational: SQL", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Caching: Redis", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", level: 4, icon: Database }
    ]
  },
  {
    title: "Languages & Tools",
    icon: Terminal,
    color: "bg-orange-600/20 text-orange-500",
    projects: "Used across all repositories",
    skills: [
      { name: "JavaScript", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Docker", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git / GitHub", level: 5, icon: Github },
      { name: "Postman", level: 5, icon: AppWindow }
    ]
  },
  {
    title: "CS Fundamentals",
    icon: ShieldCheck,
    color: "bg-pink-600/20 text-pink-500",
    projects: "Core of logic grid & DSA solutions",
    skills: [
      { name: "Data Structures", level: 5, icon: Layers },
      { name: "Algorithms", level: 5, icon: Zap },
      { name: "OOP Principles", level: 4, icon: Brain },
      { name: "Debugging", level: 5, icon: Code2 },
      { name: "Unit Testing", level: 4, icon: ShieldCheck }
    ]
  }
];

const bottomRibbon = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
];


// --- Decoration Components ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }}
    />
  </div>
);

const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-500/10 blur-[1px]"
          animate={{
            opacity: [0, 0.3, 0],
            y: [-20, -100, -20],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size
          }}
        />
      ))}
    </div>
  );
};

/**
 * TechStack Component
 * Highly detailed technical arsenal with depth indicators and project mapping.
 */
export const TechStack = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1200], [-30, 30]);
  const parallaxY = useTransform(smoothMouseY, [0, 800], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="skills" 
      onMouseMove={handleMouseMove}
      className="py-32 px-4 relative overflow-hidden bg-[#0b0f17]"
    >
      <BackgroundGrid />
      <FloatingParticles />
      
      {/* Premium Visual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <motion.div 
           style={{ x: parallaxX, y: parallaxY }}
           className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full transform-gpu" 
         />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] shadow-lg shadow-orange-500/5"
          >
            Domain Expertise
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
            Technical <span className="text-orange-500">Infrastructure</span>
          </h2>
          <p className="text-zinc-500 font-semibold text-sm md:text-base tracking-tight">
            A comprehensive mapping of my specialized skills, categorized by domain and proven through real-world implementation.
          </p>
        </div>

        {/* Enhanced Skill Matrix */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="p-8 bg-zinc-900/40 border border-white/5 rounded-[3rem] space-y-10 hover:border-orange-500/30 transition-all duration-500 shadow-2xl group relative overflow-hidden transform-gpu"
            >
              {/* Card Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />

              {/* Identity & Context */}
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-[1.5rem] ${category.color} shadow-lg transition-transform group-hover:scale-110 duration-500`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter leading-none">
                    {category.title}
                  </h3>
                </div>
                {/* Project Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950/80 border border-white/5 rounded-lg text-[9px] font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                   <Package size={10} className="text-orange-500" />
                   {category.projects}
                </div>
              </div>

              {/* Advanced Skill Grid */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 px-5 py-3 bg-zinc-950/40 border border-white/5 rounded-2xl group/skill hover:bg-zinc-950 transition-all duration-300"
                  >
                    {typeof skill.icon === 'string' ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-5 h-5 grayscale opacity-60 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all" 
                      />
                    ) : (
                      <skill.icon size={16} className="text-zinc-600 group-hover/skill:text-orange-500 transition-colors" />
                    )}
                    <span className="text-xs font-bold text-zinc-400 group-hover/skill:text-white transition-colors tracking-tight">
                      {skill.name}
                    </span>
                    <SkillLevel level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Tech Identity Ribbon */}
        <div className="pt-24 space-y-16">
          <div className="text-center relative">
             {/* Divider Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 z-0" />
             <p className="relative z-10 inline-block px-10 bg-[#0b0f17] text-[11px] font-black text-zinc-600 uppercase tracking-[0.6em]">
               Primary Weaponry
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {bottomRibbon.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.15 }}
                className="flex flex-col items-center gap-6 group"
              >
                <div className="w-24 h-28 md:w-28 md:h-32 bg-zinc-900/40 border border-white/5 rounded-[3rem] flex items-center justify-center p-8 hover:border-orange-500/40 hover:bg-zinc-900/60 transition-all duration-500 shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  />
                </div>
                <span className="text-[10px] font-black text-zinc-600 group-hover:text-orange-500 uppercase tracking-[0.3em] transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


