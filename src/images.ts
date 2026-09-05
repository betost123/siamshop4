/**
 * Photos are hosted on the Pexels CDN, which resizes on the fly — so we can
 * hand the browser a proper srcset instead of one oversized JPEG.
 */
const WIDTHS = [400, 600, 800, 1200, 1600];

const url = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg` +
  `?auto=compress&cs=tinysrgb&fit=crop&w=${w}`;

export const pexels = (id: number) => ({
  src: url(id, 900),
  srcSet: WIDTHS.map((w) => `${url(id, w)} ${w}w`).join(", "),
});

export const photos = {
  hero: {
    ...pexels(1263870),
    alt: "Små plättar som ångar i en gjutjärnsform i ett thailändskt gatukök.",
  },
  recipes: [
    {
      ...pexels(3297882),
      title: "Frisk sallad med koriander och mango",
      alt: "Skål med färsk sallad, tärnad mango, koriander och strimlade grönsaker.",
    },
    {
      ...pexels(2089712),
      title: "Ångade bao med krispig kyckling",
      alt: "Ångade bao-bröd fyllda med krispig kyckling och färsk koriander i bambukorgar.",
    },
    {
      ...pexels(723198),
      title: "Stekt ris med salladslök",
      alt: "Svart skål med stekt ris toppat med hackad salladslök.",
    },
    {
      ...pexels(1234535),
      title: "Het thailändsk skaldjurssallad",
      alt: "Thailändsk skaldjurssallad med bläckfisk, tomat och chili, serverad med omelett och sötstark sås.",
    },
  ],
} as const;
