export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">
          ENAMR HEALTH
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a className="transition hover:text-slate-900" href="#platform">
            Our Platform
          </a>
          <a className="transition hover:text-slate-900" href="#science">
            The Science
          </a>
          <a className="transition hover:text-slate-900" href="#products">
            Products
          </a>
          <a className="transition hover:text-slate-900" href="#story">
            Our Story
          </a>
        </nav>
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
            src="/6502319-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/55 to-slate-900/20" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-24 text-white sm:py-28">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Enamr Health
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              What if your health started with your mouth?
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Enamr is a digital oral health platform that translates oral
              biomarkers, images, and insights into actionable plans. We make
              oral health measurable, preventive, and connected to whole-body
              health.
            </p>
          </div>
          <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Join the waitlist today
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
            <p className="mt-3 text-xs text-white/70">
              Apply now for early access and lock in a free 1-1 results call.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-3"
        id="platform"
      >
        {[
          {
            title: "Test",
            image: "/test_box.png",
            description:
              "Leverage clinical diagnostics in oral health through saliva biomarkers.",
          },
          {
            title: "Track",
            image: "/xEtsDg19VXiUl82t3m2qO.png",
            description:
              "AI imaging, health questionnaires, and tele-dentistry for your oral health journey.",
          },
          {
            title: "Treat",
            image: "/Zi1e-m-93S6uuft27ro6H.png",
            description:
              "Choose from personalized care plans fit to your body and lifestyle.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <img
              alt=""
              className="h-40 w-full rounded-2xl object-cover"
              src={item.image}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {item.title}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
            <div className="mt-6 h-1 w-16 rounded-full bg-slate-200" />
          </div>
        ))}
      </section>

      <section className="bg-slate-50" id="science">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Multiple insights. One platform.
            </h2>
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                1. Enamr Questionnaire — find out quickly what those signals
                really mean.
              </p>
              <p>
                2. Visual Exam — research-grade imaging designed to catch
                signals your eyes miss.
              </p>
              <p>
                3. Oral Biomarkers — 100+ biomarkers in your saliva, starting
                with your oral microbiome.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white">
                View the Report
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700">
                Join the Waitlist
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <img
              alt="Enamr test kit preview"
              className="h-80 w-64 rounded-2xl object-cover"
              src="/Picture1.png"
            />
            <p className="mt-4 text-sm text-slate-500">
              Interactive report preview coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="products">
        <h2 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          Products mapped to biology—not trends.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600">
          We recommend products through affiliate partnerships when they fit
          your measured needs: gum health, biofilm control, sensitivity, saliva
          support, and more.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Enamr Health Biomarker Test",
              price: "$250 / 6 months",
              image: "/test_box.png",
            },
            {
              name: "Suri Toothbrush",
              price: "$95",
              image: "/h9YsvpFvuAEvb1OXNOhZi.jpeg",
            },
            {
              name: "Revitin Toothpaste",
              price: "$7.00",
              image: "/X6T95P7FuWDPXFuODr9ZK.png",
            },
          ].map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <img
                alt={product.name}
                className="h-40 w-full rounded-xl object-cover"
                src={product.image}
              />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{product.price}</p>
              <button className="mt-6 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900" id="waitlist">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 text-white md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Try the test.</h2>
            <p className="text-lg text-white/80">Change your health.</p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Sign up
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
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
