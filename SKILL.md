---
name: yuon-design
description: Use this skill to generate well-branded interfaces and assets for 여운 (Yuon) — a 사주(four-pillars) based dating app — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

여운 is a Korean saju (음양오행 궁합) dating app. Brand mission: 진짜 사람과, 이유 있는 만남을. Two emotion axes that never mix on one component: **Teal = 신뢰/인증/궁합** · **Coral = 관심/하트/감정**. Tone is warm, sincere, lightly mysterious — never fortune-teller jargon (use friendly paraphrases like "해바라기 사주").

Key files:
- `styles.css` — link this one file; it `@import`s all tokens + Pretendard webfont.
- `tokens/` — colors (3 families × 10 + semantic aliases), typography, spacing (8pt), effects (radii/shadows/motion).
- `components/` — React primitives under `window.YuonDesignSystem_8624c6` (Button, Badge, MatchScore, ProfileFeedCard, HeartButton, ScoreBanner, TopicChip, BottomTabBar, ChatBubble, ListRow, etc.). Each dir has a `*.card.html` demo.
- `components/core/Icon.jsx` — curated Lucide line-icon set (24px, 2px stroke).
- `ui_kits/yuon-app/` — full clickable app prototype (login → home feed → profile detail → heart → chat → my page).
- `readme.md` — full content/visual/iconography guidelines.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. To use components in an HTML file, link `styles.css`, load `_ds_bundle.js` via `<script src>`, then read components from `window.YuonDesignSystem_8624c6` in a Babel script block. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Logo assets live in `assets/logo/`: `yuon-app-icon.png` (mint rounded-square icon), `yuon-symbol-white.png` (white symbol for dark/brand backgrounds), `yuon-wordmark.png` (black YUON wordmark for light backgrounds).

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
