import { createFileRoute } from "@tanstack/react-router";
import { Diamond, PencilRuler, ShieldCheck } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/Layout";
import { Callout, EditorialIntro, FeatureGrid, ProcessSection } from "@/components/site/EditorialSections";
import bespoke from "@/assets/bespoke.jpg";
import ring from "@/assets/ring.jpg";

export const Route = createFileRoute("/bespoke")({
  head: () => ({ meta: [
    { title: "Bespoke Jewellery — Dharma Jewellery" },
    { name: "description", content: "Create a one-of-a-kind Dharma piece through a personal design journey." },
    { property: "og:title", content: "Bespoke Jewellery — Dharma Jewellery" },
    { property: "og:description", content: "Your story, translated into an enduring jewel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BespokePage,
});

function BespokePage() {
  return <Shell>
    <PageHero eyebrow="Made for one" title="Bespoke Jewellery" sub="Your story. Our craft." img={bespoke} />
    <EditorialIntro eyebrow="One of one" title="A private collaboration from first thought to final setting" copy="Whether you are marking a milestone, reimagining an heirloom or beginning with a single stone, our designers shape every detail around your story." image={ring} imageAlt="A bespoke Dharma ring" />
    <ProcessSection eyebrow="The journey" title="Created together" steps={[
      { title: "Consult", copy: "Share your inspiration, occasion, preferences and the meaning you want the piece to carry." },
      { title: "Design", copy: "We refine silhouettes, stones and finishes with you before our artisans begin their work." },
      { title: "Craft", copy: "Your jewel is made, inspected and presented as a piece intended to remain uniquely yours." },
    ]} />
    <FeatureGrid eyebrow="The bespoke promise" title="Considered at every stage" items={[
      { icon: PencilRuler, title: "Personal design", copy: "Every proportion and detail is tailored to your taste, story and way of wearing jewellery." },
      { icon: Diamond, title: "Stone curation", copy: "Explore a considered selection of stones chosen to complement the design and your vision." },
      { icon: ShieldCheck, title: "Lifelong care", copy: "Your finished piece receives the same thoughtful aftercare as every Dharma heirloom." },
    ]} />
   
  </Shell>;
}