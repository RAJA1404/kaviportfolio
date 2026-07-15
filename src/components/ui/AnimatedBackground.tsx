"use client";

import { useEffect, useMemo, useRef, useState, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

// ─── Reduced Motion Hook ─────────────────────────────────
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Layer 1: Aurora Gradient ────────────────────────────
const AuroraGradient = memo(function AuroraGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary aurora blob */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.15, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(79,70,229,0) 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary aurora blob */}
      <motion.div
        animate={{
          x: [0, -70, 50, -30, 0],
          y: [0, 50, -40, 60, 0],
          scale: [1, 0.92, 1.12, 0.97, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[15%] -right-[10%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(99,102,241,0) 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Tertiary accent blob */}
      <motion.div
        animate={{
          x: [0, 40, -60, 20, 0],
          y: [0, -30, 50, -40, 0],
          scale: [1, 1.1, 0.88, 1.05, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, rgba(139,92,246,0) 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
});

// ─── Layer 2: Animated Grid ──────────────────────────────
const AnimatedGrid = memo(function AnimatedGrid({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useSpring>;
}) {
  const gridOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.25, 0.15, 0.2]);

  return (
    <motion.div
      className="absolute inset-0 will-change-[opacity]"
      style={{
        opacity: gridOpacity,
        backgroundImage: `
          linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
});

// ─── Layer 3: Floating Blurred Orbs ──────────────────────
interface OrbConfig {
  id: number;
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
  delay: number;
}

const ORB_CONFIGS: OrbConfig[] = [
  { id: 1, size: 120, x: "10%", y: "15%", color: "rgba(79,70,229,0.06)", duration: 20, delay: 0 },
  { id: 2, size: 180, x: "75%", y: "25%", color: "rgba(99,102,241,0.04)", duration: 28, delay: 2 },
  { id: 3, size: 90, x: "55%", y: "60%", color: "rgba(139,92,246,0.05)", duration: 24, delay: 4 },
  { id: 4, size: 150, x: "20%", y: "70%", color: "rgba(79,70,229,0.04)", duration: 32, delay: 1 },
  { id: 5, size: 100, x: "85%", y: "80%", color: "rgba(99,102,241,0.05)", duration: 22, delay: 3 },
  { id: 6, size: 200, x: "40%", y: "40%", color: "rgba(139,92,246,0.03)", duration: 35, delay: 5 },
  { id: 7, size: 70, x: "65%", y: "10%", color: "rgba(79,70,229,0.05)", duration: 18, delay: 2 },
  { id: 8, size: 130, x: "30%", y: "90%", color: "rgba(99,102,241,0.04)", duration: 26, delay: 6 },
];

const Orb = memo(function Orb({ config }: { config: OrbConfig }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x: [0, 30, -20, 15, 0],
        y: [0, -25, 20, -15, 0],
        scale: [1, 1.2, 0.85, 1.1, 1],
        opacity: [0.6, 1, 0.7, 0.9, 0.6],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay,
      }}
      className="absolute rounded-full will-change-transform"
      style={{
        width: config.size,
        height: config.size,
        left: config.x,
        top: config.y,
        background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
    />
  );
});

const FloatingOrbs = memo(function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {ORB_CONFIGS.map((orb) => (
        <Orb key={orb.id} config={orb} />
      ))}
    </div>
  );
});

// ─── Layer 4: Tiny Floating Particles ────────────────────
interface ParticleConfig {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}

const PARTICLE_CONFIGS: ParticleConfig[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: 1.5 + Math.random() * 2,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 10,
}));

const Particle = memo(function Particle({ config }: { config: ParticleConfig }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay,
      }}
      className="absolute rounded-full bg-foreground/10 will-change-transform"
      style={{
        width: config.size,
        height: config.size,
        left: config.x,
        top: config.y,
      }}
    />
  );
});

const FloatingParticles = memo(function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {PARTICLE_CONFIGS.map((p) => (
        <Particle key={p.id} config={p} />
      ))}
    </div>
  );
});

// ─── Layer 5: Noise Texture ──────────────────────────────
const NoiseTexture = memo(function NoiseTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035] pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    />
  );
});

// ─── Layer 6: Mouse Interaction ──────────────────────────
function MouseParallax({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 0.5 });

  const translateX = useTransform(smoothX, [0, 1], [-15, 15]);
  const translateY = useTransform(smoothY, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{ x: translateX, y: translateY }}
    >
      {children}
    </motion.div>
  );
}

// ─── Layer 7: Section Transition Overlay ─────────────────
const ScrollOverlay = memo(function ScrollOverlay({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useSpring>;
}) {
  const brightness = useTransform(scrollProgress, [0, 0.3, 0.6, 1], [1, 0.97, 1.02, 0.98]);
  const blurAmount = useTransform(scrollProgress, [0, 0.5, 1], [0, 0.5, 0]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none will-change-[filter]"
      style={{
        filter: useTransform(
          [brightness, blurAmount],
          ([b, bl]) => `brightness(${b}) blur(${bl}px)`
        ),
      }}
    />
  );
});

// ─── Main Component ──────────────────────────────────────
function AnimatedBackgroundInner() {
  const prefersReduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  // For reduced-motion users, render a minimal static background
  if (prefersReduced) {
    return (
      <div className="fixed inset-0 -z-50 pointer-events-none bg-background">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <NoiseTexture />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
      {/* Layer 6 wraps Layer 1 + Layer 3 for parallax */}
      <MouseParallax>
        {/* Layer 1: Aurora Gradient */}
        <AuroraGradient />
        {/* Layer 3: Floating Blurred Orbs */}
        <FloatingOrbs />
      </MouseParallax>

      {/* Layer 2: Animated Grid (scroll-reactive) */}
      <AnimatedGrid scrollProgress={smoothScroll} />

      {/* Layer 4: Tiny Floating Particles (not parallax — independent) */}
      <FloatingParticles />

      {/* Layer 5: Noise Texture */}
      <NoiseTexture />

      {/* Layer 7: Section Transition Overlay */}
      <ScrollOverlay scrollProgress={smoothScroll} />
    </div>
  );
}

const AnimatedBackground = memo(AnimatedBackgroundInner);
export default AnimatedBackground;
