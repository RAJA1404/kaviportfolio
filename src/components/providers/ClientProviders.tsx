"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeProvider";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-heading font-bold text-3xl tracking-tight text-foreground mb-6">
                Kaviyarasu<span className="text-primary">.</span>
              </p>
              <div className="w-40 h-px bg-border overflow-hidden mx-auto rounded-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2 bg-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen"
          >
            {/* Scroll Progress */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[200]"
              style={{ scaleX }}
            />

            {/* Global Animated Background — all 7 layers */}
            <AnimatedBackground />

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
