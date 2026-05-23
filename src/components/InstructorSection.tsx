"use client";

import { motion } from "framer-motion";
import { Server, Cloud, ShieldCheck, Activity, Award, ExternalLink, Briefcase } from "lucide-react";

const certCategories = [
  {
    title: "Networking & Infrastructure",
    icon: Server,
    color: "#2563a8",
    certs: [
      { name: "MTCNA", desc: "Understanding MikroTik networking fundamentals and routing environments." },
      { name: "OCNA Wireless", desc: "Enterprise wireless planning, deployment, and management using Omada SDN." },
      { name: "OCNA Routing & Switching", desc: "Advanced switching technologies and enterprise routing architectures." },
      { name: "VCSA", desc: "Vigi Certified Security Administrator for surveillance and network video management." },
      { name: "BNSP Technical Support Occupation", desc: "Nationally recognized certification for IT infrastructure support." },
    ],
  },
  {
    title: "Cloud & Enterprise",
    icon: Cloud,
    color: "#0d9488",
    certs: [
      { name: "Google Cloud Professional Cloud Architect", desc: "Designing, developing, and managing robust, secure, and highly available cloud architectures." },
    ],
  },
  {
    title: "Security & Governance",
    icon: ShieldCheck,
    color: "#f97316",
    certs: [
      { name: "ISO/IEC 27001:2022 Lead Auditor Certified", desc: "Auditing and managing enterprise Information Security Management Systems (ISMS)." },
    ],
  },
];

export default function InstructorSection() {
  return (
    <section id="instructor" style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid #f1f4f8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(37,99,168,0.07)", color: "#1d6fe6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>
            YOUR INSTRUCTOR
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Meet Your Instructor
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Learn from an industry-certified trainer with real-world infrastructure and networking exposure.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }} className="instructor-grid">
          
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#f8f9fb",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 36,
              textAlign: "center",
              position: "sticky",
              top: 100,
            }}
          >
            {/* Avatar Placeholder */}
            <div style={{
              width: 120, height: 120, borderRadius: "50%", margin: "0 auto 24px",
              background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
              border: "4px solid #fff",
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden"
            }}>
              {/* Optional: Add an image tag later, currently keeping minimal */}
              <span style={{ fontSize: 36, color: "#94a3b8", fontWeight: 800, letterSpacing: "-0.05em" }}>MP</span>
            </div>
            
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", marginBottom: 8, letterSpacing: "-0.02em" }}>
              Moh Farrel Pandhita Pratama
            </h3>
            
            <p style={{ fontSize: 13, fontWeight: 700, color: "#1d6fe6", marginBottom: 20, lineHeight: 1.5 }}>
              Network Engineer | Cloud & Infrastructure Enthusiast | Certified Technical Trainer
            </p>
            
            <div style={{ height: 1, background: "#e2e8f0", margin: "0 24px 24px" }} />
            
            <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7, marginBottom: 32 }}>
              A trainer with practical exposure in networking, cloud infrastructure, wireless systems, and enterprise troubleshooting — focused on bridging academic learning with real-world engineering practices.
            </p>

            <a
              href="https://www.linkedin.com/in/moh-farrel-pandhita-pratama/details/certifications/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#fff", border: "1px solid #cbd5e1", color: "#334155",
                fontSize: 13, fontWeight: 600, padding: "12px 20px", borderRadius: 8,
                textDecoration: "none", transition: "all 0.2s", width: "100%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#f1f4f8";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#cbd5e1";
              }}
            >
              View Professional Experience <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Right Column: Experience & Certifications */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14,
                padding: "28px 32px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f8f9fb", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={18} color="#475569" />
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>Industry Exposure</h4>
              </div>
              
              <div style={{ paddingLeft: 16, borderLeft: "2px solid #e2e8f0", marginLeft: 20 }}>
                <div style={{ display: "inline-block", background: "rgba(13,148,136,0.1)", color: "#0d9488", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, marginBottom: 10 }}>
                  REAL-WORLD EXPERIENCE
                </div>
                <h5 style={{ fontSize: 15, fontWeight: 700, color: "#334155", marginBottom: 8 }}>Ex NOC Engineer Intern at KOMINFO</h5>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
                  Hands-on experience in network monitoring, infrastructure operations, and troubleshooting within a real operational environment.
                </p>
              </div>
            </motion.div>

            {/* Certifications Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 style={{ fontSize: 14, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 20, textTransform: "uppercase" }}>
                Professional Certifications
              </h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {certCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
                      {/* Category Header */}
                      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 24px", background: "#f8f9fb", borderBottom: "1px solid #e2e8f0" }}>
                        <Icon size={16} color={cat.color} />
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#334155" }}>{cat.title}</span>
                      </div>
                      
                      {/* Category Items */}
                      <div style={{ display: "flex", flexDirection: "column", padding: "8px 0" }}>
                        {cat.certs.map((cert, cIdx) => (
                          <div key={cert.name} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 24px", borderBottom: cIdx === cat.certs.length - 1 ? "none" : "1px solid #f1f4f8" }}>
                            <div style={{ flexShrink: 0, marginTop: 2 }}>
                              <Award size={16} color="#cbd5e1" />
                            </div>
                            <div>
                              <h5 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{cert.name}</h5>
                              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{cert.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
          </div>
        </div>
        
        {/* Soft Trust Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: 64,
            padding: "24px 32px",
            background: "rgba(29,111,230,0.03)",
            border: "1px solid rgba(29,111,230,0.1)",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, maxWidth: 800, margin: "0 auto" }}>
            This bootcamp is designed based on both academic alignment and practical industry exposure, helping students bridge the gap between classroom concepts and real-world networking environments.
          </p>
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .instructor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
