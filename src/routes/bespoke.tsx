import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import imgAsset from "@/assets/bespoke.jpg.asset.json";
const img = imgAsset.url;
export const Route = createFileRoute("/bespoke")({
  head: () => ({ meta: [{ title: "Bespoke Jewellery — Dharma Jewellery" }, { name: "description", content: "Your story. Our craft." }, { property: "og:title", content: "Bespoke Jewellery — Dharma Jewellery" }, { property: "og:description", content: "Your story. Our craft." }] }),
  component: () => (<Shell><PageHero eyebrow="Dharma" title="Bespoke Jewellery" sub="Your story. Our craft." img={img} />
    <Container className="py-16"><p className="max-w-2xl font-serif text-2xl leading-relaxed">Share your idea, meet our designers, and watch your one-of-a-kind piece come to life — from first sketch to timeless heirloom.</p><Link to="/collections" className="btn-gold mt-8">Explore Collections</Link></Container></Shell>),
});
