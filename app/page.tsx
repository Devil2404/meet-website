"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/aceternity";
import { InfiniteMovingCards, InfiniteMovingCardsVertical } from "@/components/ui/infinite-moving-cards";
import { LampContainer } from "@/components/ui/aceternity";
import { HoverCard } from "@/components/ui/aceternity";
import { cn } from "@/lib/cn";
import { Video, FileText, Users, Tag, Download, CheckSquare, Focus, EyeOff, UserPlus, Sparkles, Play, Chrome, ArrowUp, Check, X, Calendar, Rocket, CheckCircle2, Clock, MessageSquare, FileVideo, Zap, Bug, Settings, Mic, Link2, Database } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Features", link: "#features", icon: <FileText className="w-4 h-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Calendar className="w-4 h-4" /> },
  { name: "Feedback", link: "/feedback", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Changelog", link: "/changelog", icon: <CheckSquare className="w-4 h-4" /> },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <TrustStripSection />
      <FeaturesSection />
      <TranscriptShowcase />
      <ComparisonSection />
      <FreeForeverSection />
      <CRMSection />
      <RoadmapPreview />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(124, 106, 247, 0.15), #0e0e16 70%)" }} />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-32" />
      <Spotlight className="top-20 right-0 md:right-32 opacity-50" />
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Free forever. No credit card required.
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-white">Your meetings</span><br /><span className="text-gradient">work for you now.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-white/60 max-w-2xl mb-8">
            Record, transcribe, tag, analyze and export every Google Meet meeting completely free.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold relative overflow-hidden">
              <span className="absolute inset-0 animate-shimmer" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", backgroundSize: "200% 100%" }} />
              <span className="relative">Add to Chrome</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 rounded-xl border border-white/10 bg-[#16161f] text-white text-lg font-medium flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="w-full max-w-5xl">
            <ProductMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductMockup() {
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotation({ x: (y - 0.5) * 10, y: (x - 0.5) * 10 });
  };
  return (
    <motion.div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#16161f] shadow-2xl" style={{ perspective: "1000px", transformStyle: "preserve-3d" }} animate={{ rotateX: rotation.x, rotateY: rotation.y }} transition={{ type: "spring", stiffness: 200, damping: 30 }} onMouseMove={handleMouseMove} onMouseLeave={() => setRotation({ x: 0, y: 0 })}>
      <div className="flex items-center justify-center p-2 bg-[#0e0e16] border-b border-white/10">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
        <div className="flex-1 text-center text-xs text-white/30 ml-4">meet.google.com/abc-defg-hij</div>
      </div>
      <div className="flex min-h-[400px]">
        <div className="flex-1 p-4 bg-gradient-to-br from-[#16161f] to-[#0e0e16]">
          <div className="grid grid-cols-2 gap-2 w-full h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={cn("aspect-video rounded-lg flex items-center justify-center", i % 2 === 0 ? "bg-gradient-to-br from-primary/20 to-primary/5" : "bg-gradient-to-br from-secondary/20 to-secondary/5")}>
                <Users className={cn("w-8 h-8", i % 2 === 0 ? "text-primary/40" : "text-secondary/40")} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-80 border-l border-white/10 bg-[#16161f] p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Live Transcript</span>
          </div>
          <div className="space-y-3">
            <TranscriptMsg speaker="Sarah" msg="Let's discuss the quarterly roadmap first." time="0:32" />
            <TranscriptMsg speaker="Mike" msg="I think we should prioritize mobile features." time="1:05" />
            <TranscriptMsg speaker="Sarah" msg="Agreed. Mark as action item." time="1:23" highlighted type="action" />
            <TranscriptMsg speaker="Team" msg="Decision: Launch by Q2." time="1:45" highlighted type="decision" />
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-4"><motion.div className="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs flex items-center gap-2" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}><Video className="w-3 h-3" /> Recording</motion.div></div>
    </motion.div>
  );
}

function TranscriptMsg({ speaker, msg, time, highlighted, type }: { speaker: string; msg: string; time: string; highlighted?: boolean; type?: "action" | "decision" }) {
  const typeStyles = { action: "bg-secondary/20 text-secondary border-secondary/30", decision: "bg-primary/20 text-primary border-primary/30" };
  return (
    <motion.div className={cn("p-2 rounded-lg", highlighted && "bg-white/5")} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
      <div className="flex items-start gap-2">
        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0", speaker === "Sarah" ? "bg-primary/30 text-primary" : speaker === "Team" ? "bg-white/20 text-white/60" : "bg-secondary/30 text-secondary")}>{speaker.charAt(0)}</div>
        <div className="flex-1"><div className="flex items-center gap-2"><span className="text-white/80 text-xs">{speaker}</span><span className="text-white/30 text-[10px]">{time}</span></div><p className="text-white/60 text-xs mt-1">{msg}</p>{type && <span className={cn("inline-block mt-1 px-2 py-0.5 rounded text-[10px]", typeStyles[type])}>{type === "action" ? "Action" : "Decision"}</span>}</div>
      </div>
    </motion.div>
  );
}

// Trust Strip
const trustItems = [
  { title: "1080p Recording", icon: <Video className="w-5 h-5" /> },
  { title: "Live Transcript", icon: <FileText className="w-5 h-5" /> },
  { title: "Keyword Highlighting", icon: <Tag className="w-5 h-5" /> },
  { title: "Speaker Analytics", icon: <Users className="w-5 h-5" /> },
  { title: "Attendance Tracking", icon: <UserPlus className="w-5 h-5" /> },
  { title: "PDF Export", icon: <Download className="w-5 h-5" /> },
  { title: "Action Item Tags", icon: <CheckSquare className="w-5 h-5" /> },
  { title: "Focus Mode", icon: <Focus className="w-5 h-5" /> },
];

function TrustStripSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e16] via-[#16161f]/50 to-[#0e0e16] pointer-events-none" />
      <InfiniteMovingCards items={trustItems} direction="left" speed="slow" pauseOnHover={false} />
    </section>
  );
}

// Features
const features = [
  { name: "transcript", title: "Live Transcript Sidebar", desc: "Real-time transcription with speaker identification. Follow along, highlight key moments, and never miss a word.", icon: <FileText className="w-6 h-6" />, span: "md:col-span-3 md:row-span-2" },
  { name: "recording", title: "1080p Recording", desc: "Crystal clear video recording in full HD. Perfect for reviews, sharing, or keeping records.", icon: <Video className="w-6 h-6" />, span: "md:col-span-3" },
  { name: "tags", title: "Action Item Tags", desc: "Mark important moments with one click. Automatically detect and categorize action items, decisions, and questions.", icon: <CheckSquare className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "analytics", title: "Speaker Analytics", desc: "Understand participation dynamics. See talk time, turn-taking, and engagement metrics.", icon: <Users className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "attendance", title: "Attendance Tracking", desc: "Automatic attendance logs. Know who joined, when, and for how long.", icon: <UserPlus className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "focus", title: "Focus Mode", desc: "Eliminate distractions. Hide all participants except the speaker.", icon: <Focus className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "silent", title: "Silent Join", desc: "Join meetings without notification sounds.", icon: <EyeOff className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "auto", title: "Auto Admit", desc: "Automatically admit participants from your organization.", icon: <UserPlus className="w-6 h-6" />, span: "md:col-span-2" },
  { name: "crm", title: "Upcoming CRM Integrations", desc: "Sync meetings with HubSpot, Salesforce, Zoho, and Pipedrive.", icon: <Link2 className="w-6 h-6" />, span: "md:col-span-6" },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything you need. Nothing you don't.</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Powerful features designed to make your meetings productive, not complicated.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {features.map((f) => (
            <HoverCard key={f.name} className={f.span}>
              <div className="text-primary mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Transcript Showcase
const stages = [
  { title: "Meeting Starts", desc: "Voxa automatically joins and begins capturing everything." },
  { title: "Live Transcription", desc: "Real-time speech-to-text with speaker identification." },
  { title: "Keywords Highlighted", desc: "Important terms and topics automatically highlighted." },
  { title: "Actions Tagged", desc: "Detect and tag action items, decisions, and questions." },
  { title: "Speaker Analytics", desc: "Understand participation and engagement metrics." },
  { title: "Report Generated", desc: "Export professional meeting reports in seconds." },
];

function TranscriptShowcase() {
  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e16] via-[#16161f]/30 to-[#0e0e16] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From meeting to meaning</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Watch how Voxa transforms your meetings into actionable insights.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />
          <div className="space-y-24">
            {stages.map((stage, i) => (
              <motion.div key={stage.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }} className={cn("relative flex items-center gap-8", i % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
                <div className={cn("flex-1", i % 2 === 0 ? "text-right" : "text-left")}>
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">Stage {i + 1}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-white/60">{stage.desc}</p>
                </div>
                <motion.div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-[#0e0e16]" whileInView={{ scale: 1.2 }} viewport={{ once: true }} />
                <div className="flex-1"><div className="rounded-2xl border border-white/10 bg-[#16161f] h-32" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison
const compareFeatures = ["Live Transcript", "1080p Recording", "Attendance Tracking", "Action Item Tags", "Speaker Analytics", "Focus Mode", "Silent Join", "Auto Admit", "PDF Export", "Keyword Highlighting", "Free Forever"];
const compareData = { voxa: compareFeatures.map(() => true), tldv: compareFeatures.map((f) => ["Free Forever", "Auto Admit", "Silent Join", "1080p Recording"].includes(f) ? false : true), scribbl: compareFeatures.map((f) => ["Free Forever", "Auto Admit", "Silent Join", "1080p Recording", "Speaker Analytics", "Focus Mode"].includes(f) ? false : true) };

function ComparisonSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why professionals choose Voxa</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Compare feature by feature. The choice is clear.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10 bg-[#16161f]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-white/40 font-normal">Feature</th>
                <th className="p-4 text-center"><motion.div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold" animate={{ boxShadow: ["0 0 20px rgba(124,106,247,0.3)", "0 0 40px rgba(124,106,247,0.5)", "0 0 20px rgba(124,106,247,0.3)"] }} transition={{ duration: 2, repeat: Infinity }}>Voxa</motion.div></th>
                <th className="p-4 text-center text-white/60 font-normal">tl;dv</th>
                <th className="p-4 text-center text-white/60 font-normal">Scribbl</th>
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map((f, i) => (
                <motion.tr key={f} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }} className={cn("border-b border-white/5 last:border-0", i % 2 === 0 && "bg-white/[0.02]")}>
                  <td className="p-4 text-white/80">{f}</td>
                  <td className="p-4 text-center bg-primary/5">{compareData.voxa[i] ? <Check className="w-5 h-5 mx-auto text-primary" /> : <X className="w-5 h-5 mx-auto text-white/20" />}</td>
                  <td className="p-4 text-center">{compareData.tldv[i] ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-white/20" />}</td>
                  <td className="p-4 text-center">{compareData.scribbl[i] ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-white/20" />}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// Free Forever
function FreeForeverSection() {
  return (
    <LampContainer className="min-h-[60vh]">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }} className="text-center pt-8">
        <div className="flex justify-center mb-6">
          <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}><Sparkles className="w-4 h-4" />No credit card required</motion.span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Free forever.</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-gradient mb-8">Actually forever.</h3>
        {["No trial period", "No credit card required", "No locked features", "No upgrade prompts", "No usage caps"].map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>
            <span className="text-white/80 text-lg">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </LampContainer>
  );
}

// CRM Section
function CRMSection() {
  const crms = ["HubSpot", "Salesforce", "Zoho", "Pipedrive"];
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e16] via-[#16161f]/20 to-[#0e0e16] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm mb-4">Coming Soon</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your CRM fills itself.</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">You just run the meeting. Voxa handles the data entry.</p>
        </motion.div>
        <div className="flex items-center justify-center">
          <motion.div className="relative w-full max-w-4xl h-[400px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 shadow-xl" animate={{ boxShadow: ["0 0 20px rgba(124,106,247,0.2)", "0 0 40px rgba(124,106,247,0.4)", "0 0 20px rgba(124,106,247,0.2)"] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><Link2 className="w-5 h-5 text-white" /></div><span className="text-xl font-bold text-white">Voxa</span></div>
              </motion.div>
            </div>
            {crms.map((crm, index) => {
              const angle = (index * 360) / crms.length - 90;
              const radius = 160;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div key={crm} className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} viewport={{ once: true}}>
                  <motion.div className="px-6 py-3 rounded-xl border border-white/10 bg-[#16161f]" whileHover={{ scale: 1.05 }}><div className="flex items-center gap-2"><Database className="w-5 h-5 text-white/40" /><span className="text-white font-medium">{crm}</span></div></motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Roadmap Preview
const roadmapItems = [
  { title: "Available Today", desc: "All core features", status: "completed" },
  { title: "CRM Integrations", desc: "Q3 2024", status: "in-progress" },
  { title: "Zoom Support", desc: "Q4 2024", status: "upcoming" },
  { title: "Teams Support", desc: "Q1 2025", status: "upcoming" },
  { title: "Slack Integration", desc: "Q2 2025", status: "upcoming" },
  { title: "Notion Integration", desc: "Q2 2025", status: "upcoming" },
];

function RoadmapPreview() {
  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What's coming next</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">We're building the future of meeting productivity. Here's what's on the horizon.</p>
        </motion.div>
        <div className="overflow-x-auto pb-8">
          <div className="relative min-w-[800px] px-4">
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-primary via-secondary to-transparent" />
            <div className="flex justify-between">
              {roadmapItems.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="relative flex flex-col items-center w-40">
                  <motion.div className={cn("relative z-10 w-10 h-10 rounded-full border-2 border-white/20 bg-[#16161f] flex items-center justify-center mb-4", item.status === "completed" && "border-primary bg-primary/20", item.status === "in-progress" && "border-secondary bg-secondary/20")} animate={{ scale: i === 1 ? 1.1 : 1 }}>
                    <div className={cn("w-3 h-3 rounded-full", item.status === "completed" && "bg-primary", item.status === "in-progress" && "bg-secondary", item.status === "upcoming" && "bg-white/30")} />
                  </motion.div>
                  <h4 className="text-white text-sm font-medium text-center mb-1">{item.title}</h4>
                  <p className="text-white/50 text-xs text-center">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="text-center">
          <Link href="/roadmap"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium hover:border-primary/50 hover:bg-primary/10 transition-colors">View Full Roadmap</motion.button></Link>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials
const testimonials = [
  { name: "Alex Chen", role: "Sales Manager at TechCorp", quote: "Voxa saves me 2 hours every week. No more manual note-taking during client calls." },
  { name: "Sarah Johnson", role: "Engineering Lead at StartupXYZ", quote: "Finally, a meeting tool that just works. The transcript accuracy is impressive." },
  { name: "Michael Park", role: "Founder at DevStudio", quote: "Can't believe this is free. It's better than tools I've paid hundreds for." },
  { name: "Emily Rodriguez", role: "Product Manager at ScaleUp", quote: "The action item detection is a game changer. Nothing falls through cracks anymore." },
  { name: "David Kim", role: "CTO at InnovateTech", quote: "We rolled this out to the whole team. Onboarding took 5 minutes." },
  { name: "Jessica Wang", role: "Head of Sales at GrowthCo", quote: "My CRM sync is going to be incredible. Can't wait for the integrations." },
];

function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e16] via-[#16161f]/30 to-[#0e0e16] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Loved by professionals</h2>
          <p className="text-lg text-white/60">Join thousands who never take manual meeting notes.</p>
        </div>
        <div className="flex justify-center gap-8">
          <div className="hidden lg:block"><InfiniteMovingCardsVertical items={testimonials.slice(0, 3)} direction="up" speed="slow" className="h-[450px]" /></div>
          <div><InfiniteMovingCardsVertical items={testimonials.slice(3, 6)} direction="down" speed="slow" className="h-[450px]" /></div>
          <div className="hidden lg:block"><InfiniteMovingCardsVertical items={[...testimonials.slice(0, 3)].reverse()} direction="up" speed="slow" className="h-[450px]" /></div>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section id="download" className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124, 106, 247, 0.1), #0e0e16 70%)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Stop losing what matters<br /><span className="text-gradient">in meetings.</span></h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">Join professionals who never take manual meeting notes again. Free forever. No credit card required.</p>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-10 py-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold flex items-center justify-center mx-auto">
            <Chrome className="w-5 h-5 mr-2" /> Add Voxa to Chrome
          </motion.button>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Instant install</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Privacy first</span>
            <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> Free forever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Product: [{ name: "Features", href: "#features" }, { name: "Roadmap", href: "/roadmap" }, { name: "Changelog", href: "/changelog" }, { name: "Feedback", href: "/feedback" }],
    Company: [{ name: "About", href: "#" }, { name: "Blog", href: "#" }, { name: "Careers", href: "#" }],
    Legal: [{ name: "Privacy", href: "#" }, { name: "Terms", href: "#" }, { name: "Security", href: "#" }],
    Support: [{ name: "Help Center", href: "#" }, { name: "Contact", href: "#" }],
  };
  return (
    <footer className="relative border-t border-white/10 bg-[#0e0e16]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/"><span className="text-xl font-bold text-gradient">Voxa</span></Link>
            <p className="mt-4 text-white/40 text-sm max-w-xs">Your meetings work for you now. Record, transcribe, and analyze Google Meet meetings.</p>
          </div>
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h3 className="text-white font-medium mb-4">{cat}</h3>
              <ul className="space-y-2">{links.map((l) => <li key={l.name}><Link href={l.href} className="text-white/40 text-sm hover:text-white transition-colors">{l.name}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2024 Voxa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
