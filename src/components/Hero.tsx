"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ChevronDown, Layers, Network } from "lucide-react";

// SVG Network topology illustration
function NetworkTopology() {
  return (
    <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxHeight: 340 }}>
      {/* Background grid */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 53} y1="0" x2={i * 53} y2="340" stroke="rgba(37,99,168,0.08)" strokeWidth="1" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 57} x2="480" y2={i * 57} stroke="rgba(37,99,168,0.08)" strokeWidth="1" />
      ))}

      {/* Connection lines */}
      <line x1="240" y1="60" x2="100" y2="160" stroke="rgba(29,111,230,0.4)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="240" y1="60" x2="380" y2="160" stroke="rgba(29,111,230,0.4)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="100" y1="160" x2="60" y2="260" stroke="rgba(29,111,230,0.25)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="100" y1="160" x2="170" y2="260" stroke="rgba(29,111,230,0.25)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="380" y1="160" x2="310" y2="260" stroke="rgba(29,111,230,0.25)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="380" y1="160" x2="420" y2="260" stroke="rgba(29,111,230,0.25)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="100" y1="160" x2="380" y2="160" stroke="rgba(95,165,249,0.2)" strokeWidth="1" strokeDasharray="3 4" />

      {/* Core Router */}
      <rect x="210" y="38" width="60" height="44" rx="8" fill="#0f2040" stroke="#1d6fe6" strokeWidth="1.5" />
      <text x="240" y="57" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">CORE</text>
      <text x="240" y="71" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">RTR</text>

      {/* Distribution Switches */}
      <rect x="70" y="138" width="60" height="44" rx="8" fill="#0f2040" stroke="#2563a8" strokeWidth="1.5" />
      <text x="100" y="157" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">DIST</text>
      <text x="100" y="171" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">SW-A</text>

      <rect x="350" y="138" width="60" height="44" rx="8" fill="#0f2040" stroke="#2563a8" strokeWidth="1.5" />
      <text x="380" y="157" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">DIST</text>
      <text x="380" y="171" textAnchor="middle" fill="#5fa5f9" fontSize="8" fontFamily="monospace">SW-B</text>

      {/* Access Switches */}
      {[
        { x: 32, y: 238, label: "ACC-1" },
        { x: 142, y: 238, label: "ACC-2" },
        { x: 282, y: 238, label: "ACC-3" },
        { x: 392, y: 238, label: "ACC-4" },
      ].map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width="56" height="36" rx="6" fill="#162c54" stroke="#2563a8" strokeWidth="1" />
          <text x={n.x + 28} y={n.y + 22} textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="monospace">{n.label}</text>
        </g>
      ))}

      {/* Animated packet */}
      <motion.circle
        cx={240} cy={60}
        r={4}
        fill="#5fa5f9"
        animate={{ cx: [240, 100, 60], cy: [60, 160, 260], opacity: [1, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle
        cx={240} cy={60}
        r={4}
        fill="#f97316"
        animate={{ cx: [240, 380, 420], cy: [60, 160, 260], opacity: [1, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
      />

      {/* Labels */}
      <text x="240" y="30" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">INTERNET</text>
      <text x="240" y="318" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">ACCESS LAYER — END DEVICES</text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(180deg, #050d1a 0%, #0a1628 60%, #0f2040 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(29,111,230,0.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(29,111,230,0.12)",
                border: "1px solid rgba(29,111,230,0.3)",
                borderRadius: 999,
                padding: "6px 14px",
                marginBottom: 24,
              }}
            >
              <Layers size={13} color="#5fa5f9" />
              <span style={{ color: "#5fa5f9", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
                16-WEEK STRUCTURED PROGRAM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                color: "#fff",
                fontSize: "clamp(2rem, 4vw, 3.1rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Network Engineering &<br />
              <span style={{ color: "#5fa5f9" }}>Infrastructure Bootcamp</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              style={{ color: "#93c5fd", fontSize: 15, fontWeight: 600, marginBottom: 16, letterSpacing: "0.01em" }}
            >
              Learn → Build → Troubleshoot → Think Like an Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}
            >
              A structured technical learning ecosystem designed to bridge academic networking concepts with real-world infrastructure engineering practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a
                href="#roadmap"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#1d6fe6",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 22px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1558c0";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1d6fe6";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
              >
                View Learning Roadmap <ArrowRight size={15} />
              </a>
              <a
                href="#syllabus"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 22px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)")}
              >
                <BookOpen size={15} /> Explore Curriculum
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}
            >
              {[
                { value: "16", label: "Weeks" },
                { value: "32", label: "Sessions" },
                { value: "11", label: "Modules" },
                { value: "100%", label: "Hands-on" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: "#fff", fontSize: 22, fontWeight: 800 }}>{s.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Topology */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              background: "rgba(15,32,64,0.5)",
              border: "1px solid rgba(29,111,230,0.18)",
              borderRadius: 16,
              padding: 28,
            }}
            className="hero-visual"
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Network size={14} color="#5fa5f9" />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "monospace", letterSpacing: "0.06em" }}>
                ENTERPRISE TOPOLOGY — 3-TIER ARCHITECTURE
              </span>
            </div>
            <NetworkTopology />
            <div style={{ display: "flex", gap: 16, marginTop: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { color: "#1d6fe6", label: "Core Layer" },
                { color: "#2563a8", label: "Distribution" },
                { color: "#162c54", label: "Access Layer" },
              ].map((l) => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color, border: "1px solid rgba(255,255,255,0.2)" }} />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "monospace" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}
      >
        <ChevronDown size={20} color="rgba(255,255,255,0.3)" />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { display: none; }
        }
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
