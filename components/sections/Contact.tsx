"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

// Custom X Logo Component (since standard libraries often use the old bird)
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const contacts = [
  {
    name: "Email",
    value: "origboge@gmail.com",
    link: "mailto:origboge@gmail.com",
    icon: Mail,
    color: "group-hover:text-orange-500",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    name: "Phone",
    value: "+234 903 481 6423", // Replace with your real number
    link: "tel:+2349034816423",
    icon: Phone,
    color: "group-hover:text-green-500",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    name: "X (Twitter)",
    value: "@origboge",
    link: "https://x.com/origboge",
    icon: XIcon,
    color: "group-hover:text-white", // X brand color is black/white
    borderColor: "group-hover:border-white/50"
  },
  {
    name: "LinkedIn",
    value: "in/bamise-akinfiresoye",
    link: "https://linkedin.com/in/bamise-akinfiresoye-3b645a174",
    icon: Linkedin,
    color: "group-hover:text-blue-500",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    name: "GitHub",
    value: "github.com/origboge",
    link: "https://github.com/origboge",
    icon: Github,
    color: "group-hover:text-purple-500",
    borderColor: "group-hover:border-purple-500/50"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Connect.
          </motion.h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Open to opportunities, collaborations, or just a chat about code and science.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {contacts.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex items-center justify-between p-6 rounded-2xl bg-neutral-900/50 border border-white/5 transition-all duration-300 hover:bg-neutral-900 ${item.borderColor} cursor-hover`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-white/5 ${item.color} transition-colors`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1">
                    {item.name}
                  </div>
                  <div className="text-neutral-300 font-mono text-sm md:text-base group-hover:text-white transition-colors">
                    {item.value}
                  </div>
                </div>
              </div>
              
              <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}