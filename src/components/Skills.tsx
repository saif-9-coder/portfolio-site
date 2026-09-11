"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Cloud (AWS)",
    icon: "☁️",
    skills: [
      { name: "Amazon Bedrock", level: 95 },
      { name: "AWS Lambda", level: 92 },
      { name: "Amazon S3 & S3 Vectors", level: 90 },
      { name: "API Gateway", level: 88 },
      { name: "DynamoDB & IAM", level: 86 },
      { name: "AWS Step Functions & ECS", level: 84 },
      { name: "Amazon SQS & SNS", level: 82 },
    ],
  },
  {
    title: "Artificial Intelligence & Agents",
    icon: "🧠",
    skills: [
      { name: "Generative AI & LLMs (Claude, GPT, Gemini)", level: 96 },
      { name: "LangChain & LangGraph", level: 94 },
      { name: "RAG & Vector Search (Pinecone, S3 Vectors)", level: 92 },
      { name: "AI Agents & MCP (Model Context Protocol)", level: 92 },
      { name: "Prompt Engineering & Evaluation", level: 90 },
      { name: "ElevenLabs Voice AI & WebRTC", level: 86 },
    ],
  },
  {
    title: "AI Automation & Workflow Platforms",
    icon: "⚡",
    skills: [
      { name: "n8n Automation Workflows", level: 95 },
      { name: "GoHighLevel (GHL) AI Solutions", level: 92 },
      { name: "Make.com (Integromat)", level: 90 },
      { name: "REST APIs & Webhooks", level: 92 },
      { name: "BullMQ & Redis Message Queues", level: 85 },
    ],
  },
  {
    title: "Full Stack & Frameworks",
    icon: "💻",
    skills: [
      { name: "Next.js & React", level: 92 },
      { name: "TypeScript & JavaScript", level: 90 },
      { name: "Python", level: 88 },
      { name: "Node.js & Express / AdonisJS", level: 86 },
      { name: "Tailwind CSS & Vite", level: 90 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL & Neon DB", level: 88 },
      { name: "Amazon DynamoDB", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "Redis Cache", level: 80 },
      { name: "Google BigQuery", level: 78 },
    ],
  },
  {
    title: "DevOps, Deployment & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Linux / Ubuntu Server", level: 85 },
      { name: "Vercel & AWS Cloud Deployment", level: 88 },
      { name: "Postman & API Testing", level: 90 },
    ],
  },
];

const techLogos = [
  "Amazon Bedrock", "AWS Lambda", "Claude (Anthropic)", "LangChain", "LangGraph",
  "n8n", "GoHighLevel", "Make.com", "Next.js", "React", "TypeScript", "Python",
  "Amazon S3", "DynamoDB", "Pinecone", "OpenAI", "Google Gemini", "AWS Step Functions",
  "PostgreSQL", "Redis", "Docker", "Git", "AdonisJS", "Tailwind CSS", "ElevenLabs",
  "Vercel", "Google BigQuery", "WebRTC", "AWS SQS", "AWS EC2",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const filled = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !filled.current) {
          filled.current = true;
          const bar = ref.current?.querySelector(".skill-bar-fill");
          if (bar) {
            (bar as HTMLElement).style.width = level + "%";
          }
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-zinc-600 font-mono text-xs">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            What I know
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            AWS cloud, Generative AI, and full-stack technologies I use to ship AI products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="reveal card-glow p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal overflow-hidden py-8 border-y border-white/5">
          <div className="flex marquee-track" style={{ width: "max-content" }}>
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] text-zinc-400 text-sm font-medium cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}