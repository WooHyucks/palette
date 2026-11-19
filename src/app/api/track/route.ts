const EVENTS = new Set([
  "landing_view",
  "sample_view",
  "sample_open",
  "pricing_view",
  "new_website_section_view",
  "renewal_section_view",
  "before_after_interaction",
  "renewal_demo_open",
  "instagram_inquiry_click",
  "category_selected",
  "palette_selected",
  "color_copied",
  "homepage_promo_view",
  "homepage_promo_click",
  "homepage_promo_dismiss",
]);

const STRING_KEYS = [
  "category_id",
  "palette_id",
  "palette_name",
  "sample_id",
  "cta_location",
  "service_type",
  "source",
  "medium",
  "campaign",
] as const;

export async function POST(request: Request) {
  const key = process.env.AMPLITUDE_API_KEY;
  if (!key) return new Response(null, { status: 204 });

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
    for (const name of STRING_KEYS) {
      const value = props[name];
      if (typeof value === "string" && value.length > 0 && value.length <= 120) {
        eventProperties[name] = value;
      }
    }
    if (typeof props.all === "boolean") eventProperties.all = props.all;
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

  return new Response(null, { status: 204 });
}
