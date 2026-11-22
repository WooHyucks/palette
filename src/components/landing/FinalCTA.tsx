import { InquiryLink } from "@/components/ui/InquiryLink";
import { PRICE_SHORT } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="studio-final" id="contact">
      <p className="studio-kicker studio-kicker--light">START WITH PALETTE</p>
      <h2>
        새롭게 만들거나,
        <br />
        더 멋지게 바꾸거나.
      </h2>
      <p>
        우리 브랜드에 어울리는 홈페이지,
        <br />
        {PRICE_SHORT}부터 시작하세요.
      </p>
      <InquiryLink
        className="studio-btn studio-btn--light"
        ctaLocation="final_cta"
      >
        제작 문의하기
      </InquiryLink>
    </section>
  );
}
