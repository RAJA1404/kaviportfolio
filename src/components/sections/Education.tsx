"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUpVariant } from "@/components/ui/section";
import { GraduationCap, Award, ExternalLink, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering (IoT)",
    institution: "Nandha Engineering College",
    location: "Erode, Tamil Nadu",
    period: "2020 – 2024",
    score: "CGPA: 8.5",
    type: "Degree",
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Computer Science",
    institution: "Government Higher Secondary School",
    location: "Tamil Nadu",
    period: "2018 – 2020",
    score: "85%",
    type: "HSC",
  },
];

const certifications = [
  {
    name: "HTML & CSS",
    issuer: "LetsUpgrade",
    year: "2023",
    color: "text-blue-600 bg-blue-500/10 border-blue-200 dark:border-blue-900",
  },
  {
    name: "Java Basic",
    issuer: "HackerRank",
    year: "2022",
    color: "text-emerald-600 bg-emerald-500/10 border-emerald-200 dark:border-emerald-900",
  },
  {
    name: "Introduction to Figma",
    issuer: "Simplilearn",
    year: "2023",
    color: "text-rose-600 bg-rose-500/10 border-rose-200 dark:border-rose-900",
  },
];

export default function Education() {
  return (
    <Section id="education" className="bg-secondary/40">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
        {/* ── Education Timeline ── */}
        <div>
          <SectionHeader label="Education" title="Academic background." />

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  {...fadeUpVariant(i * 0.12)}
                  className="relative pl-14 group"
                >
                  {/* Dot */}
                  <div className="absolute left-[13px] top-5 w-5 h-5 rounded-full border-4 border-primary bg-background shadow-sm group-hover:scale-110 transition-transform" />

                  <div className="card-premium p-6 group-hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                          <GraduationCap size={10} />
                          {edu.type}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-foreground">{edu.degree}</h3>
                        <p className="text-sm font-semibold text-primary mt-0.5">{edu.field}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-3 border-t border-border">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {edu.institution}, {edu.location}
                      </span>
                      <span className="font-semibold text-foreground">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Certifications ── */}
        <div>
          <SectionHeader label="Certifications" title="Credentials." />

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                {...fadeUpVariant(i * 0.1)}
                className="card-premium p-5 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${cert.color}`}>
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                  <button
                    className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all opacity-0 group-hover:opacity-100"
                    title="View credential"
                  >
                    <ExternalLink size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
