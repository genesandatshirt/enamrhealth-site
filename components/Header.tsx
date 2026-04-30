"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DesktopDropdown = "explore" | "shop" | null;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<DesktopDropdown>(null);
  const desktopCloseTimerRef = useRef<number | null>(null);

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

  useEffect(() => {
    return () => {
      if (desktopCloseTimerRef.current) {
        window.clearTimeout(desktopCloseTimerRef.current);
      }
    };
  }, []);

  const openDropdown = (name: Exclude<DesktopDropdown, null>) => {
    if (desktopCloseTimerRef.current) {
      window.clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
    setDesktopDropdown(name);
  };

  const closeDropdownWithDelay = (delayMs = 900) => {
    if (desktopCloseTimerRef.current) {
      window.clearTimeout(desktopCloseTimerRef.current);
    }
    desktopCloseTimerRef.current = window.setTimeout(() => {
      setDesktopDropdown(null);
      desktopCloseTimerRef.current = null;
    }, delayMs);
  };

  const dropdownOpen = (name: Exclude<DesktopDropdown, null>) =>
    desktopDropdown === name;

  return (
    <>
      {/* Desktop dropdown backdrop (keeps menu feeling "in front") */}
      {desktopDropdown && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed left-0 right-0 bottom-0 top-24 z-[40] hidden bg-black/35 backdrop-blur-[1px] sm:block"
          onClick={() => setDesktopDropdown(null)}
        />
      )}

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
            <nav className="hidden justify-self-center gap-8 sm:flex md:gap-10">
              <div
                className="group/explore"
                onMouseEnter={() => openDropdown("explore")}
                onMouseLeave={() => closeDropdownWithDelay(900)}
                onFocus={() => openDropdown("explore")}
                onBlur={() => closeDropdownWithDelay(450)}
              >
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white md:text-base"
                >
                  Explore
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={[
                      "h-4 w-4 text-white/70 transition",
                      dropdownOpen("explore") ? "rotate-180 text-white/90" : "",
                    ].join(" ")}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {/* Hover dropdown (desktop) — positioned under the header bubble */}
                <div
                  className={[
                    "absolute left-1/2 top-full z-[90] w-[min(640px,calc(100vw-32px))] -translate-x-1/2 pt-4 transition duration-200",
                    dropdownOpen("explore")
                      ? "visible pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "invisible pointer-events-none translate-y-2 scale-[0.98] opacity-0",
                  ].join(" ")}
                  onMouseEnter={() => openDropdown("explore")}
                  onMouseLeave={() => closeDropdownWithDelay(900)}
                >
                  <div className="relative">
                    {/* Little “pointer” so panel feels attached, without overlap */}
                    <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rotate-45 border border-white/20 bg-slate-950/90 backdrop-blur-2xl" />

                    <div className="relative rounded-3xl border border-white/25 bg-slate-950/95 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-4">
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/16 via-white/8 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_55%)]" />

                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Link
                          href="/our-story"
                          className="relative group/item rounded-2xl border border-white/15 bg-white/12 p-4 transition hover:border-white/30 hover:bg-white/16"
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                            Browse
                          </div>
                          <div className="mt-2 text-base font-semibold text-white">
                            All Explore
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/70">
                            Search, filter, and explore Enamr stories.
                          </div>
                          <div className="mt-4 text-sm font-semibold text-white/85 transition group-hover/item:text-white">
                            Open hub →
                          </div>
                        </Link>

                        <Link
                          href="/our-story/every-mouth-has-a-story"
                          className="relative group/item rounded-2xl border border-white/15 bg-white/12 p-4 transition hover:border-white/30 hover:bg-white/16"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/75">
                              Featured
                            </div>
                            <div className="text-xs text-white/60">
                              March 12th, 2026
                            </div>
                          </div>
                          <div className="mt-3 text-base font-semibold text-white">
                            Every Mouth Has a Story
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/70">
                            Why we started Enamr Health.
                          </div>
                          <div className="mt-4 text-sm font-semibold text-white/85 transition group-hover/item:text-white">
                            Read →
                          </div>
                        </Link>
                      </div>

                      <div className="mt-3 flex items-center justify-between px-1">
                        <div className="text-xs text-white/60">
                          Category: Enamr
                        </div>
                        <Link
                          href="/our-story"
                          className="text-xs font-semibold text-white/75 transition hover:text-white"
                        >
                          View all →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group/shop"
                onMouseEnter={() => openDropdown("shop")}
                onMouseLeave={() => closeDropdownWithDelay(900)}
                onFocus={() => openDropdown("shop")}
                onBlur={() => closeDropdownWithDelay(450)}
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white md:text-base"
                >
                  Shop
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={[
                      "h-4 w-4 text-white/70 transition",
                      dropdownOpen("shop") ? "rotate-180 text-white/90" : "",
                    ].join(" ")}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div
                  className={[
                    "absolute left-1/2 top-full z-[90] w-[min(640px,calc(100vw-32px))] -translate-x-1/2 pt-4 transition duration-200",
                    dropdownOpen("shop")
                      ? "visible pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "invisible pointer-events-none translate-y-2 scale-[0.98] opacity-0",
                  ].join(" ")}
                  onMouseEnter={() => openDropdown("shop")}
                  onMouseLeave={() => closeDropdownWithDelay(900)}
                >
                  <div className="relative">
                    <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rotate-45 border border-white/20 bg-slate-950/90 backdrop-blur-2xl" />

                    <div className="relative rounded-3xl border border-white/25 bg-slate-950/95 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-4">
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/16 via-white/8 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_55%)]" />

                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Link
                          href="/shop"
                          className="relative group/item rounded-2xl border border-white/15 bg-white/12 p-4 transition hover:border-white/30 hover:bg-white/16"
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                            Browse
                          </div>
                          <div className="mt-2 text-base font-semibold text-white">
                            Shop all
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/70">
                            Explore tests and products designed for the oral care loop.
                          </div>
                          <div className="mt-4 text-sm font-semibold text-white/85 transition group-hover/item:text-white">
                            Open shop →
                          </div>
                        </Link>

                        <Link
                          href="/shop"
                          className="relative group/item rounded-2xl border border-white/15 bg-white/12 p-4 transition hover:border-white/30 hover:bg-white/16"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/75">
                              Coming soon
                            </div>
                            <div className="text-xs text-white/60">2026</div>
                          </div>
                          <div className="mt-3 text-base font-semibold text-white">
                            Enamr Shop
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/70">
                            A small preview of what’s coming next.
                          </div>
                          <div className="mt-4 text-sm font-semibold text-white/85 transition group-hover/item:text-white">
                            Preview →
                          </div>
                        </Link>
                      </div>

                      <div className="mt-3 flex items-center justify-between px-1">
                        <div className="text-xs text-white/60">
                          Filter by category or indication
                        </div>
                        <Link
                          href="/shop"
                          className="text-xs font-semibold text-white/75 transition hover:text-white"
                        >
                          View shop →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                Explore
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
