import { getFunnelCategory, type FunnelCategoryId } from "@/lib/designs/categories";
import { CATEGORY_DESIGN_MAP } from "@/lib/designs/mapping";
import { getDesignTemplate, type DesignId } from "@/lib/designs/templates";

export function getRecommendations(categoryId: FunnelCategoryId) {
  const category = getFunnelCategory(categoryId);
  if (!category) return [];

  return CATEGORY_DESIGN_MAP[categoryId].map((designId) => {
    const template = getDesignTemplate(designId);
    if (!template) throw new Error(`Missing design template: ${designId}`);
    return template;
  });
}

export function getDesignHref(designId: DesignId, categoryId?: FunnelCategoryId) {
  const params = new URLSearchParams();
  if (categoryId) params.set("category", categoryId);
  const query = params.toString();
  return query ? `/design/${designId}?${query}` : `/design/${designId}`;
}

export function getInquiryHref(opts: {
  designId?: DesignId;
  categoryId?: FunnelCategoryId;
  from?: string;
}) {
  const params = new URLSearchParams();
  if (opts.from) params.set("from", opts.from);
  if (opts.designId) params.set("design", opts.designId);
  if (opts.categoryId) params.set("category", opts.categoryId);
  const query = params.toString();
  return query ? `/inquiry?${query}` : "/inquiry";
}
