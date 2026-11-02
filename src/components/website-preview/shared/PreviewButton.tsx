interface PreviewButtonProps {
  label: string;
  variant?: "accent" | "ghost" | "surface";
  className?: string;
}

/** 미리보기 내부 CTA — 실제 네비게이션/결제 없음 */
export function PreviewButton({
  label,
  variant = "accent",
  className = "",
}: PreviewButtonProps) {
  return (
    <button
      type="button"
      className={`wp-btn wp-btn--${variant} ${className}`}
      tabIndex={-1}
      aria-hidden
    >
      {label}
    </button>
  );
}
