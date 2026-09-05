export const breakpoint = {
  /** Enough room to spell out the phone number in the header. */
  xs: 420,
  sm: 600,
  /** Enough room for the full nav next to the logo and phone button. */
  nav: 820,
  md: 900,
  lg: 1140,
} as const;

/** Mobile-first media queries. `below*` variants are for the rare override. */
export const media = {
  xs: `@media (min-width: ${breakpoint.xs}px)`,
  nav: `@media (min-width: ${breakpoint.nav}px)`,
  sm: `@media (min-width: ${breakpoint.sm}px)`,
  md: `@media (min-width: ${breakpoint.md}px)`,
  lg: `@media (min-width: ${breakpoint.lg}px)`,
  belowSm: `@media (max-width: ${breakpoint.sm - 1}px)`,
  belowMd: `@media (max-width: ${breakpoint.md - 1}px)`,
  motionSafe: `@media (prefers-reduced-motion: no-preference)`,
} as const;
