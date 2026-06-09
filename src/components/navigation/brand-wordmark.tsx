"use client";

import { useTranslation } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

export function BrandWordmark({
  className,
  showSubtitle = true,
}: {
  className?: string;
  showSubtitle?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <a href="#home" className={cn("flex flex-col leading-tight", className)}>
      <span className="text-grad-accent text-[13px] font-bold tracking-[.28em]">
        {t("brand.name")}
      </span>
      {showSubtitle && (
        <span className="hidden text-[10px] tracking-[.32em] text-quartz/65 md:block">
          {t("brand.tagline")}
        </span>
      )}
    </a>
  );
}
