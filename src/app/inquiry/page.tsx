import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "제작 문의",
  description:
    "연락처와 가게, 만들고 싶은 페이지를 남겨 주세요. 확인 후 연락드립니다.",
};

export default function InquiryPage() {
  return (
    <div className="ask-page">
      <header className="ask-bar">
        <Link href="/" className="logo" aria-label="Palette 홈">
          PALETTE<span>.</span>
        </Link>
      </header>
      <main className="ask-main">
        <Suspense fallback={<p className="ask-lead">문의 양식을 준비하고 있어요.</p>}>
          <InquiryForm />
        </Suspense>
      </main>
    </div>
  );
}
