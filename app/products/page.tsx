import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Cta from "@/components/Cta";
import { products, photo } from "@/lib/data";

export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Industry solutions," accent="ready to deploy." text="Software built, deployed and trusted by real organizations." />
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} data-reveal data-delay={(i % 3) * 0.08} className={`group block ${i % 3 === 1 ? "lg:mt-14" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-white shadow-soft transition duration-500 group-hover:shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo(p.slug)} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-[1100ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold text-blue">{p.tag}</span>
                <span className="absolute bottom-4 left-5 font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-white">0{i + 1}</span>
              </div>
              <h2 className="t-h3 mt-5 transition group-hover:text-blue">{p.t}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{p.d}</p>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
