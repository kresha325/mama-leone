import type { Metadata } from "next";
import { Great_Vibes, Inter, Oswald, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/Providers";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import "./globals.css";
import { business } from "@/data/menu";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

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

const defaultTitle = `${business.name} – ${business.tagline} | Meldorf`;
const defaultDescription = `Authentische italienische Küche im Herzen von Meldorf. Pizza, Pasta, Antipasti und mehr. ${business.address.full}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: [
    "Mama Leone",
    "Italienisches Restaurant",
    "Pizzeria",
    "Meldorf",
    "Dithmarschen",
    "Pizza",
    "Pasta",
    "Speisekarte",
  ],
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} – Ristorante Pizzeria`,
    description: "Authentische italienische Küche in Meldorf, Dithmarschen",
    images: [
      {
        url: "/images/restaurant.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} in Meldorf`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Ristorante Pizzeria`,
    description: defaultDescription,
    images: ["/images/restaurant.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {},
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
      <body className="font-sans antialiased">
        <RestaurantJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
