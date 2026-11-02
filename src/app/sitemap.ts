import type { MetadataRoute } from "next";
import { getAllCategories } from "@/lib/palette";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://palette.local";
  const categories = getAllCategories();

  const lastModified = "2026-10-22";

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categories.map((category) => ({
      url: `${base}/recommend?category=${category.id}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
