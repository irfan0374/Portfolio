"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Page-wide motion, kept subtle:
 * - Lenis smooth scrolling (also used for in-page nav links)
 * - hero words rise in on load ([data-word])
 * - sections fade up as they enter ([data-reveal])
 * - cards in a [data-cards] group slide up one after another ([data-card])
 * - [data-tilt] cards lean slightly toward the cursor
 */
export function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72 });
    };
    document.addEventListener("click", onAnchorClick);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-word]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.05, delay: 0.1 },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-cards]").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll("[data-card]"),
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          },
        );
      });
    });

    // Gentle tilt toward the cursor on cards (desktop pointers only).
    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
        const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });
        gsap.set(card, { transformPerspective: 900 });
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          rotY(((e.clientX - r.left) / r.width - 0.5) * 5);
          rotX(-((e.clientY - r.top) / r.height - 0.5) * 5);
        };
        const leave = () => {
          rotX(0);
          rotY(0);
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
