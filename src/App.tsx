import { lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { FloatingBackground } from './components/ui/FloatingBackground';
import { Github, Linkedin } from 'lucide-react';

// Lazy load sections below the fold for performance
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const TechStack = lazy(() => import('./components/TechStack').then(m => ({ default: m.TechStack })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));


/**
 * Main Application Component
 * Handles global layout, navigation, and page sections.
 */
function App() {
  // --- Hooks & State ---
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress spring configuration
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Visual entry effect */}
      <Preloader />
      
      {/* Background Ambience Layer */}
      <FloatingBackground />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-transparent overflow-x-hidden selection:bg-orange-500/30"
      >
        {/* Global Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-600 origin-left z-[100]"
          style={{ scaleX }}
        />
        
        {/* Navigation Layer */}
        <Navbar />
        
        {/* Page Content */}
        <main>
          <Hero />
          <Suspense fallback={null}>
            <About />
            <TechStack />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </Suspense>
        </main>

        
        {/* Global Footer */}
        <footer className="py-20 text-center border-t border-white/5 bg-black/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Brand Branding */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="text-xl font-black tracking-tighter text-white uppercase">
                  VINAY <span className="text-orange-500">BUDDE</span>
                </div>
                
                {/* Social Links Archive */}
                <div className="flex items-center gap-4 mt-2">
                  <a 
                    href="https://github.com/Vinay-Budde" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/vinay-budde-bb8a0628a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              {/* Copyright Info */}
              <div className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
                © {new Date().getFullYear()} Elite Engineering. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default App;
