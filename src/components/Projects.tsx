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
    title: "RecruitFlow",
    category: "Web Application",
    description:
      "An internal recruitment frontend with separate admin and candidate workspaces — job posting, applicant review, interview scheduling and application tracking in one interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Formik"],
    image: "/projects/recruitflow.webp",
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
    title: "Perigee",
    category: "Aerospace / Mission Operations / SaaS",
    description:
      "A mission operations workspace unifying spacecraft lifecycle, regulatory filings, ground-pass scheduling, flight hardware inventory, and engineering crew operations in one platform.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/projects/perigee.webp",
    live: "https://thedevrox.com",
    github: "#",
    featured: true,
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
