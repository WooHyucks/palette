"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ScaledCanvas } from "@/components/preview/ScaledCanvas";
import {
  SeoraeAfterSite,
  SeoraeBeforeSite,
} from "@/components/renewal/SeoraeSites";
import { trackEvent } from "@/lib/analytics";

const MIN = 4;
const MAX = 96;
const BEFORE_WIDTH = 980;
const MOBILE_WIDTH = 390;

const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(46);
  const [touched, setTouched] = useState(false);
  const tracked = useRef(false);
  const dragging = useRef(false);

  const markInteraction = () => {
    setTouched(true);
    if (tracked.current) return;
    tracked.current = true;
    trackEvent("before_after_interaction", {
      service_type: "renewal",
      cta_location: "renewal_section",
    });
  };

  const moveTo = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition(clamp(((event.clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    if (event.pointerType !== "touch") {
      moveTo(event);
      markInteraction();
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    moveTo(event);
    markInteraction();
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 4;
    const next =
      event.key === "ArrowLeft" || event.key === "ArrowDown"
        ? position - step
        : event.key === "ArrowRight" || event.key === "ArrowUp"
          ? position + step
          : event.key === "Home"
            ? MIN
            : event.key === "End"
              ? MAX
              : null;
    if (next === null) return;
    event.preventDefault();
    setPosition(clamp(next));
    markInteraction();
  };

  return (
    <div className="ba">
      <ScaledCanvas
        className="ba-canvas"
        overlay={(mode) => (
          <div
            className="ba-hit"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <span className="ba-tag ba-tag--before">
              BEFORE
              {mode === "mobile" ? <small>모바일 미대응</small> : null}
            </span>
            <span className="ba-tag ba-tag--after">AFTER</span>
            <div className="ba-divider" style={{ left: `${position}%` }}>
              <div
                className="ba-knob"
                role="slider"
                tabIndex={0}
                aria-label="리뉴얼 전후 비교"
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                aria-valuenow={Math.round(position)}
                aria-valuetext={`이전 디자인 ${Math.round(position)}% 표시`}
                onKeyDown={onKeyDown}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
                </svg>
              </div>
              {touched ? null : (
                <span className="ba-hint" aria-hidden="true">
                  좌우로 밀어서 비교
                </span>
              )}
            </div>
          </div>
        )}
      >
        {(mode) => (
          <>
            <div className="ba-layer">
              <SeoraeAfterSite />
            </div>
            <div
              className="ba-layer ba-layer--before"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              {mode === "mobile" ? (
                <>
                  <div
                    className="ba-shrink"
                    style={{
                      width: BEFORE_WIDTH,
                      transform: `scale(${MOBILE_WIDTH / BEFORE_WIDTH})`,
                    }}
                  >
                    <SeoraeBeforeSite />
                  </div>
                  <p className="ba-shrink-note">
                    PC 화면이 그대로 줄어들어
                    <br />
                    글자를 읽으려면 확대해야 해요.
                  </p>
                </>
              ) : (
                <SeoraeBeforeSite />
              )}
            </div>
          </>
        )}
      </ScaledCanvas>
    </div>
  );
}
