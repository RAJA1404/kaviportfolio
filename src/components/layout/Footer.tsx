"use client";

import Link from "next/link";
import { Github, Linkedin, Code, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Alpha-01-design", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaviyarasu-s-7569912a2/", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/KAVIYARASU_S123/", icon: Code },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Banner */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Open to Work</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-3">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking frontend roles and open to exciting freelance projects. Let's build something great together.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-bold hover:opacity-80 transition-opacity group"
              >
                Get in touch
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading font-bold text-lg tracking-tight inline-block mb-3">
              Kaviyarasu<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
              Frontend Web Developer crafting precise, fast, and beautiful web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
            <div className="space-y-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Icon size={14} className="group-hover:text-primary transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Status</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-foreground">Available</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to full-time roles and freelance opportunities.
              </p>
              <a
                href="mailto:kaviyarasu@example.com"
                className="text-xs font-semibold text-primary hover:underline"
              >
                kaviyarasu@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kaviyarasu S. Designed & built with care.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
