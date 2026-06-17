"use client";

import { testimonials, type TestimonialSource } from "@/data/testimonials";
import { business } from "@/data/menu";
import { useLanguage } from "@/contexts/language-context";
import { getTestimonialQuote } from "@/lib/i18n/testimonials-i18n";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-current" : "fill-none stroke-current opacity-30"}`}
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const sourceConfig: Record<
  TestimonialSource,
  {
    url: string;
    hoverBorder: string;
    badgeBg: string;
    badgeText: string;
    Icon: typeof FacebookIcon;
  }
> = {
  facebook: {
    url: business.social.facebook,
    hoverBorder: "hover:border-[#1877F2]/40",
    badgeBg: "bg-[#1877F2]/10",
    badgeText: "text-[#1877F2]",
    Icon: FacebookIcon,
  },
  instagram: {
    url: business.social.instagram,
    hoverBorder: "hover:border-[#E4405F]/40",
    badgeBg: "bg-[#E4405F]/10",
    badgeText: "text-[#E4405F]",
    Icon: InstagramIcon,
  },
};

export function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section id="reviews" className="bg-muted/30 py-14 md:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            <FacebookIcon className="h-4 w-4 text-[#1877F2]" />
            <InstagramIcon className="h-4 w-4 text-[#E4405F]" />
            {t.testimonials.badge}
          </span>
          <h2 className="mt-3 font-menu text-4xl font-bold text-foreground md:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative mt-10">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={t.testimonials.title}
          >
            {testimonials.map((item) => {
              const config = sourceConfig[item.source];
              const SourceIcon = config.Icon;
              const profileUrl = config.url;
              const sourceLabel =
                item.source === "facebook"
                  ? t.testimonials.sourceFacebook
                  : t.testimonials.sourceInstagram;

              return (
                <a
                  key={`${item.source}-${item.id}`}
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-[min(85vw,320px)] shrink-0 snap-center rounded-2xl border border-border bg-card p-6 shadow-md transition hover:shadow-lg md:w-[340px] ${config.hoverBorder}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <StarRating rating={item.rating} />
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${config.badgeBg} ${config.badgeText}`}
                    >
                      <SourceIcon className="h-3 w-3" />
                      {sourceLabel}
                    </span>
                  </div>

                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                    &ldquo;{getTestimonialQuote(lang, item.id)}&rdquo;
                  </blockquote>

                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {item.author}
                  </p>
                </a>
              );
            })}
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground md:text-sm">
            {t.testimonials.scrollHint}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#166fe5]"
          >
            <FacebookIcon className="h-5 w-5" />
            {t.testimonials.ctaFacebook}
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <InstagramIcon className="h-5 w-5" />
            {t.testimonials.ctaInstagram}
          </a>
        </div>
      </div>
    </section>
  );
}
