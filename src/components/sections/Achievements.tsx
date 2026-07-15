"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUpVariant } from "@/components/ui/section";
import { Presentation, Users, Film, MessageSquare, Brain, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Paper Presentations",
    description: "Presented technical research at national-level academic symposiums.",
    color: "text-amber-600 bg-amber-500/10 border-amber-200 dark:border-amber-900",
  },
  {
    icon: Users,
    title: "Technical Symposiums",
    description: "Organizer and active participant in college-level tech events.",
    color: "text-blue-600 bg-blue-500/10 border-blue-200 dark:border-blue-900",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Proficient in Premiere Pro, After Effects, and CapCut for content creation.",
    color: "text-rose-600 bg-rose-500/10 border-rose-200 dark:border-rose-900",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Strong verbal and written skills developed through presentations and team collaboration.",
    color: "text-emerald-600 bg-emerald-500/10 border-emerald-200 dark:border-emerald-900",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Consistent algorithmic thinking on LeetCode and academic coursework.",
    color: "text-violet-600 bg-violet-500/10 border-violet-200 dark:border-violet-900",
  },
  {
    icon: Presentation,
    title: "Technical Skills",
    description: "Debugging, accessibility auditing, and cross-browser compatibility testing.",
    color: "text-indigo-600 bg-indigo-500/10 border-indigo-200 dark:border-indigo-900",
  },
];

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        label="Beyond code"
        title="More than a developer."
        description="Skills and activities that shape how I think, create, and collaborate."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            {...fadeUpVariant(i * 0.06)}
            className="card-premium p-6 md:p-7 flex flex-col group"
          >
            <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
