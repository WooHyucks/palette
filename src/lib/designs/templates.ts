export const DESIGN_TEMPLATES = [
  {
    id: "minimal",
    label: "DESIGN 01",
    name: "MINIMAL",
    brand: "AURO",
    url: "auro.kr",
    blurb: "넓은 여백과 제품 중심 구성으로 고급스럽게 보여주는 미니멀 디자인.",
    tone: "Clean · Precise",
  },
  {
    id: "heritage",
    label: "DESIGN 02",
    name: "HERITAGE",
    brand: "HAUS COFFEE",
    url: "hauscoffee.kr",
    blurb: "시즌 메뉴와 매장 이야기를 크게 보여주는 따뜻한 카페 디자인.",
    tone: "Warm · Story",
  },
  {
    id: "editorial",
    label: "DESIGN 03",
    name: "EDITORIAL",
    brand: "VERDE Apothecary",
    url: "verde.store",
    blurb: "매거진처럼 읽히는 여백과 세리프 타이포의 프리미엄 디자인.",
    tone: "Premium · Serif",
  },
  {
    id: "bold",
    label: "DESIGN 04",
    name: "BOLD",
    brand: "PULSE Lab",
    url: "pulselab.kr",
    blurb: "강렬한 타이포와 대비로 에너지를 전달하는 피트니스 디자인.",
    tone: "Dynamic · Contrast",
  },
  {
    id: "lifestyle",
    label: "DESIGN 05",
    name: "LIFESTYLE",
    brand: "STAYHOUSE",
    url: "stayhouse.kr",
    blurb: "머무는 장면을 크게 보여 예약·문의로 자연스럽게 이어지는 디자인.",
    tone: "Friendly · Modern",
  },
  {
    id: "natural",
    label: "DESIGN 06",
    name: "NATURAL",
    brand: "SOOM PILATES",
    url: "soompilates.kr",
    blurb: "수업·가격·위치를 한 페이지에 담아 문의로 이어지는 스튜디오 디자인.",
    tone: "Calm · Soft",
  },
] as const;

export type DesignId = (typeof DESIGN_TEMPLATES)[number]["id"];

export function getDesignTemplate(id: string) {
  return DESIGN_TEMPLATES.find((template) => template.id === id);
}

export function isDesignId(id: string): id is DesignId {
  return DESIGN_TEMPLATES.some((template) => template.id === id);
}
