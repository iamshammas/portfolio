"use client";

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Certified Penetration Tester (CPT)",
    org: "RedTeam Hacker Academy",
    color: "var(--security)",
    bg: "var(--security-muted)",
  },
  {
    name: "Bug Bounty Hunter (BBH)",
    org: "RedTeam Hacker Academy",
    color: "var(--security)",
    bg: "var(--security-muted)",
  },
  {
    name: "Python Django",
    org: "Avodha",
    color: "var(--accent)",
    bg: "var(--accent-muted)",
  },
];

export default function Experience() {
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
      id="experience"
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
            04 / Experience
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
            Background
          </h2>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }} className="exp-grid">
          {/* Job */}
          <div
            className="section-fade card-hover"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
              transitionDelay: "0.1s",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--accent-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                <Briefcase size={20} />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                      }}
                    >
                      Academic Advisor
                    </h3>
                    <p
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        marginTop: "0.2rem",
                      }}
                    >
                      Bridgeon Skillversity
                    </p>
                  </div>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      background: "color-mix(in srgb, var(--success) 15%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--success) 30%, transparent)",
                      fontSize: "0.78rem",
                      color: "var(--success)",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Aug 2025 – Present
                  </span>
                </div>
              </div>
            </div>

            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              Working in an EdTech environment that runs technical training programs in Python, 
              Django, DRF, and PostgreSQL. My daily work involves understanding learner 
              progress, communicating technical concepts clearly, and improving how 
              the academic process works.
            </p>

            <div style={{ display: "grid", gap: "0.6rem" }} className="exp-bullets">
              {[
                { label: "Analytical thinking", desc: "Identifying learning gaps through performance analysis and implementing corrective actions" },
                { label: "Clear communication", desc: "Delivering career guidance including resume preparation and interview readiness coaching" },
                { label: "Process improvement", desc: "Coordinating with trainers and operations to improve academic workflows and outcomes" },
                { label: "Mentoring", desc: "Supporting students through technical and professional development challenges" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "var(--muted)",
                    border: "1px solid var(--border)",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "var(--foreground)", fontWeight: 600 }}>
                    {item.label}:{" "}
                  </span>
                  <span style={{ color: "var(--muted-foreground)" }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: "1.5rem" }} className="edu-cert-grid">
            {/* Education */}
            <div
              className="section-fade card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.75rem",
                transitionDelay: "0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "11px",
                    background: "color-mix(in srgb, #f59e0b 15%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f59e0b",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    Education
                  </h3>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  B.Tech in Information Technology
                </p>
                <p style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 600 }}>
                  Anna University
                </p>
                <p
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.825rem",
                    marginTop: "0.25rem",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  2021 – 2025
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div
              className="section-fade card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.75rem",
                transitionDelay: "0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "11px",
                    background: "var(--security-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--security)",
                    flexShrink: 0,
                  }}
                >
                  <Award size={20} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  Certifications
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "8px",
                      background: cert.bg,
                      border: `1px solid color-mix(in srgb, ${cert.color} 25%, transparent)`,
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: cert.color,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {cert.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--muted-foreground)",
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      {cert.org}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .exp-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
          .exp-bullets { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
