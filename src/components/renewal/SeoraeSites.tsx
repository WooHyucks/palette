/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Clock, MapPin, Menu, Phone } from "lucide-react";
import { photo } from "@/components/samples/media";

export const SEORAE = {
  brand: "서래베이커리",
  brandEn: "SEORAE",
  phone: "02-123-4567",
  address: "서울시 서초구 서래마을길 12",
  hours: "매일 08:00 – 21:00",
  hero: photo("1509440159596-0249088772ff", 2000),
  store: photo("1517433670267-08bbd4be890f", 1400),
  menu: [
    { name: "시그니처 크루아상", price: "4,800원", tag: "BEST", image: "1555507036-ab1f4038808a" },
    { name: "호밀 사워도우", price: "7,500원", tag: "72H", image: "1549931319-a545dcf3bc73" },
    { name: "시나몬 롤", price: "4,500원", tag: "NEW", image: "1509365465985-25d11c17e812" },
    { name: "초코칩 쿠키", price: "3,200원", tag: "", image: "1558961363-fa8fdf82db35" },
  ],
} as const;

const TEL = `tel:${SEORAE.phone.replaceAll("-", "")}`;

export function SeoraeBeforeSite() {
  return (
    <div className="sb">
      <div className="sb-page">
        <div className="sb-util">
          <span>즐겨찾기 추가 | 시작페이지로 설정</span>
          <span>HOME | 로그인 | 회원가입 | 사이트맵</span>
        </div>

        <header className="sb-header">
          <div className="sb-logo">
            <strong>서래베이커리</strong>
            <small>Seorae Bakery &amp; Cafe</small>
          </div>
          <div className="sb-header-side">
            <div className="sb-search">
              <span />
              <button type="button" tabIndex={-1}>
                검색
              </button>
            </div>
            <p>
              주문전화 <b>{SEORAE.phone}</b>
            </p>
          </div>
        </header>

        <nav className="sb-gnb" aria-label="기존 메뉴">
          {["회사소개", "제품소개", "매장안내", "단체주문", "고객센터", "커뮤니티"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </nav>

        <section className="sb-visual">
          <img src={photo("1509440159596-0249088772ff", 1000, 300)} alt="" />
          <div className="sb-visual-copy">
            <strong>정성을 다해 굽습니다</strong>
            <em>BEST QUALITY FRESH BAKERY - Since 2009</em>
          </div>
          <span className="sb-burst">
            OPEN
            <br />
            EVENT!
          </span>
          <div className="sb-dots">
            <i className="is-on">1</i>
            <i>2</i>
            <i>3</i>
          </div>
        </section>

        <div className="sb-body">
          <aside className="sb-box">
            <h3>고객센터</h3>
            <div className="sb-box-body">
              <p className="sb-phone">{SEORAE.phone}</p>
              <p>평일/주말 08:00~21:00</p>
              <p>단체주문은 3일전 예약 필수</p>
              <span className="sb-bevel">단체주문 안내 ▶</span>
              <span className="sb-bevel">온라인 문의 ▶</span>
            </div>
          </aside>

          <div className="sb-center">
            <div className="sb-box">
              <h3>
                공지사항 <small>more +</small>
              </h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>[공지]</b> 홈페이지 리뉴얼 오픈 이벤트 안내
                    </td>
                    <td>2014-03-02</td>
                  </tr>
                  <tr>
                    <td>
                      <b>[공지]</b> 설 연휴 휴무 안내
                    </td>
                    <td>2013-02-07</td>
                  </tr>
                  <tr>
                    <td>신제품 출시 안내 (호밀빵)</td>
                    <td>2012-11-20</td>
                  </tr>
                  <tr>
                    <td>단체주문 문의 방법 안내</td>
                    <td>2012-06-14</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sb-box">
              <h3>
                제품소개 <small>more +</small>
              </h3>
              <div className="sb-products">
                {SEORAE.menu.map((item) => (
                  <div key={item.name}>
                    <img src={photo(item.image, 220, 160)} alt="" />
                    <p>{item.name}</p>
                    <b>{item.price}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="sb-box">
            <h3>오시는 길</h3>
            <div className="sb-box-body">
              <div className="sb-map">약도 보기</div>
              <p>{SEORAE.address}</p>
              <p>지하철 고속터미널역 5번 출구 도보 10분</p>
            </div>
          </aside>
        </div>

        <footer className="sb-footer">
          <p className="sb-footer-links">
            회사소개 | <b>개인정보취급방침</b> | 이용약관 | 이메일무단수집거부
          </p>
          <p>
            상호: 서래베이커리 | 주소: {SEORAE.address} | TEL: {SEORAE.phone} |
            사업자등록번호: 000-00-00000
          </p>
          <p>Copyright ⓒ 2012 SEORAE BAKERY. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export function SeoraeAfterSite() {
  return (
    <div className="sa">
      <header className="sa-header">
        <a href="#sa-top" className="sa-logo">
          SEORAE<small>BAKERY</small>
        </a>
        <nav aria-label="서래베이커리 메뉴">
          <a href="#sa-menu">오늘의 빵</a>
          <a href="#sa-story">이야기</a>
          <a href="#sa-visit">매장 안내</a>
          <a href="#sa-visit">단체 주문</a>
        </nav>
        <a href={TEL} className="sa-pill sa-pill--light">
          픽업 예약
        </a>
        <Menu className="sa-burger" size={24} strokeWidth={1.6} aria-label="메뉴 열기" />
      </header>

      <main id="sa-top">
        <section className="sa-hero">
          <img src={SEORAE.hero} alt="갓 구운 서래베이커리의 빵" />
          <div className="sa-hero-copy">
            <p className="sa-eyebrow">DAILY BAKED IN SEORAE VILLAGE</p>
            <h1>
              매일 아침 7시,
              <br />
              갓 구운 빵이 나옵니다.
            </h1>
            <p>
              프랑스산 버터와 72시간 저온 숙성 반죽.
              <br />
              서래마을에서 매일 아침 굽습니다.
            </p>
            <div className="sa-actions">
              <a href="#sa-menu" className="sa-pill sa-pill--cream">
                오늘의 빵 보기 <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href={TEL} className="sa-pill sa-pill--ghost">
                픽업 예약하기
              </a>
            </div>
          </div>
          <div className="sa-hero-info">
            <span>
              <i aria-hidden="true" /> 지금 영업 중
            </span>
            <span>{SEORAE.hours}</span>
          </div>
        </section>

        <section className="sa-menu" id="sa-menu">
          <div className="sa-section-head">
            <p className="sa-eyebrow">SIGNATURE</p>
            <h2>오늘의 빵</h2>
          </div>
          <div className="sa-menu-row">
            {SEORAE.menu.map((item) => (
              <article key={item.name} className="sa-card">
                <div className="sa-card-media">
                  <img src={photo(item.image, 700, 860)} alt={item.name} loading="lazy" />
                  {item.tag ? <span>{item.tag}</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sa-story" id="sa-story">
          <img src={SEORAE.store} alt="서래베이커리 매장" loading="lazy" />
          <div>
            <p className="sa-eyebrow">OUR STORY</p>
            <h2>
              재료는 단순하게,
              <br />
              과정은 정성스럽게.
            </h2>
            <p>
              2009년 서래마을의 작은 오븐에서 시작했습니다. 매일 새벽 직접
              반죽하고, 그날 구운 빵은 그날 모두 판매합니다.
            </p>
          </div>
        </section>

        <section className="sa-visit" id="sa-visit">
          <h2>매장에서 만나요</h2>
          <dl>
            <div>
              <dt>
                <MapPin size={18} strokeWidth={1.7} aria-hidden="true" /> 주소
              </dt>
              <dd>{SEORAE.address}</dd>
            </div>
            <div>
              <dt>
                <Clock size={18} strokeWidth={1.7} aria-hidden="true" /> 영업시간
              </dt>
              <dd>{SEORAE.hours}</dd>
            </div>
            <div>
              <dt>
                <Phone size={18} strokeWidth={1.7} aria-hidden="true" /> 전화
              </dt>
              <dd>{SEORAE.phone}</dd>
            </div>
          </dl>
          <div className="sa-actions">
            <a href={TEL} className="sa-pill sa-pill--cream">
              전화로 예약하기
            </a>
            <a href="#sa-visit" className="sa-pill sa-pill--ghost">
              길찾기
            </a>
          </div>
        </section>
      </main>

      <footer className="sa-footer">
        <strong>SEORAE BAKERY</strong>
        <small>PALETTE 리뉴얼 디자인 예시 · 실제 고객 사례가 아닙니다.</small>
      </footer>

      <a href={TEL} className="sa-sticky">
        픽업 예약하기
      </a>
    </div>
  );
}
