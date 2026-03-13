import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Preloader Component
 * Provides a high-fidelity entry animation for the website.
 * Sets the tone for the "Engineering Excellence" theme.
 */
export const Preloader = () => {
  // --- Animation State ---
  const [loading, setLoading] = useState(true);

  /**
   * Automatic entry sequence.
   * Clears the preloader after a fixed duration to ensure consistent user experience.
   */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center p-4"
        >
          {/* Main Visual container */}
          <div className="relative">
             {/* Atmospheric background glow */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.5, 1],
                 opacity: [0.3, 0.6, 0.3]
               }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full"
             />

             {/* Branding & Logo Area */}
             <div className="relative flex flex-col items-center">
                {/* Reveal line animation */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"
                />

                <div className="overflow-hidden mb-4">
                  {/* Sliding identity text */}
                  <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-white"
                  >
                    VINAY <span className="text-orange-500">BUDDE</span>
                  </motion.h1>
                </div>

                {/* Sub-branding tagline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600"
                >
                  ENGINEERING EXCELLENCE
                </motion.div>
             </div>
          </div>

          {/* Master loading progress bar (Bottom) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "linear" }}
            className="fixed bottom-0 left-0 right-0 h-1 bg-orange-600 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
