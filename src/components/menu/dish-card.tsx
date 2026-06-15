"use client";

import type { MenuItem } from "@/data/menu";
import { useMenuContent } from "./use-menu-content";

interface DishCardProps {
  item: MenuItem;
  onClick: () => void;
}

export function DishCard({ item, onClick }: DishCardProps) {
  const { getContent } = useMenuContent();
  const { name, desc } = getContent(item);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex min-h-[90px] w-full items-stretch justify-between gap-2 overflow-hidden rounded-lg px-4 py-4 text-left transition-all duration-300 active:scale-[.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60 md:min-h-[105px] md:gap-5 md:px-6 md:py-5"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('${item.image}')`,
          filter: "brightness(0.8) contrast(1.05) saturate(0.9)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/40 via-black/55 to-black/65 transition-colors duration-300 group-hover:via-black/50" />

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center py-2.5">
        <h4
          className="text-primary box-shadow font-bold uppercase leading-tight tracking-[.05em]"
          style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)" }}
        >
          {name}
        </h4>
        <p
          className="mt-1 line-clamp-2 leading-snug text-copper/90 transition-colors duration-300 group-hover:text-quartz/90"
          style={{ fontSize: "clamp(10px, 1.8vw, 13px)", maxWidth: "42ch" }}
        >
          {desc}
        </p>
      </div>

      <div className="relative z-10 flex shrink-0 items-center gap-1.5 pt-0.5">
        <span
          className="text-primary box-shadow font-black leading-none tracking-wide tabular-nums"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
        >
          {item.price}
        </span>
      </div>
    </button>
  );
}
