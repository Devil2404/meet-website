"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { cn } from "@/lib/cn";
import { CheckCircle2, Clock, Calendar, MessageSquare, FileText, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Features", link: "/#features", icon: <FileText className="w-4 h-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Calendar className="w-4 h-4" /> },
  { name: "Feedback", link: "/feedback", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Changelog", link: "/changelog", icon: <CheckCircle2 className="w-4 h-4" /> },
];

const roadmapData = {
  completed: [
    { title: "Live Transcription", desc: "Real-time speech-to-text with speaker identification", date: "Jan 2024" },
    { title: "1080p Recording", desc: "Full HD video recording for all meetings", date: "Jan 2024" },
    { title: "Keyword Highlighting", desc: "Automatic detection and highlighting of important terms", date: "Feb 2024" },
    { title: "Action Item Detection", desc: "AI-powered detection of action items, decisions, and questions", date: "Feb 2024" },
    { title: "Speaker Analytics", desc: "Detailed participation and engagement metrics", date: "Mar 2024" },
    { title: "PDF Export", desc: "Export professional meeting reports", date: "Mar 2024" },
    { title: "Attendance Tracking", desc: "Automatic logging of meeting participants", date: "Apr 2024" },
    { title: "Focus Mode", desc: "Distraction-free meeting view", date: "Apr 2024" },
    { title: "Silent Join", desc: "Join meetings without notification sounds", date: "May 2024" },
    { title: "Auto Admit", desc: "Automatically admit participants from your organization", date: "May 2024" },
  ],
  inProgress: [{ title: "CRM Integrations", desc: "Sync meetings with HubSpot, Salesforce, Zoho, and Pipedrive", date: "Q3 2024" }],
  upcoming: [
    { title: "Zoom Support", desc: "Full support for Zoom meetings", date: "Q4 2024" },
    { title: "Microsoft Teams Support", desc: "Extend Voxa to Microsoft Teams", date: "Q1 2025" },
    { title: "Slack Integration", desc: "Push meeting summaries to Slack channels", date: "Q2 2025" },
    { title: "Notion Integration", desc: "Sync meeting notes directly to Notion", date: "Q2 2025" },
    { title: "Advanced Analytics", desc: "Team-level insights and trends", date: "Q3 2025" },
  ],
};

const tabs = [{ id: "all", label: "All" }, { id: "completed", label: "Completed" }, { id: "in-progress", label: "In Progress" }, { id: "upcoming", label: "Planned" }];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState("all");
  const getItems = () => {
    if (activeTab === "all") return [...roadmapData.completed.map((i) => ({ ...i, status: "completed" })), ...roadmapData.inProgress.map((i) => ({ ...i, status: "in-progress" })), ...roadmapData.upcoming.map((i) => ({ ...i, status: "upcoming" }))];
    if (activeTab === "completed") return roadmapData.completed.map((i) => ({ ...i, status: "completed" }));
    if (activeTab === "in-progress") return roadmapData.inProgress.map((i) => ({ ...i, status: "in-progress" }));
    return roadmapData.upcoming.map((i) => ({ ...i, status: "upcoming" }));
  };
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(124, 106, 247, 0.1), #0e0e16 70%)" }} />
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6"><Calendar className="w-4 h-4" />Public Roadmap</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Building the future of<br /><span className="text-gradient">meeting productivity</span></h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">See what we're building and what's coming next.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", activeTab === tab.id ? "bg-primary/20 text-primary border border-primary/30" : "bg-white/5 text-white/60 border border-transparent hover:border-white/10")} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{tab.label}</motion.button>
            ))}
          </motion.div>
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            <div className="space-y-8">
              {getItems().map((item, index) => (
                <motion.div key={item.title + index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="relative flex items-center mb-8">
                  <motion.div className={cn("absolute left-0 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full border-2 border-white/20 bg-[#16161f] flex items-center justify-center z-10", item.status === "completed" && "border-primary bg-primary/20", item.status === "in-progress" && "border-secondary bg-secondary/20")} whileHover={{ scale: 1.2 }}>
                    <div className={cn("w-3 h-3 rounded-full", item.status === "completed" && "bg-primary", item.status === "in-progress" && "bg-secondary", item.status === "upcoming" && "bg-white/30")} />
                  </motion.div>
                  <motion.div className={cn("w-full md:w-[calc(50%-4rem)] ml-12 md:ml-0 p-6 rounded-xl border border-white/10 bg-[#16161f]", index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8")}>
                    <span className="text-primary text-xs font-mono mb-2 block">{item.date}</span>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                    {item.status === "in-progress" && <span className="inline-block mt-2 px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">In Progress</span>}
                    {item.status === "completed" && <span className="inline-block mt-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Completed</span>}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="mt-16 p-8 rounded-2xl border border-white/10 bg-[#16161f] text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Want to influence our roadmap?</h3>
            <p className="text-white/60 mb-6">We prioritize features based on user feedback.</p>
            <Link href="/feedback"><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium"><MessageSquare className="w-5 h-5" />Submit Feedback</motion.button></Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
