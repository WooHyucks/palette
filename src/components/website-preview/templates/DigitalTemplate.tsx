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

export function DigitalTemplate({ palette, content, mini = false }: Props) {
  return (
    <PreviewShell
      palette={palette}
      className={`tpl-flow ${mini ? "wp-site--mini" : ""}`}
    >
      <header className="tpl-flow-nav">
        <strong>{content.brand}</strong>
        <nav aria-hidden>
          {content.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
        <PreviewButton label="Start free" />
      </header>

      <section className="tpl-flow-hero">
        <p className="wp-eyebrow">{content.eyebrow}</p>
        <h3 className="wp-display wp-display--sans">
          {splitLines(content.headline)}
        </h3>
        {!mini && <p className="wp-lead">{content.description}</p>}
        <div className="wp-btn-row">
          <PreviewButton label={content.cta} />
          {!mini && (
            <PreviewButton label={content.secondaryCta} variant="ghost" />
          )}
        </div>

        <div className="tpl-flow-mock" aria-hidden>
          <div className="tpl-flow-mock-bar">
            <i />
            <i />
            <i />
            <span>app.flow.so / overview</span>
          </div>
          <div className="tpl-flow-mock-body">
            <aside>
              <span className="is-active" />
              <span />
              <span />
              <span />
            </aside>
            <div className="tpl-flow-mock-main">
              <div className="tpl-flow-chart">
                <div className="tpl-flow-chart-line" />
              </div>
              <div className="tpl-flow-kpis">
                <b>
                  <small>Active</small>
                  <strong>128</strong>
                </b>
                <b>
                  <small>Done</small>
                  <strong>94%</strong>
                </b>
                <b>
                  <small>Focus</small>
                  <strong>4.2h</strong>
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!mini && (
        <>
          <section className="tpl-flow-features">
            <p className="wp-eyebrow">FEATURES</p>
            <div className="tpl-flow-feature-grid">
              {content.cards.map((card) => (
                <article key={card.title}>
                  <PreviewImage src={card.image} alt={card.title} />
                  <h5>{card.title}</h5>
                  <p>{card.subtitle}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="tpl-flow-band">
            <h4 className="wp-section-title wp-section-title--sans">
              {splitLines(content.storyTitle)}
            </h4>
            <p className="wp-lead">{content.storyBody}</p>
            <PreviewButton label={content.cta} />
          </section>

          <footer className="tpl-flow-footer">
            <strong>{content.brand}</strong>
            <span>{content.footerNote}</span>
          </footer>
        </>
      )}
    </PreviewShell>
  );
}
