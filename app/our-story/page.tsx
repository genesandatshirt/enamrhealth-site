import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Every Mouth Has a Story | Enamr Health",
  description: "The story behind Enamr Health.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white/90"
          >
            ← Back to home
          </Link>
        </div>

        {/* Hero image (B&W) */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-white/5">
            <Image
              src="/our-story-hero-mouth.png"
              alt="Abstract mouths collage"
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Blog article layout - Superpower style */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Every Mouth Has a Story
          </h1>

          <p className="mt-4 text-lg italic text-white/80">
            Why we’re building the ultimate oral care loop.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/60">
            <time dateTime="2026-02-14">February 14, 2026</time>
            <span>The Enamr Health Team</span>
          </div>

          <div className="prose prose-invert mt-12 max-w-none prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight">
            <p className="text-lg leading-relaxed text-white/90">
              Your mouth is too important to keep guessing. We started Enamr to
              give you a clear picture of your oral and overall health—and
              actionable steps to improve it.
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Why oral health first
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              The mouth is a window into the rest of the body. With 100+ human
              and microbiome signals, we help you test, track, and treat from
              home—so you can reach your goals with confidence.
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What’s next
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              We’re building the ultimate oral care loop: test, track, and treat
              in one place. Launching Summer 2026. Join the wait list to be the
              first to know.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
