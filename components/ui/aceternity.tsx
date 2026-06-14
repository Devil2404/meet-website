"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const Spotlight = ({ className }: { className?: string }) => (
  <svg className={cn("pointer-events-none absolute z-1 h-[169%] w-[138%] opacity-20", className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
    <g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="722" ry="224.547" transform="translate(0 796) rotate(-88.8515 1924.71 273.501)" fill="white" fillOpacity="0.15"/></g>
    <defs><filter id="filter" x="0.860352" y="0.838989" width="3847.7" height="2840.92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="151"/></filter></defs>
  </svg>
);

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0e0e16] w-full z-0", className)}>
    <div className="relative flex flex-col items-center justify-center isolate w-full">
      <motion.div initial={{ opacity: 0.5, width: "15rem" }} whileInView={{ opacity: 0.5, width: "30rem" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} style={{ backgroundImage: "conic-gradient(from 90deg 90deg 0% 0%, #7c6af7 0%, #06b6d4 50%, #7c6af7 100%)" }} className="absolute top-0 right-auto h-40 w-[30rem] overflow-hidden blur-[80px] rounded-none" />
      <motion.div initial={{ opacity: 0.5, width: "15rem" }} whileInView={{ opacity: 0.5, width: "30rem" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} style={{ backgroundImage: "conic-gradient(from 90deg 90deg 0% 0%, #7c6af7 0%, #06b6d4 50%, #7c6af7 100%)" }} className="absolute top-0 left-auto h-40 w-[30rem] overflow-hidden blur-[80px] rounded-none" />
      <motion.div initial={{ width: "8rem" }} whileInView={{ width: "16rem" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} className="absolute top-0 z-20 h-36 w-[16rem] bg-[#0e0e16]" />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.5, 0.8, 0.5, 0] }} transition={{ delay: 0.3, duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }} style={{ background: "linear-gradient(to bottom, #7c6af7, transparent)" }} className="absolute top-28 z-10 h-6 w-6 bg-gradient-to-b from-primary to-transparent blur-[20px] rounded-full" />
      <div className="relative z-20">{children}</div>
    </div>
  </div>
);

export const HoverCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={cn("relative overflow-hidden rounded-2xl border border-white/10 bg-[#16161f] p-6 transition-all duration-300", isHovered && "border-primary/30", className)}>
      {isHovered && <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(124, 106, 247, 0.15), transparent 40%)` }} />}
      {children}
    </motion.div>
  );
};
