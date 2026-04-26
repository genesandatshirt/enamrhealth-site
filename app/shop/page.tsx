import Header from "@/components/Header";

export const metadata = {
  title: "Shop | Enamr Health",
  description: "Shop Enamr Health.",
};

export default function ShopPage() {
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

      <main className="relative mx-auto w-full max-w-3xl px-6 pb-24 pt-24 sm:pt-28">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Shop
        </h1>
        <p className="mt-4 text-lg italic text-white/80">Coming soon.</p>
      </main>
    </div>
  );
}

