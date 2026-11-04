export type AnalyticsEventName =
  | "landing_view"
  | "category_selected"
  | "palette_selected"
  | "color_copied";

export interface AnalyticsPayload {
  category_id?: string;
  palette_id?: string;
  palette_name?: string;
  all?: boolean;
}

const DEVICE_KEY = "palette_device_id";

function deviceId() {
  const existing = localStorage.getItem(DEVICE_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  localStorage.setItem(DEVICE_KEY, id);
  return id;
}

/** 허용된 이벤트만 서버로 보낸다. 키는 서버 환경변수에만 둔다. */
export function trackEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined") return;

  const properties = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
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
