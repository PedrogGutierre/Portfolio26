"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const isLight = resolvedTheme === "light";
    const lineRgb = isLight ? "0, 0, 0" : "255, 255, 255";

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 2 + 0.5;
      }

      update() {
        if (this.x <= 0) { this.x = 0; this.vx *= -1; }
        else if (this.x >= canvas!.width) { this.x = canvas!.width; this.vx *= -1; }

        if (this.y <= 0) { this.y = 0; this.vy *= -1; }
        else if (this.y >= canvas!.height) { this.y = canvas!.height; this.vy *= -1; }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ef4444";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth || window.innerWidth;
      canvas.height = parent?.clientHeight || window.innerHeight;

      initParticles();
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${0.15 - dist / 1100})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mdx = particles[i].x - mouseRef.current.x;
          const mdy = particles[i].y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 220) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${0.8 - mdist / 220})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();

            const force = (220 - mdist) / 220;
            particles[i].x += (mdx / mdist) * force * 2;
            particles[i].y += (mdy / mdist) * force * 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, mounted]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}