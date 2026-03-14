import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

/**
 * Hero Section Component
 * The high-impact introductory section of the portfolio.
 */
export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6 lg:px-24"
    >
      {/* Background Aesthetic Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 w-full">

        {/* Left Column: Introduction & Messaging */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Availability Status */}
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

          {/* Main Headline */}
          <div className="space-y-4 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-[6rem] font-black tracking-tighter text-white leading-[0.9] uppercase"
            >
              Budde <span className="text-orange-500">Vinay</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-bold text-zinc-400 tracking-tight"
            >
              Full Stack / MERN Stack Developer
            </motion.p>
          </div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed font-semibold tracking-tight text-left"
          >
            I specialize in building scalable web applications using React, Node.js, and MongoDB. Passionate about creating seamless user experiences and robust backend architectures.
          </motion.p>

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
                className="px-8 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-2xl shadow-2xl shadow-orange-600/30 transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap"
              >
                View Projects
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/vinayresume.pdf"
                download="Vinay_Budde_Resume.pdf"
                className="px-8 py-5 bg-zinc-900 border border-white/5 text-white font-black rounded-2xl shadow-xl hover:bg-zinc-800 transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap flex items-center gap-3 group"
              >
                Resume
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
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
        </motion.div>

        {/* Right Column: Stylized Portrait Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] max-w-[450px] ml-auto overflow-hidden rounded-[3rem] bg-zinc-900/50 border border-white/10 group shadow-[0_0_100px_rgba(249,115,22,0.1)]">
            <img
              src="/assets/prooo.png"
              alt="Budde Vinay"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

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
