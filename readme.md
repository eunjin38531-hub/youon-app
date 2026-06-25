# 여운 (Yuon) Design System

> **미션:** 진짜 사람과, 이유 있는 만남을
> **브랜드 인격:** 진실한 · 신비로운 · 따뜻한 · 끌리는 · 인연 같은

여운은 **사주(四柱) 기반 데이팅 앱**입니다. 생년월일·태어난 시간으로 산출한 음양오행 궁합을 신뢰의 축으로 삼아, 본인인증·AI 사진 심사로 "진짜 사람"을 검증하고, 사주 궁합과 대화 주제 추천으로 "이유 있는 만남"을 잇습니다. 이 디자인 시스템은 그 제품을 위한 토큰·컴포넌트·UI 키트의 단일 소스입니다.

핵심 차별점은 두 가지 감정 축의 분리입니다 — **신뢰(Teal)**: 인증·궁합 점수·핵심 CTA / **관심(Coral)**: 하트·관심 표현·감정 액션. 이 둘은 절대 한 컴포넌트에서 동시에 쓰지 않습니다.

---

## Sources (제공 자료)

이 시스템은 다음 자료에서 추출·재구성했습니다. (열람 권한이 없을 수 있으나 출처로 기록합니다.)

- `uploads/color-system.md` — 컬러 시스템 v1.0 (3 패밀리 × 10단계 + 시맨틱 별칭)
- `uploads/typography-system.md` — 타이포그래피 v1.0 (Pretendard, 8pt 그리드, 타입 스케일)
- `uploads/yuon-flowchart-v2.md` — 서비스 플로우차트 v2 (전체 화면 구조·온보딩·홈·상세·하트·대화·마이)
- **Figma: `UI가이드.fig`** — 첨부되었으나 **이 세션에서 마운트되지 않음**. 컴포넌트 시각·실 에셋·변수 컬렉션은 위 마크다운 명세로 재구성했습니다. (아래 CAVEATS 참고)

---

## CONTENT FUNDAMENTALS — 카피 작성 원칙

**언어/인칭.** 한국어. 사용자에게는 부드러운 **해요체**("~해요", "~보세요"). 명령형·딱딱한 "하십시오"체는 쓰지 않습니다. 상대방은 "상대"·"이성"·닉네임으로 지칭. 시스템이 사용자를 부를 때 2인칭 직접 호명("당신")은 궁합 설명 등 친밀한 맥락에서만 절제해 사용.

**톤.** 따뜻하고 진실되며 약간 신비롭게. 점집·역술 느낌(겁재·상관·식신 같은 전문 한자 용어)은 **금지** — 대신 친근한 의역을 씁니다: "밀당의 고수 사주", "해바라기 사주", "목화 일주, 서로 기운을 북돋아요". 과장·재촉·도파민 유도형 카피 지양.

**구체 예시.**
- 궁합 한 줄: "목(木)이 강한 두 사람. 서로의 기운을 북돋아 함께 성장하는 궁합이에요."
- 마음에 담기 액션 피드백: "마음에 담았어요 · 상대에게 알림은 가지 않아요"
- 관심 표현 피드백: "관심을 표현했어요 · 상대에게 알림을 보냈어요"
- 대화 주제 추천: "두 분 모두 물이 많아요. 여행 얘기 어때요?"
- 위치 모드: "마포구 · 인근 지역 기준 · 상세 위치는 비공개예요"

**숫자.** 궁합/연애 점수는 "92점"처럼 "점" 단위. 거리·시간은 "강남구", "5분 전", "오늘".

**이모지.** 브랜드 톤상 **최소한**. 채팅 같은 사용자 발화 맥락에서 가끔(🌊) 허용하되, UI 시스템 텍스트·라벨·버튼에는 쓰지 않습니다. 아이콘으로 의미를 전달합니다.

**대문자/자간.** 한글 전체 대문자 금지. 영문 라벨(Overline)만 +5% 자간으로 절제해 사용.

---

## VISUAL FOUNDATIONS — 시각 기초

**컬러.** 따뜻한 뉴트럴(웜 그레이) 위에 청록(Primary)과 코랄 피치(Accent)가 포인트로 얹힙니다. 페이지 배경은 `natural/50 (#F6F4F1)` — 순백이 아닌 살짝 따뜻한 톤. 카드는 순백. 포스텔러식 **네이비+골드 조합 금지**, `natural/900` 대면적 배경 금지(점술집 느낌 회피).

**타입.** Pretendard 단일 패밀리. 제목은 Bold(700) + 음수 자간(-2%)으로 밀도·신뢰감, 본문은 Regular + 넉넉한 행간(1.4~1.5)으로 가독성. 최대 굵기 700(ExtraBold 금지), 최소 11px.

**배경.** 기본은 솔리드 웜 그레이/화이트. 그라데이션은 **브랜드 무드 서피스에 한정** — 스플래시, 오늘의 연애 점수 배너(teal 135° 그라데이션). 일반 화면 배경에는 그라데이션·텍스처·패턴을 쓰지 않습니다(슬롭 회피).

**이미지.** 프로필 사진은 따뜻한 자연광 톤. 카드에 풀블리드로 깔고, 텍스트 가독성을 위해 **하단 보호 그라데이션**(rgba(34,32,28,0.78)→투명)을 덧댑니다. 흑백·차가운 톤은 지양.

**모서리.** 부드럽게. 칩/뱃지/버튼은 pill, 카드 16px(lg), 프로필 카드·시트 24px(2xl). 날카로운 직각은 거의 없습니다.

**그림자.** 차갑지 않게 — 모든 그림자는 `rgba(34,32,28,·)` 웜 캐스트, 낮은 spread, 부드러운 blur. 카드 `0 4px 16px /8%`. 하단 탭바는 위로 뜨는 그림자.

**테두리.** `natural/100 (#E6E3DC)` 1px 디바이더가 기본. 강조 보더는 `natural/200`. 입력 필드는 포커스 시 teal 보더 + teal 포커스 링.

**투명도·블러.** 사진 위 오버레이 뱃지(`solid` tone, rgba 0.55), 사이드 패널 딤(rgba 0.35). 과한 글래스모피즘은 쓰지 않습니다.

**모션.** 따뜻하고 절제됨. `ease-standard` cubic-bezier(.4,0,.2,1), 빠른 인터랙션 120ms / 기본 200ms / 강조 320ms. **바운스·무한 루프 장식 금지.** 점수 바/링은 슬라이드-인.

**호버.** 솔리드 버튼은 brightness 0.95로 살짝 어둡게. 소프트 칩/토픽 칩은 한 단계 진한 배경(50→100).

**프레스.** 스케일 다운 — 버튼 0.97, 아이콘 버튼 0.92, 카드 0.99. 색 변화보다 물리적 눌림.

**레이아웃.** 모바일 우선, 디자인 폭 390~430px. 좌우 패딩 16px, GNB 56px, 하단 탭바 64px, 터치 타겟 최소 48px. 8pt 그리드.

---

## ICONOGRAPHY — 아이콘

- **세트:** 브랜드 라인 아이콘 — 24px 그리드, 2px 라운드 스트로크. 따뜻하고 친근한 기하학. `components/core/Icon.jsx`로 통합 렌더링.
- **브랜드 아트(실 아이콘):** home, heart, chat(말풍선), user, chevronLeft, mapPin 6종은 사용자 제공 PNG(`assets/icons/*.png`, Icon.jsx에 data URI 내장)를 **CSS mask로 렌더링** — 실제 아트워크를 쓰면서 색상 변경(활성/비활성) 유지. badgeCheck(민트 인증 배지)는 2톤 고정 컬러 아트.
- **대체 글리프:** sparkles(사주·추천), check, bell, camera, send, sliders, clock, settings, calendar, chevronRight/Down, arrow류, x, plus, search, moreHorizontal 등 아직 미제공 글리프는 Lucide(MIT) 기반 동일 스펙 베이스라인 유지.
- **하트 채움:** `filled` 모드로 관심/활성 상태 표현(coral). 비활성은 아웃라인.
- **인증 표현:** `badgeCheck`(채워진 방패+체크)로 본인인증을, Avatar의 teal 체크 배지로 프로필 인증을 나타냅니다.
- **이모지:** 시스템 UI에는 미사용. **유니코드 아이콘 대용 금지** — 항상 Icon 컴포넌트 사용.
- **로고:** `assets/logo/` — 앱 아이콘(`yuon-app-icon.png`, 민트 라운드 스퀘어 + 흰 초승달·별), 화이트 심볼(`yuon-symbol-white.png`, 어두운/브랜드 배경용), YUON 워드마크(`yuon-wordmark.png`, 블랙·밝은 배경용). 브랜드 배경 위에는 화이트 심볼, 밝은 배경에는 워드마크/앱 아이콘 사용.
- **마스코트 — 여웅(Yeowoong):** `assets/mascot/yeowoong.png` (투명 PNG). 이마에 초승달(사주의 신비로움), 브랜드 민트 후디, 폰으로 인연을 잇는 붉은여우. 브랜드 인격(진실한·신비로운·따뜻한·끌리는)을 시각화한 마스코트로, 온보딩·빈 상태·연애운 배너 등 따뜻한 순간에 사용. 밝은 배경/브랜드 배경 모두 사용 가능.
- **오행 아이콘 (五行) — 목·화·토·금·수:** `assets/elements/{wood,fire,earth,metal,water}.png`. 파스텔 라운드 타일에 오행 글리프(새싹·불·산·금속·물방울)를 담은 컬러 아이콘 세트. 일주·궁합 태그(예: "🔥"→화 아이콘), 내 사주, 성향 카드 등 사주 맥락에서 사용. 기존 🔥 이모지 표현을 이 세트로 대체함.
- ⚠️ 미제공 글리프는 Lucide 대체본입니다. 확정 아이콘이 추가되면 동일 방식(mask)으로 교체 필요.
- **이모티콘(스티커):** `assets/emoticons/yuon-stickers.png` — 여우 캐릭터 30종 스프라이트 시트(6열×5행). `Sticker` 컴포넌트로 사용하며, 소비 프로젝트는 `spriteSrc` prop으로 경로를 주입하고 이미지를 복사해야 합니다. 채팅 감정 표현·리액션 맥락에서 사용.

---

## INDEX — 파일 안내

**Foundations / 글로벌 CSS**
- `styles.css` — 진입점(@import 목록). 컨슈머는 이 파일만 링크.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`

**Components** (`window.YuonDesignSystem_8624c6`)
- `components/core/` — Icon, Button, IconButton, Badge, Tag, Avatar, Input, Switch, Checkbox, Card
- `components/dating/` — FortuneBanner(오늘의 연애운 배너+마스코트), MatchScore(궁합 점수), ProfileFeedCard, HeartButton(마음에 담기/관심), ScoreBanner(오늘의 연애 점수), TopicChip(대화 주제 추천)
- `components/emoticons/` — Sticker(여우 캐릭터 이모티콘 스프라이트 컴포넌트, 30종)
- `components/navigation/` — TopAppBar(GNB), BottomTabBar, SegmentedTabs, ListRow
- `components/feedback/` — ChatBubble

**UI Kit**
- `ui_kits/yuon-app/` — 클릭형 전체 프로토타입(로그인→홈→상세→하트→대화→마이). `index.html` + `AppData.js` + `AppScreens.jsx` + `AppScreens2.jsx`

**Specimen cards** — `guidelines/*.card.html` (Design System 탭에 렌더링: Colors/Type/Spacing/Brand)

**Assets** — `assets/logo/` (yuon-app-icon.png, yuon-symbol-white.png, yuon-wordmark.png) · `assets/mascot/yeowoong.png` (마스코트 여웅) · `assets/icons/` (브랜드 라인 아이콘 PNG) · `assets/emoticons/yuon-stickers.png` (여우 캐릭터 이모티콘 스프라이트 시트 30종)

**Skill** — `SKILL.md` (다운로드 시 Agent Skill로 동작)

---

## 색상 사용 규칙 (요약)

| 용도 | 토큰 |
|------|------|
| 인증 뱃지 | bg `primary/100` · text `primary/800` |
| 궁합 점수 바 | `primary/500` |
| 관심 표현 버튼 | bg `accent/500` · text `accent/900` |
| 카드 배경 | `natural/50` 페이지 / `white` 카드 |
| 보조 텍스트 | `natural/500~700` |
| 에러 | bg `accent/50` · text `accent/800` |

- Primary Teal → 신뢰·인증 요소에만. Accent Coral → 감정·관심 표현에만. Teal·Coral 동일 컴포넌트 동시 사용 금지.

---

*여운 디자인 시스템 v1.0 · Pretendard · Teal #5AC7C4 / Coral #FF8C7D / Warm Gray #9E9488*
