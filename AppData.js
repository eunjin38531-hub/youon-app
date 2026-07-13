// 여운 UI kit — mock data (profiles, chats). Exposed on window for the screens.
window.YuonData = (function () {

  // 로컬 이미지
  const IMG = {
    seoyeon: 'images/w01.jpg',
    hana:    'images/w03.jpg',
    sua:     'images/w05.jpg',
    yerin:   'images/w04.jpg',
    me:      'images/w11.jpg',
    jihoon:  'images/w06.jpg',
    minjun:  'images/w07.jpg',
    doyun:   'images/w08.jpg',
    h1:      'images/w09.jpg',
    h2:      'images/w10.jpg',
    h3:      'images/w12.jpg',
  };

  const profiles = [
    {
      id: 'jihoon', name: '밥약속있음', age: 27, score: 70, compatScore: 92, activity: '오늘',
      photo: IMG.jihoon,
      sajuLine: '화목 조합, 에너지가 넘치는 인연',
      intro: '만나서 먹으면서 얘기하는 거 좋아해요. 몸 쓰는 일을 해서 그런지 밥 잘 먹는 사람한테 더 끌립니다.',
      bio: '만나서 먹으면서 얘기하는 거 좋아해요. 몸 쓰는 일을 해서 그런지 밥 잘 먹는 사람한테 더 끌립니다.',
      sajuTag: '에너지 넘치고 솔직해요',
      district: '성동구', height: 177, smoke: '비흡연', drink: '가끔',
      job: '프리랜서 안무가', school: '한국기술대',
      element: '화(火)가 밝은 여름의 기운',
      sajuKeywords: ['화목 상생', '에너지 폭발', '솔직한 매력'],
      synergy: '당신의 목(木)과 밥약속있음님의 화(火)가 만나 서로를 키워주는 상생 관계예요. 함께 있을수록 서로에게 힘이 되는 궁합입니다.',
      impressions: ['체력 좋아요', '리액션 좋아요', '잘 먹어요', '계획적이에요'],
      hobbies: [IMG.h1, IMG.h2, IMG.h3, IMG.doyun],
      verified: true,
    },
    {
      id: 'minjun', name: '야근탈출', age: 28, score: 70, activity: '어제',
      photo: IMG.minjun,
      sajuLine: '토금 조합, 안정감 있는 든든한 인연',
      intro: '퇴근하면 칼같이 폰 끄는 편이라 대화할 땐 온전히 집중해요',
      bio: '퇴근하면 칼같이 폰 끄는 편이라 대화할 땐 온전히 집중해요. 안정감 있고 믿음직한 사람이 되고 싶어요.',
      sajuTag: '안정감 있고 믿음직해요',
      district: '강남구', height: 178, smoke: '비흡연', drink: '가끔',
      job: '회사원', school: '성균관대',
      element: '토(土)가 두터운 늦여름의 기운',
      sajuKeywords: ['토금 안정', '든든한 기둥', '깊은 신뢰'],
      synergy: '토(土)와 금(金)이 만나 단단하고 안정적인 관계를 만들어요. 오래 함께할수록 더 깊어지는 인연이에요.',
      impressions: ['듬직해요', '배려심 깊어요', '안정적이에요'],
      hobbies: [IMG.h2, IMG.h1, IMG.doyun, IMG.h3],
      verified: true,
    },
    {
      id: 'doyun', name: '아직안잠', age: 27, score: 70, activity: '30분 전',
      photo: IMG.doyun,
      sajuLine: '목수 조합, 계획적이고 진취적인 인연',
      intro: '새벽 감성으로 이것저것 계획 세우는 게 근 즐거요',
      bio: '새벽 감성으로 이것저것 계획 세우는 걸 즐겨요. 꿈이 많고 진취적인 삶을 살고 싶어요.',
      sajuTag: '계획적이고 진취적이에요',
      district: '송파구', height: 175, smoke: '비흡연', drink: '안 함',
      job: '프리랜서 개발자', school: '한양대',
      element: '목(木)이 강한 봄의 기운',
      sajuKeywords: ['목수 상생', '진취적 기운', '성장하는 인연'],
      synergy: '목(木)과 수(水)가 만나 서로를 자라게 하는 궁합이에요. 함께 꿈을 키워나가는 특별한 인연이 될 거예요.',
      impressions: ['계획적이에요', '진취적이에요', '꿈이 많아요'],
      hobbies: [IMG.h3, IMG.doyun, IMG.h1, IMG.h2],
      verified: true,
    },
  ];

  const extraProfiles = [
    {
      id: 'seoyeon', name: '서연', age: 29, score: 92, compatScore: 88, activity: '오늘',
      photo: IMG.seoyeon,
      sajuLine: '목화 조합, 서로를 밝히는 인연',
      intro: '조용한 카페와 한강 산책을 좋아해요. 비슷한 결의 사람과 천천히 알아가고 싶어요.',
      bio: '조용한 카페와 한강 산책을 좋아해요. 비슷한 결의 사람과 천천히 알아가고 싶어요.',
      sajuTag: '감성적이고 따뜻해요',
      district: '마포구', height: 163, smoke: '비흡연', drink: '가끔',
      job: '그래픽 디자이너', school: '홍익대',
      element: '목(木)이 강한 봄의 기운',
      sajuKeywords: ['목화 상생', '따뜻한 감성', '섬세한 배려'],
      synergy: '목(木)과 화(火)가 만나 서로를 빛나게 하는 궁합이에요. 함께 있을수록 더 아름다워지는 인연이에요.',
      impressions: ['감성적이에요', '배려심 있어요', '취향이 좋아요'],
      hobbies: [IMG.h1, IMG.h2, IMG.h3, IMG.h1],
      verified: true, ilju: '갑목 일주', religion: '무교', el: 'wood',
    },
    {
      id: 'hana', name: '하나', age: 27, score: 85, compatScore: 85, activity: '어제',
      photo: IMG.hana,
      sajuLine: '금토 조합, 안정감 있는 인연',
      intro: '강아지와 산책하는 시간이 제일 좋아요. 천천히 알아가요.',
      bio: '강아지와 산책하는 시간이 제일 좋아요. 소소한 일상을 나눌 수 있는 사람이면 좋겠어요.',
      sajuTag: '안정적이고 다정해요',
      district: '서대문구', height: 161, smoke: '비흡연', drink: '안 함',
      job: '초등학교 교사', school: '이화여대',
      element: '토(土)가 두터운 늦여름의 기운',
      sajuKeywords: ['금토 안정', '믿음직한 기운', '따뜻한 일상'],
      synergy: '금(金)과 토(土)가 만나 단단하고 편안한 관계를 만들어요. 함께할수록 안정감이 깊어지는 인연이에요.',
      impressions: ['다정해요', '안정적이에요', '배려해요'],
      hobbies: [IMG.h2, IMG.h3, IMG.h1, IMG.h2],
      verified: true, ilju: '경금 일주', religion: '무교', el: 'earth',
    },
  ];
  profiles.push(...extraProfiles);

  const allProfiles = profiles;
  const byId = (id) => allProfiles.find((p) => p.id === id);

  const iljus = ['을목 일주', '임수 일주', '경금 일주', '병화 일주'];
  const religions = ['종교가 없어요', '무교', '종교가 없어요', '무교'];
  profiles.forEach((p, i) => { p.ilju = iljus[i % iljus.length]; p.religion = religions[i % religions.length]; });

  const traits = [
    { icon: '✏️', title: '표현력이 풍부해요', desc: '화(火) 기운이 강해 감정을 솔직하게 표현하고, 주변 분위기를 자연스럽게 이끌어요.' },
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

  const online = [
    { id: 'seoyeon', name: '서연', photo: IMG.seoyeon },
    { id: 'minjun', name: '민준', photo: IMG.minjun },
    { id: 'hana', name: '하나', photo: IMG.hana },
    { id: 'jihoon', name: '지훈', photo: IMG.jihoon },
    { id: 'sua', name: '수아', photo: IMG.sua },
    { id: 'yerin', name: '예린', photo: IMG.yerin },
    { id: 'doyun', name: '도윤', photo: IMG.doyun },
  ];

  const likedMe = [
    { id: 'seoyeon', name: '서연', age: 29, score: 92, district: '마포구', sajuTag: '목화 상생', photo: IMG.seoyeon, at: '오늘' },
    { id: 'sua', name: '수아', age: 28, score: 90, district: '성동구', sajuTag: '수금 조화', photo: IMG.sua, at: '오늘' },
    { id: 'yerin', name: '예린', age: 26, score: 87, district: '송파구', sajuTag: '목수 상생', photo: IMG.yerin, at: '어제' },
    { id: 'hana', name: '하나', age: 27, score: 85, district: '서대문구', sajuTag: '금토 안정', photo: IMG.hana, at: '어제' },
  ];

  const iLiked = [
    { id: 'jihoon', name: '지훈', age: 31, score: 88, district: '강남구', sajuTag: '수목 상생', sajuComment: '사주가 잘 맞아요!', photo: IMG.jihoon, at: '2일 전', intro: '주말엔 등산, 평일엔 책 한 권. 같이 걸으며 이야기 나눠요.', verified: true },
    { id: 'minjun', name: '민준', age: 30, score: 81, district: '용산구', sajuTag: '화토 상생', sajuComment: '사주가 아름다워!!', photo: IMG.minjun, at: '3일 전', intro: '안녕하세요! 저는 서울 사는 요리 좋아하는 남자입니다.', verified: true },
    { id: 'seoyeon', name: '서연', age: 29, score: 92, district: '마포구', sajuTag: '목화 상생', sajuComment: '목화 기운이 딱!', photo: IMG.seoyeon, at: '오늘', intro: '안녕하세요! 저는 서울 사는 카페를 좋아하는 사람이에요.', verified: true },
    { id: 'hana', name: '하나', age: 27, score: 85, district: '서대문구', sajuTag: '금토 안정', sajuComment: '안정적인 궁합!', photo: IMG.hana, at: '1시간 전', intro: '강아지와 산책하는 시간이 제일 좋아요. 천천히 알아가요.', verified: true },
  ];

  const newMatches = [
    { id: 'sua', name: '수아', photo: IMG.sua },
    { id: 'yerin', name: '예린', photo: IMG.yerin },
    { id: 'hana', name: '하나', photo: IMG.hana },
  ];

  const me = {
    name: '유온', age: 28, photo: IMG.me,
    completeness: 78, element: '화(火)가 밝은 여름의 기운', el: 'fire',
  };

  const elementIcons = {
    wood: '🌿',
    fire: '🔥',
    earth: '🪨',
    metal: '✨',
    water: '💧',
  };

  const profileEl = { seoyeon: 'wood', jihoon: 'fire', hana: 'earth', minjun: 'earth', doyun: 'wood' };
  profiles.forEach((p) => { p.el = profileEl[p.id] || 'fire'; });
  [...likedMe, ...iLiked].forEach((u) => { u.el = profileEl[u.id] || (u.id === 'sua' ? 'water' : u.id === 'yerin' ? 'wood' : 'fire'); });

  return { profiles, byId, chats, topics, online, likedMe, iLiked, newMatches, me, traits, elementIcons };
})();
