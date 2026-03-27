import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Github,
  ArrowUpRight,
  CheckCircle2,
  Target,
  X
} from 'lucide-react';
import { useState, type MouseEvent, useEffect } from 'react';
import { cn } from '../lib/utils';
import { BackgroundGrid, FloatingParticles } from './ui/OptimizedDecorations';


// --- Decoration Components handled by Centralized UI ---

// --- Types & Data ---

interface Project {
  title: string;
  id: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  problem: string;
  solution_short: string;
  challenge: string;
  solution: string;
  architecture: string;
  role: string;
  features: { icon: string; text: string }[];
  metrics: string[];
  metrics_short: string;
  complexity: string;
  tech: { name: string; icon: string }[];
  github: string;
  link: string;
  isFeatured: boolean;
}

const filters = [
  { name: 'All Work', value: 'all' },
  { name: 'Full Stack', value: 'fullstack' },
  { name: 'Frontend', value: 'frontend' },
];

const projectData: Project[] = [
  {
    title: 'Clean India',
    id: 'clean-india',
    category: 'fullstack',
    image: '/assets/projects/clean-india.png',
    shortDesc: 'Civic issue reporting platform with real-time tracking.',
    fullDesc: 'A high-perfomance civic report management system designed to bridge the gap between citizens and administration through geo-spatial intelligence.',
    problem: 'Users couldn’t report civic issues easily or track resolution progress.',
    solution_short: 'Engineered a geo-tagged platform with automated image validation.',
    challenge: 'Inefficient civic issue reporting with zero real-time accountability and messy paper trails.',
    solution: 'Engineered a geo-tagged platform with automated image validation, real-time admin hotspots, and resolution analytics.',
    architecture: 'MERN + Cloudinary PWA',
    role: 'Lead Full-Stack Developer',
    features: [
      { icon: '📍', text: 'Geo Tracking' },
      { icon: '📸', text: 'Image Upload' },
      { icon: '⚡', text: 'Real-time' }
    ],
    metrics: ['40% Faster Resolution', '500+ Reports Logged', '99.9% Uptime'],
    metrics_short: '🚀 40% Faster Resolution',
    complexity: 'Built scalable REST APIs',
    tech: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'MongoDB', icon: '🍃' }
    ],
    github: 'https://github.com/Vinay-Budde/cleanindia',
    link: 'https://cleanindia-two.vercel.app/',
    isFeatured: true,
  },
  {
    title: 'Logic Grid',
    id: 'logic-grid',
    category: 'frontend',
    image: '/assets/projects/logic-grid.png',
    shortDesc: 'Advanced Sudoku engine with dynamic grid generation.',
    fullDesc: 'A complex logical puzzle platform that implements BFS/DFS algorithms for deterministic validation and grid generation.',
    problem: 'Complex logic puzzle validation causing client-side lag.',
    solution_short: 'Implemented a deterministic algorithm model with optimized state reconciliation.',
    challenge: 'Complex logic puzzle validation causing client-side lag and inconsistent grid difficulty scaling.',
    solution: 'Implemented a deterministic algorithmic model with optimized state reconciliation and recursive difficulty generation.',
    architecture: 'TypeScript Algorithm Engine',
    role: 'Frontend Architect',
    features: [
      { icon: '🧩', text: 'Dynamic Grids' },
      { icon: '⏱️', text: 'Conflict Detection' },
      { icon: '💾', text: 'Auto-save' }
    ],
    metrics: ['Perfect 100 Lighthouse Score', 'Zero-Lag Validation', '10k+ Grid Permutations'],
    metrics_short: '🧠 Handles dynamic grid generation',
    complexity: 'Implements recursive generation algorithms',
    tech: [
      { name: 'TypeScript', icon: '📘' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Framer', icon: '🎞️' }
    ],
    github: 'https://github.com/Vinay-Budde/Sudoku',
    link: 'https://sudoku-zeta-blue.vercel.app/',
    isFeatured: false,
  },
  {
    title: 'Record Manager',
    id: 'student-manager',
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?auto=format&fit=crop&q=80',
    shortDesc: 'Enterprise student data system with secure auth.',
    fullDesc: 'A robust academic management system designed to handle thousands of student records with military-grade security and logging.',
    problem: 'Legacy systems lacked security, audit trails, and search performance.',
    solution_short: 'Built a JWT-secured system with high-speed NoSQL indexing.',
    challenge: 'Legacy student data systems lacking security, audit trails, and efficient search performance.',
    solution: 'Built a JWT-secured enterprise system with high-speed NoSQL indexing and Mongoose-based schema validation.',
    architecture: 'Node.js + MongoDB Micro-service',
    role: 'Backend Specialist',
    features: [
      { icon: '🔐', text: 'JWT Auth' },
      { icon: '🔍', text: 'Fast Search' },
      { icon: '📝', text: 'Audit Logs' }
    ],
    metrics: ['1000+ Records Handled', 'Sub-100ms Search', 'Secure Role Management'],
    metrics_short: '📈 Optimized API calls (Sub-100ms)',
    complexity: 'Built scalable REST APIs & secure role systems',
    tech: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'React.js', icon: '⚛️' }
    ],
    github: 'https://github.com/Vinay-Budde/recordmanager',
    link: 'https://recordmanager.vercel.app/',
    isFeatured: false,
  }
];

// --- Sub-Components ---

const ProjectModal = ({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0b0f17]/90 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row transform-gpu"
          >
            {/* Visual Side */}
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover transform-gpu" 
               />
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-14 overflow-y-auto space-y-10 custom-scrollbar">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">{project.title}</h3>
                  <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest">{project.architecture}</p>
                </div>
                <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-zinc-400 hover:text-white transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950/50 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-sm font-bold text-white">{project.role}</p>
                  </div>
                  <div className="p-4 bg-zinc-950/50 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Complexity</p>
                    <p className="text-sm font-bold text-white">Full-Stack Architecture</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><Target size={16} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">The Challenge</p>
                      <p className="text-sm text-zinc-300 leading-relaxed">{project.challenge}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><CheckCircle2 size={16} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Engineering Solution</p>
                      <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                   <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Key Features</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map(f => (
                        <div key={f.text} className="flex items-center gap-2 text-xs text-zinc-400 font-semibold">
                          <span className="text-base">{f.icon}</span>
                          {f.text}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-6 border-y border-white/5">
                  {project.metrics.map(m => (
                    <div key={m} className="text-center">
                       <p className="text-zinc-500 text-[8px] font-black uppercase tracking-tighter">Metric</p>
                       <p className="text-white text-[10px] font-black">{m}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest">
                  <Github size={18} /> Source Code
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest shadow-xl shadow-orange-600/20">
                   Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectImage = ({ project }: { project: Project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative group/img aspect-[16/10] bg-zinc-950/50 p-4"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl" 
      >
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110 transform-gpu"
          style={{ transform: "translateZ(40px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/20 to-transparent opacity-60" />
      </motion.div>
    </div>
  );
};

// --- Main Component ---

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectData.filter(p =>
    activeFilter === 'all' ? true : p.category === activeFilter
  );

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
      id="projects" 
      onMouseMove={handleMouseMove}
      className="py-40 px-4 relative bg-[#0b0f17] overflow-hidden"
    >
      <BackgroundGrid />
      <FloatingParticles />
      
      {/* Premium Section Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
         <motion.div 
           style={{ x: parallaxX, y: parallaxY }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full transform-gpu" 
         />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto space-y-32 relative z-10"
      >

        {/* Header - Global Selection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                Selected <span className="text-orange-500">Work</span>
            </h2>
            <p className="text-zinc-500 font-bold text-sm md:text-xl leading-relaxed tracking-tight max-w-xl">
               Real-world applications built with performance and scalability in mind.
            </p>
          </motion.div>

          {/* Minimalist Filter */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] transition-all",
                  activeFilter === f.value ? "text-orange-500" : "text-zinc-600 hover:text-zinc-300"
                )}
              >
                {f.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Unified Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col backdrop-blur-sm transform-gpu cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Section */}
                <ProjectImage project={project} />

                {/* Content Section */}
                <div className="p-10 space-y-6 flex-1 flex flex-col relative">
                  <div className="space-y-4 transform-gpu group-hover:-translate-y-1 transition-transform duration-500">
                    <h4 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                      {project.architecture}
                    </p>
                  </div>

                  <p className="text-zinc-500 text-xs font-semibold leading-relaxed tracking-tight line-clamp-3 group-hover:text-zinc-400 transition-colors duration-300">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Overlay (Subtle) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t.name} className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{t.name}</span>
                    ))}
                  </div>

                  {/* Footer Area */}
                  <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                         <CheckCircle2 size={12} className="text-orange-500" />
                      </motion.div>
                      {project.metrics_short}
                    </span>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-full bg-white/5 text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-full bg-white/5 text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Details Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* Final Archive CTA */}
        <div className="text-center pt-20">
            <a href="https://github.com/Vinay-Budde" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-6 bg-zinc-900 border border-white/5 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-orange-500 transition-all rounded-3xl shadow-2xl">
               <Github size={20} />
               Explore Full Archive
            </a>
        </div>

      </motion.div>
    </section>
  );
};


