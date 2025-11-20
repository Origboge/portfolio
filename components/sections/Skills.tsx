"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: { color: "#60a5fa", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML","Javascript",], },
  Backend: { color: "#34d399", items: ["Node.js", "Python", "Firebase", "MongoDB"] },
  // DevOps: { color: "#fb923c", items: ["Docker", "AWS", "Kubernetes", "CI/CD"] },
  Tools: { color: "#a78bfa", items: ["Git", "Figma", "Webpack"] },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Technical Arsenal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, data], i) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-neutral-500">{category}</h4>
            <div className="space-y-3">
              {data.items.map((item) => (
                <div 
                  key={item} 
                  className="p-3 rounded border border-white/5 bg-white/5 hover:border-[--color] transition-colors cursor-hover group"
                  style={{ "--color": data.color } as React.CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-300 group-hover:text-white">{item}</span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color, boxShadow: `0 0 10px ${data.color}` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}