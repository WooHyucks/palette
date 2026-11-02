import Link from "next/link";
import { ColorDemo } from "@/components/landing/ColorDemo";
import { Icon } from "@/components/ui/Icon";
import type { Palette } from "@/types/palette";

interface HeroSectionProps {
  demoPalettes: Palette[];
}

export function HeroSection({ demoPalettes }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">BRAND COLOR RECOMMENDATION</p>
        <h1 className="hero-brand">PALETTE</h1>
        <div className="hero-meta">
          <span>COLOR STUDIO / SEOUL</span>
          <span>PERSONALIZED FOR YOUR BRAND</span>
        </div>
        <div className="hero-statement">
          <h2>
            당신의 브랜드,
            <br />
            어떤 색으로 기억되고 싶나요?
          </h2>
          <div>
            <p className="hero-description">
              업종만 선택하세요. 어울리는 컬러 조합을 추천하고,{" "}
              <br />
              실제 홈페이지에 적용된 모습까지 보여드릴게요.
            </p>
            <Link href="#categories" className="button button--dark">
              내 브랜드 컬러 찾기 <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
      <ColorDemo palettes={demoPalettes} />
    </section>
  );
}
