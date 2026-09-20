import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Mission from "@/components/sections/Mission";
import Events from "@/components/sections/Events";
import CamertechConnect from "@/components/sections/CamertechConnect";
import Partners from "@/components/sections/Partners";
import Community from "@/components/sections/Community";
import Media from "@/components/sections/Media";
import JoinForm from "@/components/sections/JoinForm";
import CtaFinal from "@/components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Events />
      <CamertechConnect />
      <Partners />
      <Community />
      <Media />
      <JoinForm />
      <CtaFinal />
    </>
  );
}
