"use client";

import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid #222222", padding: "4rem 0 2rem 0", color: "#a69e8e", fontSize: "0.9rem" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2.5rem" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Column 1: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a3268a0d-8b8c-4f48-925c-44b01408e21e/Main+Logo.png" 
              alt="Seshadri Lab Logo" 
              style={{ height: 60, objectFit: "contain", objectPosition: "left", filter: "brightness(0) invert(1)" }} 
            />
            <p style={{ fontWeight: 600, color: "#f5f0e8" }}>Innovating to Improve Patient Outcomes</p>
            <p>© {new Date().getFullYear()} The Seshadri Lab, Lehigh University</p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h4 style={{ color: "#f5f0e8", fontWeight: 700, marginBottom: "0.5rem" }}>Quick Links</h4>
            <Link href="/#hero" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#c9a84c]">Home</Link>
            <Link href="/research" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#c9a84c]">Research</Link>
            <Link href="/team" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#c9a84c]">Team</Link>
            <Link href="/values" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#c9a84c]">Values</Link>
            <Link href="/get-involved" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#c9a84c]">Get Involved</Link>
          </div>

          {/* Column 3: Contact & Affiliates */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ color: "#f5f0e8", fontWeight: 700, marginBottom: "0.25rem" }}>Contact & Affiliates</h4>
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MapPin size={18} color="#c9a84c" style={{ marginTop: 2, flexShrink: 0 }} />
              <span>Iacocca Hall, 111 Research Drive<br/>Room C343, Bethlehem, PA 18015</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Mail size={18} color="#c9a84c" style={{ flexShrink: 0 }} />
              <a href="mailto:dhs223@lehigh.edu" style={{ color: "#a69e8e", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-white">dhs223@lehigh.edu</a>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Phone size={18} color="#c9a84c" style={{ flexShrink: 0 }} />
              <span>(610) 758-4790</span>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://www1.lehigh.edu/admissions" target="_blank" rel="noreferrer" style={{ color: "#c9a84c", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-white">
                Undergraduate Admissions <ExternalLink size={14} />
              </a>
              <a href="https://www2.lehigh.edu/academics/graduate-studies/admissions" target="_blank" rel="noreferrer" style={{ color: "#c9a84c", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-white">
                Graduate School <ExternalLink size={14} />
              </a>
              <a href="https://engineering.lehigh.edu/bioe" target="_blank" rel="noreferrer" style={{ color: "#c9a84c", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-white">
                Lehigh Bioengineering <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: "1px solid #222222", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontSize: "0.75rem", color: "#666" }}>
          <span>Site designed with Antigravity</span>
          <span>Seshadri Lab, Lehigh University Bioengineering</span>
        </div>
      </div>
    </footer>
  );
}
