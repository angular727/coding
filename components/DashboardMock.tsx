// Polished product UI, built in code, used as the hero visual.
const nav = ["Dashboard", "Sales", "Inventory", "Patients", "Reports", "Settings"];
const kpis = [
  { l: "Revenue", v: "48.2k", d: "+12.4%", p: "M0 22 L12 18 L24 20 L36 12 L48 14 L60 6 L72 8" },
  { l: "Orders", v: "1,284", d: "+8.1%", p: "M0 20 L12 22 L24 14 L36 16 L48 8 L60 12 L72 4" },
  { l: "Customers", v: "326", d: "+5.6%", p: "M0 16 L12 20 L24 12 L36 18 L48 10 L60 14 L72 6" },
  { l: "Uptime", v: "99.9%", d: "stable", p: "M0 12 L12 12 L24 11 L36 12 L48 11 L60 12 L72 11" },
];
const rows = [
  ["#1042", "Counter sale", "Paid", "bg-emerald-50 text-emerald-600"],
  ["#1041", "Online order", "Packing", "bg-amber-50 text-amber-600"],
  ["#1040", "Counter sale", "Paid", "bg-emerald-50 text-emerald-600"],
  ["#1039", "Delivery", "Shipped", "bg-sky-50 text-sky-600"],
];

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-line bg-soft/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded-md bg-white px-4 py-1 text-[11px] text-mute shadow-sm">app.codinghub.com / dashboard</span>
      </div>

      <div className="grid grid-cols-12">
        <aside className="col-span-3 hidden border-r border-line p-4 sm:block md:col-span-2">
          <div className="mb-5 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue to-blue2 text-white"><svg width="13" height="13" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 8 4 14l6 6M18 8l6 6-6 6" /></svg></span>
            <span className="text-xs font-semibold">CodingHub</span>
          </div>
          {nav.map((x, i) => (
            <div key={x} className={`mb-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] ${i === 0 ? "bg-sky font-medium text-blue" : "text-mute"}`}>
              <span className={`h-3 w-3 rounded ${i === 0 ? "bg-blue" : "bg-line"}`} />{x}
            </div>
          ))}
        </aside>

        <div className="col-span-12 p-4 sm:col-span-9 md:col-span-10 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div><p className="text-sm font-semibold">Good morning</p><p className="text-[11px] text-mute">Here is how your business is doing today</p></div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-line px-3 py-1.5 text-[11px] text-mute md:block">Search…</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-blue to-blue2 text-[10px] font-semibold text-white">CH</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.l} className="rounded-xl border border-line bg-white p-3.5">
                <p className="text-[11px] text-mute">{k.l}</p>
                <div className="mt-1 flex items-end justify-between">
                  <p className="font-display text-xl font-semibold tracking-[-0.04em]">{k.v}</p>
                  <svg viewBox="0 0 72 26" className="h-6 w-16"><path d={k.p} fill="none" stroke="#2457ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{ animation: "draw 1.8s .6s ease-out both" }} /></svg>
                </div>
                <p className="mt-0.5 text-[11px] font-medium text-emerald-600">{k.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-line p-4 md:col-span-2">
              <div className="mb-2 flex items-center justify-between"><p className="text-xs font-semibold">Weekly performance</p><span className="rounded-full bg-sky px-2.5 py-0.5 text-[10px] text-blue">This week</span></div>
              <svg viewBox="0 0 400 130" className="h-32 w-full">
                <defs><linearGradient id="ar" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2457ff" stopOpacity=".25" /><stop offset="1" stopColor="#2457ff" stopOpacity="0" /></linearGradient></defs>
                {[30, 60, 90].map((y) => <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#e1e8f6" strokeDasharray="3 4" />)}
                <path d="M0 100 C40 92 60 70 100 74 S170 40 210 50 S290 22 330 30 S380 10 400 8 V130 H0Z" fill="url(#ar)" />
                <path d="M0 100 C40 92 60 70 100 74 S170 40 210 50 S290 22 330 30 S380 10 400 8" fill="none" stroke="#2457ff" strokeWidth="2.6" strokeLinecap="round" pathLength="1" strokeDasharray="1" style={{ animation: "draw 2.2s .7s ease-out both" }} />
              </svg>
            </div>
            <div className="rounded-xl border border-line p-4">
              <p className="mb-3 text-xs font-semibold">Top products</p>
              {[["Item A", 86], ["Item B", 64], ["Item C", 48], ["Item D", 31]].map(([n, v]) => (
                <div key={n as string} className="mb-2.5">
                  <div className="mb-1 flex justify-between text-[10px] text-mute"><span>{n}</span><span>{v}%</span></div>
                  <div className="h-1.5 rounded bg-sky"><div className="h-full rounded bg-gradient-to-r from-blue to-blue2" style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-line">
            <div className="grid grid-cols-4 bg-soft/60 px-4 py-2 text-[10px] font-medium text-mute"><span>Order</span><span>Type</span><span>Status</span><span className="text-right">Time</span></div>
            {rows.map(([id, t, s, c], i) => (
              <div key={id} className="grid grid-cols-4 items-center border-t border-line px-4 py-2 text-[11px]">
                <span className="font-medium">{id}</span><span className="text-mute">{t}</span>
                <span><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${c}`}>{s}</span></span>
                <span className="text-right text-mute">{i + 1}m ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
