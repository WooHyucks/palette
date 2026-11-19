"use client";

import { useEffect, useState } from "react";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";
import { PRICE_SHORT } from "@/lib/site";

export function StickyInquiryBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pricing = document.getElementById("pricing");
      const final = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.55;
      const nearFinal =
        !!final && final.getBoundingClientRect().top < window.innerHeight * 0.85;
      const coveringPricing =
        !!pricing &&
        pricing.getBoundingClientRect().top < window.innerHeight &&
        pricing.getBoundingClientRect().bottom > window.innerHeight * 0.7;
      setVisible(pastHero && !nearFinal && !coveringPricing);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`studio-sticky${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="studio-sticky-inner">
        <p>
          홈페이지 제작 · 리뉴얼 <strong>{PRICE_SHORT}</strong>
        </p>
        <InstagramInquiryLink
          className="studio-sticky-cta"
          ctaLocation="sticky_bar"
          showArrow
        >
          문의하기
        </InstagramInquiryLink>
      </div>
    </div>
  );
}
