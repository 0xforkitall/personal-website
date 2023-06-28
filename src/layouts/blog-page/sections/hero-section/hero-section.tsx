import { blogPosts } from '@constants/blog-posts';
import { Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { HeroSectionPost } from './hero-section-post';
import styles from './hero-section.module.scss';

export interface IHeroSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const HeroSection: React.FC<IHeroSectionProps> = ({ className }) => {
    return (
        <Layout
            className={classNames(styles.heroSection, className)}
            direction="row"
            responsiveDirection={{ md: 'column' }}
        >
            <div className={styles.newestPost} />
            <Layout direction="column" gap="100" className={styles.latestPosts}>
                <Text size="h4">Latest</Text>
                <Layout direction="column" gap="0">
                    {blogPosts.map((post) => (
                        <HeroSectionPost key={post.id} blogPost={post} />
                    ))}
                </Layout>
            </Layout>
        </Layout>
    );
};
