'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FileText, Mic, MicOff, Sparkles, CheckCircle2, Clock, Users, BarChart3 } from 'lucide-react';

/* ─── Data ─── */
const participants = [
  { initial: 'S', name: 'Sarah Chen', gradient: 'linear-gradient(135deg, #7B5CF5, #4F6AFA)', role: 'Product Lead' },
  { initial: 'M', name: 'Mark Rivera', gradient: 'linear-gradient(135deg, #4F6AFA, #1CC4E8)', role: 'Engineering' },
  { initial: 'J', name: 'James Park', gradient: 'linear-gradient(135deg, #1CC4E8, #339AE1)', role: 'Design' },
  { initial: 'A', name: 'Alex Kim', gradient: 'linear-gradient(135deg, #7B5CF5, #1CC4E8)', role: 'Marketing' },
];

const transcriptFlow = [
  {
    speaker: 'Sarah Chen',
    initial: 'S',
    color: '#7B5CF5',
    time: '10:02',
    text: "Let me share the quarterly metrics we discussed last week.",
    tag: null,
  },
  {
    speaker: 'Mark Rivera',
    initial: 'M',
    color: '#4F6AFA',
    time: '10:03',
    text: "The conversion rate improved by 23% this quarter. Our new onboarding flow is working.",
    tag: null,
  },
  {
    speaker: 'James Park',
    initial: 'J',
    color: '#1CC4E8',
    time: '10:05',
    text: "We should allocate more budget to the paid ads channel for Q3.",
    tag: { label: '\u26A1 Action Item', bg: 'rgba(16,185,129,0.12)', text: '#34d399' },
  },
  {
    speaker: 'Sarah Chen',
    initial: 'S',
    color: '#7B5CF5',
    time: '10:06',
    text: "Agreed \u2014 let's finalize the Q3 marketing budget by this Friday.",
    tag: { label: '\u2713 Decision', bg: 'rgba(123,92,245,0.12)', text: '#a78bfa' },
  },
  {
    speaker: 'Alex Kim',
    initial: 'A',
    color: '#339AE1',
    time: '10:08',
    text: "I'll prepare the campaign brief and share it with the team by Wednesday.",
    tag: { label: '\u26A1 Action Item', bg: 'rgba(16,185,129,0.12)', text: '#34d399' },
  },
];

const aiSummary = {
  title: 'AI Meeting Summary',
  points: [
    'Q2 conversion rate up 23% due to new onboarding',
    'Increase Q3 paid ads budget (Owner: James)',
    'Finalize Q3 budget by Friday (Owner: Sarah)',
    'Campaign brief due Wednesday (Owner: Alex)',
  ],
};

/* ─── Waveform Bar ─── */
function WaveformBar({ active, delay }: { active: boolean; delay: number }) {
  return (
    <div
      className="w-[3px] rounded-full transition-all duration-300"
      style={{
        height: active ? `${12 + Math.random() * 16}px` : '4px',
        background: active
          ? 'linear-gradient(to top, #7B5CF5, #1CC4E8)'
          : 'rgba(255,255,255,0.1)',
        transitionDelay: `${delay}ms`,
        animation: active ? `waveform 0.6s ease-in-out ${delay}ms infinite alternate` : 'none',
      }}
    />
  );
}

/* ─── Typing Text ─── */
function TypingText({ text, speed = 25 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;
    const timer = setInterval(() => {
      indexRef.current++;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[11px] bg-voxa-purple ml-[1px] animate-pulse" />
      )}
    </span>
  );
}

/* ─── Timer ─── */
function MeetingTimer({ seconds }: { seconds: number }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <span className="font-mono text-[11px] text-white/40 tabular-nums">
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </span>
  );
}

/* ─── Main Component ─── */
export default function HeroVideo() {
  const [phase, setPhase] = useState<'recording' | 'summary'>('recording');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  const [activeSpeaker, setActiveSpeaker] = useState(0);
  const [timer, setTimer] = useState(0);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [summaryPoints, setSummaryPoints] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Auto-scroll transcript
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, typingIndex]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Main animation cycle
  const runCycle = useCallback(() => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];

    setPhase('recording');
    setVisibleMessages([]);
    setTypingIndex(null);
    setSummaryVisible(false);
    setSummaryPoints([]);
    setTimer(0);

    // Sequentially show messages with typing
    let delay = 800;
    transcriptFlow.forEach((msg, i) => {
      const startTyping = setTimeout(() => {
        setActiveSpeaker(
          participants.findIndex(p => p.name === transcriptFlow[i].speaker)
        );
        setTypingIndex(i);
      }, delay);
      timeoutsRef.current.push(startTyping);

      delay += msg.text.length * 25 + 600;

      const finishTyping = setTimeout(() => {
        setVisibleMessages(prev => [...prev, i]);
        setTypingIndex(null);
      }, delay);
      timeoutsRef.current.push(finishTyping);

      delay += 400;
    });

    // Show AI summary phase
    const showSummary = setTimeout(() => {
      setPhase('summary');
      setSummaryVisible(true);
      // Reveal summary points one by one
      aiSummary.points.forEach((_, i) => {
        const pointTimeout = setTimeout(() => {
          setSummaryPoints(prev => [...prev, i]);
        }, 400 + i * 500);
        timeoutsRef.current.push(pointTimeout);
      });
    }, delay + 800);
    timeoutsRef.current.push(showSummary);

    // Restart cycle
    cycleRef.current = setTimeout(() => {
      runCycle();
    }, delay + 800 + aiSummary.points.length * 500 + 4000);
    timeoutsRef.current.push(cycleRef.current);
  }, []);

  useEffect(() => {
    runCycle();
    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, [runCycle]);

  return (
    <m.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0, 1] }}
      className="mt-16 md:mt-20 w-full max-w-[1100px] mx-auto"
    >
      {/* Outer glow */}
      <div className="relative">
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-40"
          style={{
            background:
              'linear-gradient(135deg, rgba(123,92,245,0.3), rgba(79,106,250,0.15), rgba(28,196,232,0.3))',
            filter: 'blur(1px)',
          }}
        />

        <div className="relative border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl bg-[#0c0c18]">
          {/* ── Top Bar ── */}
          <div className="bg-[#0a0a14] border-b border-white/[0.06] flex items-center px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-3">
              <span className="text-[11px] text-white/20 font-mono">
                meet.google.com/abc-defg-hij
              </span>
            </div>

            {/* Recording indicator */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] text-red-400 font-medium tracking-wide">REC</span>
              <MeetingTimer seconds={timer} />
            </div>
          </div>

          {/* ── Main Content ── */}
          <div className="flex flex-col md:flex-row" style={{ minHeight: '420px' }}>
            {/* Left — Participants Grid */}
            <div className="flex-1 p-3 md:p-4">
              <div className="grid grid-cols-2 gap-2.5 h-full">
                {participants.map((p, i) => (
                  <div
                    key={p.name}
                    className="aspect-video rounded-xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500"
                    style={{
                      background: p.gradient,
                      boxShadow:
                        activeSpeaker === i
                          ? '0 0 0 2px rgba(123,92,245,0.6), 0 0 24px rgba(123,92,245,0.2)'
                          : 'none',
                    }}
                  >
                    {/* Vignette */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at center, transparent 20%, rgba(8,8,15,0.55) 100%)',
                      }}
                    />

                    {/* Avatar */}
                    <div
                      className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-10 border border-white/15 transition-transform duration-300"
                      style={{
                        transform: activeSpeaker === i ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      <span className="text-white font-semibold text-base md:text-lg">
                        {p.initial}
                      </span>
                    </div>

                    {/* Name */}
                    <span className="text-white/60 text-[10px] mt-1.5 z-10 font-medium">
                      {p.name.split(' ')[0]}
                    </span>

                    {/* Waveform */}
                    <div className="flex items-end gap-[2px] mt-1 z-10 h-4">
                      {activeSpeaker === i
                        ? Array.from({ length: 7 }).map((_, j) => (
                            <WaveformBar key={j} active delay={j * 80} />
                          ))
                        : Array.from({ length: 5 }).map((_, j) => (
                            <WaveformBar key={j} active={false} delay={0} />
                          ))}
                    </div>

                    {/* Mic indicator */}
                    <div className="absolute bottom-2 right-2 z-10">
                      {activeSpeaker === i ? (
                        <Mic size={12} className="text-white/50" />
                      ) : (
                        <MicOff size={12} className="text-white/20" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats bar */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-white/25 text-[10px]">
                    <Users size={11} />
                    <span>4 participants</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/25 text-[10px]">
                    <BarChart3 size={11} />
                    <span>Analytics active</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400/60 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  <span>Voxa recording</span>
                </div>
              </div>
            </div>

            {/* Right — Transcript / Summary Panel */}
            <div className="w-full md:w-[340px] border-t md:border-t-0 md:border-l border-white/[0.06] bg-[#0e0e1a] flex flex-col">
              <AnimatePresence mode="wait">
                {phase === 'recording' ? (
                  <m.div
                    key="transcript"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    {/* Panel header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-voxa-purple/15 flex items-center justify-center">
                          <FileText size={12} className="text-voxa-purple" />
                        </div>
                        <span className="text-xs font-semibold text-white/70 tracking-wide">
                          Live Transcript
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] text-green-400/70">Live</span>
                      </div>
                    </div>

                    {/* Messages */}
                    <div
                      ref={scrollRef}
                      className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
                      style={{ maxHeight: '340px' }}
                    >
                      <AnimatePresence>
                        {visibleMessages.map(idx => {
                          const msg = transcriptFlow[idx];
                          return (
                            <m.div
                              key={`msg-${idx}`}
                              initial={{ opacity: 0, y: 12, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.35, ease: [0.25, 0.4, 0, 1] }}
                              className="flex gap-2.5"
                            >
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                                style={{ background: msg.color }}
                              >
                                <span className="text-[9px] text-white font-bold">
                                  {msg.initial}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[11px] font-semibold text-white/70">
                                    {msg.speaker.split(' ')[0]}
                                  </span>
                                  <span className="text-[10px] text-white/20">{msg.time}</span>
                                  {msg.tag && (
                                    <m.span
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.2 }}
                                      className="text-[9px] px-1.5 py-0.5 rounded-md font-semibold"
                                      style={{
                                        background: msg.tag.bg,
                                        color: msg.tag.text,
                                      }}
                                    >
                                      {msg.tag.label}
                                    </m.span>
                                  )}
                                </div>
                                <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">
                                  {msg.text}
                                </p>
                              </div>
                            </m.div>
                          );
                        })}
                      </AnimatePresence>

                      {/* Currently typing message */}
                      {typingIndex !== null && (
                        <m.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-2.5"
                        >
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                            style={{ background: transcriptFlow[typingIndex].color }}
                          >
                            <span className="text-[9px] text-white font-bold">
                              {transcriptFlow[typingIndex].initial}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-semibold text-white/70">
                                {transcriptFlow[typingIndex].speaker.split(' ')[0]}
                              </span>
                              <span className="text-[10px] text-white/20">
                                {transcriptFlow[typingIndex].time}
                              </span>
                            </div>
                            <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">
                              <TypingText
                                text={transcriptFlow[typingIndex].text}
                                speed={25}
                              />
                            </p>
                          </div>
                        </m.div>
                      )}
                    </div>
                  </m.div>
                ) : (
                  <m.div
                    key="summary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full"
                  >
                    {/* Summary header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-voxa-purple/15 flex items-center justify-center">
                          <Sparkles size={12} className="text-voxa-purple" />
                        </div>
                        <span className="text-xs font-semibold text-white/70 tracking-wide">
                          AI Summary
                        </span>
                      </div>
                      <m.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 rounded-full border-2 border-voxa-purple/30 border-t-voxa-purple"
                        style={{ opacity: summaryPoints.length < aiSummary.points.length ? 1 : 0 }}
                      />
                    </div>

                    {/* Summary content */}
                    <div className="flex-1 px-4 py-4">
                      {summaryVisible && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-2"
                        >
                          <m.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4"
                          >
                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-voxa-purple/10 border border-voxa-purple/20">
                              <Sparkles size={11} className="text-voxa-purple" />
                              <span className="text-[11px] text-voxa-purple font-semibold">
                                {aiSummary.title}
                              </span>
                            </div>
                          </m.div>

                          {/* Meeting stats */}
                          <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="grid grid-cols-3 gap-2 mb-4"
                          >
                            <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2 text-center">
                              <Clock size={12} className="text-white/30 mx-auto mb-1" />
                              <span className="text-[10px] text-white/50 block">Duration</span>
                              <span className="text-[11px] text-white/70 font-semibold">8m 32s</span>
                            </div>
                            <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2 text-center">
                              <Users size={12} className="text-white/30 mx-auto mb-1" />
                              <span className="text-[10px] text-white/50 block">Speakers</span>
                              <span className="text-[11px] text-white/70 font-semibold">4</span>
                            </div>
                            <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2 text-center">
                              <CheckCircle2 size={12} className="text-emerald-400/50 mx-auto mb-1" />
                              <span className="text-[10px] text-white/50 block">Actions</span>
                              <span className="text-[11px] text-emerald-400/80 font-semibold">3</span>
                            </div>
                          </m.div>

                          {/* Key points */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">
                              Key Takeaways
                            </span>
                            <AnimatePresence>
                              {summaryPoints.map(idx => (
                                <m.div
                                  key={`point-${idx}`}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.35,
                                    ease: [0.25, 0.4, 0, 1],
                                  }}
                                  className="flex items-start gap-2 py-1.5"
                                >
                                  <CheckCircle2
                                    size={13}
                                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                                  />
                                  <span className="text-[11px] text-white/50 leading-relaxed">
                                    {aiSummary.points[idx]}
                                  </span>
                                </m.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </m.div>
                      )}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
