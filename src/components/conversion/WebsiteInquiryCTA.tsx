"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { copyText } from "@/components/palette/ColorCopyButton";
import { trackEvent } from "@/lib/analytics";
import type { Category, Palette } from "@/types/palette";

interface WebsiteInquiryCTAProps {
  category: Category;
  palette: Palette;
  onToast: (message: string) => void;
}

export function WebsiteInquiryCTA({
  category,
  palette,
  onToast,
}: WebsiteInquiryCTAProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function buildInquiryText() {
    return [
      "[Palette 홈페이지 제작 문의]",
      `이름: ${name || "(미입력)"}`,
      `연락처: ${contact || "(미입력)"}`,
      `업종: ${category.name} (${category.id})`,
      `선택한 팔레트: ${palette.name} (${palette.id})`,
      `컬러: Base ${palette.colors.base} / Sub ${palette.colors.secondary} / Accent ${palette.colors.accent}`,
      `메시지: ${message || "(미입력)"}`,
    ].join("\n");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackEvent("website_inquiry_clicked", {
      category_id: category.id,
      palette_id: palette.id,
      palette_name: palette.name,
    });
    const ok = await copyText(buildInquiryText());
    onToast(
      ok
        ? "문의 내용이 클립보드에 복사됐어요."
        : "복사에 실패했어요. 아래 내용을 직접 선택해 주세요.",
    );
  }

  return (
    <section className="inquiry section-wrap">
      <div className="inquiry-mark">
        <span>P</span>
        <i />
        <i />
      </div>
      <div className="inquiry-copy">
        <p>PALETTE STUDIO</p>
        <h2>
          지금 보고 있는 디자인,
          <br />
          우리 브랜드 홈페이지로 만들어 볼까요?
        </h2>
        <span>
          마음에 드는 컬러를 골랐다면,
          <br />
          실제 홈페이지 제작까지 도와드릴게요.
        </span>
      </div>
      <div className="inquiry-action">
        <small>기본형 홈페이지 제작</small>
        <strong>30만 원</strong>
        {!open ? (
          <Button
            type="button"
            onClick={() => {
              setOpen(true);
              trackEvent("website_inquiry_clicked", {
                category_id: category.id,
                palette_id: palette.id,
                palette_name: palette.name,
              });
            }}
          >
            이 디자인으로 제작 문의 <Icon name="arrow" size={18} />
          </Button>
        ) : (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              aria-label="이름"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="이메일 또는 전화번호"
              aria-label="연락처"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="원하시는 스타일이나 일정"
              aria-label="메시지"
            />
            <Button type="submit">
              문의 내용 복사하기 <Icon name="copy" size={18} />
            </Button>
            <pre>{buildInquiryText()}</pre>
          </form>
        )}
      </div>
    </section>
  );
}
