/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { photo } from "@/components/samples/media";

const RANGE = [
  {
    name: "Botanical Cleanser",
    body: "미온수로 부드럽게 씻어내는 젤 클렌저.",
    price: "38,000",
    meta: "120ml",
    image: photo("1556228720-195a672e8a03", 900, 1100),
  },
  {
    name: "Quiet Serum",
    body: "자극 없이 수분막을 남기는 세럼.",
    price: "52,000",
    meta: "30ml · BEST",
    image: photo("1512496015851-a90fb38ba796", 900, 1100),
  },
  {
    name: "Soft Balm",
    body: "밤에도 가벼운 보습 밤.",
    price: "29,000",
    meta: "50ml",
    image: photo("1598440947619-2c35fc9aa908", 900, 1100),
  },
];

const RITUAL = [
  {
    step: "01",
    title: "Morning",
    body: "클렌징 → 토너 → 세럼. 세 가지만으로 충분합니다.",
  },
  {
    step: "02",
    title: "Evening",
    body: "하루의 자극을 가라앉히는 밤 루틴. 향은 짧게, 보습은 깊게.",
  },
  {
    step: "03",
    title: "Weekly",
    body: "주 1회 쇼룸에서 텍스처를 다시 고르고, 필요한 것만 가져갑니다.",
  },
];

export function EditorialSite() {
  return (
    <div className="ve">
      <header className="ve-header">
        <a href="#ve-top" className="ve-logo">
          VERDE
        </a>
        <nav aria-label="VERDE 메뉴">
          <a href="#ve-ritual">루틴</a>
          <a href="#ve-range">제품</a>
          <a href="#ve-note">노트</a>
          <a href="#ve-visit">쇼룸</a>
        </nav>
        <a href="#ve-visit" className="ve-btn ve-btn--ink ve-btn--sm">
          방문 예약
        </a>
      </header>

      <main id="ve-top">
        <section className="ve-hero">
          <div className="ve-hero-copy">
            <p className="ve-badge">APOTHECARY · HANNAM</p>
            <h1>
              피부에 남는
              <br />
              <em>조용한 루틴.</em>
            </h1>
            <p>
              과하지 않은 향과 성분으로, 매일의 케어를 다시 정의합니다.
              쇼룸에서 먼저 만져 보고 고르세요.
            </p>
            <div className="ve-actions">
              <a href="#ve-range" className="ve-btn ve-btn--ink">
                제품 보기 <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href="#ve-visit" className="ve-btn ve-btn--line">
                <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
                쇼룸 예약
              </a>
            </div>
          </div>
          <div className="ve-hero-media">
            <img
              src={photo("1616394584738-fc6e612e71b9", 1200, 1500)}
              alt="VERDE 스킨케어"
            />
            <div className="ve-hero-card">
              <strong>쇼룸 방문 예약</strong>
              <span>수–일 12:00–20:00 · 한남</span>
            </div>
          </div>
        </section>

        <ul className="ve-points" aria-label="VERDE 특징">
          <li>
            <strong>3-step</strong>
            <span>매일 쓰는 루틴</span>
          </li>
          <li>
            <strong>무향료</strong>
            <span>자극을 줄인 배합</span>
          </li>
          <li>
            <strong>쇼룸 first</strong>
            <span>만져 보고 결정</span>
          </li>
        </ul>

        <section className="ve-section" id="ve-ritual">
          <p className="ve-eyebrow">RITUAL</p>
          <h2>하루를 나누는 세 가지 리듬</h2>
          <div className="ve-ritual">
            {RITUAL.map((item) => (
              <article key={item.step}>
                <p>{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ve-section ve-section--tint" id="ve-range">
          <p className="ve-eyebrow">RANGE</p>
          <h2>매일 쓰는 세 가지</h2>
          <div className="ve-range">
            {RANGE.map((item) => (
              <article key={item.name} className="ve-product">
                <div className="ve-product-media">
                  <img src={item.image} alt="" loading="lazy" />
                  <span>{item.meta}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <strong>₩{item.price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="ve-section ve-note" id="ve-note">
          <div className="ve-note-media">
            <img
              src={photo("1515377905703-c4788e51af15", 1400, 1000)}
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <p className="ve-eyebrow">NOTE</p>
            <h2>
              성분보다,
              <br />
              손이 가는 텍스처
            </h2>
            <p>
              자극을 줄이고 보습을 남기는 배합. 설명은 짧게, 경험은 쇼룸에서
              직접 확인해 주세요.
            </p>
            <ul>
              <li>민감 피부 테스트 완료</li>
              <li>리필·샘플 쇼룸 한정</li>
              <li>상담 후 루틴 제안</li>
            </ul>
          </div>
        </section>

        <section className="ve-visit" id="ve-visit">
          <div>
            <p className="ve-eyebrow ve-eyebrow--light">STORE</p>
            <h2>
              한남 쇼룸에서
              <br />
              먼저 만나보세요
            </h2>
          </div>
          <dl>
            <div>
              <dt>
                <MapPin size={16} strokeWidth={1.8} aria-hidden="true" /> 주소
              </dt>
              <dd>서울 용산구 한남대로 00, 2층</dd>
            </div>
            <div>
              <dt>
                <Clock size={16} strokeWidth={1.8} aria-hidden="true" /> 운영
              </dt>
              <dd>수–일 12:00 – 20:00 · 월·화 휴무</dd>
            </div>
          </dl>
          <div className="ve-actions">
            <a href="#ve-visit" className="ve-btn ve-btn--cream">
              카카오톡으로 방문 예약
            </a>
            <a href="#ve-range" className="ve-btn ve-btn--ghost">
              제품 다시 보기
            </a>
          </div>
        </section>
      </main>

      <footer className="ve-footer">
        <strong>VERDE Apothecary</strong>
        <p>PALETTE 원페이지 디자인 샘플 · 가상의 브랜드이며 정보는 예시입니다.</p>
      </footer>
    </div>
  );
}
