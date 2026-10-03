import Link from "next/link";
import { Words } from "@/components/Words";
import { services } from "@/lib/data";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];

export default function ServicesBento({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative bg-soft/70 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {heading && (
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p data-reveal className="t-eyebrow mb-4 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-blue" />Services</p>
              <h2 data-split className="t-h1"><Words text="Everything you need to" /> <Words text="digitize and grow." className="acc" /></h2>
            </div>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-mute">Six integrated capabilities, delivered by one team: from the first idea to a scalable solution.</p>
          </div>
        )}
        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((s, i) => (
            <Link key={s.t} href="/contact" data-reveal data-delay={(i % 2) * 0.08} className={`group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift ${spans[i]}`}>
              <div className="relative min-h-[240px] flex-1 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1100ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
                <span className="glass absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-blue">0{i + 1}</span>
              </div>
              <div className="flex shrink-0 items-end justify-between gap-6 p-7">
                <div>
                  <h3 className="t-h3">{s.t}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{s.d}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition duration-500 group-hover:rotate-45 group-hover:border-blue group-hover:bg-blue group-hover:text-white">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
