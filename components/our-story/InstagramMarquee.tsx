"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type InstagramPost = {
  id: string;
  caption: string;
  imageSrc: string;
  href?: string;
};

const INSTAGRAM_PROFILE_URL = "https://instagram.com/enamrhealth";

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    caption: "The oral microbiome is an ecosystem — not a snapshot.",
    imageSrc: "/brand-asset-1.png",
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: "post-2",
    caption: "What your mouth says about inflammation and risk.",
    imageSrc: "/brand-asset-2.png",
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: "post-3",
    caption: "Culture, care, and the rituals that shape oral health.",
    imageSrc: "/brand-asset-3.png",
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: "post-4",
    caption: "A clearer picture between visits.",
    imageSrc: "/our-story-hero-mouth.png",
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: "post-5",
    caption: "Tests, care, supplements — coming soon.",
    imageSrc: "/test_box.png",
    href: INSTAGRAM_PROFILE_URL,
  },
];

export function InstagramMarquee() {
  const track = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="mt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            From Instagram
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
            Recent posts
          </h2>
        </div>

        <Link
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          @enamrhealth <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
        <div className="enamr-marquee-viewport -m-1 overflow-hidden">
          <div
            className="enamr-marquee flex w-max gap-3 p-1"
            style={
              {
                ["--marquee-duration" as never]: `${Math.max(
                  34,
                  INSTAGRAM_POSTS.length * 9
                )}s`,
              } as CSSProperties
            }
            aria-label="Recent Instagram posts"
          >
            {track.map((post, idx) => {
              const key = `${post.id}-${idx}`;
              const content = (
                <div className="w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={post.imageSrc}
                      alt={post.caption}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/60" />
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-2 text-sm leading-snug text-white/85">
                      {post.caption}
                    </p>
                  </div>
                </div>
              );

              if (!post.href) {
                return <div key={key}>{content}</div>;
              }

              return (
                <Link
                  key={key}
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-white/55">
          <div>Auto-scroll pauses on hover.</div>
          <div className="hidden sm:block">Drag/scroll to browse.</div>
        </div>
      </div>
    </section>
  );
}

