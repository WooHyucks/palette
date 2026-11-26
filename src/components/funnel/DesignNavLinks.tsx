"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { isFunnelCategoryId } from "@/lib/designs/categories";
import { getInquiryHref } from "@/lib/designs/recommend";
import type { DesignId } from "@/lib/designs/templates";

export function DesignBackLink() {
  const params = useSearchParams();
  const raw = params.get("category");
  const href =
    raw && isFunnelCategoryId(raw) ? `/?category=${raw}` : "/";
  return <Link href={href}>← PALETTE</Link>;
}

export function DesignNavInquiry({ designId }: { designId: DesignId }) {
  const params = useSearchParams();
  const raw = params.get("category");
  const categoryId = raw && isFunnelCategoryId(raw) ? raw : undefined;
  return (
    <Link
      href={getInquiryHref({
        designId,
        categoryId,
        from: "design_nav",
      })}
    >
      제작 문의
    </Link>
  );
}
