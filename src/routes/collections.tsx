


import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import { Gem, Gift, ShieldCheck } from "lucide-react";
import { Callout, FeatureGrid } from "@/components/site/EditorialSections";

import hero from "@/assets/necklace.jpg";

export const Route = createFileRoute("/collections")({
  validateSearch: (
    search: Record<string, unknown>
  ): { category?: string } =>
    typeof search["category"] === "string" &&
    categories.includes(search["category"] as typeof categories[number])
      ? { category: search["category"] as string }
      : {},

  head: () => ({
    meta: [
      { title: "Collections — Dharma Jewellery" },
      {
        name: "description",
        content:
          "Shop necklaces, rings, earrings and bracelets by Dharma.",
      },
      {
        property: "og:title",
        content: "Collections — Dharma Jewellery",
      },
      {
        property: "og:description",
        content: "Shop fine jewellery by Dharma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  const cat = category ?? "All";
  const navigate = Route.useNavigate();
  const [sort, setSort] = useState("featured");

  const list = products.filter(
    (p) => cat === "All" || p.cat === cat
  );

  const sorted = [...list].sort((a, b) =>
    sort === "low"
      ? a.price - b.price
      : sort === "high"
        ? b.price - a.price
        : 0
  );

  return (
    <Shell>
      <PageHero
        eyebrow="Shop"
        title="Our Collections"
        img={hero}
      />

      <div className="bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="py-12">

          {/* Collection Header */}
          <div className="flex flex-col gap-5 border-b border-[oklch(28%_.1_15_/_20%)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold">
                The collection /{" "}
                {String(sorted.length).padStart(2, "0")} pieces
              </p>

              <h2 className="mt-2 text-3xl text-[oklch(28%_.1_15)] md:text-4xl">
                Find your forever piece
              </h2>
            </div>

            {/* Sort */}
            <label className="flex items-center gap-3 text-xs text-[oklch(28%_.1_15)]">
              Sort by

              <select
                aria-label="Sort pieces"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-[oklch(28%_.1_15_/_30%)] bg-[oklch(93%_.025_80)] px-3 py-2 text-[oklch(28%_.1_15)] outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </label>
          </div>

          {/* Categories */}
          <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
            {["All", ...categories].map((c) => (
              <Button
                key={c}
                variant={cat === c ? "gold" : "goldOutline"}
                onClick={() =>
                  navigate({
                    to: "/collections",
                    search: { category: c },
                  })
                }
                className="shrink-0 uppercase text-xs"
                aria-pressed={cat === c}
              >
                {c}
              </Button>
            ))}
          </div>

          {/* Products */}
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {sorted.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>

        </Container>
      </div>
      {/* <FeatureGrid eyebrow="The Dharma promise" title="Chosen with confidence" items={[
        { icon: Gem, title: "Fine craftsmanship", copy: "Every piece is carefully finished and inspected before it becomes part of your story." },
        { icon: ShieldCheck, title: "Considered care", copy: "Our team is here to guide you through selection, sizing and care for years to come." },
        { icon: Gift, title: "Signature presentation", copy: "Each order arrives in distinctive Dharma packaging, ready to keep or give." },
      ]} /> */}
     
    </Shell>
  );
}


