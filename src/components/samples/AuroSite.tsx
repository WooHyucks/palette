/* eslint-disable @next/next/no-img-element */
import {
  ChevronRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Store,
} from "lucide-react";
import { photo } from "@/components/samples/media";

const NAV = [
  { label: "디자인", href: "#au-top" },
  { label: "하이라이트", href: "#au-highlights" },
  { label: "사양", href: "#au-specs" },
  { label: "지원", href: "#au-where" },
];

const HIGHLIGHTS = [
  {
    title: "최대 40시간 재생.",
    body: "출근길부터 주말 여행까지, 충전 걱정 없이.",
    image: photo("1484704849700-f032a568e944", 900),
    tone: "dark",
  },
  {
    title: "소음은 2배 더 조용하게.",
    body: "주변 환경을 초당 수백 번 분석해 소리만 남깁니다.",
    image: photo("1572536147248-ac59a8abfa4b", 900),
    tone: "light",
  },
  {
    title: "250g, 하루 종일 가볍게.",
    body: "메모리폼 쿠션이 귀를 부드럽게 감쌉니다.",
    image: photo("1546435770-a3e426bf472b", 900),
    tone: "light",
  },
];

const REASONS = [
  { icon: Store, title: "공식 온라인 판매처", body: "스마트스토어에서 바로 구매" },
  { icon: MapPin, title: "성수 쇼룸", body: "직접 착용해 보고 결정하세요" },
  { icon: ShieldCheck, title: "1년 무상 보증", body: "전국 A/S 센터 이용 가능" },
  { icon: MessageCircle, title: "카카오톡 상담", body: "구매 전 궁금한 점 해결" },
];

export function AuroSite() {
  return (
    <div className="au">
      <header className="au-gnav">
        <div className="au-gnav-inner">
          <span className="au-logo">AURO</span>
          <nav aria-label="AURO 메뉴">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#au-where" className="au-gnav-cta">
            구매처
          </a>
        </div>
      </header>

      <div className="au-lnav">
        <div className="au-lnav-inner">
          <strong>AURO Max</strong>
          <div>
            <a href="#au-highlights" className="au-lnav-link">
              개요
            </a>
            <a href="#au-specs" className="au-lnav-link">
              기술 사양
            </a>
            <a href="#au-where" className="au-buy">
              구매처 보기
            </a>
          </div>
        </div>
      </div>

      <main id="au-top">
        <section className="au-hero">
          <p className="au-new">New</p>
          <h1>AURO Max</h1>
          <p className="au-hero-sub">고요함마저, 하이파이로.</p>
          <p className="au-hero-price">₩459,000부터</p>
          <div className="au-actions">
            <a href="#au-where" className="au-pill">
              구매처 보기
            </a>
            <a href="#au-highlights" className="au-link">
              더 알아보기 <ChevronRight size={16} strokeWidth={2} />
            </a>
          </div>
          <img
            className="au-hero-img"
            src={photo("1583394838336-acd977736f90", 1600)}
            alt="AURO Max 헤드폰"
          />
        </section>

        <section className="au-tiles">
          <article className="au-tile au-tile--dark">
            <div className="au-tile-copy">
              <h2>AURO Buds Pro</h2>
              <p>주머니 속의 몰입감.</p>
              <div className="au-actions">
                <a href="#au-top" className="au-pill au-pill--sm">
                  더 알아보기
                </a>
                <a href="#au-where" className="au-pill au-pill--sm au-pill--ghost">
                  구매처 보기
                </a>
              </div>
            </div>
            <img src={photo("1606220588913-b3aacb4d2f46", 1200)} alt="" />
          </article>
          <article className="au-tile au-tile--yellow">
            <div className="au-tile-copy">
              <h2>AURO Play</h2>
              <p>컬러는 경쾌하게. 소리는 진지하게.</p>
              <div className="au-actions">
                <a href="#au-top" className="au-pill au-pill--sm au-pill--ink">
                  더 알아보기
                </a>
                <a href="#au-where" className="au-pill au-pill--sm au-pill--ghost-ink">
                  구매처 보기
                </a>
              </div>
            </div>
            <img src={photo("1505740420928-5e560c06d30e", 1200)} alt="" />
          </article>
        </section>

        <section className="au-highlights" id="au-highlights">
          <h2>하이라이트 살펴보기.</h2>
          <div className="au-highlight-row">
            {HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className={`au-highlight au-highlight--${item.tone}`}
              >
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="au-specs" id="au-specs">
          <div>
            <strong>40시간</strong>
            <p>한 번 충전으로 최대 재생 시간*</p>
          </div>
          <div>
            <strong>2배</strong>
            <p>이전 세대 대비 노이즈 캔슬링 성능*</p>
          </div>
          <div>
            <strong>5분</strong>
            <p>충전으로 최대 3시간 재생*</p>
          </div>
        </section>

        <section className="au-reasons" id="au-where">
          <h2>
            어디서 만나볼 수
            <br />
            있나요?
          </h2>
          <div className="au-reason-grid">
            {REASONS.map(({ icon: Icon, title, body }) => (
              <article key={title}>
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <strong>{title}</strong>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="au-footer">
        <p>* 재생 시간과 성능은 사용 환경과 설정에 따라 달라질 수 있습니다.</p>
        <div className="au-footer-cols">
          <div>
            <strong>제품</strong>
            <span>AURO Max</span>
            <span>AURO Buds Pro</span>
            <span>AURO Play</span>
          </div>
          <div>
            <strong>지원</strong>
            <span>A/S 안내</span>
            <span>보증 정책</span>
            <span>카카오톡 상담</span>
          </div>
          <div>
            <strong>AURO</strong>
            <span>브랜드 이야기</span>
            <span>성수 쇼룸</span>
            <span>인스타그램</span>
          </div>
        </div>
        <p className="au-footer-legal">
          Copyright © 2026 AURO · PALETTE 원페이지 디자인 샘플이며 실제
          제품이 아닙니다.
        </p>
      </footer>
    </div>
  );
}
