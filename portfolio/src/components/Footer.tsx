export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-lg font-bold gradient-text select-none"
          >
            {"<Saif />"}
          </a>
          <p className="text-zinc-600 text-sm mt-1">
            Building the future, one pixel at a time.
          </p>
        </div>

        <p className="text-zinc-700 text-sm">
          © {currentYear} Saif Ur Rehman. All rights reserved.
        </p>

        <div className="flex items-center gap-1 text-zinc-700 text-sm">
          Made with{" "}
          <span className="text-red-400 mx-1 animate-pulse">❤️</span> using
          Next.js & Tailwind
        </div>
      </div>

      <a
        href="#home"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent-light hover:bg-accent/30 transition-all z-40 backdrop-blur-sm"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
}
