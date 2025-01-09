"use client";

import VisionSection from "@/components/sections/vision_sections";
import AbstractSection from "@/components/sections/abstract_section";
import Mystical from "@/components/sections/mystical";
import Purpose from "@/components/sections/purpose";
import CallToMortals from "@/components/sections/mortals";
import FutureAwaits from "@/components/sections/future_awaits";
import Holders from "@/components/sections/holders";
import FAQ from "@/components/sections/faqs";
import AbstractCollective from "@/components/sections/abstract_collective";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero_component";
import TeamSection from "@/components/sections/team_section";

export default function Home() {
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
}
