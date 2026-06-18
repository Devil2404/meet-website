"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { cn } from "@/lib/cn";
import { Sparkles, Video, Mic, Users, Tag, Download, Zap, Eye, Settings, Bug, FileText, Check, CheckCircle2, Calendar, MessageSquare } from "lucide-react";

const changelogData = [
  { version: "1.0.0", date: "June 14, 2026", title: "Voxa 1.0.0 — Focus Mode & Auto Admit", changes: [{ type: "feature", icon: Eye, text: "New Focus Mode - hide all participants except the active speaker" }, { type: "feature", icon: Users, text: "Auto Admit - automatically admit participants from your organization" }, { type: "improvement", icon: Zap, text: "Improved transcript accuracy by 15%" }, { type: "fix", icon: Bug, text: "Fixed memory leak during long meetings" }] },
  { version: "0.9.8", date: "June 5, 2026", title: "Silent Join", changes: [{ type: "feature", icon: Mic, text: "Silent Join - join meetings without notification sounds" }, { type: "improvement", icon: Zap, text: "Faster startup time - extension loads 40% quicker" }, { type: "fix", icon: Bug, text: "Fixed transcript sync issues during poor network" }] },
  { version: "0.9.5", date: "May 28, 2026", title: "Attendance Tracking", changes: [{ type: "feature", icon: Users, text: "Attendance Tracking - automatic logging of meeting participants and duration" }, { type: "feature", icon: Download, text: "Export attendance reports to CSV" }, { type: "improvement", icon: Zap, text: "Real-time transcript now shows speaker names" }, { type: "fix", icon: Bug, text: "Fixed PDF export formatting for longer meetings" }] },
  { version: "0.9.0", date: "May 18, 2026", title: "Major Update", changes: [{ type: "feature", icon: Video, text: "1080p recording - full HD video for all meetings" }, { type: "feature", icon: Tag, text: "Action Item Detection - AI-powered detection of tasks, decisions, and questions" }, { type: "feature", icon: Users, text: "Speaker Analytics - participation and engagement metrics" }, { type: "feature", icon: Download, text: "PDF Export - professional meeting reports" }, { type: "improvement", icon: Zap, text: "Complete UI redesign with our new premium aesthetic" }] },
  { version: "0.8.5", date: "May 8, 2026", title: "Keyword Highlighting", changes: [{ type: "feature", icon: Tag, text: "Automatic keyword highlighting in transcripts" }, { type: "feature", icon: Settings, text: "Customizable keyword dictionaries" }, { type: "improvement", icon: Zap, text: "Better speaker identification accuracy" }] },
  { version: "0.8.0", date: "April 30, 2026", title: "Speaker Insights", changes: [{ type: "feature", icon: Users, text: "Speaker turn detection" }, { type: "feature", icon: Zap, text: "Real-time transcript preview" }, { type: "improvement", icon: Zap, text: "50% faster performance" }] },
  { version: "0.7.0", date: "April 20, 2026", title: "Transcription Improvements", changes: [{ type: "feature", icon: Mic, text: "Improved transcription accuracy" }, { type: "feature", icon: Settings, text: "Language detection settings" }] },
  { version: "0.6.0", date: "April 14, 2026", title: "Video Recording", changes: [{ type: "feature", icon: Video, text: "720p video recording support" }, { type: "feature", icon: Download, text: "Download recordings directly" }] },
  { version: "0.5.5", date: "April 7, 2026", title: "Live Transcription", changes: [{ type: "feature", icon: Mic, text: "Real-time transcription" }, { type: "feature", icon: Users, text: "Speaker identification" }] },
  { version: "0.5.0", date: "April 1, 2026", title: "Beta Release", changes: [{ type: "feature", icon: Sparkles, text: "Voxa beta is born!" }, { type: "feature", icon: Mic, text: "Basic meeting detection" }] },
];

const typeStyles = { feature: "bg-voxa-purple/10 text-voxa-purple border-voxa-purple/20", improvement: "bg-voxa-cyan/10 text-voxa-cyan border-voxa-cyan/20", fix: "bg-white/10 text-white/60 border-white/20" };
const typeLabels = { feature: "New", improvement: "Improved", fix: "Fixed" };

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-voxa-bg">
      <Navbar />
      <div className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(123, 92, 245, 0.08), transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-sm mb-6"><Sparkles className="w-4 h-4 text-voxa-purple" />Changelog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">New and improved</h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">See what's new with Voxa. We're constantly shipping updates.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-voxa-purple via-voxa-indigo to-transparent opacity-50" />
            <div className="space-y-12">
              {changelogData.map((release, index) => (
                <motion.div key={release.version} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="relative pl-16">
                  <div className="absolute left-3 top-3 w-6 h-6 rounded-full bg-voxa-purple border-4 border-voxa-bg z-10" />
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-voxa-surface1 hover:border-white/[0.12] transition-colors">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-voxa-purple/10 text-voxa-purple text-sm font-mono border border-voxa-purple/20">v{release.version}</span>
                      <span className="text-white/40 text-sm">{release.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-4">{release.title}</h2>
                    <div className="space-y-3">
                      {release.changes.map((change, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }} viewport={{ once: true }} className="flex items-start gap-3">
                          <change.icon className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                          <p className="text-white/70 text-sm leading-relaxed">{change.text}</p>
                          <span className={cn("shrink-0 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border", typeStyles[change.type as keyof typeof typeStyles])}>{typeLabels[change.type as keyof typeof typeLabels]}</span>
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
      <Footer />
    </main>
  );
}
