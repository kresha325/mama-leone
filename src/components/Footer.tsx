import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { business } from "@/data/menu";
import { AMBIENT_YOUTUBE_WATCH_URL, YOUTUBE_AMBIENT_MOUNT_ID, YOUTUBE_AMBIENT_WRAP_CLASS } from "@/lib/youtube-ambient-config";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/#about", label: "Über uns" },
  { href: "/menu", label: "Speisekarte" },
  { href: "/#contact", label: "Kontakt" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-foreground text-background">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-sm leading-relaxed text-background/70">
              Authentische italienische Küche im Herzen von Meldorf —
              {` ${business.tagline}.`}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Entdecken</h4>
            <nav className="flex flex-col space-y-2 text-sm text-background/70">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Kontakt</h4>
            <div className="flex flex-col space-y-2 text-sm text-background/70">
              <p>{business.address.full}</p>
              <a href={`tel:${business.phoneLink}`} className="transition hover:text-primary">
                Tel. {business.phone}
              </a>
              <a
                href={`https://${business.website}`}
                className="transition hover:text-primary"
              >
                {business.website}
              </a>
              <p className="pt-2">
                {business.hours.weekdays}
                <br />
                {business.hours.lunch} · {business.hours.dinner}
                <br />
                <span className="text-primary">{business.hours.closed}</span>
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col space-y-2">
            <h4 className="font-display text-lg font-semibold">Atmosphäre</h4>
            <div
              className={`${YOUTUBE_AMBIENT_WRAP_CLASS} relative aspect-video w-full overflow-hidden rounded-md border border-background/20 bg-black shadow-inner`}
            >
              <div
                id={YOUTUBE_AMBIENT_MOUNT_ID}
                className="absolute inset-0 min-h-[1px] min-w-[1px]"
              />
            </div>
            <a
              href={AMBIENT_YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-background/50 underline-offset-2 transition hover:text-primary hover:underline"
            >
              Auf YouTube ansehen
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 text-center text-sm text-background/50 md:flex-row">
          <p>
            © {year} {business.name}. Alle Rechte vorbehalten.
          </p>
          <p className="font-display italic text-primary/80">
            Buon appetito · Meldorf
          </p>
        </div>
      </div>
    </footer>
  );
}
