export const FUNNEL_CATEGORIES = [
  { id: "cafe", label: "카페 / 베이커리", icon: "Coffee" },
  { id: "food", label: "음식점 / 도시락", icon: "UtensilsCrossed" },
  { id: "beauty", label: "뷰티 / 네일 / 헤어", icon: "Sparkles" },
  { id: "medical", label: "병원 / 의료", icon: "HeartPulse" },
  { id: "fitness", label: "운동 / 피트니스", icon: "Dumbbell" },
  { id: "stay", label: "숙박 / 레저", icon: "House" },
  { id: "pro", label: "전문 서비스", icon: "Briefcase" },
  { id: "other", label: "기타 업종", icon: "Store" },
] as const;

export type FunnelCategoryId = (typeof FUNNEL_CATEGORIES)[number]["id"];

export function getFunnelCategory(id: string) {
  return FUNNEL_CATEGORIES.find((category) => category.id === id);
}

export function isFunnelCategoryId(id: string): id is FunnelCategoryId {
  return FUNNEL_CATEGORIES.some((category) => category.id === id);
}
