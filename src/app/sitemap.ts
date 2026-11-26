import type { MetadataRoute } from "next";
import { DESIGN_TEMPLATES } from "@/lib/designs/templates";
import { WORK_SAMPLES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://palette-beige-seven.vercel.app";
  const lastModified = "2026-11-26";

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/inquiry`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...DESIGN_TEMPLATES.map((design) => ({
      url: `${base}/design/${design.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...WORK_SAMPLES.map((sample) => ({
      url: `${base}${sample.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    {
      url: `${base}/renewal-demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
