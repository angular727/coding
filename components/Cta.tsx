import Link from "next/link";
import { Words } from "@/components/Words";

export default function Cta() {
  return (
    <section className="px-4 py-6 md:px-8">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[36px] bg-navy px-6 py-24 text-white md:px-14 md:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img data-parallax src="/photos/city.jpg" alt="" className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-blue/40" />
        <div className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p data-reveal className="t-eyebrow mb-5 flex items-center gap-3 text-white/70"><span className="h-2 w-2 rounded-full bg-white" />Got a project in mind?</p>
            <h2 data-split className="t-h1" style={{ fontSize: "clamp(2.2rem, 4.8vw, 4.6rem)" }}><Words text="Let's build your" /> <Words text="next big thing." className="acc acc-light" /></h2>
            <p data-reveal className="mt-5 max-w-md text-white/70">Tell us about your business and we will show you how technology can automate it.</p>
          </div>
          <div data-reveal className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
            <Link href="/contact" data-magnetic className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy transition hover:scale-105">Start a project</Link>
            <a href="tel:+923054948160" className="rounded-full border border-white/30 px-8 py-4 text-sm font-medium transition hover:bg-white/10">+92 305 4948160</a>
          </div>
        </div>
      </div>
    </section>
  );
}
