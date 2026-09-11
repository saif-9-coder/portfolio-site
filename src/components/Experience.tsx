"use client";

const experience = [
  {
    role: "AI Engineer",
    company: "Experts Cloud",
    period: "August 2025 – Present",
    icon: "☁️",
    logoImage: "/expertscloud_pvt_limited_logo.jpeg",
    current: true,
    points: [
      "Design and deploy enterprise Generative AI applications using Amazon Bedrock and Foundation Models (Claude & Llama).",
      "Build production-ready AI solutions using serverless AWS architectures — from compliance automation and document intelligence to enterprise applications.",
      "Develop scalable AI automation workflows using n8n, integrating AI agents, APIs, cloud services, and third-party platforms such as GoHighLevel.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Devjour Technologies",
    period: "March 2023 – June 2025",
    icon: "🤖",
    logoImage: "/devjour_technologies_logo.jpeg",
    current: false,
    points: [
      "Designed and developed AI-powered software solutions, integrating machine learning and NLP technologies into real-world applications.",
      "Built and deployed intelligent automation workflows and AI solutions to improve efficiency and streamline business processes.",
    ],
  },
  {
    role: "Artificial Intelligence & Cloud Computing (NAVTTC)",
    company: "Corvit Systems Multan",
    period: "January 2025 – March 2025",
    icon: "🎓",
    logoImage: null,
    current: false,
    points: [
      "Learned AI, Machine Learning, and AWS cloud fundamentals.",
      "Built foundational ML and cloud-based applications.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Government College University Faisalabad",
    period: "2021 – 2025",
    icon: "🎓",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            My journey
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            Building AI systems and cloud-native applications since 2023
          </p>
        </div>

        <div className="relative pl-8 sm:pl-10">
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.company + job.period} className="reveal relative">
                {/* Timeline dot */}
                <span className="absolute -left-8 sm:-left-10 top-7 w-5 h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      job.current ? "bg-green-400 animate-pulse" : "bg-accent-light"
                    }`}
                  />
                </span>

                <div className="card-glow p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {job.logoImage ? (
                          <img
                            src={job.logoImage}
                            alt={job.company}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{job.icon}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">
                          {job.role}
                        </h3>
                        <p className="text-accent-light text-sm font-medium">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex-shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                        <span className="text-accent-light mt-0.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            {education.map((edu) => (
              <div key={edu.degree} className="reveal relative">
                <span className="absolute -left-8 sm:-left-10 top-7 w-5 h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </span>

                <div className="card-glow p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-accent-light text-sm font-medium">{edu.school}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex-shrink-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}