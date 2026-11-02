# Palette — Design Specification

다른 프로젝트에 동일한 비주얼 언어를 이식하기 위한 **구현 단위 디자인 스펙**입니다.  
토큰 → 타이포 → 컴포넌트 → 섹션 → 인터랙션 → 반응형 순으로 정리했습니다.

---

## 1. Design Direction (한 줄 요약)

| 축 | 방향 |
|---|---|
| Mood | 에디토리얼 × 스튜디오 랜딩. 크림 배경 + 라벤더 섹션 + 퍼플 액센트 |
| Hero | 브랜드명(PALETTE)이 뷰포트의 절대적 주인공. 헤드라인보다 큼 |
| Layout | 단일 스크롤 랜딩. 카드는 **상호작용 컨테이너에만** 사용 |
| Preview | 브라우저 프레임 안 미니 사이트 + 살짝 기울어진(−1deg) 실물감 |
| Motion | hover lift, 컬러 전환 fade, toast slide-up. 과한 glow/파티클 없음 |

**피해야 할 AI 기본 룩과 이 디자인의 관계**

- 퍼플 액센트는 쓰지만, 배경은 크림(`#faf9f6`) + 라벤더 블록 교대 — 퍼플 그라데이션 풀배경 아님
- 세리프(Georgia)는 **미리보기 사이트(CoffeeSite) 안**에만. 앱 UI는 Pretendard
- 보더 라디우스는 pill 버튼(999px)과 카드(12–22px)를 혼용. 전면 rounded-full 남발 금지

---

## 2. Tech Stack (이 레포 기준)

```
React 19 + Vite 8 + TypeScript
Tailwind CSS v4 (@tailwindcss/vite) — 유틸보다 커스텀 CSS 클래스 중심
폰트: Pretendard (CDN import)
스타일 엔트리: src/index.css
UI: src/App.tsx 단일 파일 (컴포넌트 인라인)
```

이식 시 Tailwind는 필수가 아님. CSS 변수 + 클래스만 옮겨도 동일 룩 가능.

---

## 3. Design Tokens

### 3.1 Color

```css
:root {
  --cream:    #faf9f6;   /* page background */
  --lavender: #eae4f5;   /* section tint (results, inquiry) */
  --purple:   #7952b3;   /* brand accent / CTA / active */
  --ink:      #24212a;   /* primary text */
  --muted:    #77717e;   /* secondary text */
  --border:   #e8e5eb;   /* hairline borders */
  --white:    #fff;
}
```

| 역할 | 값 | 사용처 |
|---|---|---|
| Page BG | `--cream` | `body`, `main` |
| Section BG | `--lavender` | `.results`, `.inquiry` |
| Brand / CTA | `--purple` | 로고 점, primary button, active border, eyebrow 숫자 |
| Primary text | `--ink` | 본문, 헤딩, 로고 |
| Secondary text | `--muted` | description, small, note |
| Border | `--border` | cards, steps, browser chrome |
| Purple hover | `#69439f` | `.button--primary:hover` |
| Focus ring | `rgba(121, 82, 179, .28)` | `button:focus-visible` outline 3px |
| Live dot | `#50a36d` + glow `rgba(80,163,109,.12)` | 미리보기 상태 표시 |
| Soft white glass | `rgba(255,255,255,.58~.68)` | steps, category, palette panel |

**팔레트 미리보기용 CSS 변수** (선택 팔레트에 따라 런타임 주입)

```css
--c-base:   /* colors[0] — 배경 75% */
--c-sub:    /* colors[1] — 텍스트/보조 20% */
--c-accent: /* colors[2] — CTA/포인트 5% */
```

샘플 팔레트:

| ID | Name | Base | Sub | Point |
|---|---|---|---|---|
| warm | Warm Coffee | `#F8F2E9` | `#795A45` | `#B56A3B` |
| botanical | Botanical | `#F7F7EF` | `#52664E` | `#A67C52` |
| bistro | Modern Bistro | `#F7F5F1` | `#30343A` | `#C45D3D` |

### 3.2 Typography

**앱 UI (Palette 서비스)**

```
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
font-synthesis: none;
color: var(--ink);
```

| 토큰 | Size | Weight | Tracking | Line-height | 용도 |
|---|---|---|---|---|---|
| Hero brand | `clamp(92px, 13.5vw, 194px)` | 800 | `-0.085em` | `0.78` | `PALETTE` |
| Hero brand (mobile) | `21vw` | 800 | `-0.09em` | `0.82` | |
| Hero statement h2 | `clamp(30px, 3vw, 43px)` | 630 | `-0.055em` | `1.2` | 히어로 질문 |
| Section h2 | `clamp(38px, 4vw, 56px)` | 630 | `-0.055em` | `1.15` | 섹션 타이틀 |
| Section h2 (mobile) | `36–38px` | 630 | | | |
| Inquiry h2 | `34px` / mobile `29px` | 630 | | `1.25` | |
| Body / description | `14–16px` | 400 | | `1.7–1.75` | muted |
| Button | `15px` | 650 | | | primary/secondary |
| Logo | `25px` / mobile `22px` | 750 | `-0.9px` | `1` | |
| Eyebrow | `11px` | 700 | `1.8px` | | `02 CATEGORY` |
| Hero kicker | `8px` | 750 | `0.12em` | | 상단 센터 라벨 |
| Hero meta | `8px` | 750 | `0.04em` | | COLOR STUDIO / SEOUL |
| Nav | `10px` | 700 | `0.04em` | | header links |
| Caption / note | `10–12px` | 500–700 | | | |

공통 헤딩 규칙:

```css
.hero h1,
.section-heading h2,
.detail-intro h2,
.inquiry h2 {
  margin: 0;
  letter-spacing: -0.055em;
  font-weight: 630;
}
```

**미리보기 사이트 (CoffeeSite) — 에디토리얼 세리프**

```
Display / brand: Georgia, 'Times New Roman', serif
UI labels: Pretendard
```

| 요소 | Font | Size | Notes |
|---|---|---|---|
| Nav brand | Georgia | 15px (mini 9px) | line-height `.88`, 2줄 |
| Hero h3 | Georgia | `clamp(25px, 3.2vw, 46px)` | weight 500, tracking `-0.04em` |
| Section h4 | Georgia | 25–28px | weight 500 |
| About mark "M" | Georgia | 90px | opacity `.1` |
| Labels (small) | Pretendard | 8px | tracking `1.6px`, color accent, weight 750 |
| Body p | Pretendard | 11px | opacity `.75` |
| CTA | Pretendard | 9px | accent fill, white text |

### 3.3 Spacing & Layout

```
Content max-width: 1240px
Gutter desktop:    calc(100% - 64px) → 좌우 32px
Gutter mobile:     calc(100% - 40px) → 좌우 20px
Hero content width: min(100%, 1010px)  /* brand 아래 statement/demo */
Section padding Y:  90–145px (results 130, color-detail 135)
Breakpoint:         900px
```

```css
.header-inner,
.section-wrap {
  width: min(1240px, calc(100% - 64px));
  margin: 0 auto;
}
```

### 3.4 Radius

| 요소 | Radius |
|---|---|
| Primary / secondary button | `999px` (pill) |
| Toast | `999px` |
| Browser frame (desktop base) | `22px` → editorial override로 `0` |
| Preview frame | `19px` |
| Palette panel | `19px` |
| Inquiry block | `24px` / mobile `20px` |
| Category card | `16px` / mobile `14px` |
| Demo tab | `12px` |
| Color swatch block | `11px` |
| Palette card | `13px` |
| Category arrow circle | `50%` |
| Inquiry mark | `45px 45px 12px 12px` (알약형) |

### 3.5 Shadow

```css
/* Primary CTA */
box-shadow: 0 9px 25px rgba(121, 82, 179, .2);

/* Browser / preview (강) */
box-shadow: 0 25px 70px rgba(42, 34, 52, .1);
box-shadow: 0 22px 55px rgba(55, 41, 69, .11);

/* Card hover (약) */
box-shadow: 0 16px 40px rgba(55, 44, 66, .08);

/* Active palette */
box-shadow: 0 5px 20px rgba(76, 55, 98, .08);

/* Color guide */
box-shadow: 0 15px 50px rgba(57, 48, 65, .06);

/* Inquiry mark */
box-shadow: 0 15px 35px rgba(76, 52, 105, .1);

/* Toast */
box-shadow: 0 14px 40px rgba(0, 0, 0, .2);

/* Hero brand pseudo-depth */
text-shadow: 0 4px 0 rgba(36, 33, 42, .12);
```

원칙: 퍼플 tint 그림자 위주. 다층 그림자/글로우 금지.

### 3.6 Motion

```css
transition: transform .2s ease, background .2s ease, border-color .2s ease;
/* coffee site color swap */
transition: background .35s ease, color .35s ease;
/* toast */
transition: all .3s ease;
```

| 인터랙션 | 동작 |
|---|---|
| Button hover | `translateY(-2px)` |
| Category card hover | `translateY(-5px)` + border `#cfc3e1` + shadow |
| Category arrow hover | fill purple, icon white |
| Demo browser | `rotate(-1deg)` (mobile `-1.5deg`), origin `center bottom` |
| Palette / coffee color | 0.35s fade on CSS vars |
| Toast show | opacity 0→1, `translate(-50%, 90px)` → `translate(-50%, 0)` |
| Toast duration | 2200ms 후 자동 숨김 |
| Scroll | `html { scroll-behavior: smooth }` |
| Reduced motion | 모든 transition `0.01ms`, scroll `auto` |

---

## 4. Global Base

```css
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; background: var(--cream); }
button { font: inherit; }
button:focus-visible {
  outline: 3px solid rgba(121, 82, 179, .28);
  outline-offset: 3px;
}
img { display: block; width: 100%; }
main { overflow: hidden; }
.mobile-only { display: none; } /* ≤900px에서 block */
```

폰트 로드:

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
```

---

## 5. Page Architecture (스크롤 순서)

```
<main>
  1. Header          — absolute overlay, h=80
  2. Hero            — brand mega type + statement + live preview
  3. Steps           — 01/02/03 이용 방법 바
  4. Categories      — 업종 선택 그리드
  5. Results         — lavender BG, 팔레트 + 풀 미리보기
  6. Color Detail    — 컬러 구성 + 복사
  7. Inquiry         — lavender CTA 블록 (가격/문의)
  8. Footer
  9. Toast           — fixed
</main>
```

각 섹션 **한 가지 일**만: 소개 → 방법 → 선택 → 결과 → 상세 → 전환(문의).

---

## 6. Components

### 6.1 Logo

```
Palette<span>.</span>
```

- 텍스트 버튼, border/bg 없음
- `font-size: 25px`, `font-weight: 750`, `letter-spacing: -0.9px`
- 점(`.`)만 `color: var(--purple)`
- 클릭 → `scrollTo({ top: 0, behavior: 'smooth' })`
- `aria-label="Palette 홈"`

### 6.2 Button

Variants: `primary` | `secondary` | `text`

```css
.button {
  border: 0;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;              /* 텍스트 + Icon */
  font-weight: 650;
  font-size: 15px;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}
.button:hover { transform: translateY(-2px); }

.button--primary {
  background: var(--purple);
  color: white;
  box-shadow: 0 9px 25px rgba(121, 82, 179, .2);
}
.button--primary:hover { background: #69439f; }

.button--secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--ink);
  box-shadow: none;
}

.button--text {
  background: transparent;
  color: var(--ink);
  min-height: 44px;
  padding: 0 4px;
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.button--text:hover { transform: none; color: var(--purple); }
```

아이콘은 CTA 오른쪽에 `Icon name="arrow"` 등, size 기본 20 / 작은 CTA 14–18.

### 6.3 Icon

인라인 SVG 스프라이트 패턴.

```
stroke: currentColor
strokeWidth: 1.7
strokeLinecap / strokeLinejoin: round
fill: none
viewBox: 0 0 24 24
aria-hidden: true
```

이름: `arrow`, `down`, `check`, `copy`, `cup`, `bag`, `leaf`, `cross`, `cursor`, `spark`

### 6.4 Eyebrow (섹션 라벨)

```
<p class="eyebrow"><span>02</span> CATEGORY</p>
```

```css
.eyebrow {
  margin: 0 0 26px;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 1.8px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
}
.eyebrow span { color: var(--purple); }
.eyebrow:after {
  content: "";
  height: 1px;
  width: 34px;
  background: var(--border);
}
```

패턴: `[번호] LABEL ———` (숫자만 퍼플, 뒤에 hairline)

### 6.5 Section Heading

```html
<div class="section-heading">
  <p class="eyebrow">...</p>
  <h2>타이틀<br class="mobile-only" /> 줄바꿈</h2>
  <p>보조 설명 한 문장</p>
</div>
```

- `max-width: 600px` (result 변형은 full + 2열 그리드)
- h2 아래 p: muted, 15px, line-height 1.7, margin-top 22px

---

## 7. Sections (상세)

### 7.1 Header

```
.site-header
  position: absolute; inset: 0 0 auto; z-index: 20; height: 80px
.header-inner
  flex; space-between; align center
.header-nav
  gap: 28px (mobile 16)
  button: 10px / weight 700 / tracking .04em / transparent
  hover → purple
```

메뉴: `이용 방법` (`.steps`로 smooth scroll), `컬러 찾기` (카테고리로)

모바일: header height `68px`, logo `22px`.

### 7.2 Hero — Editorial Composition

**첫 뷰포트 구성 (이 순서만):**

1. kicker: `BRAND COLOR RECOMMENDATION` (센터, 8px caps)
2. brand: `PALETTE` (초대형, 센터)
3. meta row: `COLOR STUDIO / SEOUL` ↔ `PERSONALIZED FOR YOUR BRAND`
4. statement: 좌 h2 질문 / 우 description + CTA (상단 ink border)
5. live preview: 브라우저 프레임 + 미니 CoffeeSite + compact palette tabs

```css
.hero {
  min-height: 1040px;
  padding: 188px max(32px, calc((100vw - 1240px)/2)) 0;
  display: block; /* grid 아님 — editorial override */
}
.hero-brand {
  font-size: clamp(92px, 13.5vw, 194px);
  font-weight: 800;
  line-height: .78;
  text-align: center;
  letter-spacing: -.085em;
  transform: translateX(-.025em);
  text-shadow: 0 4px 0 rgba(36, 33, 42, .12);
  color: #121114; /* ink보다 한 톤 더 진함 */
}
.hero-statement {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  width: min(100%, 1010px);
  margin: 112px auto 0;
  padding-top: 26px;
  border-top: 1px solid var(--ink);
}
```

**Demo browser**

```
.demo-browser
  border: 1px solid var(--border)
  border-radius: 0          /* editorial: 각진 프레임 */
  overflow: hidden
  background: white
  box-shadow: 0 25px 70px ...
  transform: rotate(-1deg)
  transform-origin: center bottom

.browser-bar
  height: 34px
  3 dots (5×5, #d9d6dd) + URL "momentcoffee.kr" (7px, #aaa5ae)
```

**Compact palette tabs (`.demo-tabs`)**

- 3등분 flex, height 48, radius 12
- 좌: A/B/C 라벨, 우: mini circular swatches (22px, 겹침 `-5px`, white ring)
- active: purple border + inset 1px purple ring

모바일 hero:
- brand `21vw`, statement 스택, CTA full width
- mini coffee: 이미지 위 카피 오버레이 + 하단 그라데이션
- hamburger (2줄) 표시, links 숨김
- browser `rotate(-1.5deg)`, width `calc(100% + 20px)`

### 7.3 Steps

```
3열 그리드, border 1px, bg rgba(255,255,255,.58)
각 step: number(purple 10px) | title+desc | arrow icon(#c5c1c9)
min-height: 112px
```

모바일: 세로 스택, 화살표 `rotate(90deg)`, border-bottom 구분.

콘텐츠:
1. 업종 선택
2. 컬러 추천
3. 실제 적용 확인

### 7.4 Categories

```
.category-grid: 3열 / gap 14 / margin-top 55
.category-card:
  grid: 78px | 1fr | 28px
  min-height 178, padding 26, radius 16
  bg rgba(255,255,255,.66), border
  hover: lift -5px
```

**category-visual** (좌측 아이콘 블록)

- 64×78, 장식 원 2개(반투명 흰)
- 색상 변형:
  - 0: `#efe9df`
  - 1: `#e5e0ed`
  - 2: `#e5eae2`
  - 3: `#e4e9eb`
  - 4: `#e1e5ed`
  - 5: `#eee5e1`

카테고리 데이터:

| Icon | Name | Examples |
|---|---|---|
| cup | 식음료 | 카페, 음식점, 베이커리 |
| bag | 쇼핑·커머스 | 패션, 잡화, 쇼핑몰 |
| leaf | 뷰티·웰니스 | 미용실, 네일숍, 필라테스 |
| cross | 의료·전문 서비스 | 병원, 치과, 전문 사무소 |
| cursor | IT·디지털 | 앱, SaaS, 웹 서비스 |
| spark | 기타 | 교육, 공방, 스튜디오 |

모바일: 2열, 카드 세로 스택(비주얼 full width 92px), arrow 숨김.

하단 note: `회원가입 없이, 선택 한 번이면 충분해요.` (센터, 12px muted)

### 7.5 Results

```
background: var(--lavender)
padding: 130px 0

.result-layout: grid 315px | 1fr, gap 30
.palette-panel: sticky top 24, glass white, radius 19, padding 22
.preview-panel: live label + framed CoffeeSite (full, not mini)
```

**Palette card**

```
이름 + mood + check circle
swatches grid: 1.5fr 1fr .7fr (Base / Sub / Point 비율 시각화)
height 39, radius 7
active: purple border + soft shadow
```

**Preview label**

- 좌: green live-dot + `실제 적용 미리보기`
- 우: `{palette.name} 적용 중`

모바일: 팔레트 3열 가로 그리드, sticky 해제, preview full-bleed(radius 0).

### 7.6 CoffeeSite (미리보기 미니 브랜드 사이트)

CSS 변수로 테마 전환되는 **데모 홈페이지**. 서비스 UI와 시각적으로 분리(세리프 + 팔레트 컬러).

구조:

```
.coffee-nav     — brand / ABOUT MENU SPACE / (mobile hamburger)
.coffee-hero    — 46% copy | 54% image
.coffee-menu    — 2열 메뉴 카드 (mini에서는 숨김)
.coffee-about   — sub 색 배경, 번호 02 + 카피 + 거대 M
.coffee-visit   — 센터 CTA
```

이미지: Unsplash (카페 인테리어/컵), `filter: saturate(.82~.78)`로 톤 다운.

비율 가이드(컬러 사용):

- Base 75% → 페이지 배경
- Sub 20% → 텍스트, about 섹션 배경
- Point 5% → label, CTA 버튼

`mini` prop: hero만 렌더, 스케일 다운된 타이포/패딩 (히어로 데모용).

### 7.7 Color Detail

```
2열: intro | guide card
비율 라벨: 기본 75% / 보조 20% / 강조 5%
HEX 표시 + 전체 복사 CTA
```

데스크톱: 컬러 3열 큰 칩(height 105).  
모바일: 행 리스트(48px 칩 + HEX + 개별 copy 버튼).

복사 → clipboard + toast.

### 7.8 Inquiry (전환 CTA)

```
bg lavender, radius 24, padding 60 70
grid: 110px | 1fr | 255px
장식: 우측 큰 원 outline (::after)
좌: inquiry-mark (흰 알약 + "P" Georgia + 장식 원)
중: PALETTE STUDIO + h2 + 설명
우: 가격 라벨 + "30만 원" + primary button
우 영역 border-left: rgba(121,82,179,.17)
```

모바일: 세로 스택, action은 border-top으로 구분, CTA full width.

### 7.9 Footer

```
3열: Logo | tagline | ©
border-top, min-height 190
tagline: "브랜드의 첫인상을 만드는 가장 쉬운 방법."
© 2025 Palette Studio
```

모바일: 세로 센터 정렬.

### 7.10 Toast

```
fixed, bottom 26, left 50%, z-index 50
ink bg, white text, pill
좌측 purple circle + check icon
기본: opacity 0 + translateY(90px)
.is-visible: opacity 1 + translateY(0)
pointer-events: none
```

---

## 8. Interaction / State Map

| 상태 | 트리거 | 결과 |
|---|---|---|
| `selected` palette | tab/card 클릭 | CoffeeSite CSS vars 갱신, active 스타일, preview label |
| `category` | category card 클릭 | 결과 섹션 스크롤 + 타이틀 `{업종}에 어울리는…` |
| `toast` | HEX/전체 복사 | 2.2초 노출 |
| Header CTA | 컬러 찾기 | categories로 scroll |
| Logo | 클릭 | top scroll |
| 이용 방법 | 클릭 | `.steps` scroll |

스크롤 타겟: `categoryRef`, `resultRef`, `.steps` querySelector.

---

## 9. Responsive Rules (≤900px 요약)

| 영역 | Desktop | Mobile |
|---|---|---|
| Gutter | 32px | 20px |
| Hero layout | editorial block | same, tighter padding |
| Hero statement | 2-col | stack |
| Steps | 3-col | column, arrows rotate |
| Categories | 3-col | 2-col, vertical cards |
| Results | sidebar + preview | stack, 3 palette cols |
| Color rows | 3 chips | list rows + copy btn |
| Inquiry | 3-col | column |
| Footer | 3-col | column center |
| Coffee mini | split hero | image + overlay copy |
| Coffee full preview | split | column-reverse, hamburger |

---

## 10. Accessibility

- Logo / 메뉴 / copy 버튼에 `aria-label`
- Palette / demo tab: `aria-pressed={active}`
- Toast: `role="status"`
- Icons: `aria-hidden`
- Focus: purple translucent outline 3px / offset 3px
- `prefers-reduced-motion: reduce` 지원

---

## 11. Content Tone (카피 가이드)

- 존댓말, 짧은 문장, 줄바꿈으로 리듬
- 과장·이모지·느낌표 남발 없음
- Eyebrow는 영어 CAPS + 숫자 (`02 CATEGORY`)
- 본문/CTA는 한국어
- 미리보기 사이트는 별도 브랜드 보이스(시적·느린 카페 톤)

예시 패턴:

```
당신의 브랜드,
어떤 색으로 기억되고 싶나요?

업종만 선택하세요. 어울리는 컬러 조합을 추천하고,
실제 홈페이지에 적용된 모습까지 보여드릴게요.
```

---

## 12. Do / Don't (이식 체크리스트)

**Do**

- [ ] 크림 페이지 + 라벤더 섹션 교대로 리듬 만들기
- [ ] 히어로에서 브랜드명을 헤드라인보다 크게
- [ ] CTA는 pill + purple + soft purple shadow
- [ ] 미리보기는 살짝 기울인 브라우저 프레임으로 “실물감”
- [ ] 팔레트 비율을 Base/Sub/Point(≈75/20/5)로 고정
- [ ] 카드는 클릭 가능한 선택 UI에만
- [ ] Pretendard(UI) / Georgia(데모 사이트 display) 분리

**Don't**

- [ ] 퍼플→인디고 풀스크린 그라데이션 배경
- [ ] 히어로에 통계/뱃지/플로팅 칩 올리기
- [ ] 카드 남발(정보 블록을 전부 카드로 감싸기)
- [ ] 다층 글로우 / neon / glassmorphism 과다
- [ ] Inter/Roboto/system만으로 브랜드 타이포 처리
- [ ] 히어로 이미지를 inset rounded card로 축소

---

## 13. 다른 프로젝트 적용 순서

1. **토큰 이식** — `:root` 변수 + Pretendard import + base reset
2. **타이포 스케일** — hero brand / section h2 / eyebrow / button 클래스
3. **원자 컴포넌트** — Logo, Button, Icon, Eyebrow, SectionHeading
4. **레이아웃 쉘** — `section-wrap` (1240), header absolute, footer
5. **히어로 에디토리얼** — mega brand → meta → statement border → demo
6. **인터랙션 섹션** — steps / selectable cards / sticky panel
7. **테마 프리뷰** (옵션) — CSS vars(`--c-base/sub/accent`)로 데모 사이트 컬러링
8. **반응형** — 900px 단일 브레이크포인트부터 맞춘 뒤 필요 시 세분
9. **모션·a11y** — hover lift, toast, reduced-motion

핵심 CSS는 `src/index.css`, 구조·상태는 `src/App.tsx`를 원본으로 참고하면 됩니다.

---

## 14. Quick Token Snippet (복붙용)

```css
:root {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  color: #24212a;
  background: #faf9f6;
  font-synthesis: none;
  --cream: #faf9f6;
  --lavender: #eae4f5;
  --purple: #7952b3;
  --ink: #24212a;
  --muted: #77717e;
  --border: #e8e5eb;
  --white: #fff;
}
```

```css
/* Primary CTA */
.button--primary {
  background: var(--purple);
  color: white;
  border-radius: 999px;
  min-height: 52px;
  padding: 0 24px;
  font-weight: 650;
  font-size: 15px;
  box-shadow: 0 9px 25px rgba(121, 82, 179, .2);
}
.button--primary:hover {
  background: #69439f;
  transform: translateY(-2px);
}
```

```css
/* Mega brand (hero) */
.hero-brand {
  font-size: clamp(92px, 13.5vw, 194px);
  font-weight: 800;
  line-height: .78;
  letter-spacing: -.085em;
  text-align: center;
  color: #121114;
  text-shadow: 0 4px 0 rgba(36, 33, 42, .12);
}
```

---

*Source of truth: `src/index.css` + `src/App.tsx` (Palette brand color recommendation service)*
