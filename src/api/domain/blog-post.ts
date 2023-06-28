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
     * Timestamp of when the blog has been created.
     */
    createdAt: string;
    /**
     * Timestamp of when the blog has been updated.
     */
    updatedAt: string;
}
