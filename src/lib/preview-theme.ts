import type { CSSProperties } from "react";
import { readableForeground, withAlpha } from "@/lib/colors";
import type { Palette } from "@/types/palette";

export type PreviewThemeStyle = CSSProperties & {
  "--preview-base": string;
  "--preview-secondary": string;
  "--preview-accent": string;
  "--preview-text": string;
  "--preview-surface": string;
  "--preview-on-secondary": string;
  "--preview-on-accent": string;
  "--preview-muted": string;
  "--preview-secondary-soft": string;
  "--preview-accent-soft": string;
  "--preview-border": string;
};

/** 팔레트 → 미리보기 CSS 변수 (75:20:5 + 가독성) */
export function getPreviewThemeStyle(palette: Palette): PreviewThemeStyle {
  const { colors, accessibility } = palette;
  const onSecondary =
    accessibility?.onSecondary &&
    accessibility.onSecondaryContrast &&
    accessibility.onSecondaryContrast >= 3
      ? accessibility.onSecondary
      : readableForeground(colors.secondary);
  const onAccent =
    accessibility?.onAccent &&
    accessibility.onAccentContrast &&
    accessibility.onAccentContrast >= 3
      ? accessibility.onAccent
      : readableForeground(colors.accent);

  return {
    "--preview-base": colors.base,
    "--preview-secondary": colors.secondary,
    "--preview-accent": colors.accent,
    "--preview-text": colors.text,
    "--preview-surface": colors.surface,
    "--preview-on-secondary": onSecondary,
    "--preview-on-accent": onAccent,
    "--preview-muted": withAlpha(colors.text, 0.62),
    "--preview-secondary-soft": withAlpha(colors.secondary, 0.12),
    "--preview-accent-soft": withAlpha(colors.accent, 0.14),
    "--preview-border": withAlpha(colors.secondary, 0.18),
  };
}
