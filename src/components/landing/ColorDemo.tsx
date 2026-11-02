"use client";

import { useMemo, useState } from "react";
import { WebsitePreview } from "@/components/website-preview/WebsitePreview";
import { trackEvent } from "@/lib/analytics";
import type { Palette } from "@/types/palette";

interface ColorDemoProps {
  palettes: Palette[];
}

const ROLES = [
  { key: "base" as const, label: "기본" },
  { key: "secondary" as const, label: "보조" },
  { key: "accent" as const, label: "강조" },
];

export function ColorDemo({ palettes }: ColorDemoProps) {
  const options = useMemo(() => palettes.slice(0, 3), [palettes]);
  const [selectedId, setSelectedId] = useState(options[0]?.id ?? "");
  const selected = options.find((p) => p.id === selectedId) ?? options[0];

  if (!selected) return null;

  return (
    <div className="hero-demo">
      <div className="demo-head">
        <p className="demo-label">
          <span className="live-dot" aria-hidden />
          LIVE PREVIEW
        </p>
        <small>컬러를 눌러 분위기를 바꿔보세요</small>
      </div>

      <div className="demo-stage">
        <div className="demo-browser">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>forme.kr</span>
          </div>
          <WebsitePreview
            palette={selected}
            template="commerce"
            categoryId="commerce"
            subcategoryId="fashion"
            mini
          />
        </div>
      </div>

      <div className="demo-tabs" role="radiogroup" aria-label="데모 컬러 조합">
        {options.map((palette, index) => {
          const active = palette.id === selected.id;
          return (
            <button
              key={palette.id}
              type="button"
              role="radio"
              aria-checked={active}
              className={`demo-tab ${active ? "is-active" : ""}`}
              onClick={() => {
                setSelectedId(palette.id);
                trackEvent("palette_selected", {
                  category_id: "commerce",
                  palette_id: palette.id,
                  palette_name: palette.name,
                });
              }}
            >
              <span className="demo-tab-ratio" aria-hidden>
                <i style={{ background: palette.colors.base, flex: 75 }} />
                <i style={{ background: palette.colors.secondary, flex: 20 }} />
                <i style={{ background: palette.colors.accent, flex: 5 }} />
              </span>
              <span className="demo-tab-copy">
                <em>{String.fromCharCode(65 + index)}</em>
                <strong>{palette.name}</strong>
              </span>
              <small>{palette.impression}</small>
            </button>
          );
        })}
      </div>

      <ul className="demo-codes" aria-label={`${selected.name} 컬러 코드`}>
        {ROLES.map((role) => (
          <li key={role.key}>
            <i style={{ background: selected.colors[role.key] }} aria-hidden />
            <span>{role.label}</span>
            <strong>{selected.colors[role.key]}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
