"use client";

import { useState } from "react";

const CREDLY_URL = "https://www.credly.com/users/saif-ur-rahman-genrative-ai";

interface CertificationItem {
  title: string;
  issuer: string;
  icon: string;
  badgeImage: string;
  credential: string;
  color: string;
  skills: string[];
  category: string;
  type: "badge" | "certificate";
  isProfessional?: boolean;
}

const certifications: CertificationItem[] = [
  // ─────────────────────────────────────────────────────────────
  // ─── PART 1: ALL BADGES FIRST (POSITIONS 1 TO 16) ───
  // ─────────────────────────────────────────────────────────────

  // ── 1.1 PROFESSIONAL BADGES ──
  {
    title: "AWS Certified Generative AI Developer — Professional",
    issuer: "Amazon Web Services",
    icon: "🏆",
    badgeImage: "/badges/AWS Certified Generative AI Developer - Professional.png",
    credential: CREDLY_URL,
    color: "from-orange-500/20 to-amber-500/20",
    skills: ["Amazon Bedrock", "Generative AI", "LLMs"],
    category: "Professional Badges",
    type: "badge",
    isProfessional: true,
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    icon: "🤖",
    badgeImage: "/badges/Google AI Professional Certificate.png",
    credential: CREDLY_URL,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["Generative AI", "Gemini", "Machine Learning"],
    category: "Professional Badges",
    type: "badge",
    isProfessional: true,
  },
  {
    title: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
    icon: "🧠",
    badgeImage: "/badges/Claude Certified Architect - Foundations.png",
    credential: CREDLY_URL,
    color: "from-red-500/20 to-rose-500/20",
    skills: ["Claude", "Agentic AI", "MCP"],
    category: "Professional Badges",
    type: "badge",
    isProfessional: true,
  },
  {
    title: "AWS Certified Generative AI Developer — Professional Early Adopter",
    issuer: "Amazon Web Services",
    icon: "🥇",
    badgeImage: "/badges/AWS Certified Generative AI Developer - Professional Early Adopter.png",
    credential: CREDLY_URL,
    color: "from-yellow-500/20 to-orange-500/20",
    skills: ["Generative AI", "Early Adopter", "AWS"],
    category: "Professional Badges",
    type: "badge",
    isProfessional: true,
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    icon: "✅",
    badgeImage: "/badges/AWS Certified AI Practitioner.png",
    credential: CREDLY_URL,
    color: "from-amber-500/20 to-yellow-500/20",
    skills: ["AI", "AWS", "Machine Learning"],
    category: "Professional Badges",
    type: "badge",
    isProfessional: true,
  },

  // ── 1.2 AWS PARTNER BADGES & ACCREDITATIONS ──
  {
    title: "AWS Partner: Technical Accredited — Training Badge",
    issuer: "AWS Partner Network",
    icon: "🔧",
    badgeImage: "/badges/AWS Partner: Technical Accredited - Training Badge.png",
    credential: CREDLY_URL,
    color: "from-indigo-500/20 to-violet-500/20",
    skills: ["AWS", "Technical", "Cloud"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "AWS Partner: Sales Accredited — Training Badge",
    issuer: "AWS Partner Network",
    icon: "💼",
    badgeImage: "/badges/AWS Partner: Sales Accredited - Training Badge.png",
    credential: CREDLY_URL,
    color: "from-sky-500/20 to-blue-500/20",
    skills: ["AWS", "Cloud Strategy"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "AWS Student Community Day Participant",
    issuer: "AWS Community",
    icon: "🌐",
    badgeImage: "/badges/AWS Student Community Day Participant.png",
    credential: CREDLY_URL,
    color: "from-orange-500/20 to-red-500/20",
    skills: ["AWS", "Community", "Cloud"],
    category: "AWS & Google Badges",
    type: "badge",
  },

  // ── 1.3 GOOGLE AI SERIES BADGES ──
  {
    title: "Google AI Fundamentals",
    issuer: "Google",
    icon: "🎓",
    badgeImage: "/badges/Google AI Fundamentals.png",
    credential: CREDLY_URL,
    color: "from-emerald-500/20 to-teal-500/20",
    skills: ["AI", "Machine Learning"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for App Building",
    issuer: "Google",
    icon: "📱",
    badgeImage: "/badges/Google AI for App Building.png",
    credential: CREDLY_URL,
    color: "from-blue-500/20 to-indigo-500/20",
    skills: ["Google AI", "App Building"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for App Deployment",
    issuer: "Google",
    icon: "🚀",
    badgeImage: "/badges/Google AI for App Deployment.png",
    credential: CREDLY_URL,
    color: "from-cyan-500/20 to-blue-500/20",
    skills: ["Google AI", "App Deployment"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for Brainstorming & Planning",
    issuer: "Google",
    icon: "💡",
    badgeImage: "/badges/Google AI for Brainstorming and Planning.png",
    credential: CREDLY_URL,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Google AI", "Product Planning"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for Content Creation",
    issuer: "Google",
    icon: "🎨",
    badgeImage: "/badges/Google AI for Content Creation.png",
    credential: CREDLY_URL,
    color: "from-pink-500/20 to-rose-500/20",
    skills: ["Google AI", "Generative Media"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for Data Analysis",
    issuer: "Google",
    icon: "📊",
    badgeImage: "/badges/Google AI for Data Analysis.png",
    credential: CREDLY_URL,
    color: "from-teal-500/20 to-cyan-500/20",
    skills: ["Google AI", "Data Analysis"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for Research & Insights",
    issuer: "Google",
    icon: "🔍",
    badgeImage: "/badges/Google AI for Research and Insights.png",
    credential: CREDLY_URL,
    color: "from-violet-500/20 to-purple-500/20",
    skills: ["Google AI", "Research"],
    category: "AWS & Google Badges",
    type: "badge",
  },
  {
    title: "Google AI for Writing & Communicating",
    issuer: "Google",
    icon: "✍️",
    badgeImage: "/badges/Google AI for Writing and Communicating.png",
    credential: CREDLY_URL,
    color: "from-emerald-500/20 to-green-500/20",
    skills: ["Google AI", "Technical Writing"],
    category: "AWS & Google Badges",
    type: "badge",
  },

  // ─────────────────────────────────────────────────────────────
  // ─── PART 2: ALL CERTIFICATES SECOND (POSITIONS 17 TO 38) ───
  // ─────────────────────────────────────────────────────────────

  // ── 2.1 ANTHROPIC SKILLJAR CERTIFICATIONS ──
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    icon: "🧪",
    badgeImage: "/certifications/Building with the Claude API.jpg",
    credential: "https://verify.skilljar.com/c/x5owssdefrpa",
    color: "from-red-500/20 to-orange-500/20",
    skills: ["Claude API", "LLMs", "Prompt Engineering"],
    category: "Anthropic Certifications",
    type: "certificate",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    icon: "💻",
    badgeImage: "/certifications/Claude Code in Action.jpg",
    credential: "https://verify.skilljar.com/c/mo6jvdx5mnvk",
    color: "from-orange-500/20 to-amber-500/20",
    skills: ["Claude Code", "Agentic AI", "Automation"],
    category: "Anthropic Certifications",
    type: "certificate",
  },
  {
    title: "Introduction to agent skills",
    issuer: "Anthropic",
    icon: "🤝",
    badgeImage: "/certifications/Introduction to agent skills.jpg",
    credential: "https://verify.skilljar.com/c/2x6r8deqbxmc",
    color: "from-teal-500/20 to-emerald-500/20",
    skills: ["AI Agents", "Agentic AI"],
    category: "Anthropic Certifications",
    type: "certificate",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    icon: "🔌",
    badgeImage: "/certifications/Introduction to Model Context Protocol.jpg",
    credential: "https://verify.skilljar.com/c/kwvx9hifscg3",
    color: "from-violet-500/20 to-purple-500/20",
    skills: ["MCP", "Tool Use", "Integrations"],
    category: "Anthropic Certifications",
    type: "certificate",
  },

  // ── 2.2 AWS TECHNICAL CERTIFICATES ──
  {
    title: "AWS Partner: Agentic AI Technical Learning Plan Assessment",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/AWS Partner: Agentic AI Technical.png",
    credential: CREDLY_URL,
    color: "from-fuchsia-500/20 to-pink-500/20",
    skills: ["Agentic AI", "AWS", "Architecture"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Agentic AI Architecture Patterns",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/AWS Partner: Agentic AI.png",
    credential: CREDLY_URL,
    color: "from-purple-500/20 to-indigo-500/20",
    skills: ["Agentic AI", "Design Patterns"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Agentic AI Protocols MCP, A2A & AG-UI Explained",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/AWS Partner: Agentic AI protocols.png",
    credential: CREDLY_URL,
    color: "from-indigo-500/20 to-cyan-500/20",
    skills: ["MCP", "A2A Protocol", "AG-UI"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Gateway",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-19-14.png",
    credential: CREDLY_URL,
    color: "from-blue-500/20 to-indigo-500/20",
    skills: ["Bedrock AgentCore", "API Gateway"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Identity",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-20-47.png",
    credential: CREDLY_URL,
    color: "from-indigo-500/20 to-purple-500/20",
    skills: ["Bedrock AgentCore", "IAM Security"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Memory",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-20-56.png",
    credential: CREDLY_URL,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Bedrock AgentCore", "RAG & Memory"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Overview",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-21-07.png",
    credential: CREDLY_URL,
    color: "from-pink-500/20 to-rose-500/20",
    skills: ["Amazon Bedrock", "Agent Core"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Runtime",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-21-17.png",
    credential: CREDLY_URL,
    color: "from-rose-500/20 to-orange-500/20",
    skills: ["Bedrock Runtime", "AI Execution"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Amazon Bedrock AgentCore Tools",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-50.png",
    credential: CREDLY_URL,
    color: "from-amber-500/20 to-yellow-500/20",
    skills: ["Bedrock Tools", "Tool Use"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Security of AI Agents on AWS",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-21-26.png",
    credential: CREDLY_URL,
    color: "from-emerald-500/20 to-teal-500/20",
    skills: ["AI Security", "AWS Safeguards"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Strands Agents Deep Dive",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-41.png",
    credential: CREDLY_URL,
    color: "from-sky-500/20 to-blue-500/20",
    skills: ["Strands Agents", "Deep Dive"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Partner: Model Selection for Building Agents",
    issuer: "AWS Partner Network",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-23.png",
    credential: CREDLY_URL,
    color: "from-violet-500/20 to-purple-500/20",
    skills: ["Model Selection", "AI Agents"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "Getting Started with Amazon Augmented AI",
    issuer: "AWS Skill Builder",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-21-35.png",
    credential: CREDLY_URL,
    color: "from-amber-500/20 to-orange-500/20",
    skills: ["Amazon A2I", "Human in the Loop"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Skill Builder",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-21-44.png",
    credential: CREDLY_URL,
    color: "from-teal-500/20 to-emerald-500/20",
    skills: ["Machine Learning", "AI Fundamentals"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "Introduction to Generative AI — Art of the Possible",
    issuer: "AWS Skill Builder",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-03.png",
    credential: CREDLY_URL,
    color: "from-orange-500/20 to-red-500/20",
    skills: ["Generative AI", "AWS Cloud"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "Introduction to Machine Learning — Art of the Possible",
    issuer: "AWS Skill Builder",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-13.png",
    credential: CREDLY_URL,
    color: "from-red-500/20 to-rose-500/20",
    skills: ["Machine Learning", "AWS ML"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "AWS Technical Essentials",
    issuer: "AWS Skill Builder",
    icon: "📜",
    badgeImage: "/certifications/AWS Technical Essentials.png",
    credential: CREDLY_URL,
    color: "from-cyan-500/20 to-blue-500/20",
    skills: ["AWS Cloud", "Essentials"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
  {
    title: "Amazon Q Developer Getting Started",
    issuer: "Amazon Web Services",
    icon: "📜",
    badgeImage: "/certifications/Screenshot from 2026-09-11 21-22-31.png",
    credential: CREDLY_URL,
    color: "from-yellow-500/20 to-amber-500/20",
    skills: ["Amazon Q", "AWS CodeWhisperer"],
    category: "AWS Technical Certificates",
    type: "certificate",
  },
];

export default function Certifications() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    "All",
    "Professional Badges",
    "AWS Certifications",
    "Google Certifications",
    "Anthropic Certifications",
    "All Badges",
    "Certificates",
  ];

  const getFilteredCerts = (catName: string) => {
    if (catName === "All") return certifications;
    if (catName === "Professional Badges") {
      return certifications.filter((c) => c.isProfessional || c.category === "Professional Badges");
    }
    if (
      catName === "AWS Certifications" ||
      catName === "AWS Certificates" ||
      catName === "AWS"
    ) {
      return certifications.filter(
        (c) =>
          c.issuer.includes("AWS") ||
          c.issuer.includes("Amazon")
      );
    }
    if (
      catName === "Google Certifications" ||
      catName === "Google Badges" ||
      catName === "Google"
    ) {
      return certifications.filter((c) => c.issuer.includes("Google"));
    }
    if (
      catName === "Anthropic Certifications" ||
      catName === "Anthropic"
    ) {
      return certifications.filter((c) => c.issuer.includes("Anthropic"));
    }
    if (catName === "All Badges") return certifications.filter((c) => c.type === "badge");
    if (catName === "Certificates") return certifications.filter((c) => c.type === "certificate");
    return certifications.filter((c) => c.category === catName);
  };

  const filteredCerts = getFilteredCerts(filter);

  return (
    <section id="certifications" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            Verified Achievements
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            My <span className="gradient-text">Badges & Certifications</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            38 verified badges and full-sized certificate diplomas from AWS, Anthropic, and Google — Generative AI, LLMs, Agentic AI, and Cloud Architecture
          </p>

          {/* Filter Pills */}
          <div className="reveal flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-accent/40"
                }`}
              >
                {cat} ({getFilteredCerts(cat).length})
              </button>
            ))}
          </div>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.title + index}
              className="card-glow group flex flex-col overflow-hidden relative transition-all duration-300"
            >
              {/* Full Picture Certificate Header Container */}
              <div
                onClick={() => setSelectedImage({ url: cert.badgeImage, title: cert.title })}
                className={`relative h-56 bg-slate-950/80 border-b border-white/5 p-3 flex items-center justify-center overflow-hidden cursor-pointer group/img`}
                title="Click to view full picture"
              >
                <img
                  src={cert.badgeImage}
                  alt={cert.title}
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover/img:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-[2px]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  View Full Picture
                </div>

                {/* Professional Tag Badge */}
                {cert.isProfessional && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold text-amber-300 bg-amber-500/20 border border-amber-500/30 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm z-10">
                    ⭐ Professional
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-zinc-500 text-sm mb-4">
                    {cert.issuer}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-medium border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => setSelectedImage({ url: cert.badgeImage, title: cert.title })}
                    className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    🔍 Full Picture
                  </button>

                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent-light font-medium hover:underline underline-offset-4"
                  >
                    {cert.credential.includes("skilljar.com")
                      ? "Skilljar Link →"
                      : "Credly Link →"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credly CTA Banner */}
        <div className="reveal text-center mt-16 p-8 rounded-2xl bg-accent/10 border border-accent/20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">View Verified Credly Transcript</h3>
          <p className="text-zinc-400 text-sm mb-6">
            All AWS and Google badges are officially issued and verified on Credly.
          </p>
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
          >
            Open Credly Profile →
          </a>
        </div>
      </div>

      {/* Full Picture Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white pr-4 leading-tight">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center overflow-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}