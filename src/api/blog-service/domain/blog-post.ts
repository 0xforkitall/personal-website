import type { IAuthor } from './author';
import type { IPageMetadata } from './page-metadata';

export interface IBlogPost {
    /**
     * Unique id of the blog post.
     */
    id: string;
    /**
     * Unique slug-id of the blog post displayed on the url.
     */
    slug: string;
    /**
     * Title of the blog post.
     */
    title: string;
    /**
     * Description of the blog post.
     */
    description: string;
    /**
     * Content of the blog post.
     */
    content: string;
    /**
     * Url to the image of the blog post.
     */
    image: string;
    /**
     * Author of the blog post.
     */
    author: IAuthor;
    /**
     * Topics covered by the blog post.
     */
    topics: string[];
    /**
     * Metadata information of the blog post.
     */
    metadata: IPageMetadata;
    /**
     * Timestamp of when the blog has been created.
     */
    createdAt: string;
    /**
     * Timestamp of when the blog has been updated.
     */
    updatedAt: string;
}
