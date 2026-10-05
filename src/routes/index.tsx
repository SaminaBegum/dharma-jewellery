import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/Shell";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/products";
import {
  ArrowRight, Play, User, Gem, Monitor, PenTool, Gift,
} from "lucide-react";
// import heroAsset from "@/assets/hero.jpg.asset.json";
// const hero = heroAsset.url;
// import signatureAsset from "@/assets/signature-d.jpg.asset.json";
// const signature = signatureAsset.url;
// import heritageAsset from "@/assets/heritage.jpg.asset.json";
// const heritage = heritageAsset.url;
// import bespokeAsset from "@/assets/bespoke.jpg.asset.json";
// const bespoke = bespokeAsset.url;
// import necklaceAsset from "@/assets/necklace.jpg.asset.json";
// const necklace = necklaceAsset.url;
// import ringAsset from "@/assets/ring.jpg.asset.json";
// const ring = ringAsset.url;
// import earringsAsset from "@/assets/earrings.jpg.asset.json";
// const earrings = earringsAsset.url;
// import braceletAsset from "@/assets/bracelet.jpg.asset.json";
// const bracelet = braceletAsset.url;
import hero from "@/assets/hero.jpg";
import signature from "@/assets/signature-d.jpg";
import heritage from "@/assets/heritage.jpg";
import bespoke from "@/assets/bespoke.jpg";
import necklace from "@/assets/necklace.jpg";
import ring from "@/assets/ring.jpg";
import earrings from "@/assets/earrings.jpg";
import bracelet from "@/assets/bracelet.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharma Jewellery — More Than Jewellery. A Deeper You." },
      { name: "description", content: "Timeless designs, deeper meanings. Heritage craftsmanship and modern luxury jewellery by Dharma." },
      { property: "og:title", content: "Dharma Jewellery — A Deeper You" },
      { property: "og:description", content: "Heritage craftsmanship, modern luxury. Necklaces, rings, earrings, bracelets and bespoke pieces." },
    ],
  }),
  component: Index,
});

const collections = [
  { name: "Necklaces", sub: "Symbols of Grace", img: necklace },
  { name: "Rings", sub: "Expressions of You", img: ring },
  { name: "Earrings", sub: "Elegance in Detail", img: earrings },
  { name: "Bracelets", sub: "For Every Story", img: bracelet },
];

function Index() {
  const [filter, setFilter] = useState("All");
  const shown = products.filter((p) => filter === "All" || p.cat === filter).slice(0, 4);

  return (
    <Shell><div id="top" className="overflow-x-hidden">
      {/* HEADER */}
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img src={hero} alt="Woman wearing Dharma diamond earrings and Signature D pendant" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-center px-6 pt-28 pb-16 lg:px-12">
          <p className="eyebrow animate-fade-in text-gold">A Symbol of Your Story</p>
          <h1 className="mt-5 max-w-xl animate-fade-in text-5xl leading-[1.02] tracking-wide uppercase md:text-7xl">
            DHARMA<br />JEWELLERY<br /><span className="text-gold">A Deeper You.</span>
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/80">Timeless designs. Deeper meanings. Jewellery that becomes a part of you.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to="/collections" className="btn-gold">Explore Collections <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/our-story" className="eyebrow flex items-center gap-3 hover:text-gold">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-foreground/60"><Play className="h-3.5 w-3.5" /></span>Our Story
            </Link>
          </div>
          <ul className="absolute right-12 top-1/3 hidden space-y-2 text-right lg:block">
            {["Heritage", "Craftsmanship", "Modern Luxury", "Timeless Beauty"].map((t) => (
              <li key={t} className="eyebrow text-foreground/80">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* COLLECTIONS + SIGNATURE */}
      <section id="collections" className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="bg-ivory px-6 py-14 text-ivory-foreground lg:px-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl tracking-[0.12em] uppercase">Explore Our Collections —</h2>
            <Link to="/collections" className="eyebrow flex items-center gap-2">View All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {collections.map((c) => (
              <Link key={c.name} to="/collections" search={{ category: c.name }} className="group arch relative block aspect-[3/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={768} height={960} className="img-zoom h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-foreground">
                  <div><p className="font-serif text-lg uppercase tracking-wider">{c.name}</p><p className="text-[0.65rem] text-foreground/70">{c.sub}</p></div>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden bg-wine">
          <img src={signature} alt="Signature D rose gold diamond pendant" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover object-right opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/50 to-transparent" />
          <div className="relative flex h-full flex-col justify-center p-10">
            <p className="font-serif text-xl tracking-[0.2em] text-gold">THE</p>
            <h2 className="text-5xl uppercase tracking-wide">Signature D</h2>
            <p className="mt-4 max-w-[14rem] text-sm text-foreground/80">A distinctive expression of identity, elegance and individuality.</p>
            <Link to="/product/$slug" params={{ slug: "signature-d-pendant" }} className="eyebrow mt-6 flex items-center gap-2 text-gold">Discover Now <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="grid bg-cocoa lg:grid-cols-[1fr_1.6fr_0.9fr]">
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12">
          <h2 className="text-4xl uppercase leading-tight md:text-5xl">A Story in<br />Every Detail</h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/75">At Dharma, we create more than jewellery. We create symbols of identity, crafted to stay with you through every chapter.</p>
          <Link to="/our-story" className="btn-gold mt-8 self-start">Our Story <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <img src={heritage} alt="Woman in red gown overlooking a palace at sunset" loading="lazy" width={1600} height={912} className="h-80 w-full object-cover lg:h-full" />
        <ul className="divide-y divide-border px-6 py-6 lg:px-8">
          {[["Our Heritage", "Roots that inspire", necklace], ["Our Craft", "From idea to heirloom", bespoke], ["Our Values", "What we stand for", ring], ["Our Vision", "A more meaningful tomorrow", earrings]].map(([t, s, im]) => (
            <li key={t} className="flex items-center gap-4 py-5">
              <img src={im} alt="" loading="lazy" className="h-14 w-14 shrink-0 border border-border object-cover" />
              <div><p className="font-serif text-lg uppercase tracking-wider text-gold">{t}</p><p className="text-xs text-foreground/70">{s}</p></div>
            </li>
          ))}
        </ul>
      </section>

      {/* BESPOKE */}
      <section id="bespoke" className="relative overflow-hidden bg-ivory text-ivory-foreground">
        <img src={bespoke} alt="Jeweller sketching a bespoke D pendant" loading="lazy" width={1600} height={912} className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-60 lg:w-2/3 lg:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
          <p className="eyebrow">Bespoke Jewellery —</p>
          <h2 className="mt-4 text-5xl uppercase leading-[1.05] md:text-6xl">Your Story.<br />Our Craft.</h2>
          <p className="mt-5 max-w-xs text-sm">Create a one-of-a-kind piece that is as unique as your journey.</p>
          <Link to="/bespoke" className="btn-gold mt-8">Start Your Bespoke Journey <ArrowRight className="h-3.5 w-3.5" /></Link>
          <ol className="mt-14 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {["Share Your Idea", "Design Consultation", "Craft Your Piece", "A Timeless Creation"].map((s, i) => (
              <li key={s} className="border-t border-ivory-foreground/30 pt-4">
                <p className="font-serif text-2xl text-gold">0{i + 1}</p><p className="text-xs">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="grid bg-background lg:grid-cols-[1.3fr_1fr_0.8fr]">
        <div className="px-6 py-16 lg:px-12">
          <h2 className="text-3xl uppercase tracking-wider">The Dharma Experience</h2>
          <p className="eyebrow mt-2 text-gold">More than a purchase, a personal journey</p>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {[[User, "Private Consultation"], [Monitor, "Virtual Consultation"], [PenTool, "Bespoke Design"], [Gift, "Gift Experience"], [Gem, "Jewellery Care"]].map(([I, t]) => {
              const Icon = I as typeof User;
              return (
                <div key={t as string} className="flex aspect-[3/4] flex-col items-center justify-center gap-3 border border-border p-3 text-center transition hover:border-gold">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                  <span className="eyebrow text-[0.55rem]">{t as string}</span>
                </div>
              );
            })}
          </div>
        </div>
        <img src={hero} alt="Dharma showroom ambience" loading="lazy" className="h-72 w-full object-cover object-left lg:h-full" />
        <div className="flex flex-col justify-center bg-cocoa px-8 py-14">
          <h3 className="text-2xl uppercase tracking-wider text-gold">Step Into Dharma</h3>
          <p className="mt-3 text-sm text-foreground/75">Visit our exclusive showroom and experience our collections in person.</p>
          <Link to="/experience" className="btn-gold mt-6 self-start">Discover the Experience <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="bg-background px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl uppercase tracking-wider">Featured Collections</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {["All", ...categories].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`eyebrow px-4 py-2 transition ${filter === f ? "bg-gold text-primary-foreground" : "hover:text-gold"}`}>{f}</button>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {shown.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* TRY-ON + GIFT */}
      <section className="grid md:grid-cols-2">
        <div className="relative overflow-hidden bg-cocoa px-6 py-16 lg:px-12">
          <img src={earrings} alt="" loading="lazy" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/80 to-transparent" />
          <div className="relative">
            <p className="eyebrow text-gold">Virtual Try-On</p>
            <h2 className="mt-3 text-4xl uppercase">See It On You</h2>
            <p className="mt-3 max-w-xs text-sm text-foreground/75">Find a piece that feels like it was made for you.</p>
            <Link to="/collections" className="btn-gold mt-6">Explore Pieces <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
        <div className="relative overflow-hidden bg-wine px-6 py-16 lg:px-12">
          <img src={signature} alt="" loading="lazy" className="absolute right-0 top-0 h-full w-1/2 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/80 to-transparent" />
          <div className="relative">
            <h2 className="text-4xl uppercase leading-tight">A Gift That<br />Means More</h2>
            <p className="mt-3 max-w-xs text-sm text-foreground/75">For every celebration, a piece that stays forever.</p>
            <Link to="/collections" className="btn-gold mt-6">Explore Gifts <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="bg-ivory px-6 py-16 text-ivory-foreground lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between">
            <div><h2 className="text-3xl uppercase tracking-wider">The Dharma Journal</h2><p className="text-xs">Stories. Style. Insights. Inspiration.</p></div>
            <Link to="/journal" className="eyebrow">Explore Journal</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[["Signature Story", "The Meaning Behind the Signature D", signature], ["Diamonds", "How to Choose the Perfect Diamond", ring], ["Bridal", "Bridal Jewellery Trends 2026", necklace], ["Care", "Caring for Your Fine Jewellery", bracelet]].map(([c, t, im]) => (
              <article key={t} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden"><img src={im} alt={t} loading="lazy" className="img-zoom h-full w-full object-cover" /></div>
                <p className="eyebrow mt-3 text-[0.55rem]">{c}</p>
                <h3 className="mt-1 text-xl leading-snug">{t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CITY */}
      <section id="city" className="relative overflow-hidden">
        <img src={heritage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
          <h2 className="text-4xl uppercase">Dharma in the City</h2>
          <p className="mt-2 font-serif text-xl text-gold">From the city to your story.</p>
          <p className="mt-2 max-w-sm text-sm text-foreground/75">Our campaigns across Metro, Bus, Auto and beyond.</p>
          <Link to="/stores" className="btn-gold mt-6">Explore Stores <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>

    </div></Shell>
  );
}
