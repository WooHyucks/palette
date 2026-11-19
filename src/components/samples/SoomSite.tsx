/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { photo } from "@/components/samples/media";

const PROGRAMS = [
  {
    name: "1:1 개인 레슨",
    body: "체형과 통증을 먼저 확인하고, 나에게 맞춘 동작으로 진행해요.",
    meta: "50분 · 기구 필라테스",
    image: photo("1552196563-55cd4e45efb3", 900, 1100),
  },
  {
    name: "2:1 듀엣 레슨",
    body: "친구, 가족과 함께. 개인 레슨의 섬세함은 그대로 유지해요.",
    meta: "50분 · 기구 필라테스",
    image: photo("1510894347713-fc3ed6fdf539", 900, 1100),
  },
  {
    name: "4인 그룹 레슨",
    body: "소수 정원으로 자세 교정까지 꼼꼼하게 봐드려요.",
    meta: "50분 · 매트 · 소도구",
    image: photo("1600881333168-2ef49b341f30", 900, 1100),
  },
];

const PRICES = [
  { name: "체험 레슨", count: "1회", price: "30,000", note: "첫 방문 1회 한정" },
  { name: "그룹 레슨", count: "10회", price: "280,000", note: "회당 28,000원", best: true },
  { name: "1:1 개인 레슨", count: "10회", price: "650,000", note: "회당 65,000원" },
];

const FAQ = [
  ["운동을 처음 해봐도 괜찮을까요?", "회원님의 대부분이 처음 시작하신 분들이에요. 체험 레슨에서 몸 상태를 먼저 확인해요."],
  ["준비물이 있나요?", "편한 운동복만 준비해 주세요. 미끄럼 방지 양말은 스튜디오에서 드려요."],
  ["주차가 가능한가요?", "건물 지하 주차장을 2시간 무료로 이용하실 수 있어요."],
];

export function SoomSite() {
  return (
    <div className="sm">
      <header className="sm-header">
        <a href="#sm-top" className="sm-logo">
          soom<i aria-hidden="true">.</i>
        </a>
        <nav aria-label="SOOM PILATES 메뉴">
          <a href="#sm-program">프로그램</a>
          <a href="#sm-price">수업료</a>
          <a href="#sm-coach">강사 소개</a>
          <a href="#sm-visit">오시는 길</a>
        </nav>
        <a href="#sm-price" className="sm-btn sm-btn--dark sm-btn--sm">
          체험 예약
        </a>
      </header>

      <main id="sm-top">
        <section className="sm-hero">
          <div className="sm-hero-copy">
            <p className="sm-badge">성수동 · 소수정원 기구 필라테스</p>
            <h1>
              숨 쉬듯 편안하게,
              <br />
              <em>몸의 균형</em>을 되찾는
              <br />
              50분.
            </h1>
            <p>
              자세 교정부터 통증 관리까지. 최대 4명, 한 사람 한 사람을
              놓치지 않는 수업을 합니다.
            </p>
            <div className="sm-actions">
              <a href="#sm-price" className="sm-btn sm-btn--dark">
                체험 레슨 예약하기 <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href="#sm-visit" className="sm-btn sm-btn--light">
                <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
                카카오톡 상담
              </a>
            </div>
          </div>
          <div className="sm-hero-media">
            <img src={photo("1575052814086-f385e2e2ad1b", 1400, 1600)} alt="SOOM 스튜디오에서 운동하는 회원" />
            <div className="sm-hero-card">
              <strong>체험 레슨 30,000원</strong>
              <span>첫 방문 1회 · 상담 포함</span>
            </div>
          </div>
        </section>

        <ul className="sm-points" aria-label="SOOM의 특징">
          <li>
            <strong>최대 4인</strong>
            <span>소수정원 수업</span>
          </li>
          <li>
            <strong>1:1 체형 분석</strong>
            <span>첫 수업 전 상담</span>
          </li>
          <li>
            <strong>07:00 – 22:00</strong>
            <span>평일 수업 운영</span>
          </li>
        </ul>

        <section className="sm-section" id="sm-program">
          <p className="sm-eyebrow">PROGRAM</p>
          <h2>나에게 맞는 수업을 골라보세요</h2>
          <div className="sm-programs">
            {PROGRAMS.map((program) => (
              <article key={program.name} className="sm-program">
                <div className="sm-program-media">
                  <img src={program.image} alt="" loading="lazy" />
                  <span>{program.meta}</span>
                </div>
                <h3>{program.name}</h3>
                <p>{program.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sm-section sm-section--tint" id="sm-price">
          <p className="sm-eyebrow">PRICE</p>
          <h2>수업료는 투명하게</h2>
          <div className="sm-prices">
            {PRICES.map((item) => (
              <article
                key={item.name}
                className={`sm-price${item.best ? " is-best" : ""}`}
              >
                {item.best ? <span className="sm-price-tag">가장 많이 선택</span> : null}
                <h3>
                  {item.name} <small>{item.count}</small>
                </h3>
                <p className="sm-price-num">
                  {item.price}
                  <small>원</small>
                </p>
                <p className="sm-price-note">{item.note}</p>
                <a href="#sm-visit" className={`sm-btn ${item.best ? "sm-btn--lilac" : "sm-btn--line"}`}>
                  예약 문의
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="sm-section sm-coach" id="sm-coach">
          <img src={photo("1591258370814-01609b341790", 1200, 900)} alt="" loading="lazy" />
          <div>
            <p className="sm-eyebrow">COACH</p>
            <h2>
              10년 동안,
              <br />
              몸의 이야기를 들어왔어요
            </h2>
            <p>
              SOOM의 모든 수업은 국제 자격을 갖춘 강사가 직접 진행합니다.
              빠르게 바꾸기보다, 오래 유지되는 몸을 만드는 데 집중해요.
            </p>
            <ul>
              <li>국제 필라테스 지도자 자격</li>
              <li>재활 운동 전문 과정 수료</li>
              <li>누적 레슨 8,000시간</li>
            </ul>
          </div>
        </section>

        <section className="sm-section" id="sm-faq">
          <p className="sm-eyebrow">FAQ</p>
          <h2>자주 묻는 질문</h2>
          <div className="sm-faq">
            {FAQ.map(([q, a]) => (
              <details key={q} open={q === FAQ[0][0]}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="sm-visit" id="sm-visit">
          <div>
            <p className="sm-eyebrow">VISIT</p>
            <h2>
              첫 수업,
              <br />
              편하게 문의하세요
            </h2>
          </div>
          <dl>
            <div>
              <dt>
                <MapPin size={16} strokeWidth={1.8} aria-hidden="true" /> 주소
              </dt>
              <dd>서울 성동구 연무장길 00, 3층</dd>
            </div>
            <div>
              <dt>
                <Clock size={16} strokeWidth={1.8} aria-hidden="true" /> 운영 시간
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
          <div className="sm-actions">
            <a href="#sm-visit" className="sm-btn sm-btn--lilac">
              네이버 예약
            </a>
            <a href="#sm-visit" className="sm-btn sm-btn--ghost">
              카카오톡 상담
            </a>
          </div>
        </section>
      </main>

      <footer className="sm-footer">
        <strong>
          soom<i>.</i> pilates
        </strong>
        <p>PALETTE 원페이지 디자인 샘플 · 가상의 스튜디오이며 정보는 예시입니다.</p>
      </footer>

      <a href="#sm-price" className="sm-sticky">
        체험 레슨 예약하기 · 30,000원
      </a>
    </div>
  );
}
