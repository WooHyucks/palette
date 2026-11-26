import type { ComponentType } from "react";
import { BoldSite } from "@/components/designs/BoldSite";
import { EditorialSite } from "@/components/designs/EditorialSite";
import { LifestyleSite } from "@/components/designs/LifestyleSite";
import { AuroSite } from "@/components/samples/AuroSite";
import { HausCoffeeSite } from "@/components/samples/HausCoffeeSite";
import { SoomSite } from "@/components/samples/SoomSite";
import type { DesignId } from "@/lib/designs/templates";

/** 기존 고퀄 시안(AURO/HAUS/SOOM)을 그대로 쓰고, 나머지 3개는 같은 완성도로 맞춤. */
export const DESIGN_SITES: Record<DesignId, ComponentType> = {
  minimal: AuroSite,
  heritage: HausCoffeeSite,
  editorial: EditorialSite,
  bold: BoldSite,
  lifestyle: LifestyleSite,
  natural: SoomSite,
};
