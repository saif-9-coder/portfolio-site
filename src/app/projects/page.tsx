import { projects } from "@/data/projects";

export const metadata = {
  title: "All Projects | Saif Ur Rahman",
  description:
    "All 21 projects — AI systems, automation solutions and web applications built by Saif Ur Rahman at DevRox.",
};

export default function ProjectsPage() {
  return (
    <main className="relative py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-accent-light transition-colors mb-10"
        >
          ← Back to Home
        </a>

        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent-light tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            {projects.length} projects — click any project for the full case study
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card-glow group overflow-hidden flex flex-col"
            >
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
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-accent-light transition-colors">
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
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
