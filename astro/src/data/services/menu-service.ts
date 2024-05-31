import QueryString from "qs";
import fetchWithAuth from "../client";
import type { Menu } from "../types/menu";

export async function getMainMenu(): Promise<Menu> {
    const query = {
        populate: {
            items: {
                populate: {
                    sub_menus: {
                        populated: true,
                    }
                }
            },
            logo: {
                populated: true,
            },
        },
    };

    const queryParsed = QueryString.stringify(query);

    const result = await fetchWithAuth(`/api/main-menu?${queryParsed}`);

    return result.data;
}