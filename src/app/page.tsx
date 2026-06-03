import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </SiteShell>
  );
}
