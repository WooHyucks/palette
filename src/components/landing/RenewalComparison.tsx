import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionObserver } from "@/components/landing/SectionObserver";
import { BeforeAfterSlider } from "@/components/renewal/BeforeAfterSlider";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";

export function RenewalComparison() {
  return (
    <SectionObserver
      id="renewal"
      className="studio-section studio-renewal"
      event="renewal_section_view"
      payload={{ service_type: "renewal" }}
    >
      <div className="studio-section-head">
        <p className="studio-kicker">RENEWAL · BEFORE & AFTER</p>
        <h2>
          오래된 홈페이지,
          <br />
          이렇게 달라질 수 있습니다.
        </h2>
        <p>
          익숙하지만 오래된 디자인을 지금의 브랜드에 어울리는 홈페이지로
          바꿔드립니다.
        </p>
      </div>

      <BeforeAfterSlider />

      <p className="studio-renewal-note">
        리뉴얼 디자인 예시 · 자체 제작 콘셉트 (서래베이커리)
      </p>

      <div className="studio-renewal-cta">
        <p>우리 홈페이지도 이렇게 바꿀 수 있을까요?</p>
        <div className="studio-hero-actions">
          <InstagramInquiryLink
            className="studio-btn studio-btn--primary"
            ctaLocation="renewal_section"
            serviceType="renewal"
          >
            30만 원 리뉴얼 문의하기
          </InstagramInquiryLink>
          <Link href="/renewal-demo" className="studio-btn studio-btn--ghost">
            리뉴얼 데모 직접 보기
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionObserver>
  );
}
