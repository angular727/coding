import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Cta from "@/components/Cta";
import { getProduct, photo, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p?.t ?? "Product", description: p?.d };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={p.t} title={p.t} text={p.d} crumbs={[["Products", "/products"]]} image={photo(p.slug)} />

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="t-eyebrow mb-3 text-blue">{p.tag}</p>
            <h2 data-reveal className="t-h1">Key <span className="acc">capabilities</span></h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {p.m.map((m, i) => (
                <div key={m.t} data-reveal data-delay={(i % 2) * 0.08} className="rounded-[24px] border border-line bg-white p-7 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky font-display text-sm font-semibold text-blue">{i + 1}</span>
                  <h3 className="t-h3 mt-5">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 overflow-hidden rounded-[28px] bg-gradient-to-br from-blue to-navy p-8 text-white shadow-lift">
              <h2 className="t-h2">Interested in {p.t}?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">Deployed on a secure cloud platform, with ongoing support and updates from the CodingHub team.</p>
              <Link href="/contact" data-magnetic className="mt-7 block rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-navy transition hover:scale-[1.02]">Request a demo</Link>
              <a href="tel:+923054948160" className="mt-3 block rounded-full border border-white/30 px-6 py-3.5 text-center text-sm font-medium transition hover:bg-white/10">+92 305 4948160</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-soft/70 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 data-reveal className="t-h1 mb-10">More <span className="acc">products</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} data-reveal className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-white shadow-soft transition duration-500 group-hover:shadow-lift">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo(o.slug)} alt={o.t} loading="lazy" className="h-full w-full object-cover transition duration-[1100ms] group-hover:scale-105" />
                </div>
                <p className="t-eyebrow mt-4 text-blue">{o.tag}</p>
                <h3 className="t-h3 mt-1">{o.t}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
