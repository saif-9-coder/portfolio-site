"use client";

const projects = [
  {
    title: "GAV & Associates",
    category: "AI / Conversational AI",
    description:
      "A knowledge-aware chatbot combining Claude by Anthropic, LangChain orchestration, retrieval-augmented generation, and Pinecone vector search to deliver grounded answers from a private knowledge base — with citations and permission-aware retrieval.",
    tags: ["Claude (Anthropic)", "LangChain", "RAG", "Pinecone", "Python"],
    image: "/projects/gav-associates.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "FrontDesk AI",
    category: "AI / SaaS / Multi-Tenant",
    description:
      "A multi-tenant SaaS that lets any business configure an AI agent, feed it knowledge, and embed a chat + voice-call widget on their website — capturing leads, transcripts and bookings in one dashboard. Real-time voice via Twilio and ElevenLabs.",
    tags: ["Next.js", "React", "TypeScript", "Twilio", "ElevenLabs", "OpenAI"],
    image: "/projects/frontdesk-ai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "NexusOps",
    category: "AI / Automation / Multi-Agent",
    description:
      "An enterprise agentic AI platform orchestrating autonomous support, sales, escalation, and operations workflows — with human-in-the-loop governance, multi-agent execution, and live operations monitoring built in.",
    tags: ["Anthropic Claude", "React", "Next.js", "TypeScript", "Multi-Agent"],
    image: "/projects/nexusops.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "ReportAI / ForensicReports",
    category: "AI / Compliance",
    description:
      "A serverless AI-powered due diligence platform that automates company research, regulatory data collection, risk analysis, entity matching, and forensic report generation using AWS and generative AI — event-driven with explainable AI reports.",
    tags: ["AWS", "Amazon Bedrock", "Lambda", "SQS", "DynamoDB", "API Gateway"],
    image: "/projects/reportai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "PostPilot",
    category: "AI / Social Media",
    description:
      "A centralized AI workspace that turns YouTube videos, trending topics, prompts and uploaded files into platform-specific posts — with scheduling, publishing and analytics for seven networks in one dashboard, powered by Claude, GPT, Gemini and Llama.",
    tags: ["Next.js", "React", "TypeScript", "Claude", "OpenAI", "Gemini"],
    image: "/projects/postpilot.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "OmniChat",
    category: "AI / Conversational AI",
    description:
      "A modern conversational AI assistant with real-time streaming, multi-chat conversations, reusable prompt templates, rich AI responses and configurable generation settings — responsive full-stack app ready for RAG and agentic workflows.",
    tags: ["Next.js", "React", "TypeScript", "Google Gemini", "Tailwind CSS"],
    image: "/projects/omin-chat.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "Predictive Pump Monitoring",
    category: "AI / Industrial Automation",
    description:
      "An n8n-based industrial monitoring workflow that receives pump sensor data, detects abnormal conditions using predefined thresholds, analyzes issues with OpenAI, and automatically sends warning or critical email alerts — with conditional routing and error handling.",
    tags: ["n8n", "OpenAI", "Webhooks", "JSON", "Gmail"],
    image: "/projects/predictive-pump-monitoring-n8n-workflow.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "HireGen AI",
    category: "AI / Web Application",
    description:
      "A generative-AI hiring platform that parses resumes, drafts job content and screens candidates — Next.js with Gemini, OpenAI and Hugging Face models on Neon PostgreSQL.",
    tags: ["Next.js", "Gemini", "OpenAI", "Hugging Face", "PostgreSQL"],
    image: "/projects/genai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "Four AI",
    category: "AI / Web Application",
    description:
      "A full-stack platform for AI voice generation, text-to-speech, voice changing and image generation — React and Vite frontend, serverless API and PostgreSQL, with Hugging Face FLUX image generation and multilingual TTS.",
    tags: ["React", "Vite", "Hugging Face", "PostgreSQL", "Vercel"],
    image: "/projects/four-ai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "CyberThreat Mesh",
    category: "Cybersecurity / AI / SaaS",
    description:
      "A 20-screen interactive security operations platform for visualizing cloud attack surfaces, threat paths, vulnerabilities, governance, and blast-radius analytics — with AI-assisted threat analysis.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"],
    image: "/projects/cyberthreat.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
  },
  {
    title: "Browser Automation Suite",
    category: "Automation / Web Scraping",
    description:
      "A browser automation suite driving real Chromium browsers to scrape dynamic JavaScript-heavy sites, fill forms, and run scheduled end-to-end checks — with stealth handling, proxy rotation, retry logic, and structured data extraction pipelines feeding downstream workflows.",
    tags: ["Playwright", "Python", "TypeScript", "Proxies", "Scheduling"],
    image: "/projects/browser-automation.webp",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Serverless Cloud Architecture",
    category: "Cloud / AWS",
    description:
      "A production serverless architecture on AWS — event-driven Lambda functions behind API Gateway, DynamoDB and S3 storage, SQS queues for async work, with infrastructure-as-code, CI/CD pipelines, and CloudWatch observability. Zero servers to manage, scales to zero cost when idle.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "SQS", "CloudWatch"],
    image: "/projects/serverless-architecture.webp",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "RecruitFlow",
    category: "Web Application",
    description:
      "An internal recruitment frontend with separate admin and candidate workspaces — job posting, applicant review, interview scheduling and application tracking in one interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Formik"],
    image: "/projects/recruitflow.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "Detroit Architect",
    category: "AI / Conversational AI",
    description:
      "A custom architecture practice website with an embedded AI chatbot built around the OpenAI GPT API and delivered through Chatbase — answering project and practice questions conversationally.",
    tags: ["Next.js", "React", "TypeScript", "OpenAI", "Chatbase"],
    image: "/projects/detroit-architect.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "Vigilon",
    category: "AI / Automation",
    description:
      "Vigilon workforce operations command center for physical security agencies — field telemetry, workforce dispatch, attendance verification, patrol compliance, and financial governance in one dashboard.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    image: "/projects/vigilon.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "CosmoAtlas",
    category: "AI / Knowledge Graph",
    description:
      "A full-stack scientific platform for exploring cosmic hierarchies, astronomical scale, cosmological theories and guided journeys — with AI-powered scientific reasoning via Claude, interactive canvas visualizations and Web Audio.",
    tags: ["React", "TypeScript", "Vite", "Claude", "Express"],
    image: "/projects/cosmoatlas.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "FoodFiesta",
    category: "Web Application",
    description:
      "A food ordering app with menu browsing, cart, profiles and map context — React and MUI frontend with an Express, session-auth and MySQL backend.",
    tags: ["React", "Material UI", "Express", "MySQL", "Leaflet"],
    image: "/projects/foodfiesta.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "Perigee",
    category: "Aerospace / SaaS",
    description:
      "A mission operations workspace unifying spacecraft lifecycle, regulatory filings, ground-pass scheduling, flight hardware inventory, and engineering crew operations in one platform.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/projects/perigee.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    category: "Web Application",
    description:
      "A modern, animated personal portfolio built with React 19, Vite and GSAP — glowing cards, magnetic buttons, particle backgrounds and micro-interactions throughout.",
    tags: ["React", "Vite", "GSAP", "Tailwind CSS", "Framer Motion"],
    image: "/projects/abdullah-portfolio-website.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
  },
  {
    title: "HomeServices",
    category: "Web Application",
    description:
      "A clean, credible marketing site for a local services business — home, about and services pages with a consistent look and easy contact paths.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/homeservices.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
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
            Real products, AI systems and automation solutions built at DevRox
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
                ) : null}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[11px] font-medium text-zinc-300 border border-white/10">
                  {project.category}
                </div>
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
