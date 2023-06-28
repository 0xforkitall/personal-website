import { blogService } from '@api';

export const generateBlogPostPageStaticParams = async () => {
    const posts = await blogService.getAllPosts();

    return posts.map(({ slug }) => ({ slug }));
};
