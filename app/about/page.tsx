import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Numbers from "@/components/Numbers";
import ProcessPinned from "@/components/ProcessPinned";
import Cta from "@/components/Cta";
import { ScrubWords } from "@/components/Words";

export const metadata: Metadata = { title: "About" };

const values = [
  { t: "Our mission", d: "Empowering businesses through innovative technology solutions, helping them automate their processes and grow." },
  { t: "Our focus", d: "Cloud-based web applications, cross-platform mobile apps, IoT, AI integration, websites and business automation." },
  { t: "Our promise", d: "Reliable software, clear communication and long-term support, so technology works for you." },
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="About" title="We build technology that" accent="helps businesses grow." text="A software company based in Rahim Yar Khan, Pakistan." image="/photos/team.jpg" />
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p data-words className="t-lead max-w-5xl">
          <ScrubWords text="CodingHub delivers industry solutions to organizations across healthcare, retail, food, education and more, from cloud web apps to AI, IoT and automation." />
        </p>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t} data-reveal data-delay={i * 0.08} className="rounded-[28px] border border-line bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue to-blue2 font-display font-semibold text-white">{i + 1}</span>
              <h2 className="t-h2 mt-6">{v.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Numbers />
      <ProcessPinned />
      <Cta />
    </>
  );
}
