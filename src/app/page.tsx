import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import FeaturedWork from "@/components/FeaturedWork";
import OpenSourceTeaser from "@/components/OpenSourceTeaser";
import EcosystemFlow from "@/components/EcosystemFlow";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedWork />
        <OpenSourceTeaser />
        <EcosystemFlow />
      </main>
    </SmoothScroll>
  );
}
