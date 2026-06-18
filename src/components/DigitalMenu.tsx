"use client";

import { useMemo, useState } from "react";
import {
  formatPrice,
  menuCategories,
  type AllergenCode,
  type MenuItem,
} from "@/data/menu";
import { MenuSectionFrame } from "@/components/menu/MenuSectionFrame";
import { useCartContext } from "@/contexts/cart-context";
import { useLanguage } from "@/contexts/language-context";
import {
  getCategoryNote,
  getCategoryTitle,
  getItemDescription,
} from "@/lib/i18n/menu-i18n";
import type { Translations } from "@/lib/i18n/translations";
import type { Language } from "@/lib/i18n/languages";
import { MENU_FOOD } from "@/lib/menu-theme";

function MenuFoodItem({
  item,
  categoryId,
  lang,
  t,
  onAdded,
}: {
  item: MenuItem;
  categoryId: string;
  lang: Language;
  t: Translations;
  onAdded: (name: string) => void;
}) {
  const { addToCart } = useCartContext();
  const description = getItemDescription(lang, item.id, item.description);
  const priceText = item.priceLabel ?? formatPrice(item.price);
  const hasDetails = Boolean(description || item.allergens?.length);

  const handleAdd = () => {
    addToCart(item, categoryId);
    onAdded(item.name);
  };

  return (
    <article>
      <button
        type="button"
        onClick={handleAdd}
        className="group w-full rounded-xl px-3 py-3.5 text-left transition hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 md:px-4 md:py-4"
        aria-label={`${item.name} — ${t.menu.addToCart}`}
      >
        <div className="flex items-baseline gap-3">
          <h3 className="min-w-0 font-display text-[1.05rem] font-semibold leading-snug text-foreground group-hover:text-primary md:text-lg">
            {item.name}
            {item.spicy && (
              <span className="ml-1.5 text-sm font-normal text-primary/80">
                · {t.menu.spicy}
              </span>
            )}
            {item.highlight && (
              <span className="ml-1.5 text-xs font-medium text-gold">
                ★ {t.menu.specialty}
              </span>
            )}
          </h3>
          <span
            className="mb-1 min-w-[1.5rem] flex-1 border-b border-dotted border-primary/25"
            aria-hidden
          />
          <p
            className="shrink-0 text-right font-menu text-sm font-bold tabular-nums text-primary md:text-base"
          >
            {priceText}
          </p>
        </div>

        {hasDetails ? (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
            {item.allergens?.length ? (
              <span className="ml-1 text-xs text-primary/70">
                ({item.allergens.join(", ")})
              </span>
            ) : null}
          </p>
        ) : null}

        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-primary/0 transition group-hover:text-primary/70">
          <span>+</span>
          {t.menu.tapHint}
        </span>
      </button>
    </article>
  );
}

export function DigitalMenu() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [toast, setToast] = useState<string | null>(null);

  const allergenCodes = Object.keys(t.allergens) as AllergenCode[];

  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((category) => {
        const title = getCategoryTitle(lang, category.id, category.title);
        let items = category.items;

        if (activeCategory !== "all" && category.id !== activeCategory) {
          items = [];
        }

        return {
          ...category,
          title,
          note: getCategoryNote(lang, category.id, category.note ?? ""),
          items,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [activeCategory, lang]);

  const handleAdded = (name: string) => {
    setToast(`${name} — ${t.menu.added}`);
    window.setTimeout(() => setToast(null), 2200);
  };

  const filterButtonClass = (active: boolean) =>
    `shrink-0 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] transition md:text-[11px] ${
      active
        ? "bg-primary text-primary-foreground shadow-sm"
        : "bg-background text-foreground/75 ring-1 ring-border hover:bg-muted/60 hover:text-foreground"
    }`;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--muted)/0.35)_100%)] py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="container-page relative max-w-3xl">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {t.menu.badge}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold italic text-primary md:text-5xl">
              {t.menu.title}
            </h1>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary/25" aria-hidden />
              <span className="text-primary/40" aria-hidden>
                ✦
              </span>
              <span className="h-px w-10 bg-primary/25" aria-hidden />
            </div>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {t.menu.subtitle}
            </p>
          </div>

          <div className="sticky top-20 z-30 mt-10 border-y border-border/80 bg-background/90 py-3 backdrop-blur-md">
            <div
              className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={t.menu.all}
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={filterButtonClass(activeCategory === "all")}
              >
                {t.menu.all}
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={filterButtonClass(activeCategory === cat.id)}
                >
                  {getCategoryTitle(lang, cat.id, cat.title)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-7">
            {filteredCategories.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                {t.menu.noResults}
              </p>
            ) : (
              filteredCategories.map((category) => (
                <MenuSectionFrame
                  key={category.id}
                  title={category.title}
                  note={category.note}
                  borderColor={MENU_FOOD.border}
                  backgroundColor={MENU_FOOD.bg}
                  titleColor={MENU_FOOD.title}
                >
                  {category.items.map((item) => (
                    <MenuFoodItem
                      key={item.id}
                      item={item}
                      categoryId={category.id}
                      lang={lang}
                      t={t}
                      onAdded={handleAdded}
                    />
                  ))}
                </MenuSectionFrame>
              ))
            )}
          </div>

          <details className="mt-12 rounded-xl border border-primary/12 bg-card/80 p-5 shadow-sm open:shadow-md">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold text-primary [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {t.menu.legendTitle}
                <span className="text-sm text-muted-foreground">+</span>
              </span>
            </summary>
            <div className="mt-4 grid gap-2 border-t border-primary/10 pt-4 sm:grid-cols-2">
              {allergenCodes.map((code) => (
                <p key={code} className="text-sm leading-relaxed text-muted-foreground">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {code}
                  </span>
                  {t.allergens[code]}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-primary/20 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}
