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
            // Define animation states here (Parent)
            initial="inactive"
            whileInView="active"
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }} // Active in middle 60% of screen
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-12 gap-4 md:gap-8 group relative"
          >
            {/* 1. Timeline Dot (Child) */}
            {/* It inherits 'active' state from parent automatically */}
            <motion.div 
              variants={{
                inactive: { backgroundColor: "#171717", borderColor: "#404040" },
                active: { backgroundColor: "#f97316", borderColor: "#f97316" }
              }}
              transition={{ duration: 0.3 }}
              className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2" 
            />

            {/* 2. Year (Child) */}
            <motion.div 
              variants={{
                inactive: { color: "#737373" }, // Neutral Gray
                active: { color: "#f97316" }     // Orange
              }}
              transition={{ duration: 0.3 }}
              className="md:col-span-3 font-mono text-sm pt-1 font-bold"
            >
              {exp.year}
            </motion.div>

            {/* 3. Details */}
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