"use client";

import type { MenuCategory, MenuItem } from "@/data/menu";
import { useTranslation } from "@/components/providers/locale-provider";
import { DishCard } from "./dish-card";

interface MenuCategoryPanelProps {
  category: MenuCategory;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

/** A single category group: script title flanked by hairlines + dish grid. */
export function MenuCategoryPanel({
  category,
  items,
  onItemClick,
}: MenuCategoryPanelProps) {
  const { messages } = useTranslation();
  const headerText =
    (messages.menu.sectionHeaders as Record<string, string>)[category] ?? category;

  return (
    <div>
      <div className="mb-7 flex items-center gap-5">
        <span
          className="h-px flex-1"
          style={{ background: "linear-gradient(90deg, transparent, rgba(184,119,22,.55))" }}
          aria-hidden
        />
        <span
          className="font-script leading-none text-primary px-4"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            textShadow: "0 2px 0 rgba(0,0,0,.4), 0 0 24px rgba(255,225,153,.2)",
          }}
        >
          {headerText}
        </span>
        <span
          className="h-px flex-1"
          style={{ background: "linear-gradient(90deg, rgba(184,119,22,.55), transparent)" }}
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-5">
        {items.map((item) => (
          <DishCard key={item.id} item={item} onClick={() => onItemClick(item)} />
        ))}
      </div>
    </div>
  );
}
