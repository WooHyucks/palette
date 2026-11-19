"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import type { WorkSampleId } from "@/lib/site";

export function SampleViewTracker({ sampleId }: { sampleId: WorkSampleId }) {
  useEffect(() => {
    trackEvent("sample_view", {
      sample_id: sampleId,
      cta_location: "sample_page",
    });
  }, [sampleId]);

  return null;
}
