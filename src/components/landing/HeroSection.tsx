import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SamplePreview } from "@/components/preview/SamplePreview";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";
import { PRICE_LABEL, PRICE_SHORT } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="studio-hero">
      <div className="studio-hero-copy">
        <p className="studio-kicker">NEW · RENEWAL · {PRICE_SHORT}</p>
        <h1>
          우리 가게에 맞는 홈페이지,
          <br />
          <em>30만 원</em>에 제작해 드립니다
        </h1>
        <p className="studio-hero-lead">
          처음 만드는 홈페이지부터
          <br />
          오래된 홈페이지 리뉴얼까지.
          <br />
          우리 브랜드에 맞게 제작해 드립니다.
        </p>
      </div>

      <div className="studio-hero-visual">
        <div className="studio-browser hero-browser">
          <div className="studio-browser-bar">
            <i />
            <i />
            <i />
            <span>hauscoffee.kr</span>
          </div>
          <SamplePreview
            sampleId="haus-coffee"
            mobileHeight={560}
            breakpoint={480}
          />
          <Link
            href="/work/haus-coffee"
            className="preview-cover"
            aria-label="HAUS COFFEE 디자인 샘플 보기"
          />
        </div>
        <Link href="#work" className="studio-hero-chip">
          디자인 샘플과 리뉴얼 비교 보기
          <ArrowDownRight size={14} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>

      <div className="studio-hero-cta-block">
        <div className="studio-hero-price" aria-label={`기본 제작 가격 ${PRICE_LABEL}`}>
          <span>기본형 원페이지 · 신규 / 리뉴얼</span>
          <strong>{PRICE_LABEL}</strong>
        </div>
        <div className="studio-hero-actions">
          <a href="#work" className="studio-btn studio-btn--primary">
            디자인 먼저 보기
            <ArrowDownRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <InstagramInquiryLink
            className="studio-btn studio-btn--ghost"
            ctaLocation="hero"
          >
            제작 문의하기
          </InstagramInquiryLink>
        </div>
      </div>
    </section>
  );
}
