import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { styled } from "styled-components";

import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import {
  Button,
  ButtonGhost,
  Card,
  CardTitle,
  Container,
  Eyebrow,
  Figure,
  Grid,
  Lead,
  Rule,
  Section,
  SectionHeader,
} from "../components/ui";
import {
  ArrowIcon,
  ClockIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../components/icons";
import { color, font, radius, shadow } from "../theme";
import { media } from "../utils";
import { shop } from "../siteData";
import { photos } from "../images";

/* ------------------------------------------------------------------ hero */

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding-block: clamp(3rem, 1.5rem + 7vw, 6.5rem);
  background:
    radial-gradient(
      120% 90% at 85% 0%,
      ${color.blush} 0%,
      rgba(253, 245, 250, 0) 60%
    ),
    ${color.cream};
`;

const HeroGrid = styled(Container)`
  display: grid;
  gap: clamp(2.5rem, 1.5rem + 4vw, 4rem);
  grid-template-columns: minmax(0, 1fr);
  align-items: center;

  ${media.md} {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const Badge = styled.p`
  position: absolute;
  left: clamp(0.75rem, 3%, 1.5rem);
  bottom: clamp(0.75rem, 3%, 1.5rem);
  max-width: 18rem;
  margin: 0;
  padding: 0.85rem 1.15rem;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  border-radius: ${radius.md};
  box-shadow: ${shadow.card};
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${color.plum};

  strong {
    display: block;
    font-family: ${font.display};
    font-size: 1rem;
    font-weight: 600;
  }
`;

/* ------------------------------------------------------------- about */

const Prose = styled.div`
  display: grid;
  gap: clamp(1rem, 0.5rem + 2vw, 2.5rem);
  grid-template-columns: minmax(0, 1fr);

  ${media.md} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  p {
    margin: 0;
  }
`;

const FeatureGrid = styled(Grid)`
  margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
`;

const FeatureCard = styled(Card)`
  p {
    font-size: 0.9375rem;
    color: ${color.muted};
  }
`;

/* ------------------------------------------------------- contact cards */

const InfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1rem;
  border-radius: ${radius.pill};
  background: ${color.blush};
  color: ${color.orchid};
`;

const Address = styled.address`
  margin: 0;
  font-style: normal;
  line-height: 1.8;
`;

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    line-height: 2;
    color: ${color.muted};
  }

  a {
    color: ${color.body};
    text-decoration: none;

    &:hover {
      color: ${color.orchid};
      text-decoration: underline;
    }
  }
`;

const HoursList = styled.dl`
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 0.4rem;
    border-bottom: 1px dashed ${color.lineSoft};
  }

  div:last-of-type {
    border-bottom: 0;
  }

  dt {
    color: ${color.muted};
  }

  dd {
    margin: 0;
    font-weight: 600;
    color: ${color.plum};
    font-variant-numeric: tabular-nums;
  }
`;

const Note = styled.p`
  margin-top: 1rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${color.muted};
`;

const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${color.orchid};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* ----------------------------------------------------------- recipes */

const RecipeCard = styled.figure`
  min-width: 0;
  margin: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: ${radius.lg};
    background: ${color.white};
    box-shadow: ${shadow.card};
    transition:
      transform 300ms ease,
      box-shadow 300ms ease;
  }

  figcaption {
    margin-top: 1rem;
    font-family: ${font.display};
    font-size: 1.0625rem;
    font-weight: 600;
    line-height: 1.35;
    color: ${color.plum};
  }

  ${media.motionSafe} {
    &:hover img {
      transform: translateY(-4px);
      box-shadow: ${shadow.lift};
    }
  }
`;

const CenteredActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: clamp(2.5rem, 2rem + 2vw, 3.5rem);
`;

/* -------------------------------------------------------------- page */

const features = [
  {
    title: "Färskt varje tisdag",
    text: "Grönsaker och örter flygs in direkt från Thailand – varje tisdag fylls hyllorna på.",
  },
  {
    title: "Brett sortiment",
    text: "Exotiska kryddor, frukter och grönsaker för det thailändska och asiatiska köket.",
  },
  {
    title: "Tips och råd",
    text: "Fråga oss gärna om vilka kryddor som hör ihop – vi lagar maten själva.",
  },
];

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero>
      <HeroGrid>
        <div>
          <Eyebrow>
            {shop.street} · {shop.city}
          </Eyebrow>
          <h1>{shop.tagline}</h1>
          <Lead style={{ marginTop: "1.5rem" }}>
            Vår affärsidé innebär att vi vill erbjuda ett brett sortiment samt
            ge tips och råd om matlagning. Vi har specialiserat oss på thaimat.
          </Lead>
          <HeroActions>
            <Button href="#hitta-till-oss">
              Hitta till oss
              <ArrowIcon size={16} />
            </Button>
            <ButtonGhost href={shop.phone.href}>
              <PhoneIcon size={17} />
              {shop.phone.display}
            </ButtonGhost>
          </HeroActions>
        </div>

        <Figure $ratio="5 / 4">
          <img
            src={photos.hero.src}
            srcSet={photos.hero.srcSet}
            sizes="(min-width: 900px) 45vw, 100vw"
            alt={photos.hero.alt}
            width={1000}
            height={800}
            loading="eager"
            decoding="async"
          />
          <Badge>
            <strong>Direkt från Thailand</strong>
            Färska grönsaker och örter kommer in varje vecka.
          </Badge>
        </Figure>
      </HeroGrid>
    </Hero>

    <Section id="om-oss" $tint="blush">
      <Container>
        <SectionHeader>
          <Eyebrow>Om butiken</Eyebrow>
          <h2>Ett brett sortiment – och råd på köpet</h2>
          <Rule />
        </SectionHeader>

        <Prose>
          <p>
            Färska grönsaker kommer direkt från Thailand med flyg varje tisdag.
            Ni får välja bland färsk koriander (Pak chee), salladslök, basilika,
            chilifrukter (Prik che pha), citrongräs (Ta krai), kaffirlimeblad
            (Ma krut), galanga (Kha) och många andra exotiska kryddor, frukter
            och grönsaker.
          </p>
          <p>
            Vi ger gärna råd om vilka kryddor som bör kombineras för att ge den
            rätta smaken, ett exempel är koriander som skall användas ihop med
            salladslök i det thailändska köket.
          </p>
        </Prose>

        <FeatureGrid $min="260px">
          {features.map((f) => (
            <FeatureCard key={f.title}>
              <CardTitle>{f.title}</CardTitle>
              <p>{f.text}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </Section>

    <Section id="hitta-till-oss">
      <Container>
        <SectionHeader $center>
          <Eyebrow>Välkommen in</Eyebrow>
          <h2>Hitta till oss</h2>
          <Rule />
        </SectionHeader>

        <Grid $min="280px">
          <InfoCard>
            <IconBadge>
              <PinIcon size={21} />
            </IconBadge>
            <CardTitle>Adress</CardTitle>
            <Address>
              {shop.name}
              <br />
              {shop.street}
              <br />
              {shop.postalCode} {shop.city}
            </Address>
            <MapLink href={shop.maps} target="_blank" rel="noopener noreferrer">
              Visa på karta
              <ArrowIcon size={15} />
            </MapLink>
          </InfoCard>

          <InfoCard>
            <IconBadge>
              <PhoneIcon size={21} />
            </IconBadge>
            <CardTitle>Kontakt</CardTitle>
            <InfoList>
              <li>
                <PhoneIcon size={17} />
                <a href={shop.phone.href}>{shop.phone.display}</a>
              </li>
              <li>
                <MailIcon size={17} />
                <a href={`mailto:${shop.email}`}>{shop.email}</a>
              </li>
              <li>
                <FacebookIcon size={17} />
                <a
                  href={shop.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </InfoList>
          </InfoCard>

          <InfoCard>
            <IconBadge>
              <ClockIcon size={21} />
            </IconBadge>
            <CardTitle>Öppettider</CardTitle>
            <HoursList>
              {shop.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </HoursList>
            <Note>
              Våra öppettider kan variera under helgdagar, besök gärna vår{" "}
              <a href={shop.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>{" "}
              för att se relevanta uppdateringar.
            </Note>
          </InfoCard>
        </Grid>
      </Container>
    </Section>

    <Section id="recept" $tint="lilac">
      <Container>
        <SectionHeader $center>
          <Eyebrow>Inspiration</Eyebrow>
          <h2>Våra favoritrecept</h2>
          <Rule />
          <Lead style={{ marginTop: "1.25rem" }}>
            Rätterna vi lagar hemma. Fråga oss gärna i butiken så visar vi vilka
            kryddor och råvaror du behöver.
          </Lead>
        </SectionHeader>

        <Grid $min="220px">
          {photos.recipes.map((r) => (
            <RecipeCard key={r.title}>
              <img
                src={r.src}
                srcSet={r.srcSet}
                sizes="(min-width: 900px) 25vw, (min-width: 600px) 45vw, 100vw"
                alt={r.alt}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{r.title}</figcaption>
            </RecipeCard>
          ))}
        </Grid>

        <CenteredActions>
          <Button
            href={shop.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={17} />
            Se fler tips på Facebook
          </Button>
        </CenteredActions>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <Seo structuredData />;
