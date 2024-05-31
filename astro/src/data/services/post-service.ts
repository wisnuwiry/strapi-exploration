import QueryString from "qs";
import fetchWithAuth from "../client";
import type { Post } from "../types/post";

export async function getPosts(page?: number, limit?: number): Promise<Post[]> {
    const query = {
        pagination: {
            page: page,
            size: limit,
        },
        populate: {
            featured: {
                populate: '*'
            },
            categories: {
                populate: 'post.featured,authors'
            },
            author: {
                populate: 'avatar'
            },
            SEO: {
                populate: 'metaImage,metaSocial.image,createdBy,updatedBy'
            }
        }
    };

    const queryParsed = QueryString.stringify(query);

    const result = await fetchWithAuth(`/api/posts?${queryParsed}`);

    return result.data;
}

export async function getDetailPost(slug: string): Promise<Post | null> {
    const query = {
        filters: {
            slug: {
                $eq: slug,
            }
        },
        populate: {
            featured: {
                populate: '*'
            },
            categories: {
                populate: 'post.featured,authors'
            },
            author: {
                populate: 'avatar'
            },
            SEO: {
                populate: 'metaImage,metaSocial.image,createdBy,updatedBy'
            }
        }
    };

    const queryParsed = QueryString.stringify(query);

    const result = await fetchWithAuth(`/api/posts?${queryParsed}`);

    if (result && result.data.length > 0) {
        return result.data[0];
    }

    return null;
}