"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";
import {
  SEORAE,
  SeoraeAfterSite,
  SeoraeBeforeSite,
} from "@/components/renewal/SeoraeSites";
import { trackEvent } from "@/lib/analytics";

type ViewMode = "before" | "after";

export function RenewalDemoClient() {
  const [view, setView] = useState<ViewMode>("after");

  useEffect(() => {
    trackEvent("renewal_demo_open", {
      service_type: "renewal",
      cta_location: "renewal_demo",
    });
  }, []);

  return (
    <div className={`renewal-demo renewal-demo--${view}`}>
      <div className="renewal-demo-bar">
        <Link href="/#renewal" className="renewal-demo-back">
          ← PALETTE
        </Link>
        <div className="renewal-demo-toggle" role="group" aria-label="리뉴얼 전후 전환">
          <button
            type="button"
            aria-pressed={view === "before"}
            onClick={() => setView("before")}
          >
            BEFORE
          </button>
          <button
            type="button"
            aria-pressed={view === "after"}
            onClick={() => setView("after")}
          >
            AFTER
          </button>
        </div>
        <InstagramInquiryLink
          className="renewal-demo-ask"
          ctaLocation="renewal_demo"
          serviceType="renewal"
          showArrow={false}
        >
          문의하기
        </InstagramInquiryLink>
      </div>

      <p className="renewal-demo-note">
        {view === "before"
          ? "BEFORE · 모바일에서 화면이 작게 보이고 좌우로 밀어야 하는 기존 구조"
          : `AFTER · 리뉴얼 디자인 예시 · 자체 제작 콘셉트 (${SEORAE.brand})`}
      </p>

      {view === "before" ? (
        <div className="renewal-demo-scroll">
          <SeoraeBeforeSite />
        </div>
      ) : (
        <SeoraeAfterSite />
      )}
    </div>
  );
}
