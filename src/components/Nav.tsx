import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Community" },
  { to: "/collab", label: "Collab & Create" },
  { to: "/waitlist", label: "Waitlist" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base">Fresher Hub</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
                activeProps={{ className: "rounded-lg px-3 py-1.5 text-sm text-foreground bg-white/[0.04]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/waitlist" className="btn-primary !py-2 !px-4 text-sm">Join waitlist</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Fresher Hub
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground italic">
              "Kyunki agar hum ek doosre ki help nahi karenge toh kaun karega."
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/features" className="hover:text-foreground">Community</Link>
            <Link to="/collab" className="hover:text-foreground">Collab</Link>
            <Link to="/waitlist" className="hover:text-foreground">Waitlist</Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground/60">© {new Date().getFullYear()} Fresher Hub. Built by freshers, for freshers.</div>
      </div>
    </footer>
  );
}
