export const INSTAGRAM_URL = "https://www.instagram.com/palette_official___/";
export const PRICE_KRW = 300000;
export const PRICE_LABEL = "₩300,000";
export const PRICE_SHORT = "30만 원";

export const WORK_SAMPLES = [
  {
    id: "soom",
    label: "DESIGN SAMPLE 01",
    brand: "SOOM PILATES",
    href: "/work/soom",
    url: "soompilates.kr",
    blurb: "수업·가격·위치를 한 페이지에 담고 예약 문의로 이어지는 스튜디오 랜딩페이지.",
    tone: "Studio · Wellness",
  },
  {
    id: "auro",
    label: "DESIGN SAMPLE 02",
    brand: "AURO",
    href: "/work/auro",
    url: "auro.kr",
    blurb: "신제품 하나를 크게, 여백으로 고급스럽게 보여주는 제품 런칭 랜딩페이지.",
    tone: "Product Launch",
  },
  {
    id: "haus-coffee",
    label: "DESIGN SAMPLE 03",
    brand: "HAUS COFFEE",
    href: "/work/haus-coffee",
    url: "hauscoffee.kr",
    blurb: "시즌 메뉴·단체 주문·매장 정보를 한 페이지에 담은 카페 랜딩페이지.",
    tone: "Cafe · F&B",
  },
] as const;

export type WorkSampleId = (typeof WORK_SAMPLES)[number]["id"];
