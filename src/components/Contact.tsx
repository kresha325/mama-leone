"use client";

import { useLanguage } from "@/contexts/language-context";
import { business } from "@/data/menu";
import { MENU_BURGUNDY } from "@/lib/menu-theme";

function MapPinIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="container-page">
        <div
          className="rounded-3xl border bg-card p-8 shadow-xl md:p-12"
          style={{ borderColor: MENU_BURGUNDY }}
        >
          <div className="grid grid-cols-1 gap-8 divide-y divide-border text-center md:grid-cols-3 md:gap-10 md:divide-x md:divide-y-0">
            <a
              href={business.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 pt-8 md:pt-0"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <MapPinIcon />
              </div>
              <h3 className="font-menu text-2xl font-bold transition group-hover:text-primary">
                {t.contact.location}
              </h3>
              <p className="text-muted-foreground">
                {business.address.street}
                <br />
                {business.address.zip} {business.address.city}
              </p>
            </a>

            <div className="flex flex-col items-center space-y-4 pt-8 md:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ClockIcon />
              </div>
              <h3 className="font-menu text-2xl font-bold">{t.contact.hours}</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>{t.businessHours.weekdays}</p>
                <p>{t.businessHours.lunch}</p>
                <p>{t.businessHours.dinner}</p>
                <p className="font-medium text-primary">{t.businessHours.closed}</p>
              </div>
            </div>

            <div className="group flex flex-col items-center space-y-4 pt-8 md:pt-0">
              <a
                href={`tel:${business.phoneLink}`}
                className="flex flex-col items-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <PhoneIcon />
                </div>
                <h3 className="font-menu text-2xl font-bold transition group-hover:text-primary">
                  {t.contact.reservation}
                </h3>
                <p className="text-muted-foreground">{business.phone}</p>
              </a>
              <a
                href={`https://${business.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary transition hover:underline"
              >
                {business.website}
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-2xl border shadow-lg"
          style={{ borderColor: MENU_BURGUNDY }}
        >
          <iframe
            title={t.contact.mapTitle}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address.full)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            className="h-[360px] w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
