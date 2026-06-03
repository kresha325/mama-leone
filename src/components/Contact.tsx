"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { business } from "@/data/menu";
import { getOpeningStatus } from "@/lib/opening-hours";
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

function ContactTile({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full flex-col items-center space-y-4 pt-8 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:pt-0"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-menu text-2xl font-bold transition group-hover:text-primary">
        {label}
      </h3>
    </button>
  );
}

function ModalShell({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl">
        <h3 className="font-menu text-xl font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [hoursOpen, setHoursOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [status, setStatus] = useState(() => getOpeningStatus());

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(getOpeningStatus()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hoursOpen) setStatus(getOpeningStatus());
  }, [hoursOpen]);

  const statusLabel = (() => {
    if (status.state === "open") {
      return {
        text: t.contact.openNow,
        detail: t.contact.openUntil.replace("{time}", status.until),
        tone: "text-green-700",
      };
    }
    if (status.state === "closed_today") {
      return {
        text: t.contact.closedNow,
        detail: t.businessHours.closed,
        tone: "text-primary",
      };
    }
    return {
      text: t.contact.closedNow,
      detail: t.contact.opensAt.replace("{time}", status.nextOpen),
      tone: "text-muted-foreground",
    };
  })();

  const openMaps = () => {
    window.open(business.social.googleMaps, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="contact" className="py-14 md:py-20">
        <div className="container-page">
          <div
            className="rounded-3xl border bg-card p-8 shadow-xl md:p-12"
            style={{ borderColor: MENU_BURGUNDY }}
          >
            <div className="grid grid-cols-1 gap-8 divide-y divide-border text-center md:grid-cols-3 md:gap-10 md:divide-x md:divide-y-0">
              <ContactTile
                icon={<MapPinIcon />}
                label={t.contact.location}
                onClick={openMaps}
              />
              <ContactTile
                icon={<ClockIcon />}
                label={t.contact.hours}
                onClick={() => setHoursOpen(true)}
              />
              <ContactTile
                icon={<PhoneIcon />}
                label={t.contact.reservation}
                onClick={() => setContactOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      <ModalShell open={hoursOpen} onClose={() => setHoursOpen(false)} title={t.contact.hours}>
        <div className="mt-4 space-y-4">
          <div className={`rounded-xl bg-muted/40 p-4 ${statusLabel.tone}`}>
            <p className="font-semibold">{statusLabel.text}</p>
            <p className="mt-1 text-sm">{statusLabel.detail}</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">{t.businessHours.weekdays}</span>
              <br />
              {t.businessHours.schedule}
            </p>
            <p className="font-medium text-primary">{t.businessHours.closed}</p>
          </div>
          <button
            type="button"
            onClick={() => setHoursOpen(false)}
            className="w-full rounded-full border border-border py-2.5 text-sm font-semibold"
          >
            {t.cart.cancel}
          </button>
        </div>
      </ModalShell>

      <ModalShell
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        title={t.contact.reservation}
      >
        <p className="mt-2 text-sm text-muted-foreground">{t.contact.contactVia}</p>
        <div className="mt-5 space-y-2">
          <a
            href={`tel:${business.phoneLink}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <PhoneIcon />
            {t.nav.callNow} · {business.phone}
          </a>
          <a
            href={business.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            {t.contact.whatsapp}
          </a>
          <button
            type="button"
            onClick={() => setContactOpen(false)}
            className="w-full rounded-full border border-border py-2.5 text-sm font-semibold"
          >
            {t.cart.cancel}
          </button>
        </div>
      </ModalShell>
    </>
  );
}
