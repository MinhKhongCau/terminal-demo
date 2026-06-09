"use client";

import { useState } from "react";
import { useTranslation } from "@/components/providers/locale-provider";
import { NAV_LINKS } from "@/components/navigation/nav-links";
import { BrandDivider } from "@/components/decorative/decorative";

export function FooterSection() {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="brick-wall relative px-5 pb-8 pt-16 md:px-12">
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="leading-tight">
            <div className="text-grad-accent text-[13px] font-bold tracking-[.28em]">
              {t("brand.name")}
            </div>
            <div className="mt-0.5 text-[10px] tracking-[.32em] text-quartz/55">
              {t("brand.tagline")}
            </div>
          </div>
          <p className="mt-5 font-serif italic leading-relaxed text-quartz/65">
            {t("footer.blurb")}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[.28em] text-brass-light">
            {t("footer.connections")}
          </div>
          <BrandDivider className="mt-3" style={{ maxWidth: "200px" }} />
          <ul className="mt-5 space-y-3 text-quartz/80">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="hover:text-brass-light">
                  {t(`footer.links.${link.id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[.28em] text-brass-light">
            {t("footer.dispatchesTitle")}
          </div>
          <BrandDivider className="mt-3" style={{ maxWidth: "240px" }} />
          <form
            className="mt-5 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
              e.currentTarget.reset();
            }}
          >
            <div className="flex items-center gap-3 border-b border-brass/40 pb-2">
              <span className="shrink-0 text-[10px] font-medium uppercase tracking-[.3em] text-brass-light">
                {t("footer.wire")}
              </span>
              <input
                type="email"
                required
                placeholder={t("footer.wirePlaceholder")}
                className="flex-1 bg-transparent py-2 text-[14px] text-quartz outline-none placeholder:text-quartz/35"
              />
              <button
                type="submit"
                className="text-[12px] font-medium uppercase tracking-[.22em] text-brass-light hover:text-brass-pale"
              >
                {t("footer.send")}
              </button>
            </div>
            {subscribed && (
              <p
                className="text-[11px] font-medium uppercase tracking-[.22em] text-brass-light"
                role="status"
              >
                {t("footer.sent")}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-brass/30 pt-6 text-[11px] uppercase tracking-[.22em] text-quartz/55 md:flex-row md:items-center">
        <span>{t("footer.copyright")}</span>
        <span className="text-brass-light/70">{t("footer.builtWith")}</span>
      </div>
    </footer>
  );
}
