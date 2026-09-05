import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { styled } from "styled-components";

import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import {
  Button,
  ButtonGhost,
  Container,
  Eyebrow,
  Lead,
  Section,
} from "../components/ui";
import { ArrowIcon } from "../components/icons";
import { shop } from "../siteData";

const Middle = styled(Container)`
  max-width: 44rem;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2.25rem;
`;

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Section>
      <Middle>
        <Eyebrow>404</Eyebrow>
        <h1>Sidan kunde inte hittas</h1>
        <Lead style={{ marginTop: "1.25rem" }}>
          Sidan du letade efter finns inte längre – eller så blev det ett stavfel
          i adressen. Välkommen tillbaka till startsidan, eller slå oss en
          signal så hjälper vi dig.
        </Lead>
        <Actions>
          <Button as={Link} to="/">
            Till startsidan
            <ArrowIcon size={16} />
          </Button>
          <ButtonGhost href={shop.phone.href}>{shop.phone.display}</ButtonGhost>
        </Actions>
      </Middle>
    </Section>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <Seo
    title="Sidan kunde inte hittas"
    description="Sidan du letade efter finns inte."
    pathname="/404/"
  />
);
