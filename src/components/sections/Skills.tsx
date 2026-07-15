"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

type Category = "all" | "languages" | "frontend" | "backend" | "design" | "tooling";

const skillData: { id: Category; label: string; skills: string[] }[] = [
  { id: "languages", label: "Languages",  skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
  { id: "frontend",  label: "Frontend",   skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"] },
  { id: "backend",   label: "Backend",    skills: ["Node.js", "Express.js", "REST APIs"] },
  { id: "design",    label: "Design",     skills: ["Figma", "Wireframing", "UI/UX", "Visual Design"] },
  { id: "tooling",   label: "Tooling",    skills: ["Git", "GitHub", "VS Code", "Accessibility", "Cross-Browser Testing", "Debugging"] },
];

const allSkills = skillData.flatMap((c) => c.skills);

const colorMap: Record<Category, string> = {
  all:       "bg-primary text-primary-foreground border-primary",
  languages: "bg-blue-500/10 text-blue-600 border-blue-200 dark:text-blue-400 dark:border-blue-900",
  frontend:  "bg-violet-500/10 text-violet-600 border-violet-200 dark:text-violet-400 dark:border-violet-900",
  backend:   "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400 dark:border-emerald-900",
  design:    "bg-rose-500/10 text-rose-600 border-rose-200 dark:text-rose-400 dark:border-rose-900",
  tooling:   "bg-amber-500/10 text-amber-600 border-amber-200 dark:text-amber-400 dark:border-amber-900",
};

const tabActive = (id: Category, active: Category) =>
  active === id
    ? "bg-foreground text-background shadow-sm"
    : "text-muted-foreground hover:text-foreground hover:bg-secondary";

export default function Skills() {
  const [active, setActive] = useState<Category>("all");

  const displayed =
    active === "all" ? allSkills : skillData.find((c) => c.id === active)?.skills ?? [];

  const chipColor =
    active === "all"
      ? "bg-secondary text-secondary-foreground border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30"
      : colorMap[active].replace("bg-", "hover:bg-").replace("text-", "hover:text-");

  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="Built for the modern web."
        description="A curated toolkit I use to craft performant, accessible, and beautiful digital products."
        align="center"
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {(["all", ...skillData.map((c) => c.id)] as Category[]).map((id) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${tabActive(id, active)}`}
          >
            {id}
          </button>
        ))}
      </div>

      {/* Animated Chip Cloud */}
      <motion.div
        layout
        className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto min-h-[120px]"
      >
        <AnimatePresence mode="popLayout">
          {displayed.map((skill) => (
            <motion.span
              key={skill}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ y: -3, scale: 1.05 }}
              className={`skill-chip cursor-default select-none`}
            >
              {skill}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bento stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
        {[
          { value: "1+", label: "Years of Experience" },
          { value: "5+", label: "Projects Built" },
          { value: "15+", label: "Technologies" },
          { value: "3", label: "Certifications" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-premium p-6 text-center"
          >
            <p className="font-heading font-bold text-3xl text-gradient mb-1">{s.value}</p>
            <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
