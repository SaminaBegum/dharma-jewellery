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

import signature1 from "@/assets/signature-d.jpg";
import signature2 from "@/assets/signature-d.jpg";
import signature3 from "@/assets/signature-d.jpg";
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
      {/* HERO */}
<section className="relative w-full overflow-hidden bg-black text-white">
  <div className="relative min-h-[620px] w-full lg:min-h-[680px] xl:min-h-[720px]">

    {/* HERO IMAGE */}
    <img
      src={hero}
      alt="Woman wearing Dharma jewellery"
      width={1920}
      height={1088}
      className="
        absolute inset-0
        h-full w-full
        object-cover
        object-center
        scale-[1.02]
      "
    />

    {/* DARK LEFT OVERLAY */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-black via-black/75
        via-black/45
        to-transparent
      "
    />

    {/* BOTTOM DARK GRADIENT */}
    <div
      className="
        absolute inset-x-0 bottom-0 h-48
        bg-gradient-to-t
        from-black/80
        to-transparent
      "
    />

    {/* RED LUXURY GLOW */}
    <div
      className="
        pointer-events-none
        absolute left-[-10%] top-0
        h-full w-[45%]
        bg-[radial-gradient(circle_at_center,rgba(100,0,0,0.35),transparent_65%)]
      "
    />

    {/* CONTENT */}
    <div
      className="
        relative z-10 mx-auto
        flex h-full min-h-[620px]
        max-w-[1440px]
        items-center
        px-6 pb-24 pt-24
        sm:px-8
        lg:min-h-[680px]
        lg:px-12
        xl:min-h-[720px]
      "
    >

      {/* LEFT CONTENT */}
      <div className="w-full max-w-[620px]">

        {/* EYEBROW */}
        <p
          className="
            mb-4
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/80
            sm:text-[10px]
          "
        >
          A Symbol of Your Story
        </p>

        {/* TITLE */}
        <h1
          className="
            max-w-[610px]
            font-serif
            text-[42px]
            font-light
            uppercase
            leading-[0.92]
            tracking-[-0.02em]
            text-white
            sm:text-[52px]
            md:text-[64px]
            lg:text-[76px]
            xl:text-[82px]
          "
        >
          More Than
          <br />

          Jewellery,
          <br />

          <span className="text-[#d9b36c]">
            A Deeper You.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            max-w-[430px]
            text-[12px]
            leading-[1.55]
            text-white/75
            sm:text-[13px]
            md:text-sm
          "
        >
          Timeless designs. Deeper meanings. Jewellery
          <br className="hidden sm:block" />
          that becomes a part of you.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-5
            sm:gap-7
          "
        >

          {/* EXPLORE */}
          <Link
            to="/collections"
            className="
              group
              inline-flex
              h-11
              items-center
              gap-3
              bg-[#f3dca9]
              px-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-black
              transition-all
              duration-300
              hover:bg-white
              sm:h-12
              sm:px-6
            "
          >
            Explore Collections

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* OUR STORY */}
          <Link
            to="/our-story"
            className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white
            "
          >
            <span
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                border
                border-white/60
                transition-all
                duration-300
                group-hover:border-[#d9b36c]
                group-hover:bg-white/10
              "
            >
              <Play
                className="ml-0.5 h-3 w-3 fill-white"
              />
            </span>

            Watch Our Story
          </Link>
        </div>
      </div>

      {/* RIGHT TOP FEATURES */}
      <div
        className="
          absolute
          right-6
          top-24
          hidden
          text-right
          lg:block
          xl:right-12
        "
      >
        <div className="space-y-1.5">
          {[
            "Heritage",
            "Craftsmanship",
            "Modern Luxury",
            "Timeless Beauty",
          ].map((item) => (
            <p
              key={item}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/85
              "
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* RIGHT DHARMA CARD */}
      <div
        className="
          absolute
          bottom-24
          right-6
          hidden
          h-[170px]
          w-[235px]
          overflow-hidden
          border
          border-white/20
          bg-black/20
          backdrop-blur-[2px]
          lg:block
          xl:right-12
        "
      >
        {/* Small image */}
        <img
          src={hero}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[75%_center]
            opacity-80
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        {/* Card content */}
        <div
          className="
            relative
            flex
            h-full
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className="
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-white/60
              bg-black/20
            "
          >
            <Play
              className="ml-0.5 h-3 w-3 fill-white"
            />
          </span>

          <p
            className="
              mt-3
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Step Into
          </p>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Dharma
          </p>
        </div>
      </div>
    </div>

    {/* LEFT SLIDER INDICATORS */}
    <div
      className="
        absolute
        left-4
        top-1/2
        z-20
        hidden
        -translate-y-1/2
        flex-col
        items-center
        gap-4
        sm:flex
        lg:left-6
      "
    >
      {["01", "02", "03", "04", "05"].map(
        (number, index) => (
          <div
            key={number}
            className="flex items-center gap-2"
          >
            <span
              className={`
                text-[7px]
                tracking-widest
                ${
                  index === 0
                    ? "text-white"
                    : "text-white/30"
                }
              `}
            >
              {number}
            </span>

            <span
              className={`
                block
                h-[1px]
                ${
                  index === 0
                    ? "w-4 bg-white"
                    : "w-2 bg-white/30"
                }
              `}
            />
          </div>
        )
      )}
    </div>

    {/* BOTTOM COLLECTION THUMBNAILS */}
    <div
      className="
        absolute
        bottom-8
        left-6
        z-20
        flex
        items-center
        gap-3
        sm:left-12
      "
    >
      {[1, 2, 3].map((item) => (
        <button
          key={item}
          type="button"
          className="
            h-10
            w-10
            overflow-hidden
            rounded-full
            border
            border-white/50
            transition-transform
            duration-300
            hover:scale-110
            sm:h-12
            sm:w-12
          "
        >
          <img
            src={hero}
            alt={`Collection ${item}`}
            className="
              h-full
              w-full
              object-cover
              object-[65%_center]
            "
          />
        </button>
      ))}
    </div>

    {/* BOTTOM PROGRESS LINE */}
    <div
      className="
        absolute
        bottom-0
        left-0
        z-20
        h-[2px]
        w-full
        bg-white/20
      "
    >
      <div
        className="
          h-full
          w-[20%]
          bg-[#d9b36c]
        "
      />
    </div>

  </div>
</section>

      {/* COLLECTIONS + SIGNATURE */}
      {/* COLLECTIONS + SIGNATURE */}
<section
  id="collections"
  className="grid w-full grid-cols-1 overflow-hidden lg:grid-cols-[58%_42%]"
>
  {/* ================= LEFT : COLLECTIONS ================= */}
  <div className="bg-ivory px-5 py-10 text-ivory-foreground sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
    {/* Heading */}
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-xl tracking-[0.10em] uppercase sm:text-2xl">
        Explore Our Collections —
      </h2>

      <Link
        to="/collections"
        className="eyebrow flex shrink-0 items-center gap-2 text-xs sm:text-sm"
      >
        View All
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* Collection Cards */}
    <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-4">
      {collections.map((c) => (
        <Link
          key={c.name}
          to="/collections"
          search={{ category: c.name }}
          className="group arch relative block aspect-[3/5] overflow-hidden"
        >
          <img
            src={c.img}
            alt={c.name}
            loading="lazy"
            width={768}
            height={960}
            className="img-zoom h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

          {/* Card content */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-foreground sm:p-4">
            <div>
              <p className="font-serif text-base uppercase tracking-wider sm:text-lg">
                {c.name}
              </p>

              <p className="text-[0.58rem] text-foreground/70 sm:text-[0.65rem]">
                {c.sub}
              </p>
            </div>

            <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* ================= RIGHT : SIGNATURE D ================= */}
  <div className="relative min-h-[520px] overflow-hidden bg-wine sm:min-h-[560px] lg:min-h-[520px] xl:min-h-[580px]">
    
    {/* Signature D Background Image */}
    <img
      src={signature}
      alt="Signature D rose gold diamond pendant"
      loading="lazy"
      width={1024}
      height={1024}
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-[72%_center]
        opacity-100
        transition-transform
        duration-700
        hover:scale-[1.02]
      "
    />

    {/* LEFT DARK FADE - keeps text readable without hiding artwork */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-wine/95
        via-wine/65
        via-45%
        to-transparent
      "
    />

    {/* Slight bottom fade */}
    <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-32
        bg-gradient-to-t
        from-wine/70
        to-transparent
      "
    />

    {/* ================= CONTENT ================= */}
    <div
      className="
        relative
        z-10
        flex
        h-full
        min-h-[520px]
        flex-col
        justify-center
        px-7
        py-12
        sm:px-10
        lg:min-h-[520px]
        lg:px-8
        xl:px-12
      "
    >
      {/* THE */}
      <p
        className="
          font-serif
          text-lg
          tracking-[0.22em]
          text-gold
          sm:text-xl
        "
      >
        THE
      </p>

      {/* Signature D */}
      <h2
        className="
          mt-1
          max-w-[230px]
          font-serif
          text-3xl
          font-normal
          uppercase
          leading-[0.95]
          tracking-[0.06em]
          text-foreground
          sm:text-4xl
          lg:text-[2.7rem]
          xl:text-5xl
        "
      >
        Signature D
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-[190px]
          text-[0.72rem]
          leading-relaxed
          text-foreground/80
          sm:text-sm
        "
      >
        A distinctive expression of identity, elegance and individuality.
      </p>

      {/* Discover */}
      <Link
        to="/product/$slug"
        params={{ slug: "signature-d-pendant" }}
        className="
          eyebrow
          mt-5
          flex
          w-fit
          items-center
          gap-2
          text-[0.65rem]
          text-gold
          transition-opacity
          hover:opacity-80
          sm:text-xs
        "
      >
        DISCOVER NOW
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>

      {/* ================= 01 - 04 FEATURES ================= */}
      <div
        className="
          absolute
          right-5
          top-1/2
          hidden
          -translate-y-1/2
          flex-col
          gap-5
          lg:flex
          xl:right-7
        "
      >
        {/* 01 */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-gold/60
              text-[0.5rem]
              text-gold
            "
          >
            01
          </span>

          <span className="text-[0.55rem] uppercase tracking-wider text-foreground/80">
            Identity
          </span>
        </div>

        {/* 02 */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-gold/60
              text-[0.5rem]
              text-gold
            "
          >
            02
          </span>

          <span className="text-[0.55rem] uppercase tracking-wider text-foreground/80">
            Elegance
          </span>
        </div>

        {/* 03 */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-gold/60
              text-[0.5rem]
              text-gold
            "
          >
            03
          </span>

          <span className="text-[0.55rem] uppercase tracking-wider text-foreground/80">
            Individuality
          </span>
        </div>

        {/* 04 */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-gold/60
              text-[0.5rem]
              text-gold
            "
          >
            04
          </span>

          <span className="max-w-[60px] text-[0.55rem] uppercase leading-tight tracking-wider text-foreground/80">
            A Timeless Creation
          </span>
        </div>
      </div>

      {/* ================= 360 VIEW ================= */}
     {/* ================= 360 VIEW + 3 IMAGES ================= */}
<div
  className="
    absolute
    bottom-5
    left-6
    z-20
    flex
    items-center
    gap-3
    sm:left-8
    sm:gap-4
    lg:left-8
    xl:left-12
  "
>
  {/* 360 Play Button */}
  <button
    type="button"
    className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-foreground/60
      bg-black/30
      backdrop-blur-sm
      transition-all
      duration-300
      hover:border-gold
      hover:bg-black/50
      sm:h-11
      sm:w-11
    "
    aria-label="View Signature D in 360 degrees"
  >
    <span className="ml-0.5 text-[10px] text-foreground">
      ▶
    </span>
  </button>

  {/* 3 Preview Images */}
  <div className="flex items-center gap-1.5 sm:gap-2">
    {[signature1, signature2, signature3].map((image, index) => (
      <button
        key={index}
        type="button"
        className="
          group
          relative
          h-9
          w-9
          overflow-hidden
          border
          border-foreground/30
          bg-black/20
          transition-all
          duration-300
          hover:border-gold
          sm:h-11
          sm:w-11
        "
        aria-label={`Signature D view ${index + 1}`}
      >
        <img
          src={image}
          alt={`Signature D view ${index + 1}`}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Dark overlay */}
        <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
      </button>
    ))}
  </div>

  {/* 360° Text */}
  <span
    className="
      hidden
      text-[0.55rem]
      uppercase
      tracking-[0.15em]
      text-foreground/80
      sm:block
    "
  >
    360° View
  </span>
</div>

      {/* Small decorative line */}
      <div
        className="
          absolute
          bottom-7
          right-7
          hidden
          h-px
          w-16
          bg-gold/60
          sm:block
        "
      />
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
