export interface PreviewCard {
  title: string;
  subtitle: string;
  meta?: string;
  image: string;
}

export interface PreviewContent {
  subcategoryId: string;
  brand: string;
  brandLines?: [string, string];
  nav: string[];
  eyebrow: string;
  headline: string;
  description: string;
  cta: string;
  heroImage: string;
  cards: PreviewCard[];
  storyTitle: string;
  storyBody: string;
  secondaryCta: string;
  footerNote: string;
}

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** 세부 업종별 미리보기 콘텐츠. 색상은 JSON에서만 가져온다. */
export const PREVIEW_CONTENT: Record<string, Record<string, PreviewContent>> = {
  food: {
    cafe: {
      subcategoryId: "cafe",
      brand: "MOMENT COFFEE",
      brandLines: ["MOMENT", "COFFEE"],
      nav: ["ABOUT", "MENU", "SPACE", "VISIT"],
      eyebrow: "COFFEE & SLOW MOMENTS",
      headline: "일상에 스며드는\n작은 커피의 순간",
      description:
        "좋은 원두와 편안한 공간에서 당신만의 시간을 만나보세요.",
      cta: "메뉴 보기",
      heroImage: unsplash("photo-1567880905822-56f8e06fe630"),
      cards: [
        {
          title: "모먼트 시그니처 라테",
          subtitle: "부드러운 우유와 깊은 에스프레소",
          meta: "₩6,500",
          image: unsplash("photo-1495474472287-4d71bcdd2085", 800),
        },
        {
          title: "하우스 드립",
          subtitle: "싱글 오리진의 결을 살린 한 잔",
          meta: "₩6,000",
          image: unsplash("photo-1497935586351-b67a49e012bf", 800),
        },
        {
          title: "버터 스콘",
          subtitle: "매일 아침 구워내는 담백한 스콘",
          meta: "₩4,800",
          image: unsplash("photo-1486427944299-d1955d23e34d", 800),
        },
      ],
      storyTitle: "바쁜 하루 사이,\n잠시 머물 수 있는 곳",
      storyBody:
        "매일 마시는 한 잔이 조금 더 특별해지도록. 모먼트는 커피와 공간의 온도를 세심하게 고민합니다.",
      secondaryCta: "매장 안내 보기",
      footerNote: "서울 · 성수 · 매일 09:00–21:00",
    },
    restaurant: {
      subcategoryId: "restaurant",
      brand: "TABLE 37",
      brandLines: ["TABLE", "37"],
      nav: ["MENU", "CHEF", "RESERVE"],
      eyebrow: "SEASONAL DINING",
      headline: "제철 재료로 차리는\n오늘의 테이블",
      description: "정갈한 플레이팅과 따뜻한 접대로 완성하는 한 끼입니다.",
      cta: "메뉴 예약하기",
      heroImage: unsplash("photo-1414235077428-338989a2e8c0"),
      cards: [
        {
          title: "오늘의 코스",
          subtitle: "제철 채소와 구운 단백질",
          meta: "₩48,000",
          image: unsplash("photo-1504674900247-0877df9cc836", 800),
        },
        {
          title: "시그니처 파스타",
          subtitle: "집에서 만든 생면과 소스",
          meta: "₩22,000",
          image: unsplash("photo-1473093298633-edd95d8a4e4e", 800),
        },
        {
          title: "디저트 플레이트",
          subtitle: "계절 과일과 크림",
          meta: "₩12,000",
          image: unsplash("photo-1488477181946-6428a0291777", 800),
        },
      ],
      storyTitle: "손끝에서 시작하는\n정갈한 한 끼",
      storyBody:
        "재료의 결을 살리는 요리를 중심으로, 편안하면서도 기억에 남는 식탁을 만듭니다.",
      secondaryCta: "예약 안내",
      footerNote: "예약 필수 · 화–일 11:30–21:00",
    },
    bakery: {
      subcategoryId: "bakery",
      brand: "FLOUR HOUSE",
      brandLines: ["FLOUR", "HOUSE"],
      nav: ["BREAD", "PASTRY", "STORY"],
      eyebrow: "DAILY BAKERY",
      headline: "매일 아침,\n손으로 빚는 빵의 결",
      description: "발효의 시간을 기다린 빵과 따뜻한 버터의 향기를 전합니다.",
      cta: "오늘의 빵 보기",
      heroImage: unsplash("photo-1509440159596-0249088772ff"),
      cards: [
        {
          title: "사워도우",
          subtitle: "천연 발효의 깊은 풍미",
          meta: "₩7,200",
          image: unsplash("photo-1549931319-a545dcf3bc73", 800),
        },
        {
          title: "크루아상",
          subtitle: "겹겹이 쌓인 버터 레이어",
          meta: "₩4,500",
          image: unsplash("photo-1555507036-ab1f4038808a", 800),
        },
        {
          title: "시나몬 번",
          subtitle: "은은한 향신료와 크림",
          meta: "₩5,200",
          image: unsplash("photo-1509365465985-25d11c17e812", 800),
        },
      ],
      storyTitle: "천천히 발효된\n하루의 시작",
      storyBody:
        "밀가루, 물, 시간의 균형으로 완성되는 빵. 플라우어 하우스는 매일의 루틴을 소중히 합니다.",
      secondaryCta: "매장 위치",
      footerNote: "품절 시 조기 마감될 수 있어요",
    },
    dessert: {
      subcategoryId: "dessert",
      brand: "SWEET ROOM",
      brandLines: ["SWEET", "ROOM"],
      nav: ["CAKE", "SEASON", "ORDER"],
      eyebrow: "DESSERT ATELIER",
      headline: "달콤한 하루를\n조금 더 천천히",
      description: "섬세한 레이어와 제철 과일로 만든 디저트를 소개합니다.",
      cta: "디저트 메뉴",
      heroImage: unsplash("photo-1464349095431-e9a21285b5f3"),
      cards: [
        {
          title: "베리 쇼트케이크",
          subtitle: "제철 베리와 생크림",
          meta: "₩8,500",
          image: unsplash("photo-1565958011703-44f9829ba187", 800),
        },
        {
          title: "초콜릿 타르트",
          subtitle: "진한 가나슈와 바삭한 크러스트",
          meta: "₩7,800",
          image: unsplash("photo-1578985545062-69928b1d9587", 800),
        },
        {
          title: "시트러스 무스",
          subtitle: "상큼한 시트러스의 여운",
          meta: "₩7,200",
          image: unsplash("photo-1488477181946-6428a0291777", 800),
        },
      ],
      storyTitle: "작은 접시 위에\n계절을 올리다",
      storyBody:
        "달콤함과 산미의 균형을 맞추며, 기념일에도 일상의 순간에도 어울리는 디저트를 만듭니다.",
      secondaryCta: "예약 주문",
      footerNote: "홀케이크 2일 전 예약",
    },
  },
  commerce: {
    fashion: {
      subcategoryId: "fashion",
      brand: "FORME",
      brandLines: ["FOR", "ME"],
      nav: ["NEW", "LOOKBOOK", "SHOP"],
      eyebrow: "NEW SEASON",
      headline: "일상에 취향을\n더하다",
      description: "군더더기 없는 실루엣과 좋은 소재로 구성된 라이프스타일 컬렉션입니다.",
      cta: "쇼핑하기",
      heroImage: unsplash("photo-1441986300917-64674bd600d8"),
      cards: [
        {
          title: "소프트 니트",
          subtitle: "시즌리스 실루엣",
          meta: "₩68,000",
          image: unsplash("photo-1434389677669-e08b4cac3105", 800),
        },
        {
          title: "미니멀 토트",
          subtitle: "매일 드는 가방",
          meta: "₩94,000",
          image: unsplash("photo-1548036328-c9fa89d128fa", 800),
        },
        {
          title: "리넨 셔츠",
          subtitle: "가벼운 텍스처",
          meta: "₩52,000",
          image: unsplash("photo-1596755094514-f87e34085b2c", 800),
        },
      ],
      storyTitle: "취향을 고르는\n가장 단순한 방법",
      storyBody:
        "FORME는 유행보다 오래 입는 옷을 제안합니다. 색과 실루엣이 일상에 자연스럽게 녹아들도록요.",
      secondaryCta: "룩북 보기",
      footerNote: "무료 교환 · 2–3일 내 발송",
    },
    lifestyle: {
      subcategoryId: "lifestyle",
      brand: "FORME",
      brandLines: ["FOR", "ME"],
      nav: ["OBJECTS", "HOME", "EDIT"],
      eyebrow: "LIFESTYLE EDIT",
      headline: "공간에 취향을\n더하다",
      description: "일상 오브제와 홈 아이템을 큐레이션한 편집숍입니다.",
      cta: "컬렉션 보기",
      heroImage: unsplash("photo-1616486338812-3dadae4b4ace"),
      cards: [
        {
          title: "세라믹 머그",
          subtitle: "핸드메이드 텍스처",
          meta: "₩28,000",
          image: unsplash("photo-1514228742587-6b1558fcca3d", 800),
        },
        {
          title: "린넨 쿠션",
          subtitle: "부드러운 내추럴 톤",
          meta: "₩42,000",
          image: unsplash("photo-1584100936595-c0654b55a2e2", 800),
        },
        {
          title: "우드 트레이",
          subtitle: "생활 속 작은 무대",
          meta: "₩36,000",
          image: unsplash("photo-1586023492125-27b2c045efd7", 800),
        },
      ],
      storyTitle: "집이 취향이 되는\n순간",
      storyBody:
        "매일 쓰는 물건일수록 형태와 색이 중요합니다. FORME의 큐레이션을 둘러보세요.",
      secondaryCta: "신상품 보기",
      footerNote: "멤버십 적립 가능",
    },
  },
  wellness: {
    salon: {
      subcategoryId: "salon",
      brand: "SLOW RITUAL",
      brandLines: ["SLOW", "RITUAL"],
      nav: ["SERVICE", "SPACE", "BOOK"],
      eyebrow: "HAIR & CARE",
      headline: "나를 위한\n가장 편안한 시간",
      description: "얼굴형과 라이프스타일에 맞춘 섬세한 스타일링을 제공합니다.",
      cta: "예약하기",
      heroImage: unsplash("photo-1560066984-138dadb4c035"),
      cards: [
        {
          title: "시그니처 컷",
          subtitle: "형태를 살리는 커트",
          meta: "60 min",
          image: unsplash("photo-1522337360788-8b13dee7a37e", 800),
        },
        {
          title: "컬러 케어",
          subtitle: "두피부터 결까지",
          meta: "90 min",
          image: unsplash("photo-1519699047748-de8e457a634e", 800),
        },
        {
          title: "헤드 스파",
          subtitle: "긴장을 푸는 릴렉스",
          meta: "40 min",
          image: unsplash("photo-1540555700478-4be289fbecef", 800),
        },
      ],
      storyTitle: "느린 루틴이\n아름다움을 만든다",
      storyBody:
        "SLOW RITUAL은 과한 연출보다 자연스러운 완성도를 추구합니다.",
      secondaryCta: "공간 소개",
      footerNote: "예약 우선 · 워크인 가능",
    },
    skin: {
      subcategoryId: "skin",
      brand: "SLOW RITUAL",
      brandLines: ["SLOW", "RITUAL"],
      nav: ["CARE", "PROGRAM", "BOOK"],
      eyebrow: "SKIN RITUAL",
      headline: "피부와 마음이\n쉬어가는 시간",
      description: "자극을 줄인 케어로 편안한 컨디션을 만듭니다.",
      cta: "프로그램 예약",
      heroImage: unsplash("photo-1540555700478-4be289fbecef"),
      cards: [
        {
          title: "딥 클린 케어",
          subtitle: "기본을 다지는 클렌징",
          meta: "50 min",
          image: unsplash("photo-1570172619604-71b0c4f4a2e3", 800),
        },
        {
          title: "릴렉스 마스크",
          subtitle: "진정과 수분 케어",
          meta: "70 min",
          image: unsplash("photo-1515377905703-c4788e51af15", 800),
        },
        {
          title: "밸런스 프로그램",
          subtitle: "컨디션에 맞춘 관리",
          meta: "80 min",
          image: unsplash("photo-1487412720507-e7ab37603c6f", 800),
        },
      ],
      storyTitle: "조용한 케어가\n오래 간다",
      storyBody:
        "과도한 약속 없이, 피부 상태에 맞춘 편안한 루틴을 제안합니다.",
      secondaryCta: "상담 문의",
      footerNote: "첫 방문 상담 포함",
    },
    pilates: {
      subcategoryId: "pilates",
      brand: "SLOW RITUAL",
      brandLines: ["SLOW", "RITUAL"],
      nav: ["CLASS", "STUDIO", "BOOK"],
      eyebrow: "MOVE WELL",
      headline: "균형 잡힌 몸과\n맑은 호흡",
      description: "소규모 클래스로 정확한 움직임과 호흡을 익힙니다.",
      cta: "클래스 예약",
      heroImage: unsplash("photo-1518611012118-696072aa579a"),
      cards: [
        {
          title: "리포머 베이직",
          subtitle: "기초 정렬과 코어",
          meta: "55 min",
          image: unsplash("photo-1571019614242-c5c5dee9f50b", 800),
        },
        {
          title: "모빌리티 플로우",
          subtitle: "유연성과 호흡",
          meta: "50 min",
          image: unsplash("photo-1544367567-0f2fcb009e0b", 800),
        },
        {
          title: "프라이빗 세션",
          subtitle: "1:1 맞춤 지도",
          meta: "60 min",
          image: unsplash("photo-1599901860904-17e6ed7083a0", 800),
        },
      ],
      storyTitle: "천천히, 정확하게\n움직이는 연습",
      storyBody:
        "강도보다 정렬을 우선합니다. 일상에 지속 가능한 움직임을 남기세요.",
      secondaryCta: "스케줄 보기",
      footerNote: "소규모 정원제 운영",
    },
  },
  professional: {
    clinic: {
      subcategoryId: "clinic",
      brand: "온유 클리닉",
      nav: ["소개", "진료안내", "예약"],
      eyebrow: "EVERYDAY CARE",
      headline: "당신의 일상을\n생각하는 진료",
      description:
        "필요한 정보를 명확히 안내하고, 편안한 상담으로 다음 단계를 함께 정합니다.",
      cta: "상담 예약",
      heroImage: unsplash("photo-1519494026892-80bbd2d6fd0d"),
      cards: [
        {
          title: "일반 진료 안내",
          subtitle: "방문 전 확인하면 좋은 정보",
          image: unsplash("photo-1576091160399-112ba8d25d1d", 800),
        },
        {
          title: "예방 관리",
          subtitle: "일상 속 건강 루틴",
          image: unsplash("photo-1631217868264-e5b90bb7e133", 800),
        },
        {
          title: "이용 안내",
          subtitle: "진료 시간과 오시는 길",
          image: unsplash("photo-1504813184591-01572f98c85f", 800),
        },
      ],
      storyTitle: "정확하고 따뜻한\n안내를 우선합니다",
      storyBody:
        "온유 클리닉은 과장된 약속 없이, 이해하기 쉬운 설명과 차분한 동선을 제공합니다.",
      secondaryCta: "이용 안내 보기",
      footerNote: "평일 09:00–18:00 · 토요일 09:00–13:00",
    },
    dental: {
      subcategoryId: "dental",
      brand: "온유 클리닉",
      nav: ["소개", "진료안내", "예약"],
      eyebrow: "DENTAL CARE",
      headline: "편안한 상담으로\n시작하는 구강 관리",
      description: "진료 전 과정과 주의사항을 차분히 안내합니다.",
      cta: "상담 예약",
      heroImage: unsplash("photo-1629909613654-28e377c37b09"),
      cards: [
        {
          title: "정기 검진 안내",
          subtitle: "방문 주기와 준비물",
          image: unsplash("photo-1606811841689-23dfddce3e95", 800),
        },
        {
          title: "예방 케어",
          subtitle: "일상 관리 팁",
          image: unsplash("photo-1588776814546-1ffcf47267a5", 800),
        },
        {
          title: "첫 방문 안내",
          subtitle: "문진과 상담 순서",
          image: unsplash("photo-1598256989800-fe5f95da9787", 800),
        },
      ],
      storyTitle: "신뢰는 설명에서\n시작됩니다",
      storyBody:
        "치료 효과를 단정하지 않고, 과정과 선택지를 명확히 공유하는 것을 원칙으로 합니다.",
      secondaryCta: "오시는 길",
      footerNote: "예약 우선 운영",
    },
  },
  digital: {
    saas: {
      subcategoryId: "saas",
      brand: "FLOW",
      brandLines: ["FLO", "W"],
      nav: ["Product", "Features", "Pricing"],
      eyebrow: "WORK OS",
      headline: "복잡한 업무를\n더 단순하게",
      description: "반복되는 업무를 정리하고, 팀이 같은 화면에서 움직일 수 있게 돕습니다.",
      cta: "시작하기",
      heroImage: unsplash("photo-1551288049-bebda4e38f71"),
      cards: [
        {
          title: "자동 정리",
          subtitle: "반복 업무를 줄이는 워크플로",
          image: unsplash("photo-1460925895917-afdab827c52f", 800),
        },
        {
          title: "실시간 협업",
          subtitle: "팀과 한 화면에서 동기화",
          image: unsplash("photo-1553877522-43269d4ea984", 800),
        },
        {
          title: "인사이트",
          subtitle: "필요한 지표만 간단히",
          image: unsplash("photo-1551288049-bebda4e38f71", 800),
        },
      ],
      storyTitle: "제품이 말이 되도록\n설계합니다",
      storyBody:
        "FLOW는 기능 나열보다 실제 업무 흐름에 맞춰, 시작부터 완료까지를 단순하게 만듭니다.",
      secondaryCta: "데모 보기",
      footerNote: "14일 무료 체험",
    },
    app: {
      subcategoryId: "app",
      brand: "FLOW",
      brandLines: ["FLO", "W"],
      nav: ["App", "Features", "Download"],
      eyebrow: "MOBILE FIRST",
      headline: "손안에서 끝나는\n가벼운 업무",
      description: "이동 중에도 핵심 흐름을 놓치지 않는 앱 경험을 제공합니다.",
      cta: "앱 시작하기",
      heroImage: unsplash("photo-1512941937669-90a1b58e7e9c"),
      cards: [
        {
          title: "빠른 캡처",
          subtitle: "아이디어를 바로 기록",
          image: unsplash("photo-1516321318423-f06f85e504b3", 800),
        },
        {
          title: "알림 허브",
          subtitle: "중요한 일만 모아보기",
          image: unsplash("photo-1551650975-87deedd944c3", 800),
        },
        {
          title: "오프라인 모드",
          subtitle: "연결이 끊겨도 이어서",
          image: unsplash("photo-1526498460520-4c246339dccb", 800),
        },
      ],
      storyTitle: "가볍지만\n확실한 루틴",
      storyBody: "앱에서도 웹과 같은 구조로, 익숙한 흐름을 유지합니다.",
      secondaryCta: "기능 살펴보기",
      footerNote: "iOS · Android",
    },
  },
  other: {
    studio: {
      subcategoryId: "studio",
      brand: "OBJECT STUDIO",
      brandLines: ["OBJECT", "STUDIO"],
      nav: ["Work", "About", "Contact"],
      eyebrow: "CREATIVE STUDIO",
      headline: "평범한 순간에\n새로운 시선을",
      description: "브랜드, 공간, 콘텐츠를 하나의 시선으로 연결하는 스튜디오입니다.",
      cta: "작업 문의",
      heroImage: unsplash("photo-1497366216548-37526070297c"),
      cards: [
        {
          title: "브랜드 아이덴티티",
          subtitle: "로고부터 톤앤매너",
          image: unsplash("photo-1561070791-2526d30994b5", 800),
        },
        {
          title: "공간 연출",
          subtitle: "전시와 쇼룸",
          image: unsplash("photo-1497366811353-6870744d04b2", 800),
        },
        {
          title: "콘텐츠 디렉션",
          subtitle: "캠페인과 아카이브",
          image: unsplash("photo-1454165804606-c3d57bc86b40", 800),
        },
      ],
      storyTitle: "관찰에서 시작하는\n디자인",
      storyBody:
        "OBJECT STUDIO는 과장된 트렌드보다, 브랜드가 오래 기억될 형태를 만듭니다.",
      secondaryCta: "포트폴리오",
      footerNote: "프로젝트 문의 환영",
    },
    education: {
      subcategoryId: "education",
      brand: "OBJECT STUDIO",
      brandLines: ["OBJECT", "STUDIO"],
      nav: ["Class", "Curriculum", "Apply"],
      eyebrow: "LEARNING LAB",
      headline: "배움에\n새로운 시선을",
      description: "실습 중심의 작은 클래스로 감각과 기술을 함께 키웁니다.",
      cta: "수강 문의",
      heroImage: unsplash("photo-1524178232363-1fb2b075b655"),
      cards: [
        {
          title: "기초 워크숍",
          subtitle: "재료와 도구 익히기",
          image: unsplash("photo-1509062522246-3755977927d7", 800),
        },
        {
          title: "프로젝트 클래스",
          subtitle: "결과물까지 완성",
          image: unsplash("photo-1523240795612-9a054b0db644", 800),
        },
        {
          title: "포트폴리오 리뷰",
          subtitle: "피드백과 다음 단계",
          image: unsplash("photo-1434030216411-0b793f4b4173", 800),
        },
      ],
      storyTitle: "작은 클래스,\n깊은 피드백",
      storyBody: "정원제 수업으로 한 명 한 명의 과정을 꼼꼼히 살핍니다.",
      secondaryCta: "커리큘럼",
      footerNote: "월 2회 오픈",
    },
    craft: {
      subcategoryId: "craft",
      brand: "OBJECT STUDIO",
      brandLines: ["OBJECT", "STUDIO"],
      nav: ["Craft", "Workshop", "Shop"],
      eyebrow: "HANDMADE",
      headline: "손끝에서 피어나는\n새로운 시선",
      description: "공예의 온기를 담은 오브제와 워크숍을 운영합니다.",
      cta: "워크숍 신청",
      heroImage: unsplash("photo-1452860606245-08befc0ff44b"),
      cards: [
        {
          title: "도자 워크숍",
          subtitle: "기초 성형과 유약",
          image: unsplash("photo-1565193566173-7a0ee3dbe261", 800),
        },
        {
          title: "우드 오브제",
          subtitle: "결을 살린 소품",
          image: unsplash("photo-1610701596007-11502861dcfa", 800),
        },
        {
          title: "리미티드 드롭",
          subtitle: "소량 제작 컬렉션",
          image: unsplash("photo-1513519245088-0e12902e35a6", 800),
        },
      ],
      storyTitle: "만드는 과정이\n곧 이야기",
      storyBody: "재료의 결을 존중하며, 오래 곁에 둘 수 있는 물건을 만듭니다.",
      secondaryCta: "작품 보기",
      footerNote: "예약제 워크숍",
    },
  },
};

const DEFAULT_SUB: Record<string, string> = {
  food: "cafe",
  commerce: "fashion",
  wellness: "salon",
  professional: "clinic",
  digital: "saas",
  other: "studio",
};

export function getDefaultSubcategoryId(categoryId: string): string {
  return DEFAULT_SUB[categoryId] ?? "cafe";
}

/** 세부 업종 → 가까운 콘텐츠 키로 매핑 (미정의 시 기본값) */
const SUBCATEGORY_ALIAS: Record<string, string> = {
  bar: "restaurant",
  brunch: "cafe",
  "beauty-products": "fashion",
  goods: "lifestyle",
  jewelry: "fashion",
  pet: "lifestyle",
  nail: "salon",
  yoga: "skin",
  barbershop: "salon",
  tax: "clinic",
  legal: "clinic",
  veterinary: "clinic",
  consulting: "clinic",
  web: "saas",
  portfolio: "app",
  "ai-tool": "saas",
  agency: "saas",
  photography: "studio",
  interior: "studio",
  other: "studio",
};

export function getPreviewContent(
  categoryId: string,
  subcategoryId?: string,
): PreviewContent {
  const categoryMap = PREVIEW_CONTENT[categoryId];
  const fallbackId = getDefaultSubcategoryId(categoryId);
  if (!categoryMap) {
    return PREVIEW_CONTENT.other.studio;
  }
  const requested = subcategoryId ?? fallbackId;
  const resolved = categoryMap[requested]
    ? requested
    : (SUBCATEGORY_ALIAS[requested] ?? fallbackId);
  return (
    categoryMap[resolved] ??
    categoryMap[fallbackId] ??
    Object.values(categoryMap)[0]
  );
}
