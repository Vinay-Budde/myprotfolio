import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Database, Server, Layout, FileCode, Cpu, Github, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';

const skills = [
  { name: 'MongoDB', icon: Database, color: 'text-green-500' },
  { name: 'Express.js', icon: Server, color: 'text-zinc-400' },
  { name: 'React.js', icon: Layout, color: 'text-blue-400' },
  { name: 'Node.js', icon: Cpu, color: 'text-green-600' },
  { name: 'TypeScript', icon: FileCode, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-400' },
];

export const TechStack = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-4 bg-zinc-900/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Orbit</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div 
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Center Hub */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-blue-500/30 flex items-center justify-center glass z-20 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
             <div className="text-center">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Stack</div>
                <div className="font-bold">MERN</div>
             </div>
          </div>

          {/* Orbiting Icons */}
          {skills.map((skill, i) => {
            const angle = (i * 360) / skills.length;
            return (
              <motion.div
                key={skill.name}
                className="absolute"
                animate={{
                  rotate: isPaused ? 0 : 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  rotate: `${angle}deg`
                } as any}
              >
                <div 
                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                   style={{ rotate: `${-angle}deg` } as any}
                >
                   <motion.div 
                     animate={{ rotate: isPaused ? 0 : -360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="glass p-4 rounded-xl shadow-lg border-white/5 group hover:border-blue-500/50 transition-colors"
                   >
                     <skill.icon size={24} className={skill.color} />
                     <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-blue-400">
                        {skill.name}
                     </div>
                   </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Orbit Path Circles */}
          <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute inset-8 border border-white/5 rounded-full pointer-events-none" />
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
        }}
        whileHover={{ scale: 1.02 }}
        className="glass rounded-2xl overflow-hidden group border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl relative"
      >
        <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
          <Layout size={64} className="text-zinc-700 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" />
          {/* Subtle Glare */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ x, y }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
             <h3 className="text-xl font-bold">{project.title}</h3>
             <div className="flex gap-2 text-zinc-500">
               <a href={project.github} target="_blank" className="hover:text-blue-400 transition-colors"><Github size={18} /></a>
               <a href={project.link} className="hover:text-blue-400 transition-colors"><ExternalLink size={18} /></a>
             </div>
          </div>
          <p className="text-blue-400 text-sm font-medium mb-3">{project.subtitle}</p>
          <p className="text-zinc-400 text-sm mb-6 line-clamp-3">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-2 py-1 text-[10px] uppercase font-bold bg-white/5 rounded-md text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
  );
};

const projects = [
  {
    title: 'Clean India',
    subtitle: 'Civic Issue Reporting System',
    desc: 'A full stack MERN application that allows citizens to report civic issues with geo-tagged images and track complaints.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Leaflet'],
    link: '#',
    github: 'https://github.com/Vinay-Budde',
  },
  {
    title: 'Logic Grid',
    subtitle: 'Puzzle Web Application',
    desc: 'A Sudoku-inspired logic puzzle web app with dynamic grid generation and rule validation.',
    tech: ['React.js', 'TypeScript', 'Tailwind'],
    link: '#',
    github: 'https://github.com/Vinay-Budde',
  },
  {
    title: 'Student Record Manager',
    subtitle: 'CRUD Application',
    desc: 'A full stack application for managing student records with CRUD functionality.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: 'https://github.com/Vinay-Budde',
  }
];

export const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
