import LiquidCanvas from "@/components/ui/LiquidCanvas"; // <--- The colorful one
// import CustomCursor from "@/components/ui/CustomCursor"; <--- DELETED/COMMENTED OUT
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* Colorful Background */}
      <LiquidCanvas />
      
      {/* NO CURSOR COMPONENT HERE */}
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="text-center py-8 text-neutral-600 text-xs uppercase">
        © 2025 Origboge Bamise Akinfiresoye.
      </footer>
    </main>
  );
}