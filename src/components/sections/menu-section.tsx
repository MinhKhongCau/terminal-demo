"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "@/components/providers/locale-provider";
import { MENU_BY_CATEGORY, MENU_CATEGORIES, type MenuCategory, type MenuItem } from "@/data/menu";
import { BrandDivider, HairLine } from "@/components/decorative/decorative";
import { MenuTabs, type TabValue } from "@/components/menu/menu-tabs";
import { MenuCategoryPanel } from "@/components/menu/menu-category";
import { DishModal } from "@/components/menu/dish-modal";

interface SelectedDish {
  item: MenuItem;
  category: MenuCategory;
}

export function MenuSection() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabValue>("all");
  const [selected, setSelected] = useState<SelectedDish | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = selected ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [selected]);

  const open = (item: MenuItem, category: MenuCategory) =>
    setSelected({ item, category });

  const visibleCategories: MenuCategory[] =
    tab === "all" ? MENU_CATEGORIES : [tab];

  return (
    <section id="menu" className="relative bg-iron px-2 py-20 md:px-8 md:py-28">
      <header className="relative mx-auto mb-10 max-w-6xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <HairLine direction="left" />
          <span className="text-grad-accent text-[11px] font-medium uppercase tracking-[.4em]">
            {t("menu.eyebrow")}
          </span>
          <HairLine direction="right" />
        </div>

        <h2
          className="text-primary box-shadow font-display font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
        >
          {t("menu.title")}
        </h2>
        <BrandDivider className="mx-auto mt-5" style={{ maxWidth: "280px" }} />
        <p
          className="mx-auto mt-5 max-w-xl font-serif italic text-quartz/75"
          style={{ fontSize: "clamp(.95rem, 1.3vw, 1.1rem)" }}
        >
          {t("menu.subtitle")}
        </p>
      </header>

      <MenuTabs value={tab} onChange={setTab} />

      <div className="relative mx-auto mt-10 max-w-6xl space-y-16 md:mt-14">
        {visibleCategories.map((category) => (
          <MenuCategoryPanel
            key={category}
            category={category}
            items={MENU_BY_CATEGORY[category]}
            onItemClick={(item) => open(item, category)}
          />
        ))}
      </div>

      <div className="relative mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-brass/15 pt-6 text-[12px] uppercase tracking-[.22em] text-quartz/55 md:mt-16 md:flex-row md:items-center">
        <span>{t("menu.finePrice")}</span>
        <span className="text-primary/80">{t("menu.fineService")}</span>
        <span>{t("menu.fineAllergens")}</span>
      </div>

      <AnimatePresence>
        {selected && (
          <DishModal
            item={selected.item}
            category={selected.category}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
