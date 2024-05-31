import QueryString from "qs";
import fetchWithAuth from "../client";
import type { PageData } from "../types/page";

export async function getAllPages() {
    const query = {
        populate: {
            items: {
                populate: true,

            },
            logo: {
                populated: true,
            }
        },
    };

    const queryParsed = QueryString.stringify(query);
    const result = await fetchWithAuth(`/api/pages?${queryParsed}`);

    return result.data;
}

export async function getDetailPage(slug: string): Promise<PageData | null> {
    const query = {
        filters: {
            slug: {
                $eq: slug,
            }
        },
        populate: {
            sections: {
                populate: [
                    "brand",
                    "copyright",
                    "items.image",
                    "pillars.icon",
                    "cta"
                ]
            },
            seo: {
                populated: true,
                metaSocial: {
                    populated: true,
                }
            },
            heaeder: {
                populated: true,
            },
            footer: {
                populated: true,
            }
        },
    };

    const queryParsed = QueryString.stringify(query);

    const result = await fetchWithAuth(`/api/pages?${queryParsed}`);
    console.log(result);
    if (result && result.data.length > 0) {
        return result.data[0];
    }

    return null;
}