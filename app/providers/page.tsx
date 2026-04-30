import Header from "@/components/Header";

export const metadata = {
  title: "Providers | Enamr Health",
  description:
    "Enamr helps providers track oral health between visits with longitudinal microbiome and biomarker reporting.",
};

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Full-page background video (behind header/content) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/our-story-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <Header />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          The mouth between visits.
        </h1>
        <p className="mt-4 text-lg italic text-white/80">
          Six-month recall leaves you guessing about everything in between. Enamr
          fills it in.
        </p>

        <div className="mt-10 space-y-5 text-white/85">
          <p className="leading-relaxed">
            Patients collect saliva at home. You get a clinically structured
            report on their oral microbiome and the biomarkers driving{" "}
            <strong className="text-white/95">caries</strong>,{" "}
            <strong className="text-white/95">periodontal disease</strong>, and{" "}
            <strong className="text-white/95">systemic risk</strong> — built by
            scientists and practicing dentists to fit how you already work.
          </p>

          <div className="pt-2">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              What you get
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                <span>Longitudinal oral health tracking, per patient</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                <span>Defensible risk stratification at the chair</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                <span>
                  A patient-facing report that makes prevention conversations
                  easier
                </span>
              </li>
            </ul>
          </div>

          <p className="leading-relaxed">
            Our 2026 provider pilot is open to a small cohort of dental,
            periodontal, and functional medicine practices.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            href="mailto:partnerships@enamr.com?subject=Provider%20pilot%20application"
          >
            Apply for the pilot →
          </a>
          <p className="text-sm text-white/70">
            Researcher, DSO, or strategic partner? Email{" "}
            <a
              className="font-semibold text-white/85 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
              href="mailto:partnerships@enamr.com"
            >
              partnerships@enamr.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

