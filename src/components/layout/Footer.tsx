import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="logo" aria-label="Palette 홈">
        PALETTE<span>.</span>
      </Link>
      <p>브랜드의 첫인상을 만드는 가장 쉬운 방법.</p>
      <small>© 2025 Palette Studio</small>
    </footer>
  );
}
