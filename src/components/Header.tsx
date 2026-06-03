"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { CartSheet } from "@/components/cart/CartSheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCartContext } from "@/contexts/cart-context";
import { useLanguage } from "@/contexts/language-context";
import { business } from "@/data/menu";

export function Header() {
  const pathname = usePathname();
  const { cartCount } = useCartContext();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/menu", label: t.nav.menu },
    { href: "/#contact", label: t.nav.contact },
  ];

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

  const isActive = (href: string) => {
    if (href === "/menu") return pathname === "/menu";
    if (href === "/") return pathname === "/";
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 md:gap-3">
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
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher compact />

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary"
              aria-label={t.nav.cart}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              href={`tel:${business.phoneLink}`}
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
            >
              {t.nav.reserve}
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-foreground transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 top-20 z-40 lg:hidden">
            <button
              type="button"
              aria-label={t.nav.closeMenu}
              className="absolute inset-0 bg-background/98 backdrop-blur-lg"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="relative flex flex-col items-center gap-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-menu text-2xl font-medium text-foreground transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setCartOpen(true);
                }}
                className="font-menu text-2xl font-medium text-foreground"
              >
                {t.nav.cart} ({cartCount})
              </button>
              <Link
                href={`tel:${business.phoneLink}`}
                className="mt-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground"
              >
                {t.nav.callNow}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
