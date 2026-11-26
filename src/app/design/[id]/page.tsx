import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  DesignBackLink,
  DesignNavInquiry,
} from "@/components/funnel/DesignNavLinks";
import { DesignPreviewClient } from "@/components/funnel/DesignPreviewClient";
import { DesignStickyCta } from "@/components/funnel/DesignStickyCta";
import {
  DESIGN_TEMPLATES,
  getDesignTemplate,
  isDesignId,
  type DesignId,
} from "@/lib/designs/templates";

interface DesignPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return DESIGN_TEMPLATES.map((design) => ({ id: design.id }));
}

export async function generateMetadata({
  params,
}: DesignPageProps): Promise<Metadata> {
  const { id } = await params;
  const template = getDesignTemplate(id);
  if (!template) return { title: "디자인 시안" };
  return {
    title: `${template.name} — ${template.brand}`,
    description: template.blurb,
    robots: { index: false, follow: true },
  };
}

export default function DesignPage({ params }: DesignPageProps) {
  return (
    <Suspense fallback={<DesignPageFallback />}>
      <DesignPageContent params={params} />
    </Suspense>
  );
}

function DesignPageFallback() {
  return (
    <div className="design-shell">
      <div className="design-nav">
        <Link href="/">← PALETTE</Link>
        <span className="design-nav-brand">DESIGN SAMPLE</span>
        <Link href="/inquiry">제작 문의</Link>
      </div>
      <p className="design-sample-note">시안을 준비하고 있어요.</p>
    </div>
  );
}

async function DesignPageContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isDesignId(id)) notFound();

  const template = getDesignTemplate(id);
  if (!template) notFound();
  const designId = id as DesignId;

  return (
    <div className="design-shell">
      <div className="design-nav">
        <Suspense fallback={<Link href="/">← PALETTE</Link>}>
          <DesignBackLink />
        </Suspense>
        <span className="design-nav-brand">
          {template.brand} · DESIGN SAMPLE
        </span>
        <Suspense fallback={<Link href="/inquiry">제작 문의</Link>}>
          <DesignNavInquiry designId={designId} />
        </Suspense>
      </div>
      <p className="design-sample-note">
        실제 고객 사례가 아닌 PALETTE 디자인 시안입니다.
      </p>
      <Suspense fallback={null}>
        <DesignPreviewClient designId={designId} />
      </Suspense>
      <Suspense fallback={null}>
        <DesignStickyCta designId={designId} />
      </Suspense>
    </div>
  );
}
