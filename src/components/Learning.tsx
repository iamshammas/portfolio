"use client";

import { useEffect, useRef } from "react";
import { Code2, Database, ExternalLink, Container, Cloud, Zap } from "lucide-react";

const currentlyLearning = [
  { icon: <Container size={16} />, label: "Docker", desc: "Containerization for consistent development and deployment environments", color: "var(--accent)" },
  { icon: <Zap size={16} />, label: "CI/CD Pipelines", desc: "Automating build, test, and deployment workflows for continuous delivery", color: "#f59e0b" },
  { icon: <Database size={16} />, label: "Redis & Celery", desc: "Caching, message brokering with Redis, and async task processing with Celery", color: "#10b981" },
  { icon: <Cloud size={16} />, label: "AWS", desc: "Cloud services and infrastructure for scalable application deployment", color: "var(--security)" },
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

      <div style={{ display: "grid", gap: "1.5rem" }} className="learning-grid">
        {/* LeetCode */}
        <div
          className="section-fade card-hover"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "1.5rem",
            transitionDelay: "0.1s",
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
            Splitting practice between algorithm problems and SQL queries to
            strengthen both problem-solving and database skills alongside
            building projects.
          </p>
        </div>

        {/* Currently learning cards */}
        <div
          className="section-fade"
          style={{
            transitionDelay: "0.2s",
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

      <style>{`
        @media (min-width: 900px) {
          .learning-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}