"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="min-h-[100vh] flex flex-col justify-center pb-20 pt-20 overflow-hidden relative"
    >
      <div className="section-container w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          className="section-header text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl mb-6">Our Team</h2>
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-center">
            Led by Principal Investigator Dr. Dhruv Seshadri, our lab consists
            of passionate researchers, postdocs, and students dedicated to
            transforming healthcare.
          </p>
        </motion.div>

        {/* PI Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card max-w-7xl mx-auto overflow-hidden mb-24 flex flex-col lg:flex-row items-stretch"
        >
          {/* PI Image */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center items-center bg-[var(--bg-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[var(--accent-gold)] shadow-[0_0_40px_rgba(201,168,76,0.3)] mb-8">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/283a5153-f078-43b9-aeed-31717211dab1/Core_Values.jpg"
                alt="Dr. Dhruv Seshadri"
                className="w-full h-full object-cover bg-white"
              />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 color-[var(--text-primary)] text-center">Dr. Dhruv Seshadri</h3>
            <p className="text-lg text-[var(--accent-gold)] font-medium mb-8 uppercase tracking-wider text-center">
              Principal Investigator
            </p>
            <div className="flex gap-4 justify-center">
              <a href="mailto:seshadri@lehigh.edu" className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-colors">
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* PI Content & Lab Details */}
          <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                <Award className="text-[var(--accent-gold)]" size={28} /> About The Lab
              </h4>
              <p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                The Seshadri Lab at Lehigh University resides at the intersection of materials
                science, flexible electronics, and biomedical engineering. 
                Our mission is to translate next-generation devices from the benchtop to the clinic.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[rgba(255,255,255,0.05)] rounded-full text-[var(--text-primary)] text-sm font-medium border border-[rgba(255,255,255,0.1)]">Bioelectronics</span>
                <span className="px-4 py-2 bg-[rgba(255,255,255,0.05)] rounded-full text-[var(--text-primary)] text-sm font-medium border border-[rgba(255,255,255,0.1)]">Digital Health</span>
                <span className="px-4 py-2 bg-[rgba(255,255,255,0.05)] rounded-full text-[var(--text-primary)] text-sm font-medium border border-[rgba(255,255,255,0.1)]">Translational Medicine</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                <BookOpen className="text-[var(--accent-gold)]" size={28} /> Core Values
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Diversity & Inclusion",
                  "Mentorship Focused",
                  "Rigorous Innovation",
                  "Collaborative Ecosystem"
                ].map((value) => (
                  <li key={value} className="flex items-center gap-3 text-base lg:text-lg text-[var(--text-secondary)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 mt-4 text-base lg:text-lg text-[var(--text-secondary)]">
              <div className="flex items-center gap-4">
                <GraduationCap size={20} color="var(--accent-gold)" />
                Department of Bioengineering
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} color="var(--accent-gold)" />
                Lehigh University, Bethlehem, PA
              </div>
            </div>

          </div>
        </motion.div>

        {/* Collaborators / Press Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-lg lg:text-xl font-bold text-[var(--text-secondary)] mb-8 tracking-[0.1em] uppercase">
            Collaborators &amp; Press
          </h3>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[var(--border-card)] bg-white">
            <img
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a2a17e01-6206-4829-b163-ba390a6b838f/Press+collaboratrs+wall.png"
              alt="Press and Collaborators"
              loading="lazy"
              className="w-full h-auto block p-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
