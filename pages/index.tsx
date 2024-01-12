import CtaPart from "@/components/CTAPart";
import AboutPart from "@/components/Home/AboutPart";
import DestinationPart from "@/components/Home/DestinationPart";
import DiscountPart from "@/components/Home/DiscountPart";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Layout from "@/components/Home/Layout";
import PackagePart from "@/components/Home/PackagePart";
import PartnerPart from "@/components/Home/PartnerPart";
import YachtPart from "@/components/Home/YachtPart";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Hero2 />

      <PackagePart />
      <DestinationPart />

      <YachtPart />
      <AboutPart />
      <DiscountPart />
      <PartnerPart />
      <CtaPart />
    </Layout>
  );
};

export default index;
