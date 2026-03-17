import { motion } from 'framer-motion';
import {
  MapPin,
  Brain,
  Users,
  MessageSquare,
  Zap,
  GraduationCap,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Star
} from 'lucide-react';

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

/**
 * About Section Component
 * Detailed professional background, education, and soft skills.
 */
export const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Profile Introduction Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar Area */}
          <motion.div
            {...fadeUp}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-orange-500/20 p-2 relative shadow-[0_0_50px_rgba(234,88,12,0.1)]">
              <div className="w-full h-full rounded-full border-4 border-orange-500 overflow-hidden relative group">
                <img
                  src="/assets/me22.jpeg"
                  alt="Budde Vinay"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-4 right-4 bg-orange-600 p-2 rounded-full border-2 border-white/10 shadow-lg z-10">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Heading Area */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div {...fadeUp} className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                Full Stack <span className="text-orange-500">Developer</span>
              </h2>
              <p className="text-orange-500 font-bold text-xl md:text-2xl italic tracking-tight">
                Architecting digital solutions with impact.
              </p>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 font-semibold text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight"
            >
              Full-stack developer with hands-on experience building <span className="text-white">scalable MERN applications</span> and solving real-world problems through efficient backend design and intuitive UI. Currently pursuing B.Tech in CSE, with strong foundations in <span className="text-orange-500">data structures, algorithms, and system design.</span>
            </motion.p>

            {/* Profile Metadata (Location & Quick Socials) */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <div className="flex items-center gap-2 text-zinc-500 font-bold">
                <MapPin size={18} className="text-orange-500" />
                <span className="tracking-widest uppercase text-[10px] md:text-xs">Punjab, India | <span className="text-orange-500/80">Open to Remote / Internships</span></span>
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
            <motion.section {...fadeUp} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500 shadow-lg shadow-orange-500/5">
                  <Terminal size={24} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Professional Journey</h3>
              </div>
              <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl group-hover:bg-orange-600/10 transition-all" />
                <p className="text-zinc-400 font-semibold leading-relaxed tracking-tight text-lg relative z-10">
                  Driven by a passion for creating impactful software, I specialize in the <span className="text-white">MERN stack</span> and modern system architectures. My approach integrates <span className="text-orange-500">measurable impact</span>—from building civic reporting systems used by 500+ users to solving complex algorithmic challenges. I aim to bridge the gap between robust backend performance and premium user experience.
                </p>
              </div>
            </motion.section>

            {/* Academic Journey Timeline */}
            <motion.section {...fadeUp} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500 shadow-lg shadow-orange-500/5">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Education</h3>
              </div>
              <div className="relative pl-8 border-l-2 border-orange-600/20 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-6 w-5 h-5 bg-orange-600 rounded-full border-4 border-[#0b0f17] shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
                  <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] shadow-2xl space-y-4 hover:border-orange-500/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h4 className="text-xl font-black text-white tracking-tight">Bachelor of Technology (B.Tech)</h4>
                      <span className="px-3 py-1 bg-orange-600/10 text-orange-500 rounded-lg text-[10px] font-black tracking-widest uppercase">2023 - 2027</span>
                    </div>
                    <p className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.2em]">Lovely Professional University</p>
                    <div className="flex items-center gap-4 py-2 border-y border-white/5">
                      <div className="flex items-center gap-2">
                        <Star size={12} className="text-orange-500" />
                        <span className="text-xs font-black text-white">GPA: 7.15/10.0</span>
                      </div>
                      <div className="w-px h-3 bg-white/10" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Dean's List / Top 10%</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-black text-zinc-300 uppercase tracking-widest">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Data Structures", "Algorithms", "Operating Systems", "DBMS", "System Design"].map(course => (
                          <span key={course} className="text-[9px] px-2 py-1 bg-zinc-900 border border-white/5 rounded-md text-zinc-500">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>

          {/* Core Strengths & Call to Action */}
          <div className="lg:col-span-5 space-y-12">

            {/* Interpersonal Strength List */}
            <motion.section {...fadeUp} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="p-5 bg-zinc-900/40 border border-white/5 rounded-2xl space-y-3 group hover:border-orange-500/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-600/10 rounded-xl text-orange-500 group-hover:scale-110 transition-transform">
                        <skill.icon size={20} />
                      </div>
                      <span className="text-white font-bold tracking-tight text-sm uppercase tracking-widest">{skill.name}</span>
                    </div>
                    <p className="text-zinc-500 text-[11px] font-semibold leading-tight pl-14">
                      {skill.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Structured Tech Stack Preview */}
            <motion.section {...fadeUp} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Structured Stack</h3>
              </div>
              <div className="space-y-4">
                {coreStack.map((category) => (
                  <div key={category.group} className="space-y-2">
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">{category.group}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map(item => (
                        <div key={item} className="px-3 py-1.5 bg-zinc-900/50 border border-white/5 rounded-lg text-[9px] font-black text-orange-500 uppercase tracking-widest hover:border-orange-500/20 transition-all cursor-default">
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
      </div>
    </section>
  );
};

