"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, BarChart2, Layers, FlaskConical, Trophy } from "lucide-react";

const metrics = [
  { icon: Clock, value: "16", unit: "Weeks", label: "Program Duration", color: "#1d6fe6" },
  { icon: Calendar, value: "32", unit: "Sessions", label: "Total Sessions", color: "#0d9488" },
  { icon: BarChart2, value: "2", unit: "/ Week", label: "Weekly Schedule", color: "#7c3aed" },
  { icon: Clock, value: "2–2.5", unit: "Hours", label: "Session Duration", color: "#f97316" },
  { icon: FlaskConical, value: "8", unit: "Cases", label: "Real Case Studies", color: "#2563a8" },
  { icon: Trophy, value: "1", unit: "Project", label: "Enterprise Capstone", color: "#0d9488" },
];

export default function OverviewSection() {
  return (
    <section id="overview" style={{ background: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block",
            background: "rgba(37,99,168,0.07)",
            color: "#1d6fe6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px",
            borderRadius: 999,
            marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>PROGRAM OVERVIEW</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 12 }}>
            What to Expect
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            A rigorous, structured program designed to match industry expectations.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                style={{
                  background: "#f8f9fb",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "28px 24px",
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: `${m.color}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={20} color={m.color} />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 4 }}>
                  <span style={{ fontSize: 30, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em" }}>{m.value}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: m.color }}>{m.unit}</span>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{m.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: 40,
            background: "linear-gradient(135deg, #050d1a 0%, #0f2040 100%)",
            borderRadius: 14,
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>
              WEEKLY STRUCTURE
            </p>
            <p style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
              2 sessions/week — Every session includes theory, lab, and challenge
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["Theory (30%)", "Lab (50%)", "Challenge (20%)"].map((t, i) => (
              <div
                key={t}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: 40, padding: "0 12px" }}
        >
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1d6fe6", letterSpacing: "0.08em", textTransform: "uppercase" }}>Learning Progression</span>
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 6 }}>The curriculum curve is designed to build competency progressively.</p>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, alignItems: "center" }}>
            {[
              "Foundation", "Understanding", "Configuration", 
              "Troubleshooting", "Design Thinking", "Enterprise Thinking", "Automation Exposure"
            ].map((stage, i, arr) => (
              <div key={stage} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  background: i === arr.length - 1 ? "#1d6fe6" : "#f1f4f8",
                  color: i === arr.length - 1 ? "#fff" : "#475569",
                  padding: "10px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                  border: i === arr.length - 1 ? "1px solid #2b82f7" : "1px solid #e2e8f0"
                }}>
                  {stage}
                </div>
                {i < arr.length - 1 && <span style={{ color: "#cbd5e1", fontSize: 16 }}>→</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
