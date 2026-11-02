import type { ReactNode } from "react";
import { getPreviewThemeStyle } from "@/lib/preview-theme";
import type { Palette } from "@/types/palette";

interface PreviewShellProps {
  palette: Palette;
  children: ReactNode;
  className?: string;
}

export function PreviewShell({
  palette,
  children,
  className = "",
}: PreviewShellProps) {
  return (
    <div
      className={`wp-site ${className}`}
      style={getPreviewThemeStyle(palette)}
    >
      {children}
    </div>
  );
}

export function splitLines(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={`${line}-${i}`}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}
