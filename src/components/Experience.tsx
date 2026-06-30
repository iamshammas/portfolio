"use client";

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Certified Penetration Tester (CPT)",
    org: "RedTeam Hacker Academy",
    date: "Jan 2023",
    color: "var(--security)",
    bg: "var(--security-muted)",
  },
  {
    name: "Bug Bounty Hunter (BBH)",
    org: "RedTeam Hacker Academy",
    date: "Mar 2023",
    color: "var(--security)",
    bg: "var(--security-muted)",
  },
  {
    name: "Python Django",
    org: "Avodha",
    date: "Sep 2024",
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
                      background: "var(--muted)",
                      border: "1px solid var(--border)",
                      fontSize: "0.78rem",
                      color: "var(--muted-foreground)",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Aug 2025 – Jun 2026
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
              Worked in an EdTech environment that ran technical training programs in Python,
              Django, DRF, and PostgreSQL. My day-to-day involved understanding learner
              progress, communicating technical concepts clearly, and improving how
              the academic process worked.
            </p>

            <div style={{ display: "grid", gap: "0.6rem" }} className="exp-bullets">
              {[
                { label: "Analytical thinking", desc: "Identified learning gaps through performance analysis and implemented corrective actions" },
                { label: "Clear communication", desc: "Delivered career guidance including resume preparation and interview readiness coaching" },
                { label: "Process improvement", desc: "Coordinated with trainers and operations to improve academic workflows and outcomes" },
                { label: "Mentoring", desc: "Supported students through technical and professional development challenges" },
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
                  Oct 2021 – Oct 2025
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "0.5rem",
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
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--muted-foreground)",
                          fontFamily: "var(--font-jetbrains), monospace",
                          whiteSpace: "nowrap",
                          marginTop: "0.1rem",
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>
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