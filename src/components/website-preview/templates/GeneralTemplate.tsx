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

export function GeneralTemplate({ palette, content, mini = false }: Props) {
  return (
    <PreviewShell
      palette={palette}
      className={`tpl-object ${mini ? "wp-site--mini" : ""}`}
    >
      <header className="tpl-object-nav">
        <strong>
          {content.brandLines?.[0] ?? "OBJECT"}
          <br />
          {content.brandLines?.[1] ?? "STUDIO"}
        </strong>
        <nav aria-hidden>
          {content.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
      </header>

      <section className="tpl-object-hero">
        <h3 className="wp-display">{splitLines(content.headline)}</h3>
        <div className="tpl-object-hero-meta">
          <p className="wp-eyebrow">{content.eyebrow}</p>
          {!mini && <p className="wp-lead">{content.description}</p>}
        </div>
      </section>

      <section className="tpl-object-mosaic">
        <div className="tpl-object-main">
          <PreviewImage src={content.heroImage} alt={`${content.brand} work`} />
          <span>Selected Work — 01</span>
        </div>
        {!mini &&
          content.cards.map((card, i) => (
            <article
              key={card.title}
              className={`tpl-object-cell tpl-object-cell--${i}`}
            >
              <PreviewImage src={card.image} alt={card.title} />
              <div>
                <small>0{i + 2}</small>
                <h5>{card.title}</h5>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
      </section>

      {!mini && (
        <>
          <section className="tpl-object-about">
            <div>
              <p className="wp-eyebrow wp-eyebrow--on-secondary">ABOUT</p>
              <h4 className="wp-section-title">{splitLines(content.storyTitle)}</h4>
            </div>
            <div>
              <p className="wp-lead">{content.storyBody}</p>
              <PreviewButton label={content.cta} variant="surface" />
            </div>
          </section>

          <footer className="tpl-object-footer">
            <strong>{content.brand}</strong>
            <span>{content.footerNote}</span>
          </footer>
        </>
      )}

      {mini && (
        <div className="tpl-object-mini-cta">
          <PreviewButton label={content.cta} />
        </div>
      )}
    </PreviewShell>
  );
}
