"use client";

import Link from "next/link";
import { ScaledCanvas } from "@/components/preview/ScaledCanvas";
import { DESIGN_SITES } from "@/components/designs/registry";
import { getDesignHref } from "@/lib/designs/recommend";
import type { FunnelCategoryId } from "@/lib/designs/categories";
import type { DesignId } from "@/lib/designs/templates";
import { getDesignTemplate } from "@/lib/designs/templates";
import { trackEvent } from "@/lib/analytics";

interface DesignPreviewCardProps {
  designId: DesignId;
  categoryId: FunnelCategoryId;
}

export function DesignPreviewCard({ designId, categoryId }: DesignPreviewCardProps) {
  const template = getDesignTemplate(designId);
  const Site = DESIGN_SITES[designId];
  if (!template || !Site) return null;

  const href = getDesignHref(designId, categoryId);

  return (
    <article className="funnel-card">
      <div className="funnel-card-meta">
        <p>{template.label}</p>
        <span>{template.tone}</span>
      </div>
      <h3>{template.name}</h3>
      <p className="funnel-card-blurb">{template.blurb}</p>
      <div className="funnel-card-preview studio-browser">
        <div className="studio-browser-bar">
          <i />
          <i />
          <i />
          <span>{template.url}</span>
        </div>
        <ScaledCanvas
          breakpoint={480}
          mobile={{ width: 390, height: 640 }}
          desktop={{ width: 1280, height: 800 }}
        >
          {() => <Site />}
        </ScaledCanvas>
        <Link
          href={href}
          className="preview-cover"
          aria-label={`${template.name} 전체 디자인 보기`}
          onClick={() =>
            trackEvent("design_preview_open", {
              design_id: designId,
              category_id: categoryId,
              cta_location: "results_card",
            })
          }
        />
      </div>
      <Link
        href={href}
        className="funnel-card-cta"
        onClick={() =>
          trackEvent("design_preview_open", {
            design_id: designId,
            category_id: categoryId,
            cta_location: "results_button",
          })
        }
      >
        전체 디자인 보기
      </Link>
    </article>
  );
}
