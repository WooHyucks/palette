"use client";

import Link from "next/link";

interface HeaderProps {
  variant?: "overlay" | "solid";
  onStartHref?: string;
}

export function Header({
  variant = "overlay",
  onStartHref = "#categories",
}: HeaderProps) {
  return (
    <header className={variant === "overlay" ? "site-header" : "recommend-header"}>
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Palette 홈">
          PALETTE<span>.</span>
        </Link>
        <nav className="header-nav" aria-label="주요 메뉴">
          {variant === "overlay" ? (
            <>
              <a href="#steps">이용 방법</a>
              <a href={onStartHref}>컬러 찾기</a>
            </>
          ) : (
            <Link href="/#categories">업종 변경</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
