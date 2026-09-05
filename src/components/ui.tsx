import { styled, css } from "styled-components";
import { color, displayWonk, font, layout, radius, shadow } from "../theme";
import { media } from "../utils";

export const Container = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding-inline: ${layout.gutter};
`;

export const Section = styled.section<{ $tint?: "cream" | "blush" | "lilac" }>`
  padding-block: clamp(3.5rem, 2rem + 7vw, 7rem);
  background: ${(p) =>
    p.$tint === "blush"
      ? color.blush
      : p.$tint === "lilac"
      ? color.lilac
      : "transparent"};
`;

/** Small uppercase kicker above a heading. */
export const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${color.orchid};
`;

export const Lead = styled.p`
  font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
  line-height: 1.65;
  color: ${color.body};
`;

/** A short accent rule used under section headings. */
export const Rule = styled.span`
  display: block;
  width: 64px;
  height: 3px;
  margin-top: 1.25rem;
  border-radius: ${radius.pill};
  background: linear-gradient(90deg, ${color.plum}, ${color.orchidSoft});
`;

export const SectionHeader = styled.header<{ $center?: boolean }>`
  max-width: 46ch;
  margin-bottom: clamp(2rem, 1rem + 3vw, 3.25rem);

  ${(p) =>
    p.$center &&
    css`
      margin-inline: auto;
      text-align: center;

      ${Rule} {
        margin-inline: auto;
      }
    `}
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8125rem 1.5rem;
  border-radius: ${radius.pill};
  font-family: ${font.body};
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease,
    border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;

  &:active {
    transform: translateY(1px);
  }
`;

export const Button = styled.a`
  ${buttonBase}
  background: ${color.plum};
  border: 1px solid ${color.plum};
  color: ${color.white};
  box-shadow: ${shadow.card};

  &:hover {
    background: ${color.ink};
    border-color: ${color.ink};
    color: ${color.white};
  }
`;

export const ButtonGhost = styled.a`
  ${buttonBase}
  background: transparent;
  border: 1px solid ${color.line};
  color: ${color.plum};

  &:hover {
    background: ${color.white};
    border-color: ${color.plum};
    color: ${color.plum};
  }
`;

export const Card = styled.div`
  padding: clamp(1.5rem, 1rem + 1.5vw, 2rem);
  background: ${color.white};
  border: 1px solid ${color.lineSoft};
  border-radius: ${radius.lg};
  box-shadow: ${shadow.card};
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-family: ${font.display};
  ${displayWonk}
  font-size: 1.1875rem;
  color: ${color.plum};
`;

/** Responsive auto-fitting grid. */
export const Grid = styled.div<{ $min?: string; $gap?: string }>`
  display: grid;
  gap: ${(p) => p.$gap ?? "clamp(1rem, 0.5rem + 1.5vw, 1.75rem)"};
  /* minmax(0, …) keeps images from forcing tracks to their intrinsic width. */
  grid-template-columns: minmax(0, 1fr);

  ${media.sm} {
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(${(p) => p.$min ?? "240px"}, 100%), 1fr)
    );
  }
`;

/** Rounded, softly framed photo. */
export const Figure = styled.figure<{ $ratio?: string }>`
  position: relative;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border-radius: ${radius.lg};
  background: ${color.lilac};
  box-shadow: ${shadow.lift};

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: ${(p) => p.$ratio ?? "4 / 3"};
    object-fit: cover;
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
