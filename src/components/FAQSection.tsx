"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#f8f9fb", padding: "96px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(37,99,168,0.07)", color: "#1d6fe6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>FAQ</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            Everything you need to know before enrolling.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{
                  background: "#fff",
                  border: isOpen ? "1.5px solid #1d6fe6" : "1.5px solid #e2e8f0",
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: isOpen ? "#1d6fe6" : "#0f172a", lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  {isOpen
                    ? <ChevronUp size={16} color="#1d6fe6" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={16} color="#94a3b8" style={{ flexShrink: 0 }} />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 24px 20px" }}>
                        <div style={{ height: 1, background: "#f1f4f8", marginBottom: 16 }} />
                        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75 }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
