"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationsSection from "@/components/PublicationsSection";
import { motion } from "framer-motion";
import { Activity, Globe, Cpu, Database } from "lucide-react";

// Passion Areas
const passionAreas = [
  {
    title: "Wearable Healthcare Technologies",
    description: "Developing devices for remote monitoring and personalized health management.",
    icon: Activity,
  },
  {
    title: "Lean Engineering for Global Health",
    description: "Designing cost-effective solutions for resource-limited settings.",
    icon: Globe,
  },
  {
    title: "Biomechanical Systems",
    description: "Investigating hardware-based medical solutions to address unmet clinical needs.",
    icon: Cpu,
  },
  {
    title: "Clinical Applications of Data Science",
    description: "Utilizing predictive modeling and machine learning to enhance diagnosis and treatment.",
    icon: Database,
  },
];

// Library of Innovation
const innovationLibrary = [
  {
    title: "Wearable Healthcare Technologies",
    description: "Our wearable technologies aim to revolutionize remote health monitoring and early diagnostics, ensuring personalized care for patients.",
  },
  {
    title: "Sports Analytics for Human Performance",
    description: "Using data analytics and biomechanics, we optimize athletic performance and recovery, benefiting athletes and coaches.",
  },
  {
    title: "Frugal Engineering for Global Health",
    description: "We design low-cost, high-impact solutions to address critical healthcare challenges in underserved regions.",
  },
  {
    title: "Pediatric & Adolescent Health Analytics",
    description: "Combining wearable tech with clinical data, we enhance care for youth populations, focusing on injury prevention and recovery.",
  },
  {
    title: "Advanced Clinical Tools & Biosensors",
    description: "Our lab pioneers innovative tools for diagnostics and monitoring, bridging engineering and clinical practice.",
  },
  {
    title: "Rehabilitation and Remote Sensing",
    description: "Through cutting-edge technology, we improve access to care and rehabilitation services for patients worldwide.",
  },
];

const studies = [
  "Heart Rate Validation Study",
  "Wearable Impedance Sensor for Lymphedema",
  "Menstrual Cycle and Performance Analytics",
  "Load Monitoring and Injury Prediction",
  "Smart and Equitable Sanitization Holder (SESH)",
  "Flexible Electroceutical Electrode for Dysphagia",
  "Softball Analytics for Injury Prevention",
  "Point-of-Care Biosensor for Abdominal Aortic Aneurysms (AAA)",
  "SPO2 Efficacy Study",
  "Remote Rehabilitation Sensing (RRS)",
  "Drones and Remote Sensing (DRS)",
];

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg-primary)] min-h-screen pt-[72px] text-[var(--text-primary)]">
        {/* HERO SECTION */}
        <section className="relative px-6 pt-28 pb-20 md:py-32 lg:px-12 max-w-[1600px] mx-auto flex flex-col items-start justify-center min-h-[60vh] overflow-hidden">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.15),transparent_70%)] pointer-events-none" />
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-left mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 max-w-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Driving Innovation in<br className="hidden sm:block" /> Healthcare Engineering
          </motion.h1>
          
          <motion.div
            className="max-w-3xl text-left space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              In the Seshadri Lab, we are dedicated to advancing healthcare through the development of innovative wearable technologies, data-driven solutions, and hardware-based systems. By integrating engineering principles with clinical insights, our mission is to transform patient care and improve outcomes across diverse healthcare settings.
            </p>
            <p className="text-[var(--accent-gold)] font-medium">
              We envision a future where technology bridges gaps in healthcare, enabling personalized, accessible, and effective care for all.
            </p>
          </motion.div>
        </section>

        {/* PASSION SECTION */}
        <section className="px-6 py-16 md:py-20 lg:px-12 max-w-[1600px] mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">What Are We Passionate About?</h2>
            <div className="h-1 w-24 bg-[var(--accent-gold)] rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {passionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div 
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-8 flex gap-6 items-start hover:border-[var(--accent-gold)] transition-colors duration-300"
                >
                  <div className="bg-neutral-800/50 p-4 rounded-2xl text-[var(--accent-gold)]">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white leading-snug">{area.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{area.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* LIBRARY OF INNOVATION */}
        <section className="px-6 py-16 md:py-24 lg:px-12 bg-neutral-900/30 border-y border-white/5">
          <div className="max-w-[1600px] mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">Our Library of Innovation</h2>
              <p className="text-neutral-400 max-w-2xl text-base md:text-lg">Pioneering different verticals within bioengineering to deliver next-generation healthcare solutions.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovationLibrary.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-neutral-950 p-8 rounded-2xl border border-white/5 hover:bg-neutral-900 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ONGOING STUDIES / PROJECTS */}
        <section className="px-6 py-16 md:py-24 lg:px-12 max-w-[1600px] mx-auto">
          <motion.div 
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">Ongoing Studies & Initiatives</h2>
              <div className="h-1 w-24 bg-[var(--accent-gold)] rounded-full mb-6" />
              <p className="text-neutral-400 max-w-2xl text-base md:text-lg">A selection of our active research projects and clinical trials across various medical disciplines.</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.4 }}
                className="group relative p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-white/5 overflow-hidden hover:border-[var(--accent-gold)]/50 transition-all cursor-pointer flex items-center h-full"
              >
                <div className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <Activity size={20} className="text-[var(--accent-gold)]" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-neutral-300 group-hover:text-white transition-colors pr-8 leading-relaxed">
                  {study}
                </h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY IT MATTERS - IMPACT QUOTE */}
        <section className="relative px-6 py-20 md:py-32 lg:px-12 bg-neutral-950 text-white overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">Why Does It All Matter?</h2>
              <div className="h-1 w-24 bg-[var(--accent-gold)] rounded-full" />
            </motion.div>
            
            <motion.div
              className="text-xl md:text-3xl font-medium leading-relaxed tracking-tight space-y-8 pl-8 border-l-4 border-[var(--accent-gold)]/40 text-neutral-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <p>
                "The thesis of the Seshadri Lab is to engineer to improve patient outcomes... For me, it's solving the hardest problems in medicine through engineering. It’s so grandkids can play with their grandparents, it’s so sons and daughters can give their parents that long-lasting hug..."
              </p>
              <p className="text-base md:text-2xl text-[var(--accent-gold)] italic leading-relaxed">
                "It’s the incessant desire to create value through first principles grounded in data, and driven to solve the unmet clinical need."
              </p>
            </motion.div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section className="px-6 py-16 md:py-24 lg:px-12 max-w-[1600px] mx-auto bg-neutral-900/30 border-y border-white/5">
           <motion.div 
             className="mb-16"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
           >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">Our Research in Action</h2>
             <p className="text-neutral-400 max-w-2xl text-base md:text-lg">Notable publications spanning digital medicine, bioelectric applications, and sports science.</p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Wearable sensors for monitoring the physiological and biochemical profile of the athlete", journal: "Npj Digital Medicine" },
               { title: "Absorbent and flexible conductive nanocomposites for bioelectric applications", journal: "IEEE TBME" },
               { title: "Accuracy of Apple Watch for detection of atrial fibrillation", journal: "Circulation" },
               { title: "Wearable sensor technology to predict core body temperature: A systematic review", journal: "Sensors" },
               { title: "Case report: Return to sport following the COVID-19 lockdown and its impact on injury rates in the German Soccer League", journal: "Frontiers in Sports and Active Living" },
               { title: "Wearable biosensors in congenital heart disease: Needs to advance the field", journal: "JACC Advances" },
               { title: "Validation of a hand-mounted wearable sensor for scratching movements in adults with atopic dermatitis", journal: "JAAD" },
               { title: "Wearable technology in the sports medicine clinic to guide the return-to-play and performance protocols of athletes following a COVID-19 diagnosis", journal: "Digital Health" },
               { title: "Accuracy of the Apple Watch 4 to Measure Heart Rate in Patients With Atrial Fibrillation", journal: "IEEE Journal of Translational Engineering in Health and Medicine" }
             ].map((pub, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-neutral-950 p-6 flex flex-col h-full justify-between rounded-xl border border-white/5 hover:border-[var(--accent-gold)]/50 transition-colors"
                >
                  <div className="mb-6">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-gold)] mb-3 bg-[var(--accent-gold-dim)] w-fit px-2 py-1 rounded">
                      {pub.journal}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-neutral-200 leading-normal">{pub.title}</h3>
                  </div>
                  <div className="text-xs uppercase font-bold text-neutral-500 hover:text-white transition-colors cursor-pointer w-fit flex items-center gap-1 mt-auto">
                    Read More ↗
                  </div>
               </motion.div>
             ))}
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
