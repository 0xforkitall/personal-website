import { Layout, Text, routerUtils } from '@0xforkitall/ui-kit';
import { Image, Link } from '@0xforkitall/ui-kit-nextjs';
import { blogService } from '@api/blog-service';
import { Route, routes } from '@constants/routes';
import classNames from 'classnames';
import React from 'react';
import { NewestSectionPost } from './newest-section-post';
import styles from './newest-section.module.scss';

export interface INewestSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

const maxNewestPosts = 4;

export const NewestSection: React.FC<INewestSectionProps> = async ({ className }) => {
    const blogPosts = await blogService.getAllPosts();
    const newestPost = blogPosts[0]!;
    const otherPosts = blogPosts.slice(1, maxNewestPosts);

    return (
        <Layout
            className={classNames(styles.newestSection, className)}
            direction="row"
            responsiveDirection={{ md: 'column' }}
        >
            <Link
                href={routerUtils.generatePath(routes[Route.BLOG_POST].url, { slug: newestPost.slug })}
                className={styles.newestPost}
            >
                <Layout direction="column">
                    <Image
                        className={styles.newestPostImage}
                        src={newestPost.image}
                        alt="newest post image"
                        fill={true}
                        objectFit="cover"
                        priority={true}
                    />
                    <div className={styles.newestPostTitle}>
                        <Text size="l">{newestPost.title}</Text>
                    </div>
                </Layout>
            </Link>
            <Layout direction="column" gap="100" className={styles.latestPosts}>
                <Text size="h4">Latest</Text>
                <Layout direction="column" gap="0">
                    {otherPosts.length === 0 && (
                        <Text size="m" color="muted">
                            More blog posts coming soon 👀
                        </Text>
                    )}
                    {otherPosts.map((post) => (
                        <NewestSectionPost key={post.id} blogPost={post} />
                    ))}
                </Layout>
            </Layout>
        </Layout>
    );
};
