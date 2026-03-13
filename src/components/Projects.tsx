import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ArrowUpRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Magnetic } from './ui/Magnetic';

const filters = [
  { name: 'All Work', value: 'all' },
  { name: 'Full Stack', value: 'fullstack' },
  { name: 'Frontend', value: 'frontend' },
  { name: 'React', value: 'react' },
];

const projectData = [
  {
    title: 'Clean India',
    id: 'clean-india',
    category: 'fullstack',
    image: '/assets/projects/clean-india.png',
    description: 'A cloud-based civic reporting system with geo-tagged submission, image evidence, and real-time visualization.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Leaflet API'],
    github: 'https://github.com/Vinay-Budde/cleanindia',
    link: 'https://cleanindia-two.vercel.app/',
    isExperimental: false,
  },
  {
    title: 'Logic Grid',
    id: 'logic-grid',
    category: 'frontend',
    image: '/assets/projects/logic-grid.png',
    description: 'Sudoku-inspired logic puzzle with dynamic grid generation, deterministic validation and game-state management.',
    tech: ['React.js', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/Vinay-Budde/Sudoku',
    link: 'https://sudoku-zeta-blue.vercel.app/',
    isExperimental: true,
  },
  {
    title: 'Student Record Manager',
    id: 'student-manager',
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
    description: 'Complete student academic record management system with CRUD operations and structured data collections.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Java'],
    github: 'https://github.com/Vinay-Budde/recordmanager',
    link: 'https://recordmanager.vercel.app/',
    isExperimental: false,
  }
];

/**
 * Projects Section Component
 * Display a curated list of professional work with interactive filtering.
 */
export const Projects = () => {
  // --- State & Filtering ---
  const [activeFilter, setActiveFilter] = useState('all');

  // Derive filtered list based on active category or technology
  const filteredProjects = projectData.filter(p =>
    activeFilter === 'all' ? true : p.category === activeFilter || p.tech.some(t => t.toLowerCase().includes(activeFilter))
  );

  return (
    <section id="projects" className="py-32 px-4 relative bg-transparent">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header Area & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6 max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Full-Stack MERN Expert
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Project <span className="text-orange-500">Gallery</span>
            </h2>
            <p className="text-zinc-500 font-semibold text-sm md:text-base leading-relaxed tracking-tight max-w-xl">
              A showcase of high-performance full-stack applications. Leveraging the power of MongoDB, Express, React, and Node.js to build scalable digital solutions.
            </p>
          </div>

          {/* Dynamic Filter Pills */}
          <div className="p-2 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-wrap gap-2 shadow-2xl backdrop-blur-md">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                  activeFilter === f.value
                    ? "bg-orange-600 text-white shadow-xl shadow-orange-600/20"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                )}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Display Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900/30 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl hover:border-orange-500/20 transition-all duration-500 flex flex-col"
              >
                {/* Visual Asset Layer */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-90" />

                  {/* Experimental Indicator Indicator */}
                  {project.isExperimental && (
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-zinc-900/80 backdrop-blur-md border border-orange-500/30 rounded-full flex items-center gap-2">
                      <Sparkles size={10} className="text-orange-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Experimental</span>
                    </div>
                  )}
                </div>

                {/* Information Layer */}
                <div className="p-10 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 font-semibold text-sm leading-relaxed tracking-tight line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Profile Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-orange-600/5 border border-orange-500/10 rounded-xl text-[10px] font-black text-orange-500 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions Area */}
                  <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Source/Preview Quick Links */}
                      <Magnetic>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-zinc-900/50 border border-white/5 rounded-2xl text-zinc-500 hover:text-white hover:border-white/10 transition-all shadow-xl"
                          aria-label="View Source on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      </Magnetic>
                      <Magnetic>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-zinc-900/50 border border-white/5 rounded-2xl text-zinc-500 hover:text-white hover:border-white/10 transition-all shadow-xl"
                          aria-label="Live Demo"
                        >
                          <Globe size={18} />
                        </a>
                      </Magnetic>
                    </div>

                    {/* Primary Engagement Button */}
                    <Magnetic>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-600/20 transition-all group/btn"
                      >
                        View Project
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 bg-zinc-900/20 border border-white/5 border-dashed rounded-[4rem] text-center space-y-10 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500/30" />
            ))}
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Want to see more?</h4>
            <p className="text-zinc-500 font-semibold leading-relaxed tracking-tight text-sm">
              I have several other repositories including open-source contributions and technical experiments available on GitHub. Let's build something exceptional together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Magnetic>
              <a
                href="https://github.com/Vinay-Budde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-5 bg-zinc-900/50 border border-white/5 rounded-[2rem] text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all"
              >
                <Github size={18} />
                Github Archive
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-4 px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-600/20 transition-all"
              >
                Request Case Study
              </a>
            </Magnetic>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
