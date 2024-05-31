import type { SeoMetaData } from "./seo";

export interface PageData {
    id: number;
    attributes: {
        title: string;
        slug: string;
        footer?: Footer,
        seo?: SeoMetaData,
        sections?: SectionItem[],
    }
}

// Sections
interface Footer {
    id: number;
    copyright?: string;
}

interface SectionItem {
    id: number;
    __component: string;
    [key: string]: any;
}