"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Mail, Phone, Send, Heart, FlaskConical, Users } from "lucide-react";

const GOLD = "var(--accent-gold)";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
};

const S = {
  page: { background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" } as React.CSSProperties,
  container: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 2.5rem",
    width: "100%",
  } as React.CSSProperties,
  section: (bg = "transparent"): React.CSSProperties => ({
    background: bg,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
    paddingBottom: "6rem",
    position: "relative",
  }),
  h2: {
    fontSize: "clamp(2rem, 3vw, 2.5rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "var(--text-primary)",
    marginBottom: "1rem",
  } as React.CSSProperties,
  bodyText: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "var(--text-secondary)",
  } as React.CSSProperties,
  input: {
    width: "100%",
    background: "var(--bg-card-hover)",
    border: "1px solid #333",
    borderRadius: 4,
    padding: "1rem",
    color: "#fff",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    outline: "none",
  } as React.CSSProperties,
  label: {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "var(--text-secondary)",
    marginBottom: "0.5rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em"
  } as React.CSSProperties,
  card: {
    background: "var(--bg-card)",
    border: "1px solid var(--border-strong)",
    borderRadius: 8,
  } as React.CSSProperties,
};

const row1Logos = [
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/8e93e593-36a3-465b-bcbb-feaf2c5c1bc8/lehigh.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/8f75c7d5-7576-4e83-b8e6-f9801b531fe2/DoD-Seal.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/898ae007-0584-4f60-8739-c297600cd9ae/cwru.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/ef5a49e2-e836-4658-ac26-7aa86d175097/spire.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/01d83a75-258e-44df-bf8b-53f115f8cdd0/nemours.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/b6fa8786-1aa8-4525-80d0-302951b4bdb1/atrium.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/e92f8eeb-6b95-4f94-a0fb-0585aadb3d75/ccf.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/22143fef-c1e3-4a07-ae7e-1ca0d858def7/UH.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/9f0c41eb-546f-442a-92fc-5be2d9199c31/browns.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/c6c14a91-f046-4548-a812-bbc9c5999967/IIT+Palakkad+logo.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/c98cd82e-e5cf-4cce-a42a-c913351cba18/Good-Shepherd-Logo-square.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/1f871dd7-2b4b-4d34-b77d-8801edb9e1dd/LVHN.jpg",
];

const row2Logos = [
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/d13ea112-ac86-4fce-bc11-511b789a140e/peter.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/dd5f6bea-3204-45cf-999e-5fb25d4fc89e/ghent.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/939ddacd-0070-43af-b257-e800348357f6/prowess+pitching.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/9a8d69c1-4b6f-4142-98f9-fe62d02034b3/cdac.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/6351f602-550c-46f1-9e4f-f76d456da746/gabbett.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/d2772c47-08ee-4135-9407-9b7d16c62642/Bucknell_University_logo.svg.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/ad06bf37-e234-47c4-bcb0-6d7578401bf2/logo-yale.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/08f3ca92-d278-4978-a2a7-f4b7febbcf2d/North_Carolina_A%26T_Aggies_logo.svg.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/8ec73832-7832-4dca-b80e-7127e82492ad/SBlogo_White.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/d88c2d1c-25f4-43ec-a675-300ba76276ab/images+%281%29.png",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/dfdfa3fa-04d6-4502-971c-e4d9266ebf35/unz2yGVD_400x400.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/54a57753-b31b-4cf0-acc1-6698b42c1e26/q5oeLxRZ_400x400.jpg"
];

const faqs = [
  {
    q: "Who can apply to the Seshadri Lab?",
    a: "We welcome applications from undergraduates, graduate students, postdoctoral fellows, and visiting scholars at any level. High school students with exceptional motivation are also considered for internship roles."
  },
  {
    q: "How do I apply?",
    a: "Send a copy of your recent CV, a summary of your background and projects, and a short statement of your research interests and what draws you to our lab to dhs223@lehigh.edu."
  },
  {
    q: "What research areas does the lab focus on?",
    a: "Our work spans wearable sensors, bioelectronics, disease management, digital therapeutics, and human performance — with applications in orthopedics, sports medicine, cardiology, wound healing, and neuromuscular disease."
  },
  {
    q: "Are there opportunities for industry collaboration?",
    a: "Absolutely. We actively collaborate with clinicians, healthcare organizations, governmental agencies, and industry partners. Reach out via email to explore partnership opportunities."
  },
  {
    q: "Is the lab accepting PhD students?",
    a: "We typically accept PhD students in the Lehigh University Bioengineering program. Prospective students should apply through the Lehigh graduate admissions portal and reach out to Dr. Seshadri directly."
  }
];

function Accordion({ faqs }: { faqs: { q: string, a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border-strong)", borderRadius: 8, overflow: "hidden" }}>
            <button
              onClick={() => toggle(i)}
              style={{
                width: "100%", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "transparent", border: "none", color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700,
                textAlign: "left", cursor: "pointer"
              }}
            >
              {faq.q}
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={24} color={GOLD} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <main style={S.page}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{ ...S.section("var(--bg-secondary)"), minHeight: "100vh", paddingTop: "10rem" }}>
          <div style={{ ...S.container, textAlign: "center" }}>
            <motion.h1
              initial="hidden" animate="show" variants={fadeUp} custom={0}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              Let's Collaborate to Improve Healthcare
            </motion.h1>
            <motion.p
              initial="hidden" animate="show" variants={fadeUp} custom={1}
              style={{ ...S.bodyText, maxWidth: 800, margin: "0 auto 2.5rem auto", fontSize: "1.15rem" }}
            >
              We work closely with leading institutions — including Lehigh University, LVHN, Geisinger, and the Department of Defense — to ensure our research has real-world impact. Whether you're a researcher, student, donor, or organization, the Seshadri Lab is always open to meaningful connections.
            </motion.p>
            
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={2} style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact-form" style={{ display: "inline-block", background: GOLD, color: "#000", fontWeight: 800, padding: "1rem 2.5rem", borderRadius: 4, textDecoration: "none", fontSize: "1.05rem" }}>
                Contact Us &darr;
              </a>
              <a href="#faq" style={{ display: "inline-block", background: "transparent", color: GOLD, border: `1px solid ${GOLD}`, fontWeight: 800, padding: "1rem 2.5rem", borderRadius: 4, textDecoration: "none", fontSize: "1.05rem" }}>
                View FAQs &darr;
              </a>
            </motion.div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ COLLABORATE ══════════════════ */}
        <section style={S.section()}>
          <div style={{ ...S.container, display: "grid", gap: "4rem" }} className="md:grid-cols-2 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 style={S.h2}>Collaborate With Us!</h2>
              <div style={{ height: 3, width: 48, background: GOLD, borderRadius: 2, marginBottom: "1.5rem" }} />
              <p style={{ ...S.bodyText, marginBottom: "1rem" }}>
                Looking to collaborate on innovative healthcare solutions? The Seshadri Lab thrives on interdisciplinary partnerships and welcomes opportunities to work with clinicians, researchers, and industry leaders.
              </p>
              <p style={S.bodyText}>
                Our collaborations span governmental agencies, athletic teams, and healthcare organizations — exemplifying our interdisciplinary approach to solving complex problems. Reach out to explore how we can advance cutting-edge projects together.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--border-strong)" }}>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/b2e33323-917f-45ec-ba75-2883cc7223ae/mHEAL+Yellow.jpg" 
                  alt="Seshadri Lab Collaboration" 
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════ PARTNERS MARQUEE ══════════════════ */}
        <section style={{ ...S.section("var(--bg-secondary)"), overflow: "hidden" }}>
          <div style={{ ...S.container, textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={S.h2}>Our Partners & Collaborators</h2>
            <p style={{ ...S.bodyText, margin: "0 auto", maxWidth: 600 }}>A growing network of world-class institutions driving impact.</p>
          </div>

          <div className="marquee-wrapper">
            {/* ROW 1 */}
            <div className="marquee-track track-left">
              {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, i) => (
                <div key={`r1-${i}`} className="marquee-item">
                  <img src={logo} alt="Partner Logo" className="grayscale hover:grayscale-0 transition-all duration-300" style={{ height: 60, width: "auto", objectFit: "contain", mixBlendMode: "screen", filter: "brightness(0.8) contrast(1.2)" }} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="marquee-wrapper mt-8">
            {/* ROW 2 */}
            <div className="marquee-track track-right">
              {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, i) => (
                <div key={`r2-${i}`} className="marquee-item">
                  <img src={logo} alt="Partner Logo" className="grayscale hover:grayscale-0 transition-all duration-300" style={{ height: 60, width: "auto", objectFit: "contain", mixBlendMode: "screen", filter: "brightness(0.8) contrast(1.2)" }} />
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            .marquee-wrapper {
              width: 100vw;
              overflow: hidden;
              position: relative;
              display: flex;
            }
            .marquee-wrapper::before,
            .marquee-wrapper::after {
              content: "";
              position: absolute;
              top: 0;
              width: 15vw;
              height: 100%;
              z-index: 2;
            }
            .marquee-wrapper::before {
              left: 0;
              background: linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%);
            }
            .marquee-wrapper::after {
              right: 0;
              background: linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%);
            }
            .marquee-track {
              display: flex;
              gap: 4rem;
              width: max-content;
              padding: 0 2rem;
            }
            .track-left {
              animation: marqueeLeft 40s linear infinite;
            }
            .track-right {
              animation: marqueeRight 40s linear infinite;
            }
            .marquee-item {
              width: 180px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            @keyframes marqueeLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            @keyframes marqueeRight {
              0% { transform: translateX(-33.33%); }
              100% { transform: translateX(0); }
            }
          `}</style>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ CONTACT FORMS ══════════════════ */}
        <section id="contact-form" style={S.section()}>
          <div style={{ ...S.container, display: "grid", gap: "4rem" }} className="lg:grid-cols-[1fr_1.5fr]">
            
            {/* Left Info Block */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={{ ...S.card, padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }}>Dhruv R. Seshadri, Ph.D.</h3>
                <p style={{ color: GOLD, fontSize: "0.9rem", fontWeight: 700, marginBottom: "2rem" }}>Assistant Professor, Lehigh University</p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: "var(--bg-card-hover)", padding: "0.5rem", borderRadius: 4, flexShrink: 0 }}>
                      <MapPin size={20} color={GOLD} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.25rem" }}>Address</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Iacocca Hall, 111 Research Drive<br/>Room C343<br/>Bethlehem, PA 18015</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: "var(--bg-card-hover)", padding: "0.5rem", borderRadius: 4, flexShrink: 0 }}>
                      <Mail size={20} color={GOLD} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.25rem" }}>Email</span>
                      <a href="mailto:dhs223@lehigh.edu" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>dhs223@lehigh.edu</a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: "var(--bg-card-hover)", padding: "0.5rem", borderRadius: 4, flexShrink: 0 }}>
                      <Phone size={20} color={GOLD} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.25rem" }}>Phone</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>(610) 758-4790</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form Block */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <form 
                style={{ ...S.card, padding: "2.5rem" }}
                onSubmit={(e) => { e.preventDefault(); alert('In a production environment, this would submit to an API endpoint.'); }}
              >
                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label style={S.label}>Full Name</label>
                    <input type="text" style={S.input} placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <label style={S.label}>Email Address</label>
                    <input type="email" style={S.input} placeholder="jane@example.com" required />
                  </div>
                </div>
                
                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label style={S.label}>Phone Number (Optional)</label>
                    <input type="tel" style={S.input} placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label style={S.label}>Role</label>
                    <select style={{ ...S.input, appearance: "none" }}>
                      <option>Undergraduate Student</option>
                      <option>Graduate Student</option>
                      <option>Postdoctoral Fellow</option>
                      <option>Faculty / Researcher</option>
                      <option>Clinician</option>
                      <option>Industry / Corporate Partner</option>
                      <option>Donor / Philanthropic Organization</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={S.label}>Institution / Organization</label>
                  <input type="text" style={S.input} placeholder="E.g. Lehigh University" required />
                </div>

                <div>
                  <label style={S.label}>Message / Research Interest</label>
                  <textarea style={{ ...S.input, minHeight: 120, resize: "vertical" }} placeholder="How would you like to collaborate?" required />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" style={{ display: "flex", alignItems: "center", gap: 8, background: GOLD, color: "#000", fontWeight: 800, padding: "1rem 2rem", borderRadius: 4, border: "none", cursor: "pointer", fontSize: "1.05rem" }}>
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════ DONOR CTA ══════════════════ */}
        <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "10rem 0" }}>
          <div 
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/242231aa-2fbe-4ccc-b2da-2c7bc934382d/FCED2B70-983F-4DD9-8E0D-498F8EE64FE8IMG_2984.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)"
            }}
          />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.85)" }} />

          <div style={{ ...S.container, position: "relative", zIndex: 2, textAlign: "center" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={{ display: "inline-flex", padding: "6px 16px", border: `1px solid ${GOLD}`, color: GOLD, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", borderRadius: 4, marginBottom: "1.5rem" }}>
                SUPPORT OUR MISSION
              </div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Make an Impact Today
              </h2>
              <p style={{ ...S.bodyText, maxWidth: 700, margin: "0 auto 3rem auto" }}>
                Support our mission to transform healthcare. Your contributions enable us to develop life-changing technologies, mentor the next generation of innovators, and push the boundaries of research. Whether you're an alumnus, corporate sponsor, or philanthropic organization — your support makes a difference.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "2rem", borderRadius: 8 }}>
                  <FlaskConical size={32} color={GOLD} style={{ margin: "0 auto 1rem auto" }} />
                  <div style={{ fontWeight: 700, color: "#fff" }}>Wearable Tech<br/>Innovations</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "2rem", borderRadius: 8 }}>
                  <Heart size={32} color={GOLD} style={{ margin: "0 auto 1rem auto" }} />
                  <div style={{ fontWeight: 700, color: "#fff" }}>Funded Research<br/>Projects</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "2rem", borderRadius: 8 }}>
                  <Users size={32} color={GOLD} style={{ margin: "0 auto 1rem auto" }} />
                  <div style={{ fontWeight: 700, color: "#fff" }}>Students<br/>Mentored</div>
                </div>
              </div>

              <a href="mailto:dhs223@lehigh.edu" style={{ display: "inline-block", background: GOLD, color: "#000", fontWeight: 800, padding: "1rem 2.5rem", borderRadius: 4, textDecoration: "none", fontSize: "1.1rem" }}>
                Support the Lab &rarr;
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════ FAQ ══════════════════ */}
        <section id="faq" style={S.section("var(--bg-secondary)")}>
          <div style={S.container}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={S.h2}>Frequently Asked Questions</h2>
              <div style={{ height: 3, width: 48, background: GOLD, borderRadius: 2, margin: "0 auto" }} />
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Accordion faqs={faqs} />
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
