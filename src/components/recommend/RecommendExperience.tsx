"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ColorCodesPanel } from "@/components/palette/ColorCodesPanel";
import { WebsitePreview } from "@/components/website-preview/WebsitePreview";
import { WebsiteInquiryCTA } from "@/components/conversion/WebsiteInquiryCTA";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Toast } from "@/components/ui/Toast";
import { getDefaultSubcategoryId } from "@/data/preview-content";
import { useToast } from "@/hooks/useToast";
import { trackEvent } from "@/lib/analytics";
import type { Category, Palette, TemplateType } from "@/types/palette";

interface RecommendExperienceProps {
  category: Category;
  featured: Palette[];
  more: Palette[];
  template: TemplateType;
  totalCount: number;
}

function PaletteCard({
  palette,
  selected,
  onSelect,
}: {
  palette: Palette;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      className={`palette-card ${selected ? "is-active" : ""}`}
      onClick={() => onSelect(palette.id)}
      aria-pressed={selected}
    >
      <span className="palette-card__top">
        <span>
          <strong>{palette.name}</strong>
          <small>{palette.impression}</small>
        </span>
        <i className="select-indicator">
          {selected && <Icon name="check" size={15} />}
        </i>
      </span>
      <span className="swatches">
        <i style={{ background: palette.colors.base }}>
          <small>Base</small>
        </i>
        <i style={{ background: palette.colors.secondary }}>
          <small>Sub</small>
        </i>
        <i style={{ background: palette.colors.accent }}>
          <small>Point</small>
        </i>
      </span>
    </button>
  );
}

export function RecommendExperience({
  category,
  featured,
  more,
  template,
  totalCount,
}: RecommendExperienceProps) {
  const [selectedId, setSelectedId] = useState(
    featured[0]?.id ?? more[0]?.id ?? "",
  );
  const [showMore, setShowMore] = useState(false);
  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">("desktop");
  const [subcategoryId, setSubcategoryId] = useState(
    () => getDefaultSubcategoryId(category.id),
  );
  const { message, showToast } = useToast();

  const allVisible = useMemo(
    () => (showMore ? [...featured, ...more] : featured),
    [featured, more, showMore],
  );

  const selected =
    allVisible.find((p) => p.id === selectedId) ??
    featured[0] ??
    more[0];

  useEffect(() => {
    trackEvent("recommendation_view", { category_id: category.id });
  }, [category.id]);

  if (!selected) {
    return (
      <div className="section-wrap" style={{ padding: "80px 0" }}>
        <div className="section-heading">
          <h2>추천 팔레트가 없어요</h2>
          <p>다른 업종을 선택해 주세요.</p>
        </div>
        <Link href="/#categories" className="button button--primary">
          업종 다시 선택하기
        </Link>
      </div>
    );
  }

  function handleSelect(paletteId: string) {
    setSelectedId(paletteId);
    const palette = [...featured, ...more].find((p) => p.id === paletteId);
    trackEvent("palette_selected", {
      category_id: category.id,
      palette_id: paletteId,
      palette_name: palette?.name,
    });
  }

  return (
    <div className="recommend-shell">
      <section className="results">
        <div className="result-intro section-wrap">
          <div className="section-heading section-heading--result">
            <p className="eyebrow">
              <span>03</span> YOUR PALETTE
            </p>
            <h2>
              {category.name}에 어울리는
              <br />
              {totalCount}가지 컬러 조합을 찾았어요.
            </h2>
            <p>
              마음에 드는 색상을 선택하고,
              <br className="mobile-only" /> 실제 홈페이지에 적용된 모습을
              확인해 보세요.
            </p>
          </div>

          <div
            className="subcategory-bar"
            role="group"
            aria-label="세부 업종 선택"
          >
            {category.subcategories.map((sub) => (
              <button
                key={sub.id}
                type="button"
                className={`subcategory-chip ${subcategoryId === sub.id ? "is-active" : ""}`}
                onClick={() => setSubcategoryId(sub.id)}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>

        <div className="result-layout section-wrap">
          <aside className="palette-panel">
            <div className="panel-head">
              <span>추천 팔레트</span>
              <small>3가지 조합</small>
            </div>
            <div className="palette-list">
              {featured.map((palette) => (
                <PaletteCard
                  key={palette.id}
                  palette={palette}
                  selected={selected.id === palette.id}
                  onSelect={handleSelect}
                />
              ))}
            </div>

            <blockquote className="reason-box">
              “{selected.reason}”
              <footer>
                {selected.name} · {selected.impression} 분위기
              </footer>
            </blockquote>

            {/* 데스크톱: 더보기를 사이드에 유지 */}
            <div className="desktop-more">
              {!showMore && more.length > 0 && (
                <Button
                  kind="secondary"
                  className="more-button"
                  type="button"
                  onClick={() => {
                    setShowMore(true);
                    trackEvent("more_palettes_clicked", {
                      category_id: category.id,
                    });
                  }}
                >
                  다른 컬러 조합 더 보기 <Icon name="down" size={17} />
                </Button>
              )}
              {showMore && more.length > 0 && (
                <div className="palette-list palette-list--expanded">
                  {more.map((palette) => (
                    <PaletteCard
                      key={palette.id}
                      palette={palette}
                      selected={selected.id === palette.id}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>

          <div className="preview-panel">
            <div className="preview-label">
              <div>
                <span className="live-dot" /> 홈페이지 미리보기
              </div>
              <div className="preview-label-actions">
                <div className="preview-device-toggle" role="group" aria-label="미리보기 기기">
                  <button
                    type="button"
                    className={deviceMode === "desktop" ? "is-active" : ""}
                    onClick={() => setDeviceMode("desktop")}
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    className={deviceMode === "mobile" ? "is-active" : ""}
                    onClick={() => setDeviceMode("mobile")}
                  >
                    Mobile
                  </button>
                </div>
                <small>{selected.name} 적용 중</small>
              </div>
            </div>
            <div
              className="preview-switch"
              role="radiogroup"
              aria-label="미리보기 팔레트 빠르게 바꾸기"
            >
              {allVisible.map((palette) => {
                const active = palette.id === selected.id;
                return (
                  <button
                    key={palette.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={palette.name}
                    className={active ? "is-active" : ""}
                    onClick={() => handleSelect(palette.id)}
                  >
                    <i style={{ background: palette.colors.base }} />
                    <i style={{ background: palette.colors.secondary }} />
                    <i style={{ background: palette.colors.accent }} />
                  </button>
                );
              })}
              <span>{selected.name}</span>
            </div>
            <div
              className={`preview-frame preview-frame--${deviceMode}`}
            >
              <WebsitePreview
                palette={selected}
                template={template}
                categoryId={category.id}
                subcategoryId={subcategoryId}
                framed
              />
            </div>
          </div>

          <div className="color-detail-inline mobile-only-block">
            <ColorCodesPanel palette={selected} onToast={showToast} compact />
          </div>

          <div className="more-inline mobile-only-block">
            {!showMore && more.length > 0 && (
              <Button
                kind="secondary"
                className="more-button"
                type="button"
                onClick={() => {
                  setShowMore(true);
                  trackEvent("more_palettes_clicked", {
                    category_id: category.id,
                  });
                }}
              >
                다른 컬러 조합 더 보기 <Icon name="down" size={17} />
              </Button>
            )}
            {showMore && more.length > 0 && (
              <div className="palette-list palette-list--expanded">
                {more.map((palette) => (
                  <PaletteCard
                    key={palette.id}
                    palette={palette}
                    selected={selected.id === palette.id}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="desktop-color-detail">
        <ColorCodesPanel palette={selected} onToast={showToast} />
      </div>

      <WebsiteInquiryCTA
        category={category}
        palette={selected}
        onToast={showToast}
      />
      <Toast message={message} />
    </div>
  );
}
