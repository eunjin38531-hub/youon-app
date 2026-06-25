/* @ds-bundle: {"format":3,"namespace":"YuonDesignSystem_8624c6","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FortuneBanner","sourcePath":"components/dating/FortuneBanner.jsx"},{"name":"HeartButton","sourcePath":"components/dating/HeartButton.jsx"},{"name":"MatchScore","sourcePath":"components/dating/MatchScore.jsx"},{"name":"ProfileFeedCard","sourcePath":"components/dating/ProfileFeedCard.jsx"},{"name":"ScoreBanner","sourcePath":"components/dating/ScoreBanner.jsx"},{"name":"TopicChip","sourcePath":"components/dating/TopicChip.jsx"},{"name":"STICKER_NAMES","sourcePath":"components/emoticons/Sticker.jsx"},{"name":"Sticker","sourcePath":"components/emoticons/Sticker.jsx"},{"name":"ChatBubble","sourcePath":"components/feedback/ChatBubble.jsx"},{"name":"BottomTabBar","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"d55a7fb17a9f","components/core/Badge.jsx":"5b31a5a259c3","components/core/Button.jsx":"9857054fbe43","components/core/Card.jsx":"fce82e97f57e","components/core/Checkbox.jsx":"5bd97cd39293","components/core/Icon.jsx":"3b47831f2fdf","components/core/IconButton.jsx":"73a54585dab5","components/core/Input.jsx":"622c169c708f","components/core/Switch.jsx":"6f32f6fc1adc","components/core/Tag.jsx":"30c0fcb0ac5f","components/dating/FortuneBanner.jsx":"6c77f3dbc168","components/dating/HeartButton.jsx":"4e1848c2d436","components/dating/MatchScore.jsx":"49bba876ed3e","components/dating/ProfileFeedCard.jsx":"239640655a5a","components/dating/ScoreBanner.jsx":"37819c74639d","components/dating/TopicChip.jsx":"91bdc574475c","components/emoticons/Sticker.jsx":"8157b80a9107","components/feedback/ChatBubble.jsx":"96ecf377380c","components/navigation/BottomTabBar.jsx":"c9c0b35c567e","components/navigation/ListRow.jsx":"867ca264011c","components/navigation/SegmentedTabs.jsx":"24ab9d255794","components/navigation/TopAppBar.jsx":"5f782548ecde","deck-stage.js":"0cc26af2402a","ui_kits/yuon-app/AppData.js":"ec9daad29634","ui_kits/yuon-app/AppScreens.jsx":"85998077323c","ui_kits/yuon-app/AppScreens2.jsx":"85722c4eba1b","ui_kits/yuon-app/Onboarding.jsx":"bd12b8590c48"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YuonDesignSystem_8624c6 = window.YuonDesignSystem_8624c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Button — primary action control.
 * Sizes: lg 52px / md 44px / sm 36px (per type spec).
 * Variants: primary (teal, trust/CTA), accent (coral, affection), secondary (outline), ghost.
 * Color rule: never put teal and coral on the same component.
 */

const SIZES = {
  lg: {
    height: 52,
    font: 16,
    weight: 600,
    padding: '0 28px',
    radius: 12,
    gap: 8
  },
  md: {
    height: 44,
    font: 15,
    weight: 600,
    padding: '0 24px',
    radius: 10,
    gap: 6
  },
  sm: {
    height: 36,
    font: 14,
    weight: 500,
    padding: '0 16px',
    radius: 8,
    gap: 6
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: 'var(--color-disabled-bg)',
      color: 'var(--color-disabled-text)',
      border: '1px solid transparent'
    };
  }
  switch (variant) {
    case 'accent':
      return {
        background: 'var(--color-accent-500)',
        color: '#fff',
        border: '1px solid transparent'
      };
    case 'secondary':
      return {
        background: 'var(--color-surface-card)',
        color: 'var(--color-text-primary)',
        border: '1px solid var(--color-border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--color-primary-700)',
        border: '1px solid transparent'
      };
    case 'primary':
    default:
      return {
        background: 'var(--color-primary-500)',
        color: '#fff',
        border: '1px solid transparent'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.lg;
  const v = variantStyle(variant, disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-family-base)',
      fontSize: s.font,
      fontWeight: s.weight,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled && variant !== 'ghost' && variant !== 'secondary') e.currentTarget.style.filter = 'brightness(0.95)';
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Card — base surface container. White, 16px radius, soft warm shadow.
 * `padding` and `radius` adjustable; `interactive` adds press feedback.
 */
function Card({
  children,
  padding = 16,
  radius = 'var(--radius-lg)',
  interactive = false,
  elevated = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface-card)',
      borderRadius: radius,
      padding,
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      border: elevated ? 'none' : '1px solid var(--color-border-default)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: interactive ? e => {
      e.currentTarget.style.transform = 'scale(0.99)';
    } : undefined,
    onMouseUp: interactive ? e => {
      e.currentTarget.style.transform = 'scale(1)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'scale(1)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Icon — line icon renderer.
 * Brand icons (home, heart, chat, user, chevronLeft, mapPin) use the user-supplied
 * PNG artwork rendered via CSS mask, so they stay recolorable for active/inactive
 * states. `badgeCheck` is the fixed two-tone teal verification badge. Remaining
 * glyphs (sparkles, settings, send, bell, …) fall back to a curated Lucide (MIT)
 * baseline at the same 24px / 2px-stroke spec until brand art is supplied.
 * Some glyphs (heart) support a `filled` mode for active/affection states.
 */

const PATHS = {
  home: {
    el: 'g',
    children: [['path', {
      d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
    }], ['polyline', {
      points: '9 22 9 12 15 12 15 22'
    }]]
  },
  heart: {
    el: 'path',
    children: [['path', {
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
    }]]
  },
  chat: {
    el: 'path',
    children: [['path', {
      d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z'
    }]]
  },
  user: {
    el: 'g',
    children: [['path', {
      d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
    }], ['circle', {
      cx: 12,
      cy: 7,
      r: 4
    }]]
  },
  mapPin: {
    el: 'g',
    children: [['path', {
      d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'
    }], ['circle', {
      cx: 12,
      cy: 10,
      r: 3
    }]]
  },
  check: {
    el: 'path',
    children: [['path', {
      d: 'M20 6 9 17l-5-5'
    }]]
  },
  badgeCheck: {
    el: 'g',
    children: [['path', {
      d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'
    }], ['path', {
      d: 'm9 12 2 2 4-4'
    }]]
  },
  chevronLeft: {
    el: 'path',
    children: [['path', {
      d: 'm15 18-6-6 6-6'
    }]]
  },
  chevronRight: {
    el: 'path',
    children: [['path', {
      d: 'm9 18 6-6-6-6'
    }]]
  },
  chevronDown: {
    el: 'path',
    children: [['path', {
      d: 'm6 9 6 6 6-6'
    }]]
  },
  arrowLeft: {
    el: 'g',
    children: [['path', {
      d: 'M19 12H5'
    }], ['path', {
      d: 'm12 19-7-7 7-7'
    }]]
  },
  x: {
    el: 'g',
    children: [['path', {
      d: 'M18 6 6 18'
    }], ['path', {
      d: 'm6 6 12 12'
    }]]
  },
  search: {
    el: 'g',
    children: [['circle', {
      cx: 11,
      cy: 11,
      r: 8
    }], ['path', {
      d: 'm21 21-4.3-4.3'
    }]]
  },
  sliders: {
    el: 'g',
    children: [['line', {
      x1: 21,
      y1: 4,
      x2: 14,
      y2: 4
    }], ['line', {
      x1: 10,
      y1: 4,
      x2: 3,
      y2: 4
    }], ['line', {
      x1: 21,
      y1: 12,
      x2: 12,
      y2: 12
    }], ['line', {
      x1: 8,
      y1: 12,
      x2: 3,
      y2: 12
    }], ['line', {
      x1: 21,
      y1: 20,
      x2: 16,
      y2: 20
    }], ['line', {
      x1: 12,
      y1: 20,
      x2: 3,
      y2: 20
    }], ['line', {
      x1: 14,
      y1: 2,
      x2: 14,
      y2: 6
    }], ['line', {
      x1: 8,
      y1: 10,
      x2: 8,
      y2: 14
    }], ['line', {
      x1: 16,
      y1: 18,
      x2: 16,
      y2: 22
    }]]
  },
  bell: {
    el: 'g',
    children: [['path', {
      d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'
    }], ['path', {
      d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0'
    }]]
  },
  camera: {
    el: 'g',
    children: [['path', {
      d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'
    }], ['circle', {
      cx: 12,
      cy: 13,
      r: 3
    }]]
  },
  send: {
    el: 'g',
    children: [['path', {
      d: 'm22 2-7 20-4-9-9-4Z'
    }], ['path', {
      d: 'M22 2 11 13'
    }]]
  },
  clock: {
    el: 'g',
    children: [['circle', {
      cx: 12,
      cy: 12,
      r: 10
    }], ['polyline', {
      points: '12 6 12 12 16 14'
    }]]
  },
  plus: {
    el: 'g',
    children: [['path', {
      d: 'M5 12h14'
    }], ['path', {
      d: 'M12 5v14'
    }]]
  },
  moreHorizontal: {
    el: 'g',
    children: [['circle', {
      cx: 12,
      cy: 12,
      r: 1
    }], ['circle', {
      cx: 19,
      cy: 12,
      r: 1
    }], ['circle', {
      cx: 5,
      cy: 12,
      r: 1
    }]]
  },
  sparkles: {
    el: 'g',
    children: [['path', {
      d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'
    }]]
  },
  settings: {
    el: 'g',
    children: [['path', {
      d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'
    }], ['circle', {
      cx: 12,
      cy: 12,
      r: 3
    }]]
  },
  calendar: {
    el: 'g',
    children: [['path', {
      d: 'M8 2v4'
    }], ['path', {
      d: 'M16 2v4'
    }], ['rect', {
      x: 3,
      y: 4,
      width: 18,
      height: 18,
      rx: 2
    }], ['path', {
      d: 'M3 10h18'
    }]]
  },
  star: {
    el: 'g',
    children: [['path', {
      d: 'M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 18.1l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96z'
    }]]
  },
  lock: {
    el: 'g',
    children: [['rect', {
      x: 3,
      y: 11,
      width: 18,
      height: 11,
      rx: 2
    }], ['path', {
      d: 'M7 11V7a5 5 0 0 1 10 0v4'
    }]]
  }
};

// ── 여운 brand icon artwork (user-supplied PNG, embedded) ──
// Monochrome line icons rendered via CSS mask so they stay recolorable
// (active/inactive tab states, etc). Source files: assets/icons/*.png
const IMG_MASKS = {
  home: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAApZJREFUeAHtV71y00AQ3pUSbJhk5hLG4NINDkODH8F00NlPEFPSkY7OzhPEeQI7ZSqgo7NSUToVGGhUmp8EFQFkBnvZky1FUiTLJ8cZF/5mNCOt7va+2/t27w5gyYAwJ0T+YRmIHgPSFoBmWP2eAXMgNSEhCgKzmdf8Wg78IHhDiHtMzIQUSEWIo1JAoA6/FmKamAT4JA0pDRQhco9KSNT1kyGgNj9HvmYOYZF7UAJFKBES+eIu6sMux1VMmFgciedW/7N8ajSiqrR5pHStK+7vvFQYAvRZGzKZOgI2fSaTRvoz69vHd67B/nXWy27mjlkHFdlF2hDh6Z2Nu/Dn4uxklnFm0tB2vtjiSNQCZKZoJEpjSNA8//ppD+Yh5GRS5laHp+lpgQAMsAdVyzKtpL6QybQ4QhXPSHRKqFWniT2WUMwsD3mWSppgPw32U/eZpkY3UkNOJuHoPdPNe2QA95nMK1CEffHDyG7kOFBevRJSY9nb2yf27/N+uP2VCDmZBNj2DDKTxoWuDXNA3CtWELHlZajjmmqcnUexhJzIyLS+hElDvWp9/3AK14AoGUyWz3C/g3VIHx4EyMjG10RGQupG+pS+XVtIX0FCvnWGtKVfgZQ7UCmWULgjLAgB3z5NSaxBCkxqzO74yBEBwp9cu96mmZQyIUf42rAznllMGZNmogZvrqzBL0oaVN7tUfvXCoc5hpTgzfUAFKG+ZIFthPYjmwC6mVOGhRPygYtaI8q+ld+pQ0ooL9misSKUhBWhJKwIJWHpCZnuC980Uhe3JIigb9P/D0MNG76yfyNwzur9XsP9DkbI/tuUVxW4KfBYI9v2Xz6Dtw7btuzs+uYxrK0PcHzuTd7V00GeGg9hMHiRdL9bYenxHwJjAs4am6AvAAAAAElFTkSuQmCC',
  heart: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAxVJREFUeAHtl71y00AQx3clEiskzMhJmLhDNCFdXKZMOkrzBEk6qEieIOEJEp4gdkkFqRiquKTD6QzDDKITMwlWkRnkzKBl73Syz7ZsyZ8N/lf3tXe/0+3tngDmmms8YdoA23ZssKwSQOjIBsIGIF77Xr2aYlMEom1AysvGEGpgGDW2c2EUILuwtYtAJ1zc7TPE5f5yCEYlXkSAGNbiayI84pntPnZVYjvf+1bJBCQnzeVOCOEIssmlv+ELME2bAS+47mQxkpsJ7o993/U727uU39j8wkdS1NuIdwUUXnO7z0e2jQjF1IUJfIKwIm1kXdqVOsdQjZr3ezrUA71/dePZGUWLqTmpDAm7EOIjPVBH6nR1uQR46P/q9TG24bHhKQLuywbeOB/xGZcO4zGoDRY+c9XuwDe/vfopDJBYQNk4GsxemuOy3anajJSyqYqyGTdaK2sXqCYWX6bhfT2GFAV3N7618viS8a/ZqArN5iv/5ruXwa5qLa/n+Qh3RF2sG9zdVlS5tdMfGvHTtF2OK3F50Mo1WmsGzbxwDUPWwlB34uq0YYTE4vKyxLIWpMNHQEbbkVHcplmJQFsLnQilS2F8TWchpJ61IiDqgHgCMxISbLcqiiECQqy1B2EJZiU9ACsGCSRjAEfWqIMvQGFzH6YsEVhBi19xHGr5ECG9jcv8lc5lxp4ejNMRGAlaa7edOrg/F6QREYgY8R6mJL7JYm5HVV0OqOUeoCgu4KFmt7ta2LyACUvOqfmOzHtarjT1wRzSXU4FHNHjNxAWH66sOX/ubi9hAoqSN76M6yJfNrx6WR9jdhvJPDMFKPFlumGSkreZZDxpKAkDeJAG0xdoklDDwAwE6ge1tLxetBYefQoCPxhkK8LGkr3xkW1KWWFSgRKhELbQNJ8z1Lt+UPJpkVu84tu0MwxMJqBkKCz0g9JgisPCZAbKCjUuTDR+SHW/h0G9o6PJOt7XQ8NENiMoASph4uFhhDIfmS51fD95N4lPFZEOOAKfwwgaCUhB1ayl1UswcEv+rYgfQ4TPIHKTV/8Ac/0v+gcAQ4VT/x1STAAAAABJRU5ErkJggg==',
  chat: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAa9JREFUeAHtl4FtwyAQRX8zASMwQjYoGzQbxBukG4QN4k6QjtBO4HaCJBOkGyQbpJyEquOMEdhYaqs86SRk8+FzYMDAnT/GA8pRLpYuVi4eXWj/jLi6OLo4ufhw8YYZoU63Li4ubplx9hqNymwKjcSMrVGJXaQDMmddGISjV/5Z601I3Q4T2aM/UlOgb9A3tsdIZGZo1ArlKK+dlKlGNGAxHSvafM4VaoRpblEPnilah1kZ3yJcM2OmaQiFcLA2R8QFa9THoCBLK4TZmQu+pxn+YiEq8pfvmI8XVl6lKnYYcF4Zw/o5pCryVNZczBKNcB39IE/7W+JdbaJ9LfDLkIaurKwxH2qgz56hL1bWmI8lKx/5C2nok5UN5oN/6qdURYOB1V8Zfho8pSoqJHbRSjQoPA1sqaCAUYfrEuG9peYGyS99ZEzniBom6lCPLcKBrnOF3YBobKZIF7sOZ6GFkKZvw0yeUXZHMuhf8l9RQIP8/6zWd6jEgOgZTU/sP674OtxlGioNMpd9qefEGiOTNG00fRbxH8CUEdKM/lKtMDHUEG39ra93EQYOiE/nnf/JN1hS834809XMAAAAAElFTkSuQmCC',
  user: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAoZJREFUeAHtV71y00AQ3lUYxglmRsYY1GGaJENlOjqcJ8AlVOgNYp7AckcHfoLIT8DQ0cW8QWiYOA1KpwwkUeEZRBEte7GsyIxPulMUMpn4a3xn7e59uv0VwBI3DAgFYVqbTYPOuoTGK942z/8k2kOEvQiMfuDve1AAhQiZjze2+eCP2YbJOfEP+qCJFdCEaa33EPF9viS216p1+D05/goaMHSE2U02AjqzPQGMCHCLwj+1U3+MYi3cdvEcHfPRegc0oOWymrXxA+J4YWLDE3/fXiT3wNp0CehtvPWY7FNQhPIN8e20Z2TEIRGAI5ONwrDL1xPE22asWy4hdkUrWQKNsrIoCLyAkD4v0i2PEJKZ2h0qaHgS3ZIIEQap3ZM8cePCvf/q5ukpAjHJHiTsmGZT+taiaHKGvVykWxohjpkRzNyAYBqVux/kRqMepBIg1lWCVmGsrNUPuSi+nu6wtXrvYadyvzEOJ788cWMV03qxWq3v8LOk9nACdMPJ8TfVM7RbB7vD4bbQU5HlWtXnWuWABrRbB9/GqFJtcCuDdpYcEbw7PRortJhLEkqRGvKxNdE/2I1W/MgjioaAxpvgaPwFlrgNUM6y6ejBHZygJeqQkpJosDxBcuq7gX8wVFHJJSSqLlL0iSNXuUFK4Il5KW+0xVwyQLuQ7ktXTOpOlvYcGb5+QhzwylUd4MUL8Y+NRNuxm6e3DfBcfqbcmIiZnYRMtLIV/Pyu3CTnbDWetdA4253FHseULYupjOaajKCi8A2KkhEQujywDRJ7gLZMVkoIRTbF4HHVhUvDcJNlyrYyoXRqF/3oS2PORkbZ0PoM+h9YEsqDlBAXsPPvcox/y8BV2Fzi2vEXfVXubAowF8cAAAAASUVORK5CYII=',
  chevronLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAANRJREFUeAHt1iEOwjAUxvGvgJiYICQkyOG4BifhCnA0TsA1kJUIxEgQuNKSJZgiXvs9wfb+bkuW/ZZubwUsy5pYcyi03Oy6pl0dm3btX897L7l2AXIJ4xAugOuAcIintpLrZyD2xaBDYTRQBuMD3B7CHAj9wvS3q4ewahATUw1iY6pAGphikBamCKSJSYk/e01MEUg7MWgYdn44/CxfWkaQ+v+XWhs1nsGohRrfz5WNos2hdOPcSIAw6mDMoMTRN/lpUx839+c4Qh/xeU/STb5lWZPrDRbDlJhUAIGlAAAAAElFTkSuQmCC',
  mapPin: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAftJREFUeAHtV4tNwzAQfTBBR7gNyAjegGxAmIAyQbMB2aDdgDJBukHLBIUJYAOw1VQ9n8+JnaYSSH3SSW7v4/P5Pg5wxT/DDcbBWCot3Vmijhy+Le0svVtaW9rgwjCWWks/ibS39IALgDIdkbTEKYqTOLMXG3xZanC4NhKy7r9VJyOjRTgTpDjjHJkl6jZTO8WdcSc2yIeBHy1nM+VAARbCmQLjUQinamSC4Id6HpFzJzXdBo7KHptz+AfMitKKKW8jMk8IE3eo1FuMjBLPnXuFv8BwqS8UPQM/SkkoBpQIegtoEFakUfR5VAkJKJnCWuGv4F8nz4VZ9x9viBKvjF9J5q2iwKvpQ+HzK3zEYX4d4dbP7LeW5J9sPUtxCGIDCW5kp/A3EVnNZpJDvQqCbxR+EZHts5nsECn8N7Z+QZhDPG+0HLxj61hL8UDob2AGYd85VpnsS6TYz64yYLgP1RjuQ7WiV4mDJKNmim1EpkLYd45RjY0aLh+TUTGDH9o+5RKnWWYQT9oKw9fZixr+qQnjQThz2ju4k/IQj33HaHZGQ75j5KhIcYaPklFXJVEJg9tEo6Q4k5XIfaiR9zYmhBVYY2LUSCtv7eE2WWQkSmWzJU5fry1CpytcGIR4Q8y51knhqqdBfGykfrtNDoIfLXdlBn8ABud9t12RjF+yuR5PV4zYcgAAAABJRU5ErkJggg=='
};
// Two-tone teal verification badge — used as-is (fixed brand color).
const IMG_BADGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA79JREFUeAHFmEtPE1EUx8+9HeS1qSJGDMqAGo3RCJHElIC2O1yBukGUABt1p27FBExkK2UnKzBEYWPUT0ClxG5MbJSA+KJEVxJJNWmh6TDXc6Z1+ppJpy0t/2Ta27mvX+8593EugxzV4/PJkqp0qZw3A6hOJsAuGLNTHhMiiOkAPbZt1aNw5fWswxXIpX1mtWDvwvyAsPF+rOCE3OTHOu5njvanVgpnBerxep1cgkksKkNBEgEGbCQbmClQ9/s5e3WkbFgIuAs7KDSxO1QZffiqxRU0zDd62eObkzmUvcRkMxRFIqCC4jLyL2YMI80VbqL8oHjyDzJTaWBITLMC9QlmQOQzpYHR1Vy9SX0mpJuMpjXY+CTsglRFuGY7OjyUToyQjQ3DLim2rMTT9KGNDjAZiqz95eUmOUy+7lvo14EY53egyLp99DiMt7SCG5+GquqMfBVgQGOJrzmrUERdrT8MV+qP6L/n13/BxLcvkAlla+RMlHVDCWFIy3//GJZlYrubAxcXoYQwNDr0GAIxdpZzlclQIph3G78NTZWQ6pQEgGzW4IXaA9jIBkyv5eZinQfrMmDWwiGY+P41S01ml3BptKe/Pre3Rm+ws+4QhLcVePHzB1gR/Yk+uSkD5tHSIoQVJVt1Ozd6SwDJIjgasWxq3VcDt3B6J2s9EoGxlWUrMJo4CMg4l9AsSHc8grqEpjATrS03m45lwIwufdS+LSrIca4ZHpTI+dKn5w00BZnECGbo1GmolqRCYPBEAgEuhHhjlv945ROshUIp7/oaGlNWWtoO7p04WTgM0MIo1tCHuN+sAPnS2OdlbHhLf1eFHT/A0SAQeihdW16h54fQV/KBIeGZ22Np66jFjofSOo51KAxgFrVZlY9UiDZq56FrvoW5bOENQY2eaU4xTbruf/DnDYP/zf+8rb2Fx9Jq1pgp5heL2igY6QlOgrxhiMEGbvpOnBh93lUrZyKaZelrDcF4TfYnSzB44J9xdDRSWl8Y8TwyaKUyrU/JW8l0YLUgGE2cjfxPpoRBvW+9btxyLR3WquK+ZHUFNhMuO+MzbR16MJqydeyJKCPkXBba0UAKhkFTbVZin0lKAZpyuYIqi16mIA6KLIIRGCimh9QZmytFkhRRFhnKL0xCacPdngru2VJa0MDjsMMinwlXRF1m90bZr2N88wO4Axcc0cZMBIOzjlhAaCbLF1YamMBwieV2I4IQHrTD1Mz5HbqwygTDvY9JXaByJ3Yna0/8Sg/tEcQW0Um5B5jqV4WEV3qOAOSgf9bkpHBCZwOzAAAAAElFTkSuQmCC';
// Solid coral heart (filled/affection state) — user art, recolorable via mask.
const HEART_FILLED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhJJREFUeAHFV11O20AQ/mbXb6WSjwA3gBuUE0BOUHGCJBKkqhqVpUD70EikNwgnaHuC5Aa4N8gRLKE+VLE9nV0HQyCx45jYn+R9mN3Z+XZ258eEZ+Dvn96B6RiajsDYnYtD+QKARnT65RYrwDdmF7OoM9f1ReQX6dITZR8Jn4OTDnLBAbTXoq6ZLkgHn9symrnRFaqYguMW9b4GDyKVTcbxz2LjjvM+onjsTpsZ75/LOMw17lTFo0rfOS9nomwDMigDexrv/gDxTru0rr0Wfb9H3WGo0pOU3iA9Tbwz3kjXeip667ytxJ3H2BhyHRuros03HV+B+AjNQLzwZl9VOkV1WAIFL3e78C2BEA1C3kCDBLS+U2D+jabwT/2xBH6hGUzoo5kqOrueSFqboHbQyI5pLUjoFnVC0vhDZXQEqHc5qtUL9Ji+H6th4nVRR0gyFvqCjAD1TCCTF9gmbAWN9IINerFm0B+J+D22gZnesy//qUi9WKQ9KZMU4LXBSfe58aUEpNUKMVMt565XM44LCffhsilaqfNNGhUvHrvGo7LxS7NqmnJ1q5IoMF5IwO1hu+U4kdaLy/UNCU7S/JKPQgIZkUFf7pDaxQtt661bLqzXgMKaoNOrjrzk/DzB8s8Q6cN1jZci4EicXRsk+mB5hPAP/PUOl4Va7p7YAOnjjIzkdJuwQsR8Qh+u6i/rbIxvP1TAfx0kzOdP0Ok2AAAAAElFTkSuQmCC';
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  filled = false,
  style,
  ...rest
}) {
  // Brand verification badge — fixed two-tone art.
  if (name === 'badgeCheck') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: 'block',
        flexShrink: 0,
        width: size,
        height: size,
        backgroundImage: `url(${IMG_BADGE})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...style
      }
    }, rest));
  }
  // Brand line icons — recolorable via CSS mask. Heart swaps art for filled state.
  if (IMG_MASKS[name]) {
    const art = name === 'heart' && filled ? HEART_FILLED : IMG_MASKS[name];
    const mask = `url(${art}) center / contain no-repeat`;
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: 'block',
        flexShrink: 0,
        width: size,
        height: size,
        background: color,
        WebkitMask: mask,
        mask,
        ...style
      }
    }, rest));
  }
  const def = PATHS[name];
  if (!def) return null;
  const kids = def.children.map(([tag, props], i) => React.createElement(tag, {
    key: i,
    ...props
  }));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Avatar — circular profile image with optional 본인인증 ring + check.
 * Falls back to initials on a warm neutral when no src.
 */
function Avatar({
  src,
  alt = '',
  name = '',
  size = 48,
  verified = false,
  ring = false,
  style,
  ...rest
}) {
  const initials = name ? name.trim().slice(0, 2) : '';
  const badgeSize = Math.max(14, Math.round(size * 0.32));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-natural-200)',
      color: 'var(--color-natural-700)',
      fontFamily: 'var(--font-family-base)',
      fontWeight: 600,
      fontSize: size * 0.4,
      boxShadow: ring || verified ? '0 0 0 2px var(--color-surface-card), 0 0 0 4px var(--color-primary-400)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: badgeSize,
      height: badgeSize,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 2px var(--color-surface-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(badgeSize * 0.66),
    color: "#fff",
    strokeWidth: 3
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Badge — small status pill.
 * `trust` = 본인인증 뱃지 (teal, with check). Other tones for activity/meta.
 */
const TONES = {
  trust: {
    bg: 'var(--color-trust-badge-bg)',
    fg: 'var(--color-trust-badge-text)',
    icon: 'badgeCheck'
  },
  primary: {
    bg: 'var(--color-primary-100)',
    fg: 'var(--color-primary-800)',
    icon: null
  },
  accent: {
    bg: 'var(--color-accent-100)',
    fg: 'var(--color-accent-800)',
    icon: null
  },
  neutral: {
    bg: 'var(--color-natural-100)',
    fg: 'var(--color-natural-700)',
    icon: null
  },
  solid: {
    bg: 'rgba(34,32,28,0.55)',
    fg: '#fff',
    icon: null
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  size = 'md',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const showIcon = icon !== undefined ? icon : t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: size === 'sm' ? 12 : 14,
    color: t.fg
  }) : null;
  const dims = size === 'sm' ? {
    fontSize: 11,
    height: 20,
    padding: '0 8px',
    gap: 3
  } : {
    fontSize: 12,
    height: 24,
    padding: '0 10px',
    gap: 4
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dims.gap,
      height: dims.height,
      padding: dims.padding,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-family-base)',
      fontSize: dims.fontSize,
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), showIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Checkbox — agreement / selection control. Checked = primary teal.
 * Supports a `round` variant for 약관 동의 lists.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  round = false,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-family-base)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 24,
      height: 24,
      flexShrink: 0,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      background: checked ? 'var(--color-primary-500)' : 'var(--color-surface-card)',
      border: checked ? '1.5px solid var(--color-primary-500)' : '1.5px solid var(--color-border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "#fff",
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 IconButton — square tappable icon control (48px touch target).
 * Used for top-bar back/actions, card overflow, etc.
 */
function IconButton({
  icon,
  variant = 'plain',
  size = 44,
  ariaLabel,
  disabled = false,
  style,
  ...rest
}) {
  const variants = {
    plain: {
      background: 'transparent',
      color: 'var(--color-text-primary)'
    },
    soft: {
      background: 'var(--color-natural-100)',
      color: 'var(--color-text-primary)'
    },
    primary: {
      background: 'var(--color-primary-500)',
      color: '#fff'
    },
    accent: {
      background: 'var(--color-accent-500)',
      color: '#fff'
    }
  };
  const v = variants[variant] || variants.plain;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Input — single-line text field. Label optional, error/help text optional.
 * Focus ring uses primary/700. Warm neutral border at rest.
 */
function Input({
  label,
  value,
  placeholder,
  type = 'text',
  error,
  help,
  suffix,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--color-error-text)' : focused ? 'var(--color-primary-500)' : 'var(--color-border-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 52,
      padding: '0 16px',
      background: disabled ? 'var(--color-natural-100)' : 'var(--color-surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,
      color: 'var(--color-text-primary)',
      minWidth: 0
    }
  }, rest)), suffix), (error || help) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--color-error-text)' : 'var(--color-text-meta)'
    }
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Switch — on/off toggle. On = primary teal.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 48,
      height: 28,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 2,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      background: checked ? 'var(--color-primary-500)' : 'var(--color-natural-200)',
      transition: 'background var(--duration-base) var(--ease-standard)',
      display: 'inline-flex',
      alignItems: 'center',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-emphasis)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Tag — category / saju-keyword chip (Overline styling).
 * Default is the soft saju-keyword look; `selectable` toggles an active state.
 */
function Tag({
  children,
  tone = 'neutral',
  active = false,
  selectable = false,
  onClick,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--color-natural-100)',
      fg: 'var(--color-natural-700)',
      activeBg: 'var(--color-natural-800)',
      activeFg: '#fff'
    },
    primary: {
      bg: 'var(--color-primary-50)',
      fg: 'var(--color-primary-700)',
      activeBg: 'var(--color-primary-500)',
      activeFg: '#fff'
    },
    accent: {
      bg: 'var(--color-accent-50)',
      fg: 'var(--color-accent-700)',
      activeBg: 'var(--color-accent-500)',
      activeFg: '#fff'
    }
  };
  const t = tones[tone] || tones.neutral;
  const bg = active ? t.activeBg : t.bg;
  const fg = active ? t.activeFg : t.fg;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: selectable ? onClick : undefined,
    role: selectable ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      padding: '0 12px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-family-base)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: selectable ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/dating/FortuneBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 FortuneBanner — 오늘의 연애운 배너 (home top).
 * 사주 기반 오늘의 연애 운세 한 줄 + 오늘의 기운(오행) 칩. Soft teal gradient with a
 * layered orb on the right. Pass `mascot` (image url) for the brand character;
 * without it, an elegant decorative orb renders (no unfinished placeholder).
 */
function FortuneBanner({
  fortune,
  element,
  mascot,
  onMore,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-400) 48%, var(--color-primary-200) 100%)',
      padding: '22px 20px',
      minHeight: 156,
      boxShadow: '0 10px 26px rgba(45, 142, 140, 0.28)',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: mascot ? -10 : -18,
      top: '50%',
      transform: 'translateY(-50%)',
      width: mascot ? 200 : 168,
      height: mascot ? 200 : 168,
      zIndex: 1,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.22)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 26,
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.28)'
    }
  }), mascot ? /*#__PURE__*/React.createElement("img", {
    src: mascot,
    alt: "",
    style: {
      position: 'absolute',
      inset: 10,
      width: 'calc(100% - 20px)',
      height: 'calc(100% - 20px)',
      objectFit: 'contain',
      filter: 'drop-shadow(0 8px 18px rgba(28,106,104,0.35))'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 48,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.55))',
      boxShadow: '0 8px 24px rgba(28,106,104,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 30,
    filled: true,
    color: "var(--color-primary-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '66%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: '#fff',
      background: 'rgba(255,255,255,0.18)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 12,
    filled: true,
    color: "#fff"
  }), "\uC624\uB298\uC758 \uC5F0\uC560\uC6B4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1.34,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, fortune), element && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.92)'
    }
  }, "\uC624\uB298\uC758 \uAE30\uC6B4 \xB7 ", element), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMore,
    style: {
      marginTop: 14,
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-family-base)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-primary-800)'
    }
  }, "\uB0B4 \uC0AC\uC8FC \uC5F0\uC560\uC6B4 \uBCF4\uAE30 ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 15,
    color: "var(--color-primary-700)"
  }))));
}
Object.assign(__ds_scope, { FortuneBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/FortuneBanner.jsx", error: String((e && e.message) || e) }); }

// components/dating/HeartButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 HeartButton — the two affection actions.
 * `quiet` = 조용한 하트 / 찜하기 (no notification to the other person) — soft coral outline.
 * `interest` = 관심 표현 (sends a notification) — filled coral.
 * Renders as a labelled pill button; `iconOnly` renders a round FAB-style button.
 */
function HeartButton({
  kind = 'interest',
  active = false,
  iconOnly = false,
  onClick,
  style,
  ...rest
}) {
  const isInterest = kind === 'interest';
  const label = isInterest ? '관심 표현' : '찜하기';
  const filled = isInterest || active;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-family-base)',
    fontWeight: 600,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    transition: 'filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    WebkitTapHighlightColor: 'transparent'
  };
  const colors = isInterest ? {
    background: 'var(--color-accent-500)',
    color: '#fff',
    iconColor: '#fff'
  } : active ? {
    background: 'var(--color-accent-100)',
    color: 'var(--color-accent-700)',
    iconColor: 'var(--color-accent-500)'
  } : {
    background: 'var(--color-surface-card)',
    color: 'var(--color-accent-600)',
    iconColor: 'var(--color-accent-500)',
    border: '1.5px solid var(--color-accent-200)'
  };
  const press = (e, v) => {
    e.currentTarget.style.transform = v;
  };
  if (iconOnly) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      "aria-label": label,
      onClick: onClick,
      style: {
        ...base,
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-pop)',
        ...colors,
        ...style
      },
      onMouseDown: e => press(e, 'scale(0.9)'),
      onMouseUp: e => press(e, 'scale(1)'),
      onMouseLeave: e => press(e, 'scale(1)')
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "heart",
      size: 26,
      color: colors.iconColor,
      filled: filled
    }));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      ...base,
      height: 52,
      padding: '0 24px',
      borderRadius: 'var(--radius-lg)',
      flex: 1,
      ...colors,
      ...style
    },
    onMouseDown: e => press(e, 'scale(0.97)'),
    onMouseUp: e => press(e, 'scale(1)'),
    onMouseLeave: e => press(e, 'scale(1)')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 20,
    color: colors.iconColor,
    filled: filled
  }), label);
}
Object.assign(__ds_scope, { HeartButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/HeartButton.jsx", error: String((e && e.message) || e) }); }

// components/dating/MatchScore.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 MatchScore — 궁합 점수 indicator (사주 compatibility).
 * Teal, the trust/compatibility color. `bar` shows a track+fill+number;
 * `ring` shows a circular gauge; `chip` is a compact pill for cards.
 */
function MatchScore({
  score = 0,
  variant = 'bar',
  size = 'md',
  label = '궁합',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, score));
  if (variant === 'chip') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 3,
        height: 26,
        padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-primary-500)',
        color: '#fff',
        fontFamily: 'var(--font-family-base)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: '0'
      }
    }, pct), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        opacity: 0.9
      }
    }, "\uC810"));
  }
  if (variant === 'ring') {
    const d = size === 'lg' ? 96 : 72;
    const stroke = size === 'lg' ? 9 : 7;
    const r = (d - stroke) / 2;
    const circ = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        position: 'relative',
        display: 'inline-flex',
        width: d,
        height: d,
        fontFamily: 'var(--font-family-base)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: d,
      height: d,
      style: {
        transform: 'rotate(-90deg)'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: d / 2,
      cy: d / 2,
      r: r,
      fill: "none",
      stroke: "var(--color-match-track)",
      strokeWidth: stroke
    }), /*#__PURE__*/React.createElement("circle", {
      cx: d / 2,
      cy: d / 2,
      r: r,
      fill: "none",
      stroke: "var(--color-primary-500)",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: circ,
      strokeDashoffset: circ * (1 - pct / 100),
      style: {
        transition: 'stroke-dashoffset var(--duration-slow) var(--ease-emphasis)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size === 'lg' ? 28 : 22,
        fontWeight: 700,
        color: 'var(--color-primary-700)',
        lineHeight: 1
      }
    }, pct), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        color: 'var(--color-text-meta)'
      }
    }, label)));
  }

  // bar
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--color-primary-600)',
      lineHeight: 1
    }
  }, pct), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-primary-600)'
    }
  }, "\uC810"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-match-track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary-500)',
      transition: 'width var(--duration-slow) var(--ease-emphasis)'
    }
  })));
}
Object.assign(__ds_scope, { MatchScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/MatchScore.jsx", error: String((e && e.message) || e) }); }

// components/dating/ProfileFeedCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 ProfileFeedCard — the home-feed profile card (여운 canonical design).
 * Full-bleed photo (no inset), rounded top corners. Score badge top-left.
 * Activity + saju tag pills overlaid bottom of photo.
 * White footer: ✓인증 + 닉네임, 나이 + intro line.
 */
function ProfileFeedCard({
  photo,
  name,
  age,
  score,
  activity = '오늘',
  sajuTag = '사주가 아름답다!!!!',
  elementIcon,
  intro,
  verified = true,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-border-default)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-family-base)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 2',
      background: 'var(--color-natural-200)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, typeof score === 'number' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      padding: '7px 10px 6px',
      background: 'var(--color-surface-card)',
      borderRadius: 12,
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      minWidth: 48,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 20,
    filled: true,
    color: "var(--color-accent-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-text-primary)',
      lineHeight: 1
    }
  }, score, "\uC810")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      right: 10,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, activity && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 28,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(28,26,24,0.52)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--color-primary-300)'
    }
  }), activity), sajuTag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 28,
      padding: elementIcon ? '0 10px 0 4px' : '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,140,80,0.82)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600
    }
  }, elementIcon ? /*#__PURE__*/React.createElement("img", {
    src: elementIcon,
    alt: "",
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      objectFit: 'cover',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    },
    "aria-hidden": "true"
  }, "\uD83D\uDD25"), sajuTag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginBottom: 4
    }
  }, verified && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "badgeCheck",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--color-text-primary)',
      letterSpacing: '-0.01em'
    }
  }, name, age != null ? `, ${age}` : '')), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--color-text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, intro)));
}
Object.assign(__ds_scope, { ProfileFeedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/ProfileFeedCard.jsx", error: String((e && e.message) || e) }); }

// components/dating/ScoreBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 ScoreBanner — 오늘의 연애 점수 배너 (home top).
 * 사주 기반 오늘의 연애운. Teal gradient surface with today's score + one-liner.
 */
function ScoreBanner({
  score = 0,
  message,
  date = '오늘',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 18,
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-500) 100%)',
      color: '#fff',
      fontFamily: 'var(--font-family-base)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 64,
      height: 64,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      opacity: 0.9
    }
  }, "\uC810"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 14,
    color: "rgba(255,255,255,0.9)",
    filled: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      opacity: 0.9
    }
  }, date, "\uC758 \uC5F0\uC560 \uC810\uC218")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.45
    }
  }, message)));
}
Object.assign(__ds_scope, { ScoreBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/ScoreBanner.jsx", error: String((e && e.message) || e) }); }

// components/dating/TopicChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 TopicChip — 사주 기반 대화 주제 추천 (conversation-starter suggestion).
 * Shown on first entry to a chat; tapping pre-fills the first message.
 * Soft teal card with a sparkle marker.
 */
function TopicChip({
  children,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      width: '100%',
      textAlign: 'left',
      padding: '14px 16px',
      background: 'var(--color-primary-50)',
      border: '1px solid var(--color-primary-100)',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-family-base)',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.99)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.background = 'var(--color-primary-50)';
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-primary-100)';
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--color-primary-600)",
    filled: true,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.45,
      color: 'var(--color-primary-800)'
    }
  }, children));
}
Object.assign(__ds_scope, { TopicChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dating/TopicChip.jsx", error: String((e && e.message) || e) }); }

// components/emoticons/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 Sticker — 여우 캐릭터 이모티콘 스프라이트 컴포넌트.
 * 스프라이트 시트: 6열 × 5행, 총 30종.
 *
 * 소비 프로젝트에서는 반드시 spriteSrc를 지정하고
 * assets/emoticons/yuon-stickers.png 를 프로젝트에 복사하세요.
 */

const STICKER_NAMES = ['안녕', '윙크', '설레', '헉', '아쉬워', 'ㅋㅋㅋ', '좋아해', '쪽!', '부끄러워', '최고야!', '화이팅!', '고마워', '빼꼼', '지켜보고있다', '보고싶어', '안아줘', '기대돼', '메시지왔어', '잘자', '좋은아침', '데이트하자', '영화볼까?', '우리 만나자', '심쿵', '와우', '화났어!', '궁금해', '멋져', '우리 잘맞아', '영원히'];
const COLS = 6;
const ROWS = 5;
function Sticker({
  name,
  size = 80,
  showLabel = false,
  spriteSrc = 'assets/emoticons/yuon-stickers.png',
  style,
  ...rest
}) {
  const index = STICKER_NAMES.indexOf(name);
  if (index === -1) return null;
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  const posX = `${col * (100 / (COLS - 1))}%`;
  const posY = `${row * (100 / (ROWS - 1))}%`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      backgroundImage: `url(${spriteSrc})`,
      backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
      backgroundPosition: `${posX} ${posY}`,
      backgroundRepeat: 'no-repeat',
      flexShrink: 0
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.max(9, Math.round(size * 0.135)),
      color: 'var(--color-text-meta)',
      fontFamily: 'var(--font-family-base)',
      whiteSpace: 'nowrap',
      lineHeight: 1.2
    }
  }, name));
}
Object.assign(__ds_scope, { STICKER_NAMES, Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/emoticons/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 ChatBubble — message bubble.
 * `me` = outgoing (teal, right) · `them` = incoming (white, left).
 * Tails via asymmetric corner radius. Optional timestamp.
 */
function ChatBubble({
  children,
  from = 'them',
  time,
  style,
  ...rest
}) {
  const isMe = from === 'me';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMe ? 'flex-end' : 'flex-start',
      gap: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      padding: '10px 14px',
      background: isMe ? 'var(--color-primary-500)' : 'var(--color-surface-card)',
      color: isMe ? '#fff' : 'var(--color-text-primary)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      lineHeight: 1.45,
      borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
      border: isMe ? 'none' : '1px solid var(--color-border-default)',
      boxShadow: isMe ? 'none' : 'var(--shadow-xs)',
      wordBreak: 'break-word'
    }
  }, children), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-tertiary)',
      padding: '0 4px'
    }
  }, time));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomTabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 BottomTabBar — 4-tab bottom navigation: 홈 · 하트 · 대화 · 마이.
 * Active = primary teal; inactive = warm gray. 64px height.
 */
const DEFAULT_TABS = [{
  key: 'home',
  label: '홈',
  icon: 'home'
}, {
  key: 'heart',
  label: '하트',
  icon: 'heart'
}, {
  key: 'chat',
  label: '대화',
  icon: 'chat'
}, {
  key: 'my',
  label: '마이',
  icon: 'user'
}];
function BottomTabBar({
  active = 'home',
  onChange,
  tabs = DEFAULT_TABS,
  badges = {},
  showLabels = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: 64,
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)',
      boxShadow: 'var(--shadow-nav)',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), tabs.map(tab => {
    const isActive = tab.key === active;
    const color = isActive ? 'var(--color-primary-500)' : 'var(--color-natural-400)';
    return /*#__PURE__*/React.createElement("button", {
      key: tab.key,
      type: "button",
      onClick: () => onChange && onChange(tab.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        position: 'relative',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: tab.icon,
      size: 24,
      color: color,
      filled: isActive && tab.icon === 'heart'
    }), badges[tab.key] ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -2,
        right: -6,
        minWidth: 8,
        height: 8,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-accent-500)',
        border: '1.5px solid var(--color-surface-card)'
      }
    }) : null), showLabels && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        color
      }
    }, tab.label));
  }));
}
Object.assign(__ds_scope, { BottomTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 ListRow — settings / 마이페이지 menu row.
 * leading icon + label (+ optional value/right slot) + chevron.
 */
function ListRow({
  icon,
  label,
  value,
  right,
  chevron = true,
  onClick,
  danger = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '16px 4px',
      background: 'transparent',
      border: 'none',
      cursor: onClick ? 'pointer' : 'default',
      textAlign: 'left',
      fontFamily: 'var(--font-family-base)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 24,
      justifyContent: 'center',
      color: danger ? 'var(--color-error-text)' : 'var(--color-natural-600)'
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "currentColor"
  }) : icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 500,
      color: danger ? 'var(--color-error-text)' : 'var(--color-text-primary)'
    }
  }, label), value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-meta)'
    }
  }, value), right, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 20,
    color: "var(--color-natural-300)"
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 SegmentedTabs — underline tab switcher (e.g. 하트: 내가 찜한 / 나를 괜찮게 본).
 */
function SegmentedTabs({
  tabs = [],
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--color-border-default)',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), tabs.map(tab => {
    const key = typeof tab === 'string' ? tab : tab.key;
    const label = typeof tab === 'string' ? tab : tab.label;
    const isActive = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onChange && onChange(key),
      style: {
        flex: 1,
        position: 'relative',
        padding: '14px 8px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-family-base)',
        fontSize: 15,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
        transition: 'color var(--duration-fast) var(--ease-standard)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'var(--color-primary-500)' : 'transparent',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 여운 TopAppBar (GNB) — 56px top bar. Title centered, optional left/right slots.
 */
function TopAppBar({
  title,
  left,
  right,
  transparent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 56,
      padding: '0 8px',
      background: transparent ? 'transparent' : 'var(--color-surface-card)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--color-border-default)',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: 56,
      justifyContent: 'flex-start'
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--color-text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      minWidth: 56,
      justifyContent: 'flex-end'
    }
  }, right));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/yuon-app/AppData.js
try { (() => {
// 여운 UI kit — mock data (profiles, chats). Exposed on window for the screens.
window.YuonData = function () {
  const photo = id => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;
  const profiles = [{
    id: 'seoyeon',
    name: '서연',
    age: 29,
    score: 92,
    activity: '5분 전',
    photo: photo('photo-1494790108377-be9c29b29330'),
    sajuLine: '목화 일주, 서로 기운을 북돋아요',
    intro: '조용한 카페와 한강 산책을 좋아해요',
    bio: '안녕하세요! 조용한 카페와 한강 산책을 좋아하는 사람이에요. 비슷한 결의 인연을 만나고 싶어요.',
    sajuTag: '목화 상생',
    district: '마포구',
    height: 165,
    smoke: '비흡연',
    drink: '가끔',
    job: '브랜드 디자이너',
    school: '연세대',
    element: '목(木)이 강한 봄의 기운',
    sajuKeywords: ['목화 일주', '해바라기 사주', '편안한 끌림'],
    synergy: '당신의 화(火)와 서연님의 목(木)이 만나 서로를 키워주는 상생 관계예요. 함께 있을수록 편안하고 단단해지는 궁합입니다.',
    impressions: ['웃음이 많아요', '차분해요', '잘 들어줘요'],
    hobbies: [photo('photo-1501785888041-af3ef285b470'), photo('photo-1504674900247-0877df9cc836'), photo('photo-1481349518771-20055b2a7b24'), photo('photo-1495474472287-4d71bcdd2085')],
    verified: true
  }, {
    id: 'jihoon',
    name: '지훈',
    age: 31,
    score: 88,
    activity: '오늘',
    photo: photo('photo-1500648767791-00dcc994a43e'),
    sajuLine: '수목 조합, 대화가 잘 통하는 인연',
    intro: '주말엔 등산, 평일엔 책 한 권',
    bio: '주말엔 산, 평일엔 책 한 권. 함께 걸으며 이야기 나누는 걸 좋아하는 남자입니다.',
    sajuTag: '수목 상생',
    district: '강남구',
    height: 178,
    smoke: '비흡연',
    drink: '즐김',
    job: '프로덕트 매니저',
    school: '고려대',
    element: '수(水)가 맑은 겨울의 기운',
    sajuKeywords: ['수목 상생', '밀당의 고수', '깊은 대화'],
    synergy: '서로 물과 나무처럼 자연스럽게 이어지는 궁합. 말이 잘 통하고, 함께 있으면 생각이 자라나는 사이예요.',
    impressions: ['듬직해요', '유머러스해요', '적극적이에요'],
    hobbies: [photo('photo-1551632811-561732d1e306'), photo('photo-1507525428034-b723cf961d3e'), photo('photo-1519681393784-d120267933ba'), photo('photo-1465101162946-4377e57745c3')],
    verified: true
  }, {
    id: 'hana',
    name: '하나',
    age: 27,
    score: 85,
    activity: '1시간 전',
    photo: photo('photo-1534528741775-53994a69daeb'),
    sajuLine: '금토의 안정, 오래 함께할 사주',
    intro: '강아지와 산책하는 시간이 제일 좋아요',
    bio: '강아지와 산책하는 시간이 제일 행복한 사람입니다. 천천히 알아가요.',
    sajuTag: '금토 안정',
    district: '서대문구',
    height: 162,
    smoke: '비흡연',
    drink: '안 함',
    job: '초등교사',
    school: '이화여대',
    element: '토(土)가 두터운 늦여름의 기운',
    sajuKeywords: ['금토 안정', '따뜻한 햇살', '오래가는 인연'],
    synergy: '안정감을 주고받는 궁합이에요. 서두르지 않고 천천히, 그러나 오래 함께할 수 있는 결의 두 사람.',
    impressions: ['따뜻해요', '배려심 깊어요', '편안해요'],
    hobbies: [photo('photo-1450778869180-41d0601e046e'), photo('photo-1518717758536-85ae29035b6d'), photo('photo-1444212477490-ca407925329e'), photo('photo-1425082661705-1834bfd09dca')],
    verified: true
  }, {
    id: 'minjun',
    name: '민준',
    age: 30,
    score: 81,
    activity: '오늘',
    photo: photo('photo-1507003211169-0a1dd7228f2d'),
    sajuLine: '화토 조합, 따뜻하고 듬직한 사주',
    intro: '맛집 탐방과 캠핑을 좋아합니다',
    bio: '안녕하세요! 맛집 탐방과 캠핑을 좋아하는 솔직한 남자입니다.',
    sajuTag: '화토 상생',
    district: '용산구',
    height: 181,
    smoke: '비흡연',
    drink: '가끔',
    job: '백엔드 개발자',
    school: '한양대',
    element: '화(火)가 밝은 여름의 기운',
    sajuKeywords: ['화토 상생', '든든한 기둥', '솔직한 매력'],
    synergy: '서로의 온기를 더해주는 궁합. 표현에 솔직하고, 함께 있으면 마음이 놓이는 사이예요.',
    impressions: ['솔직해요', '리드를 잘해요', '다정해요'],
    hobbies: [photo('photo-1504280390367-361c6d9f38f4'), photo('photo-1496545672447-f699b503d270'), photo('photo-1533873984035-25970ab07461'), photo('photo-1537905569824-f89f14cceb68')],
    verified: true
  }];
  const byId = id => profiles.find(p => p.id === id);

  // 일주명·종교·성향 보강 (reference: 카멜레온 프로필 레이아웃)
  const iljus = ['을목 일주', '임수 일주', '경금 일주', '병화 일주'];
  const religions = ['종교가 없어요', '무교', '종교가 없어요', '무교'];
  profiles.forEach((p, i) => {
    p.ilju = iljus[i % iljus.length];
    p.religion = religions[i % religions.length];
  });
  const traits = [{
    icon: '../../assets/elements/fire.png',
    title: '표현력이 풍부해요',
    desc: '화(火) 기운이 강해 감정을 솔직하게 표현하고, 주변 분위기를 자연스럽게 이끌어요.'
  }, {
    icon: '🎨',
    title: '창의적인 아이디어',
    desc: '독특한 시각으로 문제를 보고, 틀을 깨는 아이디어를 즐겨요. 기획·콘텐츠에 강점이 있어요.'
  }, {
    icon: '🤝',
    title: '사교성과 리더십',
    desc: '자연스럽게 분위기를 이끌고 사람을 모아요. 모임의 중심 역할을 맡는 경우가 많아요.'
  }];
  const chats = [{
    id: 'hana',
    profileId: 'hana',
    last: '매칭됐어요! 사주 기반 대화 주제로 시작해보세요',
    time: '방금',
    unread: 0,
    isNew: true,
    messages: []
  }, {
    id: 'seoyeon',
    profileId: 'seoyeon',
    last: '지난주에 강릉 다녀왔어요. 바다 보면서 멍 때리는 거 좋아해요',
    time: '오후 2:18',
    unread: 2,
    messages: [{
      from: 'them',
      text: '두 분 모두 물이 많아요. 여행 얘기 어때요?',
      time: '오후 2:14',
      topic: true
    }, {
      from: 'me',
      text: '좋아요! 최근에 어디 다녀오셨어요?',
      time: '오후 2:15'
    }, {
      from: 'them',
      text: '지난주에 강릉 다녀왔어요. 바다 보면서 멍 때리는 거 좋아해요 🌊',
      time: '오후 2:18'
    }]
  }, {
    id: 'jihoon',
    profileId: 'jihoon',
    last: '등산 좋아하세요? 다음에 같이 가요',
    time: '어제',
    unread: 0,
    messages: [{
      from: 'them',
      text: '안녕하세요! 프로필 잘 봤어요 :)',
      time: '어제'
    }, {
      from: 'me',
      text: '반가워요~ 등산 자주 다니시나봐요',
      time: '어제'
    }, {
      from: 'them',
      text: '등산 좋아하세요? 다음에 같이 가요',
      time: '어제'
    }]
  }];
  const topics = ['두 분 모두 물이 많아요. 여행 얘기 어때요?', '이번 주 가장 맛있게 먹은 거 뭐예요?', '주말엔 보통 어떻게 보내세요?'];

  // ── 지금 접속 중 (online rail) ──
  const online = [{
    id: 'seoyeon',
    name: '서연',
    photo: photo('photo-1494790108377-be9c29b29330')
  }, {
    id: 'minjun',
    name: '민준',
    photo: photo('photo-1507003211169-0a1dd7228f2d')
  }, {
    id: 'hana',
    name: '하나',
    photo: photo('photo-1534528741775-53994a69daeb')
  }, {
    id: 'jihoon',
    name: '지훈',
    photo: photo('photo-1500648767791-00dcc994a43e')
  }, {
    id: 'sua',
    name: '수아',
    photo: photo('photo-1438761681033-6461ffad8d80')
  }, {
    id: 'yerin',
    name: '예린',
    photo: photo('photo-1544005313-94ddf0286df2')
  }, {
    id: 'doyun',
    name: '도윤',
    photo: photo('photo-1492562080023-ab3db95bfbce')
  }];

  // ── 나를 좋아한 사람 (Heart 탭) ──
  const likedMe = [{
    id: 'seoyeon',
    name: '서연',
    age: 29,
    score: 92,
    district: '마포구',
    sajuTag: '목화 상생',
    photo: photo('photo-1494790108377-be9c29b29330'),
    at: '오늘'
  }, {
    id: 'sua',
    name: '수아',
    age: 28,
    score: 90,
    district: '성동구',
    sajuTag: '수금 조화',
    photo: photo('photo-1438761681033-6461ffad8d80'),
    at: '오늘'
  }, {
    id: 'yerin',
    name: '예린',
    age: 26,
    score: 87,
    district: '송파구',
    sajuTag: '목수 상생',
    photo: photo('photo-1544005313-94ddf0286df2'),
    at: '어제'
  }, {
    id: 'hana',
    name: '하나',
    age: 27,
    score: 85,
    district: '서대문구',
    sajuTag: '금토 안정',
    photo: photo('photo-1534528741775-53994a69daeb'),
    at: '어제'
  }];
  // ── 내가 보낸 관심 ──
  const iLiked = [{
    id: 'jihoon',
    name: '지훈',
    age: 31,
    score: 88,
    district: '강남구',
    sajuTag: '수목 상생',
    photo: photo('photo-1500648767791-00dcc994a43e'),
    at: '2일 전'
  }, {
    id: 'minjun',
    name: '민준',
    age: 30,
    score: 81,
    district: '용산구',
    sajuTag: '화토 상생',
    photo: photo('photo-1507003211169-0a1dd7228f2d'),
    at: '3일 전'
  }];

  // ── 새로운 매칭 (Chat 상단 레일) ──
  const newMatches = [{
    id: 'sua',
    name: '수아',
    photo: photo('photo-1438761681033-6461ffad8d80')
  }, {
    id: 'yerin',
    name: '예린',
    photo: photo('photo-1544005313-94ddf0286df2')
  }, {
    id: 'hana',
    name: '하나',
    photo: photo('photo-1534528741775-53994a69daeb')
  }];
  const me = {
    name: '유온',
    age: 28,
    photo: photo('photo-1517841905240-472988babdf9'),
    completeness: 78,
    element: '화(火)가 밝은 여름의 기운',
    el: 'fire'
  };

  // 오행 아이콘 (목·화·토·금·수) — relative to ui_kits/yuon-app/*
  const elementIcons = {
    wood: '../../assets/elements/wood.png',
    fire: '../../assets/elements/fire.png',
    earth: '../../assets/elements/earth.png',
    metal: '../../assets/elements/metal.png',
    water: '../../assets/elements/water.png'
  };
  // 프로필별 대표 오행
  const profileEl = {
    seoyeon: 'wood',
    jihoon: 'water',
    hana: 'earth',
    minjun: 'fire'
  };
  profiles.forEach(p => {
    p.el = profileEl[p.id] || 'fire';
  });
  [...likedMe, ...iLiked].forEach(u => {
    u.el = profileEl[u.id] || (u.id === 'sua' ? 'water' : u.id === 'yerin' ? 'wood' : 'fire');
  });
  return {
    profiles,
    byId,
    chats,
    topics,
    photo,
    online,
    likedMe,
    iLiked,
    newMatches,
    me,
    traits,
    elementIcons
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yuon-app/AppData.js", error: String((e && e.message) || e) }); }

// ui_kits/yuon-app/AppScreens.jsx
try { (() => {
/* 여운 app — primary screens (Login, Home, Profile detail). Exposed on window. */
const DS = window.YuonDesignSystem_8624c6;

// ── shared screen helpers ───────────────────────────────────────
function SectionHeader({
  title,
  accent,
  sub,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      margin: '0 2px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)'
    }
  }, title, accent ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-500)'
    }
  }, accent) : null), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontSize: 13,
      color: 'var(--color-text-meta)'
    }
  }, sub) : null), action ? /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-family-base)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--color-text-tertiary)'
    }
  }, action) : null);
}

// ── Splash / Login ──────────────────────────────────────────────
function LoginScreen({
  onSignup,
  onLogin
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'radial-gradient(130% 90% at 82% 112%, rgba(168,227,225,0.55) 0%, rgba(168,227,225,0) 52%), linear-gradient(160deg, #A8E3E1 0%, #5AC7C4 42%, #2D8E8C 100%)',
      color: '#fff',
      padding: '0 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      right: -60,
      width: 240,
      height: 240,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 90,
      left: -80,
      width: 240,
      height: 240,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.14), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/yuon-symbol-white.png",
    alt: "\uC5EC\uC6B4",
    style: {
      width: 92,
      height: 92,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 27,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.32
    }
  }, "\uC9C4\uC9DC \uC0AC\uB78C\uACFC,", /*#__PURE__*/React.createElement("br", null), "\uC774\uC720 \uC788\uB294 \uB9CC\uB0A8\uC744"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      opacity: 0.92,
      lineHeight: 1.5
    }
  }, "\uC0AC\uC8FC\uB85C \uC2DC\uC791\uD558\uB294 \uC2E0\uB8B0 \uAE30\uBC18 \uB370\uC774\uD305"))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onSignup
  }, "\uD734\uB300\uD3F0 \uBC88\uD638\uB85C \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'rgba(255,255,255,0.92)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 14,
      fontWeight: 500,
      padding: 12,
      cursor: 'pointer'
    }
  }, "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC5B4\uC694")));
}

// ── 위치 기반 모드 시트 (flowchart §3) ───────────────────────────
const LOC_RANGES = [{
  key: 'gu',
  title: '같은 구',
  region: '마포구',
  desc: '같은 구 안에서 가까운 인연을 만나요',
  rings: 1
}, {
  key: 'near',
  title: '인근 지역',
  region: '서울 서북권',
  desc: '구를 넘어 인근 권역까지 넓혀요',
  rings: 2
}, {
  key: 'city',
  title: '서울 전체',
  region: '서울 전역',
  desc: '서울 어디서나 좋은 인연을 찾아요',
  rings: 3
}];
function LocationSheet({
  open,
  onClose,
  range,
  onApply
}) {
  const {
    IconButton,
    Icon,
    Button
  } = DS;
  const [sel, setSel] = React.useState(range);
  React.useEffect(() => {
    if (open) setSel(range);
  }, [open]);
  if (!open) return null;
  const cur = LOC_RANGES.find(r => r.key === sel) || LOC_RANGES[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(34,32,28,0.4)',
      zIndex: 60,
      animation: 'locfade var(--duration-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 61,
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      padding: '12px 24px 30px',
      boxShadow: '0 -8px 30px rgba(34,32,28,0.16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--color-natural-200)',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)'
    }
  }, "\uC704\uCE58 \uAE30\uBC18\uC73C\uB85C \uB9CC\uB098\uAE30"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 20
    }),
    onClick: onClose,
    ariaLabel: "\uB2EB\uAE30"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary-50)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14,
    color: "var(--color-primary-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--color-primary-700)'
    }
  }, "\uC0C1\uC138 \uC8FC\uC18C(\uB3D9\xB7\uBC88\uC9C0)\uB294 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC544\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 168,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6
    }
  }, [160, 110, 60].map((d, i) => {
    const lvl = 3 - i; // outer=3 ... inner=1
    const on = cur.rings >= lvl;
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        position: 'absolute',
        width: d,
        height: d,
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--color-primary-400)' : 'var(--color-natural-200)'}`,
        background: on ? `rgba(90,199,196,${0.05 + (3 - lvl) * 0.04})` : 'transparent',
        transition: 'all var(--duration-base) var(--ease-standard)'
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--color-primary-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 6px 16px rgba(45,142,140,0.4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 6,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-primary-700)',
      background: 'var(--color-surface-card)',
      padding: '2px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, cur.region)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      margin: '14px 0 22px'
    }
  }, LOC_RANGES.map(r => {
    const on = r.key === sel;
    return /*#__PURE__*/React.createElement("button", {
      key: r.key,
      onClick: () => setSel(r.key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left',
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${on ? 'var(--color-primary-500)' : 'var(--color-border-default)'}`,
        background: on ? 'var(--color-primary-50)' : 'var(--color-surface-card)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flexShrink: 0,
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`,
        background: on ? 'var(--color-primary-500)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#fff'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--color-text-primary)'
      }
    }, r.title, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--color-text-tertiary)'
      }
    }, "\xB7 ", r.region)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        fontSize: 13,
        color: 'var(--color-text-meta)'
      }
    }, r.desc)));
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onApply(sel)
  }, "\uC774 \uBC94\uC704\uB85C \uC778\uC5F0 \uBCF4\uAE30"), /*#__PURE__*/React.createElement("style", null, `@keyframes locfade{from{opacity:0}to{opacity:1}}`)));
}

// ── Home (오늘의 매칭) ─────────────────────────────────────────────
function HomeScreen({
  onOpenProfile
}) {
  const {
    IconButton,
    Icon,
    FortuneBanner,
    ProfileFeedCard
  } = DS;
  const data = window.YuonData;
  const [locOpen, setLocOpen] = React.useState(false);
  const [locOn, setLocOn] = React.useState(false);
  const [range, setRange] = React.useState('gu');
  const curRange = LOC_RANGES.find(r => r.key === range) || LOC_RANGES[0];
  const wd = ['일', '월', '화', '수', '목', '금', '토'];
  const d = new Date();
  const today = `${d.getMonth() + 1}월 ${d.getDate()}일 ${wd[d.getDay()]}요일`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 8px 8px 18px',
      flexShrink: 0,
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--color-text-tertiary)'
    }
  }, today), locOn ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setLocOpen(true),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 16,
    color: "var(--color-primary-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)'
    }
  }, curRange.region), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 16,
    color: "var(--color-natural-400)"
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 22,
      color: locOn ? '#fff' : undefined
    }),
    variant: locOn ? 'primary' : 'plain',
    onClick: () => setLocOpen(true),
    ariaLabel: "\uC704\uCE58"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(FortuneBanner, {
    fortune: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC124\uB808\uB294 \uB9CC\uB0A8\uC774", /*#__PURE__*/React.createElement("br", null), "\uAC00\uAE4C\uC774 \uC788\uC5B4\uC694"),
    mascot: "../../assets/mascot/yeowoong.png",
    onMore: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: locOn ? '' : '오늘의 ',
    accent: locOn ? `${curRange.region}의 인연` : '추천 인연',
    sub: locOn ? '가까운 거리순으로 보여드려요' : '사주 궁합이 높은 순으로 보여드려요'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, data.profiles.map(p => /*#__PURE__*/React.createElement(ProfileFeedCard, {
    key: p.id,
    photo: p.photo,
    name: p.name,
    age: p.age,
    score: p.score,
    activity: p.activity,
    sajuTag: p.sajuTag,
    elementIcon: data.elementIcons[p.el],
    intro: p.intro,
    verified: p.verified,
    onClick: () => onOpenProfile(p.id)
  }))))), /*#__PURE__*/React.createElement(LocationSheet, {
    open: locOpen,
    range: range,
    onClose: () => setLocOpen(false),
    onApply: r => {
      setRange(r);
      setLocOn(true);
      setLocOpen(false);
    }
  }));
}

// ── Profile detail ──────────────────────────────────────────────
function InfoRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--color-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-meta)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-text-primary)'
    }
  }, value));
}
function SectionTitle({
  children,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '26px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-title"
  }, children), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13,
      color: 'var(--color-text-meta)'
    }
  }, sub) : null);
}
function OverlayTag({
  icon,
  iconSrc,
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 30,
      padding: iconSrc ? '0 12px 0 5px' : '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.92)',
      color: tone === 'gold' ? 'var(--color-primary-800)' : 'var(--color-natural-800)',
      fontSize: 13,
      fontWeight: 600,
      boxShadow: 'var(--shadow-sm)'
    }
  }, iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), children);
}
function ProfileDetailScreen({
  profileId,
  onBack,
  onQuiet,
  onInterest,
  savedQuiet
}) {
  const {
    IconButton,
    Icon,
    Tag
  } = DS;
  const p = window.YuonData.byId(profileId);
  const me = window.YuonData.me;
  const traits = window.YuonData.traits;
  if (!p) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: 102
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 5',
      background: 'var(--color-natural-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: p.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(34,32,28,0.66), transparent 40%), linear-gradient(to bottom, rgba(34,32,28,0.28), transparent 16%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 8,
      right: 8,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevronLeft",
      color: "#fff"
    }),
    onClick: onBack,
    ariaLabel: "\uB4A4\uB85C"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "moreHorizontal",
      color: "#fff"
    }),
    ariaLabel: "\uB354\uBCF4\uAE30"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(OverlayTag, {
    iconSrc: window.YuonData.elementIcons[p.el]
  }, p.ilju), /*#__PURE__*/React.createElement(OverlayTag, {
    icon: "\u2728",
    tone: "gold"
  }, "\uD669\uAE08 \uC778\uC5F0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, p.name, ", ", p.age), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      color: 'rgba(255,255,255,0.92)',
      fontSize: 15
    }
  }, p.district))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--color-primary-600)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, "\uB2D8\uC758 \uD504\uB85C\uD544"), /*#__PURE__*/React.createElement(Icon, {
    name: "badgeCheck",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uC9C1\uC5C5",
    value: p.job
  }), /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uAC70\uC8FC\uC9C0",
    value: p.district
  }), /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uD0A4",
    value: `${p.height}cm`
  }), /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uC74C\uC8FC",
    value: p.drink === '안 함' ? '안 마셔요' : p.drink === '즐김' ? '자주 마셔요' : '가끔 마셔요'
  }), /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uD761\uC5F0",
    value: p.smoke === '비흡연' ? '비흡연자예요' : '흡연자예요'
  }), /*#__PURE__*/React.createElement(InfoRow, {
    label: "\uC885\uAD50",
    value: p.religion
  })), /*#__PURE__*/React.createElement(SectionTitle, null, "\uC790\uAE30\uC18C\uAC1C"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--color-text-body)'
    }
  }, p.bio)), /*#__PURE__*/React.createElement(SectionTitle, {
    sub: "\uC0C1\uB300\uAC00 \uC9C1\uC811 \uC124\uC815\uD55C \uD0A4\uC6CC\uB4DC\uC608\uC694."
  }, "\uCCAB\uC778\uC0C1 \uCCB4\uD06C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.impressions.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "accent"
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '30px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)'
    }
  }, "\uB2F9\uC2E0\uACFC "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-accent-500)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)'
    }
  }, "\uB2D8\uC740")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-border-default)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: me.photo,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid var(--color-surface-card)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid var(--color-surface-card)',
      marginLeft: -14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      color: 'var(--color-text-primary)'
    }
  }, p.score), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--color-text-meta)'
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text-secondary)'
    }
  }, "\uC6B0\uB9AC \uB458\uC758 \uC0AC\uC8FC \uC870\uD654"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 12,
      marginTop: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-natural-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${p.score}%`,
      borderRadius: 'var(--radius-pill)',
      background: 'linear-gradient(90deg, var(--color-accent-300), var(--color-accent-500))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: `${p.score}%`,
      transform: 'translate(-50%, -50%)',
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--color-surface-card)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 16,
    filled: true,
    color: "var(--color-accent-500)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-divider)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 14,
      lineHeight: 1.65,
      color: 'var(--color-text-secondary)'
    }
  }, p.synergy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, p.sajuKeywords.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "primary"
  }, k))))), /*#__PURE__*/React.createElement(SectionTitle, {
    sub: "\uC18C\uAC1C \uBC1B\uC740 \uBD84\uC758 \uD0C0\uACE0\uB09C \uC131\uD5A5\uC744 \uC54C\uB824\uC904\uAC8C\uC694."
  }, p.name, "\uB2D8\uC758 \uC131\uD5A5\uACFC \uC7AC\uB2A5"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-border-default)'
    }
  }, traits.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: i < traits.length - 1 ? 22 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, String(t.icon).includes('/') ? /*#__PURE__*/React.createElement("img", {
    src: t.icon,
    alt: "",
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    },
    "aria-hidden": "true"
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, t.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--color-text-secondary)'
    }
  }, t.desc))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 20,
      width: '100%',
      height: 48,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-text-secondary)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "\uB354 \uC54C\uC544\uBCF4\uAE30")), /*#__PURE__*/React.createElement(SectionTitle, null, "\uCDE8\uBBF8 \uD53C\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      paddingBottom: 8
    }
  }, (p.hobbies || []).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 14,
      overflow: 'hidden',
      background: 'var(--color-natural-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: h,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px 30px',
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onQuiet,
    style: {
      flex: 1,
      height: 56,
      border: `2px solid ${savedQuiet ? 'var(--color-accent-400)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      background: savedQuiet ? 'var(--color-accent-50)' : 'var(--color-surface-card)',
      color: savedQuiet ? 'var(--color-accent-600)' : 'var(--color-text-secondary)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    filled: savedQuiet,
    color: savedQuiet ? 'var(--color-accent-500)' : 'var(--color-natural-400)'
  }), "\uB9C8\uC74C\uC5D0 \uB2F4\uAE30"), /*#__PURE__*/React.createElement("button", {
    onClick: onInterest,
    style: {
      flex: 1,
      height: 56,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-accent-500)',
      color: '#fff',
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    filled: true,
    color: "#fff"
  }), "\uAD00\uC2EC \uD45C\uD604")));
}
Object.assign(window, {
  LoginScreen,
  HomeScreen,
  ProfileDetailScreen,
  SectionHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yuon-app/AppScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yuon-app/AppScreens2.jsx
try { (() => {
/* 여운 app — Heart, Chat list, Chat room, My page. Exposed on window. */
const DS2 = window.YuonDesignSystem_8624c6;

// ── Heart ───────────────────────────────────────────────────────
function LikeCard({
  p,
  onClick,
  locked
}) {
  const {
    Icon
  } = DS2;
  const elIcon = window.YuonData.elementIcons[p.el];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      position: 'relative',
      display: 'block',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--color-natural-200)',
      aspectRatio: '3 / 4',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: p.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: locked ? 'blur(14px)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(34,32,28,0.6), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 26,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.92)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 13,
    filled: true,
    color: "var(--color-accent-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, p.score)), locked ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    filled: true,
    color: "var(--color-accent-500)"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      color: '#fff',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, p.name, ", ", p.age), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 5,
      padding: elIcon ? '3px 8px 3px 3px' : '3px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.22)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      fontSize: 11,
      fontWeight: 600,
      color: '#fff'
    }
  }, elIcon ? /*#__PURE__*/React.createElement("img", {
    src: elIcon,
    alt: "",
    style: {
      width: 18,
      height: 18,
      borderRadius: 6,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83D\uDD25"), p.sajuTag)));
}
function HeartScreen({
  onOpenProfile
}) {
  const {
    TopAppBar,
    SegmentedTabs
  } = DS2;
  const data = window.YuonData;
  const [tab, setTab] = React.useState('saved');
  const list = tab === 'saved' ? data.iLiked : data.likedMe;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "\uD558\uD2B8"
  }), /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: [{
      key: 'saved',
      label: '마음에 담은'
    }, {
      key: 'likedMe',
      label: '나를 괜찮게 본'
    }],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      margin: '0 2px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, tab === 'saved' ? '마음에 담은 사람' : '나를 괜찮게 본 사람'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-accent-500)'
    }
  }, list.length)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--color-text-meta)',
      margin: '0 2px 16px'
    }
  }, tab === 'saved' ? '내가 하트를 누른 목록이에요. 상대에게 알림은 가지 않아요.' : '나에게 관심을 표현한 사람들이에요. 관심을 표현하면 바로 대화를 시작할 수 있어요.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, list.map(p => /*#__PURE__*/React.createElement(LikeCard, {
    key: p.id,
    p: p,
    onClick: () => onOpenProfile(p.id)
  })))));
}

// ── Chat list ───────────────────────────────────────────────────
function ChatListScreen({
  onOpenChat,
  onOpenProfile
}) {
  const {
    TopAppBar,
    Avatar,
    Icon
  } = DS2;
  const data = window.YuonData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-card)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "\uB300\uD654"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--color-text-primary)',
      padding: '0 18px 12px'
    }
  }, "\uC0C8\uB85C\uC6B4 \uB9E4\uCE6D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      padding: '0 18px 4px',
      scrollbarWidth: 'none'
    }
  }, data.newMatches.map(u => /*#__PURE__*/React.createElement("button", {
    key: u.id,
    onClick: () => onOpenProfile(u.id),
    style: {
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: u.photo,
    alt: u.name,
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--color-accent-500)',
      border: '2px solid var(--color-surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 9,
    filled: true,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      fontWeight: 500
    }
  }, u.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-divider)',
      margin: '8px 18px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 24px'
    }
  }, data.chats.map(c => {
    const p = data.byId(c.profileId);
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: () => onOpenChat(c.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 0',
        borderBottom: '1px solid var(--color-divider)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: p.photo,
      name: p.name,
      size: 56
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--color-text-primary)'
      }
    }, p.name, ", ", p.age), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-tertiary)'
      }
    }, c.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        color: c.unread > 0 ? 'var(--color-text-secondary)' : 'var(--color-text-meta)',
        fontWeight: c.unread > 0 ? 500 : 400,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.last), c.unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        minWidth: 20,
        height: 20,
        padding: '0 6px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-accent-500)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, c.unread))));
  }))));
}

// ── Sticker picker ──────────────────────────────────────────────
const STICKER_LIST = ['안녕', '윙크', '설레', '헉', '아쉬워', 'ㅋㅋㅋ', '좋아해', '쪽!', '부끄러워', '최고야!', '화이팅!', '고마워', '빼꼼', '지켜보고있다', '보고싶어', '안아줘', '기대돼', '메시지왔어', '잘자', '좋은아침', '데이트하자', '영화볼까?', '우리 만나자', '심쿵', '와우', '화났어!', '궁금해', '멋져', '우리 잘맞아', '영원히'];
const SPRITE = '../../assets/emoticons/yuon-stickers.png';
const COLS = 6,
  ROWS = 5;
function StickerSprite({
  name,
  size = 72
}) {
  const idx = STICKER_LIST.indexOf(name);
  if (idx === -1) return null;
  const col = idx % COLS,
    row = Math.floor(idx / COLS);
  const px = `${col * (100 / (COLS - 1))}%`;
  const py = `${row * (100 / (ROWS - 1))}%`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      backgroundImage: `url(${SPRITE})`,
      backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
      backgroundPosition: `${px} ${py}`,
      backgroundRepeat: 'no-repeat',
      flexShrink: 0
    }
  });
}
function StickerPicker({
  onSend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)',
      padding: '12px 8px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 4
    }
  }, STICKER_LIST.map(name => /*#__PURE__*/React.createElement("button", {
    key: name,
    onClick: () => onSend(name),
    style: {
      background: 'none',
      border: 'none',
      padding: '6px 2px',
      cursor: 'pointer',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement(StickerSprite, {
    name: name,
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      color: 'var(--color-text-meta)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: 52,
      textOverflow: 'ellipsis'
    }
  }, name)))));
}

// ── Chat room ───────────────────────────────────────────────────
function ChatRoomScreen({
  chatId,
  onBack
}) {
  const {
    TopAppBar,
    IconButton,
    Icon,
    Avatar,
    MatchScore,
    ChatBubble,
    TopicChip,
    Tag
  } = DS2;
  const data = window.YuonData;
  const chat = data.chats.find(c => c.id === chatId);
  const p = data.byId(chat.profileId);
  const [messages, setMessages] = React.useState(chat.messages);
  const [draft, setDraft] = React.useState('');
  const [panel, setPanel] = React.useState(false);
  // 첫 대화 진입 시 사주 기반 대화 주제 말풍선 자동 표시 (flowchart §7)
  const [showTopics, setShowTopics] = React.useState(!!chat.isNew || chat.messages.length === 0);
  const [showStickers, setShowStickers] = React.useState(false);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, showTopics, showStickers]);
  const send = text => {
    if (!text.trim()) return;
    setMessages(m => [...m, {
      from: 'me',
      text,
      time: '지금'
    }]);
    setDraft('');
  };
  const sendSticker = name => {
    setMessages(m => [...m, {
      from: 'me',
      sticker: name,
      time: '지금'
    }]);
    setShowStickers(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: p.photo,
      name: p.name,
      size: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600
      }
    }, p.name)),
    left: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronLeft"
      }),
      onClick: onBack,
      ariaLabel: "\uB4A4\uB85C"
    }),
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        filled: panel,
        color: panel ? 'var(--color-primary-600)' : 'var(--color-text-primary)'
      }),
      onClick: () => setPanel(v => !v),
      ariaLabel: "\uAD81\uD569 \uD328\uB110"
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 16px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      background: 'var(--color-primary-50)',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badgeCheck",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-primary-800)',
      fontWeight: 600
    }
  }, "\uAD81\uD569 ", p.score, "\uC810 \xB7 \uC0AC\uC8FC\uAC00 \uC798 \uB9DE\uB294 \uC778\uC5F0\uC774\uC5D0\uC694")), messages.map((m, i) => m.sticker ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      alignItems: m.from === 'me' ? 'flex-end' : 'flex-start',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(StickerSprite, {
    name: m.sticker,
    size: 100
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-meta)'
    }
  }, m.time)) : /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from,
    time: m.time
  }, m.text)), messages.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      textAlign: 'center',
      margin: '10px 0 2px',
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, p.name, "\uB2D8\uACFC \uB9E4\uCE6D\uB410\uC5B4\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-meta)'
    }
  }, "\uB450 \uBD84\uC758 \uC0AC\uC8FC\uB97C \uBD84\uC11D\uD574 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uB300\uD654 \uC8FC\uC81C\uB97C \uACE8\uB77C\uBD24\uC5B4\uC694. \uAC00\uBCCD\uAC8C \uC2DC\uC791\uD574\uBCF4\uC138\uC694.")), showTopics && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-meta)',
      fontWeight: 500
    }
  }, "\uC0AC\uC8FC \uAE30\uBC18 \uB300\uD654 \uC8FC\uC81C \uCD94\uCC9C"), data.topics.map((t, i) => /*#__PURE__*/React.createElement(TopicChip, {
    key: i,
    onClick: () => {
      send(t);
      setShowTopics(false);
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 12px 26px',
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "soft",
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        lineHeight: 1
      }
    }, "\uD83D\uDC3E"),
    onClick: () => {
      setShowStickers(v => !v);
      setShowTopics(false);
    },
    ariaLabel: "\uC774\uBAA8\uD2F0\uCF58"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(draft),
    placeholder: "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694",
    style: {
      flex: 1,
      height: 44,
      border: '1.5px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '0 16px',
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      outline: 'none',
      background: 'var(--color-surface-page)',
      color: 'var(--color-text-primary)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 20,
      color: "#fff"
    }),
    onClick: () => send(draft),
    ariaLabel: "\uC804\uC1A1"
  })), showStickers && /*#__PURE__*/React.createElement(StickerPicker, {
    onSend: sendSticker
  }), panel && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPanel(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(34,32,28,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '82%',
      background: 'var(--color-surface-card)',
      boxShadow: 'var(--shadow-pop)',
      padding: '52px 20px 20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: p.photo,
    name: p.name,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, p.name, ", ", p.age), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-meta)'
    }
  }, p.district, " \xB7 ", p.job))), /*#__PURE__*/React.createElement(MatchScore, {
    score: p.score,
    variant: "bar"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 4px',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--color-text-secondary)'
    }
  }, p.synergy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 8
    }
  }, p.sajuKeywords.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "primary"
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-divider)',
      margin: '4px 0 12px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-meta)',
      fontWeight: 500
    }
  }, "\uB300\uD654 \uC8FC\uC81C \uCD94\uCC9C"), data.topics.map((t, i) => /*#__PURE__*/React.createElement(TopicChip, {
    key: i,
    onClick: () => {
      setMessages(m => [...m, {
        from: 'me',
        text: t,
        time: '지금'
      }]);
      setPanel(false);
    }
  }, t)))));
}

// ── My page ─────────────────────────────────────────────────────
function MyPageScreen() {
  const {
    TopAppBar,
    Avatar,
    Badge,
    ListRow,
    Switch,
    Icon,
    IconButton
  } = DS2;
  const me = window.YuonData.me;
  const [notif, setNotif] = React.useState(true);
  const [block, setBlock] = React.useState(true);
  const r = 26,
    circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "\uB9C8\uC774",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "settings",
        size: 22
      }),
      ariaLabel: "\uC124\uC815"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 16px 0',
      padding: 18,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--color-surface-card)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: me.photo,
    name: "\uB098",
    size: 62,
    verified: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--color-text-primary)',
      letterSpacing: '-0.01em'
    }
  }, me.name, ", ", me.age), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "trust",
    size: "sm"
  }, "\uBCF8\uC778\uC778\uC99D"), /*#__PURE__*/React.createElement(Badge, {
    tone: "primary",
    size: "sm",
    icon: null
  }, "\uC140\uD53C \uC778\uC99D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 64,
      height: 64,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "64",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: "var(--color-primary-100)",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: "var(--color-primary-500)",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - me.completeness / 100)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--color-primary-700)',
      lineHeight: 1
    }
  }, me.completeness, "%")))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 16,
      width: '100%',
      height: 44,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-50)',
      color: 'var(--color-primary-800)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5
    }
  }, "\uD504\uB85C\uD544 \uC644\uC131\uD558\uACE0 \uB354 \uB9CE\uC740 \uCD94\uCC9C \uBC1B\uAE30 ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "var(--color-primary-700)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 16px 0',
      padding: 16,
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(120deg, var(--color-primary-600), var(--color-primary-400))',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 22,
    filled: true,
    color: "var(--color-primary-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.03em',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "\uB0B4 \uC0AC\uC8FC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#fff',
      marginTop: 1
    }
  }, me.element)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 20,
    color: "rgba(255,255,255,0.9)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)',
      borderBottom: '1px solid var(--color-border-default)',
      padding: '4px 20px'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "user",
    label: "\uB0B4 \uD504\uB85C\uD544",
    value: "\uD3B8\uC9D1"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "sparkles",
    label: "\uB0B4 \uC0AC\uC8FC \uB2E4\uC2DC \uBCF4\uAE30"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "sliders",
    label: "\uC774\uC0C1\uD615 \uC124\uC815"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "badgeCheck",
    label: "\uC120\uD0DD \uC778\uC99D \uBC43\uC9C0",
    value: "2\uAC1C \uC644\uB8CC"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)',
      borderBottom: '1px solid var(--color-border-default)',
      padding: '4px 20px'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "user",
    label: "\uC544\uB294 \uC0AC\uB78C \uCC28\uB2E8",
    right: /*#__PURE__*/React.createElement(Switch, {
      checked: block,
      onChange: setBlock
    }),
    chevron: false
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "bell",
    label: "\uC54C\uB9BC \uC124\uC815",
    right: /*#__PURE__*/React.createElement(Switch, {
      checked: notif,
      onChange: setNotif
    }),
    chevron: false
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "settings",
    label: "\uACC4\uC815 \uC124\uC815"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--color-surface-card)',
      borderTop: '1px solid var(--color-border-default)',
      borderBottom: '1px solid var(--color-border-default)',
      padding: '4px 20px'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    label: "\uACF5\uC9C0\uC0AC\uD56D",
    icon: "bell"
  }), /*#__PURE__*/React.createElement(ListRow, {
    label: "\uACE0\uAC1D\uC13C\uD130",
    icon: "chat"
  }), /*#__PURE__*/React.createElement(ListRow, {
    label: "\uCFE0\uD3F0 / \uC774\uC6A9\uAD8C",
    icon: "sparkles"
  }), /*#__PURE__*/React.createElement(ListRow, {
    label: "\uBC84\uC804 \uC815\uBCF4",
    icon: "settings",
    value: "v1.0.0",
    chevron: false
  }))));
}
Object.assign(window, {
  HeartScreen,
  ChatListScreen,
  ChatRoomScreen,
  MyPageScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yuon-app/AppScreens2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yuon-app/Onboarding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 여운 app — 회원가입 · 온보딩 플로우 (flowchart §2). Exposed on window. */
const ObDS = window.YuonDesignSystem_8624c6;

// ── shared shell ────────────────────────────────────────────────
function ObShell({
  step,
  total,
  title,
  sub,
  onBack,
  footer,
  children,
  scroll = true
}) {
  const {
    IconButton,
    Icon
  } = ObDS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 47,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '6px 8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevronLeft"
    }),
    onClick: onBack,
    ariaLabel: "\uB4A4\uB85C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '0 12px 4px'
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? 'var(--color-primary-500)' : 'var(--color-natural-200)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: scroll ? 'auto' : 'hidden',
      padding: '20px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--color-primary-600)',
      marginBottom: 8
    }
  }, "STEP ", step + 1, " / ", total), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.35,
      color: 'var(--color-text-primary)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--color-text-meta)'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '12px 24px 30px',
      background: 'var(--color-surface-page)'
    }
  }, footer));
}
function FieldLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, children);
}

// ── step 0: 약관 동의 ────────────────────────────────────────────
function StepTerms({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Checkbox,
    Icon
  } = ObDS;
  const items = [{
    key: 'age',
    label: '만 19세 이상입니다',
    req: true
  }, {
    key: 'tos',
    label: '서비스 이용약관 동의',
    req: true
  }, {
    key: 'privacy',
    label: '개인정보 처리방침 동의',
    req: true
  }, {
    key: 'location',
    label: '위치기반 서비스 이용약관 동의',
    req: true
  }, {
    key: 'marketing',
    label: '마케팅 정보 수신 동의 (선택)',
    req: false
  }];
  const [checks, setChecks] = React.useState({});
  const allReq = items.filter(i => i.req).every(i => checks[i.key]);
  const allOn = items.every(i => checks[i.key]);
  const toggleAll = () => {
    const v = !allOn;
    const next = {};
    items.forEach(i => next[i.key] = v);
    setChecks(next);
  };
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: /*#__PURE__*/React.createElement("span", null, "\uC5EC\uC6B4 \uC774\uC6A9\uC744 \uC704\uD574", /*#__PURE__*/React.createElement("br", null), "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694"),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !allReq,
      onClick: onNext
    }, "\uB3D9\uC758\uD558\uACE0 \uACC4\uC18D\uD558\uAE30")
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleAll,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 16px',
      borderRadius: 'var(--radius-lg)',
      border: 'none',
      background: allOn ? 'var(--color-primary-50)' : 'var(--color-surface-sunken)',
      cursor: 'pointer',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: allOn ? 'var(--color-primary-500)' : 'var(--color-natural-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, "\uC804\uCCB4 \uB3D9\uC758")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-divider)',
      margin: '4px 0 8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 4px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: !!checks[it.key],
    onChange: v => setChecks(c => ({
      ...c,
      [it.key]: v
    })),
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--color-text-body)'
      }
    }, it.req && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-primary-600)',
        fontWeight: 600
      }
    }, "[\uD544\uC218] "), it.label)
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "var(--color-natural-300)"
  })))));
}

// ── step 1: 본인인증 (휴대폰) ─────────────────────────────────────
function StepPhone({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Input
  } = ObDS;
  const [phone, setPhone] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => {
    if (!sent) return;
    setSec(180);
    const t = setInterval(() => setSec(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, [sent]);
  const mm = String(Math.floor(sec / 60)).padStart(1, '0'),
    ss = String(sec % 60).padStart(2, '0');
  const phoneOk = phone.replace(/\D/g, '').length >= 10;
  const codeOk = code.replace(/\D/g, '').length === 6;
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: /*#__PURE__*/React.createElement("span", null, "\uD734\uB300\uD3F0 \uBC88\uD638\uB85C", /*#__PURE__*/React.createElement("br", null), "\uBCF8\uC778\uC778\uC99D\uC744 \uD574\uC8FC\uC138\uC694"),
    sub: "1\uC778 1\uACC4\uC815 \uC6D0\uCE59\uC744 \uC704\uD574 \uBCF8\uC778\uC778\uC99D\uC774 \uD544\uC694\uD574\uC694. \uBC88\uD638\uB294 \uB9E4\uCE6D \uC0C1\uB300\uC5D0\uAC8C \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC544\uC694.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !sent || !codeOk,
      onClick: onNext
    }, "\uC778\uC99D \uC644\uB8CC")
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement(Input, {
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "010-0000-0000",
    inputMode: "numeric",
    suffix: /*#__PURE__*/React.createElement(Button, {
      variant: phoneOk ? 'secondary' : 'ghost',
      size: "sm",
      disabled: !phoneOk,
      onClick: () => setSent(true)
    }, sent ? '재전송' : '인증번호 받기')
  }), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC778\uC99D\uBC88\uD638"), /*#__PURE__*/React.createElement(Input, {
    value: code,
    onChange: e => setCode(e.target.value),
    placeholder: "6\uC790\uB9AC \uC785\uB825",
    inputMode: "numeric",
    help: "\uBB38\uC790\uB85C \uBC1B\uC740 \uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
    suffix: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--color-accent-500)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, mm, ":", ss)
  })));
}

// ── step 2: 사주 입력 ────────────────────────────────────────────
function StepSaju({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Input,
    Icon
  } = ObDS;
  const [cal, setCal] = React.useState('양력');
  const [unknown, setUnknown] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const ok = date.replace(/\D/g, '').length >= 8;
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: /*#__PURE__*/React.createElement("span", null, "\uC0AC\uC8FC \uC815\uBCF4\uB97C", /*#__PURE__*/React.createElement("br", null), "\uC785\uB825\uD574\uC8FC\uC138\uC694"),
    sub: "\uC0DD\uB144\uC6D4\uC77C\uACFC \uD0DC\uC5B4\uB09C \uC2DC\uAC04\uC73C\uB85C \uC0AC\uC8FC \uAD81\uD569\uC744 \uACC4\uC0B0\uD574\uC694. \uC2DC\uAC04\uC744 \uBAA8\uB974\uBA74 \uAC74\uB108\uB6F8 \uC218 \uC788\uC5B4\uC694.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !ok,
      onClick: onNext
    }, "\uB2E4\uC74C")
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC591\uB825 / \uC74C\uB825"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, ['양력', '음력'].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCal(c),
    style: {
      flex: 1,
      height: 46,
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${cal === c ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`,
      background: cal === c ? 'var(--color-primary-50)' : 'var(--color-surface-card)',
      color: cal === c ? 'var(--color-primary-700)' : 'var(--color-text-secondary)',
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, c))), /*#__PURE__*/React.createElement(FieldLabel, null, "\uC0DD\uB144\uC6D4\uC77C"), /*#__PURE__*/React.createElement(Input, {
    value: date,
    onChange: e => setDate(e.target.value),
    placeholder: "YYYY.MM.DD",
    inputMode: "numeric",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement(FieldLabel, null, "\uD0DC\uC5B4\uB09C \uC2DC\uAC04"), /*#__PURE__*/React.createElement(Input, {
    value: time,
    onChange: e => setTime(e.target.value),
    placeholder: "\uC608: \uC624\uD6C4 3\uC2DC 30\uBD84",
    disabled: unknown
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setUnknown(u => !u),
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      padding: 4,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.5px solid ${unknown ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`,
      background: unknown ? 'var(--color-primary-500)' : 'transparent'
    }
  }, unknown && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, "\uD0DC\uC5B4\uB09C \uC2DC\uAC04\uC744 \uBAB0\uB77C\uC694")));
}

// ── step 3: 프로필 작성 ──────────────────────────────────────────
function StepProfile({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Input
  } = ObDS;
  const [nick, setNick] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [job, setJob] = React.useState('');
  const [area, setArea] = React.useState('');
  const [bio, setBio] = React.useState('');
  const hobbyOpts = ['카페', '여행', '운동', '영화', '음악', '독서', '요리', '전시', '등산', '반려동물', '게임', '와인'];
  const [hobbies, setHobbies] = React.useState([]);
  const toggleHobby = h => setHobbies(s => s.includes(h) ? s.filter(x => x !== h) : s.length < 5 ? [...s, h] : s);
  const ok = nick.trim() && area.trim() && hobbies.length > 0;
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: "\uD504\uB85C\uD544\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694",
    sub: "\uB9E4\uCE6D \uC0C1\uB300\uC5D0\uAC8C \uBCF4\uC5EC\uC9C8 \uC815\uBCF4\uC608\uC694. \uC194\uC9C1\uD558\uAC8C \uC801\uC744\uC218\uB85D \uC88B\uC740 \uC778\uC5F0\uC744 \uB9CC\uB0A0 \uD655\uB960\uC774 \uB192\uC544\uC838\uC694.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !ok,
      onClick: onNext
    }, "\uB2E4\uC74C")
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uB2C9\uB124\uC784"), /*#__PURE__*/React.createElement(Input, {
    value: nick,
    onChange: e => setNick(e.target.value),
    placeholder: "2~10\uC790",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uD0A4"), /*#__PURE__*/React.createElement(Input, {
    value: height,
    onChange: e => setHeight(e.target.value),
    placeholder: "cm",
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.4
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC9C1\uC5C5"), /*#__PURE__*/React.createElement(Input, {
    value: job,
    onChange: e => setJob(e.target.value),
    placeholder: "\uC608: \uB514\uC790\uC774\uB108"
  }))), /*#__PURE__*/React.createElement(FieldLabel, null, "\uAC70\uC8FC\uC9C0"), /*#__PURE__*/React.createElement(Input, {
    value: area,
    onChange: e => setArea(e.target.value),
    placeholder: "\uC608: \uC11C\uC6B8 \uB9C8\uD3EC\uAD6C",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(FieldLabel, null, "\uC790\uAE30\uC18C\uAC1C"), /*#__PURE__*/React.createElement(Input, {
    value: bio,
    onChange: e => setBio(e.target.value),
    placeholder: "\uB098\uB97C \uD55C\uB450 \uBB38\uC7A5\uC73C\uB85C \uC18C\uAC1C\uD574\uC8FC\uC138\uC694",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(FieldLabel, null, "\uCDE8\uBBF8 \xB7 \uAD00\uC2EC\uC0AC ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-tertiary)',
      fontWeight: 500
    }
  }, "(", hobbies.length, "/5)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, hobbyOpts.map(h => {
    const on = hobbies.includes(h);
    return /*#__PURE__*/React.createElement("button", {
      key: h,
      onClick: () => toggleHobby(h),
      style: {
        height: 38,
        padding: '0 16px',
        borderRadius: 'var(--radius-pill)',
        border: `1.5px solid ${on ? 'var(--color-accent-400)' : 'var(--color-border-strong)'}`,
        background: on ? 'var(--color-accent-50)' : 'var(--color-surface-card)',
        color: on ? 'var(--color-accent-600)' : 'var(--color-text-secondary)',
        fontFamily: 'var(--font-family-base)',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        cursor: 'pointer'
      }
    }, h);
  })));
}

// ── step 4: 프로필 사진 등록 ─────────────────────────────────────
function StepPhoto({
  onNext,
  onBack,
  step,
  total,
  photos,
  setPhotos
}) {
  const {
    Button,
    Icon
  } = ObDS;
  const pool = window.YuonData.profiles.map(p => p.photo);
  const add = i => setPhotos(s => {
    if (s[i]) {
      const n = [...s];
      n[i] = null;
      return n;
    }
    const used = s.filter(Boolean);
    const next = pool.find(u => !used.includes(u)) || pool[0];
    const n = [...s];
    n[i] = next;
    return n;
  });
  const count = photos.filter(Boolean).length;
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694",
    sub: "\uC5BC\uAD74\uC774 \uC798 \uBCF4\uC774\uB294 \uC0AC\uC9C4\uC77C\uC218\uB85D \uB9E4\uCE6D\uB960\uC774 \uB192\uC544\uC694. 1\uC7A5 \uC774\uC0C1 \uB4F1\uB85D\uD558\uBA74 AI\uAC00 \uC790\uB3D9\uC73C\uB85C \uC2EC\uC0AC\uD574\uC694.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: count < 1,
      onClick: onNext
    }, count, "\uC7A5 \uB4F1\uB85D \xB7 AI \uC2EC\uC0AC \uC2DC\uC791")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10
    }
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => add(i),
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      borderRadius: 'var(--radius-lg)',
      border: photos[i] ? 'none' : '1.5px dashed var(--color-border-strong)',
      background: photos[i] ? 'var(--color-natural-200)' : 'var(--color-surface-sunken)',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: 0
    }
  }, photos[i] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: photos[i],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'rgba(34,32,28,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13,
    color: "#fff"
  })), i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 6,
      left: 6,
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary-500)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uB300\uD45C")) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 6,
      color: 'var(--color-natural-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22,
    color: "var(--color-natural-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, i === 0 ? '대표 사진' : '추가'))))));
}

// ── step 5: AI 사진 심사 ─────────────────────────────────────────
function StepReview({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Icon
  } = ObDS;
  const [phase, setPhase] = React.useState('checking'); // checking | pass
  const checks = ['AI 생성 이미지 검사', '동물 · 사물 사진 검사', '부적절 콘텐츠 검사', '얼굴 인식 확인'];
  const [done, setDone] = React.useState(0);
  React.useEffect(() => {
    if (done < checks.length) {
      const t = setTimeout(() => setDone(d => d + 1), 650);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('pass'), 500);
    return () => clearTimeout(t);
  }, [done]);
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: phase === 'pass' ? '심사를 통과했어요!' : 'AI가 사진을 심사하고 있어요',
    sub: phase === 'pass' ? '안심하고 진짜 사람을 만날 수 있도록, 모든 사진은 AI 심사를 거쳐요.' : '진짜 사람만 만날 수 있도록 등록된 사진을 확인하고 있어요. 잠시만 기다려주세요.',
    footer: phase === 'pass' ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onNext
    }, "\uB2E4\uC74C") : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: phase === 'pass' ? 'var(--color-primary-50)' : 'var(--color-surface-sunken)',
      marginBottom: 28
    }
  }, phase === 'pass' ? /*#__PURE__*/React.createElement(Icon, {
    name: "badgeCheck",
    size: 52
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '4px solid var(--color-natural-200)',
      borderTopColor: 'var(--color-primary-500)',
      animation: 'obspin 0.8s linear infinite'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, checks.map((c, i) => {
    const ok = i < done || phase === 'pass';
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-border-default)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: ok ? 'var(--color-primary-500)' : 'var(--color-natural-200)'
      }
    }, ok ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "#fff"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--color-natural-400)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: ok ? 'var(--color-text-body)' : 'var(--color-text-tertiary)',
        fontWeight: ok ? 600 : 500
      }
    }, c));
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes obspin { to { transform: rotate(360deg); } }`));
}

// ── step 6: 선택 인증 뱃지 ───────────────────────────────────────
function StepVerify({
  onNext,
  onBack,
  step,
  total
}) {
  const {
    Button,
    Icon
  } = ObDS;
  const [got, setGot] = React.useState({});
  const badges = [{
    key: 'selfie',
    icon: 'camera',
    title: '셀피 인증',
    desc: '실시간 셀피로 본인 사진임을 인증해요',
    tone: 'primary'
  }, {
    key: 'work',
    icon: 'badgeCheck',
    title: '직장 · 학교 인증',
    desc: '이메일 또는 재직증명서로 인증해요',
    tone: 'accent'
  }];
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: /*#__PURE__*/React.createElement("span", null, "\uC778\uC99D \uBC43\uC9C0\uB85C", /*#__PURE__*/React.createElement("br", null), "\uC2E0\uB8B0\uB97C \uB354\uD574\uBCF4\uC138\uC694"),
    sub: "\uC120\uD0DD \uC0AC\uD56D\uC774\uC5D0\uC694. \uC778\uC99D \uBC43\uC9C0\uAC00 \uC788\uC73C\uBA74 \uB9E4\uCE6D \uC0C1\uB300\uC5D0\uAC8C \uB354 \uB192\uC740 \uC2E0\uB8B0\uB97C \uC904 \uC218 \uC788\uC5B4\uC694.",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onNext
    }, "\uB2E4\uC74C"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      fullWidth: true,
      onClick: onNext
    }, "\uB098\uC911\uC5D0 \uD560\uAC8C\uC694"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, badges.map(b => {
    const on = got[b.key];
    return /*#__PURE__*/React.createElement("div", {
      key: b.key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: 16,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--color-surface-card)',
        border: `1px solid ${on ? 'var(--color-primary-300)' : 'var(--color-border-default)'}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: b.tone === 'accent' ? 'var(--color-accent-50)' : 'var(--color-primary-50)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: b.icon,
      size: 24,
      color: b.tone === 'accent' ? 'var(--color-accent-500)' : 'var(--color-primary-600)'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--color-text-primary)'
      }
    }, b.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-meta)',
        marginTop: 2
      }
    }, b.desc)), /*#__PURE__*/React.createElement(Button, {
      variant: on ? 'secondary' : 'primary',
      size: "sm",
      disabled: on,
      onClick: () => setGot(g => ({
        ...g,
        [b.key]: true
      }))
    }, on ? '완료' : '인증'));
  })));
}

// ── step 7: 프로필 미리보기 ──────────────────────────────────────
function StepPreview({
  onNext,
  onBack,
  step,
  total,
  photos
}) {
  const {
    Button,
    Icon
  } = ObDS;
  const me = window.YuonData.me;
  const hero = photos.find(Boolean) || me.photo;
  return /*#__PURE__*/React.createElement(ObShell, {
    step: step,
    total: total,
    onBack: onBack,
    title: "\uC774\uB807\uAC8C \uBCF4\uC5EC\uC9C8 \uAC70\uC608\uC694",
    scroll: true,
    sub: "\uB9E4\uCE6D \uC0C1\uB300\uC5D0\uAC8C \uBCF4\uC5EC\uC9C0\uB294 \uB0B4 \uD504\uB85C\uD544 \uBBF8\uB9AC\uBCF4\uAE30\uC608\uC694. \uC5B8\uC81C\uB4E0 \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uC218\uC815\uD560 \uC218 \uC788\uC5B4\uC694.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      onClick: onNext,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "heart",
        size: 19,
        filled: true,
        color: "#fff"
      })
    }, "\uC5EC\uC6B4 \uC2DC\uC791\uD558\uAE30")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--color-surface-card)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: 'var(--color-natural-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: hero,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(34,32,28,0.6), transparent 42%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.92)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--color-primary-700)',
      marginBottom: 10
    }
  }, "\uD83D\uDD25 \uC744\uBAA9 \uC77C\uC8FC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badgeCheck",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 700
    }
  }, "\uB098\uC758 \uB2C9\uB124\uC784, 29")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, ['카페', '여행', '전시'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-accent-50)',
      color: 'var(--color-accent-600)',
      fontSize: 13,
      fontWeight: 600
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--color-text-body)'
    }
  }, "\uC870\uC6A9\uD55C \uCE74\uD398\uC640 \uD55C\uAC15 \uC0B0\uCC45\uC744 \uC88B\uC544\uD574\uC694. \uBE44\uC2B7\uD55C \uACB0\uC758 \uC0AC\uB78C\uACFC \uCC9C\uCC9C\uD788 \uC54C\uC544\uAC00\uACE0 \uC2F6\uC5B4\uC694."))));
}

// ── flow controller ──────────────────────────────────────────────
function OnboardingFlow({
  onComplete,
  onExit
}) {
  const TOTAL = 8;
  const [step, setStep] = React.useState(0);
  const [photos, setPhotos] = React.useState([null, null, null, null, null, null]);
  const next = () => setStep(s => s < TOTAL - 1 ? s + 1 : s);
  const back = () => step === 0 ? onExit() : setStep(s => s - 1);
  const common = {
    step,
    total: TOTAL,
    onBack: back,
    onNext: next
  };
  switch (step) {
    case 0:
      return /*#__PURE__*/React.createElement(StepTerms, common);
    case 1:
      return /*#__PURE__*/React.createElement(StepPhone, common);
    case 2:
      return /*#__PURE__*/React.createElement(StepSaju, common);
    case 3:
      return /*#__PURE__*/React.createElement(StepProfile, common);
    case 4:
      return /*#__PURE__*/React.createElement(StepPhoto, _extends({}, common, {
        photos: photos,
        setPhotos: setPhotos
      }));
    case 5:
      return /*#__PURE__*/React.createElement(StepReview, common);
    case 6:
      return /*#__PURE__*/React.createElement(StepVerify, common);
    case 7:
      return /*#__PURE__*/React.createElement(StepPreview, _extends({}, common, {
        photos: photos,
        onNext: onComplete
      }));
    default:
      return null;
  }
}
Object.assign(window, {
  OnboardingFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yuon-app/Onboarding.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FortuneBanner = __ds_scope.FortuneBanner;

__ds_ns.HeartButton = __ds_scope.HeartButton;

__ds_ns.MatchScore = __ds_scope.MatchScore;

__ds_ns.ProfileFeedCard = __ds_scope.ProfileFeedCard;

__ds_ns.ScoreBanner = __ds_scope.ScoreBanner;

__ds_ns.TopicChip = __ds_scope.TopicChip;

__ds_ns.STICKER_NAMES = __ds_scope.STICKER_NAMES;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.BottomTabBar = __ds_scope.BottomTabBar;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

})();
