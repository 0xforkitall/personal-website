import { type IBlogPost } from '@api';
import { routes } from '@constants/routes';
import { Layout, LinkNext, Text, routerUtils } from '@shared';
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
    const { title, createdAt, slug } = blogPost;

    return (
        <LinkNext href={routerUtils.generatePath(routes.blogPost, { slug })}>
            <Layout className={classNames(styles.newestSectionPost, className)} direction="column">
                <Text size="m">{title}</Text>
                <Text size="s" className={styles.creationDate}>
                    {createdAt}
                </Text>
            </Layout>
        </LinkNext>
    );
};
