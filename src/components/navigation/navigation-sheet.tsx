"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/components/providers/locale-provider";
import { NAV_LINKS } from "./nav-links";
import { BrandLogo } from "./brand-logo";
import { BrandDivider } from "@/components/decorative/decorative";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { cn } from "@/lib/utils";

interface NavigationSheetProps {
  open: boolean;
  onClose: () => void;
}

export function NavigationSheet({ open, onClose }: NavigationSheetProps) {
  const { t } = useTranslation();

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t("nav.menuAria")}
      aria-hidden={!open}
      className={cn(
        "brick-wall fixed inset-0 z-[60] transition-transform duration-500 ease-smooth lg:hidden",
        open ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,12,4,.9) 0%, rgba(15,10,4,.93) 60%, rgba(8,5,2,.98) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 leading-tight">
            <BrandLogo className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-grad-accent text-[13px] font-bold tracking-[.28em]">
                {t("brand.name")}
              </span>
              <span className="mt-0.5 text-[9px] tracking-[.32em] text-quartz/65">
                {t("brand.tagline")}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("nav.closeMenu")}
            className="rounded-full p-2 text-primary transition-colors hover:bg-white/5"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <BrandDivider className="my-6 opacity-30" />

        <nav className="mt-4 flex flex-col gap-6" aria-label={t("nav.menuAria")}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              onClick={onClose}
              className={cn(
                "font-display text-quartz uppercase tracking-[.22em] transition-colors duration-300 hover:text-primary",
                i < NAV_LINKS.length - 1 && "border-b border-brass/10 pb-2",
              )}
              style={{ fontSize: "1.35rem" }}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex items-center gap-3">
          <ThemeToggle />
          <LocaleToggle />
        </div>

        <a
          href="#reserve"
          onClick={onClose}
          className="btn-brass mt-auto py-4 text-[12px]"
        >
          {t("nav.reserveTable")}
        </a>
      </div>
    </div>
  );
}
