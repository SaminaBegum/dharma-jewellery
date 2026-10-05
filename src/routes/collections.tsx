import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import heroAsset from "@/assets/necklace.jpg.asset.json";
const hero = heroAsset.url;
export const Route = createFileRoute("/collections")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => typeof search["category"] === "string" && categories.includes(search["category"] as typeof categories[number]) ? { category: search["category"] as string } : {},
  head: () => ({ meta: [{ title: "Collections — Dharma Jewellery" }, { name: "description", content: "Shop necklaces, rings, earrings and bracelets by Dharma." }, { property: "og:title", content: "Collections — Dharma Jewellery" }, { property: "og:description", content: "Shop fine jewellery by Dharma." }] }),
  component: Page,
});
function Page() {
  const { category } = Route.useSearch();
  const cat = category ?? "All";
  const navigate = Route.useNavigate();
  const [sort, setSort] = useState("featured");
  const list = products.filter((p) => cat === "All" || p.cat === cat);
  const sorted = [...list].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
  return (<Shell><PageHero eyebrow="Shop" title="Our Collections" img={hero} />
    <Container className="py-12">
      <div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow text-gold">The collection / {String(sorted.length).padStart(2, "0")} pieces</p><h2 className="mt-2 text-3xl md:text-4xl">Find your forever piece</h2></div>
        <label className="flex items-center gap-3 text-xs text-muted-foreground">Sort by <select aria-label="Sort pieces" value={sort} onChange={(e) => setSort(e.target.value)} className="border border-border bg-background px-3 py-2 text-foreground"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
      </div>
      <div className="mt-7 flex gap-2 overflow-x-auto pb-2">{["All", ...categories].map((c) => <Button key={c} variant={cat === c ? "gold" : "goldOutline"} onClick={() => navigate({ to: "/collections", search: { category: c } })} className="shrink-0 uppercase text-xs" aria-pressed={cat === c}>{c}</Button>)}</div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">{sorted.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
    </Container></Shell>);
}
