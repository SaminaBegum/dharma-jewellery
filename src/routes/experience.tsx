import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import imgAsset from "@/assets/hero.jpg.asset.json";
const img = imgAsset.url;
export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [{ title: "The Dharma Experience — Dharma Jewellery" }, { name: "description", content: "More than a purchase, a personal journey." }, { property: "og:title", content: "The Dharma Experience — Dharma Jewellery" }, { property: "og:description", content: "More than a purchase, a personal journey." }] }),
  component: () => (<Shell><PageHero eyebrow="Dharma" title="The Dharma Experience" sub="More than a purchase, a personal journey." img={img} />
    <Container className="py-16"><p className="max-w-2xl font-serif text-2xl leading-relaxed">Private and virtual consultations, bespoke design, gifting and lifelong jewellery care. Write to appointments@dharmajewellery.com to book.</p><Link to="/collections" className="btn-gold mt-8">Explore Collections</Link></Container></Shell>),
});
