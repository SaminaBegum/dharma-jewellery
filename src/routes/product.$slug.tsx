// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { useState } from "react";
// import { Heart } from "lucide-react";
// import { toast } from "sonner";
// import { Shell } from "@/components/site/Shell";
// import { Container } from "@/components/site/Layout";
// import { ProductCard } from "@/components/site/ProductCard";
// import { getProduct, products, formatINR } from "@/lib/products";
// import { useStore } from "@/lib/store";
// import { Button } from "@/components/ui/button";
// export const Route = createFileRoute("/product/$slug")({
//   loader: ({ params }) => { const p = getProduct(params.slug); if (!p) throw notFound(); return { slug: p.slug }; },
//   head: ({ loaderData }) => { const p = loaderData && getProduct(loaderData.slug); return { meta: [{ title: `${p?.name ?? "Product"} — Dharma Jewellery` }, { name: "description", content: p?.description ?? "" }, { property: "og:title", content: p?.name ?? "Dharma" }, { property: "og:description", content: p?.description ?? "" }] }; },
//   notFoundComponent: () => <Shell><Container className="py-40 text-center"><h1 className="text-4xl">Piece not found</h1><Link to="/collections" className="btn-gold mt-6">Back to collections</Link></Container></Shell>,
//   errorComponent: () => <div className="p-20">Something went wrong.</div>,
//   component: Page,
// });
// function Page() {
//   const { slug } = Route.useLoaderData();
//   const p = getProduct(slug);
//   const [qty, setQty] = useState(1);
//   const { addToCart, toggleWish, wishlist } = useStore();
//   if (!p) return null;
//   return (<Shell><Container className="pt-28 pb-16">
//     <div className="grid gap-10 md:grid-cols-2">
//       <img src={p.img} alt={p.name} className="aspect-square w-full object-cover" />
//       <div className="min-w-0 md:py-8 lg:px-8">
//         <p className="eyebrow text-gold">{p.cat}</p>
//         <h1 className="mt-3 text-4xl md:text-5xl">{p.name}</h1>
//         <p className="mt-4 text-2xl text-gold">{formatINR(p.price)}</p>
//         <p className="mt-6 text-sm leading-relaxed text-foreground/80">{p.description}</p>
//         <dl className="mt-6 space-y-2 text-sm"><div><dt className="eyebrow inline text-gold">Metal: </dt><dd className="inline">{p.metal}</dd></div><div><dt className="eyebrow inline text-gold">Stones: </dt><dd className="inline">{p.stones}</dd></div></dl>
//         <div className="mt-8 flex flex-wrap items-center gap-3">
//           <div className="flex h-11 items-center border border-border"><Button variant="ghost" size="icon" aria-label="Decrease quantity" disabled={qty === 1} onClick={() => setQty(Math.max(1, qty - 1))}>−</Button><span className="min-w-8 text-center text-sm">{qty}</span><Button variant="ghost" size="icon" aria-label="Increase quantity" onClick={() => setQty(qty + 1)}>+</Button></div>
//           <Button variant="gold" className="h-11 flex-1 uppercase sm:flex-none" onClick={() => { addToCart(p.slug, qty); toast.success("Added to bag"); }}>Add to Bag</Button>
//           <Button variant="goldOutline" size="icon" aria-label={wishlist.includes(p.slug) ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={wishlist.includes(p.slug)} onClick={() => toggleWish(p.slug)} className="h-11 w-11"><Heart className={`h-4 w-4 ${wishlist.includes(p.slug) ? "fill-gold text-gold" : ""}`} /></Button>
//         </div>
//         <Link to="/cart" className="eyebrow mt-6 inline-block text-gold">View Bag →</Link>
//         <div className="mt-10 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground"><p>Complimentary delivery and signature gift packaging.</p><p>Each piece is crafted with care and made to be treasured.</p></div>
//       </div>
//     </div>
//     <h2 className="mt-20 text-3xl uppercase">You may also love</h2>
//     <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">{products.filter((x) => x.slug !== p.slug).slice(0, 4).map((x) => <ProductCard key={x.slug} p={x} />)}</div>
//   </Container></Shell>);
// }


import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products, formatINR } from "@/lib/products";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },

  head: ({ loaderData }) => {
    const p = loaderData && getProduct(loaderData.slug);

    return {
      meta: [
        {
          title: `${p?.name ?? "Product"} — Dharma Jewellery`,
        },
        {
          name: "description",
          content: p?.description ?? "",
        },
        {
          property: "og:title",
          content: p?.name ?? "Dharma",
        },
        {
          property: "og:description",
          content: p?.description ?? "",
        },
      ],
    };
  },

  notFoundComponent: () => (
    <Shell>
      <div className="bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="py-40 text-center">
          <h1 className="text-4xl">Piece not found</h1>

          <Link
            to="/collections"
            className="btn-gold mt-6 inline-block"
          >
            Back to collections
          </Link>
        </Container>
      </div>
    </Shell>
  ),

  errorComponent: () => (
    <div className="min-h-screen bg-[oklch(93%_.025_80)] p-20 text-[oklch(28%_.1_15)]">
      Something went wrong.
    </div>
  ),

  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug);
  const [qty, setQty] = useState(1);

  const { addToCart, toggleWish, wishlist } = useStore();

  if (!p) return null;

  const isWishlisted = wishlist.includes(p.slug);

  return (
    <Shell>
      <div className="bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="pt-28 pb-16">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Product Image */}
            <div className="overflow-hidden bg-[oklch(93%_.025_80)]">
              <img
                src={p.img}
                alt={p.name}
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="min-w-0 md:py-8 lg:px-8">
              <p className="eyebrow text-gold">{p.cat}</p>

              <h1 className="mt-3 text-4xl text-[oklch(28%_.1_15)] md:text-5xl">
                {p.name}
              </h1>

              <p className="mt-4 text-2xl text-gold">
                {formatINR(p.price)}
              </p>

              <p className="mt-6 text-sm leading-relaxed text-[oklch(28%_.1_15_/_80%)]">
                {p.description}
              </p>

              {/* Product Information */}
              <dl className="mt-6 space-y-2 text-sm text-[oklch(28%_.1_15)]">
                <div>
                  <dt className="eyebrow inline text-gold">
                    Metal:{" "}
                  </dt>
                  <dd className="inline">{p.metal}</dd>
                </div>

                <div>
                  <dt className="eyebrow inline text-gold">
                    Stones:{" "}
                  </dt>
                  <dd className="inline">{p.stones}</dd>
                </div>
              </dl>

              {/* Quantity + Cart + Wishlist */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex h-11 items-center border border-[oklch(28%_.1_15_/_30%)]">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Decrease quantity"
                    disabled={qty === 1}
                    onClick={() =>
                      setQty(Math.max(1, qty - 1))
                    }
                    className="text-[oklch(28%_.1_15)] hover:bg-[oklch(28%_.1_15_/_8%)]"
                  >
                    −
                  </Button>

                  <span className="min-w-8 text-center text-sm text-[oklch(28%_.1_15)]">
                    {qty}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Increase quantity"
                    onClick={() => setQty(qty + 1)}
                    className="text-[oklch(28%_.1_15)] hover:bg-[oklch(28%_.1_15_/_8%)]"
                  >
                    +
                  </Button>
                </div>

                <Button
                  variant="gold"
                  className="h-11 flex-1 uppercase sm:flex-none"
                  onClick={() => {
                    addToCart(p.slug, qty);
                    toast.success("Added to bag");
                  }}
                >
                  Add to Bag
                </Button>

                <Button
                  variant="goldOutline"
                  size="icon"
                  aria-label={
                    isWishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  aria-pressed={isWishlisted}
                  onClick={() => toggleWish(p.slug)}
                  className="h-11 w-11"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isWishlisted
                        ? "fill-gold text-gold"
                        : ""
                    }`}
                  />
                </Button>
              </div>

              <Link
                to="/cart"
                className="eyebrow mt-6 inline-block text-gold"
              >
                View Bag →
              </Link>

              {/* Product Benefits */}
              <div className="mt-10 space-y-4 border-t border-[oklch(28%_.1_15_/_20%)] pt-6 text-sm text-[oklch(28%_.1_15_/_70%)]">
                <p>
                  Complimentary delivery and signature gift
                  packaging.
                </p>

                <p>
                  Each piece is crafted with care and made to be
                  treasured.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <h2 className="mt-20 text-3xl uppercase text-[oklch(28%_.1_15)]">
            You may also love
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {products
              .filter((x) => x.slug !== p.slug)
              .slice(0, 4)
              .map((x) => (
                <ProductCard key={x.slug} p={x} />
              ))}
          </div>
        </Container>
      </div>
    </Shell>
  );
}
