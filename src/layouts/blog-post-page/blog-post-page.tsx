import { blogService } from '@api';
import { Route, routes } from '@constants/routes';
import { Breadcrumbs, Image, Layout, MarkdownParser, Page, Text } from '@shared';
import type { Metadata } from 'next';
import styles from './blog-post-page.module.scss';

export interface IBlogPostPageProps {
    params: { slug: string };
}

export const generateMetadata = (props: IBlogPostPageProps): Metadata => {
    const blogPost = blogService.getPostBySlug(props.params.slug);
    const { createdAt, updatedAt, metadata } = blogPost;

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: { type: 'article', publishedTime: createdAt, modifiedTime: updatedAt, images: [metadata.image] },
    };
};

const breadcrumbsRoutes = [
    { url: routes[Route.LANDING_PAGE].url, label: routes[Route.LANDING_PAGE].label },
    { url: routes[Route.BLOG].url, label: routes[Route.BLOG].label },
    { url: routes[Route.BLOG].url, label: 'Lorem ipsum' },
];

export const BlogPostPage = (props: IBlogPostPageProps) => {
    const blogPost = blogService.getPostBySlug(props.params.slug);

    return (
        <Page gap="150">
            <Breadcrumbs routes={breadcrumbsRoutes} />
            <Layout direction="row" gap="150" alignItems="start">
                <Layout className={styles.mainColumn} direction="column" gap="200">
                    <Text size="h2">{blogPost.title}</Text>
                    <Text size="m">{blogPost.description}</Text>
                    <div className={styles.imageWrapper}>
                        <Image src={blogPost.image} fill={true} objectFit="cover" alt="blog post image" />
                    </div>
                    <MarkdownParser className={styles.markdown}>{blogPost.content}</MarkdownParser>
                </Layout>
                <Layout className={styles.infoColumn} direction="column" gap="100">
                    <Text size="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Layout>
            </Layout>
        </Page>
    );
};
