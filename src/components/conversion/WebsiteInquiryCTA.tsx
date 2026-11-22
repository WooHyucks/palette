import { InquiryLink } from "@/components/ui/InquiryLink";

export function WebsiteInquiryCTA() {
  return (
    <section className="inquiry section-wrap">
      <div className="inquiry-mark">
        <span>P</span>
        <i />
        <i />
      </div>
      <div className="inquiry-copy">
        <p>PALETTE STUDIO</p>
        <h2>
          지금 보고 있는 디자인,
          <br />
          우리 브랜드 홈페이지로 만들어 볼까요?
        </h2>
        <span>
          연락처와 만들고 싶은 페이지를 남겨 주세요.
          <br />
          선택한 컬러와 업종도 함께 적어 주시면 좋아요.
        </span>
      </div>
      <div className="inquiry-action">
        <small>첫 홈페이지 제작</small>
        <strong>30만 원</strong>
        <InquiryLink className="button button--dark" ctaLocation="recommend">
          제작 문의하기
        </InquiryLink>
      </div>
    </section>
  );
}
