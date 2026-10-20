"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/contact";
import { profile } from "@/data/site";

type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setStatus({ kind: "error", message: parsed.error.issues[0]?.message ?? "Please check the form" });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl border-t border-line px-5 py-24 text-center md:px-8">
      <p data-reveal className="mb-6 font-mono text-xs uppercase tracking-[0.2em]">
        <span className="text-accent">05</span>
        <span className="text-muted"> / </span>Contact
      </p>
      <h2 data-reveal className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Let&apos;s build something together.
      </h2>
      <p data-reveal className="mt-5 text-muted">
        Open to Full Stack Developer roles in Abu Dhabi, Dubai or remote.
      </p>
      <a
        data-reveal
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-2 text-xl text-accent transition-opacity hover:opacity-80 sm:text-2xl"
      >
        {profile.email} ↗
      </a>
      <p data-reveal className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
        <a href={profile.phoneHref} className="hover:text-accent">
          {profile.phone}
        </a>
        <span>·</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
        <span>·</span>
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
          GitHub
        </a>
      </p>

      <form
        data-reveal
        onSubmit={onSubmit}
        noValidate
        className="mx-auto mt-12 max-w-lg space-y-4 rounded-2xl border border-line bg-surface p-6 text-left"
      >
        <label className="block">
          <span className="mb-2 block font-mono text-xs text-muted">Your name</span>
          <input name="name" autoComplete="name" placeholder="e.g. Sara Ahmed" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-xs text-muted">Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.ae" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-xs text-muted">Message</span>
          <textarea name="message" rows={5} placeholder="Tell me about the role or project…" className={inputClass} />
        </label>
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="w-full rounded-lg bg-accent py-3 font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="min-h-5 text-center text-sm">
          {status.kind === "sent" && <span className="text-accent">Thanks! I&apos;ll get back to you soon.</span>}
          {status.kind === "error" && <span className="text-red-500">{status.message}</span>}
        </p>
      </form>
    </section>
  );
}
