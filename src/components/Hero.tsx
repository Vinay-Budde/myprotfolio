import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Rocket, Brain, ExternalLink } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { useState, useEffect, useRef } from 'react';

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
 * 3D Portrait Card — reacts to mouse with rotateX/Y spring physics
 */
const Portrait3D = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 25 });
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ['-20%', '120%']), { stiffness: 200, damping: 25 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ['-20%', '120%']), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex justify-end"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative aspect-[4/5] max-w-[420px] w-full rounded-[2.5rem] overflow-hidden group"
      >
        {/* Card body */}
        <div className="absolute inset-0 bg-zinc-900/60 border border-white/10 rounded-[2.5rem]"
          style={{
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.06),
              0 25px 50px rgba(0,0,0,0.6),
              0 50px 100px rgba(0,0,0,0.4),
              0 0 80px rgba(249,115,22,0.12)
            `
          }}
        />

        {/* Photo */}
        <img
          src="/assets/prooo.png"
          alt="Budde Vinay"
          className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 transform-gpu"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Dynamic specular highlight that follows mouse */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />

        {/* Rim border glow */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(249,115,22,0.25)',
          }}
        />

        {/* Floating name badge — pops out in Z */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 flex items-center justify-between"
          style={{
            transform: 'translateZ(30px)',
            background: 'rgba(10,10,15,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(249,115,22,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(249,115,22,0.1)',
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div>
            <p className="text-white font-black text-sm tracking-tight">Budde Vinay</p>
            <p className="text-orange-500 font-bold text-[10px] uppercase tracking-widest">Full Stack Developer</p>
          </div>
          <div className="flex gap-1.5">
            {['⚛️','🟢','🍃'].map((icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs">{icon}</div>
            ))}
          </div>
        </motion.div>

        {/* Corner accent glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/15 blur-[40px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-24 h-24 bg-violet-600/10 blur-[30px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Outer depth shadow — creates z-lift illusion */}
      <div
        className="absolute inset-0 max-w-[420px] ml-auto rounded-[2.5rem] pointer-events-none -z-10"
        style={{
          transform: 'translateY(24px) scale(0.94)',
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Orbiting stats badges */}
      {[
        { label: '5+ Projects', icon: '🚀', angle: -40, radius: 115 },
        { label: '100+ DSA', icon: '🧠', angle: 50, radius: 110 },
      ].map((badge) => {
        const rad = (badge.angle * Math.PI) / 180;
        const bx = Math.cos(rad) * badge.radius;
        const by = Math.sin(rad) * badge.radius;
        return (
          <motion.div
            key={badge.label}
            className="absolute rounded-2xl px-3 py-2 flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest"
            style={{
              right: `calc(50% - 210px + ${-bx}px)`,
              top: `calc(50% + ${by}px)`,
              background: 'rgba(10,10,15,0.9)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(249,115,22,0.2)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              zIndex: 10,
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: badge.angle * 0.02 }}
          >
            <span>{badge.icon}</span>
            {badge.label}
          </motion.div>
        );
      })}
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
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6 lg:px-24 bg-transparent"
    >
      {/* Large background glows that parallax with mouse */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[900px] h-[900px] rounded-full transform-gpu"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            x: parallaxX,
            y: parallaxY,
            background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0.04) 50%, transparent 70%)',
            filter: 'blur(60px)',
          } as any}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full transform-gpu"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{
            x: useTransform(parallaxX, v => v * -1.2),
            y: useTransform(parallaxY, v => v * -1.2),
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          } as any}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 w-full"
      >
        {/* ── Left Column ─────────────────────────────────────────── */}
        <motion.div className="space-y-8">

          {/* Status Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              {
                id: 'availability', content: (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black text-orange-400 uppercase tracking-widest"
                    style={{
                      background: 'rgba(249,115,22,0.08)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      boxShadow: '0 0 20px rgba(249,115,22,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                    </span>
                    Available for new projects
                  </div>
                )
              },
              { id: 'dsa', icon: Brain, text: '100+ DSA Solved' },
              { id: 'projects', icon: Rocket, text: '5+ Full-Stack Projects' }
            ].map((badge) => (
              <motion.div
                key={badge.id}
                variants={itemVariants}
                className={('content' in badge) ? "" : "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-widest"}
                style={!('content' in badge) ? {
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                } : undefined}
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

          {/* Main Headline — 3D embossed */}
          <div className="space-y-4 text-left" style={{ perspective: '800px' }}>
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-[6.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase"
              style={{
                textShadow: `
                  0 1px 0 rgba(255,255,255,0.08),
                  0 2px 4px rgba(0,0,0,0.5),
                  0 6px 16px rgba(0,0,0,0.4),
                  0 12px 32px rgba(0,0,0,0.3),
                  0 0 60px rgba(249,115,22,0.15)
                `,
              }}
            >
              Budde <span className="text-orange-500" style={{
                textShadow: `
                  0 0 20px rgba(249,115,22,0.6),
                  0 0 60px rgba(249,115,22,0.3),
                  0 2px 4px rgba(0,0,0,0.5)
                `
              }}>Vinay</span>
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

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-500 text-sm md:text-lg max-w-lg leading-relaxed font-semibold tracking-tight text-left"
          >
            I build <span className="text-white">high-performance MERN applications</span> with real-time features and scalable backend systems, focusing on <span className="text-orange-500">speed, UX, and production-level architecture</span>.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 py-2">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
            ].map((tech) => (
              <motion.div
                key={tech.name}
                className="group relative"
                whileHover={{ scale: 1.25, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <img src={tech.icon} alt={tech.name}
                  className="w-7 h-7 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  title={tech.name}
                />
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm scale-150"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3), transparent)' }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
            <Magnetic>
              <a href="#projects"
                className="px-8 py-5 text-white font-black rounded-2xl transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap flex items-center gap-2 group"
                style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #ea580c 100%)',
                  backgroundSize: '200% 200%',
                  boxShadow: '0 8px 32px rgba(249,115,22,0.35), 0 2px 8px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                View Projects
                <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a href="#contact"
                className="px-8 py-5 text-white font-black rounded-2xl transition-all uppercase text-[10px] tracking-[0.2em] whitespace-nowrap flex items-center gap-3 group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                Let's Work Together
                <Mail size={14} className="text-orange-500 group-hover:scale-110 transition-transform" />
              </a>
            </Magnetic>

            <div className="flex items-center gap-4">
              {[
                { href: 'https://github.com/Vinay-Budde', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/vinay-budde-bb8a0628a/', icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <Magnetic key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="p-4 rounded-2xl text-zinc-400 hover:text-white transition-all flex items-center justify-center group"
                    aria-label={label}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Currently Building */}
          <motion.div variants={itemVariants}
            className="flex items-center gap-3 pt-4 border-t border-white/5"
          >
            <div className="p-2 rounded-lg" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <Code2 size={14} className="text-orange-500" />
            </div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Currently building <span className="text-white">AI-Powered Analytics Dashboard</span>
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right Column: 3D Portrait ─────────────────────────── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9, x: 30 },
            show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] } }
          }}
          className="relative hidden lg:block"
        >
          <Portrait3D />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-25"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};
