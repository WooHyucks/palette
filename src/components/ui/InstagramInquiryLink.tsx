"use client";

import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { INSTAGRAM_URL } from "@/lib/site";

interface InstagramInquiryLinkProps {
  children: React.ReactNode;
  className?: string;
  ctaLocation: string;
  sampleId?: string;
  serviceType?: "new" | "renewal";
  showArrow?: boolean;
}

export function InstagramInquiryLink({
  children,
  className,
  ctaLocation,
  sampleId,
  serviceType,
  showArrow = true,
}: InstagramInquiryLinkProps) {
  return (
    <a
      className={className}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("instagram_inquiry_click", {
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
    </a>
  );
}
