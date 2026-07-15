"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, ArrowRight, Download, MapPin, Star, Zap } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

const socials = [
  { href: "https://github.com/Alpha-01-design", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/kaviyarasu-s-7569912a2/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/KAVIYARASU_S123/", icon: Code, label: "LeetCode" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Soft edge fades */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="order-2 lg:order-1 space-y-7">
            {/* Status badge */}
            <motion.div {...fadeUp(0.05)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                {...fadeUp(0.15)}
                className="font-heading font-bold tracking-tight text-foreground"
                style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
              >
                Kaviyarasu S
              </motion.h1>
              <motion.p
                {...fadeUp(0.25)}
                className="text-xl md:text-2xl font-medium tracking-tight"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Frontend Web Developer
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.75]"
            >
              I craft fast, accessible, and beautiful web applications — from clean component architecture to pixel-perfect UIs that recruiters and users both love.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-bold shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:opacity-80 transition-opacity"
              >
                View my work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background text-foreground text-sm font-semibold hover:bg-secondary transition-colors shadow-sm"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.55)} className="flex items-center gap-3 pt-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <Icon size={17} />
                </a>
              ))}
              <div className="w-px h-5 bg-border mx-1" />
              <span className="text-xs text-muted-foreground">Find me online</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Layered Photo Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] xl:w-[420px] xl:h-[420px]">
              {/* Background accent circle */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full bg-primary/10 border border-primary/15" />
              <div className="absolute -bottom-1 -right-1 w-full h-full rounded-full bg-primary/5 border border-primary/10" />

              {/* Main photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border shadow-2xl shadow-black/10 dark:shadow-black/40 bg-muted">
                <Image
                  src="/profile.jpg"
                  alt="Kaviyarasu S"
                  fill
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-border to-transparent"
        />
      </motion.div>
    </section>
  );
}
