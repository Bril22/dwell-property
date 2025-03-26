import { IconNames } from "../components/icons/interface";
import { AccordionItem } from "../types/accordion";
import { ITeamsCard } from "../types/ourTeamCard";
import { EPricePer, EType, IPropertyCard } from "../types/propertyCard";

export const BannerDetail: {
    title: string;
    description: string;
}[] = [
        {
            title: "Transparency",
            description: "We keep you informed at every stage of your project and about all the options available to you, so you can make informed decisions.",
        },
        {
            title: "Integrity",
            description: "Integrity is at the heart of our business. We always act with honesty and fairness, whether in our assessments, negotiations, or advice.",
        },
        {
            title: "Proximity",
            description: "Being close to our clients, understanding their needs, and supporting them attentively is essential for the success of their projects.",
        }
    ]

export const PropertyTypes: {
    iconName: IconNames;
    label: string;
}[] = [
        {
            iconName: IconNames.house,
            label: "House"
        },
        {
            iconName: IconNames.apartment,
            label: "Apartment"
        },
        {
            iconName: IconNames.commercial,
            label: "Commercial"
        },
        {
            iconName: IconNames["student-house"],
            label: "Student housing"
        },
    ]

export const PropertyCardDatas: IPropertyCard[] = [
    {
        image: "/images/property-1.png",
        type: EType.FOR_SALE,
        logo: "/images/property-logo.png",
        price: 280650,
        currency: "EUR",
        area: 80,
        bedrooms: 1,
        bathrooms: 1,
        headline: "Modern apartment",
        address: "47 Avenue des Tulipes, 1000, Brussels"
    },
    {
        image: "/images/property-2.jpg",
        type: EType.FOR_RENT,
        logo: "/images/property-logo.png",
        price: 550,
        currency: "USD",
        pricePer: EPricePer.PER_MONTH,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        headline: "35m² studio",
        address: "47 Avenue des Tulipes, 1000, Brussels"
    },
    {
        image: "/images/property-1.png",
        type: EType.FOR_RENT,
        logo: "/images/property-logo.png",
        price: 450000,
        currency: "USD",
        pricePer: EPricePer.PER_YEAR,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        headline: "Family Apartmnt",
        address: "47 Avenue des Tulipes, 1000, Brussels"
    },
    {
        image: "/images/property-1.png",
        type: EType.FOR_RENT,
        logo: "/images/property-logo.png",
        price: 30,
        currency: "EUR",
        pricePer: EPricePer.PER_DAY,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        headline: "35m² studio",
        address: "47 Avenue des Tulipes, 1000, Brussels"
    },
    {
        image: "/images/property-1.png",
        type: EType.FOR_RENT,
        logo: "/images/property-logo.png",
        price: 550,
        currency: "USD",
        pricePer: EPricePer.PER_MONTH,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        headline: "35m² studio",
        address: "47 Avenue des Tulipes, 1000, Brussels"
    }
]

export const AccordionDatas: AccordionItem[] = [
    {
        id: 1,
        title: 'Sale',
        content:
            'Our agency offers you a comprehensive and diverse range of services, carefully tailored to each stage of your real estate project. Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, our team of experts is here to support you personally and meet your specific needs.',
        image: '/images/service.png',
    },
    {
        id: 2,
        title: 'Property Management',
        content:
            'Our agency offers you a comprehensive and diverse range of services, carefully tailored to each stage of your real estate project. Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, our team of experts is here to support you personally and meet your specific needs.',
        image: '/images/service.png',
    },
    {
        id: 3,
        title: 'Valuation',
        content:
            'Our agency offers you a comprehensive and diverse range of services, carefully tailored to each stage of your real estate project. Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, our team of experts is here to support you personally and meet your specific needs.',
        image: '/images/service.png',
    },
    {
        id: 4,
        title: 'Legal Advice',
        content:
            'Our agency offers you a comprehensive and diverse range of services, carefully tailored to each stage of your real estate project. Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, our team of experts is here to support you personally and meet your specific needs.',
        image: '/images/service.png',
    },
];

export const OurTeamCard: ITeamsCard[] = [
    {
        image: "/images/marie.png",
        name: "Marie Dupont",
        role: "Founder and Managing Director",
        email: "marie@email.dwell"
    },
    {
        image: "/images/julien.png",
        name: "Julien Thomas",
        role: "Property Valuation Expert",
        email: "julien@email.dwell"
    },
    {
        image: "/images/sophie.png",
        name: "Sophie Dupont",
        role: "Agency Director",
        email: "sophie@email.dwell"
    },
]