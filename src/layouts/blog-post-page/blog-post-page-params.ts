import { blogService } from '@api/blog-service';

export const generateBlogPostPageStaticParams = async () => {
    const posts = blogService.getAllPosts();

    return posts.map(({ slug }) => ({ slug }));
};
