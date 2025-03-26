import { StaticImageData } from "next/image";
import { IconNames } from "../components/icons/interface";

export interface INavbar {
  menu: IMainMenu[];
  logo: string | StaticImageData;
}

export interface IMainMenu {
  label: string;
  icon?: IconNames;
  href: string;
  children?: IMainMenu[];
  active?: boolean;
}

export interface ISocialMedia {
  label?: string;
  link: string;
  icon: IconNames;
}

export interface ILinks {
  label: string;
  href: string;
}

export interface IFooterData {
  address?: string;
  phone?: string;
  email?: string;
  links?: ILinks[];
  termsLinks?: ILinks[];
  socialMedia?: ISocialMedia[]
}

export interface IFooter {
  logo: string | StaticImageData;
  datas: IFooterData
}

