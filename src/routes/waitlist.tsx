import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import { ArrowRight, Check, Circle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Waitlist — Fresher Hub" },
      { name: "description", content: "Join the waitlist. Premium community for freshers." },
      { property: "og:title", content: "Join Fresher Hub" },
      { property: "og:description", content: "Be first in." },
    ],
  }),
  component: Waitlist,
});

const timeline = [
  { date: "Jun 2026", title: "Private beta", desc: "First 500 freshers get in. Core features live: Referrals, Roasts, Grind Rooms.", status: "now" },
  { date: "Jul 2026", title: "Collab & Create launches", desc: "Project board, team profiles, vibe matching. The flagship.", status: "next" },
  { date: "Aug 2026", title: "Scam Alert + Rejection Wall", desc: "Community-moderated boards go public.", status: "later" },
  { date: "Sep 2026", title: "Open to all", desc: "Doors fully open. Mobile app drops same week.", status: "later" },
];

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <section className="relative mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3 text-[var(--glow)]" /> Limited spots — closing at 500
        </div>
        <h1 className="mt-6 text-5xl font-bold text-gradient sm:text-7xl">Be first in.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Premium community for freshers and early-career devs. Drop your email — I'll add you personally.
        </p>

        {/* Counter */}
        <div className="mx-auto mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur">
          <div>
            <div className="text-xs text-muted-foreground">Currently on waitlist</div>
            <div className="font-display text-3xl font-bold text-gradient">
              {(2847).toLocaleString()}
            </div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div>
            <div className="text-xs text-muted-foreground">Spots remaining</div>
            <div className="font-display text-3xl font-bold">153</div>
          </div>
        </div>

        {/* Form */}
        <div className="glass-strong mx-auto mt-10 max-w-xl rounded-3xl p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--glow)]/20 text-[var(--glow)]">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">You're in the list.</h3>
              <p className="mt-2 text-sm text-muted-foreground">I'll DM you the invite within 48 hours. Check your inbox.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@grinding.dev"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-[var(--glow)] focus:outline-none focus:ring-2 focus:ring-[var(--glow)]/30"
              />
              <button type="submit" className="btn-primary shrink-0">
                Join waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold">What's coming</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">The roadmap. Built in the open.</p>

        <div className="relative mt-12 ml-3">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--glow)]/60 via-white/10 to-transparent" />
          {timeline.map((t) => (
            <div key={t.date} className="relative mb-8 pl-12">
              <div className={`absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full ${
                t.status === "now" ? "bg-[var(--glow)] text-background animate-pulse-glow" :
                t.status === "next" ? "bg-[var(--glow-2)]/30 text-[var(--glow-2)]" : "bg-white/[0.04] text-muted-foreground"
              }`}>
                <Circle className="h-2.5 w-2.5 fill-current" />
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">{t.date}
                  {t.status === "now" && <span className="rounded-full bg-[var(--glow)]/15 px-2 py-0.5 text-[var(--glow)]">LIVE</span>}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">{t.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-10 text-center">
        <p className="text-sm italic text-muted-foreground">
          "Kyunki agar hum ek doosre ki help nahi karenge toh kaun karega."
        </p>
      </section>
    </PageShell>
  );
}
