export type Language =
  | "de"
  | "en"
  | "it"
  | "fr"
  | "sq"
  | "sv"
  | "no"
  | "da"
  | "fi"
  | "is";

export const DEFAULT_LANGUAGE: Language = "de";
/** User-selected language; absent = site default (German). */
export const STORAGE_KEY = "ml_lang_choice";

export const LANGUAGES: {
  code: Language;
  label: string;
  short: string;
  nativeName: string;
}[] = [
  { code: "de", label: "Deutsch", short: "DE", nativeName: "Deutsch" },
  { code: "en", label: "English", short: "EN", nativeName: "English" },
  { code: "it", label: "Italiano", short: "IT", nativeName: "Italiano" },
  { code: "fr", label: "Français", short: "FR", nativeName: "Français" },
  { code: "sq", label: "Shqip", short: "SQ", nativeName: "Shqip" },
  { code: "sv", label: "Svenska", short: "SV", nativeName: "Svenska" },
  { code: "no", label: "Norsk", short: "NO", nativeName: "Norsk" },
  { code: "da", label: "Dansk", short: "DA", nativeName: "Dansk" },
  { code: "fi", label: "Suomi", short: "FI", nativeName: "Suomi" },
  { code: "is", label: "Íslenska", short: "IS", nativeName: "Íslenska" },
];

export const LANGUAGE_CODES = LANGUAGES.map((l) => l.code);
