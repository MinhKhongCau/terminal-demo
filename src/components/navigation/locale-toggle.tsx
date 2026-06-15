"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { LOCALE_LABELS, LOCALES } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t("controls.toggleLanguage")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-brass/40 p-0.5",
        className,
      )}
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.18em] transition-colors",
              active
                ? "bg-brass text-[#3b241b]"
                : "text-primary/70 hover:text-primary",
            )}
          >
            {LOCALE_LABELS[code].short}
          </button>
        );
      })}
    </div>
  );
}
