"use client";

import { useId, useState } from "react";

const FAQ_ITEMS = [
  {
    q: "정말 30만 원에 제작할 수 있나요?",
    a: "네. 기본형 원페이지 홈페이지는 30만 원에 제작합니다. 추가 기능이나 복잡한 시스템 이전이 필요한 경우 별도로 안내합니다.",
  },
  {
    q: "기존 홈페이지도 리뉴얼할 수 있나요?",
    a: "네. 기존 홈페이지의 디자인과 구성 개선이 가능합니다. 다만 현재 사용 중인 시스템에 따라 작업 범위가 달라질 수 있습니다.",
  },
  {
    q: "기존 홈페이지의 주소를 그대로 사용할 수 있나요?",
    a: "기존 도메인의 소유권과 설정을 확인한 후 가능한 방법을 안내합니다.",
  },
  {
    q: "기존 홈페이지의 데이터도 이전되나요?",
    a: "기본적인 콘텐츠 이전은 상담을 통해 범위를 확인하며, 대규모 데이터나 복잡한 시스템 이전은 별도 견적이 필요합니다.",
  },
  {
    q: "디자인을 원하는 대로 수정할 수 있나요?",
    a: "기본 제작 범위 내에서 브랜드에 맞게 조정하고 수정 2회를 제공합니다.",
  },
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "작업 범위와 자료 준비 상태에 따라 달라지며 상담 후 안내합니다.",
  },
] as const;

export function FAQSection() {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <section className="studio-section studio-faq" id="faq">
      <div className="studio-section-head">
        <p className="studio-kicker">FAQ</p>
        <h2>자주 묻는 질문</h2>
      </div>

      <div className="studio-faq-list">
        {FAQ_ITEMS.map((item, index) => {
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          const isOpen = open === index;
          return (
            <div className={`studio-faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
