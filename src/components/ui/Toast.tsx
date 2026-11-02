"use client";

import { Icon } from "@/components/ui/Icon";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      className={`toast ${message ? "is-visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span>
        <Icon name="check" size={15} />
      </span>
      {message ?? "컬러 코드가 복사됐어요."}
    </div>
  );
}
