import { CategoryGrid } from "@/components/category/CategoryGrid";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingTracker } from "@/components/landing/LandingTracker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Icon } from "@/components/ui/Icon";
import { getAllCategories, getFeaturedPalettes } from "@/lib/palette";

export default function HomePage() {
  const categories = getAllCategories();
  const demoPalettes = getFeaturedPalettes("commerce");

  return (
    <>
      <LandingTracker />
      <Header />
      <main>
        <HeroSection demoPalettes={demoPalettes} />

        <section className="steps" id="steps" aria-label="이용 방법">
          {(
            [
              ["01", "업종 선택", "어떤 브랜드인지 알려주세요."],
              ["02", "컬러 추천", "어울리는 조합 3개를 제안해요."],
              ["03", "실제 적용 확인", "홈페이지에서 바로 비교하세요."],
            ] as const
          ).map((step, index) => (
            <div className="step" key={step[0]}>
              <span>{step[0]}</span>
              <div>
                <strong>{step[1]}</strong>
                <small>{step[2]}</small>
              </div>
              {index < 2 && <Icon name="arrow" size={18} />}
            </div>
          ))}
        </section>

        <section className="categories section-wrap" id="categories">
          <div className="section-heading">
            <p className="eyebrow">
              <span>02</span> CATEGORY
            </p>
            <h2>
              어떤 사업을
              <br className="mobile-only" /> 운영하시나요?
            </h2>
            <p>업종을 선택하면 어울리는 컬러를 추천해 드릴게요.</p>
          </div>
          <CategoryGrid categories={categories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
