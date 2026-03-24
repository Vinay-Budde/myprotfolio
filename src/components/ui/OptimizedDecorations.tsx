import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * BackgroundGrid Component
 * Highly optimized, memoized background grid with radial mask.
 */
export const BackgroundGrid = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }}
    />
  </div>
));

BackgroundGrid.displayName = 'BackgroundGrid';

/**
 * FloatingParticles Component
 * Optimized particle system using memoization and transform-gpu.
 */
export const FloatingParticles = memo(({ count = 12 }: { count?: number }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-500/10 blur-[1px] transform-gpu"
          animate={{
            opacity: [0, 0.3, 0],
            y: [-20, -100, -20],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = 'FloatingParticles';
