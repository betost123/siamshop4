/**
 * Design tokens for the Siam Shop site.
 *
 * The palette is anchored in the deep aubergine purple of the brand and
 * accented with the magenta/orchid tones taken straight out of the logo mark.
 */
export const color = {
  /* Purples — the brand spine */
  ink: "#2A0A2C",
  plum: "#541056",
  purple: "#7B1C80",
  purpleSoft: "#A038A3",

  /* Orchid accents, sampled from the logo */
  orchid: "#AB2C69",
  orchidDeep: "#841D41",
  orchidSoft: "#F270A6",
  petal: "#FFC7E2",

  /* Surfaces */
  cream: "#FBFAFA",
  blush: "#FDF5FA",
  lilac: "#F5EDF6",
  white: "#FFFFFF",

  /* Text + lines */
  body: "#463046",
  muted: "#6E5A70",
  line: "rgba(84, 16, 86, 0.14)",
  lineSoft: "rgba(84, 16, 86, 0.08)",
} as const;

export const font = {
  display: `"Fraunces", "Iowan Old Style", Georgia, "Times New Roman", serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
} as const;

/** Fraunces variable-font tweaks: a little softer, a little wonky. */
export const displayWonk = `font-variation-settings: "SOFT" 24, "WONK" 1;`;

export const radius = {
  sm: "10px",
  md: "16px",
  lg: "24px",
  pill: "999px",
} as const;

export const shadow = {
  /* Low, wide and tinted — replaces the old hard 12px offset drop shadows. */
  card: "0 1px 2px rgba(42, 10, 44, 0.04), 0 8px 24px -12px rgba(42, 10, 44, 0.18)",
  lift: "0 2px 6px rgba(42, 10, 44, 0.06), 0 20px 44px -20px rgba(42, 10, 44, 0.30)",
  header: "0 1px 0 rgba(84, 16, 86, 0.08)",
} as const;

/** Max width of the readable page column, plus its gutter. */
export const layout = {
  maxWidth: "1140px",
  gutter: "clamp(1.25rem, 5vw, 2.5rem)",
} as const;
