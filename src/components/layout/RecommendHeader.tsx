import Link from "next/link";

export function RecommendHeader() {
  return (
    <header className="recommend-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Palette 홈">
          PALETTE<span>.</span>
        </Link>
        <nav className="header-nav" aria-label="주요 메뉴">
          <Link href="/">홈으로</Link>
        </nav>
      </div>
    </header>
  );
}
