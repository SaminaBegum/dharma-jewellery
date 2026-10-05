// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Shell } from "@/components/site/Shell";
// import { PageHero, Container } from "@/components/site/Layout";
// import imgAsset from "@/assets/signature-d.jpg.asset.json";
// const img = imgAsset.url;
// export const Route = createFileRoute("/journal")({
//   head: () => ({ meta: [{ title: "The Dharma Journal — Dharma Jewellery" }, { name: "description", content: "Stories. Style. Insights. Inspiration." }, { property: "og:title", content: "The Dharma Journal — Dharma Jewellery" }, { property: "og:description", content: "Stories. Style. Insights. Inspiration." }] }),
//   component: () => (<Shell><PageHero eyebrow="Dharma" title="The Dharma Journal" sub="Stories. Style. Insights. Inspiration." img={img} />
//     <Container className="py-16"><p className="max-w-2xl font-serif text-2xl leading-relaxed">The meaning behind the Signature D, how to choose the perfect diamond, bridal trends for 2026, and caring for your fine jewellery.</p><Link to="/collections" className="btn-gold mt-8">Explore Collections</Link></Container></Shell>),
// });

import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import signatureD from "@/assets/signature-d.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      {
        title: "The Dharma Journal — Dharma Jewellery",
      },
      {
        name: "description",
        content:
          "Stories. Style. Insights. Inspiration.",
      },
      {
        property: "og:title",
        content:
          "The Dharma Journal — Dharma Jewellery",
      },
      {
        property: "og:description",
        content:
          "Stories. Style. Insights. Inspiration.",
      },
    ],
  }),

  component: () => (
    <Shell>
      {/* Hero */}
      <PageHero
        eyebrow="Dharma"
        title="The Dharma Journal"
        sub="Stories. Style. Insights. Inspiration."
        img={signatureD}
      />

      {/* Journal Content */}
      <div className="bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="py-16">

          <p className="max-w-2xl font-serif text-2xl leading-relaxed text-[oklch(28%_.1_15)] md:text-3xl">
            The meaning behind the Signature D, how to choose
            the perfect diamond, bridal trends for 2026, and
            caring for your fine jewellery.
          </p>

          <Link
            to="/collections"
            className="btn-gold mt-8 inline-flex"
          >
            Explore Collections
          </Link>

        </Container>
      </div>
    </Shell>
  ),
});
