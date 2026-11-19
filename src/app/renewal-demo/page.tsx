import type { Metadata } from "next";
import { RenewalDemoClient } from "@/components/renewal/RenewalDemoClient";

export const metadata: Metadata = {
  title: "홈페이지 리뉴얼 데모",
  description:
    "오래된 홈페이지와 리뉴얼된 홈페이지를 같은 가상 브랜드로 비교해 보세요. PALETTE 자체 제작 콘셉트입니다.",
  robots: { index: false, follow: true },
};

export default function RenewalDemoPage() {
  return <RenewalDemoClient />;
}
