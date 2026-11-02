import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CategorySelectTracker } from "@/components/category/CategorySelectTracker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RecommendExperience } from "@/components/recommend/RecommendExperience";
import {
  getAllCategories,
  getCategoryById,
  getFeaturedPalettes,
  getMorePalettes,
  getPalettesByCategory,
  getTemplateForCategory,
} from "@/lib/palette";

interface RecommendPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({
  searchParams,
}: RecommendPageProps): Promise<Metadata> {
  const { category: categoryId } = await searchParams;
  const category = categoryId ? getCategoryById(categoryId) : undefined;

  if (!category) {
    return {
      title: "컬러 추천",
      description: "업종에 어울리는 브랜드 컬러 조합을 확인해 보세요.",
    };
  }

  return {
    title: `${category.name} 컬러 추천`,
    description: `${category.name}에 어울리는 컬러 팔레트와 홈페이지 미리보기를 확인해 보세요.`,
  };
}

async function RecommendContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: categoryId } = await searchParams;
  const category = categoryId ? getCategoryById(categoryId) : undefined;

  if (!category) {
    const categories = getAllCategories();
    return (
      <div className="section-wrap" style={{ padding: "80px 0 120px" }}>
        <div className="section-heading">
          <p className="eyebrow">
            <span>02</span> CATEGORY
          </p>
          <h2>업종을 먼저 선택해 주세요</h2>
          <p>유효하지 않은 업종이거나 선택이 없어요.</p>
        </div>
        <div className="category-grid" style={{ marginTop: 40 }}>
          {categories.map((item, index) => (
            <Link
              key={item.id}
              href={`/recommend?category=${item.id}`}
              className="category-card"
            >
              <span className={`category-visual visual-${index}`}>
                <i />
                <i />
              </span>
              <span className="category-card__copy">
                <strong>{item.name}</strong>
                <small>컬러 추천 보기</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const featured = getFeaturedPalettes(category.id);
  const more = getMorePalettes(category.id);
  const totalCount = getPalettesByCategory(category.id).length;
  const template = getTemplateForCategory(category.id);

  return (
    <>
      <CategorySelectTracker categoryId={category.id} />
      <RecommendExperience
        key={category.id}
        category={category}
        featured={featured}
        more={more}
        template={template}
        totalCount={totalCount}
      />
    </>
  );
}

function RecommendFallback() {
  return (
    <div className="results">
      <div className="section-wrap">
        <div
          style={{
            height: 28,
            width: 180,
            background: "rgba(255,255,255,.5)",
            borderRadius: 8,
          }}
        />
        <div
          style={{
            height: 48,
            width: 320,
            maxWidth: "100%",
            marginTop: 18,
            background: "rgba(255,255,255,.5)",
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
}

export default function RecommendPage({ searchParams }: RecommendPageProps) {
  return (
    <>
      <Header variant="solid" />
      <main>
        <Suspense fallback={<RecommendFallback />}>
          <RecommendContent searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
