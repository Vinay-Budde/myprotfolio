import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  MapPin,
  Brain,
  Users,
  MessageSquare,
  Zap,
  Github,
  Linkedin,
  Terminal,
  Cpu
} from 'lucide-react';
import { BackgroundGrid, FloatingParticles } from './ui/OptimizedDecorations';

const softSkills = [
  { name: "DSA & Real-world Debugging", icon: Brain, detail: "Solving complex algorithmic problems and debugging production-level code." },
  { name: "Technical Collaboration", icon: Users, detail: "Working effectively in Agile teams and contributing to open-source." },
  { name: "Technical Documentation", icon: MessageSquare, detail: "Writing clear, maintainable documentation and architecture guides." },
  { name: "Performance Optimization", icon: Zap, detail: "Enhancing application speed and improving system efficiency." }
];

const coreStack = [
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
  { group: "Database", items: ["MongoDB", "SQL", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "Docker", "Vercel", "Cloudinary"] }
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};


// --- Decoration Components handled by Centralized UI ---

/**
 * About Section Component
 * Detailed professional background, education, and soft skills.
 */
export const About = () => {
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
      id="about"
      onMouseMove={handleMouseMove}
      className="py-20 px-4 relative bg-[#0b0f17] overflow-hidden"
    >
      <BackgroundGrid />
      <FloatingParticles />

      {/* Premium Visual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full transform-gpu"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto space-y-16 relative z-10"
      >

        {/* Profile Introduction Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar Area */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 p-4 relative bg-zinc-900/50 backdrop-blur-3xl overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/assets/me22.jpeg"
                  alt="Budde Vinay"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 right-10 bg-orange-600 px-4 py-2 rounded-xl border border-white/20 shadow-2xl z-10 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Heading Area */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div {...fadeUp} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">
                <Terminal size={12} />
                About Me
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Full Stack <span className="text-orange-500 font-outline-2">Developer</span>
              </h2>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 font-medium text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight"
            >
              I am a <span className="text-white">Full-Stack Developer</span> specializing in building scalable MERN applications and intuitive user interfaces. Currently pursuing my B.Tech in Computer Science, I focus on <span className="text-orange-500">efficient backend architectures</span> and high-impact digital experiences.
            </motion.p>

            {/* Profile Metadata (Location & Quick Socials) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <div className="flex items-center gap-2 text-zinc-500 font-bold">
                <MapPin size={18} className="text-orange-500" />
                <span className="tracking-widest uppercase text-[10px] md:text-xs">Hyderabad, Telangana | <span className="text-orange-500/80">Open to Remote / Internships</span></span>
              </div>

              <div className="h-4 w-px bg-white/10 hidden md:block" />

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Vinay-Budde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900/50 border border-white/5 rounded-lg text-zinc-500 hover:text-white transition-all hover:border-orange-500/30"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/vinay-budde-bb8a0628a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900/50 border border-white/5 rounded-lg text-zinc-500 hover:text-white transition-all hover:border-orange-500/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Story & Academic Journey */}
          <div className="lg:col-span-7 space-y-16">

            {/* Bio Card */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500 shadow-lg shadow-orange-500/5">
                  <Terminal size={24} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Professional Journey</h3>
              </div>
              <div className="p-10 bg-zinc-900/20 border border-white/5 rounded-[3rem] relative overflow-hidden group hover:border-orange-500/20 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] group-hover:bg-orange-500/10 transition-all duration-700" />
                <p className="text-zinc-400 font-medium leading-relaxed tracking-tight text-lg relative z-10 md:text-xl">
                  Driven by a passion for building complex systems with <span className="text-white font-bold">meaningful impact</span>. I specialize in the MERN stack, focusing on robust backend performance and <span className="text-orange-500 font-bold">premium user experiences</span>. My journey is defined by a commitment to clean code, efficient algorithms, and continuous technical evolution.
                </p>
              </div>
            </motion.section>


            {/* Core Strengths - Moved to left column for balance */}
            <motion.section variants={itemVariants} className="space-y-10 pt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Core Strengths</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {softSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-zinc-900/40 border border-white/5 rounded-3xl space-y-4 group hover:border-orange-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform duration-500">
                        <skill.icon size={20} />
                      </div>
                      <span className="text-white font-bold tracking-tight text-base uppercase tracking-widest">{skill.name}</span>
                    </div>
                    <p className="text-zinc-500 text-xs font-medium leading-relaxed pl-14">
                      {skill.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Technologies */}
          <div className="lg:col-span-5 space-y-12">
            <motion.section variants={itemVariants} className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Technologies</h3>
              </div>
              <div className="space-y-8">
                {coreStack.map((category) => (
                  <div key={category.group} className="space-y-4">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] ml-1">{category.group}</p>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map(item => (
                        <div key={item} className="px-5 py-2.5 bg-zinc-900/60 border border-white/10 rounded-2xl text-xs font-bold text-orange-500 uppercase tracking-widest hover:border-orange-500/40 hover:bg-orange-500/5 transition-all cursor-default shadow-lg">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

