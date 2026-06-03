import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DigitalMenu } from "@/components/DigitalMenu";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-menu flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <DigitalMenu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
