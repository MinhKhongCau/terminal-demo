"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  MESSAGES,
  type Locale,
  type Messages,
} from "@/i18n/config";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Dot-path lookup that always returns a string (key echoed back if missing). */
  t: (path: string) => string;
  /** Full active message tree, for structured data (menu items, branches…). */
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function resolvePath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Hydrate from storage / browser language after mount (avoids SSR mismatch).
  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && stored in MESSAGES) {
      setLocaleState(stored);
    } else if (navigator.language.toLowerCase().startsWith("vi")) {
      setLocaleState("vi");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "vi" : "en");
  }, [locale, setLocale]);

  const messages = MESSAGES[locale];

  const t = useCallback(
    (path: string): string => {
      const value = resolvePath(messages, path);
      return typeof value === "string" ? value : path;
    },
    [messages],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t, messages }),
    [locale, setLocale, toggleLocale, t, messages],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}

/** Convenience hook mirroring the common useTranslation() shape. */
export function useTranslation() {
  const { t, messages, locale } = useLocale();
  return { t, messages, locale };
}
