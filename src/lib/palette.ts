import rawData from "@/data/palette_curated_v3.json";
import { FEATURED_PALETTE_IDS } from "@/data/featured-palettes";
import { isValidHex, normalizeHex } from "@/lib/colors";
import type {
  Category,
  Palette,
  PaletteColors,
  PaletteData,
  TemplateType,
} from "@/types/palette";

const data = rawData as PaletteData;

function assertDev(condition: unknown, message: string): void {
  if (process.env.NODE_ENV !== "production" && !condition) {
    console.warn(`[palette:data] ${message}`);
  }
}

function sanitizeColors(colors: PaletteColors, paletteId: string): PaletteColors {
  const roles: (keyof PaletteColors)[] = [
    "base",
    "secondary",
    "accent",
    "text",
    "surface",
  ];

  const next = { ...colors };
  for (const role of roles) {
    if (!isValidHex(next[role])) {
      assertDev(false, `Invalid HEX for ${paletteId}.${role}: ${next[role]}`);
      next[role] =
        role === "text"
          ? "#24212A"
          : role === "surface"
            ? "#FFFFFF"
            : role === "accent"
              ? "#7952B3"
              : role === "secondary"
                ? "#EAE4F5"
                : "#FAF9F6";
    } else {
      next[role] = normalizeHex(next[role]);
    }
  }
  return next;
}

function sanitizePalette(palette: Palette): Palette {
  return {
    ...palette,
    colors: sanitizeColors(palette.colors, palette.id),
  };
}

export function getAllCategories(): Category[] {
  assertDev(Array.isArray(data.categories), "categories must be an array");
  return data.categories;
}

export function getCategoryById(categoryId: string): Category | undefined {
  return data.categories.find((c) => c.id === categoryId);
}

export function getPalettesByCategory(categoryId: string): Palette[] {
  return data.palettes
    .filter((p) => p.categoryId === categoryId)
    .map(sanitizePalette);
}

export function getPaletteById(paletteId: string): Palette | undefined {
  const found = data.palettes.find((p) => p.id === paletteId);
  return found ? sanitizePalette(found) : undefined;
}

export function getFeaturedPalettes(categoryId: string): Palette[] {
  const all = getPalettesByCategory(categoryId);
  const featuredIds = FEATURED_PALETTE_IDS[categoryId];

  if (!featuredIds) {
    return all.slice(0, 3);
  }

  const featured = featuredIds
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is Palette => Boolean(p));

  if (featured.length < 3) {
    const remaining = all.filter((p) => !featured.some((f) => f.id === p.id));
    return [...featured, ...remaining].slice(0, 3);
  }

  return featured;
}

export function getMorePalettes(categoryId: string): Palette[] {
  const featured = getFeaturedPalettes(categoryId);
  const featuredIds = new Set(featured.map((p) => p.id));
  return getPalettesByCategory(categoryId).filter((p) => !featuredIds.has(p.id));
}

export function getTemplateForCategory(categoryId: string): TemplateType {
  return getCategoryById(categoryId)?.template ?? "general";
}

export function getCategoryDescription(categoryId: string): string {
  const map: Record<string, string> = {
    food: "카페·음식점·베이커리에 어울리는 따뜻한 조합",
    commerce: "쇼핑몰·브랜드 스토어에 어울리는 감각적인 조합",
    wellness: "살롱·웰니스에 어울리는 부드러운 조합",
    professional: "병원·전문 서비스에 어울리는 신뢰감 있는 조합",
    digital: "SaaS·앱·디지털 서비스에 어울리는 모던한 조합",
    other: "스튜디오·교육·공방 등 다양한 브랜드를 위한 조합",
  };
  return map[categoryId] ?? "브랜드에 어울리는 컬러 조합";
}

export function getPreviewBrandName(categoryId: string): string {
  const map: Record<string, string> = {
    food: "Aroma Atelier",
    commerce: "Maison Edit",
    wellness: "Lumina Studio",
    professional: "Clear Care",
    digital: "Flowspace",
    other: "Studio North",
  };
  return map[categoryId] ?? "Brand Studio";
}

export function formatPaletteCopyText(palette: Palette): string {
  const { colors, ratio, name } = palette;
  return [
    `Palette: ${name}`,
    `Base (${ratio.base}%): ${colors.base}`,
    `Sub (${ratio.secondary}%): ${colors.secondary}`,
    `Accent (${ratio.accent}%): ${colors.accent}`,
  ].join("\n");
}

export function getDataNote(): string {
  return data.note;
}
