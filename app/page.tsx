export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3 font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.4em] text-slate-900">
          ENAMR HEALTH
        </div>
        <a
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          href="#waitlist"
        >
          Join the waitlist
        </a>
      </header>

      <section className="relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/h9YsvpFvuAEvb1OXNOhZi.jpeg"
        >
          <source
            src="/hero-brushing.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-24 text-white sm:py-32">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              What if your health started with your mouth?
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Explore the journey to better health and a healthier mouth with
              us.
            </p>
          </div>
          <div
            className="max-w-xl rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
            id="waitlist"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Join the wait list today
            </p>
            <p className="mt-2 text-sm text-white/70">
              Apply now for early access and lock in a free 1-1 results call.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                placeholder="Email address"
                type="email"
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-[var(--font-display)] text-xs uppercase tracking-[0.3em] text-slate-900">
              Enamr Health
            </p>
            <p>Copyright © 2026 Enamr Health. All Rights Reserved.</p>
          </div>
          <div className="flex gap-4">
            <a className="transition hover:text-slate-900" href="#">
              Instagram
            </a>
            <a className="transition hover:text-slate-900" href="#">
              Privacy
            </a>
            <a className="transition hover:text-slate-900" href="#">
              Terms
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 left-1/2 w-[min(92%,420px)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-4 text-xs text-slate-600 shadow-lg backdrop-blur">
        <p className="font-semibold text-slate-900">This website uses cookies.</p>
        <p className="mt-1 text-slate-500">
          We use cookies to analyze website traffic and optimize your website
          experience. By accepting our use of cookies, your data will be
          aggregated with all other user data.
        </p>
        <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
          Accept
        </button>
      </div>
    </div>
  );
}
