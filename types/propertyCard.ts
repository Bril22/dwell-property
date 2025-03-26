import { StaticImageData } from "next/image";

export enum EType {
    FOR_SALE = "FOR SALE",
    FOR_RENT = "FOR RENT"
}

export enum EPricePer {
    PER_DAY = "/day",
    PER_WEEK = "/week",
    PER_MONTH = "/month",
    PER_YEAR = "/year",
    LEASE_HOLD = "lease hold",
    FREE_HOLD = "free hold"
}

export interface IPropertyCard {
    image: string | StaticImageData;
    type: EType;
    logo: string | StaticImageData;
    price: number;
    currency: string;
    pricePer?: EPricePer;
    area: number;
    bedrooms: number;
    bathrooms: number;
    headline: string;
    address: string;
}