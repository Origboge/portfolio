"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import TextScramble from "../ui/TextScramble";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* 1. University Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-orange-500" />
            <TextScramble text="Education" />
          </h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-orange-500 font-bold text-lg">FUTA</span>
              <span className="text-xs font-mono text-neutral-500">2015 — 2019</span>
            </div>
            <h4 className="text-white font-medium text-xl mb-1">Federal University of Technology Akure</h4>
            <p className="text-neutral-400">Bachelor of Technology (B.Tech)</p>
            <p className="text-neutral-500 text-sm mt-2">Microbiology, General</p>
          </motion.div>
        </div>

        {/* 2. Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-orange-500" />
            <TextScramble text="Certifications" />
          </h3>

          <div className="space-y-4">
            {/* Cert 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-neutral-900/50 border border-white/5 flex gap-4 items-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                G
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Google Prompting Essentials</h4>
                <div className="flex gap-2 text-xs text-neutral-500">
                  <span>Google</span> • <span>Nov 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Cert 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-neutral-900/50 border border-white/5 flex gap-4 items-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xs">
                JH
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">HTML, CSS, and Javascript</h4>
                <div className="flex gap-2 text-xs text-neutral-500">
                  <span>Johns Hopkins University</span> • <span>Apr 2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}