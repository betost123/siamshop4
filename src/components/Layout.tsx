import * as React from "react";
import { styled } from "styled-components";
import { color, radius } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Footer } from "./Footer";

const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 100;
  padding: 0.75rem 1.25rem;
  background: ${color.plum};
  border-radius: ${radius.pill};
  color: ${color.white};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 150ms ease;

  &:focus-visible {
    top: 1rem;
    color: ${color.white};
  }
`;

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <SkipLink href="#innehall">Hoppa till innehållet</SkipLink>
    <Header />
    <main id="innehall">{children}</main>
    <Footer />
  </>
);
