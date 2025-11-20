"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    // --- CONFIGURATION ---
    const TRAIL_LENGTH = 20;
    const TRAIL_COLOR = "249, 115, 22"; // Orange (RGB)
    const BLOB_COUNT = 8;

    // --- STATE ---
    let particles: any[] = [];
    let blobs: any[] = [];
    // Track mouse OR touch position
    const pointer = { x: -100, y: -100, active: false };

    // --- CLASSES ---

    // 1. The Ambient Blobs (Background)
    class Blob {
      x: number; y: number; vx: number; vy: number; size: number; color: string;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 150 + 100; // Big blobs
        // Darker, subtle colors for background
        this.color = ['#1a1a1a', '#222222', '#171717'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off walls
        if (this.x < -this.size || this.x > width + this.size) this.vx *= -1;
        if (this.y < -this.size || this.y > height + this.size) this.vy *= -1;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    // 2. The Liquid Trail (Follows Finger/Mouse)
    class TrailPoint {
      x: number; y: number; age: number; force: number;
      constructor(x: number, y: number, force: number) {
        this.x = x;
        this.y = y;
        this.age = 0; // How old the point is
        this.force = force; // How fast the mouse was moving
      }
      draw() {
        const opacity = 1 - this.age / TRAIL_LENGTH; // Fade out
        const size = (1 - this.age / TRAIL_LENGTH) * 15; // Shrink
        
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${TRAIL_COLOR}, ${opacity * 0.6})`;
        ctx!.fill();
      }
    }

    // --- INITIALIZE ---
    for(let i=0; i<BLOB_COUNT; i++) blobs.push(new Blob());

    // --- INTERACTION HANDLERS ---
    const handleMove = (x: number, y: number) => {
        // Calculate speed roughly
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const speed = Math.sqrt(dx*dx + dy*dy);
        
        pointer.x = x;
        pointer.y = y;
        pointer.active = true;

        // Add a new point to the trail
        if(speed > 1) { // Only add if moving
            particles.push(new TrailPoint(x, y, speed));
        }
    };

    // Desktop
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    
    // Mobile (Touch)
    const onTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    // --- ANIMATION LOOP ---
    const animate = () => {
      ctx!.clearRect(0, 0, width, height);
      
      // 1. Draw Ambient Background Blobs (Blurry layer)
      ctx!.filter = 'blur(60px)'; // Heavy blur for liquid feel
      blobs.forEach(b => { b.update(); b.draw(); });
      
      // 2. Draw Interaction Trail (Sharper layer)
      ctx!.filter = 'blur(10px)'; // Slight blur for glow
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.age++;
        p.draw();
        
        // Remove old particles
        if (p.age > TRAIL_LENGTH) {
            particles.splice(i, 1);
            i--;
        }
      }

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]" />;
}