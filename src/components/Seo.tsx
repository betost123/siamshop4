import * as React from "react";
import { color } from "../theme";
import { localBusinessJsonLd, shop, siteUrl } from "../siteData";

type SeoProps = {
  /** Page name; omit on the start page to use the brand + tagline title. */
  title?: string;
  description?: string;
  /** Path of the current page, used for the canonical URL. */
  pathname?: string;
  /** Emit LocalBusiness markup — the start page only. */
  structuredData?: boolean;
};

/**
 * Head contents. Rendered through Gatsby's Head API, which does not support
 * hooks, so everything here comes from the static siteData module.
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description = shop.description,
  pathname = "/",
  structuredData = false,
}) => {
  const fullTitle = title
    ? `${title} | ${shop.name}`
    : `${shop.name} – ${shop.tagline}`;
  const canonical = `${siteUrl}${pathname}`;

  return (
    <>
      <html lang="sv" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={color.plum} />
      <link rel="canonical" href={canonical} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={shop.name} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />

      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd())}
        </script>
      ) : null}
    </>
  );
};
