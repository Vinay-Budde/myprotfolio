import { motion } from 'framer-motion';
import { 
  MapPin, 
  Brain, 
  Users, 
  MessageSquare, 
  Zap, 
  GraduationCap, 
  Code2,
  Github,
  Linkedin
} from 'lucide-react';

const softSkills = [
  { name: "Problem-Solving", icon: Brain },
  { name: "Team Player", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Adaptability", icon: Zap }
];

const coreStack = [
  "REACT", "NODE.JS", "PYTHON", "TAILWIND", "SQL"
];

/**
 * About Section Component
 * Detailed professional background, education, and soft skills.
 */
export const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative bg-transparent">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Profile Introduction Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-orange-500/20 p-2 relative">
              <div className="w-full h-full rounded-full border-4 border-orange-500 overflow-hidden relative group">
                <img 
                  src="/assets/me22.jpeg" 
                  alt="Budde Vinay" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-orange-600 p-2 rounded-full border-2 border-white/10 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Heading Area */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                Full Stack <span className="text-orange-500">Developer</span>
              </h2>
              <p className="text-orange-500 font-bold text-xl md:text-2xl italic tracking-tight">
                Solving problems with code & coffee
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-zinc-400 font-semibold text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight"
            >
              Dedicated developer with a strong foundation in software engineering principles. Based in India, focused on building scalable web applications and intuitive user experiences.
            </motion.p>

            {/* Profile Metadata (Location & Quick Socials) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <div className="flex items-center gap-2 text-zinc-500 font-bold">
                <MapPin size={18} className="text-orange-500" />
                <span className="tracking-widest uppercase text-xs">Punjab, India</span>
              </div>
              
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/Vinay-Budde" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} /> 
                </a>
                <a 
                  href="https://linkedin.com/in/vinay-budde-bb8a0628a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-500 hover:text-white transition-colors"
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
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Users size={24} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Professional Summary</h3>
              </div>
              <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[3rem] shadow-2xl">
                <p className="text-zinc-400 font-semibold leading-relaxed tracking-tight text-lg">
                  As a software engineer, I am committed to continuous learning and excellence in code quality. My approach combines technical rigor with a deep understanding of user requirements, ensuring that every line of code contributes to a seamless digital experience. I specialize in modern JavaScript frameworks and robust backend architectures.
                </p>
              </div>
            </section>

            {/* Academic Journey Timeline */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Education</h3>
              </div>
              <div className="relative pl-8 border-l-2 border-orange-600/20 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-4 w-4 h-4 bg-orange-600 rounded-full border-4 border-[#0b0f17]" />
                  <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] shadow-2xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h4 className="text-xl font-black text-white tracking-tight">Bachelor of Technology (B.Tech)</h4>
                      <span className="px-3 py-1 bg-orange-600/10 text-orange-500 rounded-lg text-xs font-black tracking-widest">2023 - present</span>
                    </div>
                    <p className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.2em]">Lovely Professional University</p>
                    <p className="text-zinc-500 text-sm font-semibold leading-relaxed tracking-tight">
                      Specialized in Computer Science and Engineering. Developed a strong grasp of data structures, algorithms, and full-stack development. Active member of the university's technical society and lead developer for various campus-wide software initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Core Strengths & Call to Action */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Interpersonal Strength List */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 10 }}
                    className="p-5 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-6 group hover:border-orange-500/20 transition-all"
                  >
                    <div className="p-3 bg-orange-600/10 rounded-xl text-orange-500 group-hover:scale-110 transition-transform">
                      <skill.icon size={20} />
                    </div>
                    <span className="text-white font-bold tracking-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Primary Technical Focus */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Core Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {coreStack.map((tech) => (
                  <div key={tech} className="px-5 py-2.5 bg-orange-600/5 border border-orange-500/10 rounded-xl text-[10px] font-black text-orange-500 tracking-[0.2em]">
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </section>
  );
};
