import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Cta from "@/components/Cta";
import { getProduct, photo } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  { slug: "point-of-sale-system", i: "Retail & Distribution", d: "A multi-tenant POS with sales, purchases, suppliers and inventory management, running live in the cloud.", s: "Live demo", stack: ["Angular", "Node.js", "MongoDB"], href: "https://demo-pos-frountend.vercel.app" },
  { slug: "complaints-management-system", i: "Deployed with CCI Pakistan", d: "End-to-end complaint intake, assignment and resolution tracking for a real organization.", s: "Deployed", stack: [] },
  { slug: "patient-care-system", i: "Healthcare", d: "Patient records, appointments, prescriptions and billing for clinics and hospitals.", s: "Delivered", stack: [] },
  { slug: "restaurant-management", i: "Food & Hospitality", d: "Table orders, waiter workflow, kitchen display and billing in one connected system.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "medistore", i: "Pharmacy", d: "Medical store billing with batch and expiry tracking, purchases and profit reports.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "grocery-store-website", i: "E-Commerce", d: "A fast online catalogue and ordering storefront for a grocery retailer.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "university-access-attendance", i: "Education", d: "Access control and attendance management for an educational institution.", s: "Delivered", stack: [] },
  { slug: "lab-management-system", i: "Laboratories", d: "Sample tracking from collection to report, with test results and billing.", s: "Delivered", stack: [] },
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Real systems," accent="running for real businesses." text="A selection of the solutions we have built and deployed." />
      <section className="mx-auto max-w-[1400px] space-y-5 px-6 pb-24 pt-8 md:px-10">
        {projects.map((p, i) => {
          const prod = getProduct(p.slug)!;
          return (
            <article key={p.slug} data-reveal className="card group grid overflow-hidden rounded-[28px] md:grid-cols-12">
              <Link href={`/products/${p.slug}`} className="overflow-hidden md:col-span-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo(p.slug)} alt={prod.t} loading="lazy" className="h-full min-h-[220px] w-full object-cover transition duration-[1100ms] group-hover:scale-105" />
              </Link>
              <div className="relative flex flex-col justify-center p-7 md:col-span-5 md:p-9">
                <p className="t-eyebrow text-cyan">{String(i + 1).padStart(2, "0")} · {p.i}</p>
                <h2 className="t-h2 mt-2">{prod.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.d}</p>
                {p.stack.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-full border border-line bg-white/[.05] px-3 py-1 text-xs">{s}</span>)}</div>}
              </div>
              <div className="relative flex flex-wrap items-center gap-3 p-7 md:col-span-3 md:flex-col md:items-stretch md:justify-center md:border-l md:border-line">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-center text-xs font-semibold">{p.s}</span>
                {p.href && <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white">Open live demo ↗</a>}
                <Link href={`/products/${p.slug}`} className="glass rounded-full px-5 py-2.5 text-center text-sm font-medium transition hover:bg-white/10">View details</Link>
              </div>
            </article>
          );
        })}
      </section>
      <Cta />
    </>
  );
}
