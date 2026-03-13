import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Github, Mail, Send, Linkedin } from 'lucide-react';

export const Achievements = () => {
  const items = [
    {
      title: 'LeetCode Milestone',
      desc: 'Solved 100+ problems improving algorithmic thinking and problem solving.',
      icon: Award,
      date: '2024 - Present'
    },
    {
      title: 'ChatGPT Prompt Engineering',
      desc: 'Certification from Infosys Springboard.',
      icon: Briefcase,
      date: '2024'
    },
    {
      title: 'Cloud Computing',
      desc: 'NPTEL Certification.',
      icon: GraduationCap,
      date: '2023'
    },
    {
      title: 'Generative AI Tools',
      desc: 'Certification from Infosys Springboard.',
      icon: Briefcase,
      date: '2024'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-blue-500/50">
              <item.icon size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <time className="text-xs font-bold text-blue-500 uppercase">{item.date}</time>
              </div>
              <div className="text-xl font-bold mb-1">{item.title}</div>
              <div className="text-zinc-400 text-sm">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export const GitHubStats = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
       <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="glass p-6 rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[200px]">
              <img src="https://github-readme-stats.vercel.app/api?username=Vinay-Budde&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=60a5fa&text_color=94a3b8" alt="GitHub Stats" className="w-full max-w-md" />
           </div>
           <div className="glass p-6 rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[200px]">
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vinay-Budde&layout=compact&theme=transparent&hide_border=true&title_color=60a5fa&text_color=94a3b8" alt="Top Languages" className="w-full max-w-md" />
           </div>
           <div className="md:col-span-2 glass p-6 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=Vinay-Budde&theme=transparent&hide_border=true&stroke=60a5fa&ring=60a5fa&fire=60a5fa&currStreakNum=60a5fa&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8" alt="GitHub Streak" className="w-full" />
           </div>
        </div>
      </div>
    </motion.section>
  );
};

export const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-zinc-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           <div>
              <h3 className="text-2xl font-bold mb-6">Let's collaborate!</h3>
              <p className="text-zinc-400 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                 <a href="mailto:vinaybudde263@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors">
                    <div className="p-3 glass rounded-lg"><Mail size={20} /></div>
                    vinaybudde263@gmail.com
                 </a>
                 <a href="https://linkedin.com/in/vinay-budde-bb8a0628a/" target="_blank" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors">
                    <div className="p-3 glass rounded-lg"><Linkedin size={20} /></div>
                    LinkedIn Profile
                 </a>
                 <a href="https://github.com/Vinay-Budde" target="_blank" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors">
                    <div className="p-3 glass rounded-lg"><Github size={20} /></div>
                    GitHub Profile
                 </a>
              </div>
           </div>

           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-500">Name</label>
                    <input type="text" className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-500">Email</label>
                    <input type="email" className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="email@example.com" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-zinc-500">Subject</label>
                 <input type="text" className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Inquiry" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-zinc-500">Message</label>
                 <textarea className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-blue-500 transition-colors min-h-[150px]" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                 Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
        </div>
      </div>
    </motion.section>
  );
};
