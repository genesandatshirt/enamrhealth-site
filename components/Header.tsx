"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
        <div className="relative mx-auto w-full max-w-6xl rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl sm:px-6 sm:py-3">
          <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur-xl transition hover:bg-white/15 hover:text-white sm:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Desktop left label */}
            <Link
              href="/"
              className="hidden font-[var(--font-display)] text-sm font-semibold uppercase leading-none tracking-[0.2em] text-white sm:block sm:text-base sm:tracking-[0.35em] md:text-lg md:tracking-[0.4em]"
            >
              ENAMR HEALTH
            </Link>

            {/* Mobile centered label */}
            <Link
              href="/"
              className="justify-self-center font-[var(--font-display)] text-[clamp(10px,3vw,13px)] font-semibold uppercase leading-none tracking-[0.18em] text-white sm:hidden"
            >
              ENAMR HEALTH
            </Link>

            {/* Desktop center nav */}
            <nav className="hidden justify-self-center gap-6 sm:flex">
              <Link
                href="/our-story"
                className="whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white md:text-base"
              >
                Every Mouth Has a Story
              </Link>
              <Link
                href="/shop"
                className="whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white md:text-base"
              >
                Shop
              </Link>
            </nav>

            <Link
              href="/#waitlist"
              className="justify-self-end whitespace-nowrap rounded-full border border-white bg-transparent px-2.5 py-1.5 text-[clamp(9px,2.6vw,11px)] font-semibold leading-none text-white transition hover:bg-white hover:text-slate-900 sm:px-4 sm:py-2 sm:text-sm"
            >
              Try ENAMR
            </Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[min(360px,86vw)] border-r border-white/15 bg-black/30 p-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.28em] text-white">
                ENAMR
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 transition hover:bg-white/15 hover:text-white"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-8 space-y-2">
              <Link
                href="/our-story"
                className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Every Mouth Has a Story
              </Link>
              <Link
                href="/shop"
                className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/providers"
                className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Providers
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
