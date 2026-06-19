import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * BackgroundGrid Component
 * Perspective-aware grid that recedes into the distance for a 3D depth illusion.
 */
export const BackgroundGrid = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
    {/* Flat subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 90%)',
      }}
    />
    {/* Corner accent glows */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-500/5 blur-[60px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-violet-500/5 blur-[60px] pointer-events-none" />
  </div>
));

BackgroundGrid.displayName = 'BackgroundGrid';

/**
 * FloatingParticles Component
 * Depth-aware particle system: distant = small + blurry, near = large + sharp.
 */
export const FloatingParticles = memo(({ count = 18 }: { count?: number }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: count }).map((_, i) => {
      const depth = Math.random(); // 0 = far, 1 = near
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        // Near particles are larger and sharper; far ones are tiny and blurry
        size: 1.5 + depth * 5,
        blur: (1 - depth) * 3,
        opacity: 0.08 + depth * 0.35,
        duration: 8 + (1 - depth) * 16,  // far particles drift slower
        delay: Math.random() * 8,
        // Color: near = orange, far = cool blue-white
        color: depth > 0.6
          ? `rgba(249, 115, 22, ${0.4 + depth * 0.4})`
          : depth > 0.3
          ? `rgba(251, 191, 36, ${0.2 + depth * 0.3})`
          : `rgba(200, 220, 255, ${0.15 + depth * 0.15})`,
        driftX: (Math.random() - 0.5) * 40,
      };
    });
    setParticles(p);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full transform-gpu"
          animate={{
            opacity: [0, p.opacity, 0],
            y: [-10, -(80 + p.size * 20), -10],
            x: [0, p.driftX, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            filter: `blur(${p.blur}px)`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = 'FloatingParticles';

/**
 * SectionDivider — an animated glowing horizontal rule between sections
 */
export const SectionDivider = memo(() => (
  <div className="relative w-full h-px my-2 overflow-visible pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500"
      style={{ boxShadow: '0 0 12px rgba(249,115,22,0.8), 0 0 30px rgba(249,115,22,0.4)' }}
    />
  </div>
));

SectionDivider.displayName = 'SectionDivider';
