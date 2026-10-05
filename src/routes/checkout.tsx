// import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
// import { Shell } from "@/components/site/Shell";
// import { Container } from "@/components/site/Layout";
// import { useStore } from "@/lib/store";
// import { formatINR } from "@/lib/products";
// import { Button } from "@/components/ui/button";
// export const Route = createFileRoute("/checkout")({
//   head: () => ({ meta: [{ title: "Checkout — Dharma Jewellery" }, { name: "description", content: "Complete your Dharma order." }, { property: "og:title", content: "Checkout — Dharma" }, { property: "og:description", content: "Complete your order." }] }),
//   component: Page,
// });
// const f = "w-full border border-border bg-transparent px-3 py-3 text-sm outline-none focus:border-gold";
// function Page() {
//   const { cartItems, subtotal, placeOrder, ready } = useStore();
//   const nav = useNavigate();
//   if (!ready) return <Shell><Container className="pt-40 pb-20 text-center">Loading checkout…</Container></Shell>;
//   if (!cartItems.length) return <Shell><Container className="pt-40 pb-20 text-center"><p>Your bag is empty.</p><Link to="/collections" className="btn-gold mt-6">Shop now</Link></Container></Shell>;
//   return (<Shell><Container className="pt-28 pb-16">
//     <p className="eyebrow text-gold">Almost yours</p><h1 className="mt-2 text-4xl uppercase md:text-5xl">Checkout</h1>
//     <p className="mt-3 max-w-2xl text-sm text-muted-foreground">This is a shopping preview. Submitting saves a sample order in this browser only; no payment is taken or order sent.</p>
//     <form className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]" onSubmit={(e) => { e.preventDefault(); const d = new FormData(e.currentTarget); placeOrder({ name: String(d.get("name")), address: `${d.get("address")}, ${d.get("city")} ${d.get("pin")}`, payment: String(d.get("payment")) }); nav({ to: "/orders" }); }}>
//       <div className="grid h-fit gap-4 sm:grid-cols-2">
//         <h2 className="text-2xl sm:col-span-2">Delivery details</h2>
//         <label className="text-xs text-muted-foreground">Full name<input name="name" autoComplete="name" required placeholder="Your name" className={`${f} mt-2 text-foreground`} /></label>
//         <label className="text-xs text-muted-foreground">Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={`${f} mt-2 text-foreground`} /></label>
//         <label className="text-xs text-muted-foreground sm:col-span-2">Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="Phone number" className={`${f} mt-2 text-foreground`} /></label>
//         <label className="text-xs text-muted-foreground sm:col-span-2">Address<input name="address" autoComplete="street-address" required placeholder="Street address" className={`${f} mt-2 text-foreground`} /></label>
//         <label className="text-xs text-muted-foreground">City<input name="city" autoComplete="address-level2" required placeholder="City" className={`${f} mt-2 text-foreground`} /></label>
//         <label className="text-xs text-muted-foreground">PIN code<input name="pin" inputMode="numeric" pattern="[0-9]{6}" autoComplete="postal-code" required placeholder="6-digit PIN" className={`${f} mt-2 text-foreground`} /></label>
//         <input type="hidden" name="payment" value="Not charged — preview" />
//       </div>
//       <aside className="h-fit border-t border-border py-6 lg:sticky lg:top-24 lg:border lg:p-6">
//         <h2 className="mb-5 text-2xl">Order summary</h2>
//         {cartItems.map((l) => <div key={l.slug} className="flex justify-between py-1 text-sm"><span className="truncate">{l.product.name} × {l.qty}</span><span>{formatINR(l.product.price * l.qty)}</span></div>)}
//         <div className="mt-3 flex justify-between text-sm text-muted-foreground"><span>Delivery</span><span>Complimentary</span></div>
//         <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg"><span>Total</span><span className="text-gold">{formatINR(subtotal)}</span></div>
//         <Button variant="gold" type="submit" className="mt-6 h-12 w-full uppercase">Save Preview Order</Button>
//         <p className="mt-3 text-center text-xs text-muted-foreground">No payment will be processed.</p>
//       </aside>
//     </form>
//   </Container></Shell>);
// }

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { useStore } from "@/lib/store";
import { formatINR } from "@/lib/products";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      {
        title: "Checkout — Dharma Jewellery",
      },
      {
        name: "description",
        content: "Complete your Dharma order.",
      },
      {
        property: "og:title",
        content: "Checkout — Dharma",
      },
      {
        property: "og:description",
        content: "Complete your order.",
      },
    ],
  }),

  component: Page,
});

const f =
  "w-full border border-[oklch(28%_.1_15_/_30%)] bg-[oklch(93%_.025_80)] px-3 py-3 text-sm text-[oklch(28%_.1_15)] outline-none placeholder:text-[oklch(28%_.1_15_/_45%)] focus:border-gold";

function Page() {
  const { cartItems, subtotal, placeOrder, ready } = useStore();
  const nav = useNavigate();

  if (!ready) {
    return (
      <Shell>
        <div className="min-h-screen bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
          <Container className="pt-40 pb-20 text-center">
            Loading checkout…
          </Container>
        </div>
      </Shell>
    );
  }

  if (!cartItems.length) {
    return (
      <Shell>
        <div className="min-h-screen bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
          <Container className="pt-40 pb-20 text-center">
            <p>Your bag is empty.</p>

            <Link
              to="/collections"
              className="btn-gold mt-6 inline-flex"
            >
              Shop now
            </Link>
          </Container>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="min-h-screen bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="pt-28 pb-16">

          {/* Page Heading */}
          <p className="eyebrow text-gold">
            Almost yours
          </p>

          <h1 className="mt-2 text-4xl uppercase text-[oklch(28%_.1_15)] md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-[oklch(28%_.1_15_/_70%)]">
            This is a shopping preview. Submitting saves a
            sample order in this browser only; no payment is
            taken or order sent.
          </p>

          <form
            className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]"
            onSubmit={(e) => {
              e.preventDefault();

              const d = new FormData(e.currentTarget);

              placeOrder({
                name: String(d.get("name")),
                address: `${d.get("address")}, ${d.get(
                  "city"
                )} ${d.get("pin")}`,
                payment: String(d.get("payment")),
              });

              nav({ to: "/orders" });
            }}
          >

            {/* Delivery Details */}
            <div className="grid h-fit gap-4 sm:grid-cols-2">

              <h2 className="text-2xl text-[oklch(28%_.1_15)] sm:col-span-2">
                Delivery details
              </h2>

              {/* Full Name */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)]">
                Full name

                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className={`${f} mt-2`}
                />
              </label>

              {/* Email */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)]">
                Email

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={`${f} mt-2`}
                />
              </label>

              {/* Phone */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)] sm:col-span-2">
                Phone

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Phone number"
                  className={`${f} mt-2`}
                />
              </label>

              {/* Address */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)] sm:col-span-2">
                Address

                <input
                  name="address"
                  autoComplete="street-address"
                  required
                  placeholder="Street address"
                  className={`${f} mt-2`}
                />
              </label>

              {/* City */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)]">
                City

                <input
                  name="city"
                  autoComplete="address-level2"
                  required
                  placeholder="City"
                  className={`${f} mt-2`}
                />
              </label>

              {/* PIN */}
              <label className="text-xs text-[oklch(28%_.1_15_/_70%)]">
                PIN code

                <input
                  name="pin"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  autoComplete="postal-code"
                  required
                  placeholder="6-digit PIN"
                  className={`${f} mt-2`}
                />
              </label>

              <input
                type="hidden"
                name="payment"
                value="Not charged — preview"
              />
            </div>

            {/* Order Summary */}
            <aside className="h-fit border-t border-[oklch(28%_.1_15_/_25%)] py-6 lg:sticky lg:top-24 lg:border lg:p-6">

              <h2 className="mb-5 text-2xl text-[oklch(28%_.1_15)]">
                Order summary
              </h2>

              {/* Products */}
              {cartItems.map((l) => (
                <div
                  key={l.slug}
                  className="flex justify-between gap-4 py-1 text-sm text-[oklch(28%_.1_15)]"
                >
                  <span className="truncate">
                    {l.product.name} × {l.qty}
                  </span>

                  <span className="shrink-0">
                    {formatINR(
                      l.product.price * l.qty
                    )}
                  </span>
                </div>
              ))}

              {/* Delivery */}
              <div className="mt-3 flex justify-between text-sm text-[oklch(28%_.1_15_/_70%)]">
                <span>Delivery</span>
                <span>Complimentary</span>
              </div>

              {/* Total */}
              <div className="mt-4 flex justify-between border-t border-[oklch(28%_.1_15_/_20%)] pt-4 text-lg text-[oklch(28%_.1_15)]">
                <span>Total</span>

                <span className="text-gold">
                  {formatINR(subtotal)}
                </span>
              </div>

              {/* Submit */}
              <Button
                variant="gold"
                type="submit"
                className="mt-6 h-12 w-full uppercase"
              >
                Save Preview Order
              </Button>

              <p className="mt-3 text-center text-xs text-[oklch(28%_.1_15_/_60%)]">
                No payment will be processed.
              </p>
            </aside>
          </form>
        </Container>
      </div>
    </Shell>
  );
}
