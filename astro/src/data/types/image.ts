export interface Image {
    id: number;
    attributes: {
        name: string,
        alternativeText?: string,
        caption?: string,
        width: number,
        height: number,
        formats: string,
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: string,
    };
}