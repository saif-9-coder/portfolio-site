"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Certifications", value: 10, suffix: "+" },
  { label: "AWS Services", value: 24, suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            Get to know me
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-accent/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-pink-500/20 border border-white/5 overflow-hidden group shadow-2xl">
                <img
                  src="/my-image.png"
                  alt="Saif Ur Rahman"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-purple-100 dark:bg-accent/20 border border-purple-300 dark:border-accent/30 text-purple-900 dark:text-accent-light text-sm font-semibold backdrop-blur-md shadow-md">
                🏆 AWS Certified GenAI Developer
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-pink-100 dark:bg-pink-500/20 border border-pink-300 dark:border-pink-500/30 text-pink-900 dark:text-pink-300 text-sm font-semibold backdrop-blur-md shadow-md">
                🤖 Building AI Agents
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              I design and deploy{" "}
              <span className="gradient-text">production-grade AI</span>{" "}
              applications on AWS.
            </h3>

            <p className="text-zinc-400 leading-relaxed text-lg">
              AWS Certified Generative AI Engineer with hands-on experience
              designing and deploying production-grade AI applications using AWS
              cloud services, Large Language Models (LLMs), and modern
              full-stack technologies. I build enterprise AI systems,
              Retrieval-Augmented Generation (RAG) pipelines, serverless
              architectures, AI agents, and cloud-native applications using
              Amazon Bedrock.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg">
              I&apos;m skilled in developing scalable AI solutions, automating
              business workflows, integrating external APIs, and deploying
              secure, high-performance applications on AWS. I&apos;m passionate
              about cloud computing, Generative AI, and building real-world AI
              products that make a difference.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg">
              When I&apos;m not building AI systems, you&apos;ll find me exploring
              new AI technologies, writing technical blogs on Dev.to, earning
              cloud certifications, or playing cricket with friends 🏏
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "📍", label: "Location", value: "Lahore, Pakistan" },
                { icon: "🎓", label: "Education", value: "BS Computer Science" },
                { icon: "💼", label: "Focus", value: "Generative AI & AWS Cloud" },
                { icon: "📧", label: "Email", value: "saifurrahman.dev.ai@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <span className="text-zinc-600 block text-xs">{item.label}</span>
                    <span className="text-zinc-300 font-medium break-all">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/CV-saif-ur-rahman.pdf"
              download="CV-saif-ur-rahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex magnetic-btn items-center gap-2 px-6 py-3 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-sm font-medium hover:bg-accent/30 transition-all mt-4"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal card-glow p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}