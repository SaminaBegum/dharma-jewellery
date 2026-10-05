import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import imgAsset from "@/assets/heritage.jpg.asset.json";
const img = imgAsset.url;
export const Route = createFileRoute("/stores")({
  head: () => ({ meta: [{ title: "Our Stores — Dharma Jewellery" }, { name: "description", content: "Step into Dharma." }, { property: "og:title", content: "Our Stores — Dharma Jewellery" }, { property: "og:description", content: "Step into Dharma." }] }),
  component: () => (<Shell><PageHero eyebrow="Dharma" title="Our Stores" sub="Step into Dharma." img={img} />
    <Container className="py-16"><p className="max-w-2xl font-serif text-2xl leading-relaxed">Visit our flagship showrooms to experience our collections in person. Store addresses coming soon.</p><Link to="/collections" className="btn-gold mt-8">Explore Collections</Link></Container></Shell>),
});
