"use client";

import { useEffect, useRef } from "react";
import {
  Server, Database, Globe, Shield, Layout, Wrench,
} from "lucide-react";

const skillGroups = [
  {
    label: "Backend Development",
    icon: <Server size={18} />,
    color: "var(--accent)",
    bg: "var(--accent-muted)",
    skills: ["Python", "Django", "Django REST Framework", "ORM & Querysets", "Class-Based Views", "Middleware"],
  },
  {
    label: "Database Technologies",
    icon: <Database size={18} />,
    color: "#10b981",
    bg: "color-mix(in srgb, #10b981 15%, transparent)",
    skills: ["PostgreSQL", "MySQL", "Database Design", "Migrations", "Query Optimization"],
  },
  {
    label: "API Development",
    icon: <Globe size={18} />,
    color: "#f59e0b",
    bg: "color-mix(in srgb, #f59e0b 15%, transparent)",
    skills: ["REST APIs", "JWT Authentication", "OAuth 2.0", "Serialization", "API Design", "Postman"],
  },
  {
    label: "Security Concepts",
    icon: <Shield size={18} />,
    color: "var(--security)",
    bg: "var(--security-muted)",
    skills: ["Penetration Testing", "Bug Bounty Hunting", "OWASP Top 10", "Web App Security", "Vulnerability Assessment"],
  },
  {
    label: "Frontend Foundations",
    icon: <Layout size={18} />,
    color: "#ec4899",
    bg: "color-mix(in srgb, #ec4899 15%, transparent)",
    skills: ["JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design", "Bootstrap"],
  },
  {
    label: "Tools & Workflow",
    icon: <Wrench size={18} />,
    color: "#64748b",
    bg: "color-mix(in srgb, #64748b 15%, transparent)",
    skills: ["Git & GitHub", "Linux / Bash", "VS Code", "Command Line", "Virtual Environments"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      style={{
        padding: "6rem 1.5rem",
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            02 / Skills
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              marginTop: "0.5rem",
              lineHeight: 1.1,
            }}
          >
            What I work with
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginTop: "0.75rem",
              fontSize: "1rem",
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            A focused skill set built through building real projects, not collecting certificates.
          </p>
        </div>

        <div
          className="section-fade skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            transitionDelay: "0.1s",
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: group.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: group.color,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {group.label}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      background: "var(--muted)",
                      border: "1px solid var(--border)",
                      fontSize: "0.78rem",
                      color: "var(--muted-foreground)",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = group.color;
                      (e.target as HTMLElement).style.borderColor = group.color;
                      (e.target as HTMLElement).style.background = group.bg;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--muted-foreground)";
                      (e.target as HTMLElement).style.borderColor = "var(--border)";
                      (e.target as HTMLElement).style.background = "var(--muted)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
