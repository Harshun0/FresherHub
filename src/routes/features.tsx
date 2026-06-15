import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  ArrowUp, Flame, MessageSquare, Moon, ShieldAlert, Heart,
  ArrowRight, Building2, AlertTriangle, Circle,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Community — Fresher Hub" },
      { name: "description", content: "Referrals, rejection wall, resume roasts, grind rooms, scam alerts." },
      { property: "og:title", content: "Fresher Hub Community" },
      { property: "og:description", content: "Six spaces built for freshers in the chaos." },
    ],
  }),
  component: Features,
});

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs text-muted-foreground">{tag}</div>
      <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}

const referrals = [
  { co: "Stripe", role: "SWE Intern", up: 142, tag: "Hiring now" },
  { co: "Linear", role: "Frontend Eng", up: 98, tag: "Referral open" },
  { co: "Vercel", role: "DX Engineer", up: 76, tag: "Hot" },
  { co: "Razorpay", role: "Backend SDE-1", up: 64, tag: "Hiring now" },
];

const rejections = [
  { txt: "Got rejected after 7 rounds. Final feedback: 'We loved you, but no.'", react: "💀 124" },
  { txt: "HR ghosted me for 3 months then sent: 'Are you still interested?'", react: "😭 89" },
  { txt: "OA said max 60 mins. I solved in 45. Got rejected for being too fast 🤡", react: "🤡 201" },
];

const grindRooms = [
  { name: "DSA till sunrise", live: 3, host: "@anika" },
  { name: "Building portfolio", live: 7, host: "@dev_rohan" },
  { name: "System design study", live: 2, host: "@kabir.codes" },
];

const scams = [
  { co: "QuickRise Studios", reason: "Asked for ₹5k 'training fee'", flags: 23 },
  { co: "Globex Tech", reason: "Unpaid 6-month 'trial'", flags: 41 },
  { co: "BrightFuture Inc", reason: "Pyramid recruiting scheme", flags: 67 },
];

function Features() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl font-bold text-gradient sm:text-6xl">The Community</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Six spaces, each built around something every fresher actually deals with.
        </p>
      </section>

      {/* REFERRAL BOARD */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader tag="01 — Referral Board" title="Skip the cold apply. Get warm intros." sub="Drop a target. Community upvotes your post. Insiders DM you directly." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {referrals.map((r) => (
            <div key={r.co} className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[var(--glow)]/40">
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-black/[0.04]"><Building2 className="h-5 w-5 text-[var(--glow-2)]" /></div>
                <button className="flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.04] px-2.5 py-1 text-xs hover:border-[var(--glow)]/50">
                  <ArrowUp className="h-3 w-3" /> {r.up}
                </button>
              </div>
              <div className="mt-4 font-display font-semibold">{r.co}</div>
              <div className="text-sm text-muted-foreground">{r.role}</div>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--glow)]/10 px-2.5 py-1 text-xs text-[var(--glow)]">
                <Circle className="h-1.5 w-1.5 fill-current" /> {r.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REJECTION WALL */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader tag="02 — Rejection Wall" title="Post your worst rejection. Heal together." sub="Anonymous. Cathartic. Sometimes hilarious." />
        <div className="grid gap-4 md:grid-cols-3">
          {rejections.map((r, i) => (
            <div key={i} className="glass relative rounded-2xl p-6">
              <Flame className="h-5 w-5 text-destructive" />
              <p className="mt-4 text-sm leading-relaxed">{r.txt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-black/[0.04] pt-4 text-xs text-muted-foreground">
                <span>Anonymous · 2h ago</span>
                <span className="rounded-full bg-black/[0.04] px-2.5 py-1">{r.react}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROAST MY RESUME */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader tag="03 — Roast My Resume" title="Get torched by people who'd actually hire you." sub="Weekly threads. Senior devs, recruiters, and savage friends." />
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 border-b border-black/[0.04] pb-4">
            <MessageSquare className="h-5 w-5 text-[var(--glow)]" />
            <div>
              <div className="font-display font-semibold">Week 14 — June 14 Roast Thread</div>
              <div className="text-xs text-muted-foreground">42 resumes posted · 318 comments</div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              { u: "@priya.dev", c: "your 'tech stack' lists HTML twice. brave choice 🫡", likes: 34 },
              { u: "@senior_rahul", c: "drop the 'team player' line. nobody believes it. show me a PR.", likes: 89 },
              { u: "@hr_meera", c: "i'd interview u just for the meme certifications section. respect.", likes: 56 },
            ].map((c) => (
              <div key={c.u} className="flex gap-3 rounded-xl border border-black/[0.04] bg-black/[0.03] p-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)]/40 to-[var(--glow-2)]/30 text-xs font-semibold">
                  {c.u[1].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium">{c.u}</div>
                  <div className="text-sm text-foreground/80">{c.c}</div>
                  <div className="mt-2 text-xs text-muted-foreground">❤ {c.likes} · reply</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRIND ROOMS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader tag="04 — Late Night Grind Rooms" title="Focus rooms for the 2AM crew." sub="Live audio + pomodoro. Misery loves company. Productivity follows." />
        <div className="grid gap-4 md:grid-cols-3">
          {grindRooms.map((g) => (
            <div key={g.name} className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <Moon className="h-5 w-5 text-[var(--glow-2)]" />
                <div className="flex items-center gap-1.5 rounded-full bg-destructive/15 px-2.5 py-1 text-xs text-destructive">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" /> LIVE
                </div>
              </div>
              <div className="mt-4 font-display font-semibold">{g.name}</div>
              <div className="text-sm text-muted-foreground">hosted by {g.host}</div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {Array.from({ length: g.live }).map((_, i) => (
                    <div key={i} className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-[var(--glow)]/50 to-[var(--glow-2)]/40 text-[10px] font-bold">{String.fromCharCode(65 + i)}</div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{g.live} online now</span>
              </div>
              <button className="btn-ghost mt-5 w-full !py-2 text-sm">Join room</button>
            </div>
          ))}
        </div>
      </section>

      {/* SCAM ALERT */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader tag="05 — Scam Alert Board" title="Red-flagged. Community vetted." sub="Don't fall for the 'pay for training' trap. We've got receipts." />
        <div className="grid gap-4 md:grid-cols-3">
          {scams.map((s) => (
            <div key={s.co} className="glass relative overflow-hidden rounded-2xl p-6">
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-xs text-destructive">
                <AlertTriangle className="h-3 w-3" /> {s.flags}
              </div>
              <ShieldAlert className="h-6 w-6 text-destructive" />
              <div className="mt-4 font-display font-semibold">{s.co}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.reason}</p>
              <div className="mt-4 text-xs text-destructive/80">⚠ Avoid. {s.flags} freshers flagged this.</div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLAB TEASER */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--glow)]/30 blur-3xl" />
          <Heart className="h-6 w-6 text-[var(--glow)]" />
          <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">06 — Collab & Create</h3>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Our flagship. Find your co-founder, designer, or weekend hack partner — and actually ship something.
          </p>
          <Link to="/collab" className="btn-primary mt-6">Explore Collab <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </PageShell>
  );
}
