"use client";

import { useTranslations } from "next-intl";
import { CategoryProductStrip } from "@/features/home/components/CategoryProductStrip";

const CATEGORY_MATCHERS = [
  "machines-grinders",
  "machines-and-grinders",
  "machines and grinders",
  "الأجهزة والمطاحن",
] as const;

export function MachinesGrinders() {
  const t = useTranslations("home.machinesGrinders");

  return (
    <CategoryProductStrip
      matchers={CATEGORY_MATCHERS}
      fallbackTitle={t("title")}
      viewAllLabel={t("viewAll")}
      prevLabel={t("prev")}
      nextLabel={t("next")}
    />
  );
}
