"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUpVariant } from "@/components/ui/section";
import { Github, Linkedin, Code, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email", value: "kaviyarasu@example.com", href: "mailto:kaviyarasu@example.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: null },
  { icon: Github, label: "GitHub", value: "Alpha-01-design", href: "https://github.com/Alpha-01-design" },
  { icon: Linkedin, label: "LinkedIn", value: "kaviyarasu-s", href: "https://www.linkedin.com/in/kaviyarasu-s-7569912a2/" },
  { icon: Code, label: "LeetCode", value: "KAVIYARASU_S123", href: "https://leetcode.com/u/KAVIYARASU_S123/" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Section id="contact" className="bg-secondary/40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
        {/* ── Left ── */}
        <div className="space-y-8">
          <SectionHeader
            label="Contact"
            title={"Let's build\nsomething great."}
            description="I'm open to full-time roles, freelance projects, and collaborations. My inbox is always open — say hello."
          />

          <div className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-card">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border shrink-0">
              <Image
                src="/profile.jpg"
                alt="Kaviyarasu S"
                width={500}
                height={500}
                priority
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Direct Contact</p>
              <h4 className="font-heading font-bold text-base text-foreground">Kaviyarasu S</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Let's discuss how my frontend experience can add value to your team.</p>
            </div>
          </div>

          <div className="space-y-3">
            {contactDetails.map((item, i) => (
              <motion.div key={item.label} {...fadeUpVariant(i * 0.06)}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-background transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right — Form ── */}
        <motion.div
          {...fadeUpVariant(0.2)}
          className="card-premium p-8 md:p-10 self-start"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-16 gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground text-sm mt-1">I'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send a message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry / Job opportunity"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-foreground text-background text-sm font-bold hover:opacity-80 transition-opacity shadow-sm"
              >
                Send message
                <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
