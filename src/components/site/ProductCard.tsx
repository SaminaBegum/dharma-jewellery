import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { formatINR, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function ProductCard({ p }: { p: Product }) {
  const { wishlist, toggleWish, addToCart } = useStore();
  const liked = wishlist.includes(p.slug);
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-cocoa">
        <Link to="/product/$slug" params={{ slug: p.slug }}>
          <img src={p.img} alt={p.name} loading="lazy" className="img-zoom h-full w-full object-cover" />
        </Link>
        <Button variant="ghost" size="icon" aria-label={liked ? `Remove ${p.name} from wishlist` : `Save ${p.name} to wishlist`} aria-pressed={liked} onClick={() => toggleWish(p.slug)} className="absolute right-2 top-2 bg-background/85 text-foreground hover:text-gold">
          <Heart className={`h-5 w-5 ${liked ? "fill-gold text-gold" : ""}`} />
        </Button>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <Link to="/product/$slug" params={{ slug: p.slug }} className="min-w-0">
          <p className="truncate font-serif text-base">{p.name}</p>
          <p className="text-sm font-semibold">{formatINR(p.price)}</p>
        </Link>
        <Button variant="ghost" size="icon"
          aria-label={`Add ${p.name} to bag`}
          onClick={() => { addToCart(p.slug); toast.success(`${p.name} added to bag`); }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cocoa text-gold transition hover:bg-wine"
        >
          <ShoppingBag className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
