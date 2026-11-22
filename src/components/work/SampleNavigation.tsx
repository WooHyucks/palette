"use client";

import Link from "next/link";
import { InquiryLink } from "@/components/ui/InquiryLink";
import type { WorkSampleId } from "@/lib/site";

interface SampleNavigationProps {
  sampleId: WorkSampleId;
  brand: string;
}

export function SampleNavigation({ sampleId, brand }: SampleNavigationProps) {
  return (
    <div className="sample-nav">
      <Link href="/" className="sample-nav-back">
        ← PALETTE
      </Link>
      <span className="sample-nav-brand">{brand} · DESIGN SAMPLE</span>
      <InquiryLink
        className="sample-nav-cta"
        ctaLocation="sample_bar"
        sampleId={sampleId}
        showArrow={false}
      >
        제작 문의
      </InquiryLink>
    </div>
  );
}
