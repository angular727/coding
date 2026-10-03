"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";
import { products, photo } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHorizontal() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const t = track.current!;
      const dist = () => t.scrollWidth - window.innerWidth;
      gsap.to(t, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: section.current, pin: true, scrub: 1, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => { gsap.set(".prod-progress", { scaleX: self.progress }); } },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
      <section ref={section} className="relative overflow-hidden bg-gradient-to-b from-paper via-soft to-paper md:h-screen">
        <div className="flex h-full flex-col justify-center py-20 md:py-0">
          <div ref={track} className="no-scrollbar flex items-center gap-6 overflow-x-auto px-6 md:w-max md:gap-9 md:overflow-visible md:px-[6vw]">
            <div className="w-[82vw] shrink-0 md:w-[30vw]">
              <p className="t-eyebrow mb-5 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-blue" />Products</p>
              <h2 className="t-h1"><Words text="Our" /> <Words text="products" className="acc" /></h2>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-mute">Industry solutions built, deployed and trusted by real organizations. Scroll to explore.</p>
            </div>

            {products.map((p, i) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="prod-card group w-[72vw] shrink-0 md:w-[24vw]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[26px] bg-white shadow-soft transition duration-500 group-hover:shadow-lift">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo(p.slug)} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-[1100ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold text-blue">{p.tag}</span>
                  <span className="absolute bottom-4 left-5 font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-white">0{i + 1}</span>
                </div>
                <h3 className="t-h3 mt-5">{p.t}</h3>
                <p className="mt-1.5 line-clamp-2 max-w-sm text-sm text-mute">{p.d}</p>
              </Link>
            ))}

            <div className="grid w-[70vw] shrink-0 place-items-center md:w-[26vw]">
              <Link href="/products" data-magnetic className="grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-blue to-blue2 text-white shadow-lift transition duration-300 hover:scale-105 md:h-52 md:w-52">
                <span className="text-center text-lg font-semibold leading-tight">All<br />products<span className="mt-1 block text-3xl">↗</span></span>
              </Link>
            </div>
          </div>
          <div className="absolute inset-x-6 bottom-8 hidden h-1 rounded bg-blue/10 md:block md:inset-x-[6vw]"><div className="prod-progress h-full origin-left scale-x-0 rounded bg-gradient-to-r from-blue to-blue2" /></div>
        </div>
      </section>
    </div>
  );
}
