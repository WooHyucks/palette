import type { Metadata } from "next";
import { SoomSite } from "@/components/samples/SoomSite";
import { SampleNavigation } from "@/components/work/SampleNavigation";
import { SampleViewTracker } from "@/components/work/SampleViewTracker";

export const metadata: Metadata = {
  title: "SOOM PILATES — Design Sample",
  description:
    "PALETTE 원페이지 디자인 샘플. 수업·가격·위치를 한 페이지에 담은 필라테스 스튜디오 랜딩페이지.",
  robots: { index: false, follow: true },
};

export default function SoomSamplePage() {
  return (
    <div className="sample-shell">
      <SampleViewTracker sampleId="soom" />
      <SampleNavigation sampleId="soom" brand="SOOM PILATES" />
      <SoomSite />
    </div>
  );
}
