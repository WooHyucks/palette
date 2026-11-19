"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type CanvasMode = "desktop" | "mobile";

interface CanvasSize {
  width: number;
  height: number;
}

interface ScaledCanvasProps {
  desktop?: CanvasSize;
  mobile?: CanvasSize;
  breakpoint?: number;
  className?: string;
  overlay?: (mode: CanvasMode) => ReactNode;
  children: (mode: CanvasMode) => ReactNode;
}

const DESKTOP: CanvasSize = { width: 1280, height: 800 };
const MOBILE: CanvasSize = { width: 390, height: 720 };

export function ScaledCanvas({
  desktop = DESKTOP,
  mobile = MOBILE,
  breakpoint = 640,
  className = "",
  overlay,
  children,
}: ScaledCanvasProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<{ mode: CanvasMode; scale: number } | null>(
    null,
  );

  const desktopWidth = desktop.width;
  const mobileWidth = mobile.width;

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const measure = () => {
      const width = node.clientWidth;
      if (!width) return;
      const mode: CanvasMode = width < breakpoint ? "mobile" : "desktop";
      const scale = width / (mode === "mobile" ? mobileWidth : desktopWidth);
      setView((prev) =>
        prev && prev.mode === mode && prev.scale === scale
          ? prev
          : { mode, scale },
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [breakpoint, desktopWidth, mobileWidth]);

  const mode = view?.mode ?? "desktop";
  const size = mode === "mobile" ? mobile : desktop;

  return (
    <div
      ref={frameRef}
      className={`scaled-canvas ${className}`}
      data-mode={view ? mode : undefined}
      style={
        view
          ? { height: Math.round(size.height * view.scale) }
          : ({
              "--canvas-ratio-desktop": `${desktop.width} / ${desktop.height}`,
              "--canvas-ratio-mobile": `${mobile.width} / ${mobile.height}`,
            } as CSSProperties)
      }
    >
      {view ? (
        <div
          className="scaled-canvas-stage"
          inert
          style={{
            width: size.width,
            height: size.height,
            transform: `scale(${view.scale})`,
          }}
        >
          {children(mode)}
        </div>
      ) : null}
      {view && overlay ? overlay(mode) : null}
    </div>
  );
}
