import { blogService } from '@api';

export const generateBlogPostPageStaticParams = async () => {
    const posts = blogService.getAllPosts();

    return posts.map(({ slug }) => ({ slug }));
};
