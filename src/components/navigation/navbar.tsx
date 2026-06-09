"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "@/components/providers/locale-provider";
import { NAV_LINKS } from "./nav-links";
import { BrandWordmark } from "./brand-wordmark";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [sheetOpen, setSheetOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    let current = "home";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (el && el.getBoundingClientRect().top <= 120) current = link.id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "absolute inset-0 -z-10 transition-all duration-300",
            scrolled ? "bg-iron/95 shadow-lg backdrop-blur-md" : "bg-transparent",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-px transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{
            background: "linear-gradient(90deg, transparent, #CFA93F, transparent)",
          }}
        />

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-10",
            scrolled ? "h-[68px]" : "h-[88px]",
          )}
        >
          <BrandWordmark />

          <nav
            className="hidden items-center gap-9 text-[12px] lg:flex"
            aria-label={t("nav.menuAria")}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "nav-link font-medium uppercase tracking-[.22em] text-quartz transition-colors hover:text-brass-light",
                  active === link.id && "active",
                )}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleToggle />
            <ThemeToggle />
            <a href="#reserve" className="btn-brass px-5 py-2.5 text-[11px]">
              {t("nav.reserveTable")}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              aria-label={t("nav.openMenu")}
              aria-controls="overlay"
              aria-expanded={sheetOpen}
              className="p-2 text-brass-light"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <NavigationSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </>
  );
}
