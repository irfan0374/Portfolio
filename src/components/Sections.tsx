import Image from "next/image";
import { about, experience, hero, profile, projects, skills, type Project } from "@/data/site";

function SectionLabel({ index, title, aside }: { index: string; title: string; aside?: string }) {
  return (
    <div data-reveal className="mb-10 flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em]">
      <p>
        <span className="text-accent">{index}</span>
        <span className="text-muted"> / </span>
        {title}
      </p>
      {aside && <p className="hidden text-muted sm:block">{aside}</p>}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.4fr_1fr] md:px-8 md:pt-40">
      <div className="order-2 md:order-1">
        <p data-reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted">
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
          {hero.status}
        </p>
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {hero.heading.split(" ").map((word, i) => (
            <span key={i} data-word className="inline-block whitespace-pre">
              {word}{" "}
            </span>
          ))}
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {hero.intro}
        </p>
        <div data-reveal className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition-shadow hover:shadow-[0_0_24px_var(--accent-soft)]"
          >
            View my work
          </a>
          <a
            href={profile.cv}
            download
            className="rounded-full border border-line px-6 py-3 transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </div>
        <p data-reveal className="mt-10 font-mono text-xs leading-6 text-muted">
          {hero.stack.join("  ·  ")}
        </p>
      </div>

      <div data-reveal className="order-1 mx-auto w-56 sm:w-64 md:order-2 md:w-full md:max-w-sm">
        <div className="aspect-square overflow-hidden rounded-[2rem] border border-line bg-surface p-2 ring-1 ring-accent/40">
          <Image
            src={profile.photo}
            alt={`${profile.name}, ${profile.role}`}
            width={600}
            height={600}
            priority
            className="h-full w-full rounded-[1.6rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8">
      <SectionLabel index="01" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div data-reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-muted">
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {about.tags.map((t) => (
              <span key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div data-cards className="grid gap-4">
          {about.stats.map((s) => (
            <div key={s.label} data-card className="rounded-2xl border border-line bg-surface p-5">
              <p className="flex items-baseline gap-3">
                <span className="text-3xl font-semibold text-accent">{s.value}</span>
                <span className="font-medium">{s.label}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      data-card
      data-tilt
      className={`group flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-[0_8px_40px_-12px_var(--accent-soft)] ${
        p.featured ? "md:col-span-2 md:grid md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10 md:p-8" : ""
      }`}
    >
      <div className="flex flex-col">
        <div className="mb-4 flex items-center justify-between font-mono text-xs">
          <span className="rounded border border-accent/40 bg-accent-soft px-2 py-0.5 text-accent">{p.label}</span>
          {p.link ? (
            <a
              href={p.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
            >
              {p.link.label} <Arrow />
            </a>
          ) : (
            <span className="text-muted">{p.kind}</span>
          )}
        </div>
        <h3 className={`font-semibold tracking-tight ${p.featured ? "text-3xl" : "text-2xl"}`}>{p.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>

      {p.image && (
        <div className="overflow-hidden rounded-xl border border-line">
          <Image
            src={p.image}
            alt={p.imageAlt ?? p.name}
            width={1400}
            height={764}
            className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {p.terminal && (
        <div className="rounded-xl border border-line bg-bg p-5 font-mono text-sm">
          <p className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3">
            <span className="text-muted">&gt; {p.terminal}</span>
            <span className="flex items-center gap-2 text-xs text-accent">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" /> rendering
            </span>
          </p>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8">
      <SectionLabel index="02" title="Selected projects" aside="Built and shipped" />
      <div data-cards className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8">
      <SectionLabel index="03" title="Work history" />
      <ol data-cards className="relative space-y-6 border-l border-line pl-6 md:pl-10">
        {experience.map((job) => (
          <li key={job.company} data-card className="relative">
            <span
              className={`absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full md:-left-[45px] ${
                job.current ? "pulse-dot bg-accent" : "bg-line"
              }`}
            />
            <div className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="text-muted">·</span>{" "}
                  <span className={job.current ? "text-accent" : ""}>{job.company}</span>
                </h3>
                <p className={`font-mono text-xs ${job.current ? "text-accent" : "text-muted"}`}>{job.dates}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8">
      <SectionLabel index="04" title="Skills" />
      <div data-cards className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.group}
            data-card
            className="rounded-2xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="mb-4 flex items-center gap-2 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 font-mono text-xs text-muted md:px-8">
        <p>© {new Date().getFullYear()} {profile.name} · Built with Next.js</p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
