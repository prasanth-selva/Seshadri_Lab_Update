"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scrollytelling Parallax & Fade Effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300"
    >

      <motion.div 
        style={{ y: yText, opacity: opacityHero, scale: scaleHero }}
        className="flex w-full flex-col lg:flex-row items-center justify-between pt-24 lg:pt-0 max-w-[1440px] mx-auto relative z-10"
      >
        {/* Left content - Text */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="w-full lg:w-1/2 px-8 md:px-12 lg:px-20 xl:px-24 relative z-20 flex flex-col justify-center text-left"
        >
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-display font-bold text-[var(--text-primary)] mb-2 tracking-tight transition-colors duration-300">
              Seshadri Lab
            </h1>
            <p className="text-[var(--accent-gold)] font-bold tracking-wide mb-6 uppercase" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', letterSpacing: '0.12em' }}>
              Lehigh University
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body max-w-lg mb-8"
          >
            Engineering clinical solutions in wearable bioelectronics, digital therapeutics, and continuous human performance monitoring.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#research" className="btn-primary">
              Explore Research
            </a>
            <a href="#publications" className="btn-outline">
              Publications
            </a>
          </motion.div>
        </motion.div>

        {/* Right content - Spline 3D Scene */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[800px] pointer-events-auto z-10 flex flex-col items-center justify-center">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-contain absolute right-[-10%] lg:right-[-20%] scale-150 lg:scale-[1.8] transform-origin-right"
          />
        </div>
      </motion.div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="var(--accent-gold)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
