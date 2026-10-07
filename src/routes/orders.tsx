// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Shell } from "@/components/site/Shell";
// import { Container } from "@/components/site/Layout";
// import { useStore } from "@/lib/store";
// import { formatINR, getProduct } from "@/lib/products";
// export const Route = createFileRoute("/orders")({
//   head: () => ({ meta: [{ title: "My Orders — Dharma Jewellery" }, { name: "description", content: "Track your Dharma orders." }, { property: "og:title", content: "My Orders — Dharma" }, { property: "og:description", content: "Your orders." }] }),
//   component: Page,
// });
// function Page() {
//   const { orders, ready } = useStore();
//   return (<Shell><Container className="pt-28 pb-16">
//     <p className="eyebrow text-gold">Your journey</p><h1 className="mt-2 text-4xl uppercase md:text-5xl">My Orders</h1>
//     <p className="mt-3 text-sm text-muted-foreground">Orders shown here are saved in this browser for this shopping preview.</p>
//     {!ready ? <p className="py-20 text-center">Loading orders…</p> : !orders.length ? <div className="py-20 text-center"><p>No orders yet.</p><Link to="/collections" className="btn-gold mt-6">Start shopping</Link></div> :
//     <div className="mt-8 space-y-6">{orders.map((o) => (
//       <article key={o.id} className="border-t border-border py-6">
//         <div className="flex flex-wrap justify-between gap-2"><p className="font-serif text-xl">Order #{o.id}</p><span className="eyebrow text-gold">{o.status}</span></div>
//         <p className="text-xs text-foreground/60">{new Date(o.date).toLocaleString("en-IN")} · {o.payment}</p>
//         <ul className="mt-6 space-y-3 text-sm">{o.lines.map((l) => { const p = getProduct(l.slug); return p ? <li key={l.slug} className="flex items-center gap-4"><Link to="/product/$slug" params={{ slug: l.slug }}><img src={p.img} alt="" className="h-16 w-16 object-cover" /></Link><span className="min-w-0 flex-1">{p.name} × {l.qty}</span><span>{formatINR(p.price * l.qty)}</span></li> : null; })}</ul>
//         <p className="mt-2 text-sm text-foreground/70">Ship to {o.name}, {o.address}</p>
//         <p className="mt-2 text-gold">{formatINR(o.total)}</p>
//       </article>))}</div>}
//   </Container></Shell>);
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Container } from "@/components/site/Layout";
import { useStore } from "@/lib/store";
import { formatINR, getProduct } from "@/lib/products";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "My Orders — Dharma Jewellery" },
      {
        name: "description",
        content: "Track your Dharma orders.",
      },
      {
        property: "og:title",
        content: "My Orders — Dharma",
      },
      {
        property: "og:description",
        content: "Your orders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { orders, ready } = useStore();

  return (
    <Shell>
      <div className="min-h-screen bg-[oklch(93%_.025_80)] text-[oklch(28%_.1_15)]">
        <Container className="pt-28 pb-16">
          <p className="eyebrow text-gold">Your journey</p>

          <h1 className="mt-2 text-4xl uppercase text-[oklch(28%_.1_15)] md:text-5xl">
            My Orders
          </h1>

          <p className="mt-3 text-sm text-[oklch(28%_.1_15_/_60%)]">
            Orders shown here are saved in this browser for this shopping
            preview.
          </p>

          {!ready ? (
            <p className="py-20 text-center text-[oklch(28%_.1_15_/_70%)]">
              Loading orders…
            </p>
          ) : !orders.length ? (
            <div className="py-20 text-center">
              <p className="text-[oklch(28%_.1_15)]">
                No orders yet.
              </p>

              <Link to="/collections" className="btn-gold mt-6 inline-flex">
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              {orders.map((o) => (
                <article
                  key={o.id}
                  className="border-t border-[oklch(28%_.1_15_/_20%)] py-6"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="font-serif text-xl text-[oklch(28%_.1_15)]">
                      Order #{o.id}
                    </p>

                    <span className="eyebrow text-gold">
                      {o.status}
                    </span>
                  </div>

                  <p className="text-xs text-[oklch(28%_.1_15_/_60%)]">
                    {new Date(o.date).toLocaleString("en-IN")} · {o.payment}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {o.lines.map((l) => {
                      const p = getProduct(l.slug);

                      return p ? (
                        <li
                          key={l.slug}
                          className="flex items-center gap-4"
                        >
                          <Link
                            to="/product/$slug"
                            params={{ slug: l.slug }}
                            className="shrink-0"
                          >
                            <img
                              src={p.img}
                              alt=""
                              className="h-16 w-16 object-cover"
                            />
                          </Link>

                          <span className="min-w-0 flex-1 text-[oklch(28%_.1_15)]">
                            {p.name} × {l.qty}
                          </span>

                          <span className="text-[oklch(28%_.1_15)]">
                            {formatINR(p.price * l.qty)}
                          </span>
                        </li>
                      ) : null;
                    })}
                  </ul>

                  <p className="mt-2 text-sm text-[oklch(28%_.1_15_/_70%)]">
                    Ship to {o.name}, {o.address}
                  </p>

                  <p className="mt-2 text-gold">
                    {formatINR(o.total)}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Container>
      </div>
    </Shell>
  );
}
