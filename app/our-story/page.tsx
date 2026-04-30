import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { OUR_STORY_ARTICLE_INDEX } from "@/components/our-story/articles/registry";
import { OurStoryLearnHub } from "@/components/our-story/OurStoryLearnHub";

export const metadata = {
  title: "Every Mouth Has a Story | Enamr Health",
  description: "Learn the science and culture of oral health with Enamr Health.",
};

export default function OurStoryPage() {
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

      <main className="relative z-10 pt-24 sm:pt-28">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white/90"
          >
            ← Back to home
          </Link>
        </div>

        {/* Learn hub header */}
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Every Mouth Has a Story
              </h1>

              <p className="mt-4 text-lg italic text-white/80">
                Learn the science and culture of oral health.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/explore-hero-v2.png"
                  alt="Explore"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <OurStoryLearnHub articles={OUR_STORY_ARTICLE_INDEX} />
      </main>
    </div>
  );
}
