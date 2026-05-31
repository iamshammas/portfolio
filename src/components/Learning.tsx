"use client";

import { useEffect, useRef } from "react";
import { Code2, Shield, BookOpen, TrendingUp, ExternalLink } from "lucide-react";

const timeline = [
  { year: "2021", label: "Started B.Tech IT", note: "Anna University" },
  { year: "2023", label: "Python Django Cert", note: "Avodha — formal training" },
  { year: "2024", label: "CPT Certification", note: "RedTeam Hacker Academy" },
  { year: "2024", label: "Bug Bounty Hunter (BBH)", note: "RedTeam Hacker Academy" },
  { year: "2025", label: "Built Soledrop", note: "Full Django e-commerce platform" },
  { year: "Now", label: "Building DRF API Project", note: "REST backend, JWT, PostgreSQL", active: true },
];

const currentlyLearning = [
  { icon: <Code2 size={16} />, label: "DRF API Architecture", desc: "Designing RESTful backends meant to be consumed by separate frontends", color: "var(--accent)" },
  { icon: <Shield size={16} />, label: "Web App Security", desc: "Revisiting OWASP Top 10 from a developer's perspective", color: "var(--security)" },
  { icon: <TrendingUp size={16} />, label: "System Design Basics", desc: "Reading about how systems scale, from monolith to microservices", color: "#f59e0b" },
  { icon: <BookOpen size={16} />, label: "Algorithm Practice", desc: "Daily LeetCode problems focused on data structures and problem solving", color: "#10b981" },
];

export default function Learning() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="learning"
      ref={ref}
      style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div className="section-fade" style={{ marginBottom: "3rem" }}>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          05 / Learning
        </span>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            marginTop: "0.5rem",
          }}
        >
          The journey
        </h2>
        <p style={{ color: "var(--muted-foreground)", marginTop: "0.75rem", maxWidth: "500px", lineHeight: 1.6 }}>
          Learning isn&apos;t something I do when required. It&apos;s how I spend time.
        </p>
      </div>

      <div style={{ display: "grid", gap: "2rem" }} className="learning-grid">
        {/* Timeline */}
        <div className="section-fade" style={{ transitionDelay: "0.1s" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Trajectory
          </h3>
          <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "6px",
                top: "8px",
                bottom: "8px",
                width: "1px",
                background: "linear-gradient(to bottom, var(--accent), var(--security))",
                opacity: 0.3,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "-1.5rem",
                      top: "6px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: item.active ? "var(--accent)" : "var(--border)",
                      border: `2px solid ${item.active ? "var(--accent)" : "var(--muted-foreground)"}`,
                      animation: item.active ? "pulse-glow 2s ease infinite" : "none",
                    }}
                  />
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains), monospace",
                          fontSize: "0.75rem",
                          color: item.active ? "var(--accent)" : "var(--muted-foreground)",
                          fontWeight: 600,
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: item.active ? "var(--foreground)" : "var(--foreground)",
                        }}
                      >
                        {item.label}
                      </span>
                      {item.active && (
                        <span
                          style={{
                            padding: "0.1rem 0.5rem",
                            borderRadius: "100px",
                            background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                            fontSize: "0.7rem",
                            color: "var(--accent)",
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontWeight: 600,
                          }}
                        >
                          now
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.825rem", color: "var(--muted-foreground)", marginTop: "0.2rem" }}>
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently learning + LeetCode */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* LeetCode */}
          <div
            className="section-fade card-hover"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.5rem",
              transitionDelay: "0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "color-mix(in srgb, #f59e0b 15%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Code2 size={18} style={{ color: "#f59e0b" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                    LeetCode Practice
                  </h3>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.78rem", color: "var(--accent)" }}>
                    @iamshammas
                  </p>
                </div>
              </div>
              <a
                href="https://leetcode.com/iamshammas"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem 0.875rem",
                  borderRadius: "8px",
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)";
                }}
              >
                <ExternalLink size={13} /> Profile
              </a>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              Actively solving algorithmic problems to build fluency in data structures,
              dynamic programming, and problem-solving patterns. Focused consistency
              over volume.
            </p>
          </div>

          {/* Currently learning cards */}
          <div
            className="section-fade"
            style={{
              transitionDelay: "0.3s",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.875rem",
            }}
          >
            {currentlyLearning.map((item) => (
              <div
                key={item.label}
                className="card-hover"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: `color-mix(in srgb, ${item.color} 15%, transparent)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    marginBottom: "0.875rem",
                  }}
                >
                  {item.icon}
                </div>
                <h4 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .learning-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
