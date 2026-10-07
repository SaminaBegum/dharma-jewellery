import { createFileRoute } from "@tanstack/react-router";
import { Gift, HeartHandshake, Video } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/Layout";
import { Callout, EditorialIntro, FeatureGrid, ProcessSection } from "@/components/site/EditorialSections";
import hero from "@/assets/hero.jpg";
import earrings from "@/assets/earrings.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [
    { title: "The Dharma Experience — Dharma Jewellery" },
    { name: "description", content: "Enjoy private consultations, personal styling, gifting and jewellery care with Dharma." },
    { property: "og:title", content: "The Dharma Experience — Dharma Jewellery" },
    { property: "og:description", content: "More than a purchase, a personal jewellery journey." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return <Shell>
    <PageHero eyebrow="Dharma" title="The Dharma Experience" sub="More than a purchase, a personal journey." img={hero} />
    <EditorialIntro eyebrow="Your time, your way" title="A private space to discover what feels truly yours" copy="Meet with a jewellery specialist in person or from home. We will guide you through collections, styling, gifting and custom possibilities at your own pace." image={earrings} imageAlt="Fine earrings selected during a Dharma consultation" reverse />
    <FeatureGrid eyebrow="Ways to meet" title="An experience shaped around you" items={[
      { icon: HeartHandshake, title: "Private appointment", copy: "Explore our pieces in an unhurried setting with guidance tailored to your occasion and style." },
      { icon: Video, title: "Virtual consultation", copy: "Connect from anywhere for close-up views, styling advice and thoughtful recommendations." },
      { icon: Gift, title: "Personal gifting", copy: "Let us help you select a meaningful gift and complete it with signature presentation." },
    ]} />
    <ProcessSection eyebrow="Your appointment" title="Simple, personal, memorable" steps={[
      { title: "Tell us", copy: "Share what brings you to Dharma and how you would like to meet." },
      { title: "Discover", copy: "Your specialist prepares a considered edit for you to explore." },
      { title: "Continue", copy: "We remain available for sizing, care, gifting and every chapter after." },
    ]} />
   
  </Shell>;
}