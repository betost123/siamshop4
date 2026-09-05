/** Single source of truth for the shop's details — used by the page, the
 *  footer and the structured data in <head>. */
/** Update this once the site is live on its real domain. */
export const siteUrl = "https://www.siamshop.se";

export const shop = {
  name: "Siam Shop",
  tagline: "Asiatiskt livsmedel i Linköping",
  description:
    "Siam Shop på Sankt Larsgatan 3 i Linköping är en thailändsk livsmedelsbutik med ett brett sortiment av kryddor, frukt och grönsaker. Färska grönsaker flygs in direkt från Thailand varje onsdag.",
  street: "Sankt Larsgatan 3",
  postalCode: "582 24",
  city: "Linköping",
  country: "SE",
  phone: { display: "013 – 12 12 13", href: "tel:+4613121213" },
  email: "hello@siamshop.se",
  facebook: "https://sv-se.facebook.com/SiamShopLinkoping/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Siam Shop, Sankt Larsgatan 3, 582 24 Linköping"),
  /** `days` is shown to visitors; `schema` feeds the LocalBusiness markup. */
  hours: [
    { days: "Måndag – fredag", time: "10.00 – 18.00", schema: ["Mo", "Tu", "We", "Th", "Fr"], opens: "10:00", closes: "18:00" },
    { days: "Lördag", time: "10.00 – 16.00", schema: ["Sa"], opens: "10:00", closes: "16:00" },
    { days: "Söndag", time: "12.00 – 16.00", schema: ["Su"], opens: "12:00", closes: "16:00" },
  ],
  holidayNote:
    "Våra öppettider kan variera under helgdagar, besök gärna vår Facebook för att se relevanta uppdateringar.",
} as const;

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: shop.name,
  description: shop.description,
  url: siteUrl,
  telephone: shop.phone.href.replace("tel:", ""),
  email: shop.email,
  sameAs: [shop.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: shop.street,
    postalCode: shop.postalCode,
    addressLocality: shop.city,
    addressCountry: shop.country,
  },
  openingHoursSpecification: shop.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schema,
    opens: h.opens,
    closes: h.closes,
  })),
});
