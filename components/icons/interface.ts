export enum IconNames {
    "3-line-menu" = "3-line-menu",
    "close" = "close",
    "logo" = "logo",
    "house" = "house",
    "commercial" = "commercial",
    "apartment" = "apartment",
    "student-house" = "student-house",
    "arrow-top-right" = "arrow-top-right",
    "arrow-left" = "arrow-left",
    "arrow-right" = "arrow-right",
    "address" = "address",
    "email" = "email",
    "linkedin" = "linkedin",
    "instagram" = "instagram",
    "phone" = "phone",
    
}

export interface IconProps {
    name: IconNames;
    size?: number;
    color?: string;
    className?: string;
}
