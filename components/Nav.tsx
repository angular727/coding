"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const links = [
  { l: "Home", h: "/" },
  { l: "Services", h: "/services" },
  { l: "Products", h: "/products" },
  { l: "Projects", h: "/projects" },
  { l: "About", h: "/about" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const on = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const ctx = gsap.context(() => {
      if (open) {
        gsap.set(panel.current, { display: "block" });
        gsap.fromTo(panel.current, { opacity: 0, y: -10, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" });
        gsap.fromTo(".m-item", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.1, ease: "power3.out" });
      } else {
        gsap.to(panel.current, { opacity: 0, y: -8, duration: 0.25, onComplete: () => { gsap.set(panel.current, { display: "none" }); } });
      }
    });
    return () => ctx.revert();
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[90] flex flex-col items-center px-4">
      <div className="glass pointer-events-auto flex w-full max-w-[44rem] items-center justify-between gap-1 rounded-full p-1.5 pl-4 md:w-auto md:max-w-none">
        <Link href="/" data-magnetic className="mr-3 flex items-center gap-2 font-display text-[16px] font-semibold tracking-[-0.04em]">
          <span className="btn-primary grid h-7 w-7 place-items-center rounded-lg text-white">
            <svg width="14" height="14" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 8 4 14l6 6M18 8l6 6-6 6" /></svg>
          </span>
          CodingHub
        </Link>

        <nav className="hidden items-center md:flex">
          {links.map(({ l, h }) => (
            <Link key={h} href={h} className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${on(h) ? "bg-white/10 text-white" : "text-ink/60 hover:text-white"}`}>{l}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/contact" data-magnetic className="btn-primary hidden rounded-full px-4 py-2 text-[13px] font-medium text-white transition sm:inline-block">Let&apos;s talk</Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white/5 md:hidden">
            <span className="relative block h-2 w-4">
              <span className={`absolute left-0 h-px w-4 bg-white transition-all duration-300 ${open ? "top-[3.5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-4 bg-white transition-all duration-300 ${open ? "top-[3.5px] -rotate-45" : "top-[7px]"}`} />
            </span>
          </button>
        </div>
      </div>

      <div ref={panel} className="glass pointer-events-auto mt-2 hidden w-full max-w-[44rem] rounded-3xl p-5 md:hidden">
        <ul>
          {[...links, { l: "Contact", h: "/contact" }].map(({ l, h }, i) => (
            <li key={h} className="m-item">
              <Link href={h} className={`flex items-baseline gap-4 border-b border-line py-3 text-xl font-semibold tracking-[-0.03em] ${on(h) ? "grad-text" : ""}`}>
                <span className="w-5 text-[11px] font-normal text-mute">0{i + 1}</span>{l}
              </Link>
            </li>
          ))}
        </ul>
        <div className="m-item mt-4 text-xs text-mute"><a href="mailto:info@codinghub.com">info@codinghub.com</a></div>
      </div>
    </header>
  );
}
