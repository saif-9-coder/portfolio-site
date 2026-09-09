"use client";

const certifications = [
  {
    title: "Google Cloud — Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    icon: "☁️",
    credential: "#",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    skills: ["Vertex AI", "Gemini API", "Prompt Engineering"],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera — deeplearning.ai",
    date: "2024",
    icon: "🧠",
    credential: "#",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    skills: ["Neural Networks", "CNNs", "RNNs", "Transformers"],
  },
  {
    title: "Meta — AI Engineer Professional",
    issuer: "Meta (via Coursera)",
    date: "2024",
    icon: "🤖",
    credential: "#",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/20",
    skills: ["PyTorch", "LLaMA", "Fine-tuning"],
  },
  {
    title: "OpenAI API — Building with GPT",
    issuer: "OpenAI",
    date: "2023",
    icon: "⚡",
    credential: "#",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20",
    skills: ["GPT-4", "Function Calling", "RAG"],
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "🏗️",
    credential: "#",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/20",
    skills: ["SageMaker", "Bedrock", "ML Pipelines"],
  },
  {
    title: "Hugging Face — NLP Course",
    issuer: "Hugging Face",
    date: "2023",
    icon: "🤗",
    credential: "#",
    color: "from-yellow-500/20 to-red-500/20",
    borderColor: "border-yellow-500/20",
    skills: ["Transformers", "NLP", "Model Hub"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            Achievements
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            Continuous learning in AI, Machine Learning, and Generative AI
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="reveal card-glow p-6 group relative overflow-hidden"
            >
              {/* Gradient corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-light transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-zinc-500 text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-medium border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential link */}
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent-light font-medium hover:underline underline-offset-4"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add more CTA */}
        <div className="reveal text-center mt-12">
          <p className="text-zinc-600 text-sm">
            📜 More certifications being earned every month!
          </p>
        </div>
      </div>
    </section>
  );
}
