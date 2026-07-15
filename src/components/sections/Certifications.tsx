"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "HTML & CSS",
    provider: "LetsUpgrade",
    date: "2023",
    link: "#", // Placeholder
  },
  {
    name: "Java Basic",
    provider: "HackerRank",
    date: "2022",
    link: "#", // Placeholder
  },
  {
    name: "Introduction to Figma",
    provider: "Simplilearn",
    date: "2023",
    link: "#", // Placeholder
  }
];

export default function Certifications() {
  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      subtitle="Continuous learning and professional development."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full glass hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border-border/50">
              <CardContent className="p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300">
                  <Award size={80} className="text-primary" />
                </div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {cert.provider}
                  </p>
                </div>
                
                <div className="relative z-10 mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors flex items-center space-x-1 text-sm font-medium">
                    <span>Credential</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
