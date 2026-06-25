import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Used for initials fallback when no src. */
  name?: string;
  /** Diameter in px. Default 48. */
  size?: number;
  /** Show the teal 본인인증 check badge. */
  verified?: boolean;
  /** Show the teal ring without a check. */
  ring?: boolean;
}

/** Circular profile image with optional 본인인증 verification ring + check. */
export function Avatar(props: AvatarProps): JSX.Element;
