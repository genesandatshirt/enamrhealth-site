import type { ComponentType } from "react";
import { EveryMouthHasAStoryContent } from "./EveryMouthHasAStory";

export type OurStoryCategory = "Enamr";

export type OurStoryArticleMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: OurStoryCategory;
  publishedAt: string; // ISO date (YYYY-MM-DD) for sorting
  publishedAtLabel: string;
  author: string;
};

export type OurStoryArticle = OurStoryArticleMeta & {
  Content: ComponentType;
};

export const OUR_STORY_ARTICLES: OurStoryArticle[] = [
  {
    slug: "every-mouth-has-a-story",
    title: "Every Mouth Has a Story",
    subtitle: "Why we started Enamr Health",
    excerpt:
      "Your mouth is the most surveilled environment in your body — and nobody’s watching. We started Enamr to flip oral health from reactive to continuous.",
    category: "Enamr",
    publishedAt: "2026-03-12",
    publishedAtLabel: "March 12th, 2026",
    author: "The Enamr Health Team",
    Content: EveryMouthHasAStoryContent,
  },
];

// Serializable version (safe to pass to Client Components)
export const OUR_STORY_ARTICLE_INDEX: OurStoryArticleMeta[] =
  OUR_STORY_ARTICLES.map(({ Content: _Content, ...meta }) => meta);

