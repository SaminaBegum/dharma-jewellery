import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { useStore } from "@/lib/store";
import { formatINR } from "@/lib/products";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Dharma Jewellery" }, { name: "description", content: "Complete your Dharma order." }, { property: "og:title", content: "Checkout — Dharma" }, { property: "og:description", content: "Complete your order." }] }),
  component: Page,
});
const f = "w-full border border-border bg-transparent px-3 py-3 text-sm outline-none focus:border-gold";
function Page() {
  const { cartItems, subtotal, placeOrder, ready } = useStore();
  const nav = useNavigate();
  if (!ready) return <Shell><Container className="pt-40 pb-20 text-center">Loading checkout…</Container></Shell>;
  if (!cartItems.length) return <Shell><Container className="pt-40 pb-20 text-center"><p>Your bag is empty.</p><Link to="/collections" className="btn-gold mt-6">Shop now</Link></Container></Shell>;
  return (<Shell><Container className="pt-28 pb-16">
    <p className="eyebrow text-gold">Almost yours</p><h1 className="mt-2 text-4xl uppercase md:text-5xl">Checkout</h1>
    <p className="mt-3 max-w-2xl text-sm text-muted-foreground">This is a shopping preview. Submitting saves a sample order in this browser only; no payment is taken or order sent.</p>
    <form className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]" onSubmit={(e) => { e.preventDefault(); const d = new FormData(e.currentTarget); placeOrder({ name: String(d.get("name")), address: `${d.get("address")}, ${d.get("city")} ${d.get("pin")}`, payment: String(d.get("payment")) }); nav({ to: "/orders" }); }}>
      <div className="grid h-fit gap-4 sm:grid-cols-2">
        <h2 className="text-2xl sm:col-span-2">Delivery details</h2>
        <label className="text-xs text-muted-foreground">Full name<input name="name" autoComplete="name" required placeholder="Your name" className={`${f} mt-2 text-foreground`} /></label>
        <label className="text-xs text-muted-foreground">Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={`${f} mt-2 text-foreground`} /></label>
        <label className="text-xs text-muted-foreground sm:col-span-2">Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="Phone number" className={`${f} mt-2 text-foreground`} /></label>
        <label className="text-xs text-muted-foreground sm:col-span-2">Address<input name="address" autoComplete="street-address" required placeholder="Street address" className={`${f} mt-2 text-foreground`} /></label>
        <label className="text-xs text-muted-foreground">City<input name="city" autoComplete="address-level2" required placeholder="City" className={`${f} mt-2 text-foreground`} /></label>
        <label className="text-xs text-muted-foreground">PIN code<input name="pin" inputMode="numeric" pattern="[0-9]{6}" autoComplete="postal-code" required placeholder="6-digit PIN" className={`${f} mt-2 text-foreground`} /></label>
        <input type="hidden" name="payment" value="Not charged — preview" />
      </div>
      <aside className="h-fit border-t border-border py-6 lg:sticky lg:top-24 lg:border lg:p-6">
        <h2 className="mb-5 text-2xl">Order summary</h2>
        {cartItems.map((l) => <div key={l.slug} className="flex justify-between py-1 text-sm"><span className="truncate">{l.product.name} × {l.qty}</span><span>{formatINR(l.product.price * l.qty)}</span></div>)}
        <div className="mt-3 flex justify-between text-sm text-muted-foreground"><span>Delivery</span><span>Complimentary</span></div>
        <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg"><span>Total</span><span className="text-gold">{formatINR(subtotal)}</span></div>
        <Button variant="gold" type="submit" className="mt-6 h-12 w-full uppercase">Save Preview Order</Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">No payment will be processed.</p>
      </aside>
    </form>
  </Container></Shell>);
}
