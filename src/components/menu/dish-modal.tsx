"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wine, X } from "lucide-react";
import type { MenuItem, MenuCategory } from "@/data/menu";
import { useTranslation } from "@/components/providers/locale-provider";
import { useMenuContent } from "./use-menu-content";
import { BrandDivider } from "@/components/decorative/decorative";

interface DishModalProps {
  item: MenuItem;
  category: MenuCategory;
  onClose: () => void;
}

export function DishModal({ item, category, onClose }: DishModalProps) {
  const { t, messages } = useTranslation();
  const { getContent, getAllergens } = useMenuContent();
  const { name, desc, notes, pairing } = getContent(item);
  const allergens = getAllergens(item);
  const catLabel =
    (messages.menu.sectionHeaders as Record<string, string>)[category] ?? category;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.45 }}
        role="dialog"
        aria-modal="true"
        aria-label={name}
        className="modal-frame relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-y-auto no-scrollbar md:grid-cols-[1.05fr_1fr]"
      >
        {/* LEFT — decorative image panel */}
        <div
          className="relative min-h-[240px] overflow-hidden rounded-l-md md:min-h-[460px]"
          style={{ background: "linear-gradient(135deg, #2a1d05, #1a0e07)" }}
        >
          <Image
            src={item.image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
            style={{ filter: "sepia(.18) saturate(.96) contrast(1.05)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-40">
            <div
              className="font-script text-brass-light"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                textShadow: "0 2px 0 rgba(0,0,0,.4), 0 0 24px rgba(255,225,153,.18)",
              }}
            >
              {t("brand.script")}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brass/30" />
          <div
            className="absolute left-4 top-4 grid h-16 w-16 -rotate-6 place-items-center rounded-full border-2 border-dashed border-brass/70"
            style={{ background: "rgba(0,0,0,.55)", backdropFilter: "blur(2px)" }}
          >
            <div className="text-center leading-tight">
              <div className="text-grad-accent text-[8px] font-bold tracking-[.2em]">
                {t("menu.chefsPickLine1")}
              </div>
              <div className="text-grad-accent text-[8px] font-bold tracking-[.2em]">
                {t("menu.chefsPickLine2")}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[.3em]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #b97716 0%, #f4c14f 20%, #fff1b3 50%, #f4c14f 80%, #b97716 100%)",
              color: "#1f1308",
            }}
          >
            {catLabel} · {name}
          </div>
        </div>

        {/* RIGHT — body */}
        <div className="relative bg-iron p-6 md:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label={t("menu.close")}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-quartz/80 transition-colors hover:bg-white/5 hover:text-brass-light"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-grad-accent text-[11px] font-semibold uppercase tracking-[.32em]">
            {catLabel}
          </div>
          <h3
            className="mt-2 font-bold uppercase leading-tight tracking-[.05em] text-quartz"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            {name}
          </h3>
          <p className="mt-3 text-[15px] italic leading-relaxed text-copper">{desc}</p>

          <BrandDivider className="my-5" />

          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[.3em] text-quartz/55">
                {t("menu.fare")}
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span
                  className="text-grad-primary font-black leading-none"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                >
                  {item.price}
                </span>
                <span className="text-grad-accent text-[12px] font-semibold tracking-[.22em]">
                  {t("menu.currency")}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-medium uppercase tracking-[.3em] text-quartz/55">
                {t("menu.serves")}
              </div>
              <div className="mt-1 text-xl font-semibold text-quartz">1 — 2</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[.3em] text-quartz/55">
              {t("menu.chefsNotes")}
            </div>
            <p className="text-[14px] leading-relaxed text-quartz/85">{notes}</p>
          </div>

          {allergens.length > 0 && (
            <div className="mb-5">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[.3em] text-quartz/55">
                {t("menu.allergensLabel")}
              </div>
              <div className="flex flex-wrap gap-2">
                {allergens.map((a) => (
                  <span
                    key={a}
                    className="text-grad-accent rounded-sm border border-brass/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.16em]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[.3em] text-quartz/55">
              {t("menu.pairing")}
            </div>
            <div
              className="flex items-start gap-3 rounded-sm border-l-2 p-3"
              style={{ background: "rgba(255, 233, 163, .06)", borderLeftColor: "#fcd16e" }}
            >
              <Wine className="mt-0.5 h-4 w-4 shrink-0 text-brass-light" />
              <p className="text-[13.5px] italic leading-snug text-quartz/85">{pairing}</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="btn-brass w-full px-5 py-3 text-[12px]">
            {t("menu.closeTicket")}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
