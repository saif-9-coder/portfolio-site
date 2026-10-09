"use client";

import { useState } from "react";
import { certifications, CREDLY_URL, type CertificationItem } from "@/data/certifications";

const categories = [
  "All",
  "Professional Badges",
  "AWS Certifications",
  "Google Certifications",
  "Anthropic Certifications",
  "All Badges",
  "Certificates",
];

function getFilteredCerts(catName: string): CertificationItem[] {
  if (catName === "All") return certifications;
  if (catName === "Professional Badges") {
    return certifications.filter((c) => c.isProfessional || c.category === "Professional Badges");
  }
  if (
    catName === "AWS Certifications" ||
    catName === "AWS Certificates" ||
    catName === "AWS"
  ) {
    return certifications.filter(
      (c) =>
        c.issuer.includes("AWS") ||
        c.issuer.includes("Amazon")
    );
  }
  if (
    catName === "Google Certifications" ||
    catName === "Google Badges" ||
    catName === "Google"
  ) {
    return certifications.filter((c) => c.issuer.includes("Google"));
  }
  if (
    catName === "Anthropic Certifications" ||
    catName === "Anthropic"
  ) {
    return certifications.filter((c) => c.issuer.includes("Anthropic"));
  }
  if (catName === "All Badges") return certifications.filter((c) => c.type === "badge");
  if (catName === "Certificates") return certifications.filter((c) => c.type === "certificate");
  return certifications.filter((c) => c.category === catName);
}

export default function CertificationsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const filteredCerts = getFilteredCerts(filter);

  return (
    <main className="relative py-24 px-6 min-h-screen">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-accent-light transition-colors mb-10"
        >
          ← Back to Home
        </a>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent-light tracking-widest uppercase">
            Verified Achievements
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            My <span className="gradient-text">Badges & Certifications</span>
          </h1>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-lg">
            {certifications.length} verified badges and full-sized certificate diplomas from AWS, Anthropic, and Google — Generative AI, LLMs, Agentic AI, and Cloud Architecture
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-accent/40"
                }`}
              >
                {cat} ({getFilteredCerts(cat).length})
              </button>
            ))}
          </div>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.title + index}
              className="card-glow group flex flex-col overflow-hidden relative transition-all duration-300"
            >
              {/* Full Picture Certificate Header Container */}
              <div
                onClick={() => setSelectedImage({ url: cert.badgeImage, title: cert.title })}
                className={`relative h-56 bg-slate-950/80 border-b border-white/5 p-3 flex items-center justify-center overflow-hidden cursor-pointer group/img`}
                title="Click to view full picture"
              >
                <img
                  src={cert.badgeImage}
                  alt={cert.title}
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover/img:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-[2px]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  View Full Picture
                </div>

                {/* Professional Tag Badge */}
                {cert.isProfessional && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold text-amber-300 bg-amber-500/20 border border-amber-500/30 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm z-10">
                    ⭐ Professional
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 leading-tight">
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
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => setSelectedImage({ url: cert.badgeImage, title: cert.title })}
                    className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    🔍 Full Picture
                  </button>

                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent-light font-medium hover:underline underline-offset-4"
                  >
                    {cert.credential.includes("skilljar.com")
                      ? "Skilljar Link →"
                      : "Credly Link →"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credly CTA Banner */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-accent/10 border border-accent/20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">View Verified Credly Transcript</h3>
          <p className="text-zinc-400 text-sm mb-6">
            All AWS and Google badges are officially issued and verified on Credly.
          </p>
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
          >
            Open Credly Profile →
          </a>
        </div>
      </div>

      {/* Full Picture Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white pr-4 leading-tight">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center overflow-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
