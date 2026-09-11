"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "AI Engineer",
  "AWS Certified GenAI Developer",
  "RAG & Agentic AI Builder",
  "Full Stack Developer",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/saif-9-coder",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saif-ur-rahman-22c/",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Credly",
    href: "https://www.credly.com/users/saif-ur-rahman-genrative-ai",
    icon: (
      <img src="/credlyicon.jpg" alt="Credly" className="w-5 h-5 rounded-full object-cover" />
    ),
  },
  {
    label: "Dev.to",
    href: "https://dev.to/saif_urrahman",
    icon: (
      <img
        src="/devtoicon.png"
        alt="Dev.to"
        className="w-5 h-5 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
      />
    ),
  },
];

interface Particle {
  width: number;
  height: number;
  left: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  // Generate particles only on client to avoid hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        left: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      <div ref={glowRef} className="glow-dot" />

      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.width + "px",
            height: p.height + "px",
            left: p.left + "%",
            bottom: "-10px",
            animationDuration: p.duration + "s",
            animationDelay: p.delay + "s",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="reveal visible inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 reveal visible">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Saif Ur Rahman</span>
        </h1>

        <div className="text-xl sm:text-2xl text-zinc-400 mb-8 h-8 reveal visible">
          <span className="typing-cursor">{text}</span>
        </div>

        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed reveal visible">
          I design and deploy{" "}
          <span className="text-zinc-300 font-medium">production-grade AI applications</span>{" "}
          with{" "}
          <span className="text-zinc-300 font-medium">Amazon Bedrock</span>, RAG
          pipelines, and serverless AWS architectures. Based in Lahore, Pakistan 🇵🇰
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 reveal visible">
          <a
            href="#projects"
            className="magnetic-btn px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-light transition-all flex items-center gap-2"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="magnetic-btn px-8 py-4 rounded-full border border-white/10 text-zinc-300 font-semibold text-lg hover:border-accent/50 hover:text-white transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 reveal visible">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 text-sm font-bold hover:border-accent/50"
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 scroll-indicator">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}