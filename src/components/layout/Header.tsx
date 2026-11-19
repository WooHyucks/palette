import Link from "next/link";
import { InstagramInquiryLink } from "@/components/ui/InstagramInquiryLink";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Palette 홈">
          PALETTE<span>.</span>
        </Link>
        <nav className="header-nav" aria-label="주요 메뉴">
          <a href="#services">서비스</a>
          <a href="#work">샘플</a>
          <a href="#renewal">리뉴얼</a>
          <a href="#pricing">가격</a>
          <InstagramInquiryLink
            className="header-inquiry"
            ctaLocation="header"
            showArrow={false}
          >
            문의
          </InstagramInquiryLink>
        </nav>
      </div>
    </header>
  );
}
