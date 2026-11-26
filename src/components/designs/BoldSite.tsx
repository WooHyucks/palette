/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { photo } from "@/components/samples/media";

const PROGRAMS = [
  {
    name: "STRENGTH",
    body: "바벨·덤벨 중심의 근력. 주 3회 권장. 기록으로 진도를 남깁니다.",
    meta: "50분 · 최대 6명",
    image: photo("1534438327276-14e5300c3a48", 900, 1100),
  },
  {
    name: "CONDITION",
    body: "인터벌과 서킷으로 심폐 지구력을 끌어올립니다.",
    meta: "45분 · 하이브리드",
    image: photo("1517836357463-d25dfeac3438", 900, 1100),
  },
  {
    name: "RESET",
    body: "모빌리티와 호흡으로 회복을 설계합니다. 부상 예방에 집중.",
    meta: "40분 · 회복",
    image: photo("1571019613454-1cb2f99b2d8b", 900, 1100),
  },
];

const PRICES = [
  { name: "체험 레슨", count: "1회", price: "40,000", note: "상담 포함 · 첫 방문" },
  { name: "그룹 멤버십", count: "12회", price: "360,000", note: "회당 30,000원", best: true },
  { name: "1:1 코칭", count: "8회", price: "560,000", note: "회당 70,000원" },
];

export function BoldSite() {
  return (
    <div className="pu">
      <p className="pu-announce">
        성수 트레이닝 랩 · 평일 07:00 – 22:00 · 체험 레슨 상시 모집
      </p>

      <header className="pu-header">
        <a href="#pu-top" className="pu-logo">
          PULSE
        </a>
        <nav aria-label="PULSE 메뉴">
          <a href="#pu-programs">프로그램</a>
          <a href="#pu-price">멤버십</a>
          <a href="#pu-visit">방문</a>
        </nav>
        <a href="#pu-price" className="pu-btn pu-btn--white pu-btn--sm">
          JOIN
        </a>
      </header>

      <main id="pu-top">
        <section className="pu-hero">
          <div className="pu-hero-copy">
            <p className="pu-eyebrow">TRAINING LAB · SEONGSU</p>
            <h1>
              MOVE
              <br />
              HARDER.
            </h1>
            <p>
              최대 6명. 기록으로 증명하는 소그룹 퍼포먼스 트레이닝.
              첫 수업부터 코치가 옆에서 강도를 맞춥니다.
            </p>
            <div className="pu-actions">
              <a href="#pu-price" className="pu-btn pu-btn--red">
                체험 레슨 신청 <ArrowRight size={16} strokeWidth={2.2} />
              </a>
              <a href="#pu-visit" className="pu-btn pu-btn--ghost">
                <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
                카카오톡 상담
              </a>
            </div>
          </div>
          <div className="pu-hero-media">
            <img
              src={photo("1518611012118-696072aa579a", 1400, 1600)}
              alt="PULSE 트레이닝"
            />
            <div className="pu-hero-card">
              <strong>체험 1회 40,000원</strong>
              <span>체력 체크 · 프로그램 상담 포함</span>
            </div>
          </div>
        </section>

        <ul className="pu-points" aria-label="PULSE 특징">
          <li>
            <strong>6명</strong>
            <span>최대 정원</span>
          </li>
          <li>
            <strong>50분</strong>
            <span>세션 길이</span>
          </li>
          <li>
            <strong>07–22</strong>
            <span>평일 운영</span>
          </li>
        </ul>

        <section className="pu-section" id="pu-programs">
          <p className="pu-eyebrow pu-eyebrow--red">PROGRAM</p>
          <h2>강도는 다르게, 목표는 분명하게</h2>
          <div className="pu-programs">
            {PROGRAMS.map((item, index) => (
              <article key={item.name} className="pu-program">
                <div className="pu-program-media">
                  <img src={item.image} alt="" loading="lazy" />
                  <span>
                    0{index + 1} · {item.meta}
                  </span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pu-section pu-section--panel" id="pu-price">
          <p className="pu-eyebrow pu-eyebrow--red">MEMBERSHIP</p>
          <h2>첫 수업부터 투명한 가격</h2>
          <div className="pu-prices">
            {PRICES.map((item) => (
              <article
                key={item.name}
                className={`pu-price${item.best ? " is-best" : ""}`}
              >
                {item.best ? <span className="pu-price-tag">인기</span> : null}
                <h3>
                  {item.name} <small>{item.count}</small>
                </h3>
                <p className="pu-price-num">
                  {item.price}
                  <small>원</small>
                </p>
                <p className="pu-price-note">{item.note}</p>
                <a
                  href="#pu-visit"
                  className={`pu-btn ${item.best ? "pu-btn--red" : "pu-btn--line"}`}
                >
                  예약 문의
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="pu-promo">
          <div className="pu-promo-copy">
            <p className="pu-eyebrow">COACHING</p>
            <h2>
              기록이 남는
              <br />
              트레이닝
            </h2>
            <p>
              매 세션 무게·횟수·컨디션을 남깁니다. 다음 수업에서 바로 이어서
              올립니다.
            </p>
            <a href="#pu-price" className="pu-btn pu-btn--white">
              멤버십 보기
            </a>
          </div>
          <div className="pu-promo-media">
            <img
              src={photo("1581009146145-b5ef050c2e1e", 1400, 1000)}
              alt=""
              loading="lazy"
            />
          </div>
        </section>

        <section className="pu-visit" id="pu-visit">
          <div>
            <p className="pu-eyebrow pu-eyebrow--red">VISIT</p>
            <h2>
              첫 수업,
              <br />
              지금 잡으세요
            </h2>
          </div>
          <dl>
            <div>
              <dt>
                <MapPin size={16} strokeWidth={1.8} aria-hidden="true" /> 주소
              </dt>
              <dd>서울 성동구 연무장길 00, B1</dd>
            </div>
            <div>
              <dt>
                <Clock size={16} strokeWidth={1.8} aria-hidden="true" /> 운영
              </dt>
              <dd>평일 07:00 – 22:00 · 토 09:00 – 15:00</dd>
            </div>
            <div>
              <dt>
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" /> 전화
              </dt>
              <dd>02-000-0000</dd>
            </div>
          </dl>
          <div className="pu-actions">
            <a href="#pu-visit" className="pu-btn pu-btn--red">
              체험 레슨 신청
            </a>
            <a href="#pu-visit" className="pu-btn pu-btn--ghost">
              카카오톡 상담
            </a>
          </div>
        </section>
      </main>

      <footer className="pu-footer">
        <strong>PULSE Lab</strong>
        <p>PALETTE 원페이지 디자인 샘플 · 가상의 트레이닝 랩이며 정보는 예시입니다.</p>
      </footer>
    </div>
  );
}
