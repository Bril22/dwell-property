import { StaticImageData } from "next/image";

export interface ITeamsCard {
    image: string | StaticImageData;
    name: string;
    role: string;
    email?: string;
}