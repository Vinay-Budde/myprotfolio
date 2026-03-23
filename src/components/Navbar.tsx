import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Monitor, Github, Linkedin, Sparkles } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { motion } from 'framer-motion';

/**
 * Global Navigation Component
 * Handles sticky behavior on scroll and main menu links.
 */
export const Navbar = () => {
  // --- State & Interaction ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Monitor scroll position to toggle sticky background and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation configuration
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 px-6",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Branding / Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
           <div className="p-2 bg-orange-600 rounded-lg shadow-lg shadow-orange-600/20 transition-transform group-hover:rotate-12">
              <Monitor size={20} className="text-white" />
           </div>
           <span className="text-xl font-black tracking-tighter text-white uppercase">
              Budde <span className="text-orange-500">Vinay</span>
           </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className={cn(
                "text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group",
                activeSection === link.id ? "text-orange-500" : "text-zinc-400 hover:text-white"
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Header Actions & Socials */}
        <div className="flex items-center gap-8">
           {/* Direct Social Links */}
           <div className="hidden lg:flex items-center gap-4 border-r border-white/5 pr-6 mr-2">
              <Magnetic strength={0.2}>
                <a 
                  href="https://github.com/Vinay-Budde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a 
                  href="https://linkedin.com/in/vinay-budde-bb8a0628a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </Magnetic>
           </div>

           {/* Call to Actions */}
           <motion.a 
             href="/vinayresume.pdf" 
             download="Vinay_Budde_Resume.pdf"
             whileHover={{ scale: 1.05 }}
             className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-orange-500/80 hover:text-orange-500 transition-colors"
           >
              Resume
           </motion.a>
           <Magnetic strength={0.3}>
             <motion.a 
               href="#contact" 
               whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(234, 88, 12, 0.4)" }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-3 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-orange-600/20 transition-all flex items-center gap-2 group"
             >
                <Sparkles size={12} className="group-hover:rotate-12 transition-transform" />
                Hire Me
             </motion.a>
           </Magnetic>
        </div>
      </div>
    </nav>
  );
};

