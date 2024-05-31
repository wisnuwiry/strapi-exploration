import type { Image } from "./image";

export interface Menu {
    id: number;
    attributes: {
        items: MenuItem[];
        logo: {
            data?: Image;
        }
    };
}

export interface MenuItem {
    title: string;
    link?: string;
    sub_menus?: MenuItem[];
}