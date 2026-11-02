import type { PreviewContent } from "@/data/preview-content";
import { PreviewButton } from "@/components/website-preview/shared/PreviewButton";
import { PreviewImage } from "@/components/website-preview/shared/PreviewImage";
import {
  PreviewShell,
  splitLines,
} from "@/components/website-preview/shared/PreviewShell";
import type { Palette } from "@/types/palette";

interface Props {
  palette: Palette;
  content: PreviewContent;
  mini?: boolean;
}

export function ProfessionalTemplate({
  palette,
  content,
  mini = false,
}: Props) {
  return (
    <PreviewShell
      palette={palette}
      className={`tpl-onyu ${mini ? "wp-site--mini" : ""}`}
    >
      <header className="tpl-onyu-nav">
        <strong>{content.brand}</strong>
        <div>
          {content.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <PreviewButton label="상담 예약" />
        </div>
      </header>

      <section className="tpl-onyu-hero">
        <div className="tpl-onyu-hero-copy">
          <p className="wp-eyebrow">{content.eyebrow}</p>
          <h3 className="wp-display wp-display--sans">
            {splitLines(content.headline)}
          </h3>
          {!mini && <p className="wp-lead">{content.description}</p>}
          <div className="tpl-onyu-actions">
            <PreviewButton label={content.cta} />
            {!mini && (
              <PreviewButton label={content.secondaryCta} variant="ghost" />
            )}
          </div>
        </div>
        <div className="tpl-onyu-hero-media">
          <PreviewImage src={content.heroImage} alt={`${content.brand} space`} />
        </div>
      </section>

      {!mini && (
        <>
          <section className="tpl-onyu-fields">
            <div className="tpl-onyu-fields-head">
              <p className="wp-eyebrow">GUIDE</p>
              <h4 className="wp-section-title wp-section-title--sans">
                이용 안내
              </h4>
            </div>
            <div className="tpl-onyu-grid">
              {content.cards.map((card) => (
                <article key={card.title}>
                  <PreviewImage src={card.image} alt={card.title} />
                  <h5>{card.title}</h5>
                  <p>{card.subtitle}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="tpl-onyu-note">
            <div>
              <p className="wp-eyebrow">PHILOSOPHY</p>
              <h4 className="wp-section-title wp-section-title--sans">
                {splitLines(content.storyTitle)}
              </h4>
            </div>
            <div>
              <p className="wp-lead">{content.storyBody}</p>
              <p className="tpl-onyu-hours">{content.footerNote}</p>
            </div>
          </section>

          <footer className="tpl-onyu-footer">
            <strong>{content.brand}</strong>
            <span>{content.footerNote}</span>
          </footer>
        </>
      )}
    </PreviewShell>
  );
}
