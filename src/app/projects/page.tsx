import { SITE_URL } from "../../content/site";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "What We've Actually Built | Live AI Systems | Kalvron",
  description: "Real AI operating systems built, deployed, and running for businesses today across sales, operations, marketing, and recruitment.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "What We've Actually Built | Live AI Systems | Kalvron",
    description: "Real AI operating systems built, deployed, and running for businesses today across sales, operations, marketing, and recruitment.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#webpage`,
    "url": `${SITE_URL}/projects`,
    "name": "What We've Actually Built | Live AI Systems | Kalvron",
    "description": "Real AI operating systems built, deployed, and running for businesses today across sales, operations, marketing, and recruitment.",
    "datePublished": "2026-11-08T00:00:00Z",
    "dateModified": "2026-11-08T00:00:00Z",
    "inLanguage": "en",
    "isPartOf": {
      "@id": `${SITE_URL}/#website`
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Benchmark Group",
          "description": "A full operating layer. Not a tool. The whole back office."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "feetbyfoot.com",
          "description": "Their entire social and ad engine, built once, now running on autopilot."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "mriigg.com",
          "description": "The same engine, deployed for a second brand from day one."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "UBNaukri.com",
          "description": "A swarm of AI recruiters, working every mandate from the second it opens."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Lucent / Value Properties",
          "description": "Call acceptance: 10–15% → 40%."
        }
      ]
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto space-y-20 lg:space-y-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <FadeIn>
        <div className="space-y-6 border-b border-border pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 rounded-full text-xs font-mono text-text-muted tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Deployments
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            What we&apos;ve actually built.<br />
            <span className="text-text-muted">Live systems running today.</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl leading-relaxed">
            Not speculative prototypes or slide decks. These are live, production AI operating layers built and deployed by Kalvron, running mission-critical operations for real businesses right now.
          </p>
        </div>
      </FadeIn>

      {/* Projects List */}
      <div className="space-y-20 lg:space-y-28">

        {/* 1. Benchmark Group (Flagship Multi-System Entry) */}
        <FadeIn delay={100}>
          <article className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-10 lg:p-14 space-y-12 transition-colors hover:border-accent-amber/40">
            {/* Top Meta Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-8 border-b border-border/60">
              <div className="lg:col-span-4 space-y-4">
                <div className="h-20 w-full max-w-[240px] px-5 py-3 rounded-xl bg-surface-card border border-border flex items-center justify-center">
                  <img
                    src="/clients/benchmark.png"
                    alt="Benchmark Group logo"
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    Performance marketing agency, ~100 employees
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Benchmark Group
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-text-dim">
                  Full Back-Office Operating Layer
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  A full operating layer. Not a tool. The whole back office.
                </h3>
              </div>
            </div>

            {/* Three Distinct Systems */}
            <div className="space-y-8 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-3">
                <span>Integrated System Architecture</span>
                <span className="h-px flex-1 bg-border/60" />
              </div>

              <div className="grid grid-cols-1 gap-8">
                {/* System A */}
                <div className="rounded-xl border border-border/60 bg-surface-card/60 p-6 sm:p-8 space-y-4 transition-colors hover:border-border">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-accent-amber bg-accent-amber/10 border border-accent-amber/20 px-2.5 py-1 rounded">
                    System A
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Launch a lead handling system for any client in 10 minutes.
                  </h4>
                  <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                    A white-label dashboard that lets the agency spin up a complete, voice-enabled lead handling workflow for any client they bring on — pick the voice, upload the prompts and docs, connect the ad accounts, launch. What used to take engineering time now takes one person and ten minutes, repeatable across every single client they sign.
                  </p>
                </div>

                {/* System B */}
                <div className="rounded-xl border border-border/60 bg-surface-card/60 p-6 sm:p-8 space-y-4 transition-colors hover:border-border">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-accent-amber bg-accent-amber/10 border border-accent-amber/20 px-2.5 py-1 rounded">
                    System B
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    An AI that runs the agency, not just a dashboard about it.
                  </h4>
                  <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                    Phase one automated the agency&apos;s own internal lead handling and operations. Phase two went further: an agentic system that listens to every sales call, and on approval, onboards the new client automatically — builds the project scope from scratch, briefs every team lead (design, build, ads, and more), checks in with each of them weekly on progress, reports back to the client every month with work status and results, and chases the payment until it lands. The CEO doesn&apos;t walk the floor to know what&apos;s happening. They open their phone, ask the AI OS directly — revenue against target, which clients are at risk, who hasn&apos;t paid — and get the answer, the way they&apos;d ask a chief of staff.
                  </p>
                </div>

                {/* System C */}
                <div className="rounded-xl border border-border/60 bg-surface-card/60 p-6 sm:p-8 space-y-4 transition-colors hover:border-border">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-accent-amber bg-accent-amber/10 border border-accent-amber/20 px-2.5 py-1 rounded">
                    System C
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Social media that runs on its own, client after client.
                  </h4>
                  <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                    Add a client once. Every week, the system writes next week&apos;s posts and captions in that client&apos;s exact brand voice, a human reviews and approves on a dashboard, and approved content goes out automatically on schedule. Every single Sunday, without anyone asking: a performance report, a full competitor breakdown from a dedicated analysis agent, and an SEO report flagging what to fix next. One dashboard runs every client the agency has.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* 2. feetbyfoot.com */}
        <FadeIn delay={150}>
          <article className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-10 lg:p-14 transition-colors hover:border-accent-amber/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Meta Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="h-20 w-full max-w-[240px] px-5 py-3 rounded-xl bg-surface-card border border-border flex items-center justify-center">
                  <picture>
                    <source srcSet="/clients/feetbyfoot.avif" type="image/avif" />
                    <img
                      src="/clients/feetbyfoot.png"
                      alt="feetbyfoot.com logo"
                      className="max-h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    D2C footwear brand
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    feetbyfoot.com
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  Their entire social and ad engine, built once, now running on autopilot.
                </h3>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  A complete agentic social media and advertising operation: every week, new posts, captions, and AI-generated image and video ad creative, all in the brand&apos;s exact look and feel, with creative that keeps optimizing itself over time. The owner reviews and approves from one dashboard, and approved content goes live automatically, both as organic posts and as running ads. Every Sunday: performance numbers on what worked, a full competitor report, and an SEO audit with the top fixes. The brand&apos;s entire social presence now runs without a single manual post.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* 3. mriigg.com */}
        <FadeIn delay={200}>
          <article className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-10 lg:p-14 transition-colors hover:border-accent-amber/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Meta Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="h-20 w-full max-w-[240px] px-5 py-3 rounded-xl bg-surface-card border border-border flex items-center justify-center">
                  <img
                    src="/clients/mriigg.png"
                    alt="mriigg.com logo"
                    className="max-h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    D2C brand
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    mriigg.com
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  The same engine, deployed for a second brand from day one.
                </h3>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  Everything built for feetbyfoot — weekly content, AI-generated ad creative, one approval dashboard, automatic publishing as both posts and live ad spend, and the Sunday trifecta of performance, competitor, and SEO reporting — rebuilt and running for mriigg. Proof the system isn&apos;t a one-off; it&apos;s a repeatable engine.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* 4. UBNaukri.com */}
        <FadeIn delay={250}>
          <article className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-10 lg:p-14 transition-colors hover:border-accent-amber/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Meta Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="h-20 w-full max-w-[240px] px-5 py-3 rounded-xl bg-surface-card border border-border flex items-center justify-center overflow-hidden">
                  <img
                    src="/clients/ubnaukri.png"
                    alt="UBNaukri.com logo"
                    className="max-h-12 w-auto object-contain rounded"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    Recruitment agency
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    UBNaukri.com
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  A swarm of AI recruiters, working every mandate from the second it opens.
                </h3>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  The moment a new mandate is created, a team of AI recruiters goes to work: searching job portals, shortlisting candidates by actually reading their resumes, and reaching out to the strongest matches directly. It runs the first-round phone screen in a natural, human-sounding voice, schedules the next interview, sends reminders, and confirms attendance. Rejected candidates don&apos;t disappear — they go into a database and get automatically re-approached against every future mandate, checked against the exact gap that ruled them out the first time. The owner sees the entire pipeline, live, without a single status-check meeting.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* 5. Lucent / Value Properties (Special Stated Metric Entry) */}
        <FadeIn delay={300}>
          <article className="rounded-2xl border border-accent-amber/40 bg-surface/80 p-6 sm:p-10 lg:p-14 relative overflow-hidden transition-colors hover:border-accent-amber/60">
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative z-10">
              {/* Meta Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="h-20 w-full max-w-[240px] px-5 py-3 rounded-xl bg-surface-card border border-border flex items-center justify-center">
                  <img
                    src="/clients/lucent.png"
                    alt="Lucent / Value Properties logo"
                    className="max-h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    Real estate marketing agency
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Lucent / Value Properties
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block text-xs font-mono uppercase tracking-widest text-accent-amber">
                    Proven Performance Metric
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                    Call acceptance: 10–15% → 40%.
                  </h3>
                  <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                    A lead handling system built around calling, WhatsApp fallback, and structured follow-up for the client&apos;s real estate projects. The result is the kind of number that&apos;s hard to argue with: call accept rate nearly tripled, from 10–15% up to 40%.
                  </p>
                </div>

                {/* Hard Metric Callout Banner */}
                <div className="rounded-xl border border-accent-amber/40 bg-accent-amber/10 p-6 sm:p-8 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-amber">
                    Call accept rate
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white tracking-tight">
                    10–15% → 40%
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

      </div>

      {/* Bottom CTA */}
      <FadeIn delay={350}>
        <div className="rounded-2xl border border-border/80 bg-surface-card p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to run operations on a custom AI layer?
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We map your workflows, engineer the custom agents, and deploy directly into the software your teams already use. No disruption, no self-serve setup.
          </p>
          <div className="pt-2">
            <Link
              href="/#book-a-call"
              className="inline-flex h-12 items-center justify-center bg-accent-amber px-8 text-base font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-background"
            >
              Book an architecture call
            </Link>
            <p className="text-xs font-mono text-text-dim mt-3">
              20 minutes. No pitch. Just an operational map.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
