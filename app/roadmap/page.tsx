import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import { Metadata } from 'next';
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roadmap | Voxa',
  description: 'See what we are building next at Voxa. Explore our product roadmap, recent releases, and upcoming features.',
  alternates: {
    canonical: '/roadmap',
  },
};

const roadmapItems = [
  {
    status: 'Completed',
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    items: [
      'Google Meet Chrome Extension',
      'Live Transcription (30+ languages)',
      'Basic AI Summaries',
      'Speaker Identification',
    ]
  },
  {
    status: 'In Progress',
    icon: Clock,
    color: 'text-voxa-purple',
    bgColor: 'bg-voxa-purple/10',
    items: [
      'Zoom Integration',
      'Advanced CRM Sync (HubSpot & Salesforce)',
      'Custom AI Vocabulary',
      'Team Workspaces',
    ]
  },
  {
    status: 'Planned',
    icon: ListTodo,
    color: 'text-white/40',
    bgColor: 'bg-white/5',
    items: [
      'Microsoft Teams Integration',
      'Meeting Coaching Analytics',
      'Mobile App (iOS/Android)',
      'Enterprise SSO & Advanced RBAC',
    ]
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Product Roadmap</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              We're building the future of AI meeting intelligence. Here's a transparent look at what we've shipped, what we're working on, and where we're going next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((column) => (
              <div key={column.status} className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${column.bgColor}`}>
                    <column.icon className={`w-5 h-5 ${column.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{column.status}</h3>
                </div>
                
                <ul className="space-y-4">
                  {column.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-current ${column.color}`} />
                      <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
