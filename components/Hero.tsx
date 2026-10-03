"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";
import { panels, ZMAX } from "@/components/HeroPanels";

gsap.registerPlugin(ScrollTrigger);

const env = (p: number, a: number, b: number, c: number, d: number) => gsap.utils.clamp(0, 1, Math.min((p - a) / (b - a), (d - p) / (d - c)));

export default function Hero() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const q = gsap.utils.selector(section.current);
      const scene = q(".scene")[0];
      const els = q(".tpanel") as HTMLElement[];
      const caps = [q(".cap-1")[0], q(".cap-2")[0], q(".cap-3")[0], q(".cap-4")[0]];
      const s = Math.min(1, window.innerWidth / 1440);

      els.forEach((el, i) => gsap.set(el, { xPercent: -50, yPercent: -50, x: panels[i].x * s, y: panels[i].y * s, z: panels[i].z, rotationY: panels[i].ry, scale: s }));

      const apply = (p: number) => {
        const z = p * ZMAX;
        gsap.set(scene, { z });
        els.forEach((el, i) => {
          const rel = panels[i].z + z; // negative = ahead of camera
          // the first two windows frame the headline; the rest only appear after it has faded
          const gate = i < 2 ? 1 : gsap.utils.clamp(0, 1, (p - 0.1) / 0.1);
          const o = gsap.utils.clamp(0, 1, Math.min((rel + 2300) / 800, (900 - rel) / 500)) * gate;
          gsap.set(el, { opacity: o });
        });
        // scroll-synced captions
        gsap.set(caps[0], { opacity: 1 - gsap.utils.clamp(0, 1, (p - 0.04) / 0.1), y: -p * 160 });
        gsap.set(caps[1], { opacity: env(p, 0.2, 0.3, 0.38, 0.5), y: (0.3 - p) * 120 });
        gsap.set(caps[2], { opacity: env(p, 0.5, 0.6, 0.68, 0.8), y: (0.6 - p) * 120 });
        gsap.set(caps[3], { opacity: gsap.utils.clamp(0, 1, (p - 0.82) / 0.1), y: (0.9 - p) * 80 });
        gsap.set(caps[3], { pointerEvents: p > 0.88 ? "auto" : "none" });
      };
      apply(0);

      const st = ScrollTrigger.create({ trigger: section.current, pin: true, start: "top top", end: "+=420%", scrub: 0.6, anticipatePin: 1, onUpdate: (self) => apply(self.progress) });

      // gentle mouse parallax on the whole scene
      const rx = gsap.quickTo(scene, "rotationX", { duration: 1, ease: "power3" });
      const ry = gsap.quickTo(scene, "rotationY", { duration: 1, ease: "power3" });
      const move = (e: MouseEvent) => { ry((e.clientX / window.innerWidth - 0.5) * 5); rx(-(e.clientY / window.innerHeight - 0.5) * 3); };
      window.addEventListener("mousemove", move);
      return () => { st.kill(); window.removeEventListener("mousemove", move); };
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
      {/* desktop: scroll-driven 3D tunnel */}
      <section ref={section} className="relative hidden h-screen overflow-hidden bg-deep md:block">
        <div className="stars absolute inset-0" />
        <div className="absolute left-1/2 top-[18%] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-blue/25 blur-[130px]" />
        <div className="absolute left-[8%] top-[48%] h-[420px] w-[420px] rounded-full bg-violet/25 blur-[120px]" />
        <div className="absolute right-[6%] top-[30%] h-[380px] w-[380px] rounded-full bg-cyan/15 blur-[120px]" />
        <div className="floor absolute inset-x-0 bottom-0 h-[55%]" />

        <div className="stage absolute inset-0">
          <div className="scene absolute inset-0">
            {panels.map((p) => (
              <div key={p.id} className="tpanel" style={{ width: p.w }}>
                <div style={{ animation: `float-${p.x < 0 ? "a" : "b"} ${6 + (p.w % 4)}s ease-in-out infinite` }}>{p.node}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_35%,rgba(2,4,15,.65)_100%)]" />

        {/* captions */}
        <div className="cap-1 pointer-events-none absolute inset-x-0 top-[24%] mx-auto max-w-3xl px-6 text-center">
          <p className="hero-fade glass mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-cyan [animation:pulse-dot_2s_ease-out_infinite]" /><span className="h-2 w-2 rounded-full bg-cyan" /></span>
            Welcome to CodingHub
          </p>
          <h1 className="hero-split t-hero">
            <Words text="Empowering businesses through" /> <Words text="innovative" className="acc" /> <Words text="technology solutions." />
          </h1>
          <p className="hero-fade mx-auto mt-6 max-w-lg text-base leading-relaxed text-mute">Cloud web apps, mobile apps, IoT, AI and automation, built to help your organization automate its processes and grow.</p>
          <div className="hero-fade pointer-events-auto mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" data-magnetic className="btn-primary rounded-full px-7 py-3.5 text-sm font-medium text-white">Start a project</Link>
            <Link href="/products" data-magnetic className="glass rounded-full px-7 py-3.5 text-sm font-medium transition hover:bg-white/10">Explore products</Link>
          </div>
          <p className="hero-fade t-eyebrow mt-12 flex items-center justify-center gap-3 text-mute">Scroll to fly through <span className="block h-7 w-px animate-pulse bg-white/40" /></p>
        </div>

        <div className="cap-2 [text-shadow:0_2px_40px_#02040f] pointer-events-none absolute inset-x-0 top-[38%] mx-auto max-w-3xl px-6 text-center opacity-0">
          <h2 className="t-h1"><span className="grad-text">Cloud. Mobile. IoT. AI.</span></h2>
          <p className="mx-auto mt-4 max-w-md text-mute">Every platform your business runs on, built by one team.</p>
        </div>
        <div className="cap-3 [text-shadow:0_2px_40px_#02040f] pointer-events-none absolute inset-x-0 top-[38%] mx-auto max-w-3xl px-6 text-center opacity-0">
          <h2 className="t-h1">Software for <span className="acc">every industry.</span></h2>
          <p className="mx-auto mt-4 max-w-md text-mute">Healthcare, retail, pharmacy, food, labs, education and more.</p>
        </div>
        <div className="cap-4 [text-shadow:0_2px_40px_#02040f] pointer-events-none absolute inset-x-0 top-[34%] mx-auto max-w-3xl px-6 text-center opacity-0">
          <h2 className="t-h1">Ready to automate <span className="acc">your business?</span></h2>
          <Link href="/contact" data-magnetic className="btn-primary mt-8 inline-block rounded-full px-8 py-4 text-sm font-medium text-white">Start a project</Link>
        </div>
      </section>

      {/* mobile: static hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 text-center md:hidden">
        <div className="stars absolute inset-0" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/30 blur-[100px]" />
        <div className="relative">
          <p className="hero-fade glass mx-auto mb-6 inline-flex rounded-full px-4 py-1.5 text-xs">Welcome to CodingHub</p>
          <h1 className="hero-split t-hero"><Words text="Empowering businesses through" /> <Words text="innovative" className="acc" /> <Words text="technology solutions." /></h1>
          <p className="hero-fade mt-5 text-sm leading-relaxed text-mute">Cloud web apps, mobile apps, IoT, AI and automation, built to help your organization automate its processes and grow.</p>
          <div className="hero-fade mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary rounded-full px-6 py-3 text-sm font-medium text-white">Start a project</Link>
            <Link href="/products" className="glass rounded-full px-6 py-3 text-sm font-medium">Explore products</Link>
          </div>
          <div className="mx-auto mt-10 max-w-sm">{panels[0].node}</div>
        </div>
      </section>
    </div>
  );
}
