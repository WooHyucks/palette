"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackEvent, trackEventAsync } from "@/lib/analytics";
import { WORK_SAMPLES, type WorkSampleId } from "@/lib/site";

type ServiceType = "new" | "renewal";

function readService(value: string | null): ServiceType | undefined {
  if (value === "new" || value === "renewal") return value;
  return undefined;
}

const LIMITS = {
  contact: 80,
  business: 80,
  page_brief: 500,
} as const;

function clean(value: string, max: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

function readSample(value: string | null): WorkSampleId | undefined {
  return WORK_SAMPLES.find((sample) => sample.id === value)?.id;
}

function readFrom(value: string | null) {
  if (!value || !/^[a-z0-9_]{1,40}$/.test(value)) return undefined;
  return value;
}

export function InquiryForm() {
  const params = useSearchParams();
  const from = readFrom(params.get("from"));
  const sampleId = readSample(params.get("sample"));
  const serviceParam = params.get("service");
  const sample = WORK_SAMPLES.find((item) => item.id === sampleId);
  const [service, setService] = useState<ServiceType>(readService(serviceParam) ?? "new");
  const [contact, setContact] = useState("");
  const [business, setBusiness] = useState("");
  const [brief, setBrief] = useState("");
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
      sample_id: sampleId,
      service_type: readService(serviceParam),
    });
  }, [from, sampleId, serviceParam]);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  function markStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("inquiry_start", {
      cta_location: from,
      sample_id: sampleId,
      service_type: service,
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
    if (nextBusiness.length < 2) nextErrors.business = "어떤 가게인지 적어 주세요.";
    if (nextBrief.length < 4) nextErrors.page_brief = "만들고 싶은 페이지를 간단히 적어 주세요.";
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    const ok = await trackEventAsync("inquiry_submit", {
      contact: nextContact,
      business: nextBusiness,
      page_brief: nextBrief,
      service_type: service,
      sample_id: sampleId,
      cta_location: from,
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
        어떤 페이지를
        <br />
        만들어 드릴까요?
      </h1>
      <p className="ask-lead">
        연락처, 가게, 대략적인 내용만 남겨 주세요.
        <br />
        확인하는 대로 연락드립니다.
      </p>
      <form className="ask-form" onSubmit={onSubmit} noValidate>
      {sample ? (
        <p className="ask-context">{sample.brand} 샘플을 보고 문의하시는군요.</p>
      ) : null}

      <fieldset className="ask-choice">
        <legend>어떤 작업인가요?</legend>
        <button
          type="button"
          aria-pressed={service === "new"}
          onClick={() => setService("new")}
        >
          새로 만들기
        </button>
        <button
          type="button"
          aria-pressed={service === "renewal"}
          onClick={() => setService("renewal")}
        >
          리뉴얼
        </button>
        <small>기본형 원페이지는 30만 원입니다.</small>
      </fieldset>

      <div className="ask-field">
        <label htmlFor={`${formId}-contact`}>연락처</label>
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
          aria-describedby={errors.contact ? `${formId}-contact-error` : `${formId}-contact-hint`}
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
        <label htmlFor={`${formId}-business`}>어떤 가게인가요?</label>
        <input
          id={`${formId}-business`}
          name="business"
          type="text"
          maxLength={LIMITS.business}
          placeholder="성수 카페, 필라테스 스튜디오"
          value={business}
          aria-invalid={Boolean(errors.business)}
          aria-describedby={errors.business ? `${formId}-business-error` : undefined}
          onChange={(event) => setBusiness(event.target.value)}
          onFocus={markStart}
          required
        />
        {errors.business ? (
          <p className="ask-error" id={`${formId}-business-error`}>
            {errors.business}
          </p>
        ) : null}
      </div>

      <div className="ask-field">
        <label htmlFor={`${formId}-brief`}>만들고 싶은 페이지</label>
        <textarea
          id={`${formId}-brief`}
          name="page_brief"
          maxLength={LIMITS.page_brief}
          placeholder="메뉴와 위치가 있는 원페이지, 또는 지금 홈페이지를 더 깔끔하게"
          value={brief}
          aria-invalid={Boolean(errors.page_brief)}
          aria-describedby={errors.page_brief ? `${formId}-brief-error` : `${formId}-brief-hint`}
          onChange={(event) => setBrief(event.target.value)}
          onFocus={markStart}
          required
        />
        <small id={`${formId}-brief-hint`}>
          들어갈 내용이나 참고한 샘플이 있으면 적어 주세요.
        </small>
        {errors.page_brief ? (
          <p className="ask-error" id={`${formId}-brief-error`}>
            {errors.page_brief}
          </p>
        ) : null}
      </div>

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
      <p className="ask-note">입력하신 내용은 상담을 위해서만 확인합니다.</p>
    </form>
    </>
  );
}
