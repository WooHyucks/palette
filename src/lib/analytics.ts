export type AnalyticsEventName =
  | "landing_view"
  | "sample_view"
  | "sample_open"
  | "pricing_view"
  | "new_website_section_view"
  | "renewal_section_view"
  | "before_after_interaction"
  | "renewal_demo_open"
  | "instagram_inquiry_click"
  | "category_selected"
  | "palette_selected"
  | "color_copied"
  | "homepage_promo_view"
  | "homepage_promo_click"
  | "homepage_promo_dismiss";

export interface AnalyticsPayload {
  category_id?: string;
  palette_id?: string;
  palette_name?: string;
  all?: boolean;
  sample_id?: string;
  cta_location?: string;
  service_type?: "new" | "renewal";
  source?: string;
  medium?: string;
  campaign?: string;
}

const DEVICE_KEY = "palette_device_id";

function deviceId() {
  const existing = localStorage.getItem(DEVICE_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  localStorage.setItem(DEVICE_KEY, id);
  return id;
}

function attributionFromUrl(): Pick<
  AnalyticsPayload,
  "source" | "medium" | "campaign"
> {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campaign: params.get("utm_campaign") ?? undefined,
  };
}

/** 허용된 이벤트만 서버로 보낸다. 키는 서버 환경변수에만 둔다. */
export function trackEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined") return;

  const merged = { ...attributionFromUrl(), ...payload };
  const properties = Object.fromEntries(
    Object.entries(merged).filter(([, value]) => value !== undefined),
  );

  if (process.env.NODE_ENV === "development") {
    console.info("[palette:analytics]", name, properties);
  }

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: name,
      device_id: deviceId(),
      properties,
    }),
    keepalive: true,
  }).catch(() => {});
}
