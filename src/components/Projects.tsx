"use client";

const projects = [
  {
    title: "Enterprise GenAI Due Diligence & Compliance Platform",
    description:
      "Production-grade serverless AI platform for automated due diligence, compliance analysis, and forensic report generation. Event-driven architecture where Lambda processes requests, enriches regulatory data from DynamoDB and Amazon S3, and invokes Amazon Bedrock for AI analysis — with explainable AI-powered forensic reports, risk scoring, and entity resolution.",
    tags: ["AWS Bedrock", "Lambda", "DynamoDB", "Amazon S3", "API Gateway"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "🏦",
  },
  {
    title: "Claude RAG Chatbot",
    description:
      "Claude-powered RAG chatbot for knowledge-grounded conversational AI. Integrated LangChain and Pinecone for semantic document retrieval and built a conversational AI pipeline that retrieves relevant knowledge and provides accurate, context-aware answers using Claude.",
    tags: ["Next.js", "Claude (Anthropic)", "LangChain", "Pinecone", "RAG"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "💬",
  },
  {
    title: "AI-Powered Document Intelligence & RAG Platform",
    description:
      "Scalable document intelligence pipeline processing 10,000+ pages of PDFs, scanned documents, and unstructured files using Amazon S3 and Textract OCR. End-to-end RAG workflow with classification, intelligent chunking, S3 Vectors, semantic search, and evidence-based retrieval — plus Bedrock-powered Q&A, summarization, cross-document reasoning, and report generation with source-level traceability.",
    tags: ["AWS S3", "Textract", "Bedrock", "S3 Vectors", "PostgreSQL", "SQS", "AdonisJS", "Next.js"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "📄",
  },
  {
    title: "PostPilot — AI Social Media Content & Publishing Platform",
    description:
      "AI-powered social media platform that transforms YouTube videos, trending topics, prompts, and uploaded content into platform-specific posts. Integrated Claude, GPT, Gemini, and Llama with automated content generation, media creation, scheduling, and publishing — plus a centralized dashboard for seven social platforms, human approvals, calendars, and cross-platform analytics.",
    tags: ["Next.js", "React", "TypeScript", "Claude", "OpenAI", "Gemini", "Llama"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "🚀",
  },
  {
    title: "AI-Powered Predictive Pump Monitoring",
    description:
      "AI-powered industrial monitoring workflow that processes pump sensor data and automatically detects abnormal machine conditions. Implemented automated warning and critical alert workflows with conditional routing, validation, error handling, and email notifications.",
    tags: ["n8n", "OpenAI", "Webhooks", "JSON", "Gmail"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "🏭",
  },
  {
    title: "OmniChat — Conversational AI Assistant",
    description:
      "Modern conversational AI assistant with real-time streaming, multi-chat conversations, and persistent conversation history. Modular, responsive full-stack AI application with centralized state management and an architecture ready for RAG, tool use, and agentic AI workflows.",
    tags: ["Next.js", "React", "TypeScript", "Google Gemini"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "🗨️",
  },
  {
    title: "MMHC — AI Clinical Note Compliance Platform",
    description:
      "Enterprise AI platform for automated clinical note auditing and healthcare compliance validation. Asynchronous processing with BullMQ and Redis, Amazon Bedrock integration via Model Context Protocol (MCP), clinical note versioning with secure JSON storage on S3, and integrations with MySQL, Google BigQuery, and external EHR systems.",
    tags: ["AWS Bedrock", "Amazon S3", "AdonisJS", "React", "BullMQ", "Redis", "BigQuery"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "🏥",
  },
  {
    title: "Live Avatar AI Assistant",
    description:
      "AI-powered avatar platform with real-time voice conversations. Integrated LLMs with ElevenLabs for speech synthesis and implemented low-latency WebRTC streaming for interactive AI experiences.",
    tags: ["Next.js", "Amazon Bedrock", "ElevenLabs", "WebRTC"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "🎭",
  },
  {
    title: "Serverless Cloud Applications",
    description:
      "Designed and deployed serverless backends using AWS managed services. Built secure REST APIs with Lambda and API Gateway and implemented secure object storage using Amazon S3 and IAM.",
    tags: ["AWS Lambda", "API Gateway", "Amazon S3", "IAM"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "☁️",
  },
  {
    title: "Four AI — Voice & Image Generation Platform",
    description:
      "Production-ready full-stack AI platform for text-to-speech, AI image generation, and real-time voice transformation. Secure auth and user management, Hugging Face FLUX.1 image generation, multilingual TTS via the Web Speech API, an admin dashboard, and RESTful serverless APIs on Vercel Functions with Neon PostgreSQL.",
    tags: ["React", "Vite", "Vercel", "Neon PostgreSQL", "Hugging Face"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "🎨",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            My work
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            Enterprise AI systems, RAG pipelines, and cloud-native applications I&apos;ve built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {projects.map((project) => (
            <div key={project.title} className="reveal card-glow group overflow-hidden flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-pink-500/10 flex items-center justify-center overflow-hidden border-b border-white/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500 select-none">
                    {project.emoji}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-medium border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}