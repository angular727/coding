import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSpotlight from "@/components/ServicesSpotlight";
import ProcessPinned from "@/components/ProcessPinned";
import Cta from "@/components/Cta";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Technology that moves your" accent="business forward." text="Six integrated capabilities, delivered by one team." />
      <ServicesSpotlight heading={false} />
      <ProcessPinned />
      <Cta />
    </>
  );
}
