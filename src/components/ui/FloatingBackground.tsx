import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * FloatingBackground Component
 * Creates an interactive, multi-layered animated background.
 * Features: Interactive spotlight, floating mesh gradients, and a subtle grid.
 */
export const FloatingBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for the spotlight effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* Interactive Spotlight Layer */}
      <motion.div 
        className="absolute inset-0 z-30 opacity-40 md:opacity-60"
        style={{
          background: `radial-gradient(circle at ${springX}px ${springY}px, rgba(249, 115, 22, 0.15), transparent 600px)`
        }}
      />

      {/* Static Atmospheric Overlay */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.4)_100%)]" />

      {/* Rotating Floating Gradients (Meshes) */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Top Right Orb */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full"
        />

        {/* Bottom Left Orb */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-amber-600/5 blur-[100px] rounded-full"
        />

        {/* Center Accent */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[150px] rounded-full rotate-45"
        />
      </div>

      {/* Grid Pattern Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}
      />

      {/* Noise Texture for depth */}
      <div className="absolute inset-0 z-40 opacity-[0.02] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};
