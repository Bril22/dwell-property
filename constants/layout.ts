import { IconNames } from "../components/icons/interface";
import { IFooterData, IMainMenu } from "../types/layout";

export const MainMenu: IMainMenu[] = [
    {
      label: "About",
      href: "#about",
      active: true,
    },
    {
      label: "Our Services",
      href: "#our-services",
      active: true,
    },
    {
      label: "Our Propreties",
      href: "#our-properties",
      active: true,
    },
  ]

export const FooterData: IFooterData = {
  address: "118 Maréchal Street, 1000 Brussels",
  email: "contact@dwell.be",
  phone: "+3 24 60 25 52 01",
  links: [
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Properties",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
    {
      label: "Blog",
      href: "#",
    }
  ],
  socialMedia: [
    {
      icon: IconNames.instagram,
      label: "Instagram",
      link: "#"
    },
    {
      icon: IconNames.linkedin,
      label: "Linkedin",
      link: "#"
    }
  ],
  termsLinks: [
    {
      label: "Terms & Conditions",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Cookies",
      href: "#",
    },
  ],
}