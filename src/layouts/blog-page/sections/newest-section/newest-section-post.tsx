import { DateFormat, Layout, Text, formatUtils, routerUtils } from '@0xforkitall/ui-kit';
import { Link } from '@0xforkitall/ui-kit-nextjs';
import { type IBlogPost } from '@api/blog-service';
import { Route, routes } from '@constants/routes';
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
        <Link href={routerUtils.generatePath(routes[Route.BLOG_POST].url, { slug })}>
            <Layout className={classNames(styles.newestSectionPost, className)} direction="column">
                <Text size="m">{title}</Text>
                <Text size="s" color="muted" className={styles.creationDate}>
                    {formatUtils.formatDate(createdAt, DateFormat.DATE_SHORT)}
                </Text>
            </Layout>
        </Link>
    );
};
