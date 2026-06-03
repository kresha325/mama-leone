"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { LANGUAGES } from "@/lib/i18n/languages";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`notranslate flex items-center gap-1.5 rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary ${
          compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
        }`}
        aria-label={t.nav.language}
        aria-expanded={open}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
        </svg>
        <span className="font-semibold tracking-wide">{current?.short}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 max-h-72 w-44 overflow-y-auto rounded-xl border border-border bg-background py-1 shadow-xl">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition hover:bg-muted ${
                lang === l.code ? "font-semibold text-primary" : "text-foreground"
              }`}
            >
              <span>{l.nativeName}</span>
              <span className="text-xs text-muted-foreground">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
