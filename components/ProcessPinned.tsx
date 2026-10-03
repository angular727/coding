"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Process from "@/components/Process";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { t: "Discover", d: "We study your operations, goals and bottlenecks to define what really needs to be built.", img: "/photos/meeting.jpg", chip: "Understand the business" },
  { t: "Design", d: "Clear architecture and refined interfaces that your team and customers enjoy using.", img: "/photos/website.jpg", chip: "Shape the experience" },
  { t: "Build", d: "Full-stack engineering on scalable cloud foundations: web, mobile, IoT and AI.", img: "/photos/webapp.jpg", chip: "Engineer for scale" },
  { t: "Automate & grow", d: "We deploy, support and keep improving, so your processes run themselves.", img: "/photos/automation.jpg", chip: "Run on autopilot" },
];

// Pinned storytelling: the photo, copy and step rail change as you scroll
export default function ProcessPinned() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const q = gsap.utils.selector(section.current);
      const imgs = q(".pp-img"), titles = q(".pp-t"), descs = q(".pp-d"), chips = q(".pp-chip"), nums = q(".pp-n");
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: section.current, pin: true, scrub: 0.7, start: "top top", end: "+=300%", anticipatePin: 1 } });
      tl.to(q(".pp-bar"), { scaleY: 1, duration: 3 }, 0);
      steps.forEach((_, i) => {
        if (i === 0) return;
        const t = i;
        tl.to(imgs[i - 1], { opacity: 0, scale: 1.08, duration: 0.7 }, t - 0.4)
          .fromTo(imgs[i], { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 0.7 }, t - 0.4)
          .to(titles[i - 1], { yPercent: -60, opacity: 0, duration: 0.4 }, t - 0.4)
          .fromTo(titles[i], { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45 }, t - 0.1)
          .to(descs[i - 1], { opacity: 0, y: -16, duration: 0.3 }, t - 0.4)
          .fromTo(descs[i], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4 }, t - 0.05)
          .to(chips[i - 1], { opacity: 0, y: -10, duration: 0.3 }, t - 0.4)
          .fromTo(chips[i], { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, t - 0.05)
          .to(nums[i - 1], { opacity: 0.35, duration: 0.2 }, t - 0.2)
          .to(nums[i], { opacity: 1, duration: 0.2 }, t - 0.2);
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
      <div className="md:hidden"><Process /></div>
      <section ref={section} className="relative hidden h-screen overflow-hidden bg-paper md:block">
        <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-blue/10 blur-[120px]" />
        <div className="relative mx-auto grid h-full max-w-[1400px] grid-cols-12 items-center gap-10 px-10 pt-16">
          {/* copy + step rail */}
          <div className="col-span-5">
            <p className="t-eyebrow mb-8 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-blue" />How we work</p>
            <div className="flex gap-8">
              <div className="relative w-px shrink-0 bg-line">
                <div className="pp-bar absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-gradient-to-b from-blue to-blue2" />
              </div>
              <ul className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s.t} className="pp-n t-eyebrow" style={{ opacity: i === 0 ? 1 : 0.35 }}>0{i + 1} · {s.t}</li>
                ))}
              </ul>
            </div>
            <div className="relative mt-12 h-[200px]">
              {steps.map((s, i) => (
                <div key={s.t} className="absolute inset-x-0 top-0">
                  <h3 className="pp-t t-h1" style={{ opacity: i === 0 ? 1 : 0 }}>{s.t}</h3>
                  <p className="pp-d mt-5 max-w-sm text-[15px] leading-relaxed text-mute" style={{ opacity: i === 0 ? 1 : 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* image stage */}
          <div className="col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-line bg-soft shadow-lift">
              {steps.map((s, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.t} src={s.img} alt={s.t} loading="lazy" className="pp-img absolute inset-0 h-full w-full object-cover" style={{ opacity: i === 0 ? 1 : 0 }} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="relative h-11 w-64">
                  {steps.map((s, i) => (
                    <div key={s.t} className="pp-chip glass absolute left-0 top-0 inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs font-semibold" style={{ opacity: i === 0 ? 1 : 0 }}>
                      <span className="h-2 w-2 rounded-full bg-blue" />{s.chip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
