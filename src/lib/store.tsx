import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct, type Product } from "./products";

export type CartLine = { slug: string; qty: number; size?: string | undefined };
export type Order = {
  id: string;
  date: string;
  lines: CartLine[];
  total: number;
  name: string;
  address: string;
  payment: string;
  status: string;
};

type Store = {
  cart: CartLine[];
  wishlist: string[];
  orders: Order[];
  ready: boolean;
  addToCart: (slug: string, qty?: number, size?: string) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  toggleWish: (slug: string) => void;
  placeOrder: (o: Omit<Order, "id" | "date" | "lines" | "total" | "status">) => Order;
  cartItems: (CartLine & { product: Product })[];
  subtotal: number;
};

const Ctx = createContext<Store | null>(null);
const KEY = "dharma-store-v1";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWish] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      setCart(s.cart || []);
      setWish(s.wishlist || []);
      setOrders(s.orders || []);
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify({ cart, wishlist, orders }));
  }, [cart, wishlist, orders, ready]);

  const cartItems = cart.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ ...l, product }] : [];
  });
  const subtotal = cartItems.reduce((s, l) => s + l.product.price * l.qty, 0);

  const value: Store = {
    cart, wishlist, orders, ready, cartItems, subtotal,
    addToCart: (slug, qty = 1, size) =>
      setCart((c) => {
        const ex = c.find((l) => l.slug === slug);
        return ex ? c.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l)) : [...c, { slug, qty, size }];
      }),
    setQty: (slug, qty) => setCart((c) => c.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l))),
    removeFromCart: (slug) => setCart((c) => c.filter((l) => l.slug !== slug)),
    toggleWish: (slug) => setWish((w) => (w.includes(slug) ? w.filter((x) => x !== slug) : [...w, slug])),
    placeOrder: (o) => {
      const order: Order = {
        ...o,
        id: "DH" + Date.now().toString().slice(-7),
        date: new Date().toISOString(),
        lines: cart,
        total: subtotal,
        status: "Preview order",
      };
      setOrders((os) => [order, ...os]);
      setCart([]);
      return order;
    },
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore outside provider");
  return s;
}
