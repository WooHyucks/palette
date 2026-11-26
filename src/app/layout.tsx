import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./studio.css";
import "./samples.css";
import "./designs.css";
import "./funnel.css";

export const metadata: Metadata = {
  title: {
    default: "PALETTE | 업종에 맞는 홈페이지 디자인 추천",
    template: "%s | PALETTE",
  },
  description:
    "업종에 어울리는 홈페이지 디자인 3가지를 추천해 드려요. 마음에 드는 시안으로 30만 원에 제작합니다.",
  keywords: [
    "홈페이지 제작",
    "홈페이지 디자인 추천",
    "소상공인 홈페이지",
    "자영업자 홈페이지",
    "저렴한 홈페이지 제작",
    "원페이지 홈페이지",
  ],
  openGraph: {
    title: "PALETTE | 업종에 맞는 홈페이지 디자인 추천",
    description:
      "업종만 선택하면 어울리는 디자인 시안 3개를 바로 확인하세요. 기본 제작 ₩300,000.",
    locale: "ko_KR",
    type: "website",
    siteName: "PALETTE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PALETTE | 업종에 맞는 홈페이지 디자인 추천",
    description:
      "업종만 선택하면 어울리는 디자인 시안 3개를 바로 확인하세요. 기본 제작 ₩300,000.",
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
