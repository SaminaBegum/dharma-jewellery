import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Gem, Sparkles } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/Layout";
import { Callout, EditorialIntro, FeatureGrid, ProcessSection } from "@/components/site/EditorialSections";
import heritage from "@/assets/heritage.jpg";
import bracelet from "@/assets/bracelet.jpg";

export const Route = createFileRoute("/stores")({
  head: () => ({ meta: [
    { title: "Our Stores — Dharma Jewellery" },
    { name: "description", content: "Plan a personal visit and experience Dharma Jewellery in person." },
    { property: "og:title", content: "Our Stores — Dharma Jewellery" },
    { property: "og:description", content: "Step into the world of Dharma." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StoresPage,
});

function StoresPage() {
  return <Shell>
    <PageHero eyebrow="Visit us" title="Our Stores" sub="Step into Dharma." img={heritage} />
    <EditorialIntro eyebrow="In person" title="See every detail, feel every story" copy="Our showrooms are designed for unhurried discovery. Explore the collection closely, compare pieces and receive personal guidance from a Dharma specialist. New store locations and visiting details will be announced soon." image={bracelet} imageAlt="Dharma bracelet displayed in a showroom setting" />
    <FeatureGrid eyebrow="In-store services" title="A visit made personal" items={[
      { icon: Gem, title: "Collection viewing", copy: "Discover signature pieces up close and find the scale, finish and feeling that suits you." },
      { icon: Sparkles, title: "Personal styling", copy: "Explore thoughtful combinations for everyday wear, celebrations and important milestones." },
      { icon: CalendarDays, title: "Private appointments", copy: "Reserve dedicated time with a specialist for gifting, bridal or bespoke guidance." },
    ]} />
    <ProcessSection eyebrow="Before you arrive" title="Plan your Dharma visit" steps={[
      { title: "Choose", copy: "Tell us what you would like to explore so we can prepare a considered selection." },
      { title: "Reserve", copy: "Request a preferred day and time for a private, unhurried appointment." },
      { title: "Experience", copy: "Meet your specialist and discover each piece in person." },
    ]} />
    
  </Shell>;
}