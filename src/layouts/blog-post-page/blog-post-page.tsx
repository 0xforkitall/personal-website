import { blogService } from '@api';
import { MarkdownParser, Page, Text } from '@shared';
import type { Metadata } from 'next';

export interface IBlogPostPageProps {
    params: { slug: string };
}

export const generateMetadata = async (props: IBlogPostPageProps): Promise<Metadata> => {
    const blogPost = await blogService.getPostBySlug(props.params.slug);
    const { createdAt, updatedAt, metadata } = blogPost;

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: { type: 'article', publishedTime: createdAt, modifiedTime: updatedAt, images: [metadata.image] },
    };
};

export const BlogPostPage = async (props: IBlogPostPageProps) => {
    const blogPost = await blogService.getPostBySlug(props.params.slug);

    return (
        <Page gap="200">
            <Text size="h2">{blogPost.title}</Text>
            <Text size="m">{blogPost.description}</Text>
            <MarkdownParser>{blogPost.content}</MarkdownParser>
        </Page>
    );
};
