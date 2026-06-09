"use client";

import { ChevronDown, Ticket, UtensilsCrossed } from "lucide-react";
import { useTranslation } from "@/components/providers/locale-provider";
import { BrandLogo } from "@/components/navigation/brand-logo";
import {
  BrandDivider,
  CornerRivets,
  Reveal,
  SteamField,
} from "@/components/decorative/decorative";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="brick-wall relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-28"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,12,4,.78) 0%, rgba(15,10,4,.82) 60%, rgba(8,5,2,.92) 100%)",
        }}
        aria-hidden
      />

      <SteamField />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-10 md:px-10 md:py-16">
        <Reveal className="signboard sway relative w-full max-w-3xl px-6 py-8 md:px-12 md:py-12">
          <CornerRivets />
          <div className="signboard-inner text-center">
            <BrandLogo
              priority
              className="mx-auto mb-5 h-24 w-24 md:h-28 md:w-28"
            />
            <div className="mb-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-10 md:w-16"
                style={{ background: "linear-gradient(90deg, transparent, #c88d2b 70%, #ffe9a3)" }}
                aria-hidden
              />
              <span className="text-grad-accent text-[10px] font-medium tracking-[.4em] md:text-[11px]">
                {t("hero.est")}
              </span>
              <span
                className="h-px w-10 md:w-16"
                style={{ background: "linear-gradient(90deg, #ffe9a3, #c88d2b 30%, transparent)" }}
                aria-hidden
              />
            </div>

            <h1
              className="text-grad-primary font-black uppercase leading-[.9] tracking-[.04em]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              {t("brand.name")}
            </h1>

            <BrandDivider className="mx-auto mt-5" style={{ maxWidth: "320px" }} />

            <div
              className="text-grad-accent mt-5 font-medium uppercase tracking-[.32em]"
              style={{ fontSize: "clamp(.78rem, 1.2vw, 1rem)" }}
            >
              {t("hero.subtitle")}
            </div>
          </div>
        </Reveal>

        <Reveal
          as="p"
          className="mt-10 max-w-2xl text-center font-serif italic leading-relaxed text-quartz/80"
        >
          <span style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)" }}>{t("hero.tagline")}</span>
        </Reveal>

        <Reveal className="mt-9 flex flex-col gap-4 sm:flex-row md:mt-11">
          <a
            href="#menu"
            className="btn-brass-outline min-w-[220px] px-7 py-4 text-[11px] md:px-9 md:text-[12px]"
          >
            <UtensilsCrossed className="mr-3 h-4 w-4" />
            {t("hero.exploreMenu")}
          </a>
          <a
            href="#reserve"
            className="btn-brass min-w-[220px] px-7 py-4 text-[11px] md:px-9 md:text-[12px]"
          >
            <Ticket className="mr-3 h-4 w-4" />
            {t("hero.reserveTable")}
          </a>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-2 text-brass-light/85 md:mt-16">
          <span className="font-mono text-[10px] tracking-[.32em]">{t("hero.scroll")}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </Reveal>
      </div>
    </section>
  );
}
