"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUpVariant } from "@/components/ui/section";
import { ArrowUpRight, Code2, Globe, Layers, Shield } from "lucide-react";

const highlights = [
  { icon: Globe, label: "UI/UX Focused", desc: "Translating designs into pixel-perfect, accessible interfaces." },
  { icon: Code2, label: "React & Next.js", desc: "Component-driven apps with server and client rendering." },
  { icon: Layers, label: "REST APIs", desc: "Seamless async data integration across full-stack applications." },
  { icon: Shield, label: "SDLC & Agile", desc: "Structured delivery via sprints, reviews, and shipping milestones." },
];

export default function About() {
  return (
    <Section id="about" className="bg-secondary/40">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-24 items-center">
        {/* ── LEFT — Image block ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-2 border-border shadow-xl shadow-black/5 dark:shadow-black/30">
            <Image
              src="/profile.jpg"
              alt="Kaviyarasu S"
              fill
              priority
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* ── RIGHT — Content ── */}
        <div className="w-full">
          <SectionHeader
            label="About me"
            title={"I design interfaces\nthat just work."}
            description="Detail-obsessed frontend developer with a strong eye for design and a passion for writing clean, maintainable code."
          />

          <div className="space-y-5 mb-12 text-left">
            <motion.p {...fadeUpVariant(0.1)} className="text-muted-foreground leading-[1.8]">
              I'm a Frontend Web Developer currently interning at Trios Technologies, where I build full-stack features for real-time production applications. I specialize in translating complex UI/UX designs into pixel-perfect, performant code.
            </motion.p>
            <motion.p {...fadeUpVariant(0.2)} className="text-muted-foreground leading-[1.8]">
              My foundation is a B.E. in Computer Science & Engineering (IoT) from Nandha Engineering College. Beyond code, I bring strong communication, problem-solving abilities, and creative skills in video editing.
            </motion.p>
          </div>

          {/* 2×2 highlights bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                {...fadeUpVariant(0.08 * i)}
                className="card-premium p-5 group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <h.icon size={18} />
                </div>
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <p className="text-sm font-semibold text-foreground leading-snug">{h.label}</p>
                  <ArrowUpRight size={13} className="text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
