"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface InquiryLinkProps {
  children: React.ReactNode;
  className?: string;
  ctaLocation: string;
  sampleId?: string;
  serviceType?: "new" | "renewal";
  showArrow?: boolean;
}

export function InquiryLink({
  children,
  className,
  ctaLocation,
  sampleId,
  serviceType,
  showArrow = true,
}: InquiryLinkProps) {
  const params = new URLSearchParams({ from: ctaLocation });
  if (sampleId) params.set("sample", sampleId);
  if (serviceType) params.set("service", serviceType);

  return (
    <Link
      className={className}
      href={`/inquiry?${params.toString()}`}
      onClick={() =>
        trackEvent("inquiry_click", {
          cta_location: ctaLocation,
          sample_id: sampleId,
          service_type: serviceType,
        })
      }
    >
      {children}
      {showArrow ? (
        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
      ) : null}
    </Link>
  );
}
