"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { business } from "@/data/menu";

const navLinks = [
  { href: "#home", label: "Start" },
  { href: "#about", label: "Über uns" },
  { href: "#menu", label: "Speisekarte" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-page flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5 md:gap-3"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-border md:h-11 md:w-11">
            <Image
              src="/images/logo.png"
              alt={business.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <BrandLogo compact />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneLink}`}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Reservieren
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden">
          <button
            type="button"
            aria-label="Menü schließen"
            className="absolute inset-0 bg-background/98 backdrop-blur-lg"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-menu text-2xl font-medium text-foreground transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneLink}`}
              className="mt-4 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground"
            >
              Jetzt anrufen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
