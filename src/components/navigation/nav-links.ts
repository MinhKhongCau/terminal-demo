/** Section anchors shared by the desktop nav, mobile sheet and footer. */
export const NAV_LINKS = [
  { id: "home", href: "#home", labelKey: "nav.home" },
  { id: "about", href: "#about", labelKey: "nav.about" },
  { id: "menu", href: "#menu", labelKey: "nav.menu" },
  { id: "reserve", href: "#reserve", labelKey: "nav.reservation" },
  { id: "location", href: "#location", labelKey: "nav.location" },
] as const;

export type NavLinkId = (typeof NAV_LINKS)[number]["id"];
