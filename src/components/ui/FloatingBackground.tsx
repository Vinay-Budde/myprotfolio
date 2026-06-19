import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * StarField Component
 * Renders a multi-depth parallax star layer using canvas for peak performance.
 */
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Three depth layers: far, mid, near
    const layers = [
      { count: 180, radius: 0.4, speed: 0.015, opacity: 0.25, color: 'rgba(255,255,255,' },
      { count: 100, radius: 0.8, speed: 0.03,  opacity: 0.45, color: 'rgba(255,220,180,' },
      { count: 45,  radius: 1.4, speed: 0.06,  opacity: 0.7,  color: 'rgba(249,115,22,' },
    ];

    const stars = layers.flatMap((layer) =>
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: layer.radius * (0.7 + Math.random() * 0.6),
        speed: layer.speed * (0.8 + Math.random() * 0.4),
        opacity: layer.opacity * (0.5 + Math.random() * 0.5),
        color: layer.color,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.008 + Math.random() * 0.015,
      }))
    );

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const s of stars) {
        const twinkle = 0.6 + 0.4 * Math.sin(s.twinkleOffset + frame * s.twinkleSpeed);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${(s.opacity * twinkle).toFixed(2)})`;
        ctx.fill();

        // Slow upward drift
        s.y -= s.speed;
        if (s.y < -4) {
          s.y = canvas.height + 4;
          s.x = Math.random() * canvas.width;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

/**
 * PerspectiveGrid Component
 * A vanishing-point receding grid for a deep 3D feel.
 */
const PerspectiveGrid = () => (
  <div
    className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
    style={{ perspective: '600px', perspectiveOrigin: '50% 100%' }}
  >
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: '-50%',
        width: '200%',
        height: '70%',
        transform: 'rotateX(70deg)',
        transformOrigin: 'bottom center',
        backgroundImage: `
          linear-gradient(to right, rgba(249,115,22,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
      }}
    />
    {/* Horizon glow line */}
    <div
      style={{
        position: 'absolute',
        bottom: '30%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.2) 30%, rgba(249,115,22,0.35) 50%, rgba(249,115,22,0.2) 70%, transparent)',
        filter: 'blur(1px)',
      }}
    />
  </div>
);

/**
 * FloatingBackground Component
 * Creates an interactive, multi-layered animated background with 3D depth.
 * Features: Parallax starfield, vanishing grid, interactive spotlight, depth orbs.
 */
export const FloatingBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020408]">

      {/* Deep space starfield (canvas) */}
      <StarField />

      {/* Vanishing-point perspective floor grid */}
      <PerspectiveGrid />

      {/* Interactive dual-color spotlight */}
      <motion.div
        className="absolute inset-0 z-[5] opacity-70"
        style={{
          background: `radial-gradient(circle at ${springX}px ${springY}px, rgba(249,115,22,0.18) 0%, rgba(139,92,246,0.06) 35%, transparent 65%)`
        }}
      />

      {/* Animated depth orbs */}
      <div className="absolute inset-0 z-[3] overflow-hidden">
        {/* Primary orange orb — top right, depth-pulsing */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[15%] -right-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0.05) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Secondary violet orb — bottom left */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-[15%] -left-[10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Center deep pulse */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full rotate-12"
          style={{
            background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 z-[6] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,rgba(2,4,8,0.5)_100%)]" />

      {/* Film grain / noise texture */}
      <div
        className="absolute inset-0 z-[7] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
    </div>
  );
};
