import Link from "next/link";
import { Words } from "@/components/Words";
import { services } from "@/lib/data";

const stroke = "rgba(160,180,255,.35)";

// Animated glowing illustration per service
function Art({ k }: { k: number }) {
  const c = { viewBox: "0 0 360 170", className: "h-full w-full", fill: "none" } as const;
  switch (k) {
    case 0:
      return (
        <svg {...c}>
          <rect x="50" y="20" width="260" height="130" rx="14" stroke={stroke} fill="rgba(91,131,255,.08)" />
          <path d="M50 46h260" stroke={stroke} />
          {[64, 76, 88].map((x) => <circle key={x} cx={x} cy="33" r="3" fill="rgba(255,255,255,.35)" />)}
          <rect x="68" y="64" width="90" height="70" rx="8" fill="rgba(91,131,255,.35)" />
          <rect x="172" y="64" width="120" height="14" rx="5" fill="rgba(255,255,255,.18)" />
          <rect x="172" y="88" width="90" height="9" rx="4" fill="rgba(255,255,255,.1)" />
          <rect x="172" y="108" width="100" height="26" rx="8" fill="#5b83ff" />
          <circle cx="318" cy="30" r="5" fill="#22d3ee"><animate attributeName="opacity" values="1;.2;1" dur="2.4s" repeatCount="indefinite" /></circle>
        </svg>
      );
    case 1:
      return (
        <svg {...c}>
          <rect x="130" y="8" width="100" height="168" rx="18" stroke="rgba(255,255,255,.35)" fill="rgba(34,211,238,.07)" />
          <rect x="144" y="28" width="72" height="34" rx="8" fill="rgba(34,211,238,.3)" />
          <rect x="144" y="72" width="72" height="9" rx="4" fill="rgba(255,255,255,.16)" />
          <rect x="144" y="88" width="50" height="9" rx="4" fill="rgba(255,255,255,.1)" />
          <rect x="144" y="108" width="72" height="22" rx="7" fill="#22d3ee" opacity=".9" />
        </svg>
      );
    case 2:
      return (
        <svg {...c}>
          {[[60, 36], [300, 40], [70, 130], [292, 128], [180, 18]].map(([x, y], i) => (
            <g key={i}>
              <line x1="180" y1="86" x2={x} y2={y} stroke="#8b5cf6" strokeOpacity=".8" strokeDasharray="4 5" style={{ animation: "flow 1.2s linear infinite" }} />
              <circle cx={x} cy={y} r="8" fill="#0a1130" stroke="#b79bff" />
            </g>
          ))}
          <circle cx="180" cy="86" r="22" fill="rgba(139,92,246,.25)" stroke="#b79bff" /><circle cx="180" cy="86" r="7" fill="#b79bff" />
        </svg>
      );
    case 3:
      return (
        <svg {...c}>
          <defs><radialGradient id="orbg"><stop offset="0" stopColor="#c4b5fd" /><stop offset=".5" stopColor="#8b5cf6" stopOpacity=".6" /><stop offset="1" stopColor="#5b83ff" stopOpacity="0" /></radialGradient></defs>
          <circle cx="180" cy="85" r="62" fill="url(#orbg)"><animate attributeName="r" values="56;66;56" dur="4s" repeatCount="indefinite" /></circle>
          {[[40, 30], [60, 130], [310, 28], [326, 124], [250, 150], [96, 14]].map(([x, y], i) => <g key={i}><line x1="180" y1="85" x2={x} y2={y} stroke="rgba(183,155,255,.4)" /><circle cx={x} cy={y} r="3.5" fill="#d8caff" /></g>)}
        </svg>
      );
    case 4:
      return (
        <svg {...c}>
          <rect x="30" y="16" width="300" height="138" rx="14" stroke={stroke} fill="rgba(91,131,255,.06)" />
          <path d="M30 40h300" stroke={stroke} />
          <rect x="48" y="58" width="120" height="16" rx="5" fill="rgba(255,255,255,.22)" />
          <rect x="48" y="82" width="86" height="9" rx="4" fill="rgba(255,255,255,.1)" />
          <rect x="48" y="108" width="56" height="20" rx="7" fill="#5b83ff" />
          <rect x="196" y="56" width="112" height="76" rx="10" fill="rgba(34,211,238,.25)" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          {[[34, "rgba(34,211,238,.3)"], [150, "rgba(91,131,255,.4)"], [266, "rgba(139,92,246,.35)"]].map(([x, f], i) => <rect key={i} x={x as number} y="62" width="60" height="46" rx="11" fill={f as string} stroke={stroke} />)}
          <path d="M96 85h52M212 85h52" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 5" style={{ animation: "flow 1s linear infinite" }} />
          <path d="M296 62V30H64v32" stroke={stroke} strokeDasharray="3 4" />
        </svg>
      );
  }
}

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];

export default function ServicesSpotlight({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative py-24 md:py-36">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue/10 blur-[130px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {heading && (
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p data-reveal className="t-eyebrow mb-4 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-cyan" />Services</p>
              <h2 data-split className="t-h1"><Words text="Everything you need to" /> <Words text="digitize and grow." className="acc" /></h2>
            </div>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-mute">Six integrated capabilities, delivered by one team: from the first idea to a scalable solution.</p>
          </div>
        )}
        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((s, i) => (
            <Link key={s.t} href="/contact" data-reveal data-delay={(i % 2) * 0.08} className={`card group flex min-h-[400px] flex-col overflow-hidden rounded-[28px] transition duration-500 hover:-translate-y-1.5 ${spans[i]}`}>
              <div className="relative flex-1 p-6">
                <span className="glass t-eyebrow absolute left-6 top-6 rounded-full px-3 py-1 text-[10px]">0{i + 1}</span>
                <div className="mx-auto h-full min-h-[180px] max-w-md transition duration-700 group-hover:scale-105"><Art k={i} /></div>
              </div>
              <div className="relative flex shrink-0 items-end justify-between gap-6 border-t border-white/10 p-7">
                <div>
                  <h3 className="t-h3">{s.t}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{s.d}</p>
                </div>
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-full transition duration-500 group-hover:rotate-45 group-hover:bg-white/15">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
