import * as React from "react";
import { Link } from "gatsby";
import { styled } from "styled-components";
import { color, font, radius, shadow } from "../theme";
import { media } from "../utils";
import { shop } from "../siteData";
import { LogoLockup } from "./Logo";
import { PhoneIcon } from "./icons";
import { Container } from "./ui";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 250, 250, 0.85);
  backdrop-filter: saturate(160%) blur(12px);
  box-shadow: ${shadow.header};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 4.5rem;

  ${media.md} {
    height: 5.25rem;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  border-radius: ${radius.sm};
`;

const Nav = styled.nav`
  display: none;

  ${media.nav} {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  font-family: ${font.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${color.body};
  text-decoration: none;
  padding-block: 0.25rem;
  border-bottom: 2px solid transparent;
  transition: color 150ms ease, border-color 150ms ease;

  &:hover {
    color: ${color.plum};
    border-bottom-color: ${color.orchidSoft};
  }
`;

const CallLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border: 1px solid ${color.line};
  border-radius: ${radius.pill};
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${color.plum};
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 150ms ease, border-color 150ms ease;

  &:hover {
    background: ${color.white};
    border-color: ${color.plum};
  }

  span {
    display: none;

    ${media.xs} {
      display: inline;
    }
  }
`;

const links = [
  { to: "/#om-oss", label: "Om oss" },
  { to: "/#hitta-till-oss", label: "Hitta till oss" },
  { to: "/#recept", label: "Favoritrecept" },
];

export const Header: React.FC = () => (
  <Bar>
    <Container>
      <Inner>
        <Brand to="/" aria-label={`${shop.name} – till startsidan`}>
          <LogoLockup size={38} />
        </Brand>

        <Nav aria-label="Huvudmeny">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </Nav>

        <CallLink
          href={shop.phone.href}
          aria-label={`Ring ${shop.name} på ${shop.phone.display}`}
        >
          <PhoneIcon size={17} />
          <span>{shop.phone.display}</span>
        </CallLink>
      </Inner>
    </Container>
  </Bar>
);
