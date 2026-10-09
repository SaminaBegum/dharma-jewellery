import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/site/Shell";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/products";
import {
 Play, User, Gem, Monitor,  Gift,
} from "lucide-react";
import {
  ArrowRight,
  Lightbulb,
  PenTool,
  Hammer,
  Sparkles,
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  const [activeSlide, setActiveSlide] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setActiveSlide((current) => (current + 1) % 3);
  }, 5000);

  return () => clearInterval(timer);
}, []);
  const shown = products
    .filter((p) => filter === "All" || p.cat === filter)
    .slice(0, 4);

  const slides = [
  {
    image: hero,
    eyebrow: "A Symbol of Your Story",
    title: "More Than Jewellery,",
    highlight: "A Deeper You.",
    description:
      "Timeless designs. Deeper meanings. Jewellery that becomes a part of you.",
    primary: "Explore Collections",
    primaryLink: "/collections",
    secondary: "Watch Our Story",
    features: [
      "Heritage",
      "Craftsmanship",
      "Modern Luxury",
      "Timeless Beauty",
    ],
    cardImage: hero,
    cardTop: "Step Into",
    cardBottom: "Dharma",
  },
  {
    image: necklace,
    eyebrow: "The Art of Adornment",
    title: "Crafted With Heritage,",
    highlight: "Worn With Soul.",
    description:
      "Discover timeless necklaces shaped by Indian heritage, intricate craftsmanship and modern luxury.",
    primary: "Shop Necklaces",
    primaryLink: "/collections",
    secondary: "Discover Heritage",
    features: [
      "22K Gold",
      "Fine Polki",
      "Handcrafted",
      "Indian Heritage",
    ],
    cardImage: necklace,
    cardTop: "Explore",
    cardBottom: "Necklaces",
  },
  {
    image: ring,
    eyebrow: "A Signature Of You",
    title: "Every Ring",
    highlight: "Holds A Story.",
    description:
      "Signature rings designed with precious stones, refined details and a character that feels uniquely yours.",
    primary: "Explore Rings",
    primaryLink: "/collections",
    secondary: "Our Craft",
    features: [
      "Signature Pieces",
      "Precious Stones",
      "Fine Details",
      "Made For You",
    ],
    cardImage: ring,
    cardTop: "Discover",
    cardBottom: "Signature Rings",
  },
];

  const slide = slides[activeSlide];

  return (
    <Shell>
      <div id="top" className="overflow-x-hidden">

        {/* =====================================================
            HERO SLIDER
        ===================================================== */}
        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className="relative min-h-[620px] w-full lg:min-h-[680px] xl:min-h-[720px]">

            {/* HERO IMAGE */}
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.eyebrow}
              width={1920}
              height={1088}
              className="
                absolute inset-0
                h-full w-full
                object-cover
                object-center
                scale-[1.02]
                transition-opacity
                duration-700
              "
            />

            {/* DARK LEFT OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-black
                via-black/75
                to-transparent
              "
            />

            {/* MOBILE DARK OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-black/20
                lg:hidden
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

            {/* =================================================
                CONTENT
            ================================================= */}
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

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}
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
                  {slide.eyebrow}
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
                  {slide.title}
                  <br />

                  <span className="text-[#d9b36c]">
                    {slide.highlight}
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
                  {slide.description}
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

                  {/* PRIMARY BUTTON */}
                  <Link
    to={slide.primaryLink}
    className="
      group
      inline-flex
      h-11
      items-center
      gap-3
      bg-[#D6B06A]
      px-5
      text-[10px]
      font-semibold
      uppercase
      tracking-[0.14em]
      text-[#17100C]
      transition-all
      duration-300
      hover:bg-[#E2C27D]
      sm:h-12
      sm:px-6
    "
  >
    {slide.primary}

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
                  {/* SECONDARY BUTTON */}
              {/* SECONDARY BUTTON */}
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
      border-[#D6B06A]
      text-[#D6B06A]
      transition-all
      duration-300
      group-hover:bg-[#D6B06A]
      group-hover:text-[#17100C]
    "
  >
    <Play
      className="
        ml-0.5
        h-3
        w-3
        fill-current
      "
    />
  </span>

  {slide.secondary}
</Link>
                </div>
              </div>

              {/* =================================================
                  RIGHT TOP FEATURES
              ================================================= */}
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
                  {slide.features.map((item) => (
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

              {/* =================================================
                  RIGHT DHARMA CARD
              ================================================= */}
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

                {/* CARD IMAGE */}
                <img
                  src={slide.cardImage}
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    opacity-80
                    transition-all
                    duration-700
                  "
                />

                {/* CARD OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/45
                  "
                />

                {/* CARD CONTENT */}
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
                      className="
                        ml-0.5
                        h-3
                        w-3
                        fill-white
                      "
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
                    {slide.cardTop}
                  </p>

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white
                    "
                  >
                    {slide.cardBottom}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                LEFT SLIDER INDICATORS
            ================================================= */}
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
              {slides.map((_, index) => {
                const number = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={number}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`
                        text-[7px]
                        tracking-widest
                        transition-colors
                        duration-300
                        ${
                          index === activeSlide
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
                        transition-all
                        duration-300
                        ${
                          index === activeSlide
                            ? "w-4 bg-white"
                            : "w-2 bg-white/30"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* =================================================
                MOBILE SLIDE NUMBER
            ================================================= */}
            <div
              className="
                absolute
                right-6
                bottom-20
                z-20
                flex
                items-center
                gap-2
                sm:hidden
              "
            >
              <span className="text-[9px] tracking-[0.2em] text-white">
                {String(activeSlide + 1).padStart(2, "0")}
              </span>

              <span className="text-[9px] text-white/40">
                /
              </span>

             <span className="text-[9px] tracking-[0.2em] text-white/40">
  03
</span>
            </div>

            {/* =================================================
                BOTTOM COLLECTION THUMBNAILS
            ================================================= */}
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
             {[
  hero,
  necklace,
  ring,
].map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Open collection slide ${index + 1}`}
                  className={`
                    h-10
                    w-10
                    overflow-hidden
                    rounded-full
                    border
                    transition-all
                    duration-300
                    sm:h-12
                    sm:w-12
                    ${
                      index === activeSlide
                        ? "scale-110 border-[#d9b36c]"
                        : "border-white/50 hover:scale-110"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Collection ${index + 1}`}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                </button>
              ))}
            </div>

            {/* =================================================
                MOBILE COLLECTION LABEL
            ================================================= */}
            <div
              className="
                absolute
                bottom-10
                left-1/2
                z-20
                -translate-x-1/2
                text-center
                sm:hidden
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                "
              >
                {slide.eyebrow}
              </p>
            </div>

            {/* =================================================
                BOTTOM PROGRESS LINE
            ================================================= */}
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
                  bg-[#d9b36c]
                  transition-all
                  duration-500
                "
                style={{
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                }}
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
  {/* =========================================================
      LEFT — COLLECTIONS
  ========================================================= */}
  <div
    className="
      flex
      h-full
      flex-col
      bg-ivory
      px-5
      py-10
      text-ivory-foreground
      sm:px-8
      sm:py-12
      lg:min-h-[580px]
      lg:px-10
      lg:py-12
      xl:px-12
      xl:py-14
    "
  >
    {/* Heading */}
    <div className="flex shrink-0 items-center justify-between gap-4">
      <h2
        className="
          text-xl
          uppercase
          tracking-[0.10em]
          sm:text-2xl
        "
      >
        Explore Our Collections —
      </h2>

      <Link
        to="/collections"
        className="
          eyebrow
          flex
          shrink-0
          items-center
          gap-2
          text-xs
          sm:text-sm
        "
      >
        View All
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* Collection Cards */}
    <div
      className="
        mt-7
        grid
        grid-cols-2
        gap-3
        sm:mt-8
        sm:gap-4
        md:grid-cols-4
        lg:flex-1
      "
    >
      {collections.map((c) => (
        <Link
          key={c.name}
          to="/collections"
          search={{ category: c.name }}
          className="
            group
            arch
            relative
            block
            aspect-[3/5]
            overflow-hidden
            lg:h-full
            lg:aspect-auto
          "
        >
          <img
            src={c.img}
            alt={c.name}
            loading="lazy"
            width={768}
            height={960}
            className="
              img-zoom
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Bottom Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-background/90
              via-transparent
              to-transparent
            "
          />

          {/* Card Content */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              flex
              items-end
              justify-between
              p-3
              text-foreground
              sm:p-4
            "
          >
            <div className="min-w-0">
              <p
                className="
                  font-serif
                  text-base
                  uppercase
                  tracking-wider
                  sm:text-lg
                "
              >
                {c.name}
              </p>

              <p
                className="
                  text-[0.58rem]
                  text-foreground/70
                  sm:text-[0.65rem]
                "
              >
                {c.sub}
              </p>
            </div>

            <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* =========================================================
      RIGHT — SIGNATURE D
  ========================================================= */}
  <div
    className="
      relative
      flex
      min-h-[560px]
      h-full
      overflow-hidden
      bg-wine
      lg:min-h-[580px]
    "
  >
    {/* Background Image */}
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
        transition-transform
        duration-700
        hover:scale-[1.02]
      "
    />

    {/* Left Dark Fade */}
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

    {/* Bottom Fade */}
    <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-32
        bg-gradient-to-t
        from-wine/80
        to-transparent
      "
    />

    {/* =====================================================
        MAIN CONTENT
    ===================================================== */}
    <div
      className="
        relative
        z-10
        flex
        min-h-[560px]
        w-full
        flex-col
        justify-center
        px-7
        py-12
        sm:px-10
        lg:min-h-[580px]
        lg:px-8
        xl:px-12
      "
    >
      {/* Text Content */}
      <div className="max-w-[250px]">
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

        <h2
          className="
            mt-1
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
          Signature Dharma
        </h2>

        <p
          className="
            mt-4
            max-w-[210px]
            text-[0.72rem]
            leading-relaxed
            text-foreground/80
            sm:text-sm
          "
        >
          A distinctive expression of identity, elegance and individuality.
        </p>

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
      </div>

      {/* =====================================================
          FEATURE LIST
      ===================================================== */}
 
{/* =====================================================
    FEATURE LIST — MORE VISIBLE
===================================================== */}
<div
  className="
    absolute
    right-6
    top-1/2
    hidden
    -translate-y-1/2
    flex-col
    gap-7
    lg:flex
    xl:right-10
    xl:gap-8
  "
>
  {[
    ["01", "Identity"],
    ["02", "Elegance"],
    ["03", "Individuality"],
    ["04", "A Timeless Creation"],
  ].map(([number, label]) => (
    <div
      key={number}
      className="
        flex
        items-center
        gap-4
        xl:gap-5
      "
    >
      {/* Number Circle */}
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-gold/80
          bg-wine/40
          text-[0.62rem]
          font-medium
          tracking-wider
          text-gold
          backdrop-blur-sm
        "
      >
        {number}
      </span>

      {/* Label */}
      <span
        className="
          whitespace-nowrap
          text-[0.7rem]
          font-medium
          uppercase
          tracking-[0.16em]
          text-foreground
          drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]
          sm:text-xs
          xl:text-[0.72rem]
        "
      >
        {label}
      </span>
    </div>
  ))}
</div>


      {/* =====================================================
          360 VIEW
      ===================================================== */}

{/* =====================================================
    360 VIEW — PREMIUM CONTROLS
===================================================== */}
<div
  className="
    absolute
    bottom-6
    left-6
    z-20
    flex
    items-center
    gap-4
    sm:bottom-7
    sm:left-8
    sm:gap-5
    lg:bottom-8
    xl:left-12
    xl:gap-6
  "
>
  {/* =====================================================
      PLAY / 360 BUTTON
  ===================================================== */}
  <button
    type="button"
    className="
      group
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-foreground/70
      bg-black/35
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-gold
      hover:bg-black/55
      sm:h-14
      sm:w-14
    "
    aria-label="View Signature D in 360 degrees"
  >
    <span
      className="
        ml-0.5
        text-[11px]
        text-foreground
        transition-transform
        duration-300
        group-hover:scale-110
      "
    >
      ▶
    </span>
  </button>

  {/* =====================================================
      PREVIEW IMAGES
  ===================================================== */}
  <div className="flex items-center gap-2 sm:gap-2.5">
    {[signature1, signature2, signature3].map((image, index) => (
      <button
        key={index}
        type="button"
        className="
          group
          relative
          h-11
          w-11
          shrink-0
          overflow-hidden
          border
          border-foreground/40
          bg-black/25
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-gold
          hover:shadow-xl
          sm:h-14
          sm:w-14
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

        {/* Image Overlay */}
        <span
          className="
            absolute
            inset-0
            bg-black/15
            transition-all
            duration-300
            group-hover:bg-black/0
          "
        />

        {/* Image Number */}
        <span
          className="
            absolute
            bottom-1
            right-1
            text-[0.45rem]
            tracking-wider
            text-white/80
            drop-shadow-md
          "
        >
          0{index + 1}
        </span>
      </button>
    ))}
  </div>

  {/* =====================================================
      360° VIEW LABEL
  ===================================================== */}
  <div
    className="
      hidden
      flex-col
      gap-1
      sm:flex
    "
  >
    <span
      className="
        text-[0.65rem]
        font-medium
        uppercase
        tracking-[0.2em]
        text-foreground
        drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]
        sm:text-xs
      "
    >
      360° View
    </span>

    <span
      className="
        h-px
        w-10
        bg-gold/70
      "
    />
  </div>
</div>


      {/* Decorative Line */}
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
   <section
  id="bespoke"
  className="relative min-h-[530px] overflow-hidden bg-[#f4eee3] text-[#27211d] sm:min-h-[560px] lg:h-[430px] lg:min-h-0"
>
  {/* Background Image */}
  <img
    src={bespoke}
    alt="Jeweller sketching a bespoke D pendant"
    loading="lazy"
    width={1600}
    height={912}
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[65%_center]
      sm:object-[60%_center]
      lg:object-[68%_center]
    "
  />

  {/* Screenshot-style cream overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f5efe5] via-[#f5efe5]/95 via-[38%] to-[#f5efe5]/10 lg:via-[#f5efe5]/85 lg:to-transparent" />

  {/* Additional soft overlay for readability */}
  <div className="absolute inset-0 bg-white/5" />

  <div className="relative z-10 mx-auto h-full max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12 lg:py-0">

    {/* Main Content */}
    <div className="flex h-full flex-col justify-center lg:max-w-[470px]">
      
      <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#5d5148] sm:text-[10px]">
        Bespoke Jewellery —
      </p>

      <h2 className="mt-3 font-serif text-[38px] font-normal uppercase leading-[0.95] tracking-[-0.02em] text-[#211d1a] sm:text-[44px] lg:text-[48px]">
        Your Story.
        <br />
        Our Craft.
      </h2>

      <p className="mt-4 max-w-[340px] font-serif text-[12px] leading-[1.45] text-[#514941] sm:text-[13px]">
        Create a one-of-a-kind piece that is as unique
        <br className="hidden sm:block" />
        as your journey.
      </p>

      <Link
        to="/bespoke"
        className="mt-6 inline-flex w-fit items-center gap-3 bg-[#e8b866] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#211d1a] transition-all duration-300 hover:bg-[#dca653] hover:shadow-md sm:px-6 sm:py-3.5"
      >
        Start Your Bespoke Journey
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>

    {/* Journey Steps */}
    <ol
  className="
    relative mt-10 grid grid-cols-2 gap-x-6 gap-y-8
    sm:grid-cols-4 sm:gap-0
    lg:absolute lg:bottom-[45px] lg:left-[37%] lg:right-[5%]
    lg:mt-0
  "
>
  <span
    aria-hidden="true"
    className="
      pointer-events-none absolute
      left-[12.5%] right-[12.5%]
      top-[16px]
      hidden h-px
      bg-[#b98b45]
      sm:block
    "
  />

  {/* Step 01 */}
  <li className="relative z-10 flex flex-col items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171411] text-white ring-4 ring-[#eee3d2]/80">
      <Lightbulb className="h-3.5 w-3.5 stroke-[1.5]" />
    </div>
    <p className="mt-3 font-serif text-[11px] font-medium text-[#b98b45]">01</p>
    <p className="mt-1 text-center text-[9px] leading-tight text-[#514941] sm:text-[10px]">
      Share Your Idea
    </p>
  </li>

  {/* Step 02 */}
  <li className="relative z-10 flex flex-col items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171411] text-white ring-4 ring-[#eee3d2]/80">
      <PenTool className="h-3.5 w-3.5 stroke-[1.5]" />
    </div>
    <p className="mt-3 font-serif text-[11px] font-medium text-[#b98b45]">02</p>
    <p className="mt-1 text-center text-[9px] leading-tight text-[#514941] sm:text-[10px]">
      Design Consultation
    </p>
  </li>

  {/* Step 03 */}
  <li className="relative z-10 flex flex-col items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171411] text-white ring-4 ring-[#eee3d2]/80">
      <Hammer className="h-3.5 w-3.5 stroke-[1.5]" />
    </div>
    <p className="mt-3 font-serif text-[11px] font-medium text-[#b98b45]">03</p>
    <p className="mt-1 text-center text-[9px] leading-tight text-[#514941] sm:text-[10px]">
      Craft Your Piece
    </p>
  </li>

  {/* Step 04 */}
  <li className="relative z-10 flex flex-col items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171411] text-white ring-4 ring-[#eee3d2]/80">
      <Sparkles className="h-3.5 w-3.5 stroke-[1.5]" />
    </div>
    <p className="mt-3 font-serif text-[11px] font-medium text-[#b98b45]">04</p>
    <p className="mt-1 text-center text-[9px] leading-tight text-[#514941] sm:text-[10px]">
      A Timeless Creation
    </p>
  </li>
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
  <section
  id="featured"
  className="bg-[#f1e6d6] px-6 py-16 text-[#2f241f] lg:px-12"
>
  <div className="mx-auto max-w-[1440px]">
    <h2 className="text-3xl uppercase tracking-wider text-[#2f241f]">
      Featured Collections
    </h2>

    <div className="mt-5 flex flex-wrap gap-2">
      {["All", ...categories].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`eyebrow px-4 py-2 transition ${
            filter === f
              ? "bg-[#b98b45] text-white"
              : "text-[#5a4940] hover:text-[#8f682f]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {shown.map((p) => (
        <ProductCard key={p.slug} p={p} />
      ))}
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
