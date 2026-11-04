"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** 카테고리 카드 클릭은 Link로 이동하므로, 결과 진입 시 선택 이벤트를 기록 */
export function CategorySelectTracker({ categoryId }: { categoryId: string }) {
  useEffect(() => {
    trackEvent("category_selected", { category_id: categoryId });
  }, [categoryId]);

  return null;
}
