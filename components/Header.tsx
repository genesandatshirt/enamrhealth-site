import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base sm:tracking-[0.35em] md:text-lg md:tracking-[0.4em]"
        >
          ENAMR HEALTH
        </Link>
        <Link
          href="/our-story"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white"
        >
          Every Mouth Has a Story
        </Link>
        <Link
          href="/#waitlist"
          className="whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
        >
          Try ENAMR
        </Link>
      </div>
    </header>
  );
}
