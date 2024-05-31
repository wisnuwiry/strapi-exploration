import QueryString from "qs";
import fetchWithAuth from "../client";
import type { PartnerList } from "../types/partner";

export async function getPartners(): Promise<PartnerList> {
    const query = {
        populate: {
            items: {
                populate: '*',
                logo: {
                    populated: true,
                }
            }
        }
    };

    const queryParsed = QueryString.stringify(query);

    const result = await fetchWithAuth(`/api/partner?${queryParsed}`);

    return result.data;
}