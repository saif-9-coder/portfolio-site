export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  github: string;
  featured: boolean;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: "gav-associates",
    title: "GAV & Associates",
    category: "AI / Conversational AI",
    description:
      "A knowledge-aware chatbot combining Claude by Anthropic, LangChain orchestration, retrieval-augmented generation, and Pinecone vector search to deliver grounded answers from a private knowledge base — with citations and permission-aware retrieval.",
    tags: ["Claude (Anthropic)", "LangChain", "RAG", "Pinecone", "Python"],
    image: "/projects/gav-associates.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "A client needed their team to query a large private knowledge base conversationally instead of digging through documents. We built a knowledge-aware chatbot powered by Claude, LangChain and Pinecone vector search that answers questions grounded in their own documents.",
    challenge:
      "The client's knowledge was scattered across hundreds of PDFs and internal docs, and generic chatbots hallucinated answers. They needed responses that were accurate, cited sources, and respected document-level permissions.",
    solution:
      "We built a RAG pipeline with LangChain orchestration, Pinecone vector search for semantic retrieval, and Claude for grounded answer generation. Every answer includes source citations, and retrieval is filtered by the user's permission scope before generation.",
    results: [
      "Answers grounded in the client's own documents with source citations",
      "Permission-aware retrieval — users only see what they're allowed to",
      "Cut internal knowledge lookup time from hours to seconds",
      "Hallucination rate reduced to near zero via citation-enforced prompts",
    ],
  },
  {
    slug: "frontdesk-ai",
    title: "FrontDesk AI",
    category: "AI / SaaS / Multi-Tenant",
    description:
      "A multi-tenant SaaS that lets any business configure an AI agent, feed it knowledge, and embed a chat + voice-call widget on their website — capturing leads, transcripts and bookings in one dashboard. Real-time voice via Twilio and ElevenLabs.",
    tags: ["Next.js", "React", "TypeScript", "Twilio", "ElevenLabs", "OpenAI"],
    image: "/projects/frontdesk-ai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "Small businesses were missing calls and website visitors after hours. We built FrontDesk AI — a multi-tenant SaaS where any business configures an AI agent, feeds it knowledge, and embeds a chat + voice-call widget on their site to capture leads around the clock.",
    challenge:
      "Each tenant needed isolated knowledge, branding, and lead pipelines, while voice calls demanded sub-second latency on a real telephony stack. Building this as a single-tenant app would have been easy; multi-tenant SaaS was the hard part.",
    solution:
      "We built a Next.js multi-tenant platform with per-tenant knowledge bases, Twilio for telephony, ElevenLabs for low-latency speech synthesis, and OpenAI for conversational reasoning. A unified dashboard captures leads, transcripts and bookings per tenant.",
    results: [
      "Multi-tenant architecture — each business gets its own isolated agent",
      "Chat + voice-call widget embeddable on any website",
      "Leads, transcripts and bookings captured in one dashboard",
      "Sub-second voice latency on a real telephony stack",
    ],
  },
  {
    slug: "nexusops",
    title: "NexusOps",
    category: "AI / Automation / Multi-Agent",
    description:
      "An enterprise agentic AI platform orchestrating autonomous support, sales, escalation, and operations workflows — with human-in-the-loop governance, multi-agent execution, and live operations monitoring built in.",
    tags: ["Anthropic Claude", "React", "Next.js", "TypeScript", "Multi-Agent"],
    image: "/projects/nexusops.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "An enterprise client wanted autonomous AI handling support, sales and operations workflows — but with governance, not a black box. We built NexusOps: an agentic AI orchestration platform where specialized agents execute workflows under human-in-the-loop oversight.",
    challenge:
      "Autonomous agents are powerful but risky in enterprise settings — one bad action can cost real money. The client needed agent autonomy balanced with approval gates, audit trails, and live visibility into what agents were doing.",
    solution:
      "We architected a multi-agent system on Claude with specialized agents (support, sales, escalation, operations), a governance layer with approval policies, live operations monitoring, and full audit logging. Agents propose; humans approve where it matters.",
    results: [
      "Autonomous support, sales, escalation and ops workflows orchestrated",
      "Human-in-the-loop governance with configurable approval policies",
      "Live operations dashboard showing every agent action",
      "Full audit trail for compliance and review",
    ],
  },
  {
    slug: "reportai-forensicreports",
    title: "ReportAI / ForensicReports",
    category: "AI / Compliance",
    description:
      "A serverless AI-powered due diligence platform that automates company research, regulatory data collection, risk analysis, entity matching, and forensic report generation using AWS and generative AI — event-driven with explainable AI reports.",
    tags: ["AWS", "Amazon Bedrock", "Lambda", "SQS", "DynamoDB", "API Gateway"],
    image: "/projects/reportai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "A compliance client spent days manually researching companies for due diligence. We built a serverless AI platform that automates company research, regulatory data collection, risk analysis, entity matching, and forensic report generation.",
    challenge:
      "Due diligence requires explainable, auditable AI — a black-box verdict is worthless to compliance teams. The pipeline also had to scale to many concurrent investigations without idle server costs.",
    solution:
      "We built an event-driven serverless architecture: Lambda workers process investigation requests, enrich regulatory data from DynamoDB and S3, and invoke Amazon Bedrock for analysis. SQS queues decouple stages, and every report includes explainable risk scoring and entity resolution trails.",
    results: [
      "Due diligence reports generated in minutes instead of days",
      "Explainable AI reports with risk scoring and entity resolution",
      "Fully serverless — scales with demand, near-zero idle cost",
      "Event-driven pipeline resilient to partial failures",
    ],
  },
  {
    slug: "postpilot",
    title: "PostPilot",
    category: "AI / Social Media",
    description:
      "A centralized AI workspace that turns YouTube videos, trending topics, prompts and uploaded files into platform-specific posts — with scheduling, publishing and analytics for seven networks in one dashboard, powered by Claude, GPT, Gemini and Llama.",
    tags: ["Next.js", "React", "TypeScript", "Claude", "OpenAI", "Gemini"],
    image: "/projects/postpilot.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "Content teams were juggling seven social platforms with copy-paste workflows. We built PostPilot — an AI workspace that transforms YouTube videos, trending topics, prompts and uploaded content into platform-specific posts with scheduling, publishing and analytics.",
    challenge:
      "Each platform needs different tone, length and format — one generic post doesn't work. The system also needed human approval gates before publishing and unified analytics across networks.",
    solution:
      "We built a Next.js dashboard integrating Claude, GPT, Gemini and Llama for content generation, with per-platform templates, media creation, a publishing calendar, human approval workflows, and cross-platform analytics.",
    results: [
      "Content generated for 7 social platforms from one input",
      "Scheduling, publishing and analytics in a single dashboard",
      "Human approval gates before anything goes live",
      "Multi-model AI (Claude, GPT, Gemini, Llama) for best-fit generation",
    ],
  },
  {
    slug: "omnichat",
    title: "OmniChat",
    category: "AI / Conversational AI",
    description:
      "A modern conversational AI assistant with real-time streaming, multi-chat conversations, reusable prompt templates, rich AI responses and configurable generation settings — responsive full-stack app ready for RAG and agentic workflows.",
    tags: ["Next.js", "React", "TypeScript", "Google Gemini", "Tailwind CSS"],
    image: "/projects/omin-chat.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "We needed a polished conversational AI interface that could serve as a foundation for RAG and agentic workflows. OmniChat is a modern full-stack AI assistant with real-time streaming, multi-chat management, and reusable prompt templates.",
    challenge:
      "Streaming responses, persistent multi-chat state, and rich markdown rendering had to work flawlessly on mobile and desktop. The architecture also needed to stay open for future RAG and tool-use extensions.",
    solution:
      "We built a modular Next.js + TypeScript app with streaming Gemini responses, centralized state management for conversations, prompt template library, and configurable generation settings — with clean extension points for RAG and agents.",
    results: [
      "Real-time streaming responses with rich markdown rendering",
      "Multi-chat conversations with persistent history",
      "Reusable prompt templates for common workflows",
      "Architecture ready for RAG, tool use and agentic upgrades",
    ],
  },
  {
    slug: "predictive-pump-monitoring",
    title: "Predictive Pump Monitoring",
    category: "AI / Industrial Automation",
    description:
      "An n8n-based industrial monitoring workflow that receives pump sensor data, detects abnormal conditions using predefined thresholds, analyzes issues with OpenAI, and automatically sends warning or critical email alerts — with conditional routing and error handling.",
    tags: ["n8n", "OpenAI", "Webhooks", "JSON", "Gmail"],
    image: "/projects/predictive-pump-monitoring-n8n-workflow.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "An industrial client needed pump sensor data monitored around the clock without hiring a night shift. We built an n8n workflow that ingests sensor readings, detects abnormal conditions, analyzes issues with OpenAI, and fires warning or critical email alerts.",
    challenge:
      "Sensor data is noisy — simple threshold alerts would spam the team with false positives. The system needed intelligent analysis to distinguish real faults from noise, plus reliable alerting that never silently fails.",
    solution:
      "We built an n8n pipeline: webhooks receive sensor data, threshold checks flag candidates, OpenAI analyzes the pattern for genuine faults, and conditional routing sends warning vs. critical alerts via Gmail — with validation and error handling at every step.",
    results: [
      "24/7 automated monitoring with no manual oversight needed",
      "AI analysis filters sensor noise, cutting false-positive alerts",
      "Warning vs. critical routing reaches the right people fast",
      "Error handling ensures alerts never fail silently",
    ],
  },
  {
    slug: "hiregen-ai",
    title: "HireGen AI",
    category: "AI / Web Application",
    description:
      "A generative-AI hiring platform that parses resumes, drafts job content and screens candidates — Next.js with Gemini, OpenAI and Hugging Face models on Neon PostgreSQL.",
    tags: ["Next.js", "Gemini", "OpenAI", "Hugging Face", "PostgreSQL"],
    image: "/projects/genai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "Recruiters were drowning in resumes and rewriting the same job posts. We built HireGen AI — a generative-AI hiring platform that parses resumes, drafts job content, and screens candidates automatically.",
    challenge:
      "Resume formats vary wildly, and screening needs consistent, explainable criteria — not vibes. The platform had to handle PDF/DOCX parsing, structured extraction, and fair candidate ranking.",
    solution:
      "We built a Next.js platform using Gemini, OpenAI and Hugging Face models for resume parsing and candidate screening, with structured extraction pipelines and Neon PostgreSQL for fast candidate search and ranking.",
    results: [
      "Resumes parsed into structured profiles automatically",
      "AI-drafted job descriptions in seconds",
      "Candidate screening with explainable ranking criteria",
      "Multi-model approach picks the best model per task",
    ],
  },
  {
    slug: "four-ai",
    title: "Four AI",
    category: "AI / Web Application",
    description:
      "A full-stack platform for AI voice generation, text-to-speech, voice changing and image generation — React and Vite frontend, serverless API and PostgreSQL, with Hugging Face FLUX image generation and multilingual TTS.",
    tags: ["React", "Vite", "Hugging Face", "PostgreSQL", "Vercel"],
    image: "/projects/four-ai.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "We built Four AI — a production-ready full-stack platform combining text-to-speech, AI image generation, and real-time voice transformation in one product.",
    challenge:
      "Voice and image generation have very different latency and cost profiles. The platform needed secure auth, an admin dashboard, and serverless APIs that could handle bursty media workloads without idle costs.",
    solution:
      "We built a React + Vite frontend with Vercel serverless functions, Neon PostgreSQL for users and jobs, Hugging Face FLUX.1 for image generation, and Web Speech API for multilingual TTS — with secure auth and an admin dashboard.",
    results: [
      "Text-to-speech, voice transformation and image generation in one app",
      "Multilingual TTS via Web Speech API",
      "Serverless APIs scale with bursty media workloads",
      "Admin dashboard with user and job management",
    ],
  },
  {
    slug: "cyberthreat-mesh",
    title: "CyberThreat Mesh",
    category: "Cybersecurity / AI / SaaS",
    description:
      "A 20-screen interactive security operations platform for visualizing cloud attack surfaces, threat paths, vulnerabilities, governance, and blast-radius analytics — with AI-assisted threat analysis.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"],
    image: "/projects/cyberthreat.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
    overview:
      "Security teams couldn't see their cloud attack surface in one place. We built CyberThreat Mesh — a 20-screen interactive security operations platform visualizing attack surfaces, threat paths, vulnerabilities, governance, and blast-radius analytics.",
    challenge:
      "Cloud environments are sprawling and constantly changing. The platform needed to render complex attack-path graphs interactively while keeping the UI fast, plus AI-assisted analysis to prioritize what matters.",
    solution:
      "We built a Next.js + TypeScript platform with interactive graph visualizations for attack surfaces and threat paths, blast-radius analytics, governance dashboards, and AI-assisted threat prioritization across 20 purpose-built screens.",
    results: [
      "20-screen interactive security operations platform",
      "Attack surface and threat-path visualization in real time",
      "Blast-radius analytics for incident planning",
      "AI-assisted prioritization of vulnerabilities",
    ],
  },
  {
    slug: "browser-automation-suite",
    title: "Browser Automation Suite",
    category: "Automation / Web Scraping",
    description:
      "A browser automation suite driving real Chromium browsers to scrape dynamic JavaScript-heavy sites, fill forms, and run scheduled end-to-end checks — with stealth handling, proxy rotation, retry logic, and structured data extraction pipelines feeding downstream workflows.",
    tags: ["Playwright", "Python", "TypeScript", "Proxies", "Scheduling"],
    image: "/projects/browser-automation.webp",
    live: "#",
    github: "#",
    featured: true,
    overview:
      "Manual data collection from dynamic websites was slow and error-prone. I built a browser automation suite that drives real Chromium browsers to scrape JavaScript-heavy sites, fill forms, and run scheduled end-to-end checks.",
    challenge:
      "Modern sites detect and block bots, and single-page apps need full browser rendering. The suite had to be resilient — retries, proxy rotation, stealth handling — while producing clean structured data.",
    solution:
      "I built a Playwright-based suite in Python/TypeScript with stealth plugins, proxy rotation, exponential-backoff retries, and structured extraction pipelines that feed data downstream to dashboards and automations.",
    results: [
      "Scrapes dynamic JS-heavy sites that simple HTTP scrapers can't",
      "Stealth handling + proxy rotation avoids bot detection",
      "Scheduled runs with retry logic for reliable pipelines",
      "Structured data feeds dashboards and workflows automatically",
    ],
  },
  {
    slug: "serverless-cloud-architecture",
    title: "Serverless Cloud Architecture",
    category: "Cloud / AWS",
    description:
      "A production serverless architecture on AWS — event-driven Lambda functions behind API Gateway, DynamoDB and S3 storage, SQS queues for async work, with infrastructure-as-code, CI/CD pipelines, and CloudWatch observability. Zero servers to manage, scales to zero cost when idle.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "SQS", "CloudWatch"],
    image: "/projects/serverless-architecture.webp",
    live: "#",
    github: "#",
    featured: true,
    overview:
      "I designed and deployed a production serverless architecture on AWS as a reference for event-driven backends — no servers to manage, automatic scaling, and near-zero cost when idle.",
    challenge:
      "Serverless is easy to start and easy to get wrong — cold starts, runaway costs, and unobservable failures. The architecture needed IaC, CI/CD, and proper observability from day one.",
    solution:
      "I built an event-driven stack: Lambda functions behind API Gateway, DynamoDB and S3 for storage, SQS for async work, all defined as infrastructure-as-code with CI/CD pipelines and CloudWatch dashboards, logs and alarms.",
    results: [
      "Zero servers to manage — fully event-driven",
      "Scales to zero cost when idle",
      "Infrastructure-as-code with automated CI/CD",
      "CloudWatch observability: dashboards, logs and alarms",
    ],
  },
  {
    slug: "recruitflow",
    title: "RecruitFlow",
    category: "Web Application",
    description:
      "An internal recruitment frontend with separate admin and candidate workspaces — job posting, applicant review, interview scheduling and application tracking in one interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Formik"],
    image: "/projects/recruitflow.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A client's HR team was tracking applicants across spreadsheets and email threads. We built RecruitFlow — an internal recruitment frontend with separate admin and candidate workspaces.",
    challenge:
      "Admins and candidates needed completely different views and permissions on the same data, and the interview scheduling flow had to handle timezones and status changes cleanly.",
    solution:
      "We built a Next.js + TypeScript app with role-based workspaces: admins post jobs, review applicants, schedule interviews and track applications; candidates apply and follow their status — all in one interface.",
    results: [
      "Admin and candidate workspaces in one app",
      "Job posting, applicant review and interview scheduling unified",
      "Application tracking pipeline visible at a glance",
      "Replaced spreadsheets and email threads",
    ],
  },
  {
    slug: "detroit-architect",
    title: "Detroit Architect",
    category: "AI / Conversational AI",
    description:
      "A custom architecture practice website with an embedded AI chatbot built around the OpenAI GPT API and delivered through Chatbase — answering project and practice questions conversationally.",
    tags: ["Next.js", "React", "TypeScript", "OpenAI", "Chatbase"],
    image: "/projects/detroit-architect.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "An architecture practice wanted their website to answer visitor questions about projects and services conversationally. We built a custom site with an embedded AI chatbot powered by the OpenAI GPT API via Chatbase.",
    challenge:
      "The chatbot had to speak the practice's language — project types, design philosophy, process — without making up project details, and it had to look native to the site's design.",
    solution:
      "We built the marketing site in Next.js and embedded a Chatbase chatbot trained on the practice's content, styled to match the site, so visitors get instant answers about projects and services.",
    results: [
      "AI chatbot answers project and practice questions 24/7",
      "Trained on the practice's real content — no hallucinations",
      "Seamlessly styled into the custom site design",
      "More qualified inquiries from engaged visitors",
    ],
  },
  {
    slug: "vigilon",
    title: "Vigilon",
    category: "AI / Automation",
    description:
      "Vigilon workforce operations command center for physical security agencies — field telemetry, workforce dispatch, attendance verification, patrol compliance, and financial governance in one dashboard.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    image: "/projects/vigilon.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A physical security agency managed guards, patrols and attendance across disconnected tools. We built Vigilon — a workforce operations command center unifying field telemetry, dispatch, attendance verification, patrol compliance and financial governance.",
    challenge:
      "Field data arrives messy and late, but dispatch decisions are real-time. The dashboard needed live telemetry views alongside reliable historical reporting and financial oversight.",
    solution:
      "We built a React + TypeScript command center with live field telemetry, dispatch workflows, attendance verification, patrol compliance tracking, and financial governance — with Recharts visualizations throughout.",
    results: [
      "Field telemetry, dispatch and attendance in one command center",
      "Patrol compliance tracked and reported automatically",
      "Financial governance alongside operations data",
      "Real-time views plus reliable historical reporting",
    ],
  },
  {
    slug: "cosmoatlas",
    title: "CosmoAtlas",
    category: "AI / Knowledge Graph",
    description:
      "A full-stack scientific platform for exploring cosmic hierarchies, astronomical scale, cosmological theories and guided journeys — with AI-powered scientific reasoning via Claude, interactive canvas visualizations and Web Audio.",
    tags: ["React", "TypeScript", "Vite", "Claude", "Express"],
    image: "/projects/cosmoatlas.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "We built CosmoAtlas — a full-stack scientific platform for exploring cosmic hierarchies, astronomical scale, cosmological theories and guided journeys, with AI-powered scientific reasoning.",
    challenge:
      "Making cosmology explorable required interactive visualizations of mind-bending scales plus an AI that could reason scientifically about theories — not just recite facts.",
    solution:
      "We built a React + Vite frontend with HTML5 Canvas visualizations and Web Audio, an Express backend, and Claude-powered scientific reasoning for guided cosmic journeys and theory exploration.",
    results: [
      "Interactive exploration of cosmic hierarchies and scales",
      "Claude-powered scientific reasoning, not just fact lookup",
      "Guided journeys through cosmological theories",
      "Canvas visualizations with immersive Web Audio",
    ],
  },
  {
    slug: "foodfiesta",
    title: "FoodFiesta",
    category: "Web Application",
    description:
      "A food ordering app with menu browsing, cart, profiles and map context — React and MUI frontend with an Express, session-auth and MySQL backend.",
    tags: ["React", "Material UI", "Express", "MySQL", "Leaflet"],
    image: "/projects/foodfiesta.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A local food business needed online ordering with location context. We built FoodFiesta — a food ordering app with menu browsing, cart, user profiles and map integration.",
    challenge:
      "The app needed a smooth ordering flow on mobile, secure session-based auth, and map context so customers could see delivery areas — all on a lean stack.",
    solution:
      "We built a React + Material UI frontend with an Express backend, session auth, MySQL for menus and orders, and Leaflet maps for location context.",
    results: [
      "Full ordering flow: browse, cart, checkout",
      "Map context with Leaflet for delivery areas",
      "Secure session-based authentication",
      "Mobile-friendly Material UI design",
    ],
  },
  {
    slug: "perigee",
    title: "Perigee",
    category: "Aerospace / SaaS",
    description:
      "A mission operations workspace unifying spacecraft lifecycle, regulatory filings, ground-pass scheduling, flight hardware inventory, and engineering crew operations in one platform.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/projects/perigee.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A space-industry client juggled spacecraft lifecycle, regulatory filings, ground-pass scheduling, hardware inventory and crew ops across separate tools. We built Perigee — a unified mission operations workspace.",
    challenge:
      "Mission operations data is highly interdependent — a schedule change ripples through filings, hardware and crew. The workspace needed to keep everything consistent in one view.",
    solution:
      "We built a React + TypeScript workspace unifying spacecraft lifecycle tracking, regulatory filings, ground-pass scheduling, flight hardware inventory, and engineering crew operations.",
    results: [
      "Spacecraft lifecycle, filings, scheduling, inventory and crew in one place",
      "Interdependent mission data kept consistent",
      "Purpose-built for mission operations workflows",
      "Replaced scattered tools with a single workspace",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Web Application",
    description:
      "A modern, animated personal portfolio built with React 19, Vite and GSAP — glowing cards, magnetic buttons, particle backgrounds and micro-interactions throughout.",
    tags: ["React", "Vite", "GSAP", "Tailwind CSS", "Framer Motion"],
    image: "/projects/abdullah-portfolio-website.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A client wanted a portfolio that felt alive, not a static resume page. We built a modern animated personal portfolio with React 19, Vite and GSAP.",
    challenge:
      "Heavy animation can kill performance and feel gimmicky. Every interaction needed to be smooth at 60fps and serve the content, not distract from it.",
    solution:
      "We built the portfolio with GSAP and Framer Motion — glowing cards, magnetic buttons, particle backgrounds and micro-interactions — all GPU-accelerated and performance-budgeted.",
    results: [
      "Glowing cards, magnetic buttons, particle backgrounds",
      "Buttery 60fps animations throughout",
      "Micro-interactions that guide, not distract",
      "Modern React 19 + Vite stack",
    ],
  },
  {
    slug: "homeservices",
    title: "HomeServices",
    category: "Web Application",
    description:
      "A clean, credible marketing site for a local services business — home, about and services pages with a consistent look and easy contact paths.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/homeservices.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: false,
    overview:
      "A local services business needed a credible online presence that converts visitors into calls. We built a clean marketing site with home, about and services pages.",
    challenge:
      "Local service buyers decide fast — the site had to build trust instantly and make contacting effortless, without bloated frameworks slowing it down.",
    solution:
      "We built a fast, clean marketing site with consistent branding, clear service pages, and prominent contact paths — lightweight HTML/CSS/JS for maximum speed.",
    results: [
      "Clean, credible design that builds instant trust",
      "Easy contact paths on every page",
      "Lightning-fast lightweight build",
      "Consistent look across home, about and services",
    ],
  },
  {
    slug: "scrt-ovn",
    title: "SCRT OVN",
    category: "E-commerce / Food & Beverage",
    description:
      "A WordPress + WooCommerce e-commerce site for an Islamabad-based online bakery — custom cakes, sourdough breads, pastries and desserts with nationwide delivery across Pakistan, WhatsApp ordering, and order tracking.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "WhatsApp Commerce"],
    image: "/projects/scrtovn.png",
    live: "https://scrtovn.com",
    github: "#",
    featured: false,
    overview:
      "An Islamabad bakery wanted to sell online and deliver nationwide. I built SCRT OVN — a full WordPress + WooCommerce storefront for custom cakes, sourdough breads, pastries and desserts.",
    challenge:
      "Food e-commerce needs beautiful product presentation, simple checkout, and trust — plus WhatsApp ordering, which is how most Pakistani customers prefer to buy.",
    solution:
      "I built a WooCommerce store with rich product pages, cart and wishlist, order tracking, and WhatsApp ordering integration — wrapped in a warm bakery brand with cream and chocolate tones.",
    results: [
      "Full online store: shop, cart, wishlist, order tracking",
      "WhatsApp ordering for Pakistan's preferred buying channel",
      "Nationwide delivery from Islamabad",
      "Warm bakery branding with elegant product presentation",
    ],
  },
];
