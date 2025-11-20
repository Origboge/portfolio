"use client";
import { motion } from "framer-motion";
import TextScramble from "../ui/TextScramble";

const experiences = [
  {
    year: "Sep 2025 — Present",
    role: "Scientific Officer",
    company: "Water Corporation",
    location: "Nigeria",
    desc: "Microbiologist role involving data analysis and scientific research."
  },
  {
    year: "Feb 2024 — Jan 2025",
    role: "NYSC Member",
    company: "Oyo State Mineral Development Agency",
    location: "Ibadan, Oyo State",
    desc: "Assisted in administrative and data-related tasks. Supported cross-functional teams with documentation, research, and community development programs."
  },
  {
    year: "Aug 2023 — Present",
    role: "Frontend Developer",
    company: "MikeFlora Schools (Freelance)",
    location: "Remote / Hybrid",
    desc: "Developing and maintaining web interfaces using HTML, Vite, and React. Optimized site performance and implemented responsive designs for educational platforms."
  },
  {
    year: "Jul 2020 — Present",
    role: "Social Media Manager",
    company: "Faybanet",
    location: "Nigeria",
    desc: "Managing digital presence, content strategy, and audience engagement to drive brand awareness and growth."
  },
  {
    year: "Jun 2018 — Nov 2018",
    role: "Internship Trainee",
    company: "Water Corporation",
    location: "On-site",
    desc: "Gained foundational experience in laboratory processes and industrial workflows during undergraduate internship."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 border-l-4 border-orange-500 pl-6">
        <TextScramble text="Experience" />
      </h2>
      
      <div className="space-y-12 border-l border-white/10 ml-2 pl-8">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-4 md:gap-8 group relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700 group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors" />

            <div className="md:col-span-3 text-neutral-500 font-mono text-sm pt-1 group-hover:text-orange-500 transition-colors">
              {exp.year}
            </div>
            <div className="md:col-span-9">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <div className="flex flex-wrap gap-2 mb-3 items-center">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">{exp.company}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs text-neutral-500">{exp.location}</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}