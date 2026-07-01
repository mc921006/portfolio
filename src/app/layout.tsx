import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Frontend Developer Portfolio",
    template: "%s | Frontend Developer Portfolio",
  },
  description:
    "Next.js App Router 기반으로 구성한 프론트엔드 개발자 포트폴리오입니다.",
  openGraph: {
    title: "Frontend Developer Portfolio",
    description:
      "확장 가능한 구조로 설계한 프론트엔드 개발자 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "Frontend Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
