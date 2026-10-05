// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Trash2 } from "lucide-react";
// import { Shell } from "@/components/site/Shell";
// import { Container } from "@/components/site/Layout";
// import { useStore } from "@/lib/store";
// import { formatINR } from "@/lib/products";
// import { Button } from "@/components/ui/button";
// export const Route = createFileRoute("/cart")({
//   head: () => ({ meta: [{ title: "Your Bag — Dharma Jewellery" }, { name: "description", content: "Review the pieces in your bag." }, { property: "og:title", content: "Your Bag — Dharma" }, { property: "og:description", content: "Review your bag." }] }),
//   component: Page,
// });
// function Page() {
//   const { cartItems, subtotal, setQty, removeFromCart, ready } = useStore();
//   return (<Shell><Container className="pt-28 pb-16">
//     <p className="eyebrow text-gold">Your selection</p><h1 className="mt-2 text-4xl uppercase md:text-5xl">Your Bag</h1>
//     {!ready ? <p className="py-20 text-center">Loading your bag…</p> : cartItems.length === 0 ? <div className="py-20 text-center"><p>Your bag is empty.</p><Link to="/collections" className="btn-gold mt-6">Explore Collections</Link></div> :
//     <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
//       <ul className="divide-y divide-border">{cartItems.map((l) => (
//         <li key={l.slug} className="grid grid-cols-[80px_minmax(0,1fr)_auto] gap-3 py-5 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:gap-5">
//           <Link to="/product/$slug" params={{ slug: l.slug }}><img src={l.product.img} alt={l.product.name} className="aspect-square w-20 object-cover sm:w-28" /></Link>
//           <div className="min-w-0 flex-1">
//             <Link to="/product/$slug" params={{ slug: l.slug }} className="font-serif text-lg">{l.product.name}</Link>
//             <p className="text-sm text-gold">{formatINR(l.product.price)}</p>
//             <p className="mt-1 text-xs text-muted-foreground">{l.product.metal}</p>
//             <div className="mt-3 flex w-fit items-center border border-border text-sm"><Button variant="ghost" size="icon" aria-label={`Decrease ${l.product.name} quantity`} disabled={l.qty === 1} onClick={() => setQty(l.slug, l.qty - 1)}>−</Button><span className="min-w-7 text-center">{l.qty}</span><Button variant="ghost" size="icon" aria-label={`Increase ${l.product.name} quantity`} onClick={() => setQty(l.slug, l.qty + 1)}>+</Button></div>
//           </div>
//           <Button variant="ghost" size="icon" aria-label={`Remove ${l.product.name}`} onClick={() => removeFromCart(l.slug)}><Trash2 className="h-4 w-4" /></Button>
//         </li>))}</ul>
//       <aside className="h-fit border-t border-border py-6 lg:sticky lg:top-24 lg:px-6 lg:border">
//         <h2 className="mb-6 text-2xl">Order summary</h2>
//         <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
//         <div className="mt-2 flex justify-between text-sm text-foreground/70"><span>Shipping</span><span>Complimentary</span></div>
//         <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg"><span>Total</span><span className="text-gold">{formatINR(subtotal)}</span></div>
//         <Link to="/checkout" className="btn-gold mt-6 w-full justify-center">Checkout</Link>
//         <p className="mt-4 text-center text-xs text-muted-foreground">Complimentary signature packaging with every order.</p>
//       </aside>
//     </div>}
//   </Container></Shell>);
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { useStore } from "@/lib/store";
import { formatINR } from "@/lib/products";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      {
        title: "Your Bag — Dharma Jewellery",
      },
      {
        name: "description",
        content: "Review the pieces in your bag.",
      },
      {
        property: "og:title",
        content: "Your Bag — Dharma",
      },
      {
        property: "og:description",
        content: "Review your bag.",
      },
    ],
  }),

  component: Page,
});

function Page() {
  const {
    cartItems,
    subtotal,
    setQty,
    removeFromCart,
    ready,
  } = useStore();

  return (
    <Shell>
      <div className="min-h-screen bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="pt-28 pb-16">

          {/* Page Heading */}
          <p className="eyebrow text-gold">
            Your selection
          </p>

          <h1 className="mt-2 text-4xl uppercase text-[oklch(28%_.1_15)] md:text-5xl">
            Your Bag
          </h1>

          {/* Loading */}
          {!ready ? (
            <p className="py-20 text-center text-[oklch(28%_.1_15)]">
              Loading your bag…
            </p>
          ) : cartItems.length === 0 ? (

            /* Empty Bag */
            <div className="py-20 text-center">
              <p className="text-[oklch(28%_.1_15)]">
                Your bag is empty.
              </p>

              <Link
                to="/collections"
                className="btn-gold mt-6 inline-flex"
              >
                Explore Collections
              </Link>
            </div>

          ) : (

            /* Cart Content */
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">

              {/* Cart Items */}
              <ul className="divide-y divide-[oklch(28%_.1_15_/_20%)]">

                {cartItems.map((l) => (
                  <li
                    key={l.slug}
                    className="grid grid-cols-[80px_minmax(0,1fr)_auto] gap-3 py-5 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:gap-5"
                  >

                    {/* Product Image */}
                    <Link
                      to="/product/$slug"
                      params={{ slug: l.slug }}
                    >
                      <img
                        src={l.product.img}
                        alt={l.product.name}
                        className="aspect-square w-20 object-cover sm:w-28"
                      />
                    </Link>

                    {/* Product Information */}
                    <div className="min-w-0 flex-1">

                      <Link
                        to="/product/$slug"
                        params={{ slug: l.slug }}
                        className="font-serif text-lg text-[oklch(28%_.1_15)] transition hover:text-gold"
                      >
                        {l.product.name}
                      </Link>

                      <p className="text-sm text-gold">
                        {formatINR(l.product.price)}
                      </p>

                      <p className="mt-1 text-xs text-[oklch(28%_.1_15_/_65%)]">
                        {l.product.metal}
                      </p>

                      {/* Quantity */}
                      <div className="mt-3 flex w-fit items-center border border-[oklch(28%_.1_15_/_30%)] text-sm">

                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Decrease ${l.product.name} quantity`}
                          disabled={l.qty === 1}
                          onClick={() =>
                            setQty(l.slug, l.qty - 1)
                          }
                          className="text-[oklch(28%_.1_15)] hover:bg-[oklch(28%_.1_15_/_8%)]"
                        >
                          −
                        </Button>

                        <span className="min-w-7 text-center text-[oklch(28%_.1_15)]">
                          {l.qty}
                        </span>

                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Increase ${l.product.name} quantity`}
                          onClick={() =>
                            setQty(l.slug, l.qty + 1)
                          }
                          className="text-[oklch(28%_.1_15)] hover:bg-[oklch(28%_.1_15_/_8%)]"
                        >
                          +
                        </Button>

                      </div>
                    </div>

                    {/* Remove Item */}
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Remove ${l.product.name}`}
                      onClick={() =>
                        removeFromCart(l.slug)
                      }
                      className="text-[oklch(28%_.1_15)] hover:bg-[oklch(28%_.1_15_/_8%)] hover:text-gold"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </li>
                ))}

              </ul>

              {/* Order Summary */}
              <aside className="h-fit border-t border-[oklch(28%_.1_15_/_25%)] py-6 lg:sticky lg:top-24 lg:border lg:px-6">

                <h2 className="mb-6 text-2xl text-[oklch(28%_.1_15)]">
                  Order summary
                </h2>

                {/* Subtotal */}
                <div className="flex justify-between text-[oklch(28%_.1_15)]">
                  <span>Subtotal</span>
                  <span>{formatINR(subtotal)}</span>
                </div>

                {/* Shipping */}
                <div className="mt-2 flex justify-between text-sm text-[oklch(28%_.1_15_/_70%)]">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>

                {/* Total */}
                <div className="mt-4 flex justify-between border-t border-[oklch(28%_.1_15_/_20%)] pt-4 text-lg text-[oklch(28%_.1_15)]">
                  <span>Total</span>
                  <span className="text-gold">
                    {formatINR(subtotal)}
                  </span>
                </div>

                {/* Checkout */}
                <Link
                  to="/checkout"
                  className="btn-gold mt-6 w-full justify-center"
                >
                  Checkout
                </Link>

                <p className="mt-4 text-center text-xs text-[oklch(28%_.1_15_/_60%)]">
                  Complimentary signature packaging with every
                  order.
                </p>

              </aside>
            </div>
          )}
        </Container>
      </div>
    </Shell>
  );
}
