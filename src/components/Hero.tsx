import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Rocket, Brain, ExternalLink } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { useState, useEffect } from 'react';

const TypewriterRole = () => {
  const roles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, typingSpeed]);

  return (
    <span className="text-orange-500 min-h-[1.5em] inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-orange-500 ml-1 align-middle"
      />
    </span>
  );
};

/**
 * Background Decoration Components
 */
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
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1000], [-40, 40]);
  const parallaxY = useTransform(smoothMouseY, [0, 1000], [-40, 40]);

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
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6 lg:px-24 bg-background"
    >
      <BackgroundGrid />
      <FloatingParticles />

      {/* Background Grid & Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[180px] rounded-full transform-gpu"
        />
        <motion.div
          style={{ x: useTransform(parallaxX, v => v * -1.2), y: useTransform(parallaxY, v => v * -1.2) }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full transform-gpu"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 w-full"
      >

        {/* Left Column: Introduction & Messaging */}
        <motion.div className="space-y-8">
          {/* Status & Proof Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              {
                id: 'availability', content: (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full text-[10px] font-black text-orange-500 uppercase tracking-widest shadow-lg shadow-orange-500/5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Available for new projects
                  </div>
                )
              },
              { id: 'dsa', icon: Brain, text: '200+ DSA Solved' },
              { id: 'projects', icon: Rocket, text: '5+ Full-Stack Projects' }
            ].map((badge) => (
              <motion.div
                key={badge.id}
                variants={itemVariants}
                className={('content' in badge) ? "" : "inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-widest"}
              >
                {('content' in badge) ? badge.content : (
                  <>
                    <badge.icon size={12} className="text-orange-500" />
                    {badge.text}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Headline */}
          <div className="space-y-4 text-left">
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-[6.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase"
            >
              Budde <span className="text-orange-500">Vinay</span>
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="text-xl md:text-3xl font-bold text-zinc-400 tracking-tight h-[1.5em]"
            >
              <TypewriterRole />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs font-black text-zinc-600 uppercase tracking-[0.3em]"
            >
              3rd Year CSE | Full Stack Web Developer
            </motion.p>
          </div>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-500 text-sm md:text-lg max-w-lg leading-relaxed font-semibold tracking-tight text-left"
          >
            I build <span className="text-white">high-performance MERN applications</span> with real-time features and scalable backend systems, focusing on <span className="text-orange-500">speed, UX, and production-level architecture</span>.
          </motion.p>

          {/* Tech Stack Preview Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 py-2"
          >
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
            ].map((tech) => (
              <div key={tech.name} className="group relative">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" title={tech.name} />
              </div>
            ))}
          </motion.div>

          {/* Action Buttons & Socials */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="px-8 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-2xl shadow-2xl shadow-orange-600/30 transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap flex items-center gap-2 group"
              >
                View Projects
                <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-5 bg-zinc-900 border border-white/5 text-white font-black rounded-2xl shadow-xl hover:bg-zinc-800 transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap flex items-center gap-3 group"
              >
                Let's Work Together
                <Mail size={14} className="text-orange-500 group-hover:scale-110 transition-transform" />
              </a>
            </Magnetic>

            {/* Quick Connect Icons */}
            <div className="flex items-center gap-4">
              <Magnetic>
                <a
                  href="https://github.com/Vinay-Budde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white transition-all hover:bg-zinc-800 shadow-xl flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://linkedin.com/in/vinay-budde-bb8a0628a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white transition-all hover:bg-zinc-800 shadow-xl flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* "Currently Building" Status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-4 border-t border-white/5"
          >
            <div className="p-2 bg-orange-600/10 rounded-lg">
              <Code2 size={14} className="text-orange-500" />
            </div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Currently building <span className="text-white">AI-Powered Analytics Dashboard</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Stylized Portrait Representation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9, x: 20 },
            show: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4 }
            }
          }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] max-w-[450px] ml-auto overflow-hidden rounded-[3rem] bg-zinc-900/50 border border-white/10 group shadow-[0_0_100px_rgba(249,115,22,0.1)]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full h-full relative"
            >
              <img
                src="/assets/prooo.png"
                alt="Budde Vinay"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Image Glow Border */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/20 rounded-[3rem] transition-all duration-700" />
            </motion.div>

            {/* Accent Blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[40px]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Persistent Scroll Suggestion */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-20"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

