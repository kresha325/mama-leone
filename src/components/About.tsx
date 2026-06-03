import Image from "next/image";
import { business } from "@/data/menu";
import { MENU_BURGUNDY } from "@/lib/menu-theme";

export function About() {
  return (
    <section id="about" className="bg-background py-14 md:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-menu text-4xl font-bold text-foreground md:text-5xl">
              La Dolce Vita in Meldorf
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Im Herzen von Meldorf, am malerischen Südermarkt, empfängt Sie
                das Ristorante Mama Leone mit authentischer italienischer Küche
                in gemütlichem Ambiente. Unser Team verbindet traditionelle
                Rezepte mit frischen, sorgfältig ausgewählten Zutaten.
              </p>
              <p>
                Ob entspanntes Mittagessen, romantisches Abendessen oder ein
                geselliger Abend mit Freunden — bei uns erleben Sie Italien
                mitten in Dithmarschen.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-menu text-4xl font-bold tabular-nums text-primary">
                  30+
                </span>
                <span className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Jahre Tradition
                </span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-menu text-4xl font-bold tabular-nums text-primary">
                  60+
                </span>
                <span className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Gerichte
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
                src="/images/restaurant.jpg"
                alt="Mama Leone Restaurant Meldorf"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-3 z-10 max-w-[min(280px,calc(100%-1.5rem))] translate-y-12 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur-sm sm:left-4 md:-bottom-8 md:-left-8 md:max-w-[240px] md:translate-y-0">
              <p className="font-menu text-base font-medium leading-snug sm:text-lg">
                &ldquo;Italienische Gastfreundschaft im historischen Fachwerkhaus
                am Südermarkt.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {business.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
