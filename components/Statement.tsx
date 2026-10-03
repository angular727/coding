import Link from "next/link";
import { ScrubWords } from "@/components/Words";

export default function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <p data-reveal className="t-eyebrow flex items-start gap-3 text-mute md:col-span-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue" />About CodingHub</p>
        <div className="md:col-span-9">
          <p data-words className="t-lead">
            <ScrubWords text="We are a software company building cloud applications, mobile apps, IoT and AI solutions that help businesses automate their processes and grow." />
          </p>
          <Link href="/about" data-magnetic className="group mt-10 inline-flex items-center gap-3 text-sm font-medium">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white transition group-hover:border-blue group-hover:bg-blue group-hover:text-white">↗</span>
            <span className="line-hover">More about us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
