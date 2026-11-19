import { ArrowDownRight } from "lucide-react";
import { PRICE_LABEL } from "@/lib/site";

export function ServiceSelection() {
  return (
    <section className="studio-section studio-services" id="services" aria-label="서비스 선택">
      <div className="studio-section-head">
        <p className="studio-kicker">SERVICES</p>
        <h2>
          새롭게 만들거나,
          <br />
          더 멋지게 바꾸거나.
        </h2>
      </div>

      <div className="studio-service-grid">
        <article className="studio-service-card">
          <span>SERVICE 01</span>
          <p className="studio-service-prompt">새 홈페이지가 필요하신가요?</p>
          <h3>홈페이지 신규 제작</h3>
          <p>
            브랜드의 첫인상을 완성하는 홈페이지를 제작합니다.
          </p>
          <strong>{PRICE_LABEL}</strong>
          <a href="#work" className="studio-btn studio-btn--ghost">
            제작 디자인 보기
            <ArrowDownRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </article>

        <article className="studio-service-card">
          <span>SERVICE 02</span>
          <p className="studio-service-prompt">홈페이지가 오래되셨나요?</p>
          <h3>기존 홈페이지 리뉴얼</h3>
          <p>
            오래된 디자인을 더 현대적이고 사용하기 편한 홈페이지로 바꿔드립니다.
          </p>
          <strong>{PRICE_LABEL}</strong>
          <a href="#renewal" className="studio-btn studio-btn--ghost">
            리뉴얼 전후 비교하기
            <ArrowDownRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
