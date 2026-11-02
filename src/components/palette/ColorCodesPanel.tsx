"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { copyText } from "@/components/palette/ColorCopyButton";
import { formatPaletteCopyText } from "@/lib/palette";
import { trackEvent } from "@/lib/analytics";
import type { Palette } from "@/types/palette";

interface ColorCodesPanelProps {
  palette: Palette;
  onToast: (message: string) => void;
  compact?: boolean;
}

const ROLES = [
  { key: "base" as const, label: "기본 색상 75%" },
  { key: "secondary" as const, label: "보조 색상 20%" },
  { key: "accent" as const, label: "강조 색상 5%" },
];

export function ColorCodesPanel({
  palette,
  onToast,
  compact = false,
}: ColorCodesPanelProps) {
  async function handleCopy(value: string, all = false) {
    const ok = await copyText(value);
    if (ok) {
      trackEvent(all ? "all_colors_copied" : "color_copied", {
        palette_id: palette.id,
        palette_name: palette.name,
        category_id: palette.categoryId,
      });
      onToast("컬러 코드가 복사됐어요.");
    } else {
      onToast("복사에 실패했어요. HEX를 직접 선택해 주세요.");
    }
  }

  const guide = (
    <div className="color-guide-card">
      <div className="color-rows">
        {ROLES.map((role) => {
          const hex = palette.colors[role.key];
          return (
            <div className="color-row" key={role.key}>
              <i style={{ background: hex }} />
              <span>
                <small>{role.label}</small>
                <strong>{hex}</strong>
              </span>
              <button
                type="button"
                onClick={() => handleCopy(hex)}
                aria-label={`${hex} 복사`}
              >
                <Icon name="copy" size={19} />
              </button>
            </div>
          );
        })}
      </div>
      <Button onClick={() => handleCopy(formatPaletteCopyText(palette), true)}>
        전체 컬러 복사하기 <Icon name="copy" size={18} />
      </Button>
    </div>
  );

  if (compact) {
    return (
      <div>
        <p className="eyebrow" style={{ marginBottom: 14 }}>
          <span>04</span> COLOR GUIDE
        </p>
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 22,
            letterSpacing: "-0.04em",
            fontWeight: 630,
          }}
        >
          선택한 컬러 구성
        </h3>
        {guide}
      </div>
    );
  }

  return (
    <section className="color-detail section-wrap">
      <div className="detail-intro">
        <p className="eyebrow">
          <span>04</span> COLOR GUIDE
        </p>
        <h2>이 컬러 조합의 구성</h2>
        <p>{palette.reason}</p>
      </div>
      {guide}
    </section>
  );
}
