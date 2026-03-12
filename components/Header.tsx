import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
      <div className="relative mx-auto w-full max-w-6xl rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl sm:px-6 sm:py-3">
        <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="font-[var(--font-display)] text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-white sm:text-base sm:tracking-[0.35em] md:text-lg md:tracking-[0.4em]"
        >
          ENAMR HEALTH
        </Link>
        <Link
          href="/our-story"
          className="min-w-0 justify-self-center truncate whitespace-nowrap text-[11px] font-semibold leading-none text-white/90 transition hover:text-white sm:text-sm md:text-base"
        >
          Every Mouth Has a Story
        </Link>
        <Link
          href="/#waitlist"
          className="whitespace-nowrap rounded-full border border-white bg-transparent px-3 py-1.5 text-[11px] font-semibold leading-none text-white transition hover:bg-white hover:text-slate-900 sm:px-4 sm:py-2 sm:text-sm"
        >
          Try ENAMR
        </Link>
        </div>
      </div>
    </header>
  );
}
