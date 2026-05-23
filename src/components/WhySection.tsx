"use client";

import { motion } from "framer-motion";
import { BookOpen, Wrench, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Hands-On Labs",
    desc: "Learn through implementation.",
    color: "#0d9488",
  },
  {
    icon: AlertTriangle,
    title: "Real Troubleshooting",
    desc: "Solve intentional network failures.",
    color: "#f97316",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Exposure",
    desc: "Beyond academic networking.",
    color: "#2563a8",
  },
  {
    icon: BookOpen,
    title: "Engineer Mindset",
    desc: "Think like real infrastructure engineers.",
    color: "#7c3aed",
  },
  {
    icon: CheckCircle2,
    title: "Campus Aligned",
    desc: "Supports Cisco-based academic learning.",
    color: "#16a34a",
  },
];

const flowSteps = ["Learn", "Build", "Troubleshoot", "Think Like an Engineer"];

export default function WhySection() {
  return (
    <section id="why" style={{ background: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block",
            background: "rgba(37,99,168,0.07)",
            color: "#1d6fe6",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "5px 14px",
            borderRadius: 999,
            marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>
            THE DIFFERENCE
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            What Makes This Different?
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            A premium educational experience designed to bridge the gap between academic theory and enterprise reality.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 72 }}>
          {features.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  background: "#f8f9fb",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: 24,
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
                whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${p.color}14`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={20} color={p.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.5 }}>{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Solution: Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(135deg, #050d1a 0%, #0f2040 100%)",
            borderRadius: 16,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>
            THE SOLUTION
          </p>
          <h3 style={{ color: "#fff", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em" }}>
            This bootcamp focuses on a single mission:
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 36 }}>
            Turning students into engineers who can actually do the work.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
            {flowSteps.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{
                    background: i === flowSteps.length - 1 ? "#1d6fe6" : "rgba(255,255,255,0.07)",
                    border: `1px solid ${i === flowSteps.length - 1 ? "#2b82f7" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 10,
                    padding: "12px 22px",
                    color: i === flowSteps.length - 1 ? "#fff" : "rgba(255,255,255,0.85)",
                    fontWeight: 700,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step}
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <div style={{ color: "rgba(255,255,255,0.25)", padding: "0 10px", fontSize: 18 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
