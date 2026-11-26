"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { isFunnelCategoryId } from "@/lib/designs/categories";
import { getInquiryHref } from "@/lib/designs/recommend";
import type { DesignId } from "@/lib/designs/templates";
import { PRICE_SHORT } from "@/lib/site";

export function DesignStickyCta({ designId }: { designId: DesignId }) {
  const params = useSearchParams();
  const raw = params.get("category");
  const categoryId = raw && isFunnelCategoryId(raw) ? raw : undefined;
  const href = getInquiryHref({
    designId,
    categoryId,
    from: "design_preview",
  });

  return (
    <div className="design-sticky">
      <div className="design-sticky-inner">
        <p>
          이 디자인이 마음에 드시나요?
          <span>사장님 가게에 맞춰 {PRICE_SHORT}에 제작해 드려요.</span>
        </p>
        <Link
          href={href}
          onClick={() =>
            trackEvent("design_inquiry_cta_click", {
              design_id: designId,
              category_id: categoryId,
              cta_location: "sticky_cta",
            })
          }
        >
          이 디자인으로 제작 문의하기
        </Link>
      </div>
    </div>
  );
}
