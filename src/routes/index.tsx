import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  ArrowRight, Heart, Flame, MessageSquare, Moon, ShieldAlert, Users,
  Sparkles, Quote,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fresher Hub — You're not alone in this grind" },
      { name: "description", content: "Premium community for freshers & early-career devs. Collab, vent, get hired together." },
      { property: "og:title", content: "Fresher Hub" },
      { property: "og:description", content: "You're not alone in this grind." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Heart, title: "Referral Board", desc: "Drop target companies. Community upvotes connect you to insiders." },
  { icon: Flame, title: "Rejection Wall", desc: "Post your cringey rejection stories anonymously. React, heal, repeat." },
  { icon: MessageSquare, title: "Roast My Resume", desc: "Weekly threads where seniors brutally (lovingly) tear your CV apart." },
  { icon: Moon, title: "Late Night Grind Rooms", desc: "Live focus rooms at 2AM. Because nobody else is awake to suffer with you." },
  { icon: ShieldAlert, title: "Scam Alert Board", desc: "Community-flagged sus job posts. Don't fall for the unpaid 'internship'." },
  { icon: Users, title: "Collab & Create", desc: "Find your co-founder, designer, or weekend hack partner. Build together." },
];

const testimonials = [
  { name: "Aanya", role: "Final yr, NIT", text: "Got my first referral through Hub in 4 days. Bro this community actually moves." },
  { name: "Rohan", role: "Self-taught dev", text: "The rejection wall made me feel sane. 73 rejections later, I'm employed." },
  { name: "Kabir", role: "Grad '25", text: "Found my co-founder in the Collab section. We're building a Y combinator app now." },
];

function Index() {
  const [email, setEmail] = useState("");
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex animate-float-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--glow)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--glow)]" />
          </span>
          Now welcoming the class of '25 & '26
        </div>
        <h1 className="mt-6 animate-float-up text-5xl font-bold leading-[1.05] text-gradient sm:text-6xl md:text-7xl">
          You're not alone <br className="hidden sm:block" /> in this grind.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-float-up text-base text-muted-foreground sm:text-lg">
          Fresher Hub is a private community for freshers and early-career devs navigating the job market —
          referrals, roasts, rejection therapy, and real collabs. No gatekeeping. No LinkedIn cringe.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@grinding.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--glow)] focus:outline-none focus:ring-2 focus:ring-[var(--glow)]/30"
          />
          <button type="submit" className="btn-primary shrink-0">
            Drop your email <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">I'll add you personally. No spam, promise.</p>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" /> What's inside
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built for the chaos of job hunting.</h2>
          <p className="mt-3 text-muted-foreground">Six spaces, one community. All of it actually useful.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--glow)]/40"
              style={{ animation: `float-up 0.5s ease-out ${i * 60}ms both` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--glow)]/10 blur-2xl transition-opacity group-hover:bg-[var(--glow)]/25" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--glow)]/30 to-[var(--glow-2)]/20 text-[var(--glow)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/features" className="btn-ghost">Explore the community <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Real freshers. Real wins.</h2>
          <p className="mt-3 text-muted-foreground">A few words from the first wave.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <Quote className="h-5 w-5 text-[var(--glow)]" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)]/40 to-[var(--glow-2)]/30 font-display text-sm font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="absolute -bottom-20 left-1/2 -z-10 h-60 w-[80%] -translate-x-1/2 rounded-full bg-[var(--glow)]/30 blur-3xl" />
          <h2 className="text-3xl font-bold sm:text-5xl text-gradient">Don't grind alone.</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join hundreds of freshers building careers together — one referral, roast, and 3AM commit at a time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/waitlist" className="btn-primary">Get on the waitlist <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/collab" className="btn-ghost">See Collab & Create</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
