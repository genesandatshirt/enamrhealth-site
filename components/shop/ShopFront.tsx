"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ShopCategory, ShopIndication, ShopProduct } from "./products/registry";

function sortAlpha<T extends string>(items: T[]) {
  return [...items].sort((a, b) => a.localeCompare(b));
}

export function ShopFront({ products }: { products: ShopProduct[] }) {
  const [selectedCategories, setSelectedCategories] = useState<
    Set<ShopCategory>
  >(new Set());
  const [selectedIndications, setSelectedIndications] = useState<
    Set<ShopIndication>
  >(new Set());

  const categories = useMemo(() => {
    const set = new Set<ShopCategory>();
    for (const p of products) set.add(p.category);
    return sortAlpha(Array.from(set));
  }, [products]);

  const indications = useMemo(() => {
    const set = new Set<ShopIndication>();
    for (const p of products) {
      for (const ind of p.indications) set.add(ind);
    }
    return sortAlpha(Array.from(set));
  }, [products]);

  const filtered = useMemo(() => {
    const categoryFiltered =
      selectedCategories.size === 0
        ? products
        : products.filter((p) => selectedCategories.has(p.category));

    const indicationFiltered =
      selectedIndications.size === 0
        ? categoryFiltered
        : categoryFiltered.filter((p) =>
            p.indications.some((i) => selectedIndications.has(i))
          );

    return indicationFiltered;
  }, [products, selectedCategories, selectedIndications]);

  const hasFilters =
    selectedCategories.size > 0 || selectedIndications.size > 0;

  const clearFilters = () => {
    setSelectedCategories(new Set());
    setSelectedIndications(new Set());
  };

  const toggleCategory = (category: ShopCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const toggleIndication = (indication: ShopIndication) => {
    setSelectedIndications((prev) => {
      const next = new Set(prev);
      if (next.has(indication)) next.delete(indication);
      else next.add(indication);
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
              <p className="text-sm font-semibold text-white/90">Filter</p>
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

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Category
              </p>
              <div className="mt-3 space-y-2">
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

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Indication
              </p>
              <div className="mt-3 space-y-2">
                {indications.map((indication) => {
                  const active = selectedIndications.has(indication);
                  return (
                    <button
                      key={indication}
                      type="button"
                      onClick={() => toggleIndication(indication)}
                      className={[
                        "flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition",
                        active
                          ? "border-white/30 bg-white/15 text-white"
                          : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                      ].join(" ")}
                    >
                      <span>{indication}</span>
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
          </div>
        </aside>

        <div className="min-w-0">
          {/* Mobile chips */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">Filter</div>
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

            <div className="mt-3 space-y-3">
              <div className="flex flex-wrap gap-2">
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

              <div className="flex flex-wrap gap-2">
                {indications.map((indication) => {
                  const active = selectedIndications.has(indication);
                  return (
                    <button
                      key={indication}
                      type="button"
                      onClick={() => toggleIndication(indication)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                        active
                          ? "border-white/30 bg-white/20 text-white"
                          : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
                      ].join(" ")}
                    >
                      {indication}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-white/70">
              Showing{" "}
              <span className="text-white/90">{filtered.length}</span> of{" "}
              <span className="text-white/90">{products.length}</span>
            </div>
            {hasFilters && (
              <div className="text-sm text-white/60">Filtered</div>
            )}
          </div>

          {/* Product grid */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {product.category}
                  </div>
                  <div className="text-xs text-white/60">
                    {product.statusLabel}
                  </div>
                </div>

                <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/shop-hero.png"
                    alt="Enamr Shop"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 40vw, 90vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/55" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                      Coming soon
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {product.name}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/75">
                  {product.description}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.indications.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70"
                    >
                      {ind}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm font-semibold text-white/85">
                  {product.priceLabel}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 text-white/80 backdrop-blur-xl">
              <p className="text-base font-semibold text-white">
                No products match your filters
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Try clearing filters or selecting a different category or
                indication.
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
        </div>
      </div>
    </div>
  );
}

