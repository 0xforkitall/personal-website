import fs from 'fs';
import matter, { type GrayMatterFile } from 'gray-matter';
import { join } from 'path';
import { type IBlogPost } from './domain';

class BlogService {
    private postsDirectory = join(process.cwd(), '_posts');

    getPostBySlug = (slug: string): IBlogPost => {
        const slugPathname = this.slugToPathname(slug);

        if (!fs.existsSync(slugPathname)) {
            throw new Error(`post with slug "${slug}" does not exist`);
        }

        const fileContent = fs.readFileSync(slugPathname);
        const matterFile = matter(fileContent);
        const blogPost = this.matterFileToBlogPost(matterFile);

        return blogPost;
    };

    getAllPosts = (): IBlogPost[] => {
        const postSlugs = fs.readdirSync(this.postsDirectory);

        const blogPosts = postSlugs
            .map((slug) => this.getPostBySlug(this.filenameToSlug(slug)))
            .sort((postA, postB) => (postA.createdAt > postB.createdAt ? -1 : 1));

        return blogPosts;
    };

    private slugToPathname = (slug: string): string => join(this.postsDirectory, `${slug}.md`);

    private filenameToSlug = (filename: string): string => filename.replace(/\.md$/, '');

    private matterFileToBlogPost = (matterFile: GrayMatterFile<Buffer>): IBlogPost => {
        const { content, data } = matterFile;

        if (content == null || data == null) {
            throw new Error('error serializing blog post, content or data invalid');
        }

        const { id, slug, title, description, image, author, topics, metadata, createdAt, updatedAt } = data;

        return {
            id,
            slug,
            title,
            description,
            image,
            author,
            topics,
            metadata,
            createdAt,
            updatedAt,
            content,
        };
    };
}

export const blogService = new BlogService();
