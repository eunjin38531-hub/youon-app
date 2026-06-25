# 유온 (Yuon) 컬러 시스템

브랜드 인격: 진실한 · 신비로운 · 따뜻한 · 끌리는 · 인연 같은  
브랜드 미션: 진짜 사람과, 이유 있는 만남을

---

## 컬러 팔레트 구성

3개 컬러 패밀리 (Primary · Accent · Natural), 각 10단계 스케일

---

## Primary — Teal (청록)

> 역할: 신뢰 · 인증 뱃지 · 궁합 점수 · 핵심 UI 포인트

| 토큰 | 헥스 | 용도 |
|------|------|------|
| `primary/50` | `#EDF9F8` | 가장 밝은 배경 · 호버 피드백 |
| `primary/100` | `#CCEEED` | 인증 뱃지 배경 · 태그 배경 |
| `primary/200` | `#A8E3E1` | 구분선 · 보조 배경 |
| `primary/300` | `#83D5D3` | 비활성 포인트 |
| `primary/400` | `#6CCECB` | 보조 아이콘 |
| `primary/500` | `#5AC7C4` | **Core — 궁합 점수 · 인증 뱃지 · 포인트 액션** |
| `primary/600` | `#41AFAC` | 호버 상태 |
| `primary/700` | `#2D8E8C` | 포커스 링 · 강조 텍스트 |
| `primary/800` | `#1C6A68` | 다크 포인트 |
| `primary/900` | `#0D4443` | 가장 어두운 배경 · 다크 모드 서피스 |

**메인 사용 값:** `#5AC7C4` (primary/500)

---

## Accent — Coral Peach (코랄 피치)

> 역할: 관심 표현 · 하트 · 감정 액션 · 따뜻한 강조

| 토큰 | 헥스 | 용도 |
|------|------|------|
| `accent/50` | `#FFF1EF` | 알림 배경 · 에러 배경 |
| `accent/100` | `#FFD6D1` | 태그 배경 · 소프트 강조 |
| `accent/200` | `#FFB9B2` | 비활성 액션 |
| `accent/300` | `#FFA397` | 보조 아이콘 |
| `accent/400` | `#FF9789` | 보조 버튼 배경 |
| `accent/500` | `#FF8C7D` | **Core — 하트 · 관심 표현 · 감정 버튼** |
| `accent/600` | `#E87060` | 호버 상태 |
| `accent/700` | `#C45244` | 포커스 · 강조 텍스트 |
| `accent/800` | `#93372D` | 에러 텍스트 · 경고 |
| `accent/900` | `#5C1A10` | 가장 어두운 강조 |

**메인 사용 값:** `#FF8C7D` (accent/500)

---

## Natural — Warm Gray (웜 그레이)

> 역할: 보조 텍스트 · 비활성 상태 · 구분선 · 배경 서피스

| 토큰 | 헥스 | 용도 |
|------|------|------|
| `natural/50` | `#F6F4F1` | 페이지 배경 · 카드 배경 |
| `natural/100` | `#E6E3DC` | 구분선 · 보더 |
| `natural/200` | `#D1CDC5` | 비활성 보더 |
| `natural/300` | `#BCB7AF` | 플레이스홀더 텍스트 |
| `natural/400` | `#ABA49B` | 비활성 아이콘 |
| `natural/500` | `#9E9488` | **Core — 보조 텍스트 · 캡션 · 메타 정보** |
| `natural/600` | `#857D72` | 보조 레이블 |
| `natural/700` | `#635D54` | 비활성 버튼 텍스트 |
| `natural/800` | `#413D36` | 보조 강조 텍스트 |
| `natural/900` | `#22201C` | 다크 모드 텍스트 |

**메인 사용 값:** `#9E9488` (natural/500)

---

## 컬러 사용 원칙

### 사용 규칙

- **Primary Teal** → 신뢰·인증 요소에만 사용. 궁합 점수 바, 인증 뱃지, 핵심 CTA 버튼
- **Accent Coral Peach** → 감정·관심 표현에만 사용. 하트 버튼, 관심 표현 액션, 따뜻한 알림
- **Natural Warm Gray** → 레이아웃·구조 요소. 배경, 구분선, 보조 텍스트, 비활성 상태

### 사용 금지

- 포스텔러(Forceteller)와 동일한 **네이비 + 골드 조합** 동시 사용 금지
- Accent Coral과 Primary Teal을 동시에 같은 컴포넌트에 사용 금지 (시각적 충돌)
- Natural/900(`#22201C`)을 배경색으로 과도하게 사용 금지 (점술집 느낌)

### 조합 예시

| 용도 | 배경 | 텍스트 / 아이콘 |
|------|------|------|
| 인증 뱃지 | `primary/100` (#CCEEED) | `primary/800` (#1C6A68) |
| 관심 표현 버튼 | `accent/500` (#FF8C7D) | `accent/900` (#5C1A10) |
| 궁합 점수 바 | `primary/500` (#5AC7C4) | — |
| 카드 배경 | `natural/50` (#F6F4F1) | `natural/800` (#413D36) |
| 보조 텍스트 | — | `natural/500` (#9E9488) |
| 에러 메시지 | `accent/50` (#FFF1EF) | `accent/800` (#93372D) |

---

## CSS 변수 선언 (참고용)

```css
:root {
  /* Primary — Teal */
  --color-primary-50:  #EDF9F8;
  --color-primary-100: #CCEEED;
  --color-primary-200: #A8E3E1;
  --color-primary-300: #83D5D3;
  --color-primary-400: #6CCECB;
  --color-primary-500: #5AC7C4;
  --color-primary-600: #41AFAC;
  --color-primary-700: #2D8E8C;
  --color-primary-800: #1C6A68;
  --color-primary-900: #0D4443;

  /* Accent — Coral Peach */
  --color-accent-50:  #FFF1EF;
  --color-accent-100: #FFD6D1;
  --color-accent-200: #FFB9B2;
  --color-accent-300: #FFA397;
  --color-accent-400: #FF9789;
  --color-accent-500: #FF8C7D;
  --color-accent-600: #E87060;
  --color-accent-700: #C45244;
  --color-accent-800: #93372D;
  --color-accent-900: #5C1A10;

  /* Natural — Warm Gray */
  --color-natural-50:  #F6F4F1;
  --color-natural-100: #E6E3DC;
  --color-natural-200: #D1CDC5;
  --color-natural-300: #BCB7AF;
  --color-natural-400: #ABA49B;
  --color-natural-500: #9E9488;
  --color-natural-600: #857D72;
  --color-natural-700: #635D54;
  --color-natural-800: #413D36;
  --color-natural-900: #22201C;

  /* Semantic Aliases */
  --color-brand-primary:    var(--color-primary-500);   /* #5AC7C4 */
  --color-brand-accent:     var(--color-accent-500);    /* #FF8C7D */
  --color-brand-neutral:    var(--color-natural-500);   /* #9E9488 */
  --color-text-primary:     var(--color-natural-900);   /* #22201C */
  --color-text-secondary:   var(--color-natural-600);   /* #857D72 */
  --color-text-tertiary:    var(--color-natural-400);   /* #ABA49B */
  --color-surface-default:  var(--color-natural-50);    /* #F6F4F1 */
  --color-border-default:   var(--color-natural-100);   /* #E6E3DC */
  --color-trust-badge-bg:   var(--color-primary-100);   /* #CCEEED */
  --color-trust-badge-text: var(--color-primary-800);   /* #1C6A68 */
  --color-heart-action:     var(--color-accent-500);    /* #FF8C7D */
  --color-match-score:      var(--color-primary-500);   /* #5AC7C4 */
}
```

---

## Figma 변수 네이밍 컨벤션

```
Color / Primary / 50  → #EDF9F8
Color / Primary / 500 → #5AC7C4  ← Core
Color / Primary / 900 → #0D4443

Color / Accent / 50   → #FFF1EF
Color / Accent / 500  → #FF8C7D  ← Core
Color / Accent / 900  → #5C1A10

Color / Natural / 50  → #F6F4F1
Color / Natural / 500 → #9E9488  ← Core
Color / Natural / 900 → #22201C
```

---

*유온 디자인 시스템 v1.0 | 브랜드 컬러 기준: 이미지 추출 헥스값 기반*
