import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { Container, PageHero } from "@/components/site/Layout";
import { Callout } from "@/components/site/EditorialSections";
import signature from "@/assets/signature-d.jpg";
import heritage from "@/assets/heritage.jpg";
import ring from "@/assets/ring.jpg";
import necklace from "@/assets/necklace.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({ meta: [
    { title: "The Dharma Journal — Dharma Jewellery" },
    { name: "description", content: "Stories of jewellery, craft, style and care from Dharma." },
    { property: "og:title", content: "The Dharma Journal — Dharma Jewellery" },
    { property: "og:description", content: "Stories, style, insight and inspiration from Dharma." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: JournalPage,
});

const stories = [
  { tag: "Signature", title: "The meaning behind the D", copy: "A symbol of identity, continuity and the story you choose to carry.", image: signature },
  { tag: "Guide", title: "Choosing a stone that feels like you", copy: "A considered guide to colour, character and personal significance.", image: ring },
  { tag: "Craft", title: "Inside the artisan's atelier", copy: "The patient gestures and precise details behind an enduring piece.", image: heritage },
];

function JournalPage() {
  return <Shell>
    <PageHero eyebrow="Ideas & inspiration" title="The Dharma Journal" sub="Stories. Style. Insights. Inspiration." img={signature} />
    <section className="bg-ivory py-14 text-ivory-foreground sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <img src={necklace} alt="Heritage necklace craftsmanship" className="aspect-[16/10] w-full object-cover" />
          <div className="min-w-0 lg:px-8">
            <p className="eyebrow text-wine">Featured story</p>
            <h2 className="mt-4 text-3xl uppercase leading-tight sm:text-4xl">How an heirloom begins</h2>
            <p className="mt-5 text-sm leading-7 text-ivory-foreground/70">The pieces we keep are rarely chosen for beauty alone. We explore the details that turn fine jewellery into a vessel for memory.</p>
            <Link to="/collections" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase text-wine">Discover the pieces <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Container>
    </section>
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <p className="eyebrow text-gold">Latest notes</p>
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl">From our world</h2>
        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => <article key={story.title} className="group min-w-0">
            <div className="overflow-hidden"><img src={story.image} alt="" className="img-zoom aspect-[4/3] w-full object-cover" /></div>
            <p className="eyebrow mt-5 text-gold">{story.tag}</p>
            <h3 className="mt-2 text-2xl">{story.title}</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/65">{story.copy}</p>
          </article>)}
        </div>
      </Container>
    </section>
    
  </Shell>;
}