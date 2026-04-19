"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <Card className="w-full min-h-[100vh] bg-black/[0.96] relative overflow-hidden flex flex-col border-none rounded-none m-0 p-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(201, 168, 76, 0.4)" // Adjusted slightly for Gold theme
        />

        <div className="flex h-full flex-col lg:flex-row flex-1 pt-24 lg:pt-0">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 w-full lg:w-auto h-full text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-6"
            >
              Interactive 3D <br/>
              <span className="text-gold-gradient text-3xl md:text-4xl lg:text-5xl block mt-2">Seshadri Lab</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-neutral-300 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed"
            >
              Bring your UI to life with beautiful 3D scenes. Pioneering the Future of Wearable Bioelectronics &amp; Digital Health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2.5rem",
                justifyContent: "center",
              }}
              className="lg:justify-start"
            >
              <a href="#research" className="btn-primary">
                Explore Research
              </a>
              <a href="#publications" className="btn-outline">
                Publications
              </a>
            </motion.div>
          </div>

          {/* Right content - Spline 3D Scene */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-full w-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 20,
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} color="var(--accent-gold)" />
          </motion.div>
        </motion.div>
      </Card>
      
      <style jsx global>{`
        @keyframes spotlight {
          0% {
            opacity: 0;
            transform: translate(-72%, -62%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%,-40%) scale(1);
          }
        }
        .animate-spotlight {
          animation: spotlight 2s ease .75s 1 forwards;
        }
      `}</style>
    </section>
  );
}
