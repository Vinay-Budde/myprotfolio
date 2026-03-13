import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Monitor, Github, Linkedin } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

/**
 * Global Navigation Component
 * Handles sticky behavior on scroll and main menu links.
 */
export const Navbar = () => {
  // --- State & Interaction ---
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to toggle sticky background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation configuration
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 px-6",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Branding / Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
           <div className="p-2 bg-orange-600 rounded-lg shadow-lg shadow-orange-600/20 transition-transform group-hover:rotate-12">
              <Monitor size={20} className="text-white" />
           </div>
           <span className="text-xl font-black tracking-tighter text-white uppercase">
              Budde <span className="text-orange-500">Vinay</span>
           </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Header Actions & Socials */}
        <div className="flex items-center gap-6">
           {/* Direct Social Links */}
           <div className="hidden lg:flex items-center gap-4 border-r border-white/5 pr-6 mr-2">
              <Magnetic>
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
              <Magnetic>
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
           <a 
             href="/vinayresume.pdf" 
             download="Vinay_Budde_Resume.pdf"
             className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-orange-500/80 hover:text-orange-500 transition-colors"
           >
              Resume
           </a>
           <a 
             href="#contact" 
             className="px-8 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-orange-600/20 transition-all hover:-translate-y-0.5"
           >
              Hire Me
           </a>
        </div>
      </div>
    </nav>
  );
};
