/**
 * 카테고리별 초기 추천 3개.
 * palette_curated_v3.json 팔레트 ID만 참조하며, 서로 다른 분위기가 드러나도록 선정.
 */
export const FEATURED_PALETTE_IDS: Record<string, readonly [string, string, string]> = {
  food: ["food-curated-01", "food-curated-04", "food-curated-05"],
  commerce: ["commerce-curated-01", "commerce-curated-04", "commerce-curated-06"],
  wellness: ["wellness-curated-01", "wellness-curated-03", "wellness-curated-09"],
  professional: [
    "professional-curated-01",
    "professional-curated-02",
    "professional-curated-09",
  ],
  digital: ["digital-curated-01", "digital-curated-02", "digital-curated-03"],
  other: ["other-curated-01", "other-curated-02", "other-curated-04"],
};
