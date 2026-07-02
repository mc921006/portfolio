export type ExperienceProject = {
  name: string;
  description: string;
  responsibilities: string[];
  tech: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  projects: ExperienceProject[];
};

export const experienceData: Experience[] = [
  {
    company: "Gurufin",
    role: "Frontend Developer",
    period: "2025 - Present",
    description: "블록체인 Explorer 서비스 프론트엔드 개발 및 유지보수",
    tech: ["Next.js", "TypeScript", "React", "SCSS"],
    projects: [
      {
        name: "GuruScan (Blockchain Explorer)",
        description: "Blockchain Explorer 서비스 개발",
        responsibilities: [
          "블록 상세 화면 개발",
          "트랜잭션 상세 화면 개발",
          "주소 상세 화면 개발",
          "API 연동",
          "데이터 시각화",
          "유지보수 및 성능 개선",
        ],
        tech: ["Next.js", "TypeScript", "React"],
      },
      {
        name: "GXS Platform",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "GXS Additional Platform",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "SellerOffice (NFT Admin)",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "DEX Admin FE",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "BEX Admin",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "WWW-LAND",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "Gurufin Website",
        description: "",
        responsibilities: [],
        tech: [],
      },
      {
        name: "Event Platform",
        description: "",
        responsibilities: [],
        tech: [],
      },
    ],
  },
  {
    company: "Zion ITS",
    role: "Frontend Developer",
    period: "2023.11 - 2024.05",
    description: "Tanium 기반 Endpoint 보안 솔루션 개발",
    tech: ["React", "Next.js", "TypeScript"],
    projects: [
      {
        name: "X-Factor",
        description: "Tanium 데이터를 활용한 Endpoint 보안 솔루션",
        responsibilities: [
          "메인 페이지 개발",
          "ApexCharts Dashboard 구현",
          "PDF Export 기능 개발",
        ],
        tech: ["React", "Next.js", "TypeScript", "CSS Modules"],
      },
    ],
  },
  {
    company: "ASTEMS",
    role: "Software Engineer",
    period: "2021.07 - 2023.09",
    description: "POS 시스템 및 매장 운영 소프트웨어 개발과 유지보수",
    tech: ["C++", "MFC"],
    projects: [
      {
        name: "Point Reward System",
        description: "카드 결제 시 포인트 적립 기능 개발",
        responsibilities: ["포인트 적립 기능 개발", "유지보수 및 기능 개선"],
        tech: ["C++", "MFC"],
      },
      {
        name: "Kitchen Display System",
        description: "주방 주문 관리 시스템 개발 및 기능 개선",
        responsibilities: [
          "로그인 기능 추가",
          "UI/UX 개선",
          "1:1 -> 1:N 통신 구조 개선",
          "주문 완료 및 취소 기능 개발",
          "네트워크 재연결 기능 구현",
        ],
        tech: ["C++", "MFC"],
      },
      {
        name: "POS Kiosk",
        description: "POS와 연동되는 키오스크 시스템 개발",
        responsibilities: [
          "주문 및 결제 기능 개발",
          "UI/UX 개발",
          "포인트 적립 및 사용",
          "영수증 출력 기능 개선",
          "카드 결제 연동",
        ],
        tech: ["C++", "MFC"],
      },
      {
        name: "Internal Tool",
        description: "기술지원팀 업무 관리 시스템",
        responsibilities: ["UI 개발", "출장 상태 관리", "작업 내역 관리"],
        tech: ["SvelteKit", "Tailwind CSS"],
      },
    ],
  },
  {
    company: "SafeMon",
    role: "Android Developer",
    period: "2019.09 - 2021.06",
    description: "쇼핑몰 WebApp 개발",
    tech: ["Android", "Java"],
    projects: [
      {
        name: "Shopping WebApp",
        description: "쇼핑몰 WebApp 개발",
        responsibilities: [
          "쇼핑몰 UI 개발",
          "채팅 기능 개발",
          "QR 상품 조회 기능 개발",
        ],
        tech: ["Android", "Java"],
      },
    ],
  },
];
