// Miniature product screens used inside the 3D hero tunnel (built in code, no images).
import type { ReactNode } from "react";

const Dots = () => (
  <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
  </div>
);
const Shell = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`glass overflow-hidden rounded-[22px] ${className}`}>{children}</div>
);

function Dashboard() {
  return (
    <Shell>
      <Dots />
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between"><p className="text-sm font-semibold">Overview</p><span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-mute">Live</span></div>
        <div className="grid grid-cols-3 gap-3">
          {[["Revenue", "48.2k", "+12.4%"], ["Orders", "1,284", "+8.1%"], ["Uptime", "99.9%", "stable"]].map(([l, v, d]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[.04] p-3">
              <p className="text-[10px] text-mute">{l}</p><p className="font-display text-lg font-semibold tracking-[-0.04em]">{v}</p><p className="text-[10px] text-emerald-400">{d}</p>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 400 120" className="mt-4 h-28 w-full">
          <defs><linearGradient id="dg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5b83ff" stopOpacity=".45" /><stop offset="1" stopColor="#5b83ff" stopOpacity="0" /></linearGradient></defs>
          <path d="M0 95 C40 88 60 66 100 70 S170 38 210 46 S290 20 330 28 S380 8 400 6 V120 H0Z" fill="url(#dg)" />
          <path d="M0 95 C40 88 60 66 100 70 S170 38 210 46 S290 20 330 28 S380 8 400 6" fill="none" stroke="#8fb0ff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </Shell>
  );
}

function Phone() {
  return (
    <div className="rounded-[34px] border-[7px] border-[#1a2150] bg-[#080d28] p-3 shadow-2xl shadow-blue/30">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded bg-white/20" />
      <p className="text-[10px] text-mute">Today</p>
      <p className="font-display text-3xl font-semibold tracking-[-0.05em]">$2,480</p>
      <div className="mt-2 flex h-16 items-end gap-1.5">
        {[40, 62, 48, 80, 58, 92, 70].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue/30 to-blue" style={{ height: `${h}%` }} />)}
      </div>
      <div className="mt-3 space-y-2">
        {[["Order #1042", "Paid"], ["Order #1041", "Packing"], ["Order #1040", "Paid"]].map(([o, s]) => (
          <div key={o} className="flex items-center justify-between rounded-xl bg-white/[.06] px-3 py-2 text-[10px]"><span>{o}</span><span className={s === "Paid" ? "text-emerald-400" : "text-amber-300"}>{s}</span></div>
        ))}
      </div>
    </div>
  );
}

function Code() {
  const lines: [string, string][] = [
    ["text-violet", "const"], ["text-blue", "app.post"], ["text-cyan", "'/orders'"], ["text-mute", "// create order"],
  ];
  void lines;
  return (
    <Shell>
      <Dots />
      <div className="flex gap-4 border-b border-white/10 px-4 text-[11px] text-mute"><span className="border-b-2 border-blue py-2 text-white">orders.ts</span><span className="py-2">stock.ts</span></div>
      <pre className="overflow-hidden p-5 font-mono text-[12px] leading-6 text-white/80">
{`  `}<span className="text-violet">export async function</span> <span className="text-blue">createOrder</span>(data) {"{"}{"\n"}
{`    `}<span className="text-violet">const</span> order = <span className="text-violet">await</span> db.orders.<span className="text-blue">insert</span>(data);{"\n"}
{`    `}<span className="text-violet">await</span> stock.<span className="text-blue">reserve</span>(order.items);{"\n"}
{`    `}<span className="text-violet">await</span> invoice.<span className="text-blue">send</span>(order.id);{"\n"}
{`    `}<span className="text-violet">return</span> {"{"} ok: <span className="text-cyan">true</span>, id: order.id {"}"};{"\n"}
{"  }"}<span className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 bg-cyan [animation:blink_1s_steps(2)_infinite]" />
      </pre>
    </Shell>
  );
}

function Iot() {
  const nodes: [number, number, string][] = [[60, 50, "Sensor"], [300, 40, "Gate"], [40, 170, "Meter"], [320, 180, "Camera"], [180, 20, "Hub A"]];
  return (
    <Shell>
      <div className="px-5 pb-1 pt-4"><p className="text-sm font-semibold">Connected devices</p><p className="text-[11px] text-mute">5 online · realtime</p></div>
      <svg viewBox="0 0 360 220" className="h-52 w-full">
        {nodes.map(([x, y], i) => <line key={i} x1="180" y1="115" x2={x} y2={y} stroke="#5b83ff" strokeOpacity=".7" strokeWidth="1.4" strokeDasharray="4 5" style={{ animation: "flow 1.2s linear infinite" }} />)}
        {nodes.map(([x, y, n], i) => (
          <g key={i}><circle cx={x} cy={y} r="9" fill="#0a1130" stroke="#8fb0ff" /><circle cx={x} cy={y} r="3.5" fill="#22d3ee" /><text x={x} y={y + 22} textAnchor="middle" fontSize="9" fill="#8b97b8">{n}</text></g>
        ))}
        <circle cx="180" cy="115" r="24" fill="#5b83ff" fillOpacity=".18" stroke="#8fb0ff" /><circle cx="180" cy="115" r="9" fill="#8fb0ff" />
      </svg>
    </Shell>
  );
}

function Chat() {
  return (
    <Shell>
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
        <span className="btn-primary grid h-8 w-8 place-items-center rounded-full text-xs text-white">✦</span>
        <div><p className="text-sm font-semibold">AI assistant</p><p className="text-[10px] text-emerald-400">● online</p></div>
      </div>
      <div className="space-y-3 p-5 text-[12px]">
        <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-blue/80 px-4 py-2.5">Which items run low this week?</p>
        <p className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 leading-relaxed">3 items need a reorder. I prepared a purchase order for your supplier.</p>
        <p className="w-fit rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-mute">typing<span className="[animation:blink_1s_infinite]">…</span></p>
      </div>
    </Shell>
  );
}

function Flow() {
  const steps = ["Order", "Payment", "Stock", "Invoice"];
  return (
    <Shell>
      <div className="px-5 pb-1 pt-4"><p className="text-sm font-semibold">Automation</p><p className="text-[11px] text-mute">Runs by itself, 24/7</p></div>
      <div className="flex items-center justify-between gap-1 p-5">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="grid flex-1 place-items-center rounded-xl border border-white/10 bg-white/[.06] py-3 text-[11px]"><span className="mb-1 text-cyan">✓</span>{s}</div>
            {i < steps.length - 1 && <svg width="22" height="10" viewBox="0 0 22 10"><path d="M0 5h18M14 1l4 4-4 4" stroke="#8fb0ff" fill="none" strokeDasharray="3 3" style={{ animation: "flow 1s linear infinite" }} /></svg>}
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Pos() {
  return (
    <Shell>
      <div className="px-5 pb-1 pt-4"><p className="text-sm font-semibold">Checkout</p></div>
      <div className="space-y-2.5 p-5 text-[12px]">
        {[["Item A × 2", "$24.00"], ["Item B × 1", "$9.50"], ["Item C × 3", "$18.00"]].map(([n, v]) => <div key={n} className="flex justify-between"><span className="text-mute">{n}</span><span>{v}</span></div>)}
        <div className="flex justify-between border-t border-white/10 pt-3 text-sm font-semibold"><span>Total</span><span className="grad-text">$51.50</span></div>
        <div className="btn-primary mt-2 rounded-xl py-2.5 text-center text-xs font-semibold text-white">Charge</div>
      </div>
    </Shell>
  );
}

function Analytics() {
  return (
    <Shell>
      <div className="px-5 pb-1 pt-4"><p className="text-sm font-semibold">Sales by category</p></div>
      <div className="flex items-center gap-5 p-5">
        <svg viewBox="0 0 42 42" className="h-28 w-28 -rotate-90">
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#ffffff14" strokeWidth="5" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#5b83ff" strokeWidth="5" strokeDasharray="46 100" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="28 100" strokeDashoffset="-46" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#22d3ee" strokeWidth="5" strokeDasharray="18 100" strokeDashoffset="-74" />
        </svg>
        <ul className="space-y-2 text-[11px]">
          {[["#5b83ff", "Retail", "46%"], ["#8b5cf6", "Online", "28%"], ["#22d3ee", "Wholesale", "18%"]].map(([c, n, v]) => <li key={n} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: c }} /><span className="text-mute">{n}</span><span className="ml-auto pl-4">{v}</span></li>)}
        </ul>
      </div>
    </Shell>
  );
}

// x, y, z in px inside the 3D scene (camera flies along +z); ry = tilt in degrees.
// The first two sit wide so the headline stays clear; the rest appear as you scroll (see Hero).
export const panels = [
  { id: "dash", w: 540, x: -884, y: -90, z: -420, ry: 17, node: <Dashboard /> },
  { id: "phone", w: 230, x: 1117, y: -30, z: -820, ry: -18, node: <Phone /> },
  { id: "code", w: 470, x: -480, y: 170, z: -1240, ry: 15, node: <Code /> },
  { id: "iot", w: 390, x: 500, y: 150, z: -1660, ry: -16, node: <Iot /> },
  { id: "chat", w: 380, x: -520, y: -150, z: -2080, ry: 16, node: <Chat /> },
  { id: "flow", w: 450, x: 540, y: -130, z: -2500, ry: -15, node: <Flow /> },
  { id: "pos", w: 340, x: -460, y: 150, z: -2920, ry: 14, node: <Pos /> },
  { id: "analytics", w: 420, x: 480, y: 140, z: -3340, ry: -14, node: <Analytics /> },
];
export const ZMAX = 3340 + 1000;
