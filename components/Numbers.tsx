const stats = [
  { n: 6, s: "", l: "Core service lines" },
  { n: 9, s: "", l: "Industry products" },
  { n: 3, s: "", l: "Platforms: web, mobile & IoT" },
  { n: 24, s: "/7", l: "Cloud-based availability" },
];

export default function Numbers() {
  return (
    <section className="px-4 py-6 md:px-8">
      <div className="card relative mx-auto max-w-[1500px] overflow-hidden rounded-[36px] px-6 py-20 md:px-14 md:py-28">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(160,180,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(160,180,255,.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_80%)]" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet/30 blur-[100px]" />
        <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-blue/25 blur-[100px]" />
        <div className="relative">
          <p data-reveal className="t-eyebrow mb-4 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-cyan" />CodingHub in numbers</p>
          <h2 data-reveal className="t-h1 max-w-2xl">Built to help businesses <span className="acc">automate and grow.</span></h2>
          <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l} data-reveal data-delay={i * 0.08} className={i ? "md:border-l md:border-white/10 md:pl-8" : ""}>
                <p className="t-num"><span className="grad-text" data-count={s.n}>0</span><span className="acc">{s.s}</span></p>
                <p className="mt-3 text-sm text-mute">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
