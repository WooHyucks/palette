type IconName =
  | "arrow"
  | "down"
  | "check"
  | "copy"
  | "cup"
  | "bag"
  | "leaf"
  | "cross"
  | "cursor"
  | "spark";

interface IconProps {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    down: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    cup: (
      <>
        <path d="M5 8h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 4v2m4-2v2" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 12H6Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4C12 4 6 8 6 14c0 3 2 5 5 5 6 0 9-7 9-15Z" />
        <path d="M4 20c3-5 7-8 12-11" />
      </>
    ),
    cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z" />,
    cursor: (
      <>
        <path d="m5 3 14 9-6 2-3 6Z" />
        <path d="m13 14 5 5" />
      </>
    ),
    spark: (
      <path d="M12 2c.7 5.5 3 8 8 9-5 1-7.3 3.5-8 9-.7-5.5-3-8-8-9 5-1 7.3-3.5 8-9Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}
