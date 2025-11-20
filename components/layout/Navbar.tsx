"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Import Link for the brand

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. DETECT SCROLL TO ADD BACKGROUND
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 2. DYNAMIC NAVBAR STYLES */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 transition-all duration-300 flex justify-between items-center ${
          scrolled
            ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" // Scrolled Style (Glass)
            : "py-6 bg-transparent" // Top Style (Transparent)
        }`}
      >
        {/* 3. CLICKABLE BRAND LOGO */}
        <Link 
          href="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tighter text-white hover:text-orange-500 transition-colors relative z-50"
        >
          Origboge.Dev
        </Link>

        <button
          onClick={toggleMenu}
          className="cursor-hover z-50 text-white hover:text-orange-500 transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-5xl font-bold text-white hover:text-orange-500 transition-colors cursor-hover"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}