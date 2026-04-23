"use client";

import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-strong)", padding: "4rem 0 2rem 0", color: "var(--text-secondary)", fontSize: "0.9rem", transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2.5rem" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Column 1: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a3268a0d-8b8c-4f48-925c-44b01408e21e/Main+Logo.png" 
              alt="Seshadri Lab Logo" 
              style={{ height: 60, objectFit: "contain", objectPosition: "left", filter: "var(--logo-filter)", transition: "filter 0.3s ease" }} 
            />
            <p style={{ fontWeight: 600, color: "var(--text-primary)", transition: "color 0.3s ease" }}>Innovating to Improve Patient Outcomes</p>
            <p>© {new Date().getFullYear()} The Seshadri Lab, Lehigh University</p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "0.5rem", transition: "color 0.3s ease" }}>Quick Links</h4>
            <Link href="/#hero" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
            <Link href="/research" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--accent-gold)] transition-colors">Research</Link>
            <Link href="/team" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--accent-gold)] transition-colors">Team</Link>
            <Link href="/values" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--accent-gold)] transition-colors">Values</Link>
            <Link href="/get-involved" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--accent-gold)] transition-colors">Get Involved</Link>
          </div>

          {/* Column 3: Contact & Affiliates */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "0.25rem", transition: "color 0.3s ease" }}>Contact & Affiliates</h4>
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MapPin size={18} color="var(--accent-gold)" style={{ marginTop: 2, flexShrink: 0 }} />
              <span>Iacocca Hall, 111 Research Drive<br/>Room C343, Bethlehem, PA 18015</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <a href="mailto:dhs223@lehigh.edu" style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[var(--text-primary)] transition-colors">dhs223@lehigh.edu</a>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <span>(610) 758-4790</span>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://www1.lehigh.edu/admissions" target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-[var(--text-primary)] transition-colors">
                Undergraduate Admissions <ExternalLink size={14} />
              </a>
              <a href="https://www2.lehigh.edu/academics/graduate-studies/admissions" target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-[var(--text-primary)] transition-colors">
                Graduate School <ExternalLink size={14} />
              </a>
              <a href="https://engineering.lehigh.edu/bioe" target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-[var(--text-primary)] transition-colors">
                Lehigh Bioengineering <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: "1px solid var(--border-strong)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontSize: "0.75rem", color: "var(--text-muted)", transition: "border-color 0.3s ease, color 0.3s ease" }}>
          <span>Site designed with Antigravity</span>
          <span>Seshadri Lab, Lehigh University Bioengineering</span>
        </div>
      </div>
    </footer>
  );
}
