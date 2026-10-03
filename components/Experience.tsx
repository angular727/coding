"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const LABELS: Record<string, string> = { "/": "Home", "/services": "Services", "/products": "Products", "/projects": "Projects", "/about": "About", "/contact": "Contact" };

export default function Experience({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const curtainLabel = useRef<HTMLParagraphElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const transitioning = useRef(false);
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const playHero = () => {
    gsap.utils.toArray<HTMLElement>(".hero-split").forEach((el) => {
      gsap.set(el, { visibility: "visible" });
      gsap.from(el.querySelectorAll(".w-in"), { yPercent: 120, duration: 1.1, stagger: 0.04, ease: "expo.out" });
    });
    gsap.utils.toArray<HTMLElement>(".hero-fade").forEach((el, i) => {
      gsap.set(el, { visibility: "visible" });
      gsap.from(el, { y: 34, opacity: 0, filter: "blur(8px)", duration: 1.1, delay: 0.25 + i * 0.08, ease: "power3.out" });
    });
  };

  // smooth scroll, magnetic buttons, link interception (once)
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.stop();

    const mag = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        if (dist < Math.max(r.width, r.height)) gsap.to(el, { x: (e.clientX - cx) * 0.25, y: (e.clientY - cy) * 0.25, duration: 0.5, ease: "power3" });
        else gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" });
      });
    };
    window.addEventListener("mousemove", mag);

    const click = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) { if (url.hash) return; e.preventDefault(); e.stopPropagation(); lenis.scrollTo(0); return; }
      e.preventDefault(); e.stopPropagation();
      if (transitioning.current) return;
      transitioning.current = true;
      const base = "/" + url.pathname.split("/")[1];
      if (curtainLabel.current) curtainLabel.current.textContent = LABELS[url.pathname] || LABELS[base] || "CodingHub";
      lenis.stop();
      gsap.timeline()
        .set(curtain.current, { display: "flex", yPercent: 100 })
        .to(curtain.current, { yPercent: 0, duration: 0.7, ease: "expo.inOut" })
        .fromTo(curtainLabel.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .add(() => router.push(url.pathname + url.search + url.hash));
    };
    document.addEventListener("click", click, true);

    return () => { window.removeEventListener("mousemove", mag); document.removeEventListener("click", click, true); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [router]);

  // preloader (first load only)
  useEffect(() => {
    const c = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.05 })
        .to(c, { v: 100, duration: 0.9, ease: "power2.inOut", onUpdate: () => setCount(Math.round(c.v)) })
        .to(".loader-bar", { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0)
        .to(".loader-content", { y: -16, opacity: 0, duration: 0.3, ease: "power2.in" })
        .to(loader.current, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "-=0.1")
        .add(() => { lenisRef.current?.start(); playHero(); }, "-=0.45")
        .set(loader.current, { display: "none" });
    }, root);
    return () => ctx.revert();
  }, []);

  // per-page scroll animations (re-run on route change)
  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true });
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 44, opacity: 0, filter: "blur(6px)", duration: 1, ease: "power3.out", delay: Number(el.dataset.delay || 0), scrollTrigger: { trigger: el, start: "top 92%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const o = { v: 0 };
        gsap.to(o, { v: Number(el.dataset.count), duration: 2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 94%", once: true }, onUpdate: () => { el.textContent = String(Math.round(o.v)); } });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.from(el, { clipPath: "inset(0 0 100% 0 round 28px)", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".w-in"), { yPercent: 120, duration: 1.05, stagger: 0.04, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        gsap.to(el.querySelectorAll(".w-op"), { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true } });
      });
      gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { scrub: 0.2, start: 0, end: "max" } });
    }, root);

    if (transitioning.current) {
      gsap.timeline({ delay: 0.2 })
        .to(curtain.current, { yPercent: -100, duration: 0.85, ease: "expo.inOut" })
        .add(() => { lenisRef.current?.start(); playHero(); }, "-=0.5")
        .set(curtain.current, { display: "none" })
        .add(() => { transitioning.current = false; });
    }

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { clearTimeout(t); ctx.revert(); };
  }, [pathname]);

  return (
    <div ref={root}>
      <div className="progress fixed left-0 top-0 z-[95] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-blue to-blue2" />

      <div ref={curtain} className="fixed inset-0 z-[96] hidden items-center justify-center bg-gradient-to-br from-blue to-navy text-white">
        <p ref={curtainLabel} className="font-display text-[7vw] font-semibold tracking-[-0.045em]" />
      </div>

      <div ref={loader} className="fixed inset-0 z-[100] grid place-items-center bg-paper">
        <div className="loader-content flex w-72 flex-col items-center">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-blue2 text-white shadow-lift">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 8 4 14l6 6M18 8l6 6-6 6" /></svg>
            </span>
            <span className="font-display text-3xl font-semibold tracking-[-0.045em]">CodingHub</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded bg-line"><div className="loader-bar h-full origin-left scale-x-0 rounded bg-gradient-to-r from-blue to-blue2" /></div>
          <p className="mt-4 text-xs tabular-nums text-mute">{count}%</p>
        </div>
      </div>

      {children}
    </div>
  );
}
