'use client';

import { type IBlogPost } from '@api/blog-service';
import { Chip, DateFormat, Image, Layout, Text, formatUtils, useBreakpoint } from '@shared';
import { useEffect, useState } from 'react';
import styles from './blog-post-page-info.module.scss';

export interface IBlogPostPageInfoProps {
    /**
     * Blog post to display the info for.
     */
    blogPost: IBlogPost;
}

export const BlogPostPageInfo = ({ blogPost }: IBlogPostPageInfoProps) => {
    const { isDown } = useBreakpoint();
    const [dateFormat, setDateFormat] = useState(DateFormat.DATE_LONG);

    useEffect(() => {
        setDateFormat(isDown('md') ? DateFormat.DATE_SHORT : DateFormat.DATE_LONG);
    }, [isDown]);

    const { author, createdAt, topics } = blogPost;

    return (
        <Layout className={styles.infoColumn} direction="column" gap="200">
            <Layout
                direction="column"
                gap="50"
                alignItems="center"
                responsiveDirection={{ md: 'row' }}
                justifyContent="space-between"
            >
                <Layout
                    className={styles.authorLayout}
                    responsiveDirection={{ md: 'row' }}
                    direction="column"
                    alignItems="center"
                    gap="100"
                >
                    <Image
                        src={author.avatar}
                        width={120}
                        height={120}
                        alt="author image"
                        className={styles.authorImage}
                    />
                    <Text size="xl" fontWeight="bold" responsiveSize={{ md: 'm' }} truncate={true}>
                        {author.displayName}
                    </Text>
                </Layout>
                <div className={styles.infoDivider} />
                <Text size="s">{formatUtils.formatDate(createdAt, dateFormat)}</Text>
            </Layout>
            <Layout className={styles.topicsList} direction="row" wrap="wrap" gap="50">
                {topics.map((topic) => (
                    <Chip key={topic} size="s">
                        {topic}
                    </Chip>
                ))}
            </Layout>
        </Layout>
    );
};
