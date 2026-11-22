import { SectionObserver } from "@/components/landing/SectionObserver";
import { InquiryLink } from "@/components/ui/InquiryLink";
import { PRICE_LABEL } from "@/lib/site";

const INCLUDED = [
  "기본형 원페이지 구성",
  "브랜드에 맞춘 디자인 조정",
  "모바일 반응형",
  "업체 정보 및 이미지 반영",
  "기본 SEO 설정",
  "전화 및 문의 링크 연결",
  "기본 수정 2회",
  "배포 지원",
];

const EXTRA = [
  "다중 페이지",
  "복잡한 기능 개발",
  "예약 및 결제 시스템",
  "회원가입 및 관리자 기능",
  "대규모 데이터 이전",
  "기존 시스템과의 연동",
  "도메인 및 유료 호스팅",
  "지속적인 유지보수",
];

export function PricingSection() {
  return (
    <SectionObserver
      id="pricing"
      className="studio-section studio-pricing"
      event="pricing_view"
    >
      <div className="studio-section-head">
        <p className="studio-kicker">PRICING</p>
        <h2>
          가격은 명확하게.
          <br />
          디자인은 우리 브랜드답게.
        </h2>
      </div>

      <div className="studio-price-duo">
        <article>
          <span>신규 제작</span>
          <strong>{PRICE_LABEL}</strong>
          <p>기본형 원페이지 홈페이지 제작</p>
        </article>
        <article>
          <span>리뉴얼</span>
          <strong>{PRICE_LABEL}</strong>
          <p>기본형 원페이지 홈페이지 리뉴얼</p>
        </article>
      </div>

      <div className="studio-price-panel studio-price-panel--split">
        <div className="studio-price-lists">
          <div>
            <h3>공통 포함</h3>
            <ul>
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>별도 견적</h3>
            <ul>
              {EXTRA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="studio-price-note">
              리뉴얼은 기존 홈페이지 구조와 기능에 따라 작업 범위가 달라질 수
              있습니다. 30만 원 기본형은 원페이지 수준의 디자인·콘텐츠 재구성을
              기준으로 하며, 기존 시스템의 모든 기능 이전을 보장하지 않습니다.
            </p>
          </div>
        </div>
        <InquiryLink
          className="studio-btn studio-btn--primary"
          ctaLocation="pricing"
        >
          30만 원에 문의하기
        </InquiryLink>
      </div>
    </SectionObserver>
  );
}
