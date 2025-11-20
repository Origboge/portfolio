"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            The Backstory
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            From Microscopes <br />
            <span className="text-neutral-600">to VS Code.</span>
          </h3>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-neutral-400 text-lg leading-relaxed"
        >
          <p>
            My journey started in <strong className="text-white">Microbiology</strong>, where I learned analytical rigor and the importance of attention to detail. 
            Today, I apply that same precision to building digital experiences.
          </p>
          <p>
            I specialize in crafting responsive, user-focused websites using modern technologies like Next.js and Framer Motion. 
            I don't just write code; I engineer solutions that scale.
          </p>
          
          {/* Resume Download Button */}
          {/* Make sure you put your PDF in the 'public' folder named 'Bamise_CV.pdf' */}
          <a 
            href="/Bamise_CV.pdf" 
            download 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-white transition-colors mt-4 cursor-hover group font-medium"
          >
            <Download size={20} className="group-hover:animate-bounce" /> 
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}