import { blogService } from '@api';
import { Route, routes } from '@constants/routes';
import { Breadcrumbs, Chip, Image, Layout, MarkdownParser, Page, Text } from '@shared';
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

const buildBreadcrumbsRoutes = (blogTitle: string) => [
    { url: routes[Route.LANDING_PAGE].url, label: routes[Route.LANDING_PAGE].label },
    { url: routes[Route.BLOG].url, label: routes[Route.BLOG].label },
    { url: routes[Route.BLOG].url, label: blogTitle },
];

export const BlogPostPage = (props: IBlogPostPageProps) => {
    const blogPost = blogService.getPostBySlug(props.params.slug);
    const breadcrumbsRoutes = buildBreadcrumbsRoutes(blogPost.title);

    return (
        <Page gap="150">
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
                <Layout className={styles.infoColumn} direction="column" gap="200">
                    <Layout
                        className={styles.authorLayout}
                        responsiveDirection={{ md: 'row' }}
                        direction="column"
                        alignItems="center"
                        gap="100"
                    >
                        <Image
                            src={blogPost.author.avatar}
                            width={120}
                            height={120}
                            alt="author image"
                            className={styles.authorImage}
                        />
                        <Text size="xl" fontWeight="bold" responsiveSize={{ md: 'm' }}>
                            {blogPost.author.displayName}
                        </Text>
                    </Layout>
                    <Layout className={styles.topicsList} direction="row" wrap="wrap" gap="50">
                        {blogPost.topics.map((topic) => (
                            <Chip key={topic} size="s">
                                {topic}
                            </Chip>
                        ))}
                    </Layout>
                </Layout>
            </Layout>
        </Page>
    );
};
