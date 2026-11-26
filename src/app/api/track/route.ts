const EVENTS = new Set([
  "landing_view",
  "sample_view",
  "sample_open",
  "pricing_view",
  "new_website_section_view",
  "renewal_section_view",
  "before_after_interaction",
  "renewal_demo_open",
  "inquiry_click",
  "inquiry_view",
  "inquiry_start",
  "inquiry_submit",
  "instagram_inquiry_click",
  "funnel_category_select",
  "funnel_loading_view",
  "funnel_results_view",
  "design_preview_open",
  "design_inquiry_cta_click",
  "category_selected",
  "palette_selected",
  "color_copied",
  "homepage_promo_view",
  "homepage_promo_click",
  "homepage_promo_dismiss",
]);

const STRING_LIMITS = {
  category_id: 80,
  palette_id: 80,
  palette_name: 80,
  sample_id: 40,
  design_id: 40,
  cta_location: 40,
  service_type: 20,
  source: 80,
  medium: 80,
  campaign: 80,
  contact: 80,
  business: 80,
  page_brief: 500,
} as const;

const SAMPLE_IDS = new Set(["soom", "auro", "haus-coffee"]);
const DESIGN_IDS = new Set([
  "minimal",
  "heritage",
  "editorial",
  "bold",
  "lifestyle",
  "natural",
]);
const CATEGORY_IDS = new Set([
  "cafe",
  "food",
  "beauty",
  "medical",
  "fitness",
  "stay",
  "pro",
  "other",
]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return new Response(null, { status: 400 });
  }

  const { event, device_id, properties } = body as Record<string, unknown>;
  if (typeof event !== "string" || !EVENTS.has(event)) {
    return new Response(null, { status: 400 });
  }
  if (
    typeof device_id !== "string" ||
    !/^[a-zA-Z0-9-]{8,64}$/.test(device_id)
  ) {
    return new Response(null, { status: 400 });
  }

  const eventProperties: Record<string, string | boolean> = {};
  if (properties && typeof properties === "object") {
    const props = properties as Record<string, unknown>;
    for (const name of Object.keys(STRING_LIMITS) as (keyof typeof STRING_LIMITS)[]) {
      const value = props[name];
      if (typeof value !== "string") continue;
      const cleaned = value
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
        .trim();
      if (!cleaned || cleaned.length > STRING_LIMITS[name]) continue;
      if (name === "service_type" && cleaned !== "new" && cleaned !== "renewal") continue;
      if (name === "sample_id" && !SAMPLE_IDS.has(cleaned)) continue;
      if (name === "design_id" && !DESIGN_IDS.has(cleaned)) continue;
      if (
        name === "category_id" &&
        !CATEGORY_IDS.has(cleaned) &&
        cleaned.length > 40
      ) {
        continue;
      }
      if (name === "cta_location" && !/^[a-z0-9_]{1,40}$/.test(cleaned)) continue;
      eventProperties[name] = cleaned;
    }
    if (typeof props.all === "boolean") eventProperties.all = props.all;
    if (typeof props.consent === "boolean") eventProperties.consent = props.consent;
  }

  if (event === "inquiry_submit") {
    if (!eventProperties.contact) {
      return new Response(null, { status: 400 });
    }
    if (eventProperties.consent !== true) {
      return new Response(null, { status: 400 });
    }
  }

  const key = process.env.AMPLITUDE_API_KEY;
  if (!key) {
    return new Response(null, { status: event === "inquiry_submit" ? 503 : 204 });
  }

  const result = await fetch("https://api2.amplitude.com/2/httpapi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: key,
      events: [
        {
          device_id,
          event_type: event,
          event_properties: eventProperties,
        },
      ],
    }),
  }).catch(() => undefined);

  if (process.env.NODE_ENV === "development" && result) {
    console.info("[amplitude]", result.status);
  }

  if (event === "inquiry_submit" && (!result || !result.ok)) {
    return new Response(null, { status: 502 });
  }

  return new Response(null, { status: 204 });
}
