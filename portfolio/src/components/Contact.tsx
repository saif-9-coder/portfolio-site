"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "saif.dev@gmail.com",
    href: "mailto:saif.dev@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+92 321 1234567",
    href: "tel:+923211234567",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Lahore, Punjab, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/saifurrehman", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/saifurrehman", icon: "LI" },
  { label: "Twitter", href: "https://twitter.com/saifurrehman", icon: "TW" },
  { label: "Instagram", href: "https://instagram.com/saifurrehman", icon: "IG" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="reveal text-sm font-mono text-accent-light tracking-widest uppercase">
            Get in touch
          </span>
          <h2 className="reveal text-4xl sm:text-5xl font-bold mt-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6 reveal-left">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Location" ? "_blank" : undefined}
                rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                className="card-glow flex items-center gap-4 p-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <span className="text-xs text-zinc-600 uppercase tracking-wider">
                    {info.label}
                  </span>
                  <p className="text-zinc-300 font-medium group-hover:text-accent-light transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <p className="text-sm text-zinc-600 mb-4 uppercase tracking-wider">
                Follow me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 text-xs font-bold hover:border-accent/50"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card-glow p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Currently Available</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I&apos;m open to freelance projects, full-time opportunities,
                and interesting collaborations. Let&apos;s build something great together!
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right">
            <form onSubmit={handleSubmit} className="card-glow p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-zinc-500 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-500 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Project inquiry, collaboration, or just saying hi!"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell me about your project, timeline, budget, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="magnetic-btn w-full py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent-light transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <span className="text-green-400">✓</span> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
