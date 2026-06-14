import type { ReactNode } from "react";
import { Nav, Footer } from "./Nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] grid-bg" />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
