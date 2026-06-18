import { business } from "@/data/menu";
import { SITE_URL, SITE_DOMAIN } from "@/lib/site-config";

/**
 * Legal / Impressum fields.
 * Replace bracketed placeholders with real business data.
 */
export const legal = {
  business,
  siteUrl: SITE_URL,
  siteDomain: SITE_DOMAIN,

  /** § 5 TMG — e.g. "Inhaber: Mario Rossi" or "GmbH" */
  legalForm: "[Rechtsform, z. B. Inhaber / Einzelunternehmen / GmbH]",

  /** § 55 Abs. 2 RStV — person responsible for content */
  responsiblePerson: "[Name des Inhabers / Geschäftsführers]",

  /** Optional — leave placeholder if not applicable */
  vatId: "[USt-IdNr., falls vorhanden — sonst entfernen]",

  /** Optional — for registered companies */
  registerInfo: "[Handelsregister / Registergericht, falls eingetragen — sonst entfernen]",
} as const;

export const legalAddressBlock = `${legal.business.address.street}, ${legal.business.address.zip} ${legal.business.address.city}, ${legal.business.address.country}`;

export const THIRD_PARTY = {
  googleFonts: {
    name: "Google Fonts (Google Ireland Limited)",
    privacyUrl: "https://policies.google.com/privacy",
  },
  youtube: {
    name: "YouTube (Google Ireland Limited)",
    privacyUrl: "https://policies.google.com/privacy",
  },
  googleMaps: {
    name: "Google Maps (Google Ireland Limited)",
    privacyUrl: "https://policies.google.com/privacy",
  },
  whatsapp: {
    name: "WhatsApp / Meta Platforms Ireland Limited",
    privacyUrl: "https://www.whatsapp.com/legal/privacy-policy-eea",
  },
  facebook: {
    name: "Meta Platforms Ireland Limited (Facebook)",
    privacyUrl: "https://www.facebook.com/privacy/policy",
  },
  instagram: {
    name: "Meta Platforms Ireland Limited (Instagram)",
    privacyUrl: "https://privacycenter.instagram.com/policy",
  },
} as const;

/** Supervisory authority for Meldorf, Schleswig-Holstein */
export const DPA_SH = {
  name: "Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)",
  url: "https://www.datenschutzzentrum.de/",
} as const;
