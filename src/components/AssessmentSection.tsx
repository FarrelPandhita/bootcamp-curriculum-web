"use client";

import { motion } from "framer-motion";

const assessments = [
  { label: "Quiz", pct: 15, color: "#2563a8", desc: "Conceptual knowledge checks each week" },
  { label: "Lab", pct: 30, color: "#1d6fe6", desc: "Practical configuration and implementation" },
  { label: "Case Study", pct: 20, color: "#0d9488", desc: "Real-world problem diagnosis and solution" },
  { label: "Mini Project", pct: 15, color: "#7c3aed", desc: "Module-end implementation project" },
  { label: "Capstone", pct: 20, color: "#f97316", desc: "Final enterprise network design and delivery" },
];

const outcomes = [
  "Configure routers, switches, and access points from CLI",
  "Troubleshoot network problems using systematic methodology",
  "Design a 3-tier enterprise network topology",
  "Configure VLAN segmentation and inter-VLAN routing",
  "Implement routing protocols (OSPF, EIGRP) in real topologies",
  "Apply access control lists and firewall policies",
  "Understand and implement QoS for voice/video traffic",
  "Perform basic network automation using Python/Ansible",
  "Produce professional network documentation",
  "Understand enterprise wireless architecture basics",
];

export default function AssessmentSection() {
  return (
    <section id="assessment" style={{ background: "#f8f9fb", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
          }}>ASSESSMENT</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            How You&apos;re Evaluated
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Heavy emphasis on practical implementation — because that&apos;s what the industry demands.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="assessment-grid">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 36 }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 28 }}>Assessment Breakdown</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {assessments.map((a, i) => (
                <div key={a.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{a.label}</span>
                      <span style={{ fontSize: 12, color: "#94a3b8", marginLeft: 8 }}>{a.desc}</span>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 800, color: a.color }}>{a.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: "#f1f4f8", borderRadius: 999, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                      style={{ height: "100%", background: a.color, borderRadius: 999 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 24, padding: "14px 16px",
              background: "rgba(29,111,230,0.04)", borderRadius: 9, border: "1px solid rgba(29,111,230,0.12)",
            }}>
              <p style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.6 }}>
                <strong>65%</strong> of the final grade comes from practical lab work, case studies, and capstone — not theory memorization.
              </p>
            </div>
          </motion.div>

          {/* Outcomes checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 36 }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 24 }}>
              What You&apos;ll Be Able to Do
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {outcomes.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: 5, flexShrink: 0,
                    background: "rgba(22,163,74,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.55 }}>{o}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .assessment-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
