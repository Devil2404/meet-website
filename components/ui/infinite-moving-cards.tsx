"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export const InfiniteMovingCards = ({ items, direction = "left", speed = "normal", pauseOnHover = true, className }: { items: { title: string; icon?: React.ReactNode }[]; direction?: "left" | "right"; speed?: "fast" | "normal" | "slow"; pauseOnHover?: boolean; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, []);

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", pauseOnHover && "hover:[animation-play-state:paused]")} style={{ animation: start ? `scroll ${speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"} linear infinite ${direction === "right" ? "reverse" : "normal"}` : "none" }}>
        {items.map((item, idx) => (
          <li key={idx} className="w-[280px] max-w-full relative flex-shrink-0 px-4 py-6 rounded-2xl border border-white/10 bg-[#16161f] backdrop-blur-xl flex items-center gap-3">
            {item.icon && <div className="flex-shrink-0 text-primary">{item.icon}</div>}
            <span className="text-white font-semibold">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const InfiniteMovingCardsVertical = ({ items, direction = "up", speed = "normal", pauseOnHover = true, className }: { items: { name: string; role: string; quote: string }[]; direction?: "up" | "down"; speed?: "fast" | "normal" | "slow"; pauseOnHover?: boolean; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, []);

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 h-[400px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn("flex flex-col gap-4 min-h-full py-4 w-full", pauseOnHover && "hover:[animation-play-state:paused]")} style={{ animation: start ? `scrollVertical ${speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"} linear infinite ${direction === "down" ? "reverse" : "normal"}` : "none" }}>
        {items.map((item, idx) => (
          <li key={idx} className="w-[350px] max-w-full relative rounded-2xl border border-white/10 bg-[#16161f] p-6 backdrop-blur-xl">
            <blockquote className="text-white/80 text-sm leading-relaxed mb-4">"{item.quote}"</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">{item.name.charAt(0)}</div>
              <div><div className="text-white font-medium text-sm">{item.name}</div><div className="text-white/50 text-xs">{item.role}</div></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
