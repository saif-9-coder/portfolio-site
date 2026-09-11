"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "saifurrahman.dev.ai@gmail.com",
    href: "mailto:saifurrahman.dev.ai@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+92 301 6297433",
    href: "tel:+923016297433",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Lahore, Punjab, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
  },
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
        className="w-5 h-5 object-contain grayscale-100 opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
      />
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/saifurrahman.dev.ai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `Portfolio Contact: ${form.subject}`,
          message: form.message,
          _template: "table",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg("Something went wrong. Please email directly to saifurrahman.dev.ai@gmail.com");
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setErrorMsg("Failed to send message. Please email directly to saifurrahman.dev.ai@gmail.com");
    } finally {
      setLoading(false);
    }
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
            Have an AI project in mind or just want to say hello? I&apos;d love to hear from you!
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
                  <p className="text-zinc-300 font-medium group-hover:text-accent-light transition-colors break-all">
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
                I&apos;m open to AI engineering roles, freelance projects, and
                interesting collaborations. Let&apos;s build something great together!
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

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="magnetic-btn w-full py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent-light transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : submitted ? (
                  <>
                    <span className="text-green-400">✓</span> Message Sent to Saif!
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