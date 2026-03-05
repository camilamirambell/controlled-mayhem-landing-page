import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import EcosystemFlow from "@/components/EcosystemFlow";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Stats />
        <Products />
        <EcosystemFlow />
      </main>
    </SmoothScroll>
  );
}
