import { type IBlogPost } from '@api';
import { Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './newest-section-post.module.scss';

export interface INewestSectionPostProps {
    /**
     * Blog post to be displayed.
     */
    blogPost: IBlogPost;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const NewestSectionPost: React.FC<INewestSectionPostProps> = ({ blogPost, className }) => {
    const { title, createdAt } = blogPost;

    return (
        <Layout className={classNames(styles.newestSectionPost, className)} direction="column">
            <Text size="m">{title}</Text>
            <Text size="s" className={styles.creationDate}>
                {createdAt}
            </Text>
        </Layout>
    );
};
