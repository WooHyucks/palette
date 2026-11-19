"use client";

import { ScaledCanvas } from "@/components/preview/ScaledCanvas";
import { AuroSite } from "@/components/samples/AuroSite";
import { HausCoffeeSite } from "@/components/samples/HausCoffeeSite";
import { SoomSite } from "@/components/samples/SoomSite";
import type { WorkSampleId } from "@/lib/site";

const SITES: Record<WorkSampleId, () => React.JSX.Element> = {
  auro: AuroSite,
  "haus-coffee": HausCoffeeSite,
  soom: SoomSite,
};

interface SamplePreviewProps {
  sampleId: WorkSampleId;
  mobileHeight?: number;
  breakpoint?: number;
  className?: string;
}

export function SamplePreview({
  sampleId,
  mobileHeight = 720,
  breakpoint,
  className,
}: SamplePreviewProps) {
  const Site = SITES[sampleId];
  return (
    <ScaledCanvas
      className={className}
      breakpoint={breakpoint}
      mobile={{ width: 390, height: mobileHeight }}
    >
      {() => <Site />}
    </ScaledCanvas>
  );
}
