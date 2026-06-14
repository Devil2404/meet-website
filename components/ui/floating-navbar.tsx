"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }: { navItems: { name: string; link: string; icon?: React.ReactNode }[]; className?: string }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) setVisible(true);
      else if (currentScrollY > lastScrollY) setVisible(false);
      else setVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div initial={{ opacity: 1, y: -100 }} animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }} transition={{ duration: 0.2 }} className={cn("fixed inset-x-0 top-4 z-50 flex justify-center", className)}>
      <div className="flex items-center justify-center space-x-4 px-4 py-2 rounded-full border border-white/10 bg-[#16161f]/80 backdrop-blur-xl shadow-2xl">
        <Link href="/" className="flex items-center mr-4"><span className="text-xl font-bold text-gradient">Voxa</span></Link>
        {navItems.map((navItem, idx) => (
          <Link key={`nav-${idx}`} href={navItem.link} className="relative flex items-center justify-center px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2">{navItem.icon}<span>{navItem.name}</span></motion.div>
          </Link>
        ))}
        <motion.a href="#download" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium">Add to Chrome</motion.a>
      </div>
    </motion.div>
  );
};
