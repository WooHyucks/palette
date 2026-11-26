"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackEvent, trackEventAsync } from "@/lib/analytics";
import {
  getFunnelCategory,
  isFunnelCategoryId,
  type FunnelCategoryId,
} from "@/lib/designs/categories";
import {
  getDesignTemplate,
  isDesignId,
  type DesignId,
} from "@/lib/designs/templates";

const LIMITS = {
  contact: 80,
  business: 80,
  page_brief: 500,
} as const;

function clean(value: string, max: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

function readFrom(value: string | null) {
  if (!value || !/^[a-z0-9_]{1,40}$/.test(value)) return undefined;
  return value;
}

export function InquiryForm() {
  const params = useSearchParams();
  const from = readFrom(params.get("from"));
  const designParam = params.get("design");
  const categoryParam = params.get("category");
  const designId: DesignId | undefined =
    designParam && isDesignId(designParam) ? designParam : undefined;
  const categoryId: FunnelCategoryId | undefined =
    categoryParam && isFunnelCategoryId(categoryParam) ? categoryParam : undefined;
  const design = designId ? getDesignTemplate(designId) : undefined;
  const category = categoryId ? getFunnelCategory(categoryId) : undefined;

  const [contact, setContact] = useState("");
  const [business, setBusiness] = useState("");
  const [brief, setBrief] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const started = useRef(false);
  const successRef = useRef<HTMLHeadingElement>(null);
  const formId = useId();

  useEffect(() => {
    trackEvent("inquiry_view", {
      cta_location: from,
      design_id: designId,
      category_id: categoryId,
    });
  }, [from, designId, categoryId]);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  function markStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("inquiry_start", {
      cta_location: from,
      design_id: designId,
      category_id: categoryId,
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const nextContact = clean(contact, LIMITS.contact);
    const nextBusiness = clean(business, LIMITS.business);
    const nextBrief = clean(brief, LIMITS.page_brief);
    const nextErrors: Record<string, string> = {};
    if (nextContact.length < 4) nextErrors.contact = "연락받으실 곳을 입력해 주세요.";
    if (!consent) nextErrors.consent = "개인정보 수집·이용에 동의해 주세요.";
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    const ok = await trackEventAsync("inquiry_submit", {
      contact: nextContact,
      business: nextBusiness || undefined,
      page_brief: nextBrief || undefined,
      design_id: designId,
      category_id: categoryId,
      cta_location: from,
      consent: true,
    });
    setPending(false);
    if (!ok) {
      setFormError("전송되지 않았어요. 잠시 후 다시 시도해 주세요.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="ask-success">
        <p className="studio-kicker">INQUIRY</p>
        <h1 ref={successRef} tabIndex={-1}>
          문의가 전달되었습니다.
        </h1>
        <p>남겨주신 연락처로 확인 후 연락드릴게요.</p>
        <Link href="/" className="studio-btn studio-btn--primary">
          홈으로
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="studio-kicker">INQUIRY</p>
      <h1>
        이 디자인으로
        <br />
        제작 문의하기
      </h1>
      <p className="ask-lead">
        연락처만 남겨 주시면 확인 후 연락드립니다.
      </p>
      <form className="ask-form" onSubmit={onSubmit} noValidate>
        {(design || category) && (
          <div className="ask-context">
            {design ? (
              <p>
                선택 디자인 · <strong>{design.name}</strong> ({design.brand})
              </p>
            ) : null}
            {category ? <p>선택 업종 · {category.label}</p> : null}
          </div>
        )}

        <div className="ask-field">
          <label htmlFor={`${formId}-contact`}>연락처 *</label>
          <input
            id={`${formId}-contact`}
            name="contact"
            type="text"
            inputMode="text"
            autoComplete="tel"
            maxLength={LIMITS.contact}
            placeholder="전화번호, 카카오톡, 인스타그램"
            value={contact}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={
              errors.contact ? `${formId}-contact-error` : `${formId}-contact-hint`
            }
            onChange={(event) => setContact(event.target.value)}
            onFocus={markStart}
            required
          />
          <small id={`${formId}-contact-hint`}>답장을 받으실 곳이면 충분해요.</small>
          {errors.contact ? (
            <p className="ask-error" id={`${formId}-contact-error`}>
              {errors.contact}
            </p>
          ) : null}
        </div>

        <div className="ask-field">
          <label htmlFor={`${formId}-business`}>가게 이름 (선택)</label>
          <input
            id={`${formId}-business`}
            name="business"
            type="text"
            maxLength={LIMITS.business}
            placeholder="성수 카페, 필라테스 스튜디오"
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            onFocus={markStart}
          />
        </div>

        <div className="ask-field">
          <label htmlFor={`${formId}-brief`}>문의 내용 (선택)</label>
          <textarea
            id={`${formId}-brief`}
            name="page_brief"
            maxLength={LIMITS.page_brief}
            placeholder="원하시는 수정이나 참고 사항을 적어 주세요."
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
            onFocus={markStart}
          />
        </div>

        <label className="ask-consent" htmlFor={`${formId}-consent`}>
          <input
            id={`${formId}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            onFocus={markStart}
          />
          <span>문의 응대를 위한 개인정보 수집·이용에 동의합니다.</span>
        </label>
        {errors.consent ? <p className="ask-error">{errors.consent}</p> : null}

        {formError ? (
          <p className="ask-error" role="alert">
            {formError}
          </p>
        ) : null}

        <button
          className="studio-btn studio-btn--primary ask-submit"
          type="submit"
          disabled={pending}
        >
          {pending ? "보내는 중" : "문의 보내기"}
        </button>
        <p className="ask-note">기본형 원페이지 제작은 30만 원입니다.</p>
      </form>
    </>
  );
}
