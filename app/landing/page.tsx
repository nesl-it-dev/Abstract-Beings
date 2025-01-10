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
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <VisionSection />
      <AbstractSection />
      <Mystical />
      <Purpose />
      <CallToMortals />
      <FutureAwaits />
      <Holders />
      <TeamSection />
      <FAQ />
      <AbstractCollective />
      <Footer />
    </>
  );
};

export default Page;
