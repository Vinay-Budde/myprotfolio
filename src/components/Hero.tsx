import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Rocket, Brain, ExternalLink } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { useState, useEffect } from 'react';

const TypewriterRole = () => {
  const roles = ["Full Stack Developer", "MERN Stack Expert", "Aspiring Data Scientist", "UI/UX Enthusiast"];
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

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6 lg:px-24 bg-background"
    >
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 w-full">

        {/* Left Column: Introduction & Messaging */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Status & Proof Badges */}
          <div className="flex flex-wrap gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full text-[10px] font-black text-orange-500 uppercase tracking-widest shadow-lg shadow-orange-500/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-widest"
            >
              <Brain size={12} className="text-orange-500" />
              200+ DSA Solved
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-widest"
            >
              <Rocket size={12} className="text-orange-500" />
              5+ Full-Stack Projects
            </motion.div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-[6.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase"
            >
              Budde <span className="text-orange-500">Vinay</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl font-bold text-zinc-400 tracking-tight h-[1.5em]"
            >
              <TypewriterRole />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs font-black text-zinc-600 uppercase tracking-[0.3em]"
            >
              1st Year CSE | Aspiring Data Scientist
            </motion.p>
          </div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-500 text-sm md:text-lg max-w-lg leading-relaxed font-semibold tracking-tight text-left"
          >
            I build <span className="text-white">high-performance MERN applications</span> with real-time features and scalable backend systems, focusing on <span className="text-orange-500">speed, UX, and production-level architecture</span>.
          </motion.p>

          {/* Tech Stack Preview Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] max-w-[450px] ml-auto overflow-hidden rounded-[3rem] bg-zinc-900/50 border border-white/10 group shadow-[0_0_100px_rgba(249,115,22,0.1)]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-full h-full relative"
            >
              <img
                src="/assets/prooo.png"
                alt="Budde Vinay"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Image Glow Border */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/20 rounded-[3rem] transition-all duration-700" />
            </motion.div>

            {/* Accent Blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[40px]" />
          </div>
        </motion.div>
      </div>

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

