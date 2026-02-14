"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ModalType = "privacy" | "terms" | null;

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [modal, setModal] = useState<ModalType>(null);
  const [showWaitlistBox, setShowWaitlistBox] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure page loads at the top
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Handle hash links only if explicitly navigating to them
    // Otherwise, ensure we stay at top
    const handleHashChange = () => {
      if (window.location.hash && window.location.hash !== '#waitlist') {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    // If there's a hash on initial load, clear it to prevent auto-scroll
    if (window.location.hash === '#waitlist') {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (emailStatus !== "success") {
      return;
    }
    const timer = window.setTimeout(() => {
      setShowWaitlistBox(false);
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [emailStatus]);

  const emailHelperText = useMemo(() => {
    if (emailStatus === "error") {
      return emailErrorMessage || "Please enter a valid email address.";
    }
    if (emailStatus === "success") {
      return "Thanks for joining. Please check your email to confirm.";
    }
    if (emailStatus === "loading") {
      return "Submitting your email...";
    }
    return "Apply now for early access and lock in a free 1-1 results call.";
  }, [emailStatus]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailErrorMessage("Please enter a valid email address.");
      setEmailStatus("error");
      return;
    }
    setEmailStatus("loading");
    setEmailErrorMessage("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        setEmailErrorMessage(
          errorPayload?.error ||
            "Please enter a valid email address or try again later."
        );
        setEmailStatus("error");
        return;
      }

      setEmailStatus("success");
      setEmail("");
    } catch (error) {
      setEmailErrorMessage(
        "Please enter a valid email address or try again later."
      );
      setEmailStatus("error");
    }
  };

  return (
    <div className="shimmer-bg text-slate-900 relative z-10 min-h-screen flex flex-col w-full">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3 font-[var(--font-display)] text-lg font-semibold uppercase tracking-[0.4em] text-white">
          ENAMR HEALTH
        </div>
      </header>

      <section className="video-section relative overflow-hidden w-full z-20">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover z-10 video-grayscale"
          style={{ filter: 'grayscale(100%)', WebkitFilter: 'grayscale(100%)' }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/updated-opener.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 z-20" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 text-white sm:py-20 z-30 sm:px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              What if your health started with your mouth?
            </h1>
          </div>
          {showWaitlistBox && (
            <div
              className="max-w-xl rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              id="waitlist"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Join the wait list today
              </p>
              <p
                className={`mt-2 text-sm ${
                  emailStatus === "error" ? "text-red-200" : "text-white/70"
                }`}
                aria-live="polite"
              >
                {emailHelperText}
              </p>
              <form
                className="mt-4 flex flex-col gap-3 sm:flex-row"
                onSubmit={handleSubmit}
              >
                <input
                  className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  aria-label="Email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailStatus !== "idle") {
                      setEmailStatus("idle");
                      setEmailErrorMessage("");
                    }
                  }}
                />
                <button
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  type="submit"
                  disabled={emailStatus === "loading"}
                >
                  {emailStatus === "loading" ? "Joining..." : "Join Now"}
                </button>
              </form>
            </div>
          )}
          <div className="max-w-2xl space-y-4">
            <p className="text-base leading-relaxed text-white font-semibold sm:text-lg">
              Your mouth is too important to keep guessing. Enamr Health has built the ultimate oral care loop - test, track, and treat from home. With 100+ signals and personalized next-steps to reach your goals.
            </p>
            <p className="text-base italic text-white/80 sm:text-lg">
              Launching Summer 2026
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-with-lights relative overflow-hidden flex-grow">
        <div className="footer-light-1"></div>
        <div className="footer-light-2"></div>
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pt-10 pb-10 text-white">
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="font-[var(--font-display)] text-xs uppercase tracking-[0.3em] text-white">
                Enamr Health
              </p>
              <p className="text-sm leading-relaxed text-white/80">Copyright © 2026 Enamr Health. All Rights Reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm text-white/80 transition hover:text-white"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <button
                className="text-sm text-white/80 transition hover:text-white"
                type="button"
                onClick={() => setModal("privacy")}
              >
                Privacy
              </button>
              <button
                className="text-sm text-white/80 transition hover:text-white"
                type="button"
                onClick={() => setModal("terms")}
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-sm text-slate-700 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                {modal === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <button
                className="text-slate-500 transition hover:text-slate-900"
                type="button"
                onClick={() => setModal(null)}
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {modal === "privacy"
                ? "We respect your privacy. This is a placeholder until the official policy is published."
                : "These terms are a placeholder until the official terms are published."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
