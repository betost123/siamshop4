import * as React from "react";
import type { GatsbySSR } from "gatsby";

/**
 * Preconnect + load the two brand webfonts. Kept in gatsby-ssr so every page
 * (including 404) gets them, and so the <link>s land before the page CSS.
 */
const FONT_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..700,0..100,0..1;1,9..144,400..700,0..100,0..1" +
  "&family=Inter:opsz,wght@14..32,400..600" +
  "&display=swap";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setHeadComponents,
}) => {
  setHtmlAttributes({ lang: "sv" });

  setHeadComponents([
    <link
      key="gf-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="gf-preconnect-static"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin=""
    />,
    <link key="gf-css" rel="stylesheet" href={FONT_HREF} />,
    // Photos are served from the Pexels CDN — warm the connection early.
    <link
      key="pexels-preconnect"
      rel="preconnect"
      href="https://images.pexels.com"
    />,
  ]);
};
