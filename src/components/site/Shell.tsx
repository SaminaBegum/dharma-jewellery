import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./Layout";
export function Shell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}
