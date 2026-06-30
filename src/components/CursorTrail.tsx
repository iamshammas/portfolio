"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Disable on touch devices — no real cursor to track
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      window.removeEventListener("resize", resize);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Spawn a small burst of particles on movement
      const count = 2;
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY, theme));
      }

      // Cap total particle count for performance
      if (particlesRef.current.length > 150) {
        particlesRef.current.splice(0, particlesRef.current.length - 150);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    function createParticle(x: number, y: number, currentTheme: string): Particle {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.6 + 0.2;
      // Cyan/blue to violet hue range — matches accent + security colors
      const hue = currentTheme === "dark" ? 195 + Math.random() * 70 : 195 + Math.random() * 70;
      return {
        x,
        y,
        size: Math.random() * 2.5 + 1,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed - 0.3,
        life: 1,
        maxLife: Math.random() * 40 + 40,
        hue,
      };
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * 0.7;
        const radius = p.size * (0.6 + p.life * 0.6);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 90%, 60%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: theme === "dark" ? "screen" : "multiply",
      }}
      aria-hidden="true"
    />
  );
}