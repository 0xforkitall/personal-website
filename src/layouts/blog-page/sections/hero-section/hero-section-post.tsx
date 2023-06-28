import { type IBlogPost } from '@api';
import { Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './hero-section-post.module.scss';

export interface IHeroSectionPostProps {
    /**
     * Blog post to be displayed.
     */
    blogPost: IBlogPost;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const HeroSectionPost: React.FC<IHeroSectionPostProps> = ({ blogPost, className }) => {
    const { title, createdAt } = blogPost;

    return (
        <Layout className={classNames(styles.heroSectionPost, className)} direction="column">
            <Text size="m">{title}</Text>
            <Text size="s" className={styles.creationDate}>
                {createdAt}
            </Text>
        </Layout>
    );
};
