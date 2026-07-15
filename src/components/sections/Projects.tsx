"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUpVariant } from "@/components/ui/section";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "JJ Catering Services",
    category: "Web Application",
    year: "2024",
    description:
      "A full-featured catering management platform built for JJ Catering Services. Enables clients to browse dynamic menus, submit booking requests, and track orders — with an admin dashboard for order management.",
    features: [
      "Fully responsive across all device breakpoints",
      "Dynamic menu browsing with real-time filtering",
      "Booking request system with confirmation flow",
      "Admin dashboard for order tracking and management",
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Alpha-01-design",
    live: "#",
    accent: "from-violet-500/5 to-indigo-500/5",
    accentBorder: "border-violet-500/10",
  },
  {
    index: "02",
    title: "Developer Portfolio",
    category: "Personal Project",
    year: "2025",
    description:
      "A premium, recruiter-focused personal portfolio built with Next.js 16, TypeScript, and Framer Motion. Engineered for performance, accessibility, and a refined visual language inspired by Apple, Linear, and Vercel.",
    features: [
      "Next.js 16 App Router with TypeScript",
      "Dark/Light mode with smooth transitions",
      "Framer Motion scroll and entrance animations",
      "Optimized for Lighthouse score > 95",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    github: "https://github.com/Alpha-01-design",
    live: "#",
    accent: "from-indigo-500/5 to-blue-500/5",
    accentBorder: "border-indigo-500/10",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Selected work."
        description="A focused selection of projects reflecting my technical range and attention to detail."
      />

      <div className="space-y-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            {...fadeUpVariant(i * 0.1)}
            className="card-premium overflow-hidden group"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? "" : ""}`}>
              {/* ── Visual Panel ── */}
              <div
                className={`relative min-h-[260px] md:min-h-[340px] flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} border-b lg:border-b-0 ${i % 2 !== 0 ? "lg:border-l lg:order-2" : "lg:border-r"} ${project.accentBorder}`}
              >
                {/* Mock browser chrome */}
                <div className="w-[80%] max-w-sm mx-auto">
                  <div className="rounded-t-xl border border-border bg-card/80 backdrop-blur px-4 py-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-2 flex-1 h-4 bg-secondary rounded-full" />
                  </div>
                  <div className="rounded-b-xl border border-t-0 border-border bg-card/60 backdrop-blur p-5 space-y-2.5">
                    <div className="h-2.5 bg-border rounded-full w-4/5" />
                    <div className="h-2.5 bg-border rounded-full w-3/5" />
                    <div className="h-2.5 bg-border rounded-full w-2/3" />
                    <div className="h-10 bg-primary/10 rounded-xl mt-4 border border-primary/15" />
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div className="h-14 bg-secondary rounded-lg border border-border" />
                      <div className="h-14 bg-secondary rounded-lg border border-border" />
                    </div>
                  </div>
                </div>
                {/* Project number watermark */}
                <span className="absolute bottom-4 right-6 font-heading font-black text-7xl text-border/50 select-none leading-none">
                  {project.index}
                </span>
              </div>

              {/* ── Content Panel ── */}
              <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.category}</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                  {project.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors group/cta"
                  >
                    Live Demo
                    <ArrowUpRight size={15} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                  </a>
                  <div className="w-px h-4 bg-border" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={15} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
