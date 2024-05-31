import type { Image } from "./image";

export interface PartnerList {
    id: number;
    attributes: {
        items: PartnerItem[]
    },
}

export interface PartnerItem {
    id: number;
    name: string;
    logo: {
        data: Image;
    }
}