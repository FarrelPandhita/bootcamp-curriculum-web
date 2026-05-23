"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { AlertCircle, CheckSquare, FileText, Clock } from "lucide-react";

export default function CaseStudySection() {
  return (
    <section id="cases" style={{ background: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(249,115,22,0.07)", color: "#f97316",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(249,115,22,0.18)",
          }}>REAL CASE STUDIES</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Solve Real Engineering Problems
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Every 2 weeks, students face a realistic incident derived from actual enterprise network failures.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
              style={{
                background: "#f8f9fb",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                padding: 28,
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  background: "rgba(249,115,22,0.09)", color: "#f97316",
                  fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999,
                }}>
                  <Clock size={10} />{cs.week}
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AlertCircle size={18} color="#ef4444" />
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{cs.title}</h3>

              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 6 }}>SCENARIO</p>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{cs.problem}</p>
              </div>

              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 6 }}>REQUIREMENT</p>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{cs.requirement}</p>
              </div>

              <div>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 8 }}>DELIVERABLES</p>
                {cs.deliverables.map((d) => (
                  <div key={d} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                    <CheckSquare size={12} color="#16a34a" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 12.5, color: "#334155" }}>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
