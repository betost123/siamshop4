import * as React from "react";
import { styled } from "styled-components";
import { color, font, radius } from "../theme";
import { media } from "../utils";
import { shop } from "../siteData";
import { LogoLockup } from "./Logo";
import { Container } from "./ui";
import { FacebookIcon } from "./icons";

const Wrap = styled.footer`
  padding-block: clamp(3rem, 2rem + 4vw, 4.5rem) 2rem;
  background: ${color.ink};
  color: rgba(255, 255, 255, 0.72);
`;

const Top = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: minmax(0, 1fr);

  ${media.md} {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 3rem;
  }
`;

const Brand = styled.div`
  /* The wordmark inherits its colour from the lockup, so lighten it here. */
  span {
    color: ${color.petal};
  }

  p {
    margin-top: 1rem;
    max-width: 34ch;
    font-size: 0.9375rem;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.62);
  }
`;

const ColTitle = styled.h3`
  margin-bottom: 0.85rem;
  font-family: ${font.body};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${color.orchidSoft};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.9375rem;
  line-height: 1.9;

  a {
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;

    &:hover {
      color: ${color.white};
      text-decoration: underline;
    }
  }
`;

const HoursRow = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 22rem;

  span:last-child {
    color: ${color.white};
    font-variant-numeric: tabular-nums;
  }
`;

const Social = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: ${radius.pill};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${color.white};
  text-decoration: none;
  transition: background-color 150ms ease, border-color 150ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    color: ${color.white};
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: space-between;
  margin-top: clamp(2.5rem, 2rem + 2vw, 3.5rem);
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
`;

const Address = styled.address`
  font-style: normal;
`;

export const Footer: React.FC = () => (
  <Wrap>
    <Container>
      <Top>
        <Brand>
          <LogoLockup size={40} />
          <p>{shop.description}</p>
          <Social href={shop.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={16} />
            Följ oss på Facebook
          </Social>
        </Brand>

        <div>
          <ColTitle>Kontakt</ColTitle>
          <List>
            <li>
              <Address>
                {shop.street}
                <br />
                {shop.postalCode} {shop.city}
              </Address>
            </li>
            <li>
              <a href={shop.phone.href}>{shop.phone.display}</a>
            </li>
            <li>
              <a href={`mailto:${shop.email}`}>{shop.email}</a>
            </li>
          </List>
        </div>

        <div>
          <ColTitle>Öppettider</ColTitle>
          <List>
            {shop.hours.map((h) => (
              <HoursRow key={h.days}>
                <span>{h.days}</span>
                <span>{h.time}</span>
              </HoursRow>
            ))}
          </List>
        </div>
      </Top>

      <Bottom>
        <span>
          © {new Date().getFullYear()} {shop.name}
        </span>
        <span>
          {shop.street}, {shop.city}
        </span>
      </Bottom>
    </Container>
  </Wrap>
);
