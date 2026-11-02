export type AnalyticsEventName =
  | "landing_view"
  | "recommendation_start"
  | "category_selected"
  | "recommendation_view"
  | "palette_selected"
  | "more_palettes_clicked"
  | "color_copied"
  | "all_colors_copied"
  | "website_inquiry_clicked";

export interface AnalyticsPayload {
  category_id?: string;
  palette_id?: string;
  palette_name?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * 분석 SDK 연결 전용 훅.
 * 현재는 개발 환경에서만 콘솔에 기록한다.
 */
export function trackEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined") return;

  const event = {
    name,
    payload,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[palette:analytics]", event);
  }

  // 추후: window.gtag?.('event', name, payload) 등으로 연결
  const w = window as Window & {
    __paletteAnalytics?: Array<typeof event>;
  };
  w.__paletteAnalytics = w.__paletteAnalytics ?? [];
  w.__paletteAnalytics.push(event);
}
