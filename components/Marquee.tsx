const items = ["Healthcare", "Retail & Distribution", "Pharmacy", "Food & Hospitality", "Laboratories", "Public Service", "Education", "E-Commerce"];

export default function Marquee({ label = "Software for every kind of business" }: { label?: string }) {
  const row = [...items, ...items, ...items];
  return (
    <section className="py-14">
      <p className="t-eyebrow mb-7 text-center text-mute">{label}</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee">
          {row.map((t, i) => (
            <span key={i} className="mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-white px-6 py-3 text-sm font-medium shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue to-blue2" />{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
