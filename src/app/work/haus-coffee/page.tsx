import type { Metadata } from "next";
import { HausCoffeeSite } from "@/components/samples/HausCoffeeSite";
import { SampleNavigation } from "@/components/work/SampleNavigation";
import { SampleViewTracker } from "@/components/work/SampleViewTracker";

export const metadata: Metadata = {
  title: "HAUS COFFEE — Design Sample",
  description:
    "PALETTE 원페이지 디자인 샘플. 시즌 메뉴·단체 주문·매장 정보를 담은 카페 랜딩페이지.",
  robots: { index: false, follow: true },
};

export default function HausCoffeeSamplePage() {
  return (
    <div className="sample-shell">
      <SampleViewTracker sampleId="haus-coffee" />
      <SampleNavigation sampleId="haus-coffee" brand="HAUS COFFEE" />
      <HausCoffeeSite />
    </div>
  );
}
