import Link from "next/link";
import { Words } from "@/components/Words";

export default function PageHeader({ eyebrow, title, accent, text, crumbs, image }: {
  eyebrow: string; title: string; accent?: string; text?: string; crumbs?: [string, string][]; image?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-36 md:px-10 md:pt-44">
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(36,87,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(36,87,255,.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_90%_at_30%_0%,#000_20%,transparent_75%)]" />
      <div className="absolute -left-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-blue/15 blur-[110px]" />
      <div className="absolute right-0 top-10 -z-10 h-[360px] w-[360px] rounded-full bg-blue2/20 blur-[110px]" />
      <div className="mx-auto max-w-[1400px]">
        <p className="hero-fade t-eyebrow mb-7 flex items-center gap-3 text-mute">
          <span className="h-2 w-2 rounded-full bg-blue" />
          <Link href="/" className="line-hover transition hover:text-ink">Home</Link>
          {crumbs?.map(([l, h]) => (<span key={h} className="flex gap-3">/ <Link href={h} className="line-hover transition hover:text-ink">{l}</Link></span>))}
          <span>/</span><span className="text-ink">{eyebrow}</span>
        </p>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="hero-split t-h1 md:col-span-8">
            <Words text={title} />{accent && <> <Words text={accent} className="acc" /></>}
          </h1>
          {text && <p className="hero-fade text-[15px] leading-relaxed text-mute md:col-span-3 md:col-start-10">{text}</p>}
        </div>
        {image && (
          <div data-clip className="relative mt-12 h-[44vh] overflow-hidden rounded-[28px] shadow-lift md:h-[66vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-parallax src={image} alt="" className="absolute inset-x-0 -top-[9%] h-[118%] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
