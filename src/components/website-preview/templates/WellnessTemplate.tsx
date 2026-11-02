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

export function WellnessTemplate({ palette, content, mini = false }: Props) {
  return (
    <PreviewShell
      palette={palette}
      className={`tpl-ritual ${mini ? "wp-site--mini" : ""}`}
    >
      <header className="tpl-ritual-nav">
        <strong>{content.brand}</strong>
        <nav aria-hidden>
          {content.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
      </header>

      <section className="tpl-ritual-hero">
        <p className="wp-eyebrow">{content.eyebrow}</p>
        <h3 className="wp-display">{splitLines(content.headline)}</h3>
        {!mini && <p className="wp-lead">{content.description}</p>}
        <div className="tpl-ritual-frame">
          <PreviewImage src={content.heroImage} alt={`${content.brand} space`} />
        </div>
        <PreviewButton label={content.cta} />
      </section>

      {!mini && (
        <>
          <section className="tpl-ritual-programs">
            <p className="wp-eyebrow">PROGRAMS</p>
            {content.cards.map((card, i) => (
              <article key={card.title}>
                <span>0{i + 1}</span>
                <div className="tpl-ritual-program-body">
                  <PreviewImage src={card.image} alt={card.title} />
                  <div>
                    <h5>{card.title}</h5>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
                <em>{card.meta}</em>
              </article>
            ))}
          </section>

          <section className="tpl-ritual-band">
            <p className="wp-eyebrow wp-eyebrow--on-secondary">SPACE</p>
            <h4 className="wp-section-title">{splitLines(content.storyTitle)}</h4>
            <p className="wp-lead">{content.storyBody}</p>
            <PreviewButton label={content.secondaryCta} variant="surface" />
          </section>

          <footer className="tpl-ritual-footer">
            <strong>{content.brand}</strong>
            <span>{content.footerNote}</span>
          </footer>
        </>
      )}
    </PreviewShell>
  );
}
