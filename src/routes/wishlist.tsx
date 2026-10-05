import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { useStore } from "@/lib/store";
import { products } from "@/lib/products";
export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Dharma Jewellery" }, { name: "description", content: "Pieces you love." }, { property: "og:title", content: "Wishlist — Dharma" }, { property: "og:description", content: "Your saved pieces." }] }),
  component: Page,
});
function Page() {
  const { wishlist, ready } = useStore();
  const list = products.filter((p) => wishlist.includes(p.slug));
  return (<Shell><Container className="pt-28 pb-16">
    <p className="eyebrow text-gold">Pieces to remember</p><h1 className="mt-2 text-4xl uppercase md:text-5xl">Wishlist</h1>
    {!ready ? <p className="py-20 text-center">Loading saved pieces…</p> : !list.length ? <div className="py-20 text-center"><p>Nothing saved yet.</p><Link to="/collections" className="btn-gold mt-6">Explore Collections</Link></div> :
    <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>}
  </Container></Shell>);
}
