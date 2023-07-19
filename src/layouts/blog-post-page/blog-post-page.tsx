import { blogService, type IBlogPost } from '@api';
import { Route, routes } from '@constants/routes';
import { Breadcrumbs, Image, Layout, MarkdownParser, metadataUtils, Page, Text } from '@shared';
import type { Metadata } from 'next';
import { BlogPostPageInfo } from './blog-post-page-info';
import { BlogPostPageSeo } from './blog-post-page-seo';
import styles from './blog-post-page.module.scss';

export interface IBlogPostPageProps {
    params: { slug: string };
}

export const generateMetadata = (props: IBlogPostPageProps): Metadata => {
    const blogPost = blogService.getPostBySlug(props.params.slug);
    const { createdAt, updatedAt, metadata } = blogPost;

    return metadataUtils.generate({
        title: metadata.title,
        description: metadata.description,
        openGraph: { type: 'article', publishedTime: createdAt, modifiedTime: updatedAt, images: [metadata.image] },
    });
};

const buildBreadcrumbsRoutes = ({ title, slug }: IBlogPost) => [
    { url: routes[Route.LANDING_PAGE].url, label: routes[Route.LANDING_PAGE].label },
    { url: routes[Route.BLOG].url, label: routes[Route.BLOG].label },
    { url: routes[Route.BLOG_POST].url, label: title, urlParams: { slug } },
];

export const BlogPostPage = (props: IBlogPostPageProps) => {
    const blogPost = blogService.getPostBySlug(props.params.slug);
    const breadcrumbsRoutes = buildBreadcrumbsRoutes(blogPost);

    return (
        <Page gap="150">
            <BlogPostPageSeo blogPost={blogPost} />
            <Breadcrumbs routes={breadcrumbsRoutes} />
            <Layout direction="row" gap="150" alignItems="start" responsiveDirection={{ md: 'column-reverse' }}>
                <Layout className={styles.mainColumn} direction="column" gap="200">
                    <Text size="h2" responsiveSize={{ sm: 'h4' }}>
                        {blogPost.title}
                    </Text>
                    <Text size="m">{blogPost.description}</Text>
                    <div className={styles.blogImageWrapper}>
                        <Image src={blogPost.image} fill={true} objectFit="cover" alt="blog post image" />
                    </div>
                    <MarkdownParser className={styles.markdown}>{blogPost.content}</MarkdownParser>
                </Layout>
                <BlogPostPageInfo blogPost={blogPost} />
            </Layout>
        </Page>
    );
};
