"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("relative z-10 py-28 md:py-36", className)} {...props}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-16 md:mb-20", align === "center" && "text-center")}
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{label}</p>
      )}
      <h2
        className="font-heading font-bold tracking-tight text-foreground"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function fadeUpVariant(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}
