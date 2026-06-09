"use client";

import Image from "next/image";
import { useTranslation } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

/** The Terminal circular train emblem. The source badge is centered, so an
 *  object-cover square crop renders it as a clean round logo. */
export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Image
      src="/images/logo-the-terminal.avif"
      alt={t("brand.name")}
      width={896}
      height={896}
      priority={priority}
      className={cn(
        "aspect-square shrink-0 rounded-full object-cover ring-1 ring-brass/30",
        className,
      )}
    />
  );
}
