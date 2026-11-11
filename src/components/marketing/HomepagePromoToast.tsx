"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, WandSparkles, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const DISMISS_KEY = "palette_homepage_promo_dismissed";
const INSTAGRAM_URL = "https://www.instagram.com/palette_official___/";
const MOBILE_QUERY = "(max-width: 639px)";

export function HomepagePromoToast() {
  const [open, setOpen] = useState(false);
  const viewed = useRef(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY) === "1") return;
    if (!window.matchMedia(MOBILE_QUERY).matches) return;

    const timer = window.setTimeout(() => {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") return;
      if (!window.matchMedia(MOBILE_QUERY).matches) return;
      setOpen(true);
      if (viewed.current) return;
      viewed.current = true;
      trackEvent("homepage_promo_view");
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    body.classList.add("has-promo-toast");
    if (window.innerHeight <= 740) body.classList.add("is-short-viewport");
    if (window.innerWidth <= 360) body.classList.add("is-narrow");
    return () => {
      body.classList.remove("has-promo-toast", "is-short-viewport", "is-narrow");
    };
  }, [open]);

  function dismiss() {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
    trackEvent("homepage_promo_dismiss");
  }

  function inquire() {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
    trackEvent("homepage_promo_click");
  }

  if (!open) return null;

  return (
    <aside className="promo-toast" aria-label="홈페이지 제작 안내">
      <div className="promo-toast-top">
        <span className="promo-toast-mark" aria-hidden="true">
          <WandSparkles size={15} strokeWidth={1.75} />
        </span>
        <button
          type="button"
          className="promo-toast-close"
          aria-label="안내 닫기"
          onClick={dismiss}
        >
          <X size={16} strokeWidth={1.75} />
        </button>
      </div>
      <p className="promo-toast-title">
        내가 고른 색상으로
        <br />
        홈페이지까지 만들어 보세요.
      </p>
      <p className="promo-toast-price">
        홈페이지 제작 <strong>30만 원부터</strong>
      </p>
      <p className="promo-toast-note">브랜드 컬러부터 실제 홈페이지 제작까지.</p>
      <a
        className="promo-toast-cta"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={inquire}
      >
        인스타 문의하기
        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
      </a>
    </aside>
  );
}
