"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Trios Technologies",
    role: "Full Stack Development Intern",
    period: "2023 – Present",
    type: "Internship",
    location: "Tamil Nadu, India",
    responsibilities: [
      "Developed responsive frontend interfaces using React.js and Tailwind CSS for production-grade applications.",
      "Built RESTful API endpoints with Node.js and Express.js, handling data persistence and business logic.",
      "Collaborated in Agile sprints — code reviews, daily stand-ups, and sprint planning sessions.",
      "Shipped real-time features to production, gaining hands-on full deployment lifecycle experience.",
      "Improved cross-browser compatibility and accessibility standards across existing codebases.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Git", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-secondary/40">
      <SectionHeader
        label="Experience"
        title="Where I've worked."
        description="Hands-on industry experience building and shipping real-world production applications."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-[13px] md:left-[23px] top-[22px] w-5 h-5 rounded-full border-4 border-primary bg-background shadow-sm" />

              <div className="card-premium p-7 md:p-10 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6 pb-6 border-b border-border">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                      <Briefcase size={10} />
                      {exp.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary text-xs font-semibold text-muted-foreground">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="text-xs text-muted-foreground px-1">{exp.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {exp.responsibilities.map((r, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * j, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{r}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full border border-primary/20 bg-primary/6 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
