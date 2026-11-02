"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ColorCopyButtonProps {
  value: string;
  label?: string;
  onCopied?: (value: string) => void;
  onError?: (message: string) => void;
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fallback below
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function ColorCopyButton({
  value,
  label,
  onCopied,
  onError,
}: ColorCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyText(value);
    if (ok) {
      setCopied(true);
      onCopied?.(value);
      window.setTimeout(() => setCopied(false), 1600);
    } else {
      onError?.(
        "자동 복사에 실패했어요. 아래 코드를 길게 눌러 직접 복사해 주세요.",
      );
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 text-sm font-medium text-text transition-colors hover:bg-secondary/40"
      aria-label={`${label ?? value} 복사`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-primary" aria-hidden />
      ) : (
        <Copy className="h-4 w-4 text-muted" aria-hidden />
      )}
      <span className="font-mono text-[13px] tracking-wide">{value}</span>
    </button>
  );
}

export { copyText };
