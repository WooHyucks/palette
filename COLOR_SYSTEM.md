# Palette — 컬러 시스템

Palette 웹서비스의 색은 **두 층**으로 나뉩니다.

1. **서비스 UI 컬러** — Palette 자체의 Soft Lavender 브랜드
2. **미리보기 팔레트 컬러** — 업종별 추천 결과 / LIVE PREVIEW에 입히는 브랜드 색

색상 HEX는 컴포넌트에 하드코딩하지 않고, 토큰(CSS 변수) 또는 `palette_curated_v3.json`에서 가져옵니다.

---

## 1. 서비스 UI 컬러 (Soft Lavender)

정의 위치: `src/app/globals.css` `:root`

| 토큰 | HEX | 역할 |
|---|---|---|
| `--cream` | `#faf9f6` | 페이지 배경 (약 75%) |
| `--lavender` | `#eae4f5` | 섹션 틴트 — results, inquiry (약 20%) |
| `--purple` | `#7952b3` | 브랜드 액센트 / CTA / active (약 5%) |
| `--ink` | `#24212a` | 본문·제목 텍스트 |
| `--muted` | `#77717e` | 보조 설명 텍스트 |
| `--border` | `#e8e5eb` | 헤어라인 보더 |
| `--white` | `#ffffff` | 카드·서피스 |

### 사용 비율 (75:20:5 가이드)

```
75%  cream     → body, main, 넓은 여백
20%  lavender  → 결과 섹션, 문의 블록
 5%  purple    → 로고 점, primary 버튼, eyebrow 숫자, active 테두리
```

### 파생 값

| 용도 | 값 |
|---|---|
| Purple hover | `#69439f` |
| Dark CTA (히어로) | `#000` 배경 + `#fff` 글자 |
| Focus ring | `rgba(121, 82, 179, .28)` outline 3px |
| Live dot | `#50a36d` + glow `rgba(80,163,109,.12)` |
| Soft glass | `rgba(255,255,255,.58~.68)` |

### 적용 예시

- Header 로고: ink 텍스트 + purple `.`
- Primary button: purple fill + soft purple shadow
- Hero Dark CTA: 검정 배경 / 흰 글자 (서비스 액센트와 구분)
- Results / Inquiry 배경: lavender
- 카테고리·팔레트 카드: white/glass + border

---

## 2. 미리보기 팔레트 컬러 (추천 결과)

데이터 원본: `src/data/palette_curated_v3.json`  
테마 매핑: `src/lib/preview-theme.ts`

### JSON `colors` 필드

| 키 | 비율 | 시각적 역할 |
|---|---|---|
| `base` | 75% | 페이지 배경, 넓은 여백 |
| `secondary` | 20% | 섹션 밴드, 구조적 면 |
| `accent` | 5% | CTA, 배지, 강조 텍스트 |
| `text` | — | 본문·제목 전경색 |
| `surface` | — | 카드·헤더 등 흰 계열 면 |

### CSS 변수 (런타임 주입)

팔레트 선택 시 `getPreviewThemeStyle(palette)`가 아래 변수를 세팅합니다.

| CSS 변수 | 출처 |
|---|---|
| `--preview-base` | `colors.base` |
| `--preview-secondary` | `colors.secondary` |
| `--preview-accent` | `colors.accent` |
| `--preview-text` | `colors.text` |
| `--preview-surface` | `colors.surface` |
| `--preview-on-secondary` | JSON `accessibility.onSecondary` 또는 대비 계산 |
| `--preview-on-accent` | JSON `accessibility.onAccent` 또는 대비 계산 |
| `--preview-muted` | text × alpha 0.62 |
| `--preview-secondary-soft` | secondary × alpha 0.12 |
| `--preview-accent-soft` | accent × alpha 0.14 |
| `--preview-border` | secondary × alpha 0.18 |

### 75:20:5 적용 규칙

```
Base (75%)
  └─ wp-site 배경, 히어로 카피 영역, 여백

Secondary (20%)
  └─ wp-band (스토리 섹션), soft band, 구조 면

Accent (5%)
  └─ PreviewButton, eyebrow, price, badge, header CTA pill
```

**하지 말 것**

- 모든 버튼을 accent로 칠하기
- secondary를 화면 절반 이상 사용하기
- 서비스 purple과 미리보기 accent를 같은 화면에 경쟁시키기  
  (미리보기 프레임 안에서는 추천 팔레트가 주인공)

### 접근성

JSON에 `accessibility`가 있으면 우선 사용합니다.

```json
"accessibility": {
  "onSecondary": "#FFFFFF",
  "onAccent": "#202420",
  "textOnBaseContrast": 12.69,
  "onSecondaryContrast": 12.21,
  "onAccentContrast": 3.86
}
```

없거나 대비가 부족하면 `readableForeground()`로 어두운/밝은 전경색을 계산합니다.

---

## 3. 두 컬러 레이어의 경계

| 영역 | 쓰는 컬러 |
|---|---|
| Palette 헤더 / 푸터 / 카테고리 / steps | 서비스 Soft Lavender |
| LIVE PREVIEW 브라우저 프레임 밖 (라벨, 탭) | 서비스 Soft Lavender |
| LIVE PREVIEW · 추천 결과 홈페이지 안 | JSON 미리보기 팔레트 |
| 문의 CTA 블록 배경 | lavender (서비스) |
| 문의 버튼 | purple 또는 dark (서비스) |

미리보기 내부 버튼은 **시각 샘플**이며 실제 결제·예약으로 연결되지 않습니다.

---

## 4. 파일 맵

```
src/app/globals.css              ← 서비스 토큰 + preview/wp 스타일
src/data/palette_curated_v3.json ← 54개 팔레트 (Single Source of Truth)
src/data/featured-palettes.ts    ← 카테고리별 초기 3개 ID만 참조
src/lib/preview-theme.ts         ← JSON → --preview-* 매핑
src/lib/colors.ts                ← HEX 검증, 대비, readableForeground
src/components/website-preview/  ← 업종 템플릿 (색은 CSS 변수만 사용)
```

---

## 5. 전환 모션

- 팔레트 변경 시 배경/텍스트/보더: **약 200ms** ease
- `prefers-reduced-motion: reduce` 시 transition 사실상 비활성

---

## 6. 빠른 체크리스트

- [ ] 새 UI 요소에 purple HEX를 직접 쓰지 말고 `var(--purple)` 사용
- [ ] 미리보기 안 색은 반드시 `--preview-*` 또는 JSON 경유
- [ ] Base / Secondary / Accent 면적 감각이 75:20:5에 가깝게 보이는지 확인
- [ ] Accent 위 텍스트는 `onAccent` 대비 확인
- [ ] Secondary 밴드 위 텍스트는 `onSecondary` 대비 확인
