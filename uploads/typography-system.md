# 유온 (Yuon) 타이포그래피 시스템

폰트: **Pretendard**  
기준: 8pt 그리드 · 한글 최적화 자간 · 1.4~1.5배 행간  
브랜드 인격: 진실한 · 신비로운 · 따뜻한 · 끌리는 · 인연 같은

---

## 폰트 패밀리 (Font Family)

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
             'Noto Sans KR', sans-serif;
```

### 굵기 체계 (Weight)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `Regular` | 400 | 본문 · 설명 · 캡션 |
| `Medium` | 500 | 라벨 · 강조 본문 · 탭바 라벨 |
| `SemiBold` | 600 | 제목 · 버튼 · GNB 타이틀 |
| `Bold` | 700 | 대제목 · 숫자 · Display |

> 사용 금지: 800 ExtraBold 이상 — 과도한 굵기는 브랜드 인격(따뜻한·진실한)과 충돌

---

## 타입 스케일 (Type Scale)

### 스케일 개요

| 토큰 | 크기 | 행간 | 굵기 | 자간 | 용도 |
|------|------|------|------|------|------|
| `Display` | 32px | 40px | Bold 700 | -2% | 스플래시 · 대형 타이틀 |
| `H1` | 28px | 36px | Bold 700 | -2% | 페이지 제목 |
| `H2` | 24px | 32px | Bold 700 | -2% | 섹션 제목 |
| `H3` | 20px | 28px | SemiBold 600 | -1.5% | 카드 그룹 제목 |
| `Title` | 18px | 26px | SemiBold 600 | -1% | 카드 제목 · GNB 타이틀 |
| `Body L` | 16px | 24px | Regular 400 | 0% | 본문 기본 |
| `Body M` | 14px | 22px | Regular 400 | 0% | 보조 본문 · 설명 |
| `Caption` | 12px | 18px | Regular 400 | 0% | 캡션 · 메타 정보 |
| `Overline` | 11px | 16px | Medium 500 | +5% | 라벨 · 태그 · 카테고리 |

---

## 상세 스펙 (Detailed Spec)

### Display

```
font-size:      32px
line-height:    40px   (125% — 제목은 1.2~1.3배)
font-weight:    700 (Bold)
letter-spacing: -2%    (-0.64px)
color:          #22201C (Natural/900)
용도:           스플래시 화면, 온보딩 대형 타이틀
```

### H1 — 페이지 제목

```
font-size:      28px
line-height:    36px   (128%)
font-weight:    700 (Bold)
letter-spacing: -2%    (-0.56px)
color:          #22201C (Natural/900)
용도:           각 화면의 메인 제목
```

### H2 — 섹션 제목

```
font-size:      24px
line-height:    32px   (133%)
font-weight:    700 (Bold)
letter-spacing: -2%    (-0.48px)
color:          #22201C (Natural/900)
용도:           탭 섹션, 주요 콘텐츠 구분
```

### H3 — 카드 그룹 제목

```
font-size:      20px
line-height:    28px   (140%)
font-weight:    600 (SemiBold)
letter-spacing: -1.5%  (-0.30px)
color:          #22201C (Natural/900)
용도:           피드 그룹명, 인사이트 소제목
```

### Title — 카드 제목 · GNB

```
font-size:      18px
line-height:    26px   (144%)
font-weight:    600 (SemiBold)
letter-spacing: -1%    (-0.18px)
color:          #22201C (Natural/900)
용도:           카드 내 제목, 상단바 타이틀, 팝업 제목
```

### Body L — 본문 기본

```
font-size:      16px
line-height:    24px   (150%)
font-weight:    400 (Regular)
letter-spacing: 0%
color:          #413D36 (Natural/800)
용도:           설명 본문, 채팅 메시지, 프로필 소개
```

### Body M — 보조 본문

```
font-size:      14px
line-height:    22px   (157%)
font-weight:    400 (Regular)
letter-spacing: 0%
color:          #635D54 (Natural/700)
용도:           보조 설명, 카드 서브텍스트, 궁합 설명 텍스트
               → 두 줄까지 노출, 이후 말줄임표 처리
```

### Caption — 캡션 · 메타 정보

```
font-size:      12px
line-height:    18px   (150%)
font-weight:    400 (Regular)
letter-spacing: 0%
color:          #857D72 (Natural/600)
용도:           타임스탬프, 거리 표시, 인증 날짜, 출처 표기
```

### Overline — 라벨 · 태그

```
font-size:      11px
line-height:    16px   (145%)
font-weight:    500 (Medium)
letter-spacing: +5%    (+0.55px)
color:          #9E9488 (Natural/500) 또는 Primary 컬러
용도:           카테고리 태그, 인증 뱃지 텍스트, 섹션 레이블
               → 영문 대문자 사용 시 +3%~+5% 자간 권장
```

---

## 행간 원칙 (Line-height)

| 분류 | 배율 | 비고 |
|------|------|------|
| 제목 계열 (Display~H3) | 글자 크기 × 1.2~1.3 | 좁혀 무게감 확보 |
| 본문 계열 (Title~Body M) | 글자 크기 × 1.4~1.5 | 가독성 최적화 |
| 캡션 · 라벨 | 글자 크기 × 1.4~1.5 | 균일 유지 |

---

## 자간 원칙 (Letter-spacing)

| 분류 | 자간 | 이유 |
|------|------|------|
| 한글 제목 (Display~H2) | -2% | 자간 좁혀 밀도감·신뢰감 |
| 한글 소제목 (H3~Title) | -1% ~ -1.5% | 적절한 밀도 |
| 한글 본문 | 0% | 가독성 중립 |
| 영문 라벨 · 태그 (Overline) | +3% ~ +5% | 대문자 간격 확보 |
| 숫자 (궁합 점수 등) | 0% | 숫자는 자간 조정 불필요 |

---

## 색상 × 타입 조합 (Color + Type)

| 역할 | 토큰 | 헥스 |
|------|------|------|
| 기본 본문 | Natural/900 | `#22201C` |
| 보조 본문 | Natural/800 | `#413D36` |
| 설명·캡션 | Natural/700 | `#635D54` |
| 메타·타임스탬프 | Natural/600 | `#857D72` |
| 비활성·힌트 | Natural/500 | `#9E9488` |
| 인증 뱃지 텍스트 | Primary/800 | `#1C6A68` |
| 궁합 점수 | Primary/500 | `#5AC7C4` |
| 관심 표현 텍스트 | Accent/900 | `#5C1A10` |
| 에러 텍스트 | Accent/800 | `#93372D` |

---

## 컴포넌트별 타이포 적용

### 상단바 GNB (Top App Bar)

```
타이틀:     Title — 18px / SemiBold 600 / 자간 -1%
아이콘:     24px (터치 영역 48×48px)
높이:       56px
좌우 패딩:  16px
```

### 하단 탭바 (Bottom Navigation)

```
라벨:       Overline — 10~12px / Medium 500
아이콘:     24px
높이:       56~64px
활성 색:    Primary Teal #5AC7C4
비활성 색:  #9CA3AF
```

### 버튼 (Button)

| 크기 | 높이 | 폰트 크기 | 굵기 |
|------|------|----------|------|
| Large | 52px | 16px | SemiBold 600 |
| Medium | 44px | 15px | SemiBold 600 |
| Small | 36px | 14px | Medium 500 |

### 카드 (Card)

```
카테고리:   Overline — 11px / Medium 500 / 자간 +5%
제목:       Title — 18px / SemiBold 600 / 자간 -1%
설명:       Body M — 14px / Regular 400 / 최대 2줄
가격·숫자:  Body L or Title / Bold 700 / 자간 0%
```

---

## CSS 변수 선언

```css
:root {
  /* 폰트 패밀리 */
  --font-family-base: 'Pretendard', -apple-system, BlinkMacSystemFont,
                      'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;

  /* 타입 스케일 — font-size */
  --font-size-display: 32px;
  --font-size-h1:      28px;
  --font-size-h2:      24px;
  --font-size-h3:      20px;
  --font-size-title:   18px;
  --font-size-body-l:  16px;
  --font-size-body-m:  14px;
  --font-size-caption: 12px;
  --font-size-overline:11px;

  /* 행간 — line-height */
  --line-height-display: 40px;
  --line-height-h1:      36px;
  --line-height-h2:      32px;
  --line-height-h3:      28px;
  --line-height-title:   26px;
  --line-height-body-l:  24px;
  --line-height-body-m:  22px;
  --line-height-caption: 18px;
  --line-height-overline:16px;

  /* 굵기 — font-weight */
  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  /* 자간 — letter-spacing */
  --letter-spacing-tight:  -0.02em;   /* 제목 -2% */
  --letter-spacing-snug:   -0.015em;  /* 소제목 -1.5% */
  --letter-spacing-normal: -0.01em;   /* Title -1% */
  --letter-spacing-default: 0em;      /* 본문 0% */
  --letter-spacing-wide:   0.05em;    /* 라벨 +5% */
}
```

---

## Figma 스타일 네이밍 컨벤션

```
Typography / Display          → 32 / Bold / -2%
Typography / H1               → 28 / Bold / -2%
Typography / H2               → 24 / Bold / -2%
Typography / H3               → 20 / SemiBold / -1.5%
Typography / Title            → 18 / SemiBold / -1%
Typography / Body L           → 16 / Regular / 0%
Typography / Body M           → 14 / Regular / 0%
Typography / Caption          → 12 / Regular / 0%
Typography / Overline         → 11 / Medium / +5%
```

---

## 사용 금지 원칙

- **Bold 800 이상** 사용 금지 — 브랜드 인격(따뜻한·진실한)과 충돌
- **AllCaps(전체 대문자)** 한글에 적용 금지
- **사주 전문 한자 용어** 그대로 UI 텍스트에 노출 금지  
  → 겁재·상관·식신 ✗ / "밀당의 고수 사주" · "해바라기 사주" ✓
- **최소 폰트 크기 11px** — 이하 사용 금지 (접근성)
- **자간 임의 조정** 금지 — 위 스케일 값만 사용

---

*유온 디자인 시스템 v1.0 | 타이포그래피 기준: UI 사이즈 가이드 (강사 원혜종) 기반, Pretendard 적용*
