"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DESIGN_SITES } from "@/components/designs/registry";
import { trackEvent } from "@/lib/analytics";
import { isFunnelCategoryId } from "@/lib/designs/categories";
import type { DesignId } from "@/lib/designs/templates";

export function DesignPreviewClient({ designId }: { designId: DesignId }) {
  const params = useSearchParams();
  const raw = params.get("category");
  const categoryId = raw && isFunnelCategoryId(raw) ? raw : undefined;
  const Site = DESIGN_SITES[designId];

  useEffect(() => {
    trackEvent("design_preview_open", {
      design_id: designId,
      category_id: categoryId,
      cta_location: "design_page",
    });
  }, [designId, categoryId]);

  return (
    <div className="sample-shell" style={{ ["--sample-top" as string]: "52px" }}>
      <Site />
    </div>
  );
}
