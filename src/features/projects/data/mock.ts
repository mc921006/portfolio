export type Project = {
  slug: string;
  title: string;
  summary: string;
  period: string;
  type: "company" | "personal";
  role: string;
  tags: string[];
  thumbnail?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "english-study",
    title: "English Study",
    summary:
      "AI 기반 회화, 단어, 문법 학습과 TTS 발음 기능을 제공하는 영어·베트남어 학습 서비스입니다.",
    period: "2026",
    type: "personal",
    role: "Planning · Frontend Developer",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenRouter", "AI", "TTS"],
  },
  {
    slug: "ai-household-account",
    title: "AI Household Account",
    summary:
      "자연어 소비 내역을 분석해 거래 데이터를 자동 분류하고 월별 소비 패턴을 시각화하는 개인 가계부 서비스입니다.",
    period: "2026",
    type: "personal",
    role: "Planning · Frontend Developer",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenRouter", "AI"],
  },
  {
    slug: "event-platform",
    title: "Event Platform",
    summary:
      "WalletConnect 기반 사용자 인증과 포인트 시스템을 활용한 Web3 래플 이벤트 서비스입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["React", "TypeScript", "React Query", "WalletConnect", "Web3"],
  },
  {
    slug: "www-land",
    title: "WWW-LAND",
    summary:
      "Web3 서비스와 블록체인 생태계를 소개하기 위한 브랜드 중심 랜딩 플랫폼입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Vue 3", "TypeScript", "Vite", "SCSS", "SVG Animation"],
  },
  {
    slug: "gxs-additional-platform",
    title: "GXS Additional Platform",
    summary:
      "Web3 서비스와 블록체인 생태계를 직관적으로 전달하기 위한 인터랙션 플랫폼입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Vue 3", "TypeScript", "Vite", "SCSS", "SVG Animation"],
  },
  {
    slug: "gxs-platform",
    title: "GXS Platform",
    summary:
      "Web3 서비스와 블록체인 생태계를 사용자에게 제공하기 위한 플랫폼 웹 서비스입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Vue 3", "TypeScript", "Vite", "SCSS", "SVG Animation"],
  },
  {
    slug: "seller-office",
    title: "SellerOffice (SO-FE)",
    summary: "NFT 및 디지털 자산 운영을 위한 Web 기반 관리자 플랫폼입니다.",
    period: "2025",
    type: "company",
    role: "Frontend Developer",
    tags: ["Vue 3", "TypeScript", "FFmpeg", "File API", "Admin"],
  },
  {
    slug: "gurufin-corporate-website",
    title: "Gurufin Corporate Website",
    summary:
      "Web3 및 블록체인 기반 금융 서비스를 소개하는 기업 홈페이지입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Vue 3", "Vite", "TypeScript", "SCSS", "SEO"],
  },
  {
    slug: "guruscan",
    title: "GuruScan (Blockchain Explorer)",
    summary:
      "Cosmos 기반 블록체인 네트워크 데이터를 조회하고 분석할 수 있는 Blockchain Explorer입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TypeScript", "TanStack Query", "SSE"],
  },
  {
    slug: "dex-admin-fe",
    title: "DEX Admin FE",
    summary: "Web3 기반 DEX 운영을 위한 멀티체인 관리자 플랫폼입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TypeScript", "WalletConnect", "SIWE"],
  },
  {
    slug: "dex-institution-admin",
    title: "DEX Institution Admin (BEX Admin)",
    summary:
      "기관 및 운영자를 위한 Web3 기반 DEX 거래소 운영 관리자 플랫폼입니다.",
    period: "2026",
    type: "company",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TypeScript", "CosmosJS", "WalletConnect"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
