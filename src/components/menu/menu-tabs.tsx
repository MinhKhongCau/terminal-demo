"use client";

import { useTranslation } from "@/components/providers/locale-provider";
import { MENU_CATEGORIES, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

export type TabValue = "all" | MenuCategory;

interface MenuTabsProps {
  value: TabValue;
  onChange: (value: TabValue) => void;
}

export function MenuTabs({ value, onChange }: MenuTabsProps) {
  const { t, messages } = useTranslation();
  const labels = messages.menu.categories as Record<string, string>;
  const tabs: TabValue[] = ["all", ...MENU_CATEGORIES];

  return (
    <div className="relative mx-auto mt-10 mb-14 max-w-6xl md:mt-12">
      <div
        role="tablist"
        aria-label={t("menu.categoryAria")}
        className="mx-auto flex flex-wrap gap-1 rounded-md p-1"
        style={{
          maxWidth: "720px",
          background: "linear-gradient(180deg, #2f2f2f, #252525)",
        }}
      >
        {tabs.map((tab) => {
          const active = value === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab)}
              className={cn(
                "menu-tab relative min-w-[100px] flex-1 overflow-hidden py-3 text-center transition-all duration-300",
                active
                  ? "font-semibold text-[#1f1308]"
                  : "text-muted-gold hover:text-primary",
              )}
            >
              {labels[tab] ?? tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
