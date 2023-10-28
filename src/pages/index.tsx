import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { LogoWithName } from "../components/icons/logo";
import { Col, Container, Row } from "react-grid-system";
import { HorizontalSpacer } from "../components/spacers";
import { styled } from "styled-components";
import { FindUsTitle } from "../components/icons/hitta";
import { MediaQuery } from "../utils";
import { AsiatiskLkpg } from "../components/icons/asiatisk";
import { RecipeTitle } from "../components/icons/recipes";

const pageStyles = {
  fontFamily: "-apple-system, Inter, sans-serif, serif",
  backgroundColor: "#fbfafa",
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 12px 12px 6px 0px rgba(104, 24, 108, 0.5);
`;

const ColoredLine = styled.div`
  background: linear-gradient(
    270deg,
    #2c032d 21.2%,
    #a038a3 55.94%,
    rgba(116, 25, 118, 0) 92.17%
  );
  width: 100%;
  height: 2px;
`;

const Subtitle = styled.h3`
  color: #541056;
`;

const Body = styled.body``;

const RecipeImage = styled.img`
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 12px 12px 6px 0px rgba(104, 24, 108, 0.5);

  ${MediaQuery.XS} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Container>
        <HorizontalSpacer spacing={3} />
        <LogoWithName />
        <HorizontalSpacer spacing={1} />
        <ColoredLine />
        <HorizontalSpacer spacing={3} />
        <Row>
          <Col lg={6} xs={12}>
            <AsiatiskLkpg />
            <HorizontalSpacer spacing={1} />
            <Body>
              Vår affärsidé innebär att vi vill erbjuda ett brett sortiment samt
              ge tips och råd om matlagning Vi har specialiserat oss på thaimat.
              Färska grönsaker kommer direkt från Thailand med flyg varje
              onsdag. Ni får välja bland färsk koriander (Pak chee), salladslök,
              basilika, chilifrukter (Prik che pha), citrongräs (Ta krai),
              kaffirlimeblad (Ma krut), galanga (Kha) och många andra exotiska
              kryddor, frukter och grönsaker.
            </Body>
            <HorizontalSpacer spacing={1} />
            <Body>
              {" "}
              Vi ger gärna råd om vilka kryddor som bör kombineras för att ge
              den rätta smaken, ett exempel är koriander som skall användas ihop
              med salladslök i det thailändska köket.
            </Body>
          </Col>
          <Col lg={6} xs={12}>
            <Image src="https://images.pexels.com/photos/1263870/pexels-photo-1263870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Col>
        </Row>
        <HorizontalSpacer spacing={8} />
        <Row justify="center">
          <FindUsTitle />
        </Row>
        <ColoredLine />
        <HorizontalSpacer spacing={1} />
        <Row justify="around">
          <Col lg={4}>
            <Subtitle>Adress</Subtitle>
            <Body>Siam Shop</Body>
            <Body>Storgatan 6</Body>
            <Body>582 23 Linköping</Body>
          </Col>
          <Col lg={4}>
            <Subtitle>Kontakt</Subtitle>
            <Link href="mailto:hello@siamshop.se">
              <Body>hello@siamshop.se</Body>
            </Link>
            <Body>013 - 12 12 13</Body>
            <Link
              href="https://sv-se.facebook.com/SiamShopLinkoping/"
              target="__blank"
            >
              <Body>Facebook</Body>
            </Link>
          </Col>
          <Col lg={4}>
            <Subtitle>Öppettider</Subtitle>
            <Body>mån-fre: 10.00 - 18.00</Body>
            <Body>lör: 10.00 - 15.00</Body>
            <Body>sön: 11.00 - 15.00</Body>
          </Col>
        </Row>
        <HorizontalSpacer spacing={8} />
        <Row justify="center">
          <RecipeTitle />
        </Row>
        <ColoredLine />
        <HorizontalSpacer spacing={2} />
        <Row justify="between">
          <Col lg={3}>
            <RecipeImage src="https://images.pexels.com/photos/3297882/pexels-photo-3297882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Col>
          <Col lg={3}>
            <RecipeImage src="https://images.pexels.com/photos/2089712/pexels-photo-2089712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Col>
          <Col lg={3}>
            <RecipeImage src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Col>
          <Col lg={3}>
            <RecipeImage src="https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Col>
        </Row>
        <HorizontalSpacer spacing={12} />
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Siam Shop</title>;
