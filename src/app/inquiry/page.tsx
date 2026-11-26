import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "제작 문의",
  description:
    "선택한 디자인으로 홈페이지 제작을 문의하세요. 연락처만 남겨 주시면 확인 후 연락드립니다.",
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
