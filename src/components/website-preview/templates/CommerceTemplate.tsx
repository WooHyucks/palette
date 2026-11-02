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

export function CommerceTemplate({ palette, content, mini = false }: Props) {
  return (
    <PreviewShell
      palette={palette}
      className={`tpl-forme ${mini ? "wp-site--mini" : ""}`}
    >
      <header className="tpl-forme-nav">
        <span>{content.nav[0] ?? "SHOP"}</span>
        <strong>{content.brand}</strong>
        <span>BAG 0</span>
      </header>

      {/* Magazine full-bleed campaign */}
      <section className="tpl-forme-hero">
        <PreviewImage src={content.heroImage} alt={`${content.brand} campaign`} />
        <div className="tpl-forme-hero-overlay">
          <p>{content.eyebrow}</p>
          <h3>{splitLines(content.headline)}</h3>
          <p className="tpl-forme-hero-desc">{content.description}</p>
          <PreviewButton label={content.cta} />
        </div>
      </section>

      <section className="tpl-forme-rail">
        <div className="tpl-forme-rail-head">
          <p className="wp-eyebrow">NEW ARRIVALS</p>
          <span>View all</span>
        </div>
        <div className="tpl-forme-products">
          {content.cards.map((card, i) => (
            <article key={card.title} className={i === 1 ? "is-tall" : ""}>
              <div className="tpl-forme-product-media">
                <PreviewImage src={card.image} alt={card.title} />
              </div>
              <div className="tpl-forme-product-meta">
                <h5>{card.title}</h5>
                <p>{card.subtitle}</p>
                <span>{card.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!mini && (
        <>
          <section className="tpl-forme-edit">
            <div>
              <p className="wp-eyebrow">SEASON EDIT</p>
              <h4 className="wp-section-title wp-section-title--sans">
                {splitLines(content.storyTitle)}
              </h4>
            </div>
            <div>
              <p className="wp-lead">{content.storyBody}</p>
              <PreviewButton label={content.secondaryCta} variant="ghost" />
            </div>
          </section>

          <footer className="tpl-forme-footer">
            <strong>{content.brand}</strong>
            <span>{content.footerNote}</span>
            <span>SS COLLECTION</span>
          </footer>
        </>
      )}
    </PreviewShell>
  );
}
