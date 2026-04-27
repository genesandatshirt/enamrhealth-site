import Header from "@/components/Header";

export const metadata = {
  title: "Providers | Enamr Health",
  description: "Information for doctors and medical providers.",
};

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
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

      <main className="relative mx-auto w-full max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Providers
        </h1>
        <p className="mt-4 text-lg italic text-white/80">
          Are you a healthcare provider?
        </p>

        <div className="mt-10 space-y-4 text-white/85">
          <p className="leading-relaxed">
            We’re building Enamr Health to bring oral biomarkers into a modern,
            actionable care loop — for patients at home and clinicians who want
            better longitudinal signal.
          </p>
          <p className="leading-relaxed">
            If you’re interested in early access, partnerships, or piloting with
            your practice, please reach out.
          </p>
        </div>

        <div className="mt-10">
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            href="mailto:team@enamrhealth.com?subject=Provider%20interest"
          >
            Email our team
          </a>
        </div>
      </main>
    </div>
  );
}

