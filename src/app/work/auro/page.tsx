import type { Metadata } from "next";
import { AuroSite } from "@/components/samples/AuroSite";
import { SampleNavigation } from "@/components/work/SampleNavigation";
import { SampleViewTracker } from "@/components/work/SampleViewTracker";

export const metadata: Metadata = {
  title: "AURO — Design Sample",
  description:
    "PALETTE 원페이지 디자인 샘플. 신제품 하나를 크게 보여주는 제품 런칭 랜딩페이지.",
  robots: { index: false, follow: true },
};

export default function AuroSamplePage() {
  return (
    <div className="sample-shell">
      <SampleViewTracker sampleId="auro" />
      <SampleNavigation sampleId="auro" brand="AURO" />
      <AuroSite />
    </div>
  );
}
