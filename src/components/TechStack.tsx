import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layout, 
  Server, 
  Cpu, 
  ShieldCheck,
  Code2,
  Globe,
  GitBranch,
  Github,
  Monitor,
  Cloud,
  Layers,
  Zap,
  Brain
} from 'lucide-react';
const TriangleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L2 20H22L12 4Z" fill="currentColor" />
  </svg>
);

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    color: "bg-blue-600/20 text-blue-500",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "bg-purple-600/20 text-purple-500",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Responsive Design", icon: Monitor }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "bg-green-600/20 text-green-500",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "REST APIs", icon: Globe },
      { name: "JWT Auth", icon: ShieldCheck }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Cpu,
    color: "bg-orange-600/20 text-orange-500",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: TriangleIcon },
      { name: "Cloudinary", icon: Cloud }
    ]
  },
  {
    title: "Core Concepts",
    icon: ShieldCheck,
    color: "bg-pink-600/20 text-pink-500",
    skills: [
      { name: "Data Structures", icon: Layers },
      { name: "Algorithms", icon: Zap },
      { name: "OOP", icon: Brain },
      { name: "Problem Solving", icon: Code2 },
      { name: "System Design", icon: Server }
    ]
  }
];

const bottomRibbon = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github }
];

/**
 * TechStack Component
 * Displays the developer's technical arsenal categorized by domain.
 * Features a modern grid layout and a scrolling tech ribbon.
 */
export const TechStack = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header: Section Context */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 text-[9px] font-black text-orange-500 uppercase tracking-[0.2em]"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Technical <span className="text-orange-500">Universe</span>
          </h2>
        </div>

        {/* Categorical Grid: Domain-specific Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] space-y-8 hover:border-orange-500/20 transition-all shadow-2xl"
            >
              {/* Category Identity */}
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl ${category.color}`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white tracking-tight leading-none">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tag Cloud */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    {typeof skill.icon === 'string' ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                      />
                    ) : (
                      <skill.icon size={14} className="opacity-70" />
                    )}
                    <span className="whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tech Ribbon: Fast Identification Icons */}
        <div className="pt-20 space-y-12">
          <div className="text-center">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">Technologies & Tools</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {bottomRibbon.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Tech Icon Card */}
                <div className="w-20 h-24 md:w-24 md:h-28 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] flex items-center justify-center p-6 group hover:border-orange-500/30 hover:bg-zinc-900/60 transition-all shadow-xl">
                  {typeof tech.icon === 'string' ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-full h-full object-contain grayscale transition-all group-hover:grayscale-0" 
                    />
                  ) : (
                    <tech.icon size={40} className="text-zinc-500 group-hover:text-orange-500 transition-all" />
                  )}
                </div>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
