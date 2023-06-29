import { blogService } from '@api';
import { routes } from '@constants/routes';
import { Layout, LinkNext, Text, routerUtils } from '@shared';
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

export const NewestSection: React.FC<INewestSectionProps> = async ({ className }) => {
    const blogPosts = await blogService.getAllPosts();
    const newestPost = blogPosts[0]!;
    const otherPosts = blogPosts.slice(1, 4);

    return (
        <Layout
            className={classNames(styles.newestSection, className)}
            direction="row"
            responsiveDirection={{ md: 'column' }}
        >
            <LinkNext href={routerUtils.generatePath(routes.blog, { slug: newestPost.slug })}>
                <Layout className={styles.newestPost} direction="column">
                    <div className={styles.newestPostTitle}>
                        <Text size="l">{newestPost.title}</Text>
                    </div>
                </Layout>
            </LinkNext>
            <Layout direction="column" gap="100" className={styles.latestPosts}>
                <Text size="h4">Latest</Text>
                <Layout direction="column" gap="0">
                    {otherPosts.length === 0 && (
                        <Text size="m" color="muted">
                            More posts coming soon..
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