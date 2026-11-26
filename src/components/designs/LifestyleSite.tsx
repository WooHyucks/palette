/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { photo } from "@/components/samples/media";

const SPACES = [
  {
    name: "거실",
    body: "넓은 창과 소파. 오후 빛이 길게 머무는 곳.",
    meta: "전망 · 라운지",
    image: photo("1600596542815-ffad4c1539a9", 900, 700),
  },
  {
    name: "침실",
    body: "킹 침대 2개. 암막과 조용한 밤을 위해.",
    meta: "킹 2 · 암막",
    image: photo("1522771739844-6a9f6d5f14af", 900, 700),
  },
  {
    name: "키친",
    body: "간단한 조리가 가능한 오픈 키친과 다이닝.",
    meta: "풀 키친",
    image: photo("1556912173-46c336c7fd55", 900, 700),
  },
];

const NEARBY = [
  { title: "카페 골목", meta: "도보 5분", body: "애월 해안도로 카페 라인" },
  { title: "해변", meta: "차량 10분", body: "산책·일몰 스팟" },
  { title: "시장", meta: "차량 15분", body: "저녁 장보기·로컬 음식" },
];

export function LifestyleSite() {
  return (
    <div className="sh">
      <header className="sh-header">
        <a href="#sh-top" className="sh-logo">
          STAYHOUSE
        </a>
        <nav aria-label="STAYHOUSE 메뉴">
          <a href="#sh-spaces">공간</a>
          <a href="#sh-nearby">주변</a>
          <a href="#sh-book">예약</a>
        </nav>
        <a href="#sh-book" className="sh-btn sh-btn--ink sh-btn--sm">
          예약 문의
        </a>
      </header>

      <main id="sh-top">
        <section className="sh-hero">
          <div className="sh-hero-media">
            <img
              src={photo("1502672260266-1c1ef2d93688", 1600, 1100)}
              alt="STAYHOUSE 공간"
            />
          </div>
          <div className="sh-hero-panel">
            <p className="sh-badge">
              <MapPin size={14} strokeWidth={2} aria-hidden="true" />
              제주 애월
            </p>
            <h1>
              바다 가까이,
              <br />
              집처럼 머무는 집
            </h1>
            <p className="sh-rating">
              <Star size={15} strokeWidth={2} aria-hidden="true" />
              4.92 · 후기 128
            </p>
            <p>
              주말 한적한 애월에서, 창밖이 곧 풍경인 숙소.
              일정만 알려 주시면 예약 가능 여부를 바로 안내드려요.
            </p>
            <div className="sh-actions">
              <a href="#sh-book" className="sh-btn sh-btn--coral">
                일정 문의하기 <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href="#sh-spaces" className="sh-btn sh-btn--line">
                공간 둘러보기
              </a>
            </div>
            <ul className="sh-facts">
              <li>
                <Users size={16} strokeWidth={1.8} aria-hidden="true" />
                최대 4인
              </li>
              <li>
                <Clock size={16} strokeWidth={1.8} aria-hidden="true" />
                체크인 16:00
              </li>
              <li>
                <Clock size={16} strokeWidth={1.8} aria-hidden="true" />
                체크아웃 11:00
              </li>
            </ul>
          </div>
        </section>

        <section className="sh-section" id="sh-spaces">
          <p className="sh-eyebrow">SPACES</p>
          <h2>머무는 공간</h2>
          <div className="sh-spaces">
            {SPACES.map((space) => (
              <article key={space.name} className="sh-space">
                <div className="sh-space-media">
                  <img src={space.image} alt="" loading="lazy" />
                  <span>{space.meta}</span>
                </div>
                <h3>{space.name}</h3>
                <p>{space.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sh-section sh-section--tint" id="sh-nearby">
          <div className="sh-nearby">
            <div>
              <p className="sh-eyebrow">NEARBY</p>
              <h2>주변에서 할 일</h2>
              <ul>
                {NEARBY.map((item) => (
                  <li key={item.title}>
                    <strong>
                      {item.title}
                      <span>{item.meta}</span>
                    </strong>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sh-nearby-media">
              <img
                src={photo("1507525428034-b723cf961d3e", 1200, 900)}
                alt="해변"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="sh-section sh-amenity">
          <div className="sh-amenity-media">
            <img
              src={photo("1493809842364-78817add7ffb", 1200, 900)}
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <p className="sh-eyebrow">STAY</p>
            <h2>
              필요한 것만
              <br />
              갖춘 집
            </h2>
            <p>
              세탁기, 건조대, 기본 조미료, 타월·어메니티까지.
              장기간 머물러도 불편하지 않게 준비해 두었어요.
            </p>
            <ul>
              <li>세탁기 · 건조대</li>
              <li>주차 1대</li>
              <li>와이파이 · 냉난방</li>
            </ul>
          </div>
        </section>

        <section className="sh-book" id="sh-book">
          <div>
            <p className="sh-eyebrow sh-eyebrow--light">BOOKING</p>
            <h2>
              일정만
              <br />
              알려 주세요
            </h2>
          </div>
          <dl>
            <div>
              <dt>인원</dt>
              <dd>최대 4인 · 추가 인원 불가</dd>
            </div>
            <div>
              <dt>시간</dt>
              <dd>체크인 16:00 · 체크아웃 11:00</dd>
            </div>
            <div>
              <dt>위치</dt>
              <dd>제주 제주시 애월읍 · 상세 주소는 예약 후 안내</dd>
            </div>
          </dl>
          <div className="sh-actions">
            <a href="#sh-book" className="sh-btn sh-btn--coral">
              <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
              카카오톡으로 예약 문의
            </a>
            <a href="#sh-spaces" className="sh-btn sh-btn--ghost">
              공간 다시 보기
            </a>
          </div>
        </section>
      </main>

      <footer className="sh-footer">
        <strong>STAYHOUSE</strong>
        <p>PALETTE 원페이지 디자인 샘플 · 가상의 숙소이며 정보는 예시입니다.</p>
      </footer>
    </div>
  );
}
