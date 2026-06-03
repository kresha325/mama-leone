"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { withBasePath } from "@/lib/base-path";
import { MENU_BURGUNDY } from "@/lib/menu-theme";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-14 md:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-menu text-4xl font-bold text-foreground md:text-5xl">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-menu text-4xl font-bold tabular-nums text-primary">30+</span>
                <span className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t.about.statYears}
                </span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-menu text-4xl font-bold tabular-nums text-primary">60+</span>
                <span className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t.about.statDishes}
                </span>
              </div>
            </div>
          </div>

          <div className="relative mb-16 md:mb-0">
            <div
              className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
              style={{ borderColor: MENU_BURGUNDY, borderWidth: 1 }}
            >
              <Image
                src={withBasePath("/images/restaurant.jpg")}
                alt={t.about.imageAlt}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-3 z-10 max-w-[min(280px,calc(100%-1.5rem))] translate-y-12 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur-sm sm:left-4 md:-bottom-8 md:-left-8 md:max-w-[240px] md:translate-y-0">
              <p className="font-menu text-base font-medium leading-snug sm:text-lg">
                &ldquo;{t.about.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{t.common.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
