import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import EcosystemFlow from "@/components/EcosystemFlow";
import FeaturedWork from "@/components/FeaturedWork";
import OpenSourceTeaser from "@/components/OpenSourceTeaser";
import LaunchCountdown from "@/components/LaunchCountdown";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-[65px]">
        <Hero />
        <WhatWeDo />
        <EcosystemFlow />
        <FeaturedWork />
        <OpenSourceTeaser />
        <LaunchCountdown />
      </main>
    </SmoothScroll>
  );
}
