import Link from "next/link";
import { products, services } from "@/lib/data";

const menu = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];
const social = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

export default function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden border-t border-line bg-deep">
      <div className="grid grid-cols-2 lg:grid-cols-12">
        <div className="col-span-2 border-b border-line p-6 md:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
          <Link href="/" className="inline-flex items-center gap-2.5 font-display text-xl font-semibold tracking-[-0.04em]">
            <span className="btn-primary grid h-9 w-9 place-items-center rounded-xl text-white"><svg width="17" height="17" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 8 4 14l6 6M18 8l6 6-6 6" /></svg></span>
            CodingHub
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">Empowering businesses through innovative technology solutions. We help businesses automate their processes and grow.</p>
          <p className="t-eyebrow mt-8 text-ink/50">Studio</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/75">Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan, Pakistan</p>
          <a href="mailto:info@codinghub.com" className="line-hover grad-text mt-4 inline-block text-sm font-medium">info@codinghub.com</a>
          <p className="mt-1 text-sm text-ink/75">+92 305 4948160</p>
        </div>

        <div className="border-b border-line p-6 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-5 text-ink/50">Menu</p>
          <ul className="space-y-3 text-[15px]">{menu.map(([x, h]) => <li key={x}><Link href={h} className="line-hover transition hover:text-white">{x}</Link></li>)}</ul>
        </div>

        <div className="border-b border-line p-6 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-5 text-ink/50">Services</p>
          <ul className="space-y-3 text-[15px]">{services.map((s) => <li key={s.t}><Link href="/services" className="line-hover transition hover:text-white">{s.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 border-b border-line p-6 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-5 text-ink/50">Products</p>
          <ul className="space-y-3 text-[15px]">{products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="line-hover transition hover:text-white">{p.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 p-6 md:p-10 lg:col-span-2">
          <p className="t-eyebrow mb-5 text-ink/50">Connect</p>
          <ul className="space-y-3 text-[15px]">
            {social.map((s) => <li key={s}><a href="#" className="group inline-flex items-center gap-2 transition hover:text-white">{s}<span className="text-xs opacity-0 transition group-hover:opacity-100">↗</span></a></li>)}
          </ul>
        </div>
      </div>

      <div className="select-none overflow-hidden px-2">
        <p className="whitespace-nowrap bg-gradient-to-b from-blue/35 via-violet/12 to-transparent bg-clip-text text-center font-display font-semibold text-transparent" style={{ fontSize: "19.5vw", lineHeight: 0.82, letterSpacing: "-0.065em", paddingBottom: "1vw" }}>CodingHub</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-5 text-xs text-mute md:px-10">
        <p>© 2026 CodingHub. All rights reserved.</p>
        <p>Rahim Yar Khan · Pakistan</p>
        <p>Photography via Unsplash</p>
      </div>
    </footer>
  );
}
