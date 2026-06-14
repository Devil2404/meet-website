"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { cn } from "@/lib/cn";
import { ArrowUp, MessageSquare, Search, FileText, CheckCircle2, Calendar } from "lucide-react";

const navItems = [
  { name: "Features", link: "/#features", icon: <FileText className="w-4 h-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Calendar className="w-4 h-4" /> },
  { name: "Feedback", link: "/feedback", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Changelog", link: "/changelog", icon: <CheckCircle2 className="w-4 h-4" /> },
];

const initialFeedback = [
  { id: 1, title: "Zoom integration", desc: "Support for Zoom meetings in addition to Google Meet", votes: 1247, status: "in-progress", cat: "Integration", comments: 45 },
  { id: 2, title: "CRM integrations (HubSpot, Salesforce)", desc: "Sync meeting notes and action items directly to your CRM", votes: 892, status: "in-progress", cat: "Integration", comments: 32 },
  { id: 3, title: "Microsoft Teams support", desc: "Extend Voxa functionality to Microsoft Teams meetings", votes: 654, status: "planned", cat: "Platform", comments: 28 },
  { id: 4, title: "Slack integration", desc: "Push meeting summaries and action items to Slack channels", votes: 543, status: "planned", cat: "Integration", comments: 19 },
  { id: 5, title: "Notion integration", desc: "Export meeting notes and transcripts directly to Notion pages", votes: 421, status: "planned", cat: "Integration", comments: 15 },
  { id: 6, title: "Custom transcript export formats", desc: "Ability to customize the format of exported transcripts", votes: 287, status: "completed", cat: "Export", comments: 12 },
  { id: 7, title: "Meeting search", desc: "Search across all past meetings and transcripts", votes: 234, status: "planned", cat: "Feature", comments: 8 },
  { id: 8, title: "Team analytics", desc: "Organization-level insights and trends across all meetings", votes: 189, status: "planned", cat: "Analytics", comments: 6 },
];

const statusConfig: Record<string, { color: string; label: string; bg: string }> = { planned: { color: "text-white/60", label: "Planned", bg: "bg-white/10" }, "in-progress": { color: "text-secondary", label: "In Progress", bg: "bg-secondary/20" }, completed: { color: "text-primary", label: "Completed", bg: "bg-primary/20" } };
const categories = ["All", "Integration", "Platform", "Export", "Feature", "Analytics"];

export default function FeedbackPage() {
  const [items, setItems] = useState(initialFeedback.map((i) => ({ ...i, userVoted: false })));
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const handleVote = (id: number) => setItems(items.map((i) => i.id === id ? { ...i, votes: i.userVoted ? i.votes - 1 : i.votes + 1, userVoted: !i.userVoted } : i));
  const filtered = items.filter((i) => activeCat === "All" || i.cat === activeCat).filter((i) => i.title.toLowerCase().includes(search.toLowerCase()) || i.desc.toLowerCase().includes(search.toLowerCase())).sort((a, b) => b.votes - a.votes);
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(124, 106, 247, 0.1), #0e0e16 70%)" }} />
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm mb-6"><MessageSquare className="w-4 h-4" />Feature Requests</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Help us build<br /><span className="text-gradient">what you need</span></h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Have an idea? Share it with us. Vote on existing features to help us prioritize.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" /><input type="text" placeholder="Search feedback..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-[#16161f] text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none" /></div>
            <div className="flex gap-2 flex-wrap">{categories.map((cat) => (<button key={cat} onClick={() => setActiveCat(cat)} className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all", activeCat === cat ? "bg-primary/20 text-primary border border-primary/30" : "bg-white/5 text-white/60 border border-transparent hover:border-white/10")}>{cat}</button>))}</div>
          </motion.div>
          <div className="space-y-4">{filtered.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="p-6 rounded-2xl border border-white/10 bg-[#16161f] hover:border-primary/30 transition-all">
              <div className="flex gap-4">
                <button onClick={() => handleVote(item.id)} className={cn("flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all shrink-0", item.userVoted ? "bg-primary/20 border border-primary/30" : "bg-white/5 border border-transparent hover:border-white/20")}><ArrowUp className={cn("w-5 h-5", item.userVoted ? "text-primary" : "text-white/40")} /><span className="text-sm font-medium text-white">{item.votes}</span></button>
                <div className="flex-1 min-w-0"><div className="flex items-start justify-between gap-4 flex-wrap"><div><h3 className="text-white font-semibold mb-1">{item.title}</h3><p className="text-white/60 text-sm">{item.desc}</p></div><span className={cn("shrink-0 px-3 py-1 rounded-full text-xs font-medium", statusConfig[item.status].bg, statusConfig[item.status].color)}>{statusConfig[item.status].label}</span></div><div className="flex items-center gap-4 mt-4 text-sm text-white/40"><span className="px-2 py-1 rounded bg-white/5 text-xs">{item.cat}</span><span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" />{item.comments}</span></div></div>
              </div>
            </motion.div>
          ))}</div>
          {filtered.length === 0 && <div className="text-center py-12"><p className="text-white/40">No feedback found. Try a different search or category.</p></div>}
        </div>
      </div>
    </main>
  );
}
