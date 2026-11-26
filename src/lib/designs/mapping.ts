import type { FunnelCategoryId } from "@/lib/designs/categories";
import type { DesignId } from "@/lib/designs/templates";

/** 업종별로 성격이 다른 시안 3개를 매핑한다. */
export const CATEGORY_DESIGN_MAP: Record<FunnelCategoryId, readonly [DesignId, DesignId, DesignId]> = {
  cafe: ["heritage", "lifestyle", "natural"],
  food: ["bold", "heritage", "lifestyle"],
  beauty: ["editorial", "minimal", "lifestyle"],
  medical: ["minimal", "natural", "editorial"],
  fitness: ["bold", "minimal", "lifestyle"],
  stay: ["lifestyle", "editorial", "natural"],
  pro: ["minimal", "editorial", "heritage"],
  other: ["lifestyle", "minimal", "natural"],
};
