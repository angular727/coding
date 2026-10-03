import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Statement from "@/components/Statement";
import ServicesBento from "@/components/ServicesBento";
import ProductsHorizontal from "@/components/ProductsHorizontal";
import ProcessPinned from "@/components/ProcessPinned";
import Numbers from "@/components/Numbers";
import Cta from "@/components/Cta";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <ServicesBento />
      <ProductsHorizontal />
      <ProcessPinned />
      <Numbers />
      <Cta />
    </>
  );
}
