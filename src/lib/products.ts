// import necklaceAsset from "@/assets/necklace.jpg.asset.json";
// const necklace = necklaceAsset.url;
// import ringAsset from "@/assets/ring.jpg.asset.json";
// const ring = ringAsset.url;
// import earringsAsset from "@/assets/earrings.jpg.asset.json";
// const earrings = earringsAsset.url;
// import braceletAsset from "@/assets/bracelet.jpg.asset.json";
// const bracelet = braceletAsset.url;
// import signatureAsset from "@/assets/signature-d.jpg.asset.json";
// const signature = signatureAsset.url;

// export type Product = {
//   slug: string;
//   name: string;
//   price: number;
//   cat: "Necklaces" | "Rings" | "Earrings" | "Bracelets";
//   img: string;
//   metal: string;
//   stones: string;
//   description: string;
// };

// export const categories = ["Necklaces", "Rings", "Earrings", "Bracelets"] as const;

// export const products: Product[] = [
//   { slug: "heritage-polki-necklace", name: "Heritage Polki Necklace", price: 245000, cat: "Necklaces", img: necklace, metal: "22K Yellow Gold", stones: "Polki, Emerald, Ruby", description: "A tribute to royal ateliers — hand-set polki framed by emeralds and rubies, finished with seed pearl drops." },
//   { slug: "signature-d-pendant", name: "Signature D Pendant", price: 125000, cat: "Necklaces", img: signature, metal: "18K Rose Gold", stones: "Diamonds, 0.85 ct", description: "Our emblem. A pavé D entwined with marquise petals — a distinctive expression of identity." },
//   { slug: "ruby-halo-ring", name: "Ruby Halo Ring", price: 98000, cat: "Rings", img: ring, metal: "18K Rose Gold", stones: "Ruby, Diamonds", description: "An oval ruby held in a halo of brilliant diamonds, flanked by pear-cut accents." },
//   { slug: "eternal-bloom-earrings", name: "Eternal Bloom Earrings", price: 175000, cat: "Earrings", img: earrings, metal: "18K Yellow Gold", stones: "Emerald, Diamonds", description: "Pear emeralds drop from a diamond bloom — elegance in every detail." },
//   { slug: "royal-bracelet", name: "Royal Bracelet", price: 195000, cat: "Bracelets", img: bracelet, metal: "22K Yellow Gold", stones: "Ruby, Diamonds", description: "A hinged bangle alternating rubies with diamond clusters, made to be worn for generations." },
//   { slug: "maharani-choker", name: "Maharani Choker", price: 315000, cat: "Necklaces", img: necklace, metal: "22K Yellow Gold", stones: "Kundan, Emerald", description: "A bridal choker in kundan, hand-finished by our master karigars." },
//   { slug: "solitaire-promise-ring", name: "Solitaire Promise Ring", price: 145000, cat: "Rings", img: ring, metal: "18K Rose Gold", stones: "Ruby, Diamonds", description: "A modern promise, rooted in heritage." },
//   { slug: "jaipur-drop-earrings", name: "Jaipur Drop Earrings", price: 132000, cat: "Earrings", img: earrings, metal: "18K Yellow Gold", stones: "Emerald, Diamonds", description: "Inspired by the arches of Jaipur's palaces." },
// ];

// export const formatINR = (n: number) => "₹ " + n.toLocaleString("en-IN");
// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
import necklace from "@/assets/necklace.jpg";
import ring from "@/assets/ring.jpg";
import earrings from "@/assets/earrings.jpg";
import bracelet from "@/assets/bracelet.jpg";
import signature from "@/assets/signature-d.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  cat: "Necklaces" | "Rings" | "Earrings" | "Bracelets";
  img: string;
  images?: string[];
  metal: string;
  stones: string;
  description: string;
};

export const categories = [
  "Necklaces",
  "Rings",
  "Earrings",
  "Bracelets",
] as const;

export const products: Product[] = [
  {
    slug: "heritage-polki-necklace",
    name: "Heritage Polki Necklace",
    price: 245000,
    cat: "Necklaces",
    img: necklace,
    metal: "22K Yellow Gold",
    stones: "Polki, Emerald, Ruby",
    description:
      "A tribute to royal ateliers — hand-set polki framed by emeralds and rubies, finished with seed pearl drops.",
  },
  {
    slug: "signature-d-pendant",
    name: "Signature D Pendant",
    price: 125000,
    cat: "Necklaces",
    img: signature,
    metal: "18K Rose Gold",
    stones: "Diamonds, 0.85 ct",
    description:
      "Our emblem. A pavé D entwined with marquise petals — a distinctive expression of identity.",
  },
  {
    slug: "ruby-halo-ring",
    name: "Ruby Halo Ring",
    price: 98000,
    cat: "Rings",
    img: ring,
    metal: "18K Rose Gold",
    stones: "Ruby, Diamonds",
    description:
      "An oval ruby held in a halo of brilliant diamonds, flanked by pear-cut accents.",
  },
  {
    slug: "eternal-bloom-earrings",
    name: "Eternal Bloom Earrings",
    price: 175000,
    cat: "Earrings",
    img: earrings,
    metal: "18K Yellow Gold",
    stones: "Emerald, Diamonds",
    description:
      "Pear emeralds drop from a diamond bloom — elegance in every detail.",
  },
  {
    slug: "royal-bracelet",
    name: "Royal Bracelet",
    price: 195000,
    cat: "Bracelets",
    img: bracelet,
    metal: "22K Yellow Gold",
    stones: "Ruby, Diamonds",
    description:
      "A hinged bangle alternating rubies with diamond clusters, made to be worn for generations.",
  },
  {
    slug: "maharani-choker",
    name: "Maharani Choker",
    price: 315000,
    cat: "Necklaces",
    img: necklace,
    metal: "22K Yellow Gold",
    stones: "Kundan, Emerald",
    description:
      "A bridal choker in kundan, hand-finished by our master karigars.",
  },
  {
    slug: "solitaire-promise-ring",
    name: "Solitaire Promise Ring",
    price: 145000,
    cat: "Rings",
    img: ring,
    metal: "18K Rose Gold",
    stones: "Ruby, Diamonds",
    description:
      "A modern promise, rooted in heritage.",
  },
  {
    slug: "jaipur-drop-earrings",
    name: "Jaipur Drop Earrings",
    price: 132000,
    cat: "Earrings",
    img: earrings,
    metal: "18K Yellow Gold",
    stones: "Emerald, Diamonds",
    description:
      "Inspired by the arches of Jaipur's palaces.",
  },
];

export const formatINR = (n: number) =>
  "₹ " + n.toLocaleString("en-IN");

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);