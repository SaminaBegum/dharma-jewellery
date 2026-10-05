// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Shell } from "@/components/site/Shell";
// import { PageHero, Container } from "@/components/site/Layout";
// import imgAsset from "@/assets/heritage.jpg.asset.json";
// const img = imgAsset.url;
// export const Route = createFileRoute("/our-story")({
//   head: () => ({ meta: [{ title: "Our Story — Dharma Jewellery" }, { name: "description", content: "A story in every detail." }, { property: "og:title", content: "Our Story — Dharma Jewellery" }, { property: "og:description", content: "A story in every detail." }] }),
//   component: () => (<Shell><PageHero eyebrow="Dharma" title="Our Story" sub="A story in every detail." img={img} />
//     <Container className="py-16"><p className="max-w-2xl font-serif text-2xl leading-relaxed">Dharma was born from heritage craftsmanship and a belief that jewellery should carry meaning — symbols of identity that stay with you through every chapter.</p><Link to="/collections" className="btn-gold mt-8">Explore Collections</Link></Container></Shell>),
// });

import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { PageHero, Container } from "@/components/site/Layout";
import heritage from "@/assets/heritage.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      {
        title: "Our Story — Dharma Jewellery",
      },
      {
        name: "description",
        content: "A story in every detail.",
      },
      {
        property: "og:title",
        content: "Our Story — Dharma Jewellery",
      },
      {
        property: "og:description",
        content: "A story in every detail.",
      },
    ],
  }),

  component: () => (
    <Shell>
      {/* Hero */}
      <PageHero
        eyebrow="Dharma"
        title="Our Story"
        sub="A story in every detail."
        img={heritage}
      />

      {/* Story Content */}
      <div className="bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="py-16">

          <p className="max-w-2xl font-serif text-2xl leading-relaxed text-[oklch(28%_.1_15)] md:text-3xl">
            Dharma was born from heritage craftsmanship and
            a belief that jewellery should carry meaning —
            symbols of identity that stay with you through
            every chapter.
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
