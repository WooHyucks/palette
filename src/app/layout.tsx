import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Palette — 브랜드 컬러 추천",
    template: "%s | Palette",
  },
  description:
    "업종만 선택하면 어울리는 컬러 조합을 추천하고, 실제 홈페이지에 적용된 모습까지 보여드려요.",
  keywords: ["브랜드 컬러", "컬러 팔레트", "홈페이지 디자인", "Palette"],
  openGraph: {
    title: "Palette — 브랜드 컬러 추천",
    description:
      "업종만 선택하세요. 어울리는 컬러 조합과 실제 홈페이지 미리보기를 바로 확인할 수 있어요.",
    locale: "ko_KR",
    type: "website",
    siteName: "Palette",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palette — 브랜드 컬러 추천",
    description:
      "업종만 선택하면 어울리는 컬러 조합과 홈페이지 미리보기를 확인할 수 있어요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">{children}</body>
    </html>
  );
}
