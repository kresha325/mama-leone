import Image from "next/image";
import { business } from "@/data/menu";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden md:h-screen"
    >
      <div className="absolute inset-0 z-10 bg-black/50" />
      <Image
        src="/images/restaurant.jpg"
        alt="Ristorante Mama Leone in Meldorf"
        fill
        priority
        className="animate-ken-burns object-cover"
        sizes="100vw"
      />

      <div className="relative z-20 flex flex-col items-center px-4 text-center text-white">
        <div
          className="mb-6 inline-flex animate-slide-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider opacity-0 backdrop-blur-md [animation-fill-mode:forwards]"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Ristorante · Meldorf
        </div>

        <h1
          className="animate-slide-up font-menu text-5xl font-bold tracking-tight opacity-0 [animation-fill-mode:forwards] md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.35s" }}
        >
          {business.name}
        </h1>

        <p
          className="mt-6 max-w-2xl animate-slide-up text-lg font-light text-white/80 opacity-0 [animation-fill-mode:forwards] md:text-xl"
          style={{ animationDelay: "0.5s" }}
        >
          Authentische italienische Küche am Südermarkt — Pizza aus dem Ofen,
          hausgemachte Pasta und feine Antipasti in gemütlichem Ambiente.
        </p>

        <div
          className="mt-10 animate-slide-up opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#menu"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Speisekarte entdecken
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
