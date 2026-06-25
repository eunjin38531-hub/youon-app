import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * 여운 Avatar — circular profile image with optional 본인인증 ring + check.
 * Falls back to initials on a warm neutral when no src.
 */
export function Avatar({
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
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        width: size,
        height: size,
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
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
          boxShadow: (ring || verified) ? '0 0 0 2px var(--color-surface-card), 0 0 0 4px var(--color-primary-400)' : 'none',
        }}
      >
        {src
          ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : initials}
      </span>
      {verified && (
        <span
          style={{
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
            boxShadow: '0 0 0 2px var(--color-surface-card)',
          }}
        >
          <Icon name="check" size={Math.round(badgeSize * 0.66)} color="#fff" strokeWidth={3} />
        </span>
      )}
    </span>
  );
}
