"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Gift, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/** 문구·타이밍만 바꿔도 되도록 상단에 모아 둔다. */
export const FUNNEL_PROMO = {
  sessionKey: "palette_funnel_promo_dismissed",
  showDelayMs: 800,
  autoHideMs: 6000,
  animMs: 420,
  titleHighlight: "30만 원",
  titleAfter: "으로 우리 가게의 공식 홈페이지를.",
  subtitleLines: [
    "브랜드 소개부터 고객 문의까지,",
    "우리 가게만의 홈페이지를 만들어 보세요.",
  ],
} as const;

function markDismissed() {
  try {
    window.sessionStorage.setItem(FUNNEL_PROMO.sessionKey, "1");
  } catch {
    /* private mode 등 */
  }
}

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(FUNNEL_PROMO.sessionKey) === "1";
  } catch {
    return false;
  }
}

export interface FunnelPromoToastProps {
  /** 업종 선택 단계일 때만 true */
  active: boolean;
}

export function FunnelPromoToast({ active }: FunnelPromoToastProps) {
  const [open, setOpen] = useState(false);
  const blockedRef = useRef(false);
  const seenPickRef = useRef(false);
  const viewed = useRef(false);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    blockedRef.current = wasDismissed();
  }, []);

  useEffect(() => {
    if (!active) {
      const closeTimer = window.setTimeout(() => {
        setOpen(false);
        if (seenPickRef.current) {
          blockedRef.current = true;
          markDismissed();
        }
      }, 0);
      return () => window.clearTimeout(closeTimer);
    }

    seenPickRef.current = true;
    if (blockedRef.current || wasDismissed()) return;

    const showTimer = window.setTimeout(() => {
      if (blockedRef.current || wasDismissed()) return;
      setOpen(true);
      if (!viewed.current) {
        viewed.current = true;
        trackEvent("homepage_promo_view", { cta_location: "funnel_pick" });
      }
    }, FUNNEL_PROMO.showDelayMs);

    return () => window.clearTimeout(showTimer);
  }, [active]);

  useEffect(() => {
    if (!open) return;

    const hideTimer = window.setTimeout(() => {
      blockedRef.current = true;
      markDismissed();
      setOpen(false);
    }, FUNNEL_PROMO.autoHideMs);

    return () => window.clearTimeout(hideTimer);
  }, [open]);

  function dismiss() {
    blockedRef.current = true;
    markDismissed();
    setOpen(false);
    trackEvent("homepage_promo_dismiss", { cta_location: "funnel_pick" });
  }

  const duration = reduceMotion ? 0.01 : FUNNEL_PROMO.animMs / 1000;

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          className="funnel-promo"
          role="status"
          aria-labelledby={titleId}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="funnel-promo-inner">
            <span className="funnel-promo-icon" aria-hidden="true">
              <Gift size={18} strokeWidth={1.7} />
            </span>
            <div className="funnel-promo-copy">
              <p id={titleId} className="funnel-promo-title">
                <em>{FUNNEL_PROMO.titleHighlight}</em>
                {FUNNEL_PROMO.titleAfter}
              </p>
              <p className="funnel-promo-sub">
                {FUNNEL_PROMO.subtitleLines[0]}
                <br />
                {FUNNEL_PROMO.subtitleLines[1]}
              </p>
            </div>
            <button
              type="button"
              className="funnel-promo-close"
              aria-label="안내 닫기"
              onClick={dismiss}
            >
              <X size={15} strokeWidth={2} />
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
