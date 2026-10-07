import { createFileRoute } from "@tanstack/react-router";
import { Gem, HandHeart, Sparkles } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/Layout";
import { Callout, EditorialIntro, FeatureGrid, ProcessSection } from "@/components/site/EditorialSections";
import heritage from "@/assets/heritage.jpg";
import signature from "@/assets/signature-d.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({ meta: [
    { title: "Our Story — Dharma Jewellery" },
    { name: "description", content: "Discover the heritage, meaning and craftsmanship behind Dharma Jewellery." },
    { property: "og:title", content: "Our Story — Dharma Jewellery" },
    { property: "og:description", content: "A story of heritage craft, personal meaning and modern Indian jewellery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StoryPage,
});

function StoryPage() {
  return <Shell>
    <PageHero eyebrow="Dharma" title="Our Story" sub="A story in every detail." img={heritage} />
    <EditorialIntro eyebrow="Made with meaning" title="Jewellery that becomes part of who you are" copy="Dharma was born from a belief that jewellery is more than adornment. Every piece carries the memory of the hands that made it and the story of the person who wears it." image={signature} imageAlt="Dharma's signature jewellery detail" />
    <FeatureGrid eyebrow="What guides us" title="A legacy, thoughtfully renewed" items={[
      { icon: Gem, title: "Enduring materials", copy: "Precious metals and carefully selected stones are chosen for beauty that lasts beyond a season." },
      { icon: HandHeart, title: "Human craftsmanship", copy: "Traditional techniques are kept alive through patient hands, precise setting and considered finishing." },
      { icon: Sparkles, title: "Personal symbolism", copy: "Our forms are designed to hold meaning — a celebration, a promise or a reminder of self." },
    ]} />
    <ProcessSection eyebrow="Our point of view" title="From heritage to heirloom" steps={[
      { title: "Rooted", copy: "We begin with motifs, materials and techniques shaped by generations of Indian artistry." },
      { title: "Reimagined", copy: "Proportion, movement and detail are refined for a contemporary way of living." },
      { title: "Remembered", copy: "The finished piece is made to gather stories and be passed forward." },
    ]} />
   
  </Shell>;
}