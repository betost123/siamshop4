import { createGlobalStyle } from "styled-components";
import { color, displayWonk, font } from "../theme";
import { media } from "../utils";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  ${media.motionSafe} {
    html {
      scroll-behavior: smooth;
    }
  }

  /* Keep anchored sections clear of the sticky header. */
  [id] {
    scroll-margin-top: 6.5rem;
  }

  body {
    margin: 0;
    background: ${color.cream};
    color: ${color.body};
    font-family: ${font.body};
    font-size: 1rem;
    line-height: 1.7;
    font-feature-settings: "kern", "liga", "calt";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-family: ${font.display};
    ${displayWonk}
    color: ${color.plum};
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }

  h1 { font-size: clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem); }
  h2 { font-size: clamp(1.75rem, 1.25rem + 2.1vw, 2.6rem); }
  h3 { font-size: 1.125rem; letter-spacing: 0; }

  p {
    margin: 0 0 1.15em;
    text-wrap: pretty;
  }

  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${color.orchid};
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
    transition: color 150ms ease;
  }

  a:hover {
    color: ${color.orchidDeep};
  }

  :focus-visible {
    outline: 2px solid ${color.orchid};
    outline-offset: 3px;
    border-radius: 4px;
  }

  img {
    max-width: 100%;
    /* Without this the width/height attributes win over aspect-ratio. */
    height: auto;
  }

  ::selection {
    background: ${color.petal};
    color: ${color.ink};
  }
`;
