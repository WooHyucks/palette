"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Coffee,
  Dumbbell,
  HeartPulse,
  House,
  Sparkles,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { DesignPreviewCard } from "@/components/funnel/DesignPreviewCard";
import { FunnelPromoToast } from "@/components/funnel/FunnelPromoToast";
import { trackEvent } from "@/lib/analytics";
import {
  FUNNEL_CATEGORIES,
  isFunnelCategoryId,
  type FunnelCategoryId,
} from "@/lib/designs/categories";
import { getRecommendations } from "@/lib/designs/recommend";

type Step = "pick" | "loading" | "results";

const ICONS: Record<string, LucideIcon> = {
  Coffee,
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  Dumbbell,
  House,
  Briefcase,
  Store,
};

const LOADING_LINES = [
  "업종에 적합한 디자인 확인",
  "브랜드 스타일 매칭",
  "추천 디자인 선정 완료",
] as const;

function readInitialCategory(): FunnelCategoryId | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("category");
  return value && isFunnelCategoryId(value) ? value : null;
}

export function FunnelApp() {
  const initialCategory = readInitialCategory();
  const [step, setStep] = useState<Step>(initialCategory ? "results" : "pick");
  const [categoryId, setCategoryId] = useState<FunnelCategoryId | null>(
    initialCategory,
  );
  const [loadingIndex, setLoadingIndex] = useState(0);

  useEffect(() => {
    trackEvent("landing_view");
    if (initialCategory) {
      trackEvent("funnel_results_view", { category_id: initialCategory });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (step !== "loading" || !categoryId) return;
    trackEvent("funnel_loading_view", { category_id: categoryId });
    const timers = [
      window.setTimeout(() => setLoadingIndex(1), 1100),
      window.setTimeout(() => setLoadingIndex(2), 2300),
      window.setTimeout(() => {
        setStep("results");
        trackEvent("funnel_results_view", { category_id: categoryId });
      }, 3600),
    ];
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [step, categoryId]);

  function selectCategory(id: FunnelCategoryId) {
    setCategoryId(id);
    setLoadingIndex(0);
    trackEvent("funnel_category_select", { category_id: id });
    setStep("loading");
    const url = new URL(window.location.href);
    url.searchParams.set("category", id);
    window.history.replaceState({}, "", url);
  }

  function reset() {
    setStep("pick");
    setCategoryId(null);
    setLoadingIndex(0);
    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  }

  const recommendations = categoryId ? getRecommendations(categoryId) : [];
  const category = FUNNEL_CATEGORIES.find((item) => item.id === categoryId);

  return (
    <div className="funnel">
      <FunnelPromoToast active={step === "pick"} />

      <header className="funnel-bar">
        <button type="button" className="logo" onClick={reset} aria-label="Palette 홈">
          PALETTE<span>.</span>
        </button>
      </header>

      {step === "pick" ? (
        <main className="funnel-main">
          <p className="funnel-kicker">DESIGN RECOMMEND</p>
          <h1>
            사장님은 어떤 가게를
            <br />
            운영하고 계신가요?
          </h1>
          <p className="funnel-lead">
            업종에 어울리는 홈페이지 디자인 3가지를 추천해 드려요.
          </p>
          <div className="funnel-cats">
            {FUNNEL_CATEGORIES.map((item) => {
              const Icon = ICONS[item.icon] ?? Store;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="funnel-cat"
                  onClick={() => selectCategory(item.id)}
                >
                  <span className="funnel-cat-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </main>
      ) : null}

      {step === "loading" ? (
        <main className="funnel-main funnel-loading" aria-live="polite">
          <p className="funnel-kicker">MATCHING</p>
          <h1>
            사장님 업종에 어울리는
            <br />
            디자인을 찾고 있어요.
          </h1>
          <ul className="funnel-loading-list">
            {LOADING_LINES.map((line, index) => (
              <li key={line} className={index <= loadingIndex ? "is-on" : ""}>
                {line}
              </li>
            ))}
          </ul>
        </main>
      ) : null}

      {step === "results" && categoryId ? (
        <main className="funnel-main funnel-results">
          <button type="button" className="funnel-back" onClick={reset}>
            ← 업종 다시 선택
          </button>
          <p className="funnel-kicker">FOR {category?.label ?? "사장님"}</p>
          <h1>
            이런 디자인을
            <br />
            추천드려요.
          </h1>
          <p className="funnel-lead">마음에 드는 시안을 눌러 전체 화면으로 확인해 보세요.</p>
          <div className="funnel-cards">
            {recommendations.map((design) => (
              <DesignPreviewCard
                key={design.id}
                designId={design.id}
                categoryId={categoryId}
              />
            ))}
          </div>
        </main>
      ) : null}
    </div>
  );
}
