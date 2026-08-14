"use client";

import { useEffect, useRef } from "react";
import { GitBranch, ExternalLink, ShoppingCart, Lock, Package, Bell, Layers, Clock, Database, FileText, Shield, BarChart3 } from "lucide-react";

const soledropFeatures = [
  { icon: <Lock size={14} />, text: "Custom authentication system" },
  { icon: <Package size={14} />, text: "Product, variant, and inventory management" },
  { icon: <ShoppingCart size={14} />, text: "Shopping cart, checkout, and order management" },
  { icon: <Bell size={14} />, text: "Telegram notifications for new orders & status updates" },
];

const soledropStack = ["Python", "Django", "PostgreSQL", "Cloudinary", "JavaScript", "Render"];

const stockledgerFeatures = [
  { icon: <Shield size={14} />, text: "100% multi-tenant isolation with JWT auth & role-based access control" },
  { icon: <Database size={14} />, text: "FIFO inventory costing + append-only audit ledger for transaction immutability" },
  { icon: <FileText size={14} />, text: "Automated PDF invoicing with WeasyPrint, eliminating manual spreadsheets" },
  { icon: <BarChart3 size={14} />, text: "Reporting suite: stock valuation, sales analytics, and low-stock alerts" },
];

const stockledgerStack = ["Python", "Django", "DRF", "PostgreSQL", "JWT", "WeasyPrint"];

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

      {/* StockLedger — Featured Project */}
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
                  Featured Project · REST API
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
                StockLedger
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                Multi-Tenant Inventory & Billing System for Wholesale Distributors
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://github.com/iamshammas/stockledger"
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
            A production REST API built with Django and DRF for wholesale distributors.
            Features 8+ endpoints with complete multi-tenant isolation, FIFO inventory
            costing, transactional financial workflows (invoices, payments, stock reversal),
            and automated PDF invoicing — replacing manual spreadsheet dependency.
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
              {stockledgerFeatures.map((f) => (
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

          {/* Stack + Architecture */}
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
                {stockledgerStack.map((t) => (
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
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Layers size={14} /> Architecture Highlight
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Built with a service layer pattern separating business logic from
                views. PostgreSQL multi-tenant schema with transactional financial
                workflows ensures data integrity. Append-only audit ledger guarantees
                100% transaction immutability across all stock movements, preventing
                reconciliation errors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SoleDrop */}
      <div
        className="section-fade"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "1.5rem",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          transitionDelay: "0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px -12px color-mix(in srgb, #10b981 15%, transparent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "linear-gradient(135deg, color-mix(in srgb, #10b981 10%, var(--muted)), color-mix(in srgb, var(--accent) 6%, var(--muted)))",
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
                  background: "color-mix(in srgb, #10b981 15%, transparent)",
                  border: "1px solid color-mix(in srgb, #10b981 30%, transparent)",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#10b981",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontWeight: 600,
                  }}
                >
                  Deployed · Full-Stack
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
                SoleDrop
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                E-Commerce Shoe Selling Platform
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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
                  (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
                  (e.currentTarget as HTMLElement).style.color = "#10b981";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                }}
              >
                <GitBranch size={15} /> Code
              </a>
              <a
                href="https://soledrop.onrender.com"
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
                  (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
                  (e.currentTarget as HTMLElement).style.color = "#10b981";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                }}
              >
                <ExternalLink size={15} /> Live Demo
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
            A full-stack Django e-commerce application built and deployed as a real,
            production-style project. SoleDrop handles authentication, inventory across
            product variants, the full cart-to-order lifecycle, and real-time order
            notifications via Telegram.
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
              {soledropFeatures.map((f) => (
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
                  <span style={{ color: "#10b981", marginTop: "1px", flexShrink: 0 }}>
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
                {soledropStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "100px",
                      background: "color-mix(in srgb, #10b981 15%, transparent)",
                      border: "1px solid color-mix(in srgb, #10b981 30%, transparent)",
                      fontSize: "0.8rem",
                      color: "#10b981",
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
                Key Lesson
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Taking SoleDrop from local development to a real deployment surfaced
                problems tutorials never cover — media storage with Cloudinary,
                environment configuration, and debugging issues that only show up
                in production. That gap taught me more about real-world Django
                development than any course did.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Currently learning card */}
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
              Currently Learning
            </span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Docker, CI/CD, Redis, Celery & AWS
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginTop: "0.25rem", lineHeight: 1.6 }}>
            Expanding into DevOps and infrastructure — learning containerization with
            Docker, CI/CD pipelines for automated deployments, Redis for caching and
            message brokering, Celery for async task processing, and AWS for cloud services.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
            {["Docker", "CI/CD Pipelines", "Redis", "Celery", "AWS"].map((t) => (
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
          .stack-lessons { grid-template-columns: 1fr !important; }
          .project-inner { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}