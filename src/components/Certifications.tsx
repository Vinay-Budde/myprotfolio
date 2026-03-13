import { motion } from 'framer-motion';
import {
  Award,
  Cloud,
  Cpu,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2
} from 'lucide-react';

const certData = [
  {
    title: 'ChatGPT-4 Prompt Engineering',
    org: 'OPENAI CERTIFIED SPECIALIST',
    date: 'Issued Aug 25',
    logo: '/chatgpt-4.png', // Fall to icon if needed
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
    logo: '/cloud.png',
    color: 'bg-[#e7f0f7]',
    accent: 'text-[#6495bc]',
    link: 'https://drive.google.com/file/d/1qcAj67Yt8UNUpNnTfdsgSYqnIHwoiP3q/view?usp=sharing'
  },
  {
    title: 'Master Generative AI',
    org: 'DEEPLEARNING.AI',
    date: 'Issued Feb 2024',
    icon: Cpu,
    logo: '/masgenai.png', // Using google as proxy for AI
    color: 'bg-[#e9f5f2]',
    accent: 'text-[#6ba192]',
    link: 'https://drive.google.com/file/d/1qmidK2NCQGQwtYgPMDR9zfm97O5CC1s-/view?usp=sharing'
  },
  {
    title: 'Java Bootcamp(LPU)',
    org: 'TRAINING',
    date: 'Jun’ 25 – Jul’ 25',
    icon: Code2,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'bg-[#f4f2ee]',
    accent: 'text-[#e76f51]',
    description: 'Strengthened proficiency in Core Java, OOP principles, and advanced problem-solving using DSA (Backtracking, Recursion, Two-pointers). Focused on code optimization and space/time complexity analysis.',
    link: '#'
  }
];

/**
 * Certifications Section Component
 * Displays professional certifications and academic achievements.
 */
export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-4 relative overflow-hidden bg-transparent">

      {/* Background Aesthetic Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-amber-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">

        {/* Header Messaging Section */}
        <div className="space-y-6 max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]"
          >
            <CheckCircle2 size={12} />
            Professional Validation
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Certifications & <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-zinc-500 font-semibold text-sm md:text-base leading-relaxed tracking-tight max-w-xl">
            Showcasing a commitment to continuous learning and mastery of emerging technologies in Artificial Intelligence and Cloud Architecture.
          </p>
        </div>

        {/* Content Body Grid */}
        <div className="space-y-12">
          {/* Section Marker */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Major Certifications</h3>
          </div>

          {/* Scalable Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certData.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-orange-500/20 transition-all duration-500 flex flex-col"
              >
                {/* Brand Visual Layer */}
                <div className={cn("h-64 relative flex items-center justify-center p-12 transition-colors duration-500", cert.color.replace('bg-', 'bg-opacity-10 bg-'))}>
                  {/* Primary Vendor Logo */}
                  <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.org} 
                      className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    />
                  </div>
                </div>
 
                {/* Information Strategy Layer */}
                <div className="p-10 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none group-hover:text-orange-500 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.2em]">
                      {cert.org}
                    </p>
                  </div>

                  {/* Add Description if exists */}
                  {'description' in cert && (
                    <p className="text-zinc-500 text-xs font-semibold leading-relaxed tracking-tight line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Verification & Links Area */}
                  <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Award size={12} className="text-orange-500" />
                      {cert.date}
                    </span>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={cert.link}
                      className="p-3 text-zinc-500 hover:text-orange-500 transition-colors"
                      aria-label="Verify Certification"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
