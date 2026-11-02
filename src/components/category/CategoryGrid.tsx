import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Category } from "@/types/palette";

const CATEGORY_META: Record<
  string,
  { icon: "cup" | "bag" | "leaf" | "cross" | "cursor" | "spark"; examples: string }
> = {
  food: { icon: "cup", examples: "카페, 음식점, 베이커리" },
  commerce: { icon: "bag", examples: "패션, 잡화, 쇼핑몰" },
  wellness: { icon: "leaf", examples: "미용실, 네일숍, 필라테스" },
  professional: { icon: "cross", examples: "병원, 치과, 전문 사무소" },
  digital: { icon: "cursor", examples: "앱, SaaS, 웹 서비스" },
  other: { icon: "spark", examples: "교육, 공방, 스튜디오" },
};

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <>
      <div className="category-grid">
        {categories.map((category, index) => {
          const meta = CATEGORY_META[category.id] ?? {
            icon: "spark" as const,
            examples: "다양한 브랜드",
          };
          return (
            <Link
              key={category.id}
              href={`/recommend?category=${category.id}`}
              className="category-card"
              aria-label={`${category.name} 컬러 추천 보기`}
            >
              <span className={`category-visual visual-${index}`}>
                <Icon name={meta.icon} size={30} />
                <i />
                <i />
              </span>
              <span className="category-card__copy">
                <strong>{category.name}</strong>
                <small>{meta.examples}</small>
              </span>
              <span className="category-arrow">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          );
        })}
      </div>
      <p className="category-note">회원가입 없이, 선택 한 번이면 충분해요.</p>
    </>
  );
}
