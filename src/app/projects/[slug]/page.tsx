import { projects, type ProjectItem } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Saif Ur Rahman`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = projects.find((p) => p.slug === slug);
  if (!found) notFound();
  const project: ProjectItem = found as ProjectItem;

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const sections = [
    { label: "Overview", body: project.overview },
    { label: "The Challenge", body: project.challenge },
    { label: "The Solution", body: project.solution },
  ];

  return (
    <main className="relative py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-accent-light transition-colors mb-10"
        >
          ← All Projects
        </a>

        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="mb-4">
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-medium border border-accent/20">
            {project.category}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-medium border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case study sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.label} className="card-glow p-8">
              <h2 className="text-2xl font-bold mb-4">
                <span className="gradient-text">{s.label}</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section className="card-glow p-8">
            <h2 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Results</span>
            </h2>
            <ul className="space-y-3">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                  <span className="text-accent-light mt-1">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Tech stack */}
        <div className="mt-10 card-glow p-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 text-sm font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.live !== "#" && (
          <div className="mt-10 text-center">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-light transition-all"
            >
              View Live →
            </a>
          </div>
        )}

        {/* Other projects */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Other <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="card-glow group overflow-hidden flex flex-col"
              >
                <div className="relative h-36 overflow-hidden border-b border-white/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-2 group-hover:text-accent-light transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-sm line-clamp-2">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
