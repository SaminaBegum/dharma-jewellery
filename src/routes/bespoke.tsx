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


{/* =====================================================
    THE BESPOKE PROMISE — LUXURY VERSION
===================================================== */}
<section
  className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28"
  style={{ backgroundColor: "#f1e6d6" }}
>
  {/* Decorative circles */}
  <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#b89555]/15" />
  <div className="pointer-events-none absolute -right-20 top-22 h-56 w-56 rounded-full border border-[#b89555]/15" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full border border-[#b89555]/10" />

  <div className="relative mx-auto max-w-[1200px]">

    {/* HEADER */}
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-[#b89555]/60" />

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a773d]">
          The Bespoke Promise
        </span>

        <span className="h-px w-10 bg-[#b89555]/60" />
      </div>

      <h2 className="font-serif text-4xl uppercase leading-tight text-[#2d2420] md:text-4xl lg:text-5xl">
        Considered   At Every Stage
       
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#2d2420]/65">
        From the first idea to the final polish, every detail is
        considered with intention, precision and your story at its heart.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-14 grid gap-5 md:grid-cols-3">
      {[
        {
          number: "01",
          icon: PencilRuler,
          title: "Personal Design",
          copy:
            "Every proportion and detail is tailored to your taste, story and the way you choose to wear your jewellery.",
        },
        {
          number: "02",
          icon: Diamond,
          title: "Stone Curation",
          copy:
            "Discover a considered selection of stones chosen to complement the design and bring your vision to life.",
        },
        {
          number: "03",
          icon: ShieldCheck,
          title: "Lifelong Care",
          copy:
            "Your finished piece receives thoughtful aftercare, preserving its beauty and meaning for generations.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.number}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#8f7550]/25
              bg-white/25
              p-7
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#9a773d]
              hover:bg-white/40
              md:p-8
            "
          >
            {/* Gold corner accent */}
            <div
              className="
                absolute
                right-0
                top-0
                h-16
                w-16
                border-l
                border-b
                border-[#b89555]/30
                transition-all
                duration-500
                group-hover:h-20
                group-hover:w-20
                group-hover:border-[#9a773d]
              "
            />

            {/* Number + Icon */}
            <div className="flex items-start justify-between">
              <span className="font-serif text-sm tracking-widest text-[#9a773d]">
                {item.number}
              </span>

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#b89555]/50
                  bg-[#b89555]/10
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:border-[#9a773d]
                  group-hover:bg-[#b89555]/15
                "
              >
                <Icon
                  className="h-6 w-6 text-[#9a773d]"
                  strokeWidth={1.1}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8 h-px w-10 bg-[#b89555]/60 transition-all duration-500 group-hover:w-20" />

            {/* Title */}
            <h3
              className="
                mt-6
                font-serif
                text-2xl
                uppercase
                tracking-wide
                text-[#2d2420]
                transition-colors
                duration-300
                group-hover:text-[#9a773d]
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-[#2d2420]/65">
              {item.copy}
            </p>

            {/* Bottom detail */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-6 bg-[#b89555]/50 transition-all duration-500 group-hover:w-10" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#2d2420]/40">
                Dharma Bespoke
              </span>
            </div>

            {/* Bottom gold glow */}
            <div
              className="
                absolute
                -bottom-16
                left-1/2
                h-32
                w-32
                -translate-x-1/2
                rounded-full
                bg-[#b89555]/10
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-[#b89555]/20
              "
            />
          </div>
        );
      })}
    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
      <span className="h-px w-12 bg-[#b89555]/50" />

      <p className="font-serif text-sm italic tracking-wide text-[#2d2420]/60">
        Designed around you. Crafted for generations.
      </p>

      <span className="h-px w-12 bg-[#b89555]/50" />
    </div>

  </div>
</section>



   
  </Shell>;
}