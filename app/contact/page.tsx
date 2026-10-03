import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

const info = [
  ["Email us", "info@codinghub.com", "mailto:info@codinghub.com", "M3 6h18v12H3V6Zm0 1 9 6 9-6"],
  ["Call us", "+92 305 4948160", "tel:+923054948160", "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"],
  ["Visit us", "Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan", "#", "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"],
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build your" accent="next big thing." text="Tell us about your business and we will show you how technology can automate it." />
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7"><ContactForm /></div>
          <ul className="space-y-4 lg:col-span-5">
            {info.map(([l, v, h, d]) => (
              <li key={l} data-reveal>
                <a href={h} className="flex gap-5 rounded-[24px] border border-line bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky text-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                  </span>
                  <span>
                    <span className="t-eyebrow block text-blue">{l}</span>
                    <span className="mt-1 block text-lg font-semibold leading-snug tracking-[-0.02em]">{v}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
