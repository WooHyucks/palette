"use client";

import { useEffect, useRef } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsPayload,
} from "@/lib/analytics";

interface SectionObserverProps {
  event: AnalyticsEventName;
  payload?: AnalyticsPayload;
  threshold?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionObserver({
  event,
  payload,
  threshold = 0.45,
  children,
  className,
  id,
}: SectionObserverProps) {
  const ref = useRef<HTMLElement>(null);
  const sent = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || sent.current) return;
        sent.current = true;
        trackEvent(event, payload ?? {});
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // payload is static per call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, threshold]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
