"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML / CSS / SASS", level: 95 },
      { name: "Redux / Zustand", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 78 },
      { name: "PostgreSQL / MongoDB", level: 82 },
      { name: "REST & GraphQL APIs", level: 90 },
      { name: "Prisma ORM", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS / Vercel", level: 78 },
      { name: "Figma / Design", level: 80 },
      { name: "Linux / CI/CD", level: 72 },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "Prisma", "Docker", "Git",
  "AWS", "Vercel", "Figma", "GraphQL", "Redis", "Firebase",
  "FastAPI", "Express.js",
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
            Technologies and tools I use daily to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger mb-20">
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
                className="flex-shrink-0 mx-6 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] text-zinc-400 text-sm font-medium hover:border-accent/30 hover:text-accent-light transition-all cursor-default"
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
