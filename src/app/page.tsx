import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import FeaturedWork from "@/components/FeaturedWork";
import OpenSourceTeaser from "@/components/OpenSourceTeaser";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-[65px]">
        <Hero />
        <WhatWeDo />
        <FeaturedWork />
        <OpenSourceTeaser />
      </main>
    </SmoothScroll>
  );
}
