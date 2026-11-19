import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./studio.css";
import "./samples.css";

export const metadata: Metadata = {
  title: {
    default: "PALETTE | 홈페이지 제작·리뉴얼 30만 원",
    template: "%s | PALETTE",
  },
  description:
    "우리 가게 홈페이지, 30만 원. 신규 홈페이지 제작부터 오래된 홈페이지 리뉴얼까지. 디자인을 먼저 확인하고 브랜드에 맞게 제작하세요.",
  keywords: [
    "홈페이지 제작",
    "홈페이지 리뉴얼",
    "홈페이지 리디자인",
    "소상공인 홈페이지",
    "자영업자 홈페이지",
    "저렴한 홈페이지 제작",
    "반응형 홈페이지",
  ],
  openGraph: {
    title: "PALETTE | 홈페이지 제작·리뉴얼 30만 원",
    description:
      "신규 제작과 리뉴얼 모두 기본형 ₩300,000. 디자인을 먼저 확인하고 문의하세요.",
    locale: "ko_KR",
    type: "website",
    siteName: "PALETTE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PALETTE | 홈페이지 제작·리뉴얼 30만 원",
    description:
      "신규 제작과 리뉴얼 모두 기본형 ₩300,000. 디자인을 먼저 확인하고 문의하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
