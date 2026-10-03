import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Statement from "@/components/Statement";
import ServicesSpotlight from "@/components/ServicesSpotlight";
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
      <ServicesSpotlight />
      <ProductsHorizontal />
      <ProcessPinned />
      <Numbers />
      <Cta />
    </>
  );
}
