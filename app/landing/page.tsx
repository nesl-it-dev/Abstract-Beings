import AbstractCollective from "@/components/sections/abstract_collective";
import AbstractSection from "@/components/sections/abstract_section";
import FAQ from "@/components/sections/faqs";
import Footer from "@/components/sections/footer";
import FutureAwaits from "@/components/sections/future_awaits";
import Hero from "@/components/sections/hero_component";
import Holders from "@/components/sections/holders";
import CallToMortals from "@/components/sections/mortals";
import Mystical from "@/components/sections/mystical";
import Purpose from "@/components/sections/purpose";
import TeamSection from "@/components/sections/team_section";
import VisionSection from "@/components/sections/vision_sections";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <>
        <Image
          src="/hero_cracks.png"
          width={2000}
          height={40}
          alt=""
          className="mix-blend-overlay mt-[-1%]"
          loading="eager"
        />
      </>
      <VisionSection />
      <AbstractSection />
      <Mystical />
      <Purpose />
      <CallToMortals />
      <FutureAwaits />
      <Holders />
      <TeamSection />
      <FAQ />
      <>
        <Image
          src="/collective_crack_top_white.png"
          width={2000}
          height={40}
          alt=""
          className="mb-[-4%]"
          loading="eager"
        />
      </>
      <AbstractCollective />
      <Footer />
    </>
  );
};

export default Page;
