import FaqSection from '@/components/seo/faq-section';

const faqs = [
  {
    question: "How do I record a Google Meet?",
    answer: "With Voxa installed, simply join any Google Meet. You'll see a small Voxa widget on the screen. Click the record button, and Voxa will automatically start capturing the audio and generating a live transcript."
  },
  {
    question: "Can I record Google Meet without a Workspace account?",
    answer: "Yes! Voxa works independently of Google Workspace's built-in recording feature. Even if you're using a free personal Google account, you can use Voxa to record and transcribe your meetings."
  },
  {
    question: "Is Voxa the best Google Meet recorder?",
    answer: "Voxa is built specifically for Google Meet, making it incredibly fast and reliable. Unlike meeting bots that join as participants, Voxa runs silently as an extension, providing superior transcript accuracy and deep CRM integrations—all for free."
  },
  {
    question: "How do I generate meeting notes automatically?",
    answer: "Voxa's AI automatically analyzes the transcript of your meeting. After the call ends, it generates a comprehensive summary, extracts key action items, and organizes decisions without any manual effort on your part."
  },
  {
    question: "How does the attendance tracking work?",
    answer: "Voxa automatically detects who is speaking and for how long. At the end of the meeting, it provides an attendance report showing who was present and their total participation time."
  },
  {
    question: "What are speaker analytics?",
    answer: "Speaker analytics provide insights into the dynamics of your conversation. Voxa tracks the talk-time ratio between participants, identifies monologues, and helps ensure balanced participation in your meetings."
  },
  {
    question: "Is Voxa really free?",
    answer: "Yes, Voxa is completely free to use. You get unlimited recordings, transcripts, and basic AI summaries at no cost."
  },
  {
    question: "Does Voxa work on Zoom or Microsoft Teams?",
    answer: "Currently, Voxa is exclusively optimized for Google Meet to provide the best, most deeply integrated experience possible on that platform."
  },
  {
    question: "Is my data secure?",
    answer: "Security and privacy are our highest priorities. We use industry-standard encryption, and we never use your private meeting data to train public AI models."
  },
  {
    question: "Can I export the transcripts?",
    answer: "Yes, you can easily export your full meeting transcripts and AI summaries to PDF, copy them to your clipboard, or automatically push them to your connected CRM."
  },
  {
    question: "Do I need the meeting host's permission?",
    answer: "Voxa operates on your browser. However, we strongly recommend informing all participants that the meeting is being recorded and transcribed, as required by local laws."
  },
  {
    question: "How accurate is the transcription?",
    answer: "Voxa uses state-of-the-art speech-to-text models that are highly accurate, even dealing well with technical jargon, accents, and background noise."
  },
  {
    question: "What CRMs do you support?",
    answer: "Voxa currently supports automated syncing with HubSpot and Salesforce, with more integrations being added based on user feedback."
  },
  {
    question: "How do Smart Markers work?",
    answer: "During a meeting, Voxa listens for specific trigger phrases (like 'Action item' or 'We decided'). When detected, it automatically highlights that section of the transcript for easy review later."
  },
  {
    question: "Can I use Voxa on mobile?",
    answer: "Voxa is currently a Chrome extension designed for desktop use. It does not operate on mobile browsers or the standalone Google Meet mobile app."
  }
];

export default function HomepageFaq() {
  return (
    <div id="faq" className="w-full">
      <FaqSection faqs={faqs} />
    </div>
  );
}
