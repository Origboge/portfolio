"use client";
import { useEffect, useRef } from "react";

export default function LiquidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    class Particle {
      x: number; y: number; vx: number; vy: number; size: number; color: string;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 120 + 60; // Big blobs
        // RESTORED VIBRANT COLORS HERE:
        this.color = ['#f97316', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off walls
        if (this.x < -this.size || this.x > width + this.size) this.vx *= -1;
        if (this.y < -this.size || this.y > height + this.size) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for(let i=0; i<15; i++) { // 15 blobs for good coverage
        particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if(!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Added blur here directly to ensure the "Liquid" look works
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 blur-[80px] opacity-60" />;
}