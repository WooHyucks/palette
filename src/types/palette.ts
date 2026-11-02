export type TemplateType =
  | "store"
  | "commerce"
  | "booking"
  | "professional"
  | "saas"
  | "general";

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  template: TemplateType;
}

export interface PaletteColors {
  base: string;
  secondary: string;
  accent: string;
  text: string;
  surface: string;
}

export interface PaletteRatio {
  base: number;
  secondary: number;
  accent: number;
}

export interface PaletteAccessibility {
  onSecondary?: string;
  onAccent?: string;
  textOnBaseContrast?: number;
  onSecondaryContrast?: number;
  onAccentContrast?: number;
}

export interface PaletteUsage {
  base?: string;
  secondary?: string;
  accent?: string;
  text?: string;
}

export interface Palette {
  id: string;
  categoryId: string;
  name: string;
  impression: string;
  colors: PaletteColors;
  ratio: PaletteRatio;
  reason: string;
  status: string;
  recommendedSubcategoryIds?: string[];
  usage?: PaletteUsage;
  accessibility?: PaletteAccessibility;
}

export interface PaletteData {
  version: string;
  note: string;
  categories: Category[];
  palettes: Palette[];
}

export type ColorRole = "base" | "secondary" | "accent";
