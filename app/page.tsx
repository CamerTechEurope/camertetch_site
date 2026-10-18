import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import CamertechConnect from "@/components/sections/CamertechConnect";
import Events from "@/components/sections/Events";
import Partners from "@/components/sections/Partners";
import Community from "@/components/sections/Community";
import Media from "@/components/sections/Media";
import FAQ from "@/components/sections/FAQ";
import CtaFinal from "@/components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission isHomePreview />
      <CamertechConnect isHomePreview />
      <Events isHomePreview />
      <Partners isHomePreview />
      <Community isHomePreview />
      <Media isHomePreview />
      <FAQ />
      <CtaFinal />
    </>
  );
}
