
export type Link = { label: string; url: string };
export type Experience = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};
export type Education = {
  school: string; degree: string; end?: string; bullets?: string[];
};

export interface ResumeData {
  name: string;
  email: string;
  headline: string;
  summary: string;
  skills: string[];
  links: Link[];
  experiences: Experience[];
  education: Education[];
  languages: string[];
  projects: { name: string; description: string; bullets?: string[]; }[];
}

const data: ResumeData = {
  name: "Geun Woo Park (박근우)",
  email: "parklaus1078@gmail.com",
  headline: "Backend / Fullstack Engineer",
  summary:
    "소통의 중요성을 아는 개발자, 박근우입니다. 계획을 세우고 주어진 기한 내에 높은 완성도로 마무리하는 것을 중요하게 생각합니다. 새로운 시도에 거리낌이 없고, 의견 차이가 있는 상황에서도 원활히 협의합니다.",
  skills: ["Python", "FastAPI", "TypeScript", "Next.js", "MongoDB", "Azure", "GitHub"],
  links: [
    { label: "GitHub", url: "https://github.com/parklaus1078" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/geun-woo-park-b4b54b1a0/" },
    { label: "Medium", url: "https://medium.com/@parklaus1078" }
  ],
  experiences: [
    {
      company: "RADEXEL INC.",
      title: "Backend Developer",
      start: "2025.04",
      end: "Present",
      bullets: [
        "비공개 프로젝트 2: 장기 치료 환자들이 비대면으로 상태를 공유하고 피드백을 받을 수 있는 서비스 백엔드 개발.",
        "Auth0 기반 유저/권한 관리, Azure Web App + FastAPI 서버, MongoDB 데이터 저장 구성.",
        "데이터베이스 스키마/아키텍처 설계, CI/CD 초기 구축 및 최적화, 유저 플로우 기획, CRUD API 개발."
      ]
    },
    {
      company: "RADEXEL INC.",
      title: "Fullstack Developer",
      start: "2024.03",
      end: "Present",
      bullets: [
        "비공개 프로젝트 1 (DICOM, RT): 인가된 유저가 CT/MRI 등 DICOM 파일 및 메타데이터를 열람/처리하는 서비스 개발.",
        "Auth로 유저/권한 관리, Azure Web App + FastAPI 서버와 Function App(Event/HTTP Trigger) 서버리스 연동.",
        "DICOM 전용 DB(Service) + MongoDB 저장, 트랜잭션/ReplicaSet으로 데이터 일관성 유지, 배포 자동화 및 문서화."
      ]
    },
    {
      company: "VTPL Co., Ltd.",
      title: "Full‑stack Developer",
      start: "2023.01",
      end: "2023.09",
      bullets: [
        "상품 재고/출고량 추적, 상품 정보 관리, MD 업무 자동화 백오피스 웹 어플리케이션 개발.",
        "외부 API + Cron 스케줄러로 정형 데이터 주기적 추출/적재, 이상 징후 슬랙 알림/로그 모니터링.",
        "데이터 시각화(플롯) 및 카테고리/조건별 필터링, 주소 검증/포맷 변환 등 자동화 기능 구현."
      ]
    }
  ],
  education: [
    {
      school: "University of British Columbia",
      degree: "B.Sc. in Statistics",
      bullets: ["데이터 기반 예측/검정 및 통계적 신뢰도 평가 중심의 커리큘럼"]
    }
  ],
  languages: ["English (Fluent)", "Korean (Native)"],
  projects: [
    {
      name: "bulkit.net (개인 프로젝트)",
      description:
        "국내 프로틴/가공식품 영양 정보를 제공하는 1인 개발 서비스. ",
      bullets: [
        "Frontend: Next.js", 
        "Backend: FastAPI", "DB: MongoDB", 
        "Azure Static Web App 배포 및 커스텀 도메인 연결",
        "무한 스크롤, 다항목 검색, UI/UX 개선, SEO",
        "서버/클라이언트 배포 및 클라우드 구조/비용 관리",
        "광고 임베딩(쿠팡 파트너스) 등"
      ]
    }
  ]
};

export default data;
