import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, GraduationCap, Award, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="text-sm font-medium hover:text-blue-400 transition-colors">Skills</a>
        <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const icons = [
    { Icon: Code, color: 'text-blue-500', top: '10%', left: '10%' },
    { Icon: Github, color: 'text-zinc-400', top: '20%', left: '80%' },
    { Icon: MapPin, color: 'text-red-500', top: '70%', left: '15%' },
    { Icon: GraduationCap, color: 'text-yellow-500', top: '60%', left: '85%' },
  ];

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="min-height-[100vh] flex flex-col items-center justify-center relative overflow-hidden py-20 px-4"
    >
      {/* Interactive Glow Background */}
      {!isMobile && (
        <motion.div
           className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
           animate={{
             background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
           }}
        />
      )}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={cn("absolute z-10 hidden md:block", item.color)}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <item.Icon size={40} className="opacity-20" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-2 rounded-full glass text-xs font-semibold text-blue-400 mb-6 inline-block"
        >
          OPEN TO OPPORTUNITIES
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I'm <span className="gradient-text">Budde Vinay</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-zinc-400 font-medium mb-8"
        >
          MERN Stack Developer | Full Stack Developer | CSE Student
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-blue-500/10">
            View Projects
          </a>
          <a href="/resume.pdf" download className="px-8 py-3 glass font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 border-zinc-700">
            Download Resume
          </a>
          <a href="https://github.com/Vinay-Budde" target="_blank" className="p-3 glass rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
            <Github size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const About = () => {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-zinc-300 leading-relaxed text-left">
            Budde Vinay is a Full Stack Developer and Computer Science Engineering student specializing in the MERN stack.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed text-left">
            He builds scalable web applications using MongoDB, Express.js, React.js, and Node.js. He enjoys solving complex problems, designing responsive user interfaces, and developing efficient backend APIs.
          </p>
          <p className="text-lg text-zinc-400 italic text-left">
            "Actively practicing Data Structures and Algorithms with 100+ problems solved on LeetCode."
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="p-4 glass rounded-xl flex items-center gap-4 flex-1">
              <Award className="text-blue-500" />
              <div>
                <div className="font-bold">100+</div>
                <div className="text-xs text-zinc-500">LeetCode Solved</div>
              </div>
            </div>
            <div className="p-4 glass rounded-xl flex items-center gap-4 flex-1">
              <GraduationCap className="text-purple-500" />
              <div>
                <div className="font-bold">CSE</div>
                <div className="text-xs text-zinc-500">Student</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass rounded-2xl p-8 aspect-square flex flex-col items-center justify-center text-center">
             <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Code size={48} className="text-blue-400" />
             </div>
             <h3 className="text-2xl font-bold mb-2">Budde Vinay</h3>
             <p className="text-zinc-400">Software Engineer & MERN Specialist</p>
             <div className="flex gap-4 mt-8">
               <a href="https://linkedin.com/in/vinay-budde-bb8a0628a/" target="_blank" className="p-3 glass rounded-lg hover:text-blue-400"><Linkedin size={20} /></a>
               <a href="https://github.com/Vinay-Budde" target="_blank" className="p-3 glass rounded-lg hover:text-white"><Github size={20} /></a>
               <a href="mailto:vinaybudde263@gmail.com" className="p-3 glass rounded-lg hover:text-red-400"><Mail size={20} /></a>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
