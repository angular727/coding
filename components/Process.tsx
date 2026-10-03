import { Words } from "@/components/Words";

const steps = [
  { t: "Discover", d: "We study your operations, goals and bottlenecks to define what really needs to be built." },
  { t: "Design", d: "Clear architecture and refined interfaces that your team and customers enjoy using." },
  { t: "Build", d: "Full-stack engineering on scalable cloud foundations: web, mobile, IoT and AI." },
  { t: "Automate & grow", d: "We deploy, support and keep improving, so your processes run themselves." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 data-split className="t-h1"><Words text="How we" /> <Words text="work" className="acc" /></h2>
        <p data-reveal className="max-w-xs text-sm text-mute">A proven path from idea to impact.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.t} data-reveal data-delay={i * 0.08} className="card rounded-[24px] p-7">
            <span className="btn-primary grid h-11 w-11 place-items-center rounded-2xl font-display text-lg font-semibold text-white">{i + 1}</span>
            <h3 className="t-h3 mt-6">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
