"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { OurStoryArticleMeta, OurStoryCategory } from "./articles/registry";

type SortOption = "newest" | "oldest";

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export function OurStoryLearnHub({
  articles,
}: {
  articles: OurStoryArticleMeta[];
}) {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<
    Set<OurStoryCategory>
  >(new Set());
  const [sort, setSort] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = useMemo(() => {
    const set = new Set<OurStoryCategory>();
    for (const article of articles) {
      set.add(article.category);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [articles]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    const hasCategoryFilter = selectedCategories.size > 0;

    const matches = articles.filter((article) => {
      if (hasCategoryFilter && !selectedCategories.has(article.category)) {
        return false;
      }
      if (!q) {
        return true;
      }
      const haystack = normalize(
        `${article.title} ${article.subtitle ?? ""} ${article.excerpt} ${
          article.category
        } ${article.author}`
      );
      return haystack.includes(q);
    });

    matches.sort((a, b) => {
      if (sort === "newest") {
        return b.publishedAt.localeCompare(a.publishedAt);
      }
      return a.publishedAt.localeCompare(b.publishedAt);
    });

    return matches;
  }, [articles, query, selectedCategories, sort]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;
  const hasFilters = query.trim().length > 0 || selectedCategories.size > 0;

  const clearFilters = () => {
    setQuery("");
    setSelectedCategories(new Set());
    setVisibleCount(12);
  };

  const toggleCategory = (category: OurStoryCategory) => {
    setVisibleCount(12);
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/90">
                Search by Category
              </p>
              {hasFilters && (
                <button
                  type="button"
                  className="text-sm font-semibold text-white/70 transition hover:text-white"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="mt-4 space-y-2">
              {categories.map((category) => {
                const active = selectedCategories.has(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={[
                      "flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition",
                      active
                        ? "border-white/30 bg-white/15 text-white"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    <span>{category}</span>
                    {active && (
                      <span className="text-xs font-semibold text-white/70">
                        Selected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Search + sort */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:max-w-md">
              <label className="sr-only" htmlFor="learn-search">
                Search articles
              </label>
              <input
                id="learn-search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur-xl transition focus:border-white/40"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-white/70">
                Showing <span className="text-white/90">{visible.length}</span>{" "}
                of <span className="text-white/90">{filtered.length}</span>
              </div>
              <label className="sr-only" htmlFor="learn-sort">
                Sort
              </label>
              <select
                id="learn-sort"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as SortOption);
                  setVisibleCount(12);
                }}
                className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none backdrop-blur-xl"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Mobile category chips */}
          <div className="mt-4 lg:hidden">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">
                Categories
              </div>
              {hasFilters && (
                <button
                  type="button"
                  className="text-sm font-semibold text-white/70 transition hover:text-white"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = selectedCategories.has(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                      active
                        ? "border-white/30 bg-white/20 text-white"
                        : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visible.map((article) => (
              <Link
                key={article.slug}
                href={`/our-story/${article.slug}`}
                className="group rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {article.category}
                  </div>
                  <div className="text-xs text-white/60">
                    {article.publishedAtLabel}
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="mt-2 text-sm italic text-white/75">
                    {article.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-sm font-semibold text-white/85 transition group-hover:text-white">
                  Read →
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 text-white/80 backdrop-blur-xl">
              <p className="text-base font-semibold text-white">
                No results found
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Try searching another term or choosing a different category.
              </p>
              {hasFilters && (
                <button
                  type="button"
                  className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/15"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Load more */}
          {filtered.length > 0 && (
            <div className="mt-10 flex justify-center">
              {canLoadMore ? (
                <button
                  type="button"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  onClick={() => setVisibleCount((c) => c + 12)}
                >
                  Load more
                </button>
              ) : (
                <div className="text-sm text-white/60">
                  You’ve reached the end.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

