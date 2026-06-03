import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Contact />
    </SiteShell>
  );
}
