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

export function FoodTemplate({ palette, content, mini = false }: Props) {
  if (mini) {
    return (
      <PreviewShell palette={palette} className="wp-site--mini tpl-food tpl-live">
        <header className="tpl-food-nav">
          <strong>
            {content.brandLines?.[0] ?? "MOMENT"}
            <br />
            {content.brandLines?.[1] ?? "COFFEE"}
          </strong>
          <nav aria-hidden>
            {content.nav.slice(0, 3).map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
          <span className="tpl-food-nav-cta">{content.cta}</span>
          <span className="wp-burger" aria-hidden>
            <i />
            <i />
          </span>
        </header>

        <section className="tpl-live-hero">
          <div className="tpl-live-copy">
            <p className="wp-eyebrow">{content.eyebrow}</p>
            <h3 className="wp-display">{splitLines(content.headline)}</h3>
            <p className="wp-lead tpl-live-desc">{content.description}</p>
            <div className="wp-btn-row">
              <PreviewButton label={content.cta} />
              <PreviewButton label={content.secondaryCta} variant="ghost" />
            </div>
          </div>
          <div className="tpl-live-media">
            <PreviewImage src={content.heroImage} alt="" />
            <div className="tpl-live-pick" aria-hidden>
              <small>TODAY&apos;S PICK</small>
              <strong>{content.cards[0].title}</strong>
              <span>{content.cards[0].meta}</span>
            </div>
          </div>
        </section>

        <section className="tpl-live-menu" aria-hidden>
          <div className="tpl-live-menu-head">
            <p className="wp-eyebrow wp-eyebrow--on-secondary">SIGNATURE</p>
            <span>{content.footerNote}</span>
          </div>
          <div className="tpl-live-menu-grid">
            {content.cards.slice(0, 3).map((card) => (
              <article key={card.title}>
                <PreviewImage src={card.image} alt="" />
                <div>
                  <strong>{card.title}</strong>
                  <span>{card.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </PreviewShell>
    );
  }

  return (
    <PreviewShell palette={palette} className="tpl-food">
      <header className="tpl-food-nav">
        <strong>
          {content.brandLines?.[0]}
          <br />
          {content.brandLines?.[1]}
        </strong>
        <nav aria-hidden>
          {content.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
        <span className="tpl-food-nav-cta">{content.cta}</span>
        <span className="wp-burger" aria-hidden>
          <i />
          <i />
        </span>
      </header>

      {/* Full-bleed editorial hero */}
      <section className="tpl-food-hero">
        <div className="tpl-food-hero-shot">
          <PreviewImage src={content.heroImage} alt={`${content.brand} space`} />
          <div className="tpl-food-hero-veil" />
        </div>
        <div className="tpl-food-hero-copy">
          <p className="wp-eyebrow">{content.eyebrow}</p>
          <h3 className="wp-display">{splitLines(content.headline)}</h3>
          <p className="wp-lead">{content.description}</p>
          <PreviewButton label={content.cta} />
        </div>
      </section>

      {/* Asymmetric menu — large feature + stacked list */}
      <section className="tpl-food-menu">
        <div className="tpl-food-menu-head">
          <div>
            <p className="wp-eyebrow">SIGNATURE</p>
            <h4 className="wp-section-title">오늘의 한 잔</h4>
          </div>
          <p className="wp-section-desc">원두의 결을 살린 시그니처와 페이스트리</p>
        </div>
        <div className="tpl-food-menu-layout">
          <article className="tpl-food-feature">
            <PreviewImage src={content.cards[0].image} alt={content.cards[0].title} />
            <div>
              <span>{content.cards[0].meta}</span>
              <h5>{content.cards[0].title}</h5>
              <p>{content.cards[0].subtitle}</p>
            </div>
          </article>
          <div className="tpl-food-stack">
            {content.cards.slice(1).map((card) => (
              <article key={card.title}>
                <PreviewImage src={card.image} alt={card.title} />
                <div>
                  <span>{card.meta}</span>
                  <h5>{card.title}</h5>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tpl-food-story">
        <div className="tpl-food-story-inner">
          <p className="wp-eyebrow wp-eyebrow--on-secondary">OUR STORY</p>
          <h4 className="wp-section-title">{splitLines(content.storyTitle)}</h4>
          <p className="wp-lead">{content.storyBody}</p>
        </div>
        <div className="tpl-food-visit">
          <div>
            <small>VISIT</small>
            <strong>{content.footerNote}</strong>
          </div>
          <PreviewButton label={content.secondaryCta} variant="surface" />
        </div>
      </section>

      <footer className="tpl-food-footer">
        <strong>{content.brand}</strong>
        <span>Coffee & Slow Moments</span>
        <span>{content.footerNote}</span>
      </footer>
    </PreviewShell>
  );
}
