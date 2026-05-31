"use client";

import { useEffect, useRef } from "react";
import { GitBranch, ExternalLink, ShoppingCart, Lock, Package, Clock } from "lucide-react";

const features = [
  { icon: <Lock size={14} />, text: "JWT-based user authentication & session management" },
  { icon: <Package size={14} />, text: "Product catalog with category filtering & search" },
  { icon: <ShoppingCart size={14} />, text: "Cart system with persistent state across sessions" },
  { icon: <Clock size={14} />, text: "Full order workflow: placement, history & COD checkout" },
];

const techStack = ["Python", "Django", "PostgreSQL", "JavaScript", "Bootstrap", "HTML/CSS"];

export default function Projects() {
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
      id="projects"
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
          03 / Projects
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
          Things I&apos;ve built
        </h2>
      </div>

      {/* Featured Project */}
      <div
        className="section-fade"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "1.5rem",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          transitionDelay: "0.1s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px -12px color-mix(in srgb, var(--accent) 15%, transparent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, var(--muted)), color-mix(in srgb, var(--security) 8%, var(--muted)))",
            padding: "2rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.2rem 0.75rem",
                  borderRadius: "100px",
                  background: "var(--accent-muted)",
                  border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontWeight: 600,
                  }}
                >
                  Featured Project
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Soledrop
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                E-Commerce Platform
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://github.com/iamshammas/soledrop"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontSize: "0.85rem",
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
                  (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                }}
              >
                <GitBranch size={15} /> Code
              </a>
            </div>
          </div>

          <p
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              maxWidth: "700px",
            }}
          >
            A full-stack e-commerce web application built with Django, implementing
            an end-to-end shopping experience from product browsing to order placement.
            Built to practice real-world Django architecture: models, views, forms,
            authentication, and template rendering working together as a cohesive system.
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "2rem",
            display: "grid",
            gap: "2rem",
          }}
          className="project-inner"
        >
          {/* Features */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Core Features
            </h4>
            <div style={{ display: "grid", gap: "0.75rem" }} className="features-grid">
              {features.map((f) => (
                <div
                  key={f.text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.875rem 1rem",
                    borderRadius: "8px",
                    background: "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--accent)", marginTop: "1px", flexShrink: 0 }}>
                    {f.icon}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack + Lessons */}
          <div style={{ display: "grid", gap: "1.5rem" }} className="stack-lessons">
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Tech Stack
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {techStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "100px",
                      background: "var(--accent-muted)",
                      border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Key Lessons
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Building Soledrop taught me how Django&apos;s ORM handles complex relationships
                between products, categories, and orders. I learned to think about
                state management on the server side — something that doesn&apos;t come up in
                tutorials. The auth system reinforced why secure session handling matters
                in real applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming project card */}
      <div
        className="section-fade"
        style={{
          background: "var(--card)",
          border: "1px dashed var(--border)",
          borderRadius: "16px",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          transitionDelay: "0.2s",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Clock size={20} style={{ color: "var(--muted-foreground)" }} />
        </div>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.2rem 0.6rem",
              borderRadius: "100px",
              background: "color-mix(in srgb, var(--warning) 15%, transparent)",
              border: "1px solid color-mix(in srgb, var(--warning) 30%, transparent)",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--warning)",
                display: "inline-block",
                animation: "blink 1s ease infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--warning)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontWeight: 600,
              }}
            >
              In Progress
            </span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            DRF REST API — Standalone Backend
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginTop: "0.25rem", lineHeight: 1.6 }}>
            A RESTful backend API built with Django REST Framework, JWT auth, and PostgreSQL — 
            designed to be consumed by a separate frontend. Documenting the build publicly on GitHub.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
            {["DRF", "JWT", "PostgreSQL", "REST API"].map((t) => (
              <span
                key={t}
                style={{
                  padding: "0.2rem 0.6rem",
                  borderRadius: "100px",
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .stack-lessons { grid-template-columns: 1fr 1fr !important; }
          .project-inner { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
