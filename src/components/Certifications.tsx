import { motion } from 'framer-motion';
import { 
  Award, 
  Cloud, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

const certData = [
  {
    title: 'ChatGPT-4 Prompt Engineering',
    org: 'OPENAI CERTIFIED SPECIALIST',
    date: 'Issued Dec 2023',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', // Fallback to icon if needed
    icon: Sparkles,
    color: 'bg-[#f8ede5]',
    accent: 'text-[#d48d61]',
    link: '#'
  },
  {
    title: 'Cloud Computing Architect',
    org: 'AWS CERTIFIED PROFESSIONAL',
    date: 'Issued Oct 2023',
    icon: Cloud,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: 'bg-[#e7f0f7]',
    accent: 'text-[#6495bc]',
    link: '#'
  },
  {
    title: 'Master Generative AI',
    org: 'DEEPLEARNING.AI',
    date: 'Issued Feb 2024',
    icon: Cpu,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', // Using google as proxy for AI
    color: 'bg-[#e9f5f2]',
    accent: 'text-[#6ba192]',
    link: '#'
  }
];

/**
 * Certifications Section Component
 * Displays professional certifications and academic achievements.
 */
export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-4 relative overflow-hidden bg-black/20">
      
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
                  {/* Floating Org Logo */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-zinc-900 shadow-lg rounded-xl flex items-center justify-center p-2 border border-white/5">
                    <img 
                      src={cert.logo} 
                      alt={cert.org} 
                      className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                    />
                  </div>
                  {/* Background Symbol */}
                  <cert.icon size={80} className={cn("opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700", cert.accent)} />
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
