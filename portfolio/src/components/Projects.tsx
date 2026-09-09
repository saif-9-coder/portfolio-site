"use client";

const projects = [
  {
    title: "DevConnect — Social Platform",
    description:
      "A developer-focused social network with real-time messaging, post feeds, code snippet sharing, and GitHub integration. Built for the developer community.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "🌐",
  },
  {
    title: "ShopEase — E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with product management, cart system, Stripe payments, order tracking, and an admin dashboard with analytics.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
    emoji: "🛒",
  },
  {
    title: "AI Write — Content Generator",
    description:
      "AI-powered content writing tool that generates blog posts, marketing copy, and social media content using OpenAI API with a clean editor UI.",
    tags: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "✍️",
  },
  {
    title: "TaskFlow — Project Manager",
    description:
      "Kanban-style task manager with drag-and-drop, team collaboration, real-time updates, and GitHub integration for dev teams.",
    tags: ["React", "Express", "MongoDB", "WebSocket"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "📋",
  },
  {
    title: "WeatherCast — Dashboard",
    description:
      "Beautiful weather dashboard with 7-day forecast, interactive radar maps, location search, and severe weather alerts.",
    tags: ["Next.js", "OpenWeather API", "Chart.js"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "⛅",
  },
  {
    title: "BlogEngine — CMS",
    description:
      "Headless CMS for developers with markdown support, syntax highlighting, SEO optimization, and one-click deploy to Vercel.",
    tags: ["Next.js", "MDX", "Prisma", "Vercel"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "📝",
  },
  {
    title: "CryptoTracker — Portfolio",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, charts, news feed, and multi-wallet support using CoinGecko API.",
    tags: ["React", "CoinGecko API", "Recharts"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "💰",
  },
  {
    title: "ChatSphere — Messaging App",
    description:
      "End-to-end encrypted messaging app with group chats, file sharing, voice messages, and read receipts built with Socket.io.",
    tags: ["Node.js", "Socket.io", "React", "Redis"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
    emoji: "💬",
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
            A selection of projects I&apos;ve built with love and lots of coffee ☕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8 stagger">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div key={project.title} className="reveal card-glow group overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-accent/10 to-pink-500/10 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                    {project.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      className="px-5 py-2.5 rounded-full bg-white text-background font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      className="px-5 py-2.5 rounded-full border-2 border-white text-white font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      Source Code
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-medium border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div key={project.title} className="reveal card-glow p-6 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {project.emoji}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    className="text-zinc-500 hover:text-accent-light transition-colors"
                  >
                    Code →
                  </a>
                  <a
                    href={project.live}
                    className="text-zinc-500 hover:text-accent-light transition-colors"
                  >
                    Live →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
