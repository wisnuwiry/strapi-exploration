import type { Image } from "./image";

export interface Post {
    id: number;
    attributes: {
        title: string;
        excerpt?: string;
        visibility: boolean;
        readingTime: string;
        slug: string;
        content: any;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        author: {
            data?: Author;
        }
        featured: {
            data?: Image;
        }
    },
}

export interface Author {
    id: number;
    attributes: {
        name: string;
        bio?: string;
        avatar: {
            data?: Image;
        }
    }
}