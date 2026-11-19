import type { MetadataRoute } from "next";
import { WORK_SAMPLES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://palette-beige-seven.vercel.app";
  const lastModified = "2026-11-19";

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...WORK_SAMPLES.map((sample) => ({
      url: `${base}${sample.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/renewal-demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
