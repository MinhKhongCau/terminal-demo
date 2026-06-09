"use client";

import { useCallback, useMemo } from "react";
import { useTranslation } from "@/components/providers/locale-provider";
import type { AllergenKey, MenuItem } from "@/data/menu";

export interface DishContent {
  name: string;
  desc: string;
  notes: string;
  pairing: string;
}

/** Resolves translated dish copy + allergen labels from the active locale. */
export function useMenuContent() {
  const { messages } = useTranslation();

  const items = useMemo(
    () => (messages.menu.items ?? {}) as Record<string, DishContent>,
    [messages],
  );
  const allergenLabels = useMemo(
    () => (messages.menu.allergens ?? {}) as Record<AllergenKey, string>,
    [messages],
  );

  const getContent = useCallback(
    (item: MenuItem): DishContent =>
      items[item.id] ?? { name: item.id, desc: "", notes: "", pairing: "" },
    [items],
  );

  const getAllergens = useCallback(
    (item: MenuItem): string[] =>
      item.allergens.map((key) => allergenLabels[key] ?? key),
    [allergenLabels],
  );

  return { getContent, getAllergens };
}
