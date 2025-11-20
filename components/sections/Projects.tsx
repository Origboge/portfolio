"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// --- YOUR PROJECT DATA ---
const projects = [
  {
    title: "FMYD Circular Economy Youth Empowerment",
    category: "Vite / Firebase",
    description: "Waste-to-wealth initiative empowering Nigerian youths by transforming waste into eco-friendly resources and products.",
    tech: ["HTML", "Tailwind CSS", "Vite", "javascript", "Firebase"],
    image: "/fmyd.png",
    liveUrl: "https://origboge.github.io/FMYD-CIRCULAR-ECO/index.html",
    githubUrl: "https://origboge.github.io/FMYD-CIRCULAR-ECO/index.html",
  },
  {
    title: "Mike Flora Schools",
    category: "React",
    description: "A minimalist school website designed to showcase vital information about the nursery and primary school, complete with an about page, photo gallery, and admission details—all in a clean, user-friendly layout.",
    tech: ["React", "Vite", "CSS", "javascript"],
    image: "/mikeflora.png",
    liveUrl: "https://origboge.github.io/MIKEFLORA/",
    githubUrl: "https://origboge.github.io/MIKEFLORA/",
  },
  {
    title: "The Support System",
    category: "React/Vite",
    description: "A Web3 creators & builders hub where you grow",
    tech: ["React", "Vite", "CSS", "javascript"],
    image: "/ssweb.png",
    liveUrl: "https://thesupportsystem.vercel.app/",
    githubUrl: "https://thesupportsystem.vercel.app/",
  },
  {
    title: "Writer's Portfolio",
    category: "React/Vite",
    description: "An online portfolio showcasing the works and services of a professional writer",
    tech: ["React", "Vite", "CSS", "javascript"],
    image: "/ajah.png",
    liveUrl: "https://ajah101.vercel.app/",
    githubUrl: "https://ajah101.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Selected Works
        </h2>
        <span className="text-orange-500 font-mono hidden md:block text-lg">
          (0{projects.length})
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => {
          // Logic: If liveUrl exists, the card clicks there. Otherwise, GitHub.
          const mainLink = project.liveUrl || project.githubUrl || "#";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 h-[450px] flex flex-col"
            >
              {/* 
                 1. THE INVISIBLE MAIN LINK
                 This covers the whole card. Clicking anywhere triggers this.
              */}
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0 cursor-pointer"
                aria-label={`View ${project.title}`}
              />

              {/* IMAGE AREA */}
              <div className="relative h-[60%] overflow-hidden pointer-events-none">
                {/* pointer-events-none allows click to pass through to the Main Link */}
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500" />

                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    // Fallback if image is missing
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* 
                    2. FLOATING ACTION BUTTONS 
                    - pointer-events-auto: Makes these buttons clickable separately
                    - opacity-100 md:opacity-0: Visible on Mobile (default), Hidden on Desktop (until hover)
                */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-[-10px] md:group-hover:translate-y-0 transition-all duration-300">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/10"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-orange-500 backdrop-blur-md rounded-full text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                      title="Visit Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* TEXT CONTENT AREA */}
              <div className="relative z-10 p-8 flex-1 bg-[#0a0a0a] border-t border-white/5 flex flex-col justify-between pointer-events-none">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-orange-400 uppercase tracking-wider border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-neutral-500 border border-neutral-800 px-2 py-1 rounded bg-neutral-900/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}