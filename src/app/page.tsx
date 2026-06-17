import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </SiteShell>
  );
}
