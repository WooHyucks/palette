"use client";

import { useCallback, useEffect, useState } from "react";

export function useToast(duration = 2200) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(null), duration);
    return () => window.clearTimeout(timer);
  }, [message, duration]);

  const showToast = useCallback((next: string) => {
    setMessage(next);
  }, []);

  return { message, showToast };
}
