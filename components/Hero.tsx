"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";
import DashboardMock from "@/components/DashboardMock";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrap = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // mock enters tilted in 3D and levels out while scrolling
      gsap.fromTo(".mock-main", { rotateX: 16, scale: 0.94, y: 40 }, { rotateX: 0, scale: 1, y: 0, ease: "none", scrollTrigger: { trigger: stage.current, start: "top 95%", end: "top 25%", scrub: true } });
      // layered depth on scroll
      gsap.utils.toArray<HTMLElement>("[data-depth]").forEach((el) => {
        const d = Number(el.dataset.depth);
        gsap.to(el, { y: -d * 90, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom top", scrub: true } });
      });
      gsap.to(".hero-copy", { y: -60, opacity: 0.2, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: "60% top", scrub: true } });
    }, wrap);

    // mouse-driven 3D tilt + depth parallax
    const qx = gsap.quickTo(".mock-main", "rotationY", { duration: 0.8, ease: "power3" });
    const qy = gsap.quickTo(".mock-main", "rotationX", { duration: 0.8, ease: "power3" });
    const move = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5;
      qx(nx * 7); qy(-ny * 4);
      gsap.utils.toArray<HTMLElement>("[data-mdepth]").forEach((el) => {
        const d = Number(el.dataset.mdepth);
        gsap.to(el, { x: nx * d * 28, duration: 0.9, ease: "power3" });
      });
    };
    window.addEventListener("mousemove", move);
    return () => { ctx.revert(); window.removeEventListener("mousemove", move); };
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden px-6 pb-10 pt-32 md:px-10 md:pt-40">
      {/* luminous background */}
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(36,87,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(36,87,255,.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_30%,#000_25%,transparent_80%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-blue/20 blur-[110px] [animation:float-a_14s_ease-in-out_infinite]" />
      <div className="absolute -right-24 top-40 -z-10 h-[460px] w-[460px] rounded-full bg-blue2/25 blur-[110px] [animation:float-b_16s_ease-in-out_infinite]" />
      <div className="absolute left-1/2 top-[55%] -z-10 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="hero-copy mx-auto max-w-4xl text-center">
        <p className="hero-fade glass mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-ink/80">
          <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-blue [animation:pulse-dot_2s_ease-out_infinite]" /><span className="h-2 w-2 rounded-full bg-blue" /></span>
          Welcome to CodingHub
        </p>
        <h1 className="hero-split t-hero">
          <Words text="Empowering businesses through" /> <Words text="innovative" className="acc" /> <Words text="technology solutions." />
        </h1>
        <p className="hero-fade mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
          Cloud web apps, cross-platform mobile apps, IoT, AI and business automation, built to help your organization automate its processes and grow.
        </p>
        <div className="hero-fade mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" data-magnetic className="rounded-full bg-gradient-to-r from-blue to-blue2 px-7 py-3.5 text-sm font-medium text-white shadow-lift transition hover:brightness-110">Start a project</Link>
          <Link href="/products" data-magnetic className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium transition hover:border-blue/40 hover:text-blue">Explore products</Link>
        </div>
      </div>

      {/* 3D product stage */}
      <div ref={stage} className="hero-fade relative mx-auto mt-16 w-full max-w-[1080px] [perspective:1600px]">
        <div className="mock-main [transform-style:preserve-3d]"><DashboardMock /></div>

        <div data-depth="0.5" data-mdepth="-1" className="absolute -left-4 top-28 hidden lg:block xl:-left-40">
          <div className="glass flex items-center gap-3 rounded-2xl p-3.5 pr-5 [animation:float-a_6s_ease-in-out_infinite]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">✓</span>
            <div><p className="text-xs font-semibold">Payment received</p><p className="text-[11px] text-mute">Order #1042 · POS</p></div>
          </div>
        </div>

        <div data-depth="0.9" data-mdepth="1.3" className="absolute -right-4 top-16 hidden lg:block xl:-right-36">
          <div className="glass w-60 rounded-2xl p-3.5 [animation:float-b_7s_ease-in-out_infinite]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky text-blue">✦</span>
              <div><p className="text-xs font-semibold">AI insight</p><p className="text-[11px] leading-snug text-mute">Stock for 3 items runs low this week</p></div>
            </div>
          </div>
        </div>

        {/* phone */}
        <div data-depth="1.4" data-mdepth="1.8" className="absolute -bottom-10 -right-2 hidden w-[150px] md:block lg:w-[170px] xl:-right-10">
          <div className="rounded-[28px] border-[6px] border-ink bg-white p-2.5 shadow-lift [animation:float-a_8s_ease-in-out_infinite]">
            <div className="mx-auto mb-2 h-1 w-10 rounded bg-ink/80" />
            <p className="text-[10px] font-semibold">Today</p>
            <p className="font-display text-xl font-semibold tracking-[-0.04em]">$2,480</p>
            <div className="mt-1.5 flex h-12 items-end gap-1">
              {[40, 62, 48, 80, 58, 90, 70].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue/40 to-blue" style={{ height: `${h}%` }} />)}
            </div>
            <div className="mt-2 space-y-1.5">
              {["Order #1042", "Order #1041"].map((o) => <div key={o} className="flex items-center justify-between rounded-lg bg-soft px-2 py-1.5 text-[9px]"><span>{o}</span><span className="text-emerald-600">Paid</span></div>)}
            </div>
          </div>
        </div>

        <div data-depth="0.3" data-mdepth="-0.8" className="absolute -bottom-6 left-8 hidden md:block xl:-left-24">
          <div className="glass rounded-2xl px-4 py-3 [animation:float-b_9s_ease-in-out_infinite]">
            <p className="font-display text-2xl font-semibold tracking-[-0.04em]">9</p>
            <p className="text-[11px] text-mute">Industry products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
