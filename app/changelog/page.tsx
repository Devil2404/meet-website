"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { cn } from "@/lib/cn";
import { Sparkles, Video, Mic, Users, Tag, Download, Zap, Eye, Settings, Bug, FileText, Check, CheckCircle2, Calendar, MessageSquare } from "lucide-react";

const navItems = [
  { name: "Features", link: "/#features", icon: <FileText className="w-4 h-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Calendar className="w-4 h-4" /> },
  { name: "Feedback", link: "/feedback", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Changelog", link: "/changelog", icon: <CheckCircle2 className="w-4 h-4" /> },
];

const changelogData = [
  { version: "2.3.0", date: "June 10, 2024", title: "Focus Mode & Auto Admit", changes: [{ type: "feature", icon: Eye, text: "New Focus Mode - hide all participants except the active speaker" }, { type: "feature", icon: Users, text: "Auto Admit - automatically admit participants from your organization" }, { type: "improvement", icon: Zap, text: "Improved transcript accuracy by 15%" }, { type: "fix", icon: Bug, text: "Fixed memory leak during long meetings" }] },
  { version: "2.2.0", date: "May 28, 2024", title: "Silent Join", changes: [{ type: "feature", icon: Mic, text: "Silent Join - join meetings without notification sounds" }, { type: "improvement", icon: Zap, text: "Faster startup time - extension loads 40% quicker" }, { type: "fix", icon: Bug, text: "Fixed transcript sync issues during poor network" }] },
  { version: "2.1.0", date: "May 15, 2024", title: "Attendance Tracking", changes: [{ type: "feature", icon: Users, text: "Attendance Tracking - automatic logging of meeting participants and duration" }, { type: "feature", icon: Download, text: "Export attendance reports to CSV" }, { type: "improvement", icon: Zap, text: "Real-time transcript now shows speaker names" }, { type: "fix", icon: Bug, text: "Fixed PDF export formatting for longer meetings" }] },
  { version: "2.0.0", date: "April 30, 2024", title: "Major Update", changes: [{ type: "feature", icon: Video, text: "1080p recording - full HD video for all meetings" }, { type: "feature", icon: Tag, text: "Action Item Detection - AI-powered detection of tasks, decisions, and questions" }, { type: "feature", icon: Users, text: "Speaker Analytics - participation and engagement metrics" }, { type: "feature", icon: Download, text: "PDF Export - professional meeting reports" }, { type: "improvement", icon: Zap, text: "Complete UI redesign with glassmorphism" }] },
  { version: "1.5.0", date: "April 15, 2024", title: "Keyword Highlighting", changes: [{ type: "feature", icon: Tag, text: "Automatic keyword highlighting in transcripts" }, { type: "feature", icon: Settings, text: "Customizable keyword dictionaries" }, { type: "improvement", icon: Zap, text: "Better speaker identification accuracy" }] },
  { version: "1.4.0", date: "March 28, 2024", title: "Speaker Insights", changes: [{ type: "feature", icon: Users, text: "Speaker turn detection" }, { type: "feature", icon: Zap, text: "Real-time transcript preview" }, { type: "improvement", icon: Zap, text: "50% faster performance" }] },
  { version: "1.3.0", date: "March 15, 2024", title: "Transcription Improvements", changes: [{ type: "feature", icon: Mic, text: "Improved transcription accuracy" }, { type: "feature", icon: Settings, text: "Language detection settings" }] },
  { version: "1.2.0", date: "March 1, 2024", title: "Video Recording", changes: [{ type: "feature", icon: Video, text: "720p video recording support" }, { type: "feature", icon: Download, text: "Download recordings directly" }] },
  { version: "1.1.0", date: "February 15, 2024", title: "Live Transcription", changes: [{ type: "feature", icon: Mic, text: "Real-time transcription" }, { type: "feature", icon: Users, text: "Speaker identification" }] },
  { version: "1.0.0", date: "February 1, 2024", title: "Initial Release", changes: [{ type: "feature", icon: Sparkles, text: "Voxa is born!" }, { type: "feature", icon: Mic, text: "Basic meeting detection" }] },
];

const typeStyles = { feature: "bg-primary/20 text-primary border-primary/30", improvement: "bg-secondary/20 text-secondary border-secondary/30", fix: "bg-white/10 text-white/60 border-white/20" };
const typeLabels = { feature: "New", improvement: "Improved", fix: "Fixed" };

export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(124, 106, 247, 0.1), #0e0e16 70%)" }} />
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6"><Sparkles className="w-4 h-4" />Changelog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">New and improved</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">See what's new with Voxa. We're constantly shipping updates.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            <div className="space-y-12">
              {changelogData.map((release, index) => (
                <motion.div key={release.version} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="relative pl-16">
                  <div className="absolute left-3 top-3 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-[#0e0e16] z-10" />
                  <div className="p-6 rounded-2xl border border-white/10 bg-[#16161f]">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">v{release.version}</span>
                      <span className="text-white/40 text-sm">{release.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-4">{release.title}</h2>
                    <div className="space-y-3">
                      {release.changes.map((change, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }} viewport={{ once: true }} className="flex items-start gap-3">
                          <change.icon className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                          <p className="text-white/70 text-sm">{change.text}</p>
                          <span className={cn("shrink-0 px-2 py-0.5 rounded text-xs border", typeStyles[change.type as keyof typeof typeStyles])}>{typeLabels[change.type as keyof typeof typeLabels]}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
