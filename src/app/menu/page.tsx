import { SiteShell } from "@/components/layout/SiteShell";
import { DigitalMenu } from "@/components/DigitalMenu";
import type { Metadata } from "next";
import { business } from "@/data/menu";

export const metadata: Metadata = {
  title: "Speisekarte",
  description: `Digitale Speisekarte von ${business.name} in Meldorf. Pizza, Pasta, Antipasti und mehr — online bestellen.`,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `Speisekarte | ${business.name}`,
    description: `Digitale Speisekarte von ${business.name} in Meldorf.`,
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <SiteShell>
      <DigitalMenu />
    </SiteShell>
  );
}
