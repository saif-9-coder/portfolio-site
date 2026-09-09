"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Open Source Contributor",
];

const socials = [
  { label: "GitHub", href: "https://github.com/saifullahkhan", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/saifullahkhan", icon: "LI" },
  { label: "Twitter", href: "https://twitter.com/saifullahkhan", icon: "TW" },
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
          <span className="gradient-text">Saif Ur Rehman</span>
        </h1>

        <div className="text-xl sm:text-2xl text-zinc-400 mb-8 h-8 reveal visible">
          <span className="typing-cursor">{text}</span>
        </div>

        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed reveal visible">
          I craft{" "}
          <span className="text-zinc-300 font-medium">pixel-perfect interfaces</span>{" "}
          and build{" "}
          <span className="text-zinc-300 font-medium">scalable web applications</span>{" "}
          that solve real-world problems. Based in Lahore, Pakistan 🇵🇰
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
