import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import EcosystemHub from "@/components/sections/EcosystemHub";
import Partners from "@/components/sections/Partners";
import CtaFinal from "@/components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <EcosystemHub />
      <Partners isHomePreview />
      <CtaFinal />
    </>
  );
}
