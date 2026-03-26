import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  MapPin, 
  Award
} from 'lucide-react';
import { BackgroundGrid, FloatingParticles } from './ui/OptimizedDecorations';

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "Aug’ 23 – Present",
    metrics: "CGPA: 7.15",
    icon: GraduationCap,
    accent: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    institution: "Narayana Jr College",
    location: "Hyderabad, Telangana",
    degree: "Intermediate",
    period: "Jun’ 22 – May’ 23",
    metrics: "Percentage: 97.5%",
    icon: School,
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    institution: "CPRM High School",
    location: "Nizamabad, Telangana",
    degree: "Matriculation",
    period: "Mar’ 20 – May’ 21",
    metrics: "Percentage: 100%",
    icon: BookOpen,
    accent: "text-orange-600",
    bg: "bg-orange-600/10",
    border: "border-orange-600/20"
  }
];

export const Education = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1000], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [0, 1000], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section 
      id="education" 
      onMouseMove={handleMouseMove}
      className="py-32 px-4 relative overflow-hidden bg-zinc-950/30"
    >
      <BackgroundGrid />
      <FloatingParticles />

      {/* Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]"
          >
            <GraduationCap size={12} />
            Academic Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Education <span className="text-orange-500 font-outline-2">& Background</span>
          </motion.h2>
        </div>

        {/* Education Timeline/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-orange-500/40"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
                <edu.icon size={200} />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Header: Icon & Period */}
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${edu.bg} ${edu.accent}`}>
                    <edu.icon size={28} />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {edu.period}
                  </span>
                </div>

                {/* Main Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white leading-tight group-hover:text-orange-500 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-400 font-bold text-sm flex items-center gap-2 uppercase tracking-wide">
                      <GraduationCap size={14} className="text-orange-500/60" />
                      {edu.degree}
                    </p>
                    {'field' in edu && (
                      <p className="text-zinc-500 font-semibold text-xs ml-6">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-zinc-500 font-semibold text-xs flex items-center gap-2 ml-6">
                      <MapPin size={12} />
                      {edu.location}
                    </p>
                  </div>
                </div>

                {/* Score/Metric Badge */}
                <div className={`mt-auto pt-8 border-t border-white/5 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${edu.bg} ${edu.accent}`}>
                      <Award size={16} />
                    </div>
                    <span className="text-lg font-black text-white tracking-tighter">
                      {edu.metrics.split(': ')[1]}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {edu.metrics.split(': ')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
