"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TextScramble from "../ui/TextScramble";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative z-10 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-6 mb-8"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-800 border-2 border-white/10 overflow-hidden animate-morph relative shadow-[0_0_30px_rgba(249,115,22,0.2)]">
           {/* Replace with your actual image */}
           <img 
  src="/profile.jpg" 
  alt="Bamise" 
  className="w-full h-full object-cover"
/> </div>
        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Origbs.Dev</span>
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
        <TextScramble text="ORIGBOGE BAMISE" className="block text-white" />
        <TextScramble text="AKINFIRESOYE" className="block text-neutral-600" />
      </h1>

      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="text-xl text-neutral-400 max-w-xl leading-relaxed"
      >
        Fullstack Developer. Problem Solver. Creative Mind. 
        Specialized in liquid interfaces and immersive web experiences.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="mt-12 flex items-center gap-4 text-sm font-mono text-neutral-500 animate-pulse"
      >
        <ArrowDown size={20} /> SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}