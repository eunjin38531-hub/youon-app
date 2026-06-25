// 여운 UI kit — mock data (profiles, chats). Exposed on window for the screens.
window.YuonData = (function () {
  const photo = (id) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

  const profiles = [
    {
      id: 'seoyeon', name: '서연', age: 29, score: 92, activity: '5분 전',
      photo: photo('photo-1494790108377-be9c29b29330'),
      sajuLine: '목화 일주, 서로 기운을 북돋아요',
      intro: '조용한 카페와 한강 산책을 좋아해요',
      bio: '안녕하세요! 조용한 카페와 한강 산책을 좋아하는 사람이에요. 비슷한 결의 인연을 만나고 싶어요.',
      sajuTag: '목화 상생',
      district: '마포구', height: 165, smoke: '비흡연', drink: '가끔',
      job: '브랜드 디자이너', school: '연세대',
      element: '목(木)이 강한 봄의 기운',
      sajuKeywords: ['목화 일주', '해바라기 사주', '편안한 끌림'],
      synergy: '당신의 화(火)와 서연님의 목(木)이 만나 서로를 키워주는 상생 관계예요. 함께 있을수록 편안하고 단단해지는 궁합입니다.',
      impressions: ['웃음이 많아요', '차분해요', '잘 들어줘요'],
      hobbies: [
        photo('photo-1501785888041-af3ef285b470'),
        photo('photo-1504674900247-0877df9cc836'),
        photo('photo-1481349518771-20055b2a7b24'),
        photo('photo-1495474472287-4d71bcdd2085'),
      ],
      verified: true,
    },
    {
      id: 'jihoon', name: '지훈', age: 31, score: 88, activity: '오늘',
      photo: photo('photo-1500648767791-00dcc994a43e'),
      sajuLine: '수목 조합, 대화가 잘 통하는 인연',
      intro: '주말엔 등산, 평일엔 책 한 권',
      bio: '주말엔 산, 평일엔 책 한 권. 함께 걸으며 이야기 나누는 걸 좋아하는 남자입니다.',
      sajuTag: '수목 상생',
      district: '강남구', height: 178, smoke: '비흡연', drink: '즐김',
      job: '프로덕트 매니저', school: '고려대',
      element: '수(水)가 맑은 겨울의 기운',
      sajuKeywords: ['수목 상생', '밀당의 고수', '깊은 대화'],
      synergy: '서로 물과 나무처럼 자연스럽게 이어지는 궁합. 말이 잘 통하고, 함께 있으면 생각이 자라나는 사이예요.',
      impressions: ['듬직해요', '유머러스해요', '적극적이에요'],
      hobbies: [
        photo('photo-1551632811-561732d1e306'),
        photo('photo-1507525428034-b723cf961d3e'),
        photo('photo-1519681393784-d120267933ba'),
        photo('photo-1465101162946-4377e57745c3'),
      ],
      verified: true,
    },
    {
      id: 'hana', name: '하나', age: 27, score: 85, activity: '1시간 전',
      photo: photo('photo-1534528741775-53994a69daeb'),
      sajuLine: '금토의 안정, 오래 함께할 사주',
      intro: '강아지와 산책하는 시간이 제일 좋아요',
      bio: '강아지와 산책하는 시간이 제일 행복한 사람입니다. 천천히 알아가요.',
      sajuTag: '금토 안정',
      district: '서대문구', height: 162, smoke: '비흡연', drink: '안 함',
      job: '초등교사', school: '이화여대',
      element: '토(土)가 두터운 늦여름의 기운',
      sajuKeywords: ['금토 안정', '따뜻한 햇살', '오래가는 인연'],
      synergy: '안정감을 주고받는 궁합이에요. 서두르지 않고 천천히, 그러나 오래 함께할 수 있는 결의 두 사람.',
      impressions: ['따뜻해요', '배려심 깊어요', '편안해요'],
      hobbies: [
        photo('photo-1450778869180-41d0601e046e'),
        photo('photo-1518717758536-85ae29035b6d'),
        photo('photo-1444212477490-ca407925329e'),
        photo('photo-1425082661705-1834bfd09dca'),
      ],
      verified: true,
    },
    {
      id: 'minjun', name: '민준', age: 30, score: 81, activity: '오늘',
      photo: photo('photo-1507003211169-0a1dd7228f2d'),
      sajuLine: '화토 조합, 따뜻하고 듬직한 사주',
      intro: '맛집 탐방과 캠핑을 좋아합니다',
      bio: '안녕하세요! 맛집 탐방과 캠핑을 좋아하는 솔직한 남자입니다.',
      sajuTag: '화토 상생',
      district: '용산구', height: 181, smoke: '비흡연', drink: '가끔',
      job: '백엔드 개발자', school: '한양대',
      element: '화(火)가 밝은 여름의 기운',
      sajuKeywords: ['화토 상생', '든든한 기둥', '솔직한 매력'],
      synergy: '서로의 온기를 더해주는 궁합. 표현에 솔직하고, 함께 있으면 마음이 놓이는 사이예요.',
      impressions: ['솔직해요', '리드를 잘해요', '다정해요'],
      hobbies: [
        photo('photo-1504280390367-361c6d9f38f4'),
        photo('photo-1496545672447-f699b503d270'),
        photo('photo-1533873984035-25970ab07461'),
        photo('photo-1537905569824-f89f14cceb68'),
      ],
      verified: true,
    },
  ];

  const byId = (id) => profiles.find((p) => p.id === id);

  // 일주명·종교·성향 보강 (reference: 카멜레온 프로필 레이아웃)
  const iljus = ['을목 일주', '임수 일주', '경금 일주', '병화 일주'];
  const religions = ['종교가 없어요', '무교', '종교가 없어요', '무교'];
  profiles.forEach((p, i) => { p.ilju = iljus[i % iljus.length]; p.religion = religions[i % religions.length]; });

  const traits = [
    { icon: '../../assets/elements/fire.png', title: '표현력이 풍부해요', desc: '화(火) 기운이 강해 감정을 솔직하게 표현하고, 주변 분위기를 자연스럽게 이끌어요.' },
    { icon: '🎨', title: '창의적인 아이디어', desc: '독특한 시각으로 문제를 보고, 틀을 깨는 아이디어를 즐겨요. 기획·콘텐츠에 강점이 있어요.' },
    { icon: '🤝', title: '사교성과 리더십', desc: '자연스럽게 분위기를 이끌고 사람을 모아요. 모임의 중심 역할을 맡는 경우가 많아요.' },
  ];

  const chats = [
    {
      id: 'hana', profileId: 'hana', last: '매칭됐어요! 사주 기반 대화 주제로 시작해보세요', time: '방금', unread: 0, isNew: true,
      messages: [],
    },
    {
      id: 'seoyeon', profileId: 'seoyeon', last: '지난주에 강릉 다녀왔어요. 바다 보면서 멍 때리는 거 좋아해요', time: '오후 2:18', unread: 2,
      messages: [
        { from: 'them', text: '두 분 모두 물이 많아요. 여행 얘기 어때요?', time: '오후 2:14', topic: true },
        { from: 'me', text: '좋아요! 최근에 어디 다녀오셨어요?', time: '오후 2:15' },
        { from: 'them', text: '지난주에 강릉 다녀왔어요. 바다 보면서 멍 때리는 거 좋아해요 🌊', time: '오후 2:18' },
      ],
    },
    {
      id: 'jihoon', profileId: 'jihoon', last: '등산 좋아하세요? 다음에 같이 가요', time: '어제', unread: 0,
      messages: [
        { from: 'them', text: '안녕하세요! 프로필 잘 봤어요 :)', time: '어제' },
        { from: 'me', text: '반가워요~ 등산 자주 다니시나봐요', time: '어제' },
        { from: 'them', text: '등산 좋아하세요? 다음에 같이 가요', time: '어제' },
      ],
    },
  ];

  const topics = [
    '두 분 모두 물이 많아요. 여행 얘기 어때요?',
    '이번 주 가장 맛있게 먹은 거 뭐예요?',
    '주말엔 보통 어떻게 보내세요?',
  ];

  // ── 지금 접속 중 (online rail) ──
  const online = [
    { id: 'seoyeon', name: '서연', photo: photo('photo-1494790108377-be9c29b29330') },
    { id: 'minjun', name: '민준', photo: photo('photo-1507003211169-0a1dd7228f2d') },
    { id: 'hana', name: '하나', photo: photo('photo-1534528741775-53994a69daeb') },
    { id: 'jihoon', name: '지훈', photo: photo('photo-1500648767791-00dcc994a43e') },
    { id: 'sua', name: '수아', photo: photo('photo-1438761681033-6461ffad8d80') },
    { id: 'yerin', name: '예린', photo: photo('photo-1544005313-94ddf0286df2') },
    { id: 'doyun', name: '도윤', photo: photo('photo-1492562080023-ab3db95bfbce') },
  ];

  // ── 나를 좋아한 사람 (Heart 탭) ──
  const likedMe = [
    { id: 'seoyeon', name: '서연', age: 29, score: 92, district: '마포구', sajuTag: '목화 상생', photo: photo('photo-1494790108377-be9c29b29330'), at: '오늘' },
    { id: 'sua', name: '수아', age: 28, score: 90, district: '성동구', sajuTag: '수금 조화', photo: photo('photo-1438761681033-6461ffad8d80'), at: '오늘' },
    { id: 'yerin', name: '예린', age: 26, score: 87, district: '송파구', sajuTag: '목수 상생', photo: photo('photo-1544005313-94ddf0286df2'), at: '어제' },
    { id: 'hana', name: '하나', age: 27, score: 85, district: '서대문구', sajuTag: '금토 안정', photo: photo('photo-1534528741775-53994a69daeb'), at: '어제' },
  ];
  // ── 내가 보낸 관심 ──
  const iLiked = [
    { id: 'jihoon', name: '지훈', age: 31, score: 88, district: '강남구', sajuTag: '수목 상생', sajuComment: '사주가 잘 맞아요!', photo: photo('photo-1500648767791-00dcc994a43e'), at: '2일 전', intro: '주말엔 등산, 평일엔 책 한 권. 같이 걸으며 이야기 나눠요.', verified: true },
    { id: 'minjun', name: '민준', age: 30, score: 81, district: '용산구', sajuTag: '화토 상생', sajuComment: '사주가 아름다워!!', photo: photo('photo-1507003211169-0a1dd7228f2d'), at: '3일 전', intro: '안녕하세요! 저는 서울 사는 요리 좋아하는 남자입니다.', verified: true },
    { id: 'seoyeon', name: '서연', age: 29, score: 92, district: '마포구', sajuTag: '목화 상생', sajuComment: '목화 기운이 딱!', photo: photo('photo-1494790108377-be9c29b29330'), at: '오늘', intro: '안녕하세요! 저는 서울 사는 카페를 좋아하는 사람이에요.', verified: true },
    { id: 'hana', name: '하나', age: 27, score: 85, district: '서대문구', sajuTag: '금토 안정', sajuComment: '안정적인 궁합!', photo: photo('photo-1534528741775-53994a69daeb'), at: '1시간 전', intro: '강아지와 산책하는 시간이 제일 좋아요. 천천히 알아가요.', verified: true },
  ];

  // ── 새로운 매칭 (Chat 상단 레일) ──
  const newMatches = [
    { id: 'sua', name: '수아', photo: photo('photo-1438761681033-6461ffad8d80') },
    { id: 'yerin', name: '예린', photo: photo('photo-1544005313-94ddf0286df2') },
    { id: 'hana', name: '하나', photo: photo('photo-1534528741775-53994a69daeb') },
  ];

  const me = {
    name: '유온', age: 28, photo: photo('photo-1517841905240-472988babdf9'),
    completeness: 78, element: '화(火)가 밝은 여름의 기운', el: 'fire',
  };

  // 오행 아이콘 (목·화·토·금·수) — relative to ui_kits/yuon-app/*
  const elementIcons = {
    wood: '../../assets/elements/wood.png',
    fire: '../../assets/elements/fire.png',
    earth: '../../assets/elements/earth.png',
    metal: '../../assets/elements/metal.png',
    water: '../../assets/elements/water.png',
  };
  // 프로필별 대표 오행
  const profileEl = { seoyeon: 'wood', jihoon: 'water', hana: 'earth', minjun: 'fire' };
  profiles.forEach((p) => { p.el = profileEl[p.id] || 'fire'; });
  [...likedMe, ...iLiked].forEach((u) => { u.el = profileEl[u.id] || (u.id === 'sua' ? 'water' : u.id === 'yerin' ? 'wood' : 'fire'); });

  return { profiles, byId, chats, topics, photo, online, likedMe, iLiked, newMatches, me, traits, elementIcons };
})();
