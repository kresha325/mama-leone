"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { useLanguage } from "@/contexts/language-context";
import { business } from "@/data/menu";
import {
  YOUTUBE_AMBIENT_MOUNT_ID,
  YOUTUBE_AMBIENT_WRAP_CLASS,
} from "@/lib/youtube-ambient-config";
import { AMBIENT_YOUTUBE_WATCH_URL } from "@/lib/youtube-ambient-config";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/menu", label: t.nav.menu },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t bg-foreground text-background">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-sm leading-relaxed text-background/70">{t.footer.aboutText}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">{t.footer.explore}</h4>
            <nav className="flex flex-col space-y-2 text-sm text-background/70">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">{t.footer.contactTitle}</h4>
            <div className="flex flex-col space-y-2 text-sm text-background/70">
              <p>{business.address.full}</p>
              <a href={`tel:${business.phoneLink}`} className="transition hover:text-primary">
                {t.footer.phoneLabel} {business.phone}
              </a>
              <a href={`https://${business.website}`} className="transition hover:text-primary">
                {business.website}
              </a>
              <p className="pt-2">
                {t.businessHours.weekdays}
                <br />
                {t.businessHours.schedule}
                <br />
                <span className="text-primary">{t.businessHours.closed}</span>
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col space-y-2">
            <h4 className="font-display text-lg font-semibold">{t.footer.atmosphere}</h4>
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
              {t.footer.watchYoutube}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 text-center text-sm text-background/50 md:flex-row">
          <p>
            © {year} {business.name}. {t.footer.rights}
          </p>
          <p className="font-display italic text-primary/80">{t.footer.motto}</p>
        </div>
      </div>
    </footer>
  );
}
