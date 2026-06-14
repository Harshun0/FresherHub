import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  Rocket, Code2, Palette, Server, Smartphone, Brain, Users,
  Sparkles, ArrowRight, Filter,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/collab")({
  head: () => ({
    meta: [
      { title: "Collab & Create — Fresher Hub" },
      { name: "description", content: "Don't build alone. Find your people, ship together." },
      { property: "og:title", content: "Collab & Create" },
      { property: "og:description", content: "Find your co-founder, designer, or hack partner." },
    ],
  }),
  component: Collab,
});

const projects = [
  { name: "PennyPal", desc: "Gen-Z first finance tracker with AI coach.", tag: "Startup", roles: ["Frontend", "Designer"], founder: "Aanya", color: "from-pink-500/40 to-purple-500/30" },
  { name: "DSA Buddy", desc: "Daily problem matchmaking & live solve.", tag: "Side Project", roles: ["Backend", "ML"], founder: "Rohan", color: "from-cyan-500/40 to-blue-500/30" },
  { name: "ResumeRoast.io", desc: "AI roast + serious feedback. Hackathon win.", tag: "Hackathon", roles: ["Full-stack"], founder: "Kabir", color: "from-orange-500/40 to-red-500/30" },
  { name: "OpenCollege", desc: "Open-source LMS for tier-3 colleges.", tag: "Open Source", roles: ["Frontend", "Backend", "Designer"], founder: "Meera", color: "from-emerald-500/40 to-teal-500/30" },
  { name: "GigStack", desc: "Freelance work, escrow built in.", tag: "Freelance", roles: ["Backend", "Mobile"], founder: "Devansh", color: "from-violet-500/40 to-indigo-500/30" },
  { name: "FocusFM", desc: "Lo-fi radio + pomodoro for grind rooms.", tag: "Side Project", roles: ["Frontend", "Audio"], founder: "Priya", color: "from-yellow-500/40 to-orange-500/30" },
];

const tags = ["All", "Startup", "Open Source", "Freelance", "Hackathon", "Side Project"];

const roleIcons: Record<string, typeof Code2> = {
  Frontend: Code2, Backend: Server, Designer: Palette, Mobile: Smartphone, ML: Brain, Audio: Sparkles, "Full-stack": Code2,
};

const members = [
  { name: "Aanya Sharma", skills: ["React", "Design"], status: "open to collab", current: "PennyPal" },
  { name: "Rohan K.", skills: ["Node", "Python"], status: "open to collab", current: "DSA Buddy" },
  { name: "Kabir Singh", skills: ["Next.js", "Postgres"], status: "busy", current: "ResumeRoast" },
  { name: "Meera Patel", skills: ["Go", "K8s"], status: "open to collab", current: "OpenCollege" },
];

function Collab() {
  const [active, setActive] = useState("All");
  const [form, setForm] = useState({ name: "", desc: "", roles: "", time: "5-10 hrs/wk", type: "Startup" });
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3 text-[var(--glow)]" /> Flagship feature
        </div>
        <h1 className="mt-6 text-5xl font-bold text-gradient sm:text-7xl">Don't build alone.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Find your people. Post an idea, browse projects, vibe-match with builders who actually ship.
        </p>
      </section>

      {/* POST IDEA */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--glow)]/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">Post an Idea</h2>
                <p className="text-sm text-muted-foreground">Drop your project. The right people will find you.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Project name">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. PennyPal" className="input-base" />
              </Field>
              <Field label="Type">
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="input-base">
                  {tags.slice(1).map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="What you're building" full>
                <textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} rows={3} placeholder="One paragraph. What is it, who's it for, why now?" className="input-base resize-none" />
              </Field>
              <Field label="Roles needed">
                <input value={form.roles} onChange={(e) => setForm({ ...form, roles: e.target.value })} placeholder="Frontend, Designer, Backend" className="input-base" />
              </Field>
              <Field label="Time commitment">
                <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input-base">
                  <option>1-5 hrs/wk</option><option>5-10 hrs/wk</option><option>10-20 hrs/wk</option><option>Full-time</option>
                </select>
              </Field>
            </div>
            <button className="btn-primary mt-6">Post idea <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      {/* BROWSE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Browse Projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">{filtered.length} active collabs looking for teammates</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition ${active === t ? "border-[var(--glow)]/50 bg-[var(--glow)]/15 text-foreground" : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"}`}
              >{t}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.name} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[var(--glow)]/40">
              <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${p.color} blur-2xl opacity-60 group-hover:opacity-100 transition`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs">{p.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.roles.map((r) => {
                    const Icon = roleIcons[r] ?? Code2;
                    return (
                      <span key={r} className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
                        <Icon className="h-3 w-3" /> {r}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)]/40 to-[var(--glow-2)]/30 text-[10px] font-bold">{p.founder[0]}</div>
                    <span className="text-xs text-muted-foreground">{p.founder}</span>
                  </div>
                  <button className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium transition hover:bg-[var(--glow)]/20 hover:text-[var(--glow)]">Join Project →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h2 className="font-display text-3xl font-bold">Team profiles</h2>
          <p className="mt-1 text-sm text-muted-foreground">Builders ready to team up. Vibe-check before you DM.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)]/50 to-[var(--glow-2)]/40 font-display font-bold">
                  {m.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">{m.name}</div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className={`h-1.5 w-1.5 rounded-full ${m.status === "open to collab" ? "bg-[var(--glow-2)]" : "bg-muted-foreground"}`} />
                    <span className="text-muted-foreground">{m.status}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.skills.map((s) => <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{s}</span>)}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">on <span className="text-foreground">{m.current}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* VIBE MATCH */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--glow-2)]/25 blur-3xl" />
          <div className="relative flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
              <Users className="h-5 w-5 text-[var(--glow-2)]" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold">You might click with</h3>
              <p className="mt-1 text-sm text-muted-foreground">Match suggestions based on your stack, hours, and project type.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Devansh (React + Figma)", "Priya (Node + Postgres)", "Tara (iOS + design)"].map((s) => (
                  <div key={s} className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-sm">
                    <div className="text-xs text-[var(--glow)]">98% vibe match</div>
                    <div className="mt-1">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

// global input style via inline className utility: define here
const _styleInjection = (
  <style>{`.input-base{width:100%;border-radius:.75rem;border:1px solid color-mix(in oklab,white 10%,transparent);background:color-mix(in oklab,white 3%,transparent);padding:.65rem .85rem;font-size:.9rem;color:var(--foreground);outline:none;transition:border-color .2s}.input-base:focus{border-color:var(--glow);box-shadow:0 0 0 3px color-mix(in oklab,var(--glow) 25%,transparent)}`}</style>
);
void _styleInjection;
