import en from "../../locales/en.json";
import vi from "../../locales/vi.json";

export const LOCALES = ["en", "vi"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "terminal-locale";

/** en.json is the source of truth for the message shape. */
export type Messages = typeof en;

export const MESSAGES: Record<Locale, Messages> = {
  en,
  vi: vi as Messages,
};

export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  vi: { short: "VI", name: "Tiếng Việt" },
};
