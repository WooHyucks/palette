import Link from "next/link";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";
import { PRICE_SHORT } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link href="/" className="logo" aria-label="Palette 홈">
          PALETTE<span>.</span>
        </Link>
        <p>홈페이지 제작 · 리뉴얼 {PRICE_SHORT}</p>
      </div>
      <nav className="footer-nav" aria-label="푸터 메뉴">
        <a href="#services">서비스</a>
        <a href="#work">디자인 샘플</a>
        <a href="#renewal">리뉴얼</a>
        <a href="#pricing">가격</a>
        <a href="#faq">FAQ</a>
        <InstagramInquiryLink
          className="footer-inquiry"
          ctaLocation="footer"
          showArrow={false}
        >
          인스타그램
        </InstagramInquiryLink>
      </nav>
      <small>© 2026 Palette Studio</small>
    </footer>
  );
}
