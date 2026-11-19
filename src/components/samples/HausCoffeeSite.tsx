/* eslint-disable @next/next/no-img-element */
import { Clock, MapPin, Menu, Phone } from "lucide-react";
import { photo } from "@/components/samples/media";

const MENU = [
  { name: "콜드브루", image: photo("1461023058943-07fcbe16d735", 400, 400) },
  { name: "바닐라 라떼", image: photo("1517701604599-bb29b565090c", 400, 400) },
  { name: "핸드드립", image: photo("1442512595331-e89e73853f31", 400, 400) },
  { name: "플랫 화이트", image: photo("1559496417-e7f25cb247f3", 400, 400) },
  { name: "카푸치노", image: photo("1572442388796-11668a67e53d", 400, 400) },
  { name: "시즌 컵케이크", image: photo("1486427944299-d1955d23e34d", 400, 400) },
];

function HausMark() {
  return (
    <span className="hc-mark" aria-hidden="true">
      <span>H</span>
    </span>
  );
}

export function HausCoffeeSite() {
  return (
    <div className="hc">
      <p className="hc-announce">
        가을 시즌 음료 출시 · 성수점 · 망원점 매일 07:00 – 22:00
      </p>

      <header className="hc-header">
        <div className="hc-header-left">
          <a href="#hc-top" className="hc-brand" aria-label="HAUS COFFEE 홈">
            <HausMark />
            <span>HAUS COFFEE</span>
          </a>
          <nav aria-label="HAUS COFFEE 메뉴">
            <a href="#hc-menu">메뉴</a>
            <a href="#hc-catering">단체 주문</a>
            <a href="#hc-store">매장 안내</a>
          </nav>
        </div>
        <div className="hc-header-right">
          <a href="#hc-store" className="hc-find">
            <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
            성수 · 망원
          </a>
          <a href="#hc-catering" className="hc-btn hc-btn--ink">
            단체 주문 문의
          </a>
        </div>
        <Menu className="hc-burger" size={24} strokeWidth={1.6} aria-label="메뉴 열기" />
      </header>

      <main id="hc-top">
        <section className="hc-promo hc-promo--green">
          <div className="hc-promo-copy">
            <p className="hc-eyebrow">AUTUMN SEASON</p>
            <h1>
              메이플 피칸 라떼가
              <br />
              돌아왔어요
            </h1>
            <p>고소한 피칸과 은은한 메이플. 이번 가을에만 만날 수 있어요.</p>
            <a href="#hc-menu" className="hc-btn hc-btn--outline-light">
              시즌 메뉴 보기
            </a>
          </div>
          <div className="hc-promo-media">
            <img src={photo("1509042239860-f550ce710b93", 1400)} alt="메이플 피칸 라떼" />
          </div>
        </section>

        <section className="hc-promo hc-promo--cream hc-promo--reverse" id="hc-catering">
          <div className="hc-promo-copy">
            <p className="hc-eyebrow">CATERING</p>
            <h2>
              회의·행사 커피,
              <br />
              20잔부터 배달해요
            </h2>
            <p>사무실 미팅, 촬영 현장, 작은 행사까지. 하루 전 전화 한 통이면 충분해요.</p>
            <div className="hc-promo-actions">
              <a href="#hc-catering" className="hc-btn hc-btn--green">
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
                02-000-0000
              </a>
              <a href="#hc-menu" className="hc-btn hc-btn--outline-green">
                메뉴 보기
              </a>
            </div>
          </div>
          <div className="hc-promo-media">
            <img src={photo("1495474472287-4d71bcdd2085", 1400)} alt="" />
          </div>
        </section>

        <section className="hc-menu" id="hc-menu">
          <div className="hc-menu-head">
            <h2>이번 주 추천 메뉴</h2>
            <span>매장에서 만나보세요</span>
          </div>
          <div className="hc-menu-row">
            {MENU.map((item) => (
              <a key={item.name} href="#hc-menu" className="hc-menu-item">
                <span>
                  <img src={item.image} alt="" />
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </section>

        <section className="hc-promo hc-promo--mint">
          <div className="hc-promo-copy">
            <p className="hc-eyebrow">FRIDAY 3PM</p>
            <h2>
              금요일 오후 3시,
              <br />
              아이스 음료 1+1
            </h2>
            <p>한 주의 끝, 함께 마실 사람을 데려오세요.</p>
            <a href="#hc-menu" className="hc-btn hc-btn--green">
              이벤트 보기
            </a>
          </div>
          <div className="hc-promo-media">
            <img src={photo("1517701604599-bb29b565090c", 1400)} alt="" />
          </div>
        </section>

        <section className="hc-store" id="hc-store">
          <img src={photo("1501339847302-ac426a4a7cbb", 1800)} alt="" />
          <div className="hc-store-copy">
            <h2>HAUS에서 만나요</h2>
            <p>
              <Clock size={16} strokeWidth={1.8} aria-hidden="true" /> 매일 07:00 – 22:00
            </p>
            <ul className="hc-store-list">
              <li>
                <strong>성수점</strong>
                <span>서울 성동구 연무장길 00</span>
                <a href="#hc-store">지도 보기</a>
              </li>
              <li>
                <strong>망원점</strong>
                <span>서울 마포구 포은로 00</span>
                <a href="#hc-store">지도 보기</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="hc-footer">
        <div className="hc-footer-top">
          <a href="#hc-top" className="hc-brand hc-brand--light">
            <HausMark />
            <span>HAUS COFFEE</span>
          </a>
          <div className="hc-footer-cols">
            <div>
              <strong>HAUS</strong>
              <span>브랜드 이야기</span>
              <span>원두 이야기</span>
              <span>인스타그램</span>
            </div>
            <div>
              <strong>매장</strong>
              <span>성수점</span>
              <span>망원점</span>
              <span>매일 07:00 – 22:00</span>
            </div>
            <div>
              <strong>문의</strong>
              <span>02-000-0000</span>
              <span>단체 주문</span>
              <span>카카오톡 채널</span>
            </div>
          </div>
        </div>
        <p>© 2026 HAUS COFFEE · PALETTE 원페이지 디자인 샘플이며 실제 브랜드가 아닙니다.</p>
      </footer>
    </div>
  );
}
