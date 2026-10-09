import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Heart, ShoppingBag, User, Menu, X, Instagram, Facebook, Youtube, Package } from "lucide-react";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import dharmaLogo from "@/assets/logo.png";
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/our-story", label: "Our Story" },
  { to: "/experience", label: "Experience" },
  { to: "/journal", label: "Journal" },
  { to: "/stores", label: "Stores" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { cart, wishlist } = useStore();
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const solid = pathname !== "/" || scrolled || open;

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
const location = useLocation();
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (

<header
  className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
    isScrolled || location.pathname !== "/"
      ? "border-border bg-[oklch(28%_.1_15)]"
      : "border-transparent bg-transparent"
  }`}
>

      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 lg:flex lg:justify-between lg:px-12">
       <Link to="/" className="flex min-w-0 items-center">
  <img
    src={dharmaLogo}
    alt="Dharma Jewellery"
    className="h-12 w-auto object-contain"
  />
</Link>
        <nav className="hidden gap-6 lg:flex">
          {navLinks.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-gold" }} className="eyebrow text-foreground/85 transition hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <Link to="/orders" aria-label="My orders" className="hidden hover:text-gold sm:block"><User className="h-4 w-4" /></Link>
          <Link to="/wishlist" aria-label="Wishlist" className="relative hover:text-gold">
            <Heart className="h-4 w-4" />
            {wishlist.length > 0 && <Badge n={wishlist.length} />}
          </Link>
          <Link to="/cart" aria-label="Bag" className="relative hover:text-gold">
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && <Badge n={count} />}
          </Link>
          <Link
  to="/experience"
  className="hidden xl:inline-flex items-center justify-center rounded-none border border-[#D6B06A] bg-transparent px-5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#D6B06A] transition-all duration-200 hover:bg-[#D6B06A] hover:text-[#17100C] xl:py-2"
>
  Book Appointment
</Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border bg-background px-6 py-8 lg:hidden">
          {navLinks.map((n) => (
            <Link key={n.to} to={n.to} className="font-serif text-2xl uppercase tracking-wider">{n.label}</Link>
          ))}
          <div className="flex gap-6 pt-4">
            <Link to="/orders" className="eyebrow flex items-center gap-2 text-gold"><Package className="h-4 w-4" />My Orders</Link>
            <Link to="/wishlist" className="eyebrow flex items-center gap-2 text-gold"><Heart className="h-4 w-4" />Wishlist</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Badge({ n }: { n: number }) {
  return <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[0.55rem] text-primary-foreground">{n}</span>;
}

export function SiteFooter() {
  const cols = [
    ["Shop", [["Necklaces", "Necklaces"], ["Rings", "Rings"], ["Earrings", "Earrings"], ["Bracelets", "Bracelets"]]],
    ["Discover", [["Our Story", "/our-story"], ["Bespoke", "/bespoke"], ["Journal", "/journal"]]],
    ["Experience", [["Book Appointment", "/experience"], ["Visit Store", "/stores"], ["Wishlist", "/wishlist"]]],
    ["Customer Care", [["My Orders", "/orders"], ["My Bag", "/cart"], ["Stores", "/stores"]]],
  ] as const;
  return (

<footer className="border-t border-border bg-[oklch(28%_.1_15)] px-6 py-14 lg:px-12">

      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-10 md:grid-cols-[1fr_repeat(4,auto)_1.3fr]">
       <div className="col-span-2 md:col-span-1">
  <div className="flex items-center gap-3">
    <img
      src={dharmaLogo}
      alt="Dharma"
      className="h-12 w-auto object-contain"
    />

  
  </div>

  <p className="mt-2 text-xs text-foreground/70">
    More Than Jewellery.<br />
    A Deeper You.
  </p>
</div>
        {cols.map(([h, ls]) => (
          <div key={h}>
            <p className="eyebrow text-gold">{h}</p>
            <ul className="mt-4 space-y-2 text-xs text-foreground/75">
              {ls.map(([l, to]) => <li key={l}>{h === "Shop" ? <Link to="/collections" search={{ category: to }} className="hover:text-gold">{l}</Link> : <Link to={to as "/our-story" | "/bespoke" | "/journal" | "/experience" | "/stores" | "/wishlist" | "/orders" | "/cart"} className="hover:text-gold">{l}</Link>}</li>)}
            </ul>
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <p className="eyebrow text-gold">Enter the World of Dharma</p>
          <form onSubmit={(e) => { e.preventDefault(); e.currentTarget.reset(); }} className="mt-4 flex border border-border">
            <input type="email" required placeholder="Your email address" aria-label="Email" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs outline-none" />
            <Button variant="gold" type="submit" className="rounded-none">Subscribe</Button>
          </form>
          <div className="mt-5 flex gap-4 text-foreground/80"><Instagram className="h-4 w-4" /><Facebook className="h-4 w-4" /><Youtube className="h-4 w-4" /></div>
          <p className="mt-5 text-[0.65rem] text-foreground/50">© 2026 Dharma Jewellery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: string; sub?: string; img?: string }) {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-cocoa pt-28 pb-14 md:min-h-[440px] md:pt-36 md:pb-20">
      {img && <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl uppercase leading-tight md:text-6xl">{title}</h1>
        {sub && <p className="mt-4 max-w-md text-sm text-foreground/75">{sub}</p>}
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-6 lg:px-12 ${className}`}>{children}</div>;
}
