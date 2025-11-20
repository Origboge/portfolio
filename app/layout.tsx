import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Change the Title here
  title: "Origboge Bamise | Portfolio",
  description: "Fullstack Developer & Microbiologist",
  // 2. This tells Next.js to use your profile pic as the logo
  icons: {
    icon: "/profile.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#050505] text-[#e5e5e5]`}>
        {children}
      </body>
    </html>
  );
}