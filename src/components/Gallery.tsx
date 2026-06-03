"use client";

import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { useLanguage } from "@/contexts/language-context";
import { MENU_BURGUNDY } from "@/lib/menu-theme";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-14 md:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            {t.gallery.badge}
          </span>
          <h2 className="mt-3 font-menu text-4xl font-bold text-foreground md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="relative mt-10">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={t.gallery.title}
          >
            {galleryItems.map((item, index) => (
              <article
                key={`${item.src}-${item.altKey}-${index}`}
                className="w-[min(78vw,280px)] shrink-0 snap-center md:w-[320px] lg:w-[360px]"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-border"
                  style={{ borderColor: MENU_BURGUNDY }}
                >
                  <Image
                    src={item.src}
                    alt={t.gallery.alts[item.altKey]}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 78vw, 360px"
                  />
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground md:text-sm">
            {t.gallery.scrollHint}
          </p>
        </div>
      </div>
    </section>
  );
}
