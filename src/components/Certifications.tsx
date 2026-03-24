import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  Award,
  Cloud,
  Cpu,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2
} from 'lucide-react';
import { BackgroundGrid, FloatingParticles } from './ui/OptimizedDecorations';

const certData = [
  {
    title: 'ChatGPT-4 Prompt Engineering',
    org: 'OPENAI CERTIFIED SPECIALIST',
    date: 'Issued Aug 25',
    logo: '/assets/chatgpt-4.png', // Fall to icon if needed
    icon: Sparkles,
    color: 'bg-[#f8ede5]',
    accent: 'text-[#d48d61]',
    link: 'https://drive.google.com/file/d/1QL7RxsEdWvK-TEfEtpl1Mf2pemJbut-O/view?usp=sharing'
  },
  {
    title: 'Cloud Computing Architect',
    org: 'AWS CERTIFIED PROFESSIONAL',
    date: 'Issued May 25',
    icon: Cloud,
    logo: '/assets/cloud.png',
    color: 'bg-[#e7f0f7]',
    accent: 'text-[#6495bc]',
    link: 'https://drive.google.com/file/d/1qcAj67Yt8UNUpNnTfdsgSYqnIHwoiP3q/view?usp=sharing'
  },
  {
    title: 'Master Generative AI',
    org: 'DEEPLEARNING.AI',
    date: 'Issued Aug 25',
    icon: Cpu,
    logo: '/assets/masgenai.png', // Using google as proxy for AI
    color: 'bg-[#e9f5f2]',
    accent: 'text-[#6ba192]',
    link: 'https://drive.google.com/file/d/1qmidK2NCQGQwtYgPMDR9zfm97O5CC1s-/view?usp=sharing'
  },
  {
    title: 'Java Bootcamp(LPU)',
    org: 'TRAINING',
    date: 'Jun’ 25 – Jul’ 25',
    icon: Code2,
    logo: '/assets/javabootcamp.png',
    color: 'bg-[#f4f2ee]',
    accent: 'text-[#e76f51]',
    description: 'Strengthened proficiency in Core Java, OOP principles, and advanced problem-solving using DSA (Backtracking, Recursion, Two-pointers). Focused on code optimization and space/time complexity analysis.',
    link: 'https://drive.google.com/file/d/1F18GOY81Fr5Dx6I79SL-DXCWlW2L6WQC/view?usp=sharing'
  }
];

// --- Decoration Components handled by Centralized UI ---

/**
 * Certifications Section Component
 * Displays professional certifications and academic achievements.
 */
export const Certifications = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappier spring for parallax
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1000], [-30, 30]);
  const parallaxY = useTransform(smoothMouseY, [0, 1000], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section 
      id="certifications" 
      onMouseMove={handleMouseMove}
      className="py-32 px-4 relative overflow-hidden bg-zinc-950/50"
    >
      <BackgroundGrid />
      <FloatingParticles />

      {/* Background Aesthetic Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        {/* Main Orange Orb */}
        <motion.div
// turbo-gpu
          style={{ x: parallaxX, y: parallaxY }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full transform-gpu"
        />
        
        {/* Deep Amber Orb */}
        <motion.div
// turbo-gpu
          style={{ 
            x: useTransform(parallaxX, v => v * -0.8), 
            y: useTransform(parallaxY, v => v * -0.5) 
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-amber-600/10 blur-[140px] rounded-full transform-gpu"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Header Messaging Section */}
        <div className="space-y-6 max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]"
          >
            <CheckCircle2 size={12} />
            Professional Validation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase"
          >
            Certificates & <span className="text-orange-500 font-outline-2">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 font-semibold text-sm md:text-base leading-relaxed tracking-tight max-w-xl"
          >
            Showcasing a commitment to continuous learning and mastery of emerging technologies in Artificial Intelligence and Cloud Architecture.
          </motion.p>
        </div>

        {/* Content Body Grid */}
        <div className="space-y-12">
          {/* Section Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Major Certifications</h3>
          </motion.div>

          {/* Scalable Grid Layout */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certData.map((cert) => (
              <motion.div
                key={cert.title}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.5,
                      bounce: 0.2
                    }
                  }
                }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col backdrop-blur-sm transform-gpu"
              >
                {/* Brand Visual Layer */}
                <div className={cn("h-64 relative flex items-center justify-center p-6 transition-colors duration-500", cert.color.replace('bg-', 'bg-opacity-10 bg-'))}>
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Primary Vendor Logo / Certificate Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-2xl transform-gpu">
                    <img
                      src={cert.logo}
                      alt={cert.org}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Information Strategy Layer */}
                <div className="p-10 space-y-6 flex-1 flex flex-col relative">
                  {/* Content hover interaction - slight lift */}
                  <div className="space-y-4 transform-gpu group-hover:-translate-y-1 transition-transform duration-500">
                    <h4 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none group-hover:text-orange-500 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                      {cert.org}
                    </p>
                  </div>

                  {/* Add Description if exists */}
                  {'description' in cert && (
                    <p className="text-zinc-500 text-xs font-semibold leading-relaxed tracking-tight line-clamp-3 group-hover:text-zinc-400 transition-colors duration-300">
                      {cert.description}
                    </p>
                  )}

                  {/* Verification & Links Area */}
                  <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Award size={12} className="text-orange-500" />
                      </motion.div>
                      {cert.date}
                    </span>
                    <motion.a
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                      whileTap={{ scale: 0.9 }}
                      href={cert.link}
                      className="p-3 rounded-full text-zinc-400 hover:text-orange-500 transition-all duration-300"
                      aria-label="Verify Certification"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
