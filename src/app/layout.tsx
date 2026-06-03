import type { Metadata } from "next";
import { Great_Vibes, Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { business } from "@/data/menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: `${business.name} – ${business.tagline} | Meldorf`,
  description: `Authentische italienische Küche im Herzen von Meldorf. Pizza, Pasta, Antipasti und mehr. ${business.address.full}`,
  keywords: [
    "Mama Leone",
    "Italienisches Restaurant",
    "Pizzeria",
    "Meldorf",
    "Pizza",
    "Pasta",
  ],
  openGraph: {
    title: `${business.name} – Ristorante Pizzeria`,
    description: "Authentische italienische Küche in Meldorf, Dithmarschen",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} ${oswald.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
