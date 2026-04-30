import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { OUR_STORY_ARTICLES } from "@/components/our-story/articles/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return OUR_STORY_ARTICLES.find((a) => a.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return OUR_STORY_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Enamr Health`,
    description: article.excerpt,
  };
}

export default async function OurStoryArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  const Content = article.Content;

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
            href="/our-story"
            className="text-sm text-white/60 transition hover:text-white/90"
          >
            ← Back to Every Mouth Has a Story
          </Link>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {article.category}
            </div>
            <span className="text-white/25">•</span>
            <time
              className="text-sm text-white/60"
              dateTime={article.publishedAt}
            >
              {article.publishedAtLabel}
            </time>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-4 text-lg italic text-white/80">
              {article.subtitle}
            </p>
          )}

          <div className="mt-6 text-sm text-white/60">{article.author}</div>

          <hr className="mt-8 border-white/10" />

          <Content />
        </article>
      </main>
    </div>
  );
}

