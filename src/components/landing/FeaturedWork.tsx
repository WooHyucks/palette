"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionObserver } from "@/components/landing/SectionObserver";
import { SamplePreview } from "@/components/preview/SamplePreview";
import { trackEvent } from "@/lib/analytics";
import { WORK_SAMPLES } from "@/lib/site";

export function FeaturedWork() {
  return (
    <SectionObserver
      id="work"
      className="studio-section studio-work"
      event="new_website_section_view"
      payload={{ service_type: "new" }}
    >
      <div className="studio-section-head">
        <p className="studio-kicker">NEW WEBSITE · DESIGN SAMPLES</p>
        <h2>
          말보다, 결과물로
          <br />
          보여드립니다.
        </h2>
        <p>
          필라테스 스튜디오, 제품 런칭, 카페. 모두 30만 원 기본형으로 제작
          가능한 원페이지 랜딩페이지입니다. 아래 화면은 이미지가 아니라 실제로
          작동하는 홈페이지예요.
        </p>
      </div>

      <div className="studio-work-list">
        {WORK_SAMPLES.map((sample) => {
          const open = (location: string) =>
            trackEvent("sample_open", {
              sample_id: sample.id,
              cta_location: location,
              service_type: "new",
            });

          return (
            <article className="studio-work-card" key={sample.id}>
              <div className="studio-work-meta">
                <span>{sample.label}</span>
                <small>{sample.tone}</small>
              </div>
              <h3>{sample.brand}</h3>
              <p>{sample.blurb}</p>

              <div className="work-devices">
                <div className="studio-browser work-browser">
                  <div className="studio-browser-bar">
                    <i />
                    <i />
                    <i />
                    <span>{sample.url}</span>
                  </div>
                  <SamplePreview sampleId={sample.id} />
                </div>
                <div className="work-phone" aria-hidden="true">
                  <SamplePreview sampleId={sample.id} mobileHeight={800} />
                </div>
                <Link
                  href={sample.href}
                  className="preview-cover"
                  aria-label={`${sample.brand} 디자인 샘플 열기`}
                  onClick={() => open("featured_work_preview")}
                />
              </div>

              <Link
                href={sample.href}
                className="studio-btn studio-btn--dark"
                onClick={() => open("featured_work")}
              >
                홈페이지 직접 둘러보기
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </SectionObserver>
  );
}
