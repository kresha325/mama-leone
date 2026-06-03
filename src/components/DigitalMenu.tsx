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

  const handleAdd = () => {
    addToCart(item, categoryId);
    onAdded(item.name);
  };

  return (
    <article className="w-full px-1 py-2 md:px-2 md:py-3">
      <button
        type="button"
        onClick={handleAdd}
        className="grid w-full grid-cols-[minmax(0,38%)_1fr_auto] items-start gap-x-2 text-left transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:flex md:flex-col md:items-center md:gap-0.5 md:text-center"
        aria-label={`${item.name} — ${t.menu.addToCart}`}
      >
        <h3
          className="text-[10px] font-bold uppercase leading-tight tracking-[0.03em] md:text-xs"
          style={{ color: MENU_FOOD.title }}
        >
          {item.name}
          {item.spicy && (
            <span className="ml-1 normal-case text-primary/80">· {t.menu.spicy}</span>
          )}
          {item.highlight && (
            <span className="ml-1 block text-[8px] normal-case tracking-normal text-gold md:inline">
              ★ {t.menu.specialty}
            </span>
          )}
        </h3>

        <p
          className="min-w-0 text-[8px] font-normal uppercase leading-snug tracking-[0.03em] md:max-w-[12rem] md:text-[10px]"
          style={{ color: MENU_FOOD.description }}
        >
          {description}
          {item.allergens?.length ? (
            <span className="ml-1 not-italic normal-case opacity-80">
              ({item.allergens.join(", ")})
            </span>
          ) : null}
        </p>

        <p
          className="shrink-0 text-[10px] font-bold tabular-nums md:mt-0.5 md:text-xs"
          style={{ color: MENU_FOOD.price }}
        >
          {formatPrice(item.price)}
        </p>
      </button>
    </article>
  );
}

export function DigitalMenu() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [hideAllergen, setHideAllergen] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const allergenCodes = Object.keys(t.allergens) as AllergenCode[];

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menuCategories
      .map((category) => {
        const title = getCategoryTitle(lang, category.id, category.title);
        let items = category.items;

        if (activeCategory !== "all" && category.id !== activeCategory) {
          items = [];
        }

        if (query) {
          items = items.filter((item) => {
            const description = getItemDescription(lang, item.id, item.description);
            return (
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              description.toLowerCase().includes(query)
            );
          });
        }

        if (hideAllergen) {
          items = items.filter(
            (item) => !item.allergens?.includes(hideAllergen)
          );
        }

        return {
          ...category,
          title,
          note: getCategoryNote(lang, category.id, category.note ?? ""),
          items,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [search, hideAllergen, activeCategory, lang]);

  const handleAdded = (name: string) => {
    setToast(`${name} — ${t.menu.added}`);
    window.setTimeout(() => setToast(null), 2200);
  };

  return (
    <>
      <section className="bg-background py-14 md:py-20">
        <div className="container-page max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              {t.menu.badge}
            </span>
            <h1 className="mt-3 font-menu text-4xl font-bold uppercase tracking-[0.08em] text-foreground md:text-5xl">
              {t.menu.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.menu.subtitle}
            </p>
          </div>

          <div className="sticky top-20 z-30 mt-8 space-y-4 rounded-2xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur-md">
            <input
              type="search"
              placeholder={t.menu.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.07em] transition ${
                  activeCategory === "all"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-primary/30"
                }`}
              >
                {t.menu.all}
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.07em] transition ${
                    activeCategory === cat.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/70 hover:border-primary/30"
                  }`}
                >
                  {getCategoryTitle(lang, cat.id, cat.title)}
                </button>
              ))}
            </div>

            <details className="text-sm text-muted-foreground">
              <summary className="cursor-pointer font-medium text-foreground/80">
                {t.menu.allergenFilter}
              </summary>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setHideAllergen(null)}
                  className={`rounded-full px-3 py-1 text-xs ${
                    !hideAllergen
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {t.menu.noFilter}
                </button>
                {allergenCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    title={t.allergens[code]}
                    onClick={() =>
                      setHideAllergen(hideAllergen === code ? null : code)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      hideAllergen === code
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </details>
          </div>

          <div className="mt-10 space-y-8">
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

          <details className="mt-10 rounded-2xl border border-border bg-card p-6">
            <summary className="cursor-pointer font-menu text-lg font-semibold text-foreground">
              {t.menu.legendTitle}
            </summary>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {allergenCodes.map((code) => (
                <p key={code} className="text-sm text-muted-foreground">
                  <span className="mr-2 font-semibold text-primary">{code}</span>
                  {t.allergens[code]}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-foreground px-5 py-3 text-sm text-background shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}
